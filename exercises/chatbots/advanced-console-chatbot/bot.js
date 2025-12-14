// =====================
// CONSTANTS
// =====================
const BOT_NAME = "Advanced HealthyBot";
const BOT_YEAR = 2025;

const AGE_MODULO = 105;
const AGE_COEFFICIENTS = {
    r3: 70,
    r5: 21,
    r7: 15
};

// =====================
// HELPERS
// =====================
function output(message) {
    console.log(message);
    alert(message);
}

function ask(question) {
    return prompt(question);
}

// =====================
// BOT STEPS
// =====================
function greet() {
    output(`Hello! My name is ${BOT_NAME}.
I was created in ${BOT_YEAR}.`);
}

function getName() {
    const name = ask("Please, remind me your name:");
    output(`What a great name you have, ${name}!`);
}

function guessAge() {
    output("Let me guess your age!");
    output("Enter the remainders of dividing your age by 3, 5 and 7.");

    const r3 = Number(ask("Remainder when divided by 3 (0-2):"));
    const r5 = Number(ask("Remainder when divided by 5 (0-4):"));
    const r7 = Number(ask("Remainder when divided by 7 (0-6):"));

    const age =
        (r3 * AGE_COEFFICIENTS.r3 +
         r5 * AGE_COEFFICIENTS.r5 +
         r7 * AGE_COEFFICIENTS.r7) % AGE_MODULO;

    if (age >= 40) {
        output(`Your age is ${age}. It's never too late to start programming!`);
    } else {
        output(`Your age is ${age}; that's a good time to start programming!`);
    }
}

// =====================
// BMI LOGIC
// =====================
function calculateBMI(heightCm, weightKg) {
    const heightM = heightCm / 100;
    return weightKg / (heightM * heightM);
}

function classifyBMI(bmi, gender) {
    const limits = {
        M: [
            [20.7, "Too low"],
            [26.4, "Ideal"],
            [27.8, "A little above normal"],
            [31.1, "High"],
            [45.3, "Too high"],
            [Infinity, "Extremely high"]
        ],
        F: [
            [19.1, "Too low"],
            [25.8, "Ideal"],
            [27.3, "A little above normal"],
            [32.2, "High"],
            [44.7, "Too high"],
            [Infinity, "Extremely high"]
        ]
    };

    for (const [limit, label] of limits[gender]) {
        if (bmi <= limit) return label;
    }
}

function bmiLoop() {
    output("Let's test your BMI index!");

    let more = "Y";

    while (more === "Y") {
        const height = Number(ask("Enter your height in cm:"));
        const weight = Number(ask("Enter your weight in kg:"));
        const gender = ask("Enter your gender (M/F):").toUpperCase();

        if (!["M", "F"].includes(gender)) {
            output("Invalid gender. Please try again.");
            continue;
        }

        const bmi = calculateBMI(height, weight);
        const classification = classifyBMI(bmi, gender);

        output(`BMI is: ${bmi.toFixed(2)}
${classification}`);

        more = ask("Do you want to calculate BMI again? (Y/N)").toUpperCase();
    }

    output("Thank you! HealthyBot session finished.");
}

// =====================
// PROGRAM START
// =====================
function main() {
    greet();
    getName();
    guessAge();
    bmiLoop();
}

main();
