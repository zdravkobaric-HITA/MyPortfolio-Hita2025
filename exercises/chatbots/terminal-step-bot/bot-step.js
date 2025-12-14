// =====================================================
// BOT CONSTANTS
// =====================================================

// konstante su vrijednosti koje se NE MIJENJAJU tijekom programa
const BOT_NAME = "HealthyBot";
const BOT_YEAR = 2025;


// =====================================================
// READLINE SETUP (Node.js input/output)
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
// PROGRAM STATE (STEP SYSTEM)
// =====================================================

// step varijabla pamti u kojoj fazi programa se nalazimo
// na temelju nje znamo što znači korisnikov unos
let step = 0;


// =====================================================
// USER DATA VARIABLES
// =====================================================

// varijable u koje spremamo podatke korisnika
let name = "";

let r3 = 0;
let r5 = 0;
let r7 = 0;

let height = 0;
let weight = 0;


// =====================================================
// HELPER FUNCTION
// =====================================================

// mala funkcija za ispis u konzolu
function say(message) {
    console.log(message);
}


// =====================================================
// PROGRAM START
// =====================================================

// prvi ispis bota
say("Hello! My name is " + BOT_NAME + ".");
say("I was created in " + BOT_YEAR + ".");
say("Please, remind me your name.");


// =====================================================
// INPUT HANDLER
// =====================================================

// ovaj event se pokreće svaki put kad korisnik pritisne ENTER
rl.on("line", (input) => {

    // -------------------------------------------------
    // STEP 0 → USER ENTERS NAME
    // -------------------------------------------------
    if (step === 0) {
        name = input; // spremamo ime

        say("What a great name you have, " + name + "!");
        say("Let me guess your age.");
        say("Enter remainders of dividing your age by 3, 5 and 7.");

        step = 1; // prelazimo na sljedeći korak
        return;
    }

    // -------------------------------------------------
    // STEP 1 → REMAINDER /3
    // -------------------------------------------------
    if (step === 1) {
        r3 = Number(input); // pretvaramo string u broj
        step = 2;
        return;
    }

    // -------------------------------------------------
    // STEP 2 → REMAINDER /5
    // -------------------------------------------------
    if (step === 2) {
        r5 = Number(input);
        step = 3;
        return;
    }

    // -------------------------------------------------
    // STEP 3 → REMAINDER /7 + AGE CALCULATION
    // -------------------------------------------------
    if (step === 3) {
        r7 = Number(input);

        // formula za izračun godina
        const age = (r3 * 70 + r5 * 21 + r7 * 15) % 105;

        if (age >= 40) {
            say("Your age is " + age + ". It's never too late to start programming!");
        } else {
            say("Your age is " + age + "; that's a good time to start programming!");
        }

        say("Let's calculate your BMI.");
        say("Enter your height in cm:");

        step = 4;
        return;
    }

    // -------------------------------------------------
    // STEP 4 → HEIGHT INPUT
    // -------------------------------------------------
    if (step === 4) {
        height = Number(input);
        say("Enter your weight in kg:");
        step = 5;
        return;
    }

    // -------------------------------------------------
    // STEP 5 → WEIGHT INPUT + BMI CALCULATION
    // -------------------------------------------------
    if (step === 5) {
        weight = Number(input);

        // BMI formula:
        // weight / (height in meters)^2
        const bmi = weight / Math.pow(height / 100, 2);

        say("Your BMI is " + bmi.toFixed(2));

        // BMI classification
        if (bmi < 18.5) {
            say("Classification: Underweight");
        } else if (bmi < 25) {
            say("Classification: Normal");
        } else if (bmi < 30) {
            say("Classification: Overweight");
        } else {
            say("Classification: Obese");
        }

        say("Do you want to calculate BMI again? (Y/N)");
        step = 6;
        return;
    }

    // -------------------------------------------------
    // STEP 6 → BMI AGAIN?
    // -------------------------------------------------
    if (step === 6) {
        const answer = input.toUpperCase(); // pretvaramo u velika slova

        if (answer === "Y") {
            // vraćamo se na unos visine
            say("Enter your height in cm:");
            step = 4;
        } else {
            say("Thank you! Bot session finished.");
            rl.close(); // zatvaramo program
        }
    }
});
