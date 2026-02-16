const verdeRange = document.getElementById("verdeRange");
const rojoRange = document.getElementById("rojoRange");

const verdeDiv = document.getElementById("verde");
const rojoDiv = document.getElementById("rojo");

const verdeHex = document.getElementById("verdeHex");
const rojoHex = document.getElementById("rojoHex");

function toHex(value) {
    const hex = Number(value).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function actualizarColores() {

    // Verde: de negro a verde puro
    let g = Number(verdeRange.value);
    let verdeColor = `#00${toHex(g)}00`;

    verdeDiv.style.backgroundColor = verdeColor;
    verdeHex.textContent = verdeColor.toUpperCase();

    // Rojo: de negro a rojo puro
    let r = Number(rojoRange.value);
    let rojoColor = `#${toHex(r)}0000`;

    rojoDiv.style.backgroundColor = rojoColor;
    rojoHex.textContent = rojoColor.toUpperCase();
}

verdeRange.addEventListener("input", actualizarColores);
rojoRange.addEventListener("input", actualizarColores);

actualizarColores();


