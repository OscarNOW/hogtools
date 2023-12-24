export function bpm(input) {
    let value = parseInt(input);

    if (isNaN(value))
        return { text: null, value: null };

    return {
        text: `${value}bpm`,
        value
    };
}