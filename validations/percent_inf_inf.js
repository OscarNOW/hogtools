export function percent_inf_inf(input) {
    let amount = parseInt(input);
    if (isNaN(amount))
        amount = -50;

    return `${amount}%`;
}