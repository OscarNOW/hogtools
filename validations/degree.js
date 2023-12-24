export function degree(input) {
    let amount = parseInt(input);

    if (isNaN(amount))
        return null;

    amount = amount % 360;

    if (amount < 0)
        amount = amount + 360;

    return `${amount}°`;
}