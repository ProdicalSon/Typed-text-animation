
const text = document.getElementById("burn");
let x = 100;
let y = 100; 
let xSpeed = 2; 
let ySpeed = 2; 

function moveText() {
    
    x += xSpeed;
    y += ySpeed;

    
    if (x + text.offsetWidth >= window.innerWidth || x <= 0) {
        xSpeed *= -1; 
    }
    if (y + text.offsetHeight >= window.innerHeight || y <= 0) {
        ySpeed *= -1; 
    }

   
    text.style.left = x + "px";
    text.style.top = y + "px";

    
    requestAnimationFrame(moveText);
}


moveText();
