// =====================================================
// BOT CONSTANTS
// =====================================================

// konstante su vrijednosti koje se NE MIJENJAJU tijekom programa
const BOT_NAME = "HealthyBot";
const BOT_YEAR = 2025;

// =====================================================
// READLINE SETUP
// =====================================================

// require() učitava ugrađeni Node.js modul
// readline omogućuje čitanje unosa iz terminala
const readline = require("readline");

// createInterface povezuje terminal input i output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// =====================================================
// PROMISE WRAPPER FUNCTION
// =====================================================

// ova funkcija vraća Promise
// resolve() se poziva kada korisnik unese odgovor
function ask(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// =====================================================
// MAIN BOT FUNCTION (ASYNC)
// =====================================================

// async znači da možemo koristiti await unutar funkcije
async function runBot() {

    console.log("Hello! My name is " + BOT_NAME + ".");
    console.log("I was created in " + BOT_YEAR + ".");

    // await čeka da Promise završi
    const name = await ask("Please, remind me your name: ");
    console.log("What a great name you have, " + name + "!");

    console.log("Let me guess your age.");

    // korisnički unos remaindera
    const r3 = Number(await ask("Enter remainders of dividing your age by 3: "));
    const r5 = Number(await ask("Enter remainders of dividing your age by 5: "));
    const r7 = Number(await ask("Enter remainders of dividing your age by 7: "));

    // izračun godina
    const age = (r3 * 70 + r5 * 21 + r7 * 15) % 105;

    if (age >= 40) {
        console.log("Your age is " + age + ". It's never too late to start programming!");
    } else {
        console.log("Your age is " + age + "; that's a good time to start programming!");
    }

    // =================================================
    // BMI LOOP
    // =================================================

    let again = "Y";

    // while petlja se vrti dok je uvjet true
    while (again === "Y") {

        console.log("Let's calculate your BMI.");

        const height = Number(await ask("Enter your height in cm: "));
        const weight = Number(await ask("Enter your weight in kg: "));

        const bmi = weight / Math.pow(height / 100, 2);

        console.log("Your BMI is " + bmi.toFixed(2));

        if (bmi < 18.5) {
            console.log("Classification: Underweight");
        } else if (bmi < 25) {
            console.log("Classification: Normal");
        } else if (bmi < 30) {
            console.log("Classification: Overweight");
        } else {
            console.log("Classification: Obese");
        }

        again = (await ask("Do you want to calculate BMI again? (Y/N): "))
            .toUpperCase();
    }

    console.log("Thank you! Bot session finished.");
    rl.close();
}

// =====================================================
// START PROGRAM
// =====================================================

runBot();
