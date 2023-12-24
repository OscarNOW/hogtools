const typeCharacters = [['s', 1], ['m', 60], ['h', 3600]];

export function time(inp) {
    let input = inp;
    input = input.replaceAll('*', ' ');

    for (const [typeCharacter] of typeCharacters)
        input = input.replaceAll(typeCharacter, `${typeCharacter}*`);

    input = input.split('*');
    if (input[input.length - 1].trim() !== '') input[input.length - 1] = input[input.length - 1] + 's';
    input = input.filter(x => x.length > 0);
    input = input.map(x => [x.substring(0, x.length - 1), x[x.length - 1]]);
    if (input.length === 0) return null;
    input = input.map(([amount, type]) => ([parseFloat(amount), type]));
    input = input.map(([amount, type]) => ([isNaN(amount) ? 0 : amount, type]));

    let typesAmount = [];

    for (const [amount, type] of input) {
        const index = typeCharacters.findIndex(([foundType]) => foundType === type);
        if (index + 1 > typesAmount.length)
            typesAmount = [...typesAmount, ...Array(index + 1 - typesAmount.length).fill(0)];

        typesAmount[index] += parseFloat(amount);
    }

    let output = '';
    for (let index = typesAmount.length - 1; index >= 0; index--) {
        const typeAmount = typesAmount[index];
        output += `${typeAmount}${typeCharacters[index][0]}${index == 0 ? '' : ' '}`;
    }

    return output;
}

window.a = time;