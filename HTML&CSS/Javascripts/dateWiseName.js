const getDay = function () {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thrusday",
      "Friday",
      "Saturday",
    ];
    const today = new Date().getDay();
    return days[today];
  };
  console.log(`Today is${getDay()}`);