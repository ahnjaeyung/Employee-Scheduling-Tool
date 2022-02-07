let calA = new Calendar({
  id: "#calendar-a",
  theme: "basic",
  // primaryColor: '#FF6E35',
  // headerBackgroundColor: '#FF6E35',
  border: "5px solid black",
  weekdayType: "long-upper",
  monthDisplayType: "long",
  headerColor: "yellow",
  headerBackgroundColor: "black",
  calendarSize: "small",
  layoutModifiers: ["month-left-align"],
  eventsData: [
    {
      id: 1,
      name: "",
      start: "2022-02-13T06:00:00",
      end: "2022-02-26T20:30:00"
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

