function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 51.517783, lng: -0.107769},
    zoom: 15
  });
  const request = {
    placeId: 'ChIJxUdm0LIEdkgRFZIaT5DLJJY',
    fields: ["name", "formatted_address", "rating", "geometry"],
  };
  const infowindow = new google.maps.InfoWindow();
  const service = new google.maps.places.PlacesService(map);
  service.getDetails(request, (place, status) => {
    if (
      status === google.maps.places.PlacesServiceStatus.OK &&
      place &&
      place.geometry &&
      place.geometry.location
    ) {
      const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
      });
      google.maps.event.addListener(marker, "click", () => {
        const content = document.createElement("div");
        const nameElement = document.createElement("h6");
        nameElement.textContent = place.name;
        content.appendChild(nameElement);
        const placeIdElement = document.createElement("p");
        placeIdElement.textContent = "Rating:" + place.rating;
        content.appendChild(placeIdElement);
        const placeAddressElement = document.createElement("p");
        placeAddressElement.textContent = place.formatted_address;
        content.appendChild(placeAddressElement);
        infowindow.setContent(content);
        infowindow.open(map, marker);
      });
    }
  });
}