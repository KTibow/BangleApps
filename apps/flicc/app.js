///<reference path="../../typescript/types/main.d.ts" />

Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};
let classDataDay,
  classData,
  drawTimeout,
  colours = [
    "#f00",
    "#00f",
    "#0f0",
    "#ff0",
    "#f0f",
    "#0ff",
    "#8f0",
    "#f08",
    "#f80",
    "#80f",
    "#0f8",
    "#08f",
  ],
  digits = [
    E.toArrayBuffer(atob("BQcB/Gtax+A=")),
    E.toArrayBuffer(atob("BQeCAX9c1zXNc1zX9A==")),
    E.toArrayBuffer(atob("BQcB/Hsbx+A=")),
    E.toArrayBuffer(atob("BQcB/Hsex+A=")),
    E.toArrayBuffer(atob("BQeCAf/zPM8D/Nc1/A==")),
    E.toArrayBuffer(atob("BQcB/G8ex+A=")),
    E.toArrayBuffer(atob("BQcB/G8ax+A=")),
    E.toArrayBuffer(atob("BQeCAf/wP81zXNc1/A==")),
    E.toArrayBuffer(atob("BQcB/Gsax+A=")),
    E.toArrayBuffer(atob("BQcB/Gsex+A=")),
  ];
function countDown() {
  const remainingTime = 60 - Math.floor((new Date().getTime() % 60000) / 1000);
  Bangle.setLCDPower(1);
  g.setFont("Vector", 100)
    .setFontAlign(0, 0)
    .setColor(g.theme.fg)
    .setBgColor(g.theme.bg)
    .clear()
    .drawString(remainingTime + 1, 95, 100);
  if (remainingTime > 1) setTimeout(countDown, 1000 - (Date.now() % 1000));
  else
    setTimeout(
      () => {
        g.setFont("Vector", 100)
          .setFontAlign(0, 0)
          .setColor(g.theme.fg)
          .setBgColor(g.theme.bg)
          .clear()
          .drawString("1", 95, 100);
      },
      900 - (Date.now() % 1000),
    );
}
function getDate() {
  const d = new Date();
  const months = [
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
  ];
  return months[d.getMonth()] + " " + d.getDate();
}
function draw() {
  const now = new Date(),
    offset = now.getTimezoneOffset();
  if (classDataDay != now.getDay()) {
    classDataDay = now.getDay();
    classData = JSON.parse(
      require("Storage").open(`classes-${classDataDay}.json`, "r").readLine() ||
        "[]",
    );
    // classData = [
    //   {
    //     name: "Math",
    //     room: "117",
    //     start: ((Math.floor(now.getTime() / 6e4) - offset) % 1440) + 0,
    //     end: ((Math.floor(now.getTime() / 6e4) - offset) % 1440) + 2,
    //   },
    // ];
  }
  g.clear();
  for (let i_x = 0; i_x < num_squares_w; i_x++)
    for (let i_y = 0; i_y < num_squares_h; i_y++) {
      let x =
          0 === i_x
            ? 0
            : i_x === num_squares_w - 1
              ? g.getWidth() - s - o_w
              : o_w + i_x * s,
        x2 =
          i_x === num_squares_w - 1
            ? g.getWidth()
            : 0 === i_x
              ? o_w + s
              : o_w + i_x * s + s,
        y =
          0 === i_y
            ? 0
            : i_y === num_squares_h - 1
              ? g.getHeight() - s - o_h
              : o_h + i_y * s,
        y2 =
          i_y === num_squares_h - 1
            ? g.getHeight()
            : 0 === i_y
              ? o_h + s
              : o_h + i_y * s + s;
      g.setColor(colours.sample()).fillRect(x, y, x2, y2);
    }
  const minuteOfDay = (Math.floor(now.getTime() / 6e4) - offset) % 1440;
  let activeClass, nextClass;
  if (minuteOfDay >= 300) {
    const applicableClasses = classData.filter(
      (classItem) => classItem.end > minuteOfDay,
    );
    activeClass = applicableClasses.find(
      (classItem) => classItem.start <= minuteOfDay,
    );
    nextClass = applicableClasses.find(
      (classItem) => classItem.start - minuteOfDay <= 8,
    );
  }
  if (activeClass) {
    const remainingMins = activeClass.end - minuteOfDay;
    g.setBgColor(g.theme.fg);
    g.setColor(g.theme.bg);
    if (remainingMins == 1) {
      Bangle.buzz(500);
      countDown();
    } else if (remainingMins < 100) {
      g.drawImage(
        digits[Math.floor(remainingMins / 10)],
        (mid_x - 5) * s + o_w,
        (mid_y - 3) * s + o_h,
        { scale: s },
      );
      g.drawImage(
        digits[remainingMins % 10],
        (mid_x + 1) * s + o_w,
        (mid_y - 3) * s + o_h,
        { scale: s },
      );
      g.setFont("Vector", s + o_h)
        .setFontAlign(-1, 1)
        .setColor(g.theme.bg)
        .fillRect(0, 176 - s - o_h, o_w + s * 5, 176)
        .setColor(g.theme.fg)
        .drawString(getDate(), 4, 176);
    }
  } else {
    let t = require("locale").time(now, 1),
      hour = parseInt(t.split(":")[0]),
      minute = parseInt(t.split(":")[1]);
    g.setBgColor(g.theme.fg);
    g.setColor(g.theme.bg);

    if (nextClass) {
      g.drawImage(digits[Math.floor(hour / 10)], 0, s + o_h, { scale: s });
      g.drawImage(digits[hour % 10], 42, s + o_h, {
        scale: s,
      });
      g.drawImage(digits[Math.floor(minute / 10)], 84, s + o_h, {
        scale: s,
      });
      g.drawImage(digits[minute % 10], 126, s + o_h, {
        scale: s,
      });
      g.fillRect(0, 176 - (o_h + s * 2), 176, 176)
        .setColor(g.theme.fg)
        .setFont("Vector", o_h + s * 2)
        .setFontAlign(0, 1)
        .drawString(`Get to ${nextClass.room}`, 176 / 2, 176);
    } else {
      g.drawImage(
        digits[Math.floor(hour / 10)],
        (mid_x - 5) * s + o_w,
        (mid_y - 7) * s + o_h,
        { scale: s },
      );
      g.drawImage(
        digits[hour % 10],
        (mid_x + 1) * s + o_w,
        (mid_y - 7) * s + o_h,
        { scale: s },
      );
      g.drawImage(
        digits[Math.floor(minute / 10)],
        (mid_x - 5) * s + o_w,
        (mid_y + 1) * s + o_h,
        { scale: s },
      );
      g.drawImage(
        digits[minute % 10],
        (mid_x + 1) * s + o_w,
        (mid_y + 1) * s + o_h,
        { scale: s },
      );
    }
  }
  if (drawTimeout) {
    clearTimeout(drawTimeout);
  }
  drawTimeout = setTimeout(draw, 60000 - (Date.now() % 60000));
}
let s = Math.floor(g.getHeight() / 17),
  num_squares_w = Math.round(g.getWidth() / s) - 1,
  num_squares_h = Math.round(g.getHeight() / s) - 1,
  o_w = Math.floor((g.getWidth() - num_squares_w * s) / 2),
  o_h = Math.floor((g.getHeight() - num_squares_h * s) / 2),
  mid_x = Math.floor(num_squares_w / 2),
  mid_y = Math.floor((num_squares_h - 1) / 2);
Bangle.setUI({
  mode: "clock",
});
Bangle.loadWidgets();
require("widget_utils").swipeOn();
setTimeout(draw, 200);
