let properties = {
    table,
    rate,
    size,
    offset,
    begin,
    end,
    start,
    length,
    bounce,
    direction,
    fade,
    delay
};

export function setProperties(newProperties) {
    for (const newPropertyKey of Object.keys(newProperties))
        if (properties[newPropertyKey])
            properties[newPropertyKey] = newProperties[newPropertyKey];
}

export function updateProperty(name, value) {
    if (!properties[name]) throw new Error(`Unknown property ${name}`)

    properties[name] = value;
    let changes = {};

    if (['begin', 'end'].includes(name))
        changes.size = Math.abs(properties.end - properties.begin) / 2

    if (name === 'size') {
        const center = (properties.begin + properties.end) / 2;

        if (properties.begin < properties.end) {
            changes.begin = center - properties.size;
            changes.end = center + properties.size;
        } else {
            changes.begin = center + properties.size;
            changes.end = center - properties.size;
        }
    }

    return changes;
}
