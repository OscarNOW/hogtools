import { validations } from './validations/index.js';
const wait = ms => new Promise(res => setTimeout(res, ms));

const elements = [...document.getElementsByClassName('js-validation')];

for (const element of elements) {
    const validationType = element.dataset.validationType;
    let validationFunction = validations[validationType];

    if (!validationFunction) {
        console.error(`Unknown validation type: ${validationType}`);
        validationFunction = inp => (inp || null);
    };

    const changeCallback = (input) => {
        element.value = validationFunction(input ?? element.value) ?? element.placeholder;
    };

    element.addEventListener('keypress', async event => {
        if (event.key === 'Enter') {
            changeCallback();
            // element.blur();
            element.select();
        }
    });

    element.addEventListener('blur', () => changeCallback());
    changeCallback(element.placeholder);
}