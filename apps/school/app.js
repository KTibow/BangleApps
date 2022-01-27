const schedule = {
    // [end hour, end min, am/pm]
    1: [
        [8, 20, "am"],
        [10, 10, "am"],
        [11, 13, "am"],
        [11, 43, "am"],
        [12, 35, "am"],
        [2, 25, "pm"],
    ],
    2: [
        [8, 20, "am"],
        [10, 10, "am"],
        [11, 13, "am"],
        [11, 43, "am"],
        [12, 35, "am"],
        [2, 25, "pm"],
    ],
    3: [
        [8, 32, "am"],
        [9, 18, "am"],
        [10, 4, "am"],
        [10, 38, "am"],
        [11, 24, "am"],
        [12, 10, "am"],
        [12, 55, "am"],
    ],
    4: [
        [8, 20, "am"],
        [10, 10, "am"],
        [11, 13, "am"],
        [11, 43, "am"],
        [12, 35, "am"],
        [2, 25, "pm"],
    ],
    5: [
        [8, 20, "am"],
        [10, 10, "am"],
        [11, 13, "am"],
        [11, 43, "am"],
        [12, 35, "am"],
        [2, 25, "pm"],
    ],
};

function padMinute(minute) {
    return minute < 10 ? "0" + minute : minute;
}

function findPeriod() {
    g.clear();
    const weekday = new Date().getDay();
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const todaySchedule = schedule[weekday];
    for (let period of todaySchedule) {
        const periodEndHour = period[0] + (period[2] == "pm" ? 12 : 0);
        const periodEndMinute = period[1];
        if (hour <= periodEndHour && minute < periodEndMinute) {
            displayPeriod(period, periodEndHour, periodEndMinute);
            return;
        }
    }
    g.setFontAlign(0, 0);
    g.setFont("Vector", 25);
    g.drawString("[nothing upcoming]", g.getWidth() / 2, g.getHeight() / 2);
    g.setFont("Vector", 40);
    g.drawString(
        `(${hour % 12}:${padMinute(minute)})`,
        g.getWidth() / 2,
        g.getHeight() / 2 + 50
    );
}

function displayPeriod(period, periodEndHour, periodEndMinute) {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    let timeLeft = Math.floor(
        (periodEndHour - hour) * 60 * 60 +
            (periodEndMinute - minute) * 60 -
            seconds
    );
    g.setFontAlign(0, 0);
    g.setFont("Vector", 50);
    g.drawString(
        `${Math.floor(timeLeft / 60)}m ${timeLeft % 60}s`,
        g.getWidth() / 2,
        g.getHeight() / 2
    );
    g.setFont("Vector", 20);
    g.drawString(
        `(${hour % 12}:${padMinute(minute)} -> ${
            periodEndHour % 12
        }:${padMinute(periodEndMinute)})`,
        g.getWidth() / 2,
        g.getHeight() / 2 + 50
    );
    if (timeLeft <= 30) {
        Bangle.setLCDPower(1);
    }
    if (timeLeft == 30) {
        Bangle.buzz(200);
    }
    if (timeLeft == 5) {
        Bangle.buzz(500);
    }
}

const interval = setInterval(findPeriod, 1000);
