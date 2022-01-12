function getImg() {
    return require("heatshrink").decompress(atob("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"));
}
var IMAGEWIDTH = 176;
var IMAGEHEIGHT = 109;

Graphics.prototype.setFontZCOOL = function() {
    // Actual height 40 (46 - 7)
    var widths = atob("CxAhEh8hJCIjGSMdCw==");
    var font = atob("AAAAAAAAAAAAAAAEAAAAAAAPAAAAAAAP4AAAAAAD+AAAAAAA/gAAAAAAP8AAAAAAB/AAAAAAAfAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAfgAAAAAAf4AAAAAA/+AAAAAA//AAAAAB/+AAAAAB/+AAAAAD/8AAAAAD/8AAAAAD/4AAAAAH/4AAAAAH/wAAAAAD/wAAAAAAfwAAAAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAP8AAAAAB//gAAAAP//4AAAB////AAAP////wAAf///h8AAH//8AfAAD//gAHwAA/8AAB8AAPgAAAfAAD4AAAHwAAfAAAB+AAHwAAAPgAB8AAAD4AAfAAAA+AAHwAAAPgAB8AAAD4AAPgAAA+AAD4AAAPgAA+AAAD8AAPgAAAfAAD4AAAHwAA/////8AAH/////AAB/////wAAf////4AAD////8AAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAB8AAAAAAA/AAAAAAAfgAAAAAAH4AAAAAAD8AAAAAAB+AAAAAAA/AAAAAAAPwAAH/gAH4D///4AD/////+AB//////gAf/////4AD////gAAA//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAB8AAAGAAAfAAAD4AAPwAAB/AAH4AAA/wAB8AAAf8AA/AAAP/AAfgAAP/gAHwAAH/4AD8AAD++AB+AAB/PgAfAAA/j4AHwAAfw+AB+AAP4PgAfwAH8D4AD8AH+A+AAfgD/AfAAD8B/AHwAAfg/gB8AAD8fwAfAAA/v4AHwAAH/8AB8AAA/+AAfAAAH/AAHwAAA/AAB8AAAHgAA+AAAAAAAPgAAAAAAD4AAAAAAA+AAAAAAAAAAAAAAABAAAAAAAD4AAAAAAA+AAAAAAAPgAAAAAAD4AAAAAAA+AAAAAAAHwAAMAAAB8AAfAAAAfAAHwAAAHwAB8AAAA+AAfAAAAPgAHwAfAD4AA+AP4A+AAPgD+APgAD4B/gB8AA+A/8AfAAPgf/AHwAD4H/wB8AA+D98AfgAHh+fgD4AB4/D4A+AAffg+A/gAH34Pg/4AB/8D8f8AAf+Aff+AAH/AH/+AAA/wB/+AAAP4Af+AAAD8AD/AAAA+AA/AAAAHgADAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAD+AAAAAAH/gAAAAAH/4AAAAAP/+AAAAAP//gAAAAf/z4AAAAf/w+AAAA//gPgAAA//gD4AAAf/AA+AAAH/AAPgAAB/AAD4AAAeAAA+AAACAAAPgAAAAAAD4AAAAAAA+AAAAAAAPgAAAAAAD4AAAAAAA+AAAAAAAP/+AAAAP///gAB/////4AAf////+AAH/////AAB///+AAAAf/APgAAAAAAD4AAAAAAA+AAAAAAAPgAAAAAAD4AAAAAAA+AAAAAAAPgAAAAAAD4AAAAAAAAAAAAAAAACAAAAAAAHwAAAAAAB8AAAAAAAfAAAAAAAH4AAAAAAA+AAAAAAAPgAAAAAAD4AAAAfwA+AAAH/+AHwAAf//gB8AAP//4AfAAH//+AHwAB/+PwB+AAfwB8APgAHwAfAD4AB8AHwA+AAfAB8APgAHwAfAB8AB8AHwAfAAfAB8AHwAHwAfAB8AB8AH4AfAAfAA+AH4AHwAPgH+AB8AD4H/gAfAA+H/wAHwAPv/4AB8AD//4AAfAA//wAAHwAP/wAAB8AD/gAAAAAAfgAAAAAABAAAAAAAAAAAAAAAAAHwAAAAAAH8AAAAAAD/gAAAAAD/4AAAAAD/+AAAAAD/3wAAAAD/x8AAAAD/4PgAAAD/4D4AAAD/4A+AAAB/4AHwAAB/4AB8AAB/4AAfAAB/4CAD4AB/8DgA+AAf8B8APgAD8AfAB8AA8AH4AfAAEAA+AH4AAAAPgA+AAAAD8AfgAAAAfAP4AAAAH4P8AAAAA+H+AAAAAPj+AAAAAB9/AAAAAAf/gAAAAAH/wAAAAAA/4AAAAAAP8AAAAAAB8AAAAAAAOAAAAAAAAAAAAAAAAAAAAD4AAAAAAA+AAAAAAAPwAAAAAAB8AAAAAAAfAAAAAAAHwAAAAAAB8AAAAAAAfAAAAAAAHwAAADAAB8AAAD4AAfAAAD+AAHwAAH/wAB8AAH/4AAfgAH/4AAH4AH/4AAA+AH/wAAAPgH/wAAAD4H/wAAAA+H/wAAAAPv/wAAAAD//wAAAAA//gAAAAAP/gAAAAAD/gAAAAAAfgAAAAAAAAAAAAAAAAAAAAAAAAAAAPgAAAAAAH4AAAAAAB+AAAHwAA/wAAB8AAf8AAA/gAP/AAAP8AH/wAAH/gD8+AAB/4B+PgAAf/A/j4AAPn4Pw+AAD4/H4HwAB+Pz8B8AAfB/+AfAAPwP/AHwAD4B/gB+AA+AfwAPgAfAP+AD4AHwD/wA+AB+B/+AfgAfw/PgPwAB/fj8D8AAP/wfh+AAB/4D8fAAAP+AfPwAAB/AH/4AAAPgA/8AAAAAAH/AAAAAAA/gAAAAAAPwAAAAAAB8AAAAAAAAAAAAAAAAAAAAAGAAAAAAAD4AAAAAAB/AAAAAAB/wAAAAAA/+AAAAAAf/gAAAAAf78AAAAAP8fAAAAAP+H4AAAAD+A+AAAAB/APgAAAAfAB8AAAAH4AfAAYAA+AD4AfAAPgA+AfwAD4APgf+AA+ABgf/AAHwAA//AAB8AA//AAAfAA//AAAHwA//AAAB+A/+AAAAPh/+AAAAD5/+AAAAA//+AAAAAP/+AAAAAB/8AAAAAAf8AAAAAAH8AAAAAAAAAAAAAAAAADgAOAAAAH4AfgAAAD+AP4AAAA/wD/AAAAH8AfwAAAB/AH8AAAAfwB/AAAADgAOAAAAAAAAAAAAAAAAA=");
    var scale = 1; // size multiplier for this font
    g.setFontCustom(font, 46, widths, 50 + (scale << 8) + (1 << 16));
};

