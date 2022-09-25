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
  buf.setFont("RecursiveClock");
  buf.setFontAlign(0, 0);
  buf.setColor(g.theme.fg);
  buf.drawString(currentTime, 120, 40);
  g.drawImage(buf, 0, y);
}
setInterval(() => {
  const now = new Date();
  const currentMinute = Math.floor(now.getTime() / 1000 / 60);
  if (currentMinute != lastTimeUpdate) {
    drawTime(80, now);
    lastTimeUpdate = currentMinute;
  }
}, 100);
g.clear();
