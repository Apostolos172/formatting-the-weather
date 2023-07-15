let day1 = document.getElementById("day1");
day1.classList.remove("active");

let day2 = document.getElementById("day2");
day2.classList.remove("tab-after-active");

let days = document.querySelectorAll(".tab");
days.forEach((element) => {
  element.style.borderBottomColor = "transparent";
});

let day1today = document.getElementsByClassName("tab-day-long")[0];
let day2tomorrow = document.getElementsByClassName("tab-day-long")[1];
let day3 = document.getElementsByClassName("tab-day-long")[2];
// console.log(day3.textContent);

let day3text = day3.textContent.split("/")[0];
// console.log(day3text);

day1today.textContent =
  "" + Number(day3text - 2) + "/" + day3.textContent.split("/")[1];
day2tomorrow.textContent =
  "" + Number(day3text - 1) + "/" + day3.textContent.split("/")[1];

let date = moment();
let currentDate = date.format("D/M");
day1today.textContent = currentDate;
day2tomorrow.textContent = currentDate.add(1, "day");
console.log(currentDate); // "17/06/2022"