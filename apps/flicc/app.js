///<reference path="../../typescript/types/main.d.ts" />
require("f_recursive_clock.js").add(Graphics);
require("f_recursive_text.js").add(Graphics);
const offset = new Date().getTimezoneOffset();
const weatherIcons = require("weather_icons.js");

let weatherData = JSON.parse(require("Storage").open("weather.json", "r").readLine() || "[]");
let classDataDay;
let classData;

let cachedClasses;
let cachedClassesMinute;
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
function getTime(now) {
  const hour = now.getHours() % 12 || 12;
  const minute = now.getMinutes().toString().padStart(2, "0");
  return hour + ":" + minute;
}

const buffer = Graphics.createArrayBuffer(240, 80, 1, { msb: true })
  .setFont("RecursiveClock")
  .setFontAlign(0, 0);
function countdown(seconds) {
  buffer.clear().drawString(seconds, 60, 40);
  g.setColor(100 / 255, 230 / 255, 250 / 255).drawImage(buffer, 0, 40, { scale: 2 });
}
let lastTimeUpdate;
function clock(str) {
  buffer.clear().drawString(str, 120, 40);
  g.setColor(100 / 255, 230 / 255, 250 / 255).drawImage(buffer, 0, 80);
}

let lastWidgetUpdate;
function drawWidgets(now, charging) {
  const padding = 10;
  g.clearRect(0, 240 - padding - 19, 240, 240 - padding);
  if (charging) {
    g.setColor(100 / 255, 200 / 255, 100 / 255);
  } else {
    g.setColor(g.theme.fg);
  }
  g.drawPoly([
    padding,
    240 - padding,
    padding + 10,
    240 - padding,
    padding + 10,
    240 - padding - 20,
    padding + 6,
    240 - padding - 20,
    padding + 6,
    240 - padding - 21,
    padding + 4,
    240 - padding - 21,
    padding + 4,
    240 - padding - 20,
    padding,
    240 - padding - 20,
    padding,
    240 - padding,
  ]);
  const battery = E.getBattery();
  const batteryHeight = (battery / 100) * 20;
  for (let currentHeight = 1; currentHeight < batteryHeight; currentHeight++) {
    const drawingAt = 240 - padding - currentHeight;
    if (currentHeight > 0.8 * 20) {
      g.setColor(100 / 255, 200 / 255, 100 / 255);
    } else if (currentHeight < 0.2 * 20) {
      g.setColor(200 / 255, 100 / 255, 100 / 255);
    } else {
      g.setColor(100 / 255, 100 / 255, 200 / 255);
    }
    g.drawLine(11, drawingAt, 19, drawingAt);
  }

  const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][now.getMonth()];
  const dayOfMonth = now.getDate().toString();
  g.setColor(g.theme.fg)
    .setFont("RecursiveText")
    .setFontAlign(1, -1)
    .drawString(`${monthName} ${dayOfMonth}`, 230, 240 - padding - 20);
}
let lastWeatherUpdate;
function drawWeather(now) {
  const datestamp =
    now.getFullYear() +
    "-" +
    (now.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    now.getDate().toString().padStart(2, "0");
  const currentWeather = weatherData.find((weather) => weather[0] == datestamp);
  g.clearRect(0, 55, 240, 55 + 25);
  if (currentWeather) {
    g.setColor(g.theme.fg).setFont("RecursiveText").setFontAlign(-1, -1);
    const info = Math.round(currentWeather[2]) + " - " + Math.round(currentWeather[3]);
    let x = 120 - g.stringWidth(info) / 2;
    const icon = weatherIcons[currentWeather[1]];
    if (icon) {
      x += 19 / 2;
      g.drawImage(icon, x - 20, 57);
    }
    g.drawString(info, x, 55);
  }
}
let lastSubUpdate;
function drawSub(str) {
  g.clearRect(0, 160, 240, 160 + 25);
  g.setColor(g.theme.fg).setFont("RecursiveText").setFontAlign(0, -1).drawString(str, 120, 160);
}

let countingDown;
let lastMode;
function draw(now) {
  countingDown = false;
  if (classDataDay != now.getDay()) {
    classDataDay = now.getDay();
    classData = JSON.parse(
      require("Storage").open(`classes-${classDataDay}.json`, "r").readLine() || "[]"
    );
  }
  const currentMinute = Math.floor(now.getTime() / 60000) - offset;
  const minuteOfDay = currentMinute % (60 * 24);
  const classes = getClasses(minuteOfDay, classData);
  if (classes[0]) {
    const remainingMins = classes[0].end - minuteOfDay;
    const remainingSeconds = Math.floor(60 - ((now.getTime() / 1000) % 60));
    // Draw class
    if (remainingMins == 1) {
      if (remainingSeconds == 30) {
        Bangle.buzz(100);
      }
      if (remainingSeconds == 10) {
        Bangle.buzz(300);
      }
      if (remainingSeconds <= 30) {
        Bangle.setLCDPower(1);
      }
      countdown(remainingSeconds);
      countingDown = true;
      lastMode = 2;
    } else {
      if (lastMode != 1) {
        if (lastMode != 0) {
          g.clear();
          lastWidgetUpdate = 0;
          lastWeatherUpdate = 0;
        }
        lastSubUpdate = 0;
      }
      if (Bangle.isLCDOn()) {
        clock(`${remainingMins}:${remainingSeconds.toString().padStart(2, "0")}`);
        if (currentMinute - lastWidgetUpdate > 3) {
          drawWidgets(now, Bangle.isCharging());
          lastWidgetUpdate = currentMinute;
        }
        if (currentMinute - lastWeatherUpdate > 60) {
          drawWeather(now);
          lastWeatherUpdate = currentMinute;
        }
        if (currentMinute != lastSubUpdate) {
          drawSub(
            `${getTime(now)} - ${Math.floor(classes[0].end / 60) % 12 || 12}:${classes[0].end % 60}`
          );
          lastSubUpdate = currentMinute;
        }
      }
      lastMode = 1;
    }
  } else {
    if (lastMode != 0) {
      if (lastMode != 1) {
        g.clear();
        lastWidgetUpdate = 0;
        lastWeatherUpdate = 0;
      }
      lastSubUpdate = 0;
      lastTimeUpdate = 0;
    }
    if (Bangle.isLCDOn()) {
      if (currentMinute != lastTimeUpdate) {
        clock(getTime(now));
        lastTimeUpdate = currentMinute;
      }
      if (currentMinute - lastWidgetUpdate > 3) {
        drawWidgets(now, Bangle.isCharging());
        lastWidgetUpdate = currentMinute;
      }
      if (currentMinute - lastWeatherUpdate > 60) {
        drawWeather(now);
        lastWeatherUpdate = currentMinute;
      }
      if (currentMinute != lastSubUpdate) {
        drawSub(
          classes[1]
            ? `${classes[1].name} in ${classes[1].room} - ${classes[1].start - minuteOfDay}m`
            : `${Bangle.getHealthStatus("day").steps} steps`
        );
        lastSubUpdate = currentMinute;
      }
    }
    lastMode = 0;
  }
}

Bangle.setUI("clock");
g.clear();
setInterval(() => {
  const now = new Date();
  if (now.getMilliseconds() < 100) {
    draw(now);
    console.log(Date.now() - now.getTime());
  }
  const minutePortion = now.getTime() % (60 * 1000);
  if (minutePortion < 100) {
    g.clearRect(0, 235, 240, 240);
  }
  g.setColor(100 / 255, 230 / 255, 250 / 255).fillRect(
    0,
    235,
    (minutePortion / (60 * 1000)) * 240,
    240
  );
  if (countingDown) {
    g.clearRect(210, 145, 230, 170);
    g.setColor(1, 1, 1)
      .setFont("RecursiveText")
      .setFontAlign(-1, -1)
      .drawString("." + Math.floor(10 - now.getMilliseconds() / 100), 200, 145);
  }
}, 100);
Bangle.on("lcdPower", () => {
  draw(new Date());
});
Bangle.on("charging", (charging) => {
  drawWidgets(new Date(), charging);
});
draw(new Date());
