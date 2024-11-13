const text = document.getElementById("burn");
let x = 100;
let y = 100;
let xSpeed = 2;
let ySpeed = 2;
let angle = 0;

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function moveText() {
    x += xSpeed;
    y += ySpeed;
    angle += 5;

    if (x + text.offsetWidth >= window.innerWidth || x <= 0) {
        xSpeed *= -1;
        text.style.color = getRandomColor();
    }
    if (y + text.offsetHeight >= window.innerHeight || y <= 0) {
        ySpeed *= -1;
        text.style.color = getRandomColor();
    }

    text.style.left = x + "px";
    text.style.top = y + "px";
    text.style.transform = `rotate(${angle}deg)`;

    requestAnimationFrame(moveText);
}

moveText();
