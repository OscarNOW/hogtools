export function percent_0_inf(input) {
    let amount = parseInt(input);

    if (isNaN(amount))
        return null;

    if (amount < 0)
        amount = 0;

    return `${amount}%`;
}