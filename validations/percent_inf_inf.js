export function percent_inf_inf(input) {
    let percentage = parseInt(input);

    if (isNaN(percentage))
        return { text: null, value: null };

    return {
        text: `${percentage}%`,
        value: percentage / 100
    };
}