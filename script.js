// displays current date 
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));
console.log("#currentDay");

// moment statement to grab hour of the day
// loop through text boxes, asking if hour matches hour of the day from moment function

var currentHour = moment().format("H");
console.log(currentHour);

var hoursArray = [9, 10, 11, 12, 1, 2, 3, 4, 5]

var timeBlockArray = $(".list-group-item");
console.log(timeBlockArray);

function compareTime() {
    for (var i = 0; i < hoursArray.length; i++);
    console.log(compareTime);
    if (hoursArray[i] === currentHour) {
        $(".list-group-item").addClass('future');
        console.log(compareTime);
    } else hoursArray[i] < currentHour; 
        $(".list-group-item").addClass('past');
        console.log(hoursArray[i])
}
compareTime();