const blockDay = [
    [7, 50, "am"],
    [8, 20, "am"],
    [10, 10, "am"],
    [11, 13, "am"],
    [11, 43, "am"],
    [12, 35, "am"],
    [2, 25, "pm"],
];
const wednesday = [
    [7, 50, "am"],
    [8, 32, "am"],
    [9, 18, "am"],
    [10, 4, "am"],
    [10, 38, "am"],
    [11, 24, "am"],
    [12, 10, "am"],
    [12, 55, "am"],
];
const schedule = {
    // [end hour, end min, am/pm]
    1: blockDay,
    2: blockDay,
    3: wednesday,
    4: blockDay,
    5: blockDay,
};

function padMinute(minute) {
    return minute < 10 ? "0" + minute : minute;
}

function convertTo24Hr(hours, meridiem) {
    return hours + (meridiem == "pm" ? 12 : 0);
}

function convertTo12Hr(hours) {
    return hours % 12 || 12;
}

let periodActiveBefore = false;

function findPeriod() {
    g.setFontAlign(0, 0);
    let periodDisplayed = false;
    const weekday = new Date().getDay();
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const todaySchedule = schedule[weekday];
    for (let period of todaySchedule) {
        const periodEndHour = convertTo24Hr(period[0], period[2]);
        const periodEndMinute = period[1];
        if (
            (hour < periodEndHour ||
                (hour == periodEndHour && minute < periodEndMinute)) &&
            !periodDisplayed
        ) {
            displayPeriod(period, periodEndHour, periodEndMinute);
            periodDisplayed = true;
        }
    }
    periodActiveBefore = periodDisplayed;
    if (periodActiveBefore && !periodDisplayed) {
        g.clearRect(0, g.getWidth() / 2 - 25, g.getWidth(), g.getHeight() / 2 + 25);
        g.clearRect(
            0,
            g.getWidth() / 2 + 50 - 15,
            g.getWidth(),
            g.getHeight() / 2 + 50 + 15
        );
    }
    if (!periodActiveBefore && periodDisplayed) {
        g.clearRect(0, g.getWidth() / 2 - 40, g.getWidth(), g.getHeight() / 2 + 40);
        g.clearRect(
            0,
            g.getWidth() / 2 + 80 - 12.5,
            g.getWidth(),
            g.getHeight() / 2 + 80 + 12.5
        );
    }
    if (periodDisplayed) return;
    g.setFont("Vector", 80);
    g.clearRect(0, g.getWidth() / 2 - 40, g.getWidth(), g.getHeight() / 2 + 40);
    g.drawString(
        `(${convertTo12Hr(hour)}:${padMinute(minute)})`,
        g.getWidth() / 2,
        g.getHeight() / 2
    );
    g.setFont("Vector", 25);
    g.clearRect(
        0,
        g.getWidth() / 2 + 80 - 12.5,
        g.getWidth(),
        g.getHeight() / 2 + 80 + 12.5
    );
    g.drawString("[nothing upcoming]", g.getWidth() / 2, g.getHeight() / 2 + 80);
}

function displayPeriod(period, periodEndHour, periodEndMinute) {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    let timeLeft = Math.floor(
        (periodEndHour - hour) * 60 * 60 + (periodEndMinute - minute) * 60 - seconds
    );
    g.setFont("Vector", 50);
    g.clearRect(0, g.getWidth() / 2 - 25, g.getWidth(), g.getHeight() / 2 + 25);
    g.drawString(
        `${Math.floor(timeLeft / 60)}m ${timeLeft % 60}s`,
        g.getWidth() / 2,
        g.getHeight() / 2
    );
    g.setFont("Vector", 30);
    const currentTime = `${convertTo12Hr(hour)}:${padMinute(minute)}`;
    const endTime = `${convertTo12Hr(periodEndHour)}:${padMinute(periodEndMinute)})`;
    g.clearRect(
        0,
        g.getWidth() / 2 + 50 - 15,
        g.getWidth(),
        g.getHeight() / 2 + 50 + 15
    );
    g.drawString(
        `(${currentTime} -> ${endTime}`,
        g.getWidth() / 2,
        g.getHeight() / 2 + 50
    );
    if (timeLeft <= 30) {
        Bangle.setLCDPower(1);
    }
    if (timeLeft == 30) {
        Bangle.buzz(250);
    }
    if (timeLeft == 5) {
        Bangle.buzz(500);
    }
}

g.clear();
const interval = setInterval(findPeriod, 1000);

Bangle.loadWidgets();
Bangle.drawWidgets();
let whenPressed = 0;
let whenReleased = 0;
function onMenuPress() {
    whenPressed = Date.now();
    setTimeout(goToMenu, 1500);
}
function onMenuRelease() {
    whenReleased = Date.now();
}
function goToMenu() {
    if (whenPressed > whenReleased) {
        Bangle.buzz(200);
        Bangle.showLauncher();
    }
}
setWatch(onMenuPress, BTN2, { repeat: true, edge: "rising" });
setWatch(onMenuRelease, BTN2, { repeat: true, edge: "falling" });
