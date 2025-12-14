// =============================
// BASIC CHATBOT – BEGINNER VERSION
// =============================

// OVO JE KOMENTAR
// Komentari se NE IZVODE
// Koriste se za objašnjenje koda

// -----------------------------
// 1. ISPIS U KONZOLU (console.log)
// -----------------------------
console.log("Hello! My name is Aid.");
console.log("I was created in 2020.");

// -----------------------------
// 2. ULAZ OD KORISNIKA (prompt)
// -----------------------------
console.log("Please, remind me your name.");

// prompt() čeka da korisnik upiše nešto
// Ono što korisnik upiše sprema se u varijablu
let name = prompt("Enter your name:");

// -----------------------------
// 3. RAD S STRING VARIJABLAMA
// -----------------------------
console.log("What a great name you have, " + name + "!");

// -----------------------------
// 4. POGAĐANJE GODINA
// -----------------------------
console.log("Let me guess your age.");
console.log("Enter the remainders of dividing your age by 3, 5 and 7.");

// Ulaz s konzole (prompt uvijek vraća STRING)
// Zato koristimo Number() da dobijemo BROJ
let remainder3 = Number(prompt("Remainder when divided by 3:"));
let remainder5 = Number(prompt("Remainder when divided by 5:"));
let remainder7 = Number(prompt("Remainder when divided by 7:"));

// -----------------------------
// 5. ARITMETIČKE OPERACIJE
// +  -  *  /  %
// -----------------------------
let age = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105;
console.log("Your age is " + age + "; that's a good time to start programming!");

// -----------------------------
// 6. BMI KALKULATOR
// -----------------------------
console.log("Let's test your BMI index!");

// Boolean varijabla (true / false)
let repeat = true;

// while petlja se izvršava dok je uvjet TRUE
while (repeat == true) {

    // -----------------------------
    // ULAZNI PODACI
    // -----------------------------
    let height = Number(prompt("Enter your height in cm:"));
    let weight = Number(prompt("Enter your weight in kg:"));
    let gender = prompt("Enter your gender (M/F):");

    // -----------------------------
    // IZRAČUN BMI-a
    // -----------------------------
    let bmi = weight / ((height / 100) * (height / 100));
    console.log("BMI is: " + bmi);

    // -----------------------------
    // IF / ELSE GRANANJE
    // -----------------------------
    if (gender == "M") {
        if (bmi < 20.7) {
            console.log("Too low");
        } else if (bmi <= 26.4) {
            console.log("Ideal");
        } else if (bmi <= 27.8) {
            console.log("A little above normal");
        } else if (bmi <= 31.1) {
            console.log("High");
        } else {
            console.log("Too high");
        }

    } else if (gender == "F") {
        if (bmi < 19.1) {
            console.log("Too low");
        } else if (bmi <= 25.8) {
            console.log("Ideal");
        } else if (bmi <= 27.3) {
            console.log("A little above normal");
        } else if (bmi <= 32.2) {
            console.log("High");
        } else {
            console.log("Too high");
        }
    } else {
        // Ako spol nije M ili F
        console.log("Please, try again.");
    }

    // -----------------------------
    // PONAVLJANJE (Y / N)
    // -----------------------------
    let answer = prompt("Calculate again? (Y/N)");

    // Operator uspoređivanja
    if (answer == "N") {
        repeat = false; // prekida while petlju
    }
}

// -----------------------------
// KRAJ PROGRAMA
// -----------------------------
console.log("Thank you! Bot session finished.");