// timeout used to update every minute
var drawTimeout;

// schedule a draw for the next minute
function queueDraw() {
    if (drawTimeout) clearTimeout(drawTimeout);
    drawTimeout = setTimeout(function() {
        drawTimeout = undefined;
        draw();
    }, 60000 - (Date.now() % 60000));
}


function draw() {
    var x = g.getWidth() / 2;
    var y = 24 + 20;

    g.reset().clearRect(0, 24, g.getWidth(), g.getHeight() - IMAGEHEIGHT);
    if (g.getWidth() == IMAGEWIDTH)
        g.drawImage(getImg(), 0, g.getHeight() - IMAGEHEIGHT);
    else {
        let scale = g.getWidth() / IMAGEWIDTH;
        y *= scale;
        g.drawImage(getImg(), 0, g.getHeight() - IMAGEHEIGHT * scale, {
            scale: scale
        });
    }
    // work out locale-friendly date/time
    var date = new Date();
    var timeStr = require("locale").time(date, 1);
    var dateStr = require("locale").date(date).toUpperCase();
    // draw time
    g.setFontAlign(0, 0).setFont("ZCOOL");
    g.drawString(timeStr, x, y);
    // draw date
    y += 35;
    g.setFontAlign(0, 0, 1).setFont("6x8");
    g.drawString(dateStr, g.getWidth() - 8, g.getHeight() / 2);
    // queue draw in one minute
    queueDraw();
}

// Clear the screen once, at startup
g.setTheme({
    bg: "#f0f",
    fg: "#fff",
    dark: true
}).clear();
// draw immediately at first, queue update
draw();
// Stop updates when LCD is off, restart when on
Bangle.on('lcdPower', on => {
    if (on) {
        draw(); // draw immediately, queue redraw
    } else { // stop draw timer
        if (drawTimeout) clearTimeout(drawTimeout);
        drawTimeout = undefined;
    }
});
// Show launcher when middle button pressed
Bangle.setUI("clock");
// Load widgets
Bangle.loadWidgets();
Bangle.drawWidgets();