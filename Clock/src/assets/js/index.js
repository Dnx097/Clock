import SetHours from "./SetHours.js";
var body = document.querySelector("body");
var root = document.querySelector(".root_content");

function setDate() {
  let date = new Date();
  let hours = SetHours(date.getHours());
  date.getHours > 17 && date.getHours < 6
    ? (body.style.backgroundImage =
        "URL('../src/assets/img/hills-meadow-landscape-sunny-day_2963-31.avif')")
    : (body.style.backgroundImage =
        "URL('../src/assets/img/night-7112331_1280.webp')");

  let currentTime = `${hours}:${date.getMinutes()}.${date.getSeconds()}`;
  let currentDate = `${
    date.getDay() > 10 ? date.getDay() : `0${date.getDay()}`
  }/${
    date.getMonth() > 10 ? date.getMonth() : `0${date.getMonth()}`
  }/${date.getFullYear()}`;

  let childrens = root.querySelectorAll("*");
  for (const item of childrens) {
    root.removeChild(item);
  }

  let hourNode = document.createElement("h1");
  hourNode.classList.add("contetn_hour", `${date.getHours() > 17 ? "current" : "day"}`);
  let dateNode = document.createElement("h3");
  dateNode.classList.add("content_date", `${date.getHours() > 17 ? "current" : "day"}`);

  let houtTextNode = document.createTextNode(
    `${currentTime} ${
      date.getHours() > 12 || date.getHours() < 24 ? "P.M" : "A.M"
    }`
  );
  let dateTextNode = document.createTextNode(currentDate);

  hourNode.appendChild(houtTextNode);
  dateNode.appendChild(dateTextNode);

  root.appendChild(hourNode);
  root.appendChild(dateNode);
}

setInterval(() => {
    setDate();
}, 1000);
