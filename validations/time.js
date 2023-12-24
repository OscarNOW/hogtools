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

    let secondAmount = 0;
    for (const [amount, type] of input) {
        const index = typeCharacters.findIndex(([foundType]) => foundType === type);
        secondAmount += amount * typeCharacters[index][1];
    }

    if (secondAmount < 0)
        secondAmount = 0;

    let secondAmountLeft;
    let typeAmounts = [];

    for (const [type, typeSecondAmount] of [...typeCharacters].reverse()) {
        let typeAmount = 0;

        typeAmount = Math.floor(secondAmountLeft / typeSecondAmount);
        secondAmountLeft -= typeAmount * typeSecondAmount;

        typeAmounts.push(typeAmount);
    }

    typeAmounts = typeAmounts.reverse();

    for (let index = typeAmounts.length - 1; index >= 0; index--) {
        if (typeAmounts[index] === 0 && index !== 0)
            typeAmounts[index] = null;
        else
            break;
    }
    typeAmounts = typeAmounts.filter(x => x !== null);

    let output = '';
    for (let index = typeAmounts.length - 1; index >= 0; index--) {
        const typeAmount = typeAmounts[index];
        output += `${typeAmount}${typeCharacters[index][0]}${index == 0 ? '' : ' '}`;
    }

    return {
        text: output,
        value: secondAmount
    };
}

window.a = time;