// canvas要素を取得
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// 図形を描画
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();

let isDragging = false;
let offsetX, offsetY;

canvas.addEventListener("mousedown", (e) => {
  const rect = canvas.getBoundingClientRect();
  const y = e.clientY - rect.top;

  if (y >= offsetY && y <= offsetY + 100) {
    isDragging = true;
  }
});

canvas.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const rect = canvas.getBoundingClientRect();
    const y = e.clientY - rect.top;

    offsetY = y - 50;
    draw();
  }
});

canvas.addEventListener("mouseup", () => {
  isDragging = false;
});

offsetX = 100;
offsetY = 100;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.rect(offsetX, offsetY, 100, 100);
  ctx.fillStyle = "blue";
  ctx.fill();
}

draw();