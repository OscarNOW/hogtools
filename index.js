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

    const isText = element.tagName === 'INPUT' && element.type === 'text';

    const changeCallback = (preventGlobalChange) => {
        if (isText)
            element.value = validationFunction(element.value).text ?? element.placeholder;
        onGlobalChange();
    };

    properties[element.id] = {
        element,
        validationFunction,
        changeCallback
    };

    if (isText) {
        element.addEventListener('keypress', async event => {
            if (event.key === 'Enter') {
                changeCallback();
                // element.blur();
                element.select();
            }
        });
        element.addEventListener('click', () => element.select());
    }

    element.addEventListener('blur', () => changeCallback());
}
for (const { changeCallback } of Object.values(properties))
    changeCallback(true);
onGlobalChange();


function onGlobalChange() {
    let propertyValues = {};
    for (const [name, { element, validationFunction }] of Object.entries(properties))
        propertyValues[name] = validationFunction(element.value).value;

    const points = generatePoints(propertyValues);
    render(points);
}
