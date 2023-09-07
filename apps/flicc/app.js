///<reference path="../../typescript/types/main.d.ts" />

Graphics.prototype.setFont4x5Numeric = function () {
  this.setFontCustom(
    atob("CAZMA/H4PgvXoK1+DhPg7W4P1uCEPg/X4O1+BQA"),
    46,
    atob("AgQEAgQEBAQEBAQEAg"),
    5
  );
};
Graphics.prototype.setFont4x5 = function () {
  this.setFontCustom(
    atob(
      "AAAAdBgGAfV8CfyBIiQKrcAMAA6IARcAFXVARxAAwABCEAAIAAGTAPx+BHwAvXoK1+DhPg7W4P1uCEPg/X4O1+ACgACoAIqIBSlAIqIIVQC9VAfR4P1UB0VA/FwP1qD9KAdGYPk+AHwAEHwPk2D4Qg+j4PweB0XA/RAHTeD9FgTWQIfgD4fg8HwPi+DZNgwfAJ1yAA=="
    ),
    32,
    4,
    5
  );
};
const offset = new Date().getTimezoneOffset();
let classDataDay, classData, currentTimeout;

function bigCountdown(remaining, now) {
  g.setFont("4x5Numeric", 19)
    .setFontAlign(0, -1)
    .setColor(1, 1, 1)
    .clear()
    .drawString(remaining, (176 + 19) / 2, 20)
    .setFont("4x5Numeric", 5)
    .drawString(now, (176 + 5) / 2, 176 - 40);
}
function bigTime(h, m) {
  g.setFont("4x5Numeric", 15)
    .setFontAlign(1, -1)
    .setColor(1, 1, 1)
    .clear()
    .drawString(h, 176 - 8 + 15, 8)
    .drawString(m, 176 - 8 + 15, 9 + 75 + 9);
}
function countDown() {
  const remainingTime = 60 - Math.floor((new Date().getTime() % 60000) / 1000);
  Bangle.setLCDPower(1);
  g.setFont("4x5Numeric", 19)
    .setFontAlign(0, 0)
    .setColor(1, 1, 1)
    .clear()
    .drawString(remainingTime + 1, 97.5, 88);
  if (remainingTime > 1) setTimeout(countDown, 1000 - (Date.now() % 1000));
}

let cachedClasses, cachedClassesMinute;
function getClasses(minute, classes) {
  if (cachedClassesMinute == minute) return cachedClasses;
  const applicableClasses = classes.filter((classItem) => {
    return classItem.end > minute;
  });
  const activeClass = applicableClasses.find((classItem) => {
    return classItem.start <= minute;
  });
  const nextClass = applicableClasses.find((classItem) => {
    const timeDifference = classItem.start - minute;
    return timeDifference <= 5;
  });
  cachedClasses = [activeClass, nextClass];
  cachedClassesMinute = minute;
  return cachedClasses;
}

let infoShown = false;
function draw() {
  infoShown = false;
  const now = new Date();
  const nowStr = require("locale").time(now, 1).trim();
  if (classDataDay != now.getDay()) {
    classDataDay = now.getDay();
    classData = JSON.parse(
      require("Storage").open(`classes-${classDataDay}.json`, "r").readLine() ||
        "[]"
    );
    // classData = [
    //   {
    //     name: "Math",
    //     room: "117",
    //     start: ((Math.floor(now.getTime() / 60000) - offset) % (60 * 24)) + 4,
    //     end: ((Math.floor(now.getTime() / 60000) - offset) % (60 * 24)) + 6,
    //   },
    // ];
    // classData = [];
  }
  const currentMinute = Math.floor(now.getTime() / 60000) - offset;
  const minuteOfDay = currentMinute % (60 * 24);
  const classes = getClasses(minuteOfDay, classData);

  if (classes[0]) {
    const remainingMins = classes[0].end - minuteOfDay;
    bigCountdown(remainingMins, nowStr);
    if (remainingMins == 1) {
      Bangle.buzz(500);
      countDown();
    }
  } else {
    if (classes[1]) {
      g.setFont("4x5Numeric", 10)
        .setFontAlign(0, 0)
        .setColor(1, 1, 1)
        .clear()
        .drawString(nowStr, 176 / 2, 70 / 2)
        .fillRect(0, 70, 176, 176);
      g.setColor(0, 0, 0)
        .setFont("4x5", 5)
        .setFontAlign(0, 1)
        .drawString(classes[1].name.toUpperCase(), 176 / 2, 176 - 23 - 25 * 2)
        .drawString(
          "ROOM " + classes[1].room.toUpperCase(),
          176 / 2,
          176 - 16 - 25
        )
        .drawString(
          "IN " + (classes[1].start - minuteOfDay) + " MIN",
          176 / 2,
          176 - 8
        );
    } else {
      bigTime(nowStr.split(":")[0], nowStr.split(":")[1]);
    }
  }
  if (currentTimeout) clearTimeout(currentTimeout);
  currentTimeout = setTimeout(draw, 60000 - (Date.now() % 60000));
}
function drawInfo() {
  infoShown = true;
  const now = new Date();
  const monthName = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEV",
  ][now.getMonth()];
  const dayOfMonth = now.getDate().toString();
  const battery = E.getBattery();
  const datestamp =
    now.getFullYear() +
    "-" +
    (now.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    now.getDate().toString().padStart(2, "0");
  const weatherData = JSON.parse(
    require("Storage").open("weather.json", "r").readLine() || "[]"
  );
  const currentWeather = weatherData.find((weather) => weather[0] == datestamp);
  g.clear()
    .setColor(1, 1, 1)
    .fillRect(0, 0, 176, 16)
    .setColor(0.5, 1, 0.5)
    .fillRect(0, 0, 176 * (battery / 100), 16)
    .setColor(0, 0, 0)
    .setFont("4x5", 3)
    .setFontAlign(0, -1)
    .drawString(battery, 176 / 2, 1);
  g.setFont("4x5", 6)
    .setFontAlign(-1, -1)
    .setColor(1, 1, 1)
    .drawString(`${monthName} ${dayOfMonth}`, 0, 20);
  if (currentWeather) {
    const low = Math.round(currentWeather[2]);
    const high = Math.round(currentWeather[3]);
    let y = 60;
    g.setFont("4x5", 3).drawString(`${low} TO ${high}.`, 0, y);
    for (const line of g.wrapString(currentWeather[1].toUpperCase(), 176)) {
      y += 18;
      g.drawString(line, 0, y);
    }
  }
}
Bangle.on("swipe", (x, y) => {
  if (x != 0) return;
  if (infoShown) draw();
  else drawInfo();
});
Bangle.loadWidgets();
require("widget_utils").hide();
draw();
Bangle.setUI("clock");
