// Act I
let buf = Graphics.createArrayBuffer(80, 80, 8);
buf.flip = function () {
  g.drawImage(buf, 0, 0, { scale: 3 });
};
Graphics.prototype.setFontMinecraft = function (scale) {
  // Actual height 8 (7 - 0)
  this.setFontCustom(
    E.toString(
      require("heatshrink").decompress(
        atob(
          "AAX6gHgAIUo/wBCklU61UpEA4UMiFgw0AhlS3VMiQYCnFEwWCgACBok4EQMQiEogADBvgCBgEHA4QACgEGgECFgWAgF8xWS0V8BYNC/0CgUAowLByVmgA1BAoNsgEYlFIxH+gHk0QABzkAnlSCIMMgHAwGOyBUBtgKBDoVgAgOUvEAm0Am5NBlAvBgEUAAZqBohnBgFAwGKyFgvmC3W6xQfBv2gAAN+gH+IYVcM4KIBD4ILBAoRtBCISZC/wcBwB/CBIOi3gLBkAABNoOCDwMAgiHBgX8B4dQxwFBBYSVB/1AkFADYIFCiAFBIoY/CK4VABYeEvQLEryzBU4hOB/xRC/hBE+EMb4PwDoMEhEEGoOOqBNDwFAnycBgGGd4XCQ4YPBsEQEYJzBOgMA"
        )
      )
    ),
    32,
    atob(
      "AwIEBQYGBgIFBQUGAgYCBgYGBgYGBgYGBgYCAgUGBQUHBgYGBgYGBgYEBgYGBgYGBgYGBgYGBgYGBgYEBgQ="
    ),
    8 + (scale << 8) + (1 << 16)
  );
  return this;
};
g.setFont("Minecraft");
// Act II
let index = 0;
function render() {
  buf.clear();
  drawBg(buf);
  drawBrick(buf, 5, 10);
  drawBrick(buf, 5 + 33 + 4, 10);
  drawToast(buf);
  renderTime(buf);
  drawWalking(buf, index++);
  renderSteps(buf);
  buf.flip();
}
// Act III
/*const classPeriods = {
  1: blockDay,
  2: blockDay,
  3: wednesday,
  4: blockDay,
  5: blockDay,
};*/
// Act IV
function drawBg(space) {
  space.setColor(44 / 255, 53 / 255, 77 / 255);
  space.fillRect(0, 0, 80, 80);
}
function drawBrick(space, x, y) {
  const brk = require("heatshrink").decompress(
    atob("kMexH+lgjeD4NXADoiBq8sADcBEH4g/EH4g/EH4g/EH4g/EH4g/EH4g/EHcBADkAlgiBADks")
  );
  space.drawImage(brk, x, y);
}
function drawToast(space) {
  const toast = require("heatshrink").decompress(
    atob(
      "qESxH+lksC6ITBAAZRzGwY9FABYSEC6QAhGgI2UCgRO0agYECrAAMJ5IXNAEJPGCyJPFJ145EJ/5P/J/5P/J/5P/J/5P/J/5P/J/5P/J/5P/J/5P/HJ4"
    )
  );
  space.drawImage(toast, 0, 80 - 18);
}
function renderTime(space) {
  space.setFont("Minecraft", 2);
  let d = new Date();
  const time = {
    hr: d.getHours() % 12,
    min: d.getMinutes().toString().padStart(2, "0"),
    sec: d.getSeconds().toString().padStart(2, "0"),
    date:
      [
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
      ][d.getMonth()] + `||${d.getMonth() + 1}/${d.getDate()}`,
  };
  space.setFontAlign(0, 0);
  space.setColor(204 / 255, 204 / 255, 255 / 255);
  space.drawString(time.hr, 5 + 33 / 2, 10 + 30 / 2);
  space.drawString(time.min, 5 + 33 + 4 + 33 / 2 + 1, 10 + 30 / 2);
  space.setFont("Minecraft", 1);
  space.drawString(time.sec, 11, 80 - 14 / 2);
  space.drawString(time.date, 24 + 56 / 2, 80 - 14 / 2);
}
function drawWalking(space, index) {
  const walkSprites = [
    "ikUxH+AH4AWrAAECfPN5oTQCQITOCAQTQFIaNTCaI5RCa4URTyAACvl8HaITOzwTIBIgSEAAITGBIv+A",
    "ikUxH+AH4AWrAAECfPN5oTQCQITOCAQTQFIaNTCaI5RCa4URTyAACvl8HaITNzwTJBQoHCAAIGDqIUCBQwA=",
    "ikUxH+AH4AWrAAECfPN5oTQCQITOCAQTQFIaNTCaI5RCdYURvl8E6ITKzwHHqIUJzwUFCQNRFJGe",
    "ikUxH+AH4AWrAAECfPN5oTQCQITOCAQTQFIaNTCaI5RCft8vgTjz1RCYIUFzwCEAgQABqIpGBQWe",
    "ikUxH+AH4AWrAAECfPN5oTQCQITOCAQTQFIaNTCaI5RCahhSCan+vl8CcOeAQNRCYIUEBQQSFAAIoHBQgA==",
    "ikUxH+AH4AWrAAECfPN5oTQCQITOCAQTQFIaNTCaI5RCft8vgThzwTIBIYHEAAQTGBQo",
  ];
  space.drawImage(
    require("heatshrink").decompress(atob(walkSprites[index % 6])),
    80 / 2,
    80 - 18 - 20
  );
  const countImg = require("heatshrink").decompress(
    atob(
      "kcUxH+AEnIADohDq4AdEYQiBlgAbgIiu4IBCET9WET4hBAAIidEIYidEAYidDwoibEIeDAAL0bEIkBEagiGMoYiCEYIiaBQRnCIrYAERbwAaEQqEBADYiCEYIAdEIQAh"
    )
  );
  space.drawImage(countImg, 4, 80 - 18 - 20);
}
// Count the number of minutes where Bangle.getStepCount() increments
let stepFile = require("Storage").open("steps.json", "r");
let stepData = JSON.parse(stepFile.readLine() || '{"activeMins": {}}');
let lastRecorded = { time: 0, steps: Bangle.getStepCount() };
function getActiveMins() {
  const todayId = new Date().toISOString().slice(0, 10);
  return stepData.activeMins[todayId] || 0;
}
function renderSteps(space) {
  const steps = Bangle.getStepCount();
  const activeMins = getActiveMins();
  space.setFont("Minecraft", 1);
  space.setFontAlign(1, 0);
  space.setColor(255 / 255, 153 / 255, 102 / 255);
  space.drawString(
    activeMins + (steps > lastRecorded.steps + 17),
    31,
    80 - 18 - 20 / 2
  );
  space.drawString(
    Bangle.getStepCount() - lastRecorded.steps - 17,
    80 - 4,
    80 - 18 - 20 / 2
  );
  // TODO: Change this to minutes since last step

  if (Date.now() > lastRecorded.time + 1000 * 60) {
    if (steps > lastRecorded.steps + 17) {
      const todayId = new Date().toISOString().slice(0, 10);
      stepData.activeMins[todayId] = stepData.activeMins[todayId] || 0;
      stepData.activeMins[todayId]++;
      require("Storage").open("steps.json", "w").write(JSON.stringify(stepData));
    }
    lastRecorded = { time: Date.now(), steps: steps };
  }
}
render();
setInterval(render, 1000 / 5);
Bangle.setUI("clock");
