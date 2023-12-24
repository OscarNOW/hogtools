export function bpm(input) {
    let amount = parseInt(input);
    if (isNaN(amount))
        amount = 10;

    return `${amount}bpm`;
}