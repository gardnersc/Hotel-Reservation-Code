var fn = document.getElementById("firstName");
var ln = document.getElementById("lastName");
var nr = document.getElementById("numberOfRooms");
var availability = getRandomNumber();
var roomType = ['Workout', 'Relaxation', 'Playtime'];

for (var i=0; i < roomType.length; i++){
    document.getElementById('roomType').innerHTML += "<option value='" + roomType[i] + "'>" + roomType[i] +"</option>";
}
function displayValues(){
    
}