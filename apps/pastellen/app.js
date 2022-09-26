let lastInfoUpdate = 0;
let lastTimeUpdate = 0;
require("f_recursive_clock.js").add(Graphics);
require("f_recursive_text.js").add(Graphics);
const hoursTo12 = (hour) => hour % 12 || 12;
function drawTime(y, now) {
  const buf = Graphics.createArrayBuffer(240, 80, 1, { msb: true });
  const hourStr = hoursTo12(now.getHours());
  const minStr = now.getMinutes().toString().padStart(2, "0");
  const currentTime = `${hourStr}:${minStr}`;
  buf.setFont("RecursiveClock").setFontAlign(0, 0).drawString(currentTime, 120, 40);
  g.setColor(g.theme.fg).drawImage(buf, 0, y);
}
function drawBottomWidgets(y, now) {
  g.clearRect(0, y - 21, 240, y);
  g.setColor(g.theme.fg).drawPoly([
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
  const charging = Bangle.isCharging();
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
    g.setColor(g.theme.bgH).drawLine(11, drawingAt, 19, drawingAt);
  }
  g.setColor(g.theme.fg)
    .setFont("RecursiveText")
    .setFontAlign(-1, 1)
    .drawString(Math.floor(battery) + (charging ? "+" : "%"), 20, y);

  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][now.getDay()];
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
    .setFontAlign(1, 1)
    .drawString(`${dayOfWeek} ${monthName} ${dayOfMonth}`, 230, y);
}
setInterval(() => {
  const now = new Date();
  const currentMinute = Math.floor(now.getTime() / 1000 / 60);
  if (currentMinute != lastTimeUpdate) {
    drawTime(80, now);
    lastTimeUpdate = currentMinute;
  }
  const minutePortion = now.getTime() % (1000 * 60);
  if (minutePortion < 100) {
    g.setColor(g.theme.bg).drawLine(0, 160, 240, 160);
  }
  g.setColor(g.theme.bgH).drawLine(0, 160, (minutePortion / 1000 / 60) * 240, 160);
  if (currentMinute - lastInfoUpdate > 5) {
    drawBottomWidgets(230, now);
    lastInfoUpdate = currentMinute;
  }
}, 100);
g.clear();
