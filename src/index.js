function greatestCommonDivisor(x, y) {
    if (y === 0) {
        return x;
    }
    return greatestCommonDivisor(y, x % y);
}

function calculateDimmingZones(dimmingZones) {
    const { width, height } = window.screen;
    // const { innerWidth, innerHeight } = window;
    // const width = window.innerWidth;
    // const height = window.innerHeight;

    const gcd = greatestCommonDivisor(width, height)
    const aspectRatioWidth = width / gcd;
    const aspectRatioHeight = height / gcd;

    console.log(`Aspect ratio for ${width}x${height} is ${aspectRatioWidth}:${aspectRatioHeight}`);

    const dimmingLightsX = dimmingZones / aspectRatioHeight;
    const dimmingLightsY = dimmingZones / aspectRatioWidth;

    const sizeX = width / dimmingLightsX;
    const sizeY = height / dimmingLightsY;

    const body = document.getElementsByTagName("body").item(0);

    for (let y = 0; y < dimmingLightsY; y++) {
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.flexDirection = "row";
        row.style.justifyContent = "space-evenly";

        for (let x = 0; x < dimmingLightsX; x++) {
            const light = document.createElement("div");
            light.style.backgroundColor = "white";
            light.style.height = `${sizeY}px`;
            light.style.width = `${sizeX}px`;
            light.style.border = "1px solid black";
            row.appendChild(light);
        }

        body.appendChild(row);
    }
}

function main() {
    const urlParams = new URLSearchParams(window.location.search);
    let dimmingZones = urlParams.get('dimming_zones');

    if (!dimmingZones) {
        dimmingZones = 1152;
        const newUrl = `${window.location.pathname}?dimming_zones=${dimmingZones}`;
        window.history.replaceState({}, '', newUrl);
    }

    calculateDimmingZones(dimmingZones);
}

main();
