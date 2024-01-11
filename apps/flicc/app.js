///<reference path="../../typescript/types/main.d.ts" />

Graphics.prototype.setFontgooglesansflex = function () {
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
Graphics.prototype.setFontinflate = function () {
  return this.setFontCustom(
    E.toString(
      require("heatshrink").decompress(
        atob(
          "AH4A/AAMD+AKIh/4BREf/gKIn/+BSn/BVQ2Jj4KKMRJ4KgfgaH4A/ADEOBRN+V5LQJh4KJv4KIgf/BREf/7mI///4AJGg4fJn//+AJGgIfBwBUH//8KhH/8BUI/50ID7x0/OixUID4JUHL4T/ID5IKBD5EAOhAABOg4A/ACTxBXg7mBAAK9GcwIABPwrmCAASUEYwIADVQgfDEIwJEZYgqFFghKDAAZOCGoo3ENQIAFOARAFIQl/BQxCCBI//wBLHJoQKKgYKI8BhHAAPwBRRsHNwQKVQQ6ECBSqYHBQ2AT4n+BQT3DNIQKD+DsFBQbgCBRbBCBQfABSggKGxRMKMRQ3DAoQKEV7gKKfkBbCAA3wBRPggYKJQ4QAG4AKJwCIDBQ9/BQ6eBTQ/+BQKEH/gKBNw7LCLA7sCJo7VCIQ4JCIQxACe4iXDBQYsFFQYhFD4hOFJQQAEMoJfCAH4ARPwgAEg7KCNY5/GRogKIYoOABQ6WBBQ6iCBQ7PCBQ6sBBREfBSjkCBQ5WBMRDuCBI0BBIKDHBQSZHNgX4Hga0CNgQFCHYXgBQpbCGIR3C+AkCAAWABQX4DwQAC8AbDAAvwBRP4BRP8RoQKR/wK/BQJiJBRX8TIQKHXQSOHWwoKEeIQAGbgLCFAAXAcQgAEfohAFBQMAFRAABLIoUDBYvwBIgA/AH4Akv4JIgbqCAAzmBaoYFBwDODZgc/CAcf//4ewgFCB4IECGAP//xACBQYqBAAIaD/glDAAI3BBQglBAAPAgIKEEoIKIBIRNBHYQKBB4QAB+AKEIAYKBAoQKBOIIAC/AKEJYYKBCAQKBJYYKGJYYGBBQR4BBIYKBEwXwJYgKFKAQAC/wKC8BWEBQnABRRhEBQJSCwBhEBQphEBQnAMIgKFBIgKE8YKJAAwKH+YKJ8IKJ4IKJwIKJTgQKG/wKJ/gKDRQoKK/AKJaYYKG8AKDYIvABQX8BQuABQbiFgAKI/wKEAYQFCBRP4BQf4gJWEBQkAJYgKFfIeABQYaBTQRABgAnCBQJjCIAIKFDQXgBQIyCAoQqDAAIyBBQUPDIIKEIwIAGHoIbDAAi3BBI8Ag5RCAA0BNgIA/AFUHBRN/X4YAFeASHBSQjWBcATmBWYcHewazBZIYKBXQTJBGAYbBDgTfBcwYKEAYK/DBQXAgIKFGIInBIoIKPEAXgIoQKG+AKKAYQKG/AKNMQIMBE4ZFC+BFBBQ5FCwAKC/gKC4AkB4BeCBQgDBNIf8UYIdBAYIuCBSX4UAX+BQS9CBUH8a4QKZwBTCBSPABRPhAwRMGAAaDCBQ4AC/yvCBSLFDBSTiBBTv4g4KUOIRcG+AKKSQRcG8AKJ4CzCGAJREBQLjBEoIKEwEAWAXwKIkAgAnC8BGEBQIcC4A7EBQIcCAgI7DAoIcBDQQ7DAoIGBB4QwCJYIsCAgQlEAAo3BGoQAGh5gBAH4AqmB3JbIQAGagQJGbYS0CAAi5CUg7PCaoS4FAAQKFZwQKHFQQABJooqCBQwqEfghVDBQ51BBRE/BRI1EBQg1FBQg1FTQhrEBQprEEApAFBQhAFBQgJFBQZAGBQZAGBQaBFUghLGBQZLD/glCBQRLD8A7CBQTiEBQRWF/gKFUQfwBQphDSgI2CMIoKEggKE+BxE4BsHDYQKJ+B3HAAP4BRP8BRTZGBRv+BX4KBMRIKK/iZJBRX4YAivFcwbFGgAGEKQP4bYMALAeAI4LOBfomAgAKCBIIAFBQP4BQ4rCBSQgB/gKSPwIgIBRR+BOwIAHMwQA/ADcEAgcHMYZ/BZgd/Agn//wEBgKlDAgLnDR4P/eIn/4D3FFQIABE4IFCBQLLBAAK3BAoQaBGoIABGQLyBXgQKKBIRNCBQXwJYZICDYXwKAQKG/AKKMIYKQ/gKFwAKDO4YKYMQX8RoYKF/wKGAwQKG4AKVHoX+F4XvBRODBROBBQR/CBQa9C8AKgZgQ2G+AVC/gKQa4YKDwC2FBQ3/XQYKGAAX4BRzjCBTHwBQYDCBQbQCBQ3gBQbfFBRT1DwB1Ceo2ARYQACCIYKGgAKCgDCCBQYRCgDRCZ4QKCAYMABQf8DgQKCPIf4DgQOBgBuD+AcCAYRYD4AGBj4DCJoYFBAAhCCEwQAFG4ImCAAosBBI4A/AEcDVoKOJ8AKGXQSZGcwiXHYoofFFgwfEeIQACbIY3Gj4KE/wqIIQoJF/+AOgQKJGopYEGopYEGowKDv4KG+BAIBQR2FPIhAHBQShEBQpLHR4QKKKw4KCKw4KCBI4KBZowxC/wKF8BdC/ytF4ARC/xsFwAKKHoQKGT4f+QQoKPKAX9FYwKC+BBGBQaGBBQ/gMQRpCBQ34HoQKD4CZFBSv8BQWABSjTGBRRQC/z0GBQT/H+C6B/EAn4KFPgPwBQ4zB4EAHQQAC8ASBYIIKFCQIACBRTfFagIACIoLqFBRrNCVwQKEcYSNCBQiPEOgIAEQgZhBAAhYDKwhCFBIo3DGowABTYKXBAA5VFAH4Ash6zGVYaTIYIKJJWhC1DBRWAA4uAgYKGdIPgBQTrEAwP4dgQKDAwQKHD4LzBh4KFv4GB/wKFI4QKHEwQKBEgQKCCAQKHn4KJBIQKGGoYKGGoZXBEoQKBGoYKERwIaCPAQKENYQKHBIf/+AKDIAivBBQZAEHoIKDIAgGBBQZAEdoIKCIAv+BQgUE/gKDIAvwBQZAF8AKDIAqJBWgZAFBRBABBRBABBRBABBRBABBRCpBBQ41CZYo1EBQ41CBQ5rBBRA1CBQw1DBQ34BQaWFMAQKHFQYKFFQkAYQgqEBQoqEBQoqEgEDFRAKEFQsAgKAGAAbsEBQ6rDAAjGBJQqPEJQpYDD5AA/ACcDOREAv6zGWoipDg/we4ghDDYaeB/4QCYwSaBv7VEeQQbBZQSgCEwXwcAYmCXQIbBewbhCGIQKFGIn8F4QKDEwYKEMYIKDHQRHCHgf/BQoxEBQnwBQmPBQgxEAAgKK/AKKGIgKP/gKKTAQKn/wKGwAKCYgTYEYIIKDU4TuBA4IKCCIIKDFAIKCAwIcB/AKmJAY2GIJX/wZiDK4h4ORxYKYYpb8VBRP4g4KZIwn4gYFDGAnwdwRnBBR/gW4QKBGAgKBZoJcBBQnABQg7EwDJCIwwKBGQQ7E/8AgAnCHYoKBDgQwFBQIRCAYIwDBQUfB4SECEoIAFGAQlBAApCBGoQAGj4fHAH4AfOgJpIYwKqDAAi2CSozXD+AKFdoYhGWoTSDVIgKDwAKEcIQ3HIAQKMMgoJDJopWDBQxWDAAP4BRl+MIoKCA4PABQ5pB8AKFQgJpB+CtBBQoZCBQxTC/iNEAwJICBQ3+GQQKK/wKGGQX+VwgKLE4YKO8AHB/gGCBQaHCBQ+AL4IKHZIX8cIQKG/w6DBQpFEBSn4IIoKIagvwNobJFBQZUDAAR/CAA/ABROABSkAHorTDBRP8BRP4gBpFMIYKJ4EARQpLDBRMAVYxADAAJAIBRHgBQShFIAQABWAQ1FAAKPFGoZ5GNYIACNwpgBAARYEUIIAED5A3FD4gsENQYAEn4pGAH4AlngDCjgJEUoKMBAYLbDRwTtBgamFaIIGBAYKcEV4IGBAYLnEfoIGBAYKoEv4GCBRQDB/7mGBRbpGAwYKQOYIKeGxxMKMQ4GDBRCOIUhS2DXQzMDaAzmDAYLmEfAb8GgF+AYU+BIgAp"
        )
      )
    ),
    46,
    atob("IiZJOERFSERJQklHIw=="),
    88 | 65536
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
  g.setFont("inflate")
    .setFontAlign(0, -1)
    .setColor(1, 1, 1)
    .clear()
    .drawString(remaining, 176 / 2, 20)
    .setFont("4x5Numeric", 5)
    .drawString(now, (176 + 5) / 2, 176 - 40);
}
function countDown() {
  const remainingTime = 60 - Math.floor((new Date().getTime() % 60000) / 1000);
  Bangle.setLCDPower(1);
  g.setFont("inflate")
    .setFontAlign(0, 0)
    .setColor(1, 1, 1)
    .clear()
    .drawString(remainingTime + 1, 176 / 2, 176 / 2);
  if (remainingTime >= 1) setTimeout(countDown, 1000 - (Date.now() % 1000));
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
    //     start: ((Math.floor(now.getTime() / 60000) - offset) % (60 * 24)) + 1,
    //     end: ((Math.floor(now.getTime() / 60000) - offset) % (60 * 24)) + 4,
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
      // 2. padding, 10 high
      // 3. room, 25 high
      // 4. padding, 10 high
      // 5. countdown, 50 high
      // total; 120 high
      g.setColor(1, 1, 1)
        .setFont("4x5", 5)
        .setFontAlign(0, -1)
        .clear()
        .drawString(classes[1].name.toUpperCase(), 176 / 2 + 2, 28)
        .drawString(classes[1].room.toUpperCase(), 176 / 2 + 2, 63)
        .fillCircle(176 / 2, 123, 25)
        .setColor(0, 0, 0)
        .setFontAlign(0, 0)
        .setFont("4x5Numeric", 5)
        .drawString(classes[1].start - minuteOfDay, 176 / 2 + 2, 123);
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
