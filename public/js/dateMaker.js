console.log("working");

var day1Day = document.getElementById("1");
var day2Day = document.getElementById("2");
var day3Day = document.getElementById("3");
var day4Day = document.getElementById("4");
var day5Day = document.getElementById("5");
var day6Day = document.getElementById("6");
var day7Day = document.getElementById("7");
var day8Day = document.getElementById("8");
var day9Day = document.getElementById("9");
var day10Day = document.getElementById("10");
var day11Day = document.getElementById("11");
var day12Day = document.getElementById("12");
var day13Day = document.getElementById("13");
var day14Day = document.getElementById("14");
// var numVal = parseInt(day1day.id);
// console.log(numVal);
// console.log(day1day);


function dateConverter(num) {
    var newDate = new Date();
    newDate.setDate(newDate.getDate() + num + 6)
    var month = newDate.getMonth() + 1;
    var day = newDate.getDate();
    return ` ${month}/${day}`;
    }

someVariable1= dateConverter(1);
day1Day.textContent= someVariable1;

someVariable2= dateConverter(2);
day2Day.textContent= someVariable2;

someVariable3= dateConverter(3);
day3Day.textContent= someVariable3;

someVariable4= dateConverter(4);
day4Day.textContent= someVariable4;

someVariable5= dateConverter(5);
day5Day.textContent= someVariable5;

someVariable6= dateConverter(6);
day6Day.textContent= someVariable6;

someVariable7= dateConverter(7);
day7Day.textContent= someVariable7;

someVariable8= dateConverter(8);
day8Day.textContent= someVariable8;

someVariable9= dateConverter(9);
day9Day.textContent= someVariable9;

someVariable10= dateConverter(10);
day10Day.textContent= someVariable10;

someVariable11= dateConverter(11);
day11Day.textContent= someVariable11;

someVariable12= dateConverter(12);
day12Day.textContent= someVariable12;

someVariable13= dateConverter(13);
day13Day.textContent= someVariable13;

someVariable14= dateConverter(14);
day14Day.textContent= someVariable14;