import { validations } from './validations/index.js';
import { generatePoints } from './points.js';
import { render } from './render.js';
const wait = ms => new Promise(res => setTimeout(res, ms));

const elements = [...document.getElementsByClassName('propertyInput')];

const properties = {};

for (const element of elements) {
    const validationType = element.dataset.validationType;
    let validationFunction = validations[validationType];

    if (!validationFunction) {
        console.error(`Unknown validation type: ${validationType}`);
        validationFunction = inp => (inp ? { text: inp, value: parseFloat(inp) } : { text: null, value: null });
    };

    const changeCallback = (input, preventGlobalChange) => {
        element.value = validationFunction(input ?? element.value).text ?? element.placeholder;
        onGlobalChange();
    };

    properties[element.id] = {
        element,
        validationFunction,
        changeCallback
    };

    element.addEventListener('keypress', async event => {
        if (event.key === 'Enter') {
            changeCallback();
            // element.blur();
            element.select();
        }
    });

    element.addEventListener('blur', () => changeCallback());
    element.addEventListener('click', () => element.select());
}
for (const { changeCallback } of Object.values(properties))
    changeCallback(null, true);
onGlobalChange();


function onGlobalChange() {
    const points = generatePoints(Object.values(properties).map(({ validationFunction, element }) => validationFunction(element.value).value))
    render(points);
}