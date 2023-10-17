let x = 3;
function button1() {
    x += 1;
}

function button2() {
    x -= 1;
}
if (x > 2) {
    y = "Talon Erikoinen";
} else if (x > 1) {
    y = "Talosta Erikoinen";
}
document.write(y);