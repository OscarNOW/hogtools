const canvas = document.getElementById('render');
const ctx = canvas.getContext("2d");

const xScale = 500;
const yScale = 500;

export function render(points) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.moveTo(points[0][0], points[0][1]);
    ctx.beginPath();

    for (const [x, y] of points)
        ctx.lineTo(x * xScale, (1 - y) * yScale);

    ctx.stroke();
}