let calA = new Calendar({
  id: "#calendar-a",
  theme: "basic",
  border: "5px solid black",
  weekdayType: "long-upper",
  monthDisplayType: "long",
  headerColor: "blue",
  headerBackgroundColor: "yellow",
  calendarSize: "small",
  layoutModifiers: ["month-left-align"],
  eventsData: [
    {
      id: 1,
      name: "",
      start: dateConverter2(1),
      end: dateConverter2(14),
    },
  ],
  dateChanged: (currentDate, events) => {
    console.log("date change", currentDate, events);
    console.log("testing");
  },
  monthChanged: (currentDate, events) => {
    console.log("month change", currentDate, events);
  }
});

function dateConverter2(num) {
  var newDate = new Date();
  newDate.setDate(newDate.getDate() + (0 - 1 - newDate.getDay() +7) % 7 + num);
  // console.log(newDate);
  // // newDate.setDate(newDate.getDate() + num + 6)
  // var month = newDate.getMonth() + 1;
  // var day = newDate.getDate();
  // return ` ${month}/${day}`;
  return newDate;
  }