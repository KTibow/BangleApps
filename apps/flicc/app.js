///<reference path="../../typescript/types/main.d.ts" />

Graphics.prototype.setFontgooglesansflex = function () {
  // Actual height 78 (79 - 2)
  return this.setFontCustom(
    E.toString(
      require("heatshrink").decompress(
        atob(
          "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"
        )
      )
    ),
    46,
    80,
    80 | 65536
  );
};
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
function clearSpace1(char, x, y) {
  "jit";
  g.setColor(0, 0, 0);
  g.drawString(char, x - 4, y);
  g.drawString(char, x, y - 4);
  if (char == "1") {
    g.drawString(char, x - 2, y - 2);
    g.drawString(char, x - 2, y + 2);
  }
  if (char == "2") {
    g.drawString(char, x - 2, y + 2);
    g.drawString(char, x, y + 4);
  }
  if (char == "3") {
    g.drawString(char, x - 2, y - 2);
    g.drawString(char, x - 2, y + 2);
  }
  if (char == "5") {
    g.drawString(char, x - 2, y - 2);
    g.drawString(char, x - 2, y + 2);
  }
  if (char == "7") {
    g.drawString(char, x - 2, y + 2);
    g.drawString(char, x, y + 4);
  }
  if (char == "9") {
    g.drawString(char, x, y + 4);
  }
}
function clearSpace2(char, x, y) {
  "jit";
  g.setColor(0, 0, 0);
  g.drawString(char, x - 4, y);
  g.drawString(char, x, y - 4);
  if (char != "0") g.drawString(char, x - 2, y - 2);
}
function clearSpace3(char, x, y, isBlocked) {
  "jit";
  g.setColor(0, 0, 0);
  g.drawString(char, x - 4, y);
  g.drawString(char, x, y - 4);
  if (char == "4" || (isBlocked && char != "0"))
    g.drawString(char, x - 2, y - 2);
  if (isBlocked && char != "0") g.drawString(char, x - 2, y + 2);
  if (isBlocked && char != "0") g.drawString(char, x, y + 4);
}
function bigTime(h, m) {
  "jit";
  const hPad = h.toString().padStart(2, "0");
  g.setFont("googlesansflex", 1).setFontAlign(0, 0).clear();

  g.setColor(83 / 255, 100 / 255, 1).drawString(
    hPad[0],
    176 / 2 - 30,
    176 / 2 - 36
  );

  if (hPad[0] != "1") clearSpace1(hPad[1], 176 / 2 + 30, 176 / 2 - 36);
  g.setColor(1, 1, 1).drawString(hPad[1], 176 / 2 + 30, 176 / 2 - 36);

  clearSpace2(m[0], 176 / 2 - 30, 176 / 2 + 36);
  g.setColor(1, 1, 1).drawString(m[0], 176 / 2 - 30, 176 / 2 + 36);

  clearSpace3(m[1], 176 / 2 + 30, 176 / 2 + 36, m[0] != "1");
  g.setColor(83 / 255, 100 / 255, 1).drawString(
    m[1],
    176 / 2 + 30,
    176 / 2 + 36
  );
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
      // 1. class name, 25 high
      // 2. padding, 5 high
      // 3. room, 25 high
      // 4. padding, 5 high
      // 5. countdown, 34 high
      // total; 94 high
      g.setColor(1, 1, 1)
        .setFont("4x5", 5)
        .setFontAlign(0, -1)
        .clear()
        .drawString(classes[1].name.toUpperCase(), 176 / 2 + 2, 41)
        .drawString(classes[1].room.toUpperCase(), 176 / 2 + 2, 71)
        .fillCircle(176 / 2, 118, 17)
        .setColor(0, 0, 0)
        .setFontAlign(0, 0)
        .drawString(classes[1].start - minuteOfDay, 176 / 2 + 2, 118);
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
    "DEC",
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
Bangle.setUI("clock");
require("widget_utils").hide();
draw();
