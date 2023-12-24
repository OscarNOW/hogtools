const tablePoints = {
    sine: generateSineTablePoints({ precision: 100 }),
    tangent: generateTangentTablePoints({ precision: 100 }),
    step: [[0.49, 1], [0.51, 0]],
    sawTooth: [[0, 0.5], [0.25, 1], [0.75, 0], [1, 0.5]],
    ramp: [[0, 0], [1, 1]],
    invRamp: [[0, 1], [1, 0]],
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
        let x = i / precision;
        let y = Math.sin(x * 2 * Math.PI) / 2 + 0.5;
        points.push([x, y]);
    }

    return points;
}

function generateTangentTablePoints({ precision }) {
    let points = [];

    for (let i = 0; i < precision; i++) {
        let x = i / precision;
        let y = Math.tan(x * 2 * Math.PI) / 20 + 0.5;
        y = Math.max(0, y);
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
    console.warn('begin not implemented')
    console.warn('end not implemented')
    console.warn('length not implemented')
    console.warn('direction not implemented')

    return points;
}

