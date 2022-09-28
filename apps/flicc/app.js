let lastInfoUpdate = 0;
let lastTimeUpdate = 0;
require("f_recursive_clock.js").add(Graphics);
require("f_recursive_text.js").add(Graphics);
const weatherIcons = require("weather_icons.js");
let weatherData = JSON.parse(require("Storage").open("weather.json", "r").readLine() || "[]");

const hoursTo12 = (hour) => hour % 12 || 12;
function drawTime(y, now) {
  const buf = Graphics.createArrayBuffer(240, 80, 1, { msb: true });
  const hourStr = hoursTo12(now.getHours());
  const minStr = now.getMinutes().toString().padStart(2, "0");
  const currentTime = `${hourStr}:${minStr}`;
  buf.setFont("RecursiveClock").setFontAlign(0, 0).drawString(currentTime, 120, 40);
  g.setColor(g.theme.fg).drawImage(buf, 0, y);
}
function drawWidgets(y, now, charging) {
  g.clearRect(0, y - 21, 240, y);
  if (charging) {
    g.setColor(100 / 255, 200 / 255, 100 / 255);
  } else {
    g.setColor(g.theme.fg);
  }
  g.drawPoly([
    10,
    y,
    20,
    y,
    20,
    y - 20,
    16,
    y - 20,
    16,
    y - 21,
    14,
    y - 21,
    14,
    y - 20,
    10,
    y - 20,
    10,
    y,
  ]);
  const battery = E.getBattery();
  const batteryHeight = (battery / 100) * 20;
  for (let currentHeight = 1; currentHeight < batteryHeight; currentHeight++) {
    const drawingAt = y - currentHeight;
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
    .drawString(`${monthName} ${dayOfMonth}`, 230, y - 20);

  const datestamp =
    now.getFullYear() +
    "-" +
    (now.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    now.getDate().toString().padStart(2, "0");
  const currentWeather = weatherData.find((weather) => weather.datetime == datestamp);
  if (currentWeather) {
    g.setColor(g.theme.fg).setFont("RecursiveText").setFontAlign(-1, -1);
    const info = currentWeather.low + " - " + currentWeather.high;
    let x = 120 - g.getStringWidth(info) / 2;
    const icon = weatherIcons[currentWeather.icon];
    if (icon) {
      x += 19 / 2;
    }
    g.drawImage(icon, x - 20, 60);
    g.drawString(info, x, 60);
  }

  g.clearRect(0, 160, 240, 160 + 25);
  g.setColor(g.theme.fg)
    .setFont("RecursiveText")
    .setFontAlign(0, -1)
    .drawString(`Steps: ${Bangle.getStepCount()}`, 120, 160);
}

let skippedClearing = false;
function draw() {
  if (!Bangle.isLCDOn()) {
    if (Date.now() % (1000 * 60) < 100) {
      skippedClearing = true;
    }
    return;
  }
  const now = new Date();
  const currentMinute = Math.floor(now.getTime() / 1000 / 60);
  const minutePortion = now.getTime() % (1000 * 60);
  if (currentMinute != lastTimeUpdate) {
    drawTime(80, now);
    lastTimeUpdate = currentMinute;
  }
  if (minutePortion < 100 || skippedClearing) {
    g.setColor(g.theme.bg).drawLine(0, 160, 240, 160);
    skippedClearing = false;
  }
  g.setColor(g.theme.bgH).drawLine(0, 160, (minutePortion / 1000 / 60) * 240, 160);
  if (currentMinute - lastInfoUpdate > 5) {
    drawWidgets(230, now, Bangle.isCharging());
    lastInfoUpdate = currentMinute;
  }
}

setInterval(() => {
  draw();
}, 100);
Bangle.on("charging", (charging) => {
  drawWidgets(230, new Date(), charging);
});
g.clear();
