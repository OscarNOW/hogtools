export function percent_0_inf(input) {
    let amount = parseInt(input);
    if (isNaN(amount))
        amount = 50;

    if (amount < 0)
        amount = 0;

    return `${amount}%`;
}