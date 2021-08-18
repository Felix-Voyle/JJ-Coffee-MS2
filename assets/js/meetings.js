locations = {
  "Fleet Street" : {"Choose a Room...":0,"Boot":10,"Iron":16,"Tophat":16,"Racecar":8,"Battleship":16,"Thimble":6,"Tophat and Iron":32,"Wheelbarrow":10,"Cannon":6},
  "Record Hall" : {"Choose a Room...":0,"Doc":12, "Data":12, "File":8, "Form":8},
  "Choose a location..." : {"Choose a location first...":0}
  }

//populates dropdown select boxes meeting room form
function populate (location, roomSelect, numberPeople) {
  var location = document.getElementById(location)
  var roomSelect = document.getElementById(roomSelect)
  var numberPeople = document.getElementById(numberPeople)
  var rooms = location.value
  switch (rooms) {
  case "Fleet Street" :
  populateRoom(locations["Fleet Street"], roomSelect)
  break;
  case "Record Hall" :
  populateRoom(locations["Record Hall"], roomSelect)
  break;
  case "Choose a location..." :
  populateRoom(locations["Choose a location..."], roomSelect)
  $('#numberPeople option').remove();
  var placementOption = document.createElement("option");
  placementOption.value = "";
  placementOption.innerHTML = "Choose a room first...";
  numberPeople.options.add(newOption);
  break;
  }
  function populateRoom(rooms, roomSelect) {
  $('#inputRoom option').remove();
       for (var room in rooms) {
          var newOption = document.createElement("option");
          newOption.value = room;
          newOption.innerHTML = room;
          roomSelect.options.add(newOption);
          }
      }
  }

// populates choose number of people
function populateNumbers(room, numberPeople, location) {
  $('#numberPeople option').remove();
  var roomSelect = document.getElementById(room)
  var numberPeople = document.getElementById(numberPeople)
  var location = document.getElementById(location).value
  var room = roomSelect.value
  var maxNumber = (locations[location][room])
  var placementText = document.createElement("option");
  if (room != "choose a room...") {
     placementText.value = ""
       placementText.innerHTML = "Choose number of people..."
       numberPeople.options.add(placementText);
  for (i=1; i<=maxNumber; i++) {
      var newOption = document.createElement("option");
          newOption.value = i;
          newOption.innerHTML = i;
          numberPeople.options.add(newOption);
      }
    }
  }

// populates choose time 
var select = document.getElementById("inputTime");
var options = ["9", "9", "10", "10", "11", "11", "12", "12", "13", "13", "14", "14", "15", "15", "16", "16", "17", "17",];
for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
    if (i % 2) {
    el.textContent = opt + ':30'
    el.value = opt + ':30'
    } else {
    el.textContent = opt + ':00'
    el.value = opt + ':00'
    }
}

// Validates form
function validateForm() {
  let location = document.getElementById('inputLocation').value
  let room = document.getElementById('inputRoom').value
  let people = document.getElementById('numberPeople').value
  let time = document.getElementById('inputPeople').value
  if (location == "Choose a location...") {
    alert("Choose a location");
    return false;
  } else if (room == "Choose a room...") {
     alert("Choose a room");
    return false; 
  } else if (people == "Choose number of people...") {
    alert("Choose number of people");
   return false; 
 } else if (time == "Choose a time...") {
    alert("Choose a time");
   return false; 
 }
}


function sendMail(meetingRoom) {
  emailjs.send('service_dx782ov', 'Meetings', {
    "from_name": meetingRoom.Name.value,
    "email": meetingRoom.Email.value,
    "location": meetingRoom.inputLocation.value,
    "room": meetingRoom.inputRoom.value,
    "number": meetingRoom.numberPeople.value,
    "time": meetingRoom.inputTime.value,
    "date": meetingRoom.date.value,
    "message": meetingRoom.FormTextarea.value
  })
  .then(
      function(response) {
          console.log("SUCCESS", response);
          $('#meetingRoom').style.display = "none"
          $('#successMsg').style.display = "block"
      },
      function(error) {
          console.log("FAILED", error);
      }
  );
  return false; 
}
