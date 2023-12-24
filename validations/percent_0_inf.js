export function percent_0_inf(input) {
    let percentage = parseInt(input);

    if (isNaN(percentage))
        return { text: null, value: null };

    if (percentage < 0)
        percentage = 0;

    return {
        text: `${percentage}%`,
        value: percentage / 100
    };
}