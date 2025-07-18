// Obtener el año actual
const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

// Obtener la fecha de última modificación del documento
const lastMod = document.querySelector("#lastModified");
lastMod.textContent = document.lastModified;

//calcular el wind chill

    //funcion
function calculateWindChild(tempC, windKmh) {
    if (tempC > 10 || windKmh < 4.8) {
        return "N/A";
    }

    const vPow = Math.pow(windKmh, 0.16);
    const chill = 13.12 + 0.6215 * tempC - 11.37 * vPow + 0.3965 * tempC * vPow;

    return chill.toFixed(1) + " °C";
}

    //llamar los elementos
const tempElement = document.getElementById("temperature");
const windElement = document.getElementById("wind");
const chillElement = document.getElementById("windchill");

const temperature = parseFloat(tempElement.textContent);
const windSpeed = parseFloat(windElement.textContent);

const windChillValue = calculateWindChild(temperature, windSpeed);
chillElement.textContent = windChillValue