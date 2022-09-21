const h2 = document.querySelector("h2");
const userName = document.querySelector("#username");
const submit = document.querySelector("#submit");

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let date = new Date();
  let day = date.getDay();

  h2.textContent = `Hello ${userName.value} today is ${weekDays[day]},${
    day === 0 || day === 6
      ? "it is already weekend"
      : ` there are ${6 - day} days left until the weekend`
  } .
  `;
});
