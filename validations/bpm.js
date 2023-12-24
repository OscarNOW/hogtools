export function bpm(input) {
    let amount = parseInt(input);

    if (isNaN(amount))
        return null;

    return `${amount}bpm`;
}