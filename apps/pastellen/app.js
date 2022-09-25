let lastInfoUpdate = 0;
let lastTimeUpdate = 0;
require("f_recursive_clock").add(Graphics);
require("f_recursive_text").add(Graphics);
const hoursTo12 = (hour) => hour % 12 || 12;
setInterval(() => {
  let now = Date.now();
  let currentMinute = Math.floor(Date.now() / 1000 / 60);
  if (currentMinute != lastTimeUpdate) {
    let buf = Graphics.createArrayBuffer(240, 80, 1, { msb: true });
    let currentTime = `${hoursTo12(now.getHour())}:${now.getMinute()}`;
    buf.setFont("RecursiveClock");
    buf.setFontAlign(0, 0);
    buf.setColor(g.theme.fg);
    buf.drawString(currentTime, 120, 40);
    g.drawImage(buf, 0, 80);
    lastTimeUpdate = currentMinute;
  }
}, 100);
g.clear();
