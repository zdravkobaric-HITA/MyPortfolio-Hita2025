// Selektiranje elemenata
const inputA = document.querySelector("#a");
const inputB = document.querySelector("#b");

const btnA = document.querySelector("#btnA");
const btnB = document.querySelector("#btnB");
const btnZbroj = document.querySelector("#btnZbroj");

const rezultatPolje = document.querySelector("#rezultat");

// Funkcije
function povecajA() {
    inputA.value = Number(inputA.value) + 1;
}

function povecajB() {
    inputB.value = Number(inputB.value) + 2;
}

function izracunaj() {
    const a = Number(inputA.value);
    const b = Number(inputB.value);
    rezultatPolje.textContent = a + b;
}

// Event listeneri
btnA.addEventListener("click", povecajA);
btnB.addEventListener("click", povecajB);
btnZbroj.addEventListener("click", izracunaj);
