locations = {
  "Fleet Street" : {"Choose a Room...":0,"Boot":10,"Iron":16,"Tophat":16,"Racecar":8,"Battleship":16,"Thimble":6,"Tophat and Iron":32,"Wheelbarrow":10,"Cannon":6},
  "Record Hall" : {"Choose a Room...":0,"Doc":12, "Data":12, "File":8, "Form":8},
  "Choose a location..." : {"Choose a location first...":0}
  }

//populates dropdown select boxes meeting room form
function populate (s1, s2) {
  var s1 = document.getElementById(s1)
  var s2 = document.getElementById(s2)
  var rooms = s1.value
  switch (rooms) {
  case "Fleet Street" :
  populateRoom(locations["Fleet Street"], s2)
  break;
  case "Record Hall" :
  populateRoom(locations["Record Hall"], s2)
  break;
  case "Choose a location..." :
  populateRoom(locations["Choose a location..."], s2)
  break;
  }
  function populateRoom(rooms, s2) {
  $('#inputRoom option').remove();
       for (var room in rooms) {
          var newOption = document.createElement("option");
          newOption.value = room;
          newOption.innerHTML = room;
          s2.options.add(newOption);
          }
      }
  }