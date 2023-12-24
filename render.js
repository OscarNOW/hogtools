const canvas = document.getElementById('render');
const ctx = canvas.getContext("2d");

const xScale = 500;
const yScale = 500;

export function render(points) {
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);

    for (const [x, y] of points)
        ctx.lineTo(x * xScale, y * yScale);

    ctx.stroke();
}