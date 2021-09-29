// displays current date 
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));
console.log("#currentDay");

// moment statement to grab hour of the day
// loop through text boxes, asking if hour matches hour of the day from moment function

var currentHour = moment().format("H");
console.log(currentHour);

var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]

var timeBlockArray = $(".list-group-item");
console.log(timeBlockArray);

function compareTime() {
    console.log(hoursArray[0])
    for (var i = 0; i < hoursArray.length; i++){
        console.log(timeBlockArray[i]);
    console.log(currentHour);
        if (hoursArray[i] == currentHour) {
            console.log('currentTime')
            timeBlockArray[i].setAttribute('style', 'background-color: #ff6961');
        } else if (hoursArray[i] < currentHour) {
            console.log('past')
            timeBlockArray[i].setAttribute('style', 'background-color: #d3d3d3');
    } else if (hoursArray[i] > currentHour) {
        console.log('future')
        timeBlockArray[i].setAttribute('style', 'background-color: #77dd77');
    }
}
}
compareTime();
// set local storage
$('.btn').on('click', function(event){
    event.preventDefault();
    var userInput = $('.form-control');
    console.log($('.form-control')[0].value);
    for (var i = 0; i < userInput.length; i++) {
        var dataStorage = 'hour' + i
        console.log(dataStorage);
        var currentData = userInput[i].value;
        console.log(currentData);
        localStorage.setItem(dataStorage, currentData);
    }
})
// get local storage
function retrievedUserData() {
    var inputsEl = $('.form-control');
    for (var i = 0; i < inputsEl.length; i++) {
        var dataStorage = 'hour' + i;
        inputsEl[i].value = localStorage.getItem(dataStorage);
    }
} 
retrievedUserData();