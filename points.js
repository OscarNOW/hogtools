const tablePoints = {
    sine: generateSineTablePoints({ precision: 100 }),
    tangent: generateTangentTablePoints({ precision: 100 }),
    step: [[0, 1], [0.499, 1], [0.501, -1], [1, -1]],
    sawTooth: [[0, 0], [0.25, 1], [0.75, -1], [1, 1]],
    ramp: [[0, -1], [1, 1]],
    invRamp: [[0, 1], [1, -1]],
    markOn: [],
    markOff: [],
    spiral: [],
    rand1: [],
    rand2: [],
    rand3: []
}

function generateSineTablePoints({ precision }) {
    let points = [];

    for (let i = 0; i < precision; i++) {
        let x = i / (precision - 1); // -1 so there is one at the end
        let y = Math.sin(x * 2 * Math.PI);
        points.push([x, y]);
    }

    return points;
}

function generateTangentTablePoints({ precision }) {
    let points = [];

    for (let i = 0; i < precision; i++) {
        let x = i / (precision - 1); // -1 so there is one at the end
        let y = Math.tan(x * 2 * Math.PI) / 15;
        y = Math.max(-1, y);
        y = Math.min(1, y);
        points.push([x, y]);
    }

    return points;
}

export function generatePoints({
    table,
    rate,
    offset,
    begin,
    end,
    length,
    direction
}) {
    let points = tablePoints[table];

    if (!points) throw new Error(`Unknown table ${table}`)
    if (points.length === 0) throw new Error(`${table} not implemented`)

    console.warn('rate not implemented')
    console.warn('offset not implemented')

    const size = end - begin;
    points = points.map(([x, y]) => [x, y * (size / 2) + ((begin + end) / 2)])

    console.warn('length not implemented')
    console.warn('direction not implemented')

    return points;
}

