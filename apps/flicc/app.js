///<reference path="../../typescript/types/main.d.ts" />

Graphics.prototype.setFont4x5Numeric = function (scale) {
  this.setFontCustom(
    atob("CAZMA/H4PgvXoK1+DhPg7W4P1uCEPg/X4O1+BQA"),
    46,
    atob("AgQEAgQEBAQEBAQEAg"),
    5 | (scale << 8)
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
    .drawString(h, 176 - 10 + 15, 10)
    .drawString(m, 176 - 10 + 15, 176 - 10 - 15 * 5);
}
function countDown() {
  const remainingTime = 60 - Math.floor((new Date().getTime() % 60000) / 1000);
  if (remainingTime <= 30) Bangle.setLCDPower(1);
  g.setFont("4x5Numeric", 19).setFontAlign(0, 0).setColor(1, 1, 1).clear().drawString(a, 97.5, 88);
  if (remainingTime > 0) setTimeout(countDown, 1000 - (Date.now() % 1000));
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
    return classItem.start > minute;
  });
  cachedClasses = [activeClass, nextClass];
  cachedClassesMinute = minute;
  return cachedClasses;
}

function draw() {
  const now = new Date();
  const nowStr = require("locale").time(now, 1).trim();
  if (classDataDay != now.getDay()) {
    classDataDay = now.getDay();
    classData = JSON.parse(
      require("Storage").open(`classes-${classDataDay}.json`, "r").readLine() || "[]"
    );
    // classData = [
    //   {
    //     name: "Math",
    //     room: "117",
    //     start: 400,
    //     end: ((Math.floor(now.getTime() / 60000) - offset) % (60 * 24)) + 2,
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
    bigTime(nowStr.split(":")[0], nowStr.split(":")[1]);
  }
  if (currentTimeout) clearTimeout(currentTimeout);
  currentTimeout = setTimeout(draw, 60000 - (Date.now() % 60000));
}
Bangle.loadWidgets();
require("widget_utils").hide();
draw();
Bangle.setUI("clock");
