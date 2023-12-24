export function degree(input) {
    let degrees = parseInt(input);

    if (isNaN(degrees))
        return { text: null, value: null };

    degrees = degrees % 360;

    if (degrees < 0)
        degrees = degrees + 360;

    return {
        text: `${degrees}°`,
        value: degrees / 360
    };
}