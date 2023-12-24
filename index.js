import { validations } from './validations/index.js';
import { generatePoints } from './points.js';
import { render } from './render.js';
const wait = ms => new Promise(res => setTimeout(res, ms));

const elements = [...document.getElementsByClassName('propertyInput')];

for (const element of elements) {
    const validationType = element.dataset.validationType;
    let validationFunction = validations[validationType];

    if (!validationFunction) {
        console.error(`Unknown validation type: ${validationType}`);
        validationFunction = inp => (inp || null);
    };

    const changeCallback = (input) => {
        element.value = validationFunction(input ?? element.value) ?? element.placeholder;
        onGlobalChange();
    };
    changeCallback(element.placeholder);

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

function onGlobalChange() {
    //todo: convert all to real values (for example: 50% to 0.5)

    const points = generatePoints({
        table: document.getElementById('table').value,
        rate: document.getElementById('rate').value,
        offset: document.getElementById('offset').value,
        begin: document.getElementById('begin').value,
        end: document.getElementById('end').value,
        length: document.getElementById('length').value,
        direction: document.getElementById('direction').value
    });

    render(points);
}