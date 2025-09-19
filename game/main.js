document.getElementById("txt").innerText="これはゲームです";
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

gameLoop();

// Removed duplicate declarations of canvas and ctx
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

let x = 225;
let tama = 0;

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        x -= 10;
    } else if (e.key === "ArrowRight") {
        x += 10;
    } else if (e.code === "Space") {
        tama += 1;
    }
});

let y1 = 0;
let y2 = 0;

function gameLoop() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red";
    ctx.fillRect(150, y1, 30, 30);
    y1 += 5;

    ctx.fillStyle = "red";
    ctx.fillRect(300, y2, 30, 30);
    y2 += 5;

    ctx.fillStyle = "yellow";
    ctx.fillRect(x, 480, 30, 30);

    if (tama > 0) {
        ctx.fillStyle = "white";
        ctx.fillRect(x + 10, 480 - tama * 10, 10, 10);
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();
