//google maps API and places request
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 51.517783, lng: -0.107769},
    zoom: 14
  });
  const request = {
    placeId: 'ChIJxUdm0LIEdkgRFZIaT5DLJJY',
    fields: ["name", "formatted_address", "rating", "geometry"],
  };
  const infowindow = new google.maps.InfoWindow();
  const infowindowTwo = new google.maps.InfoWindow();
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
      const infowindowTwo = new google.maps.InfoWindow();
      const markerTwo = new google.maps.Marker({
        position: {lat:51.519900, lng: -0.110810},
        map,
        title: "Java Java @ The Archive",
      });
      google.maps.event.addListener(marker, "click", () => {
        const content = document.createElement("div");
        const nameElement = document.createElement("h6");
        nameElement.textContent = place.name;
        content.appendChild(nameElement);
        const placeIdElement = document.createElement("p");
        placeIdElement.textContent = "Rating:" + place.rating;
        content.appendChild(placeIdElement);
        const getDirectionsElement = document.createElement("a");
        getDirectionsElement.textContent = "Get Directions";
        getDirectionsElement.href = "https://goo.gl/maps/h3fRGPtas41Jcgg78"
        content.appendChild(getDirectionsElement);
        const placeAddressElement = document.createElement("p");
        placeAddressElement.textContent = place.formatted_address;
        content.appendChild(placeAddressElement);
        infowindow.setContent(content);
        infowindow.open(map, marker);
      });
      google.maps.event.addListener(markerTwo, "click", () => {
        const content = document.createElement("div");
        const nameElement = document.createElement("h6");
        nameElement.textContent = "Java Java @ The Archive"
        content.appendChild(nameElement);
        const placeIdElement = document.createElement("p");
        placeIdElement.textContent = "Rating:" + "5.0";
        content.appendChild(placeIdElement);
        const getDirectionsElement = document.createElement("a");
        getDirectionsElement.textContent = "Get Directions";
        getDirectionsElement.href = "https://goo.gl/maps/Keu2AAXKPdrYf2Y19";
        content.appendChild(getDirectionsElement);
        const placeAddressElement = document.createElement("p");
        placeAddressElement.textContent = "Guilford Hotel, 16A Baldwin's Gardens, London EC1N 7RJ";
        content.appendChild(placeAddressElement);
        infowindowTwo.setContent(content);
        infowindowTwo.open(map, markerTwo);
      });
    }
  });
}