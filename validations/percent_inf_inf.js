export function percent_inf_inf(input) {
    let amount = parseInt(input);

    if (isNaN(amount))
        return null;

    return `${amount}%`;
}