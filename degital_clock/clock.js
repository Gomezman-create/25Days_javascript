const clockElement = document.querySelector(".Hour");
const date = document.querySelector(".Date");
function Clock() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const now = new Date();
  // const dayName = days[now.getDay()];
  // const monthName = months[now.getMonth()];
  date.textContent =
    days[now.getDay()] +
    " " +
    months[now.getMonth()] +
    " " +
    now.getDate() +
    " " +
    now.getMonth() +
    " " +
    now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(() => {
  Clock();
}, 400);
