// =====================
// STATE & DATA
// =====================

// Finite State Machine state
let state = "INTRO";

// Centralized user data storage
const data = {};

// =====================
// DOM ELEMENTS
// =====================

const botText = document.getElementById("bot-text");
const inputs = document.getElementById("inputs");
const nextBtn = document.getElementById("next-btn");

// =====================
// UI HELPERS
// =====================

// Set bot message
function setText(text) {
    botText.textContent = text;
}

// Clear all input fields
function clearInputs() {
    inputs.innerHTML = "";
}

// Create a single input field
function createInput(id, placeholder) {
    const input = document.createElement("input");
    input.id = id;
    input.placeholder = placeholder;
    inputs.appendChild(input);
    input.focus();
}

// Get input value safely
function value(id) {
    return document.getElementById(id)?.value;
}

// =====================
// BMI CLASSIFICATION
// =====================

function classifyBMI(bmi, gender) {
    if (gender === "M") {
        if (bmi < 20.7) return "Too low";
        if (bmi <= 26.4) return "Ideal";
        if (bmi <= 27.8) return "A little above normal";
        if (bmi <= 31.1) return "High";
        if (bmi <= 45.3) return "Obese";
        return "Extremely obese";
    }

    // Female
    if (bmi < 19.1) return "Too low";
    if (bmi <= 25.8) return "Ideal";
    if (bmi <= 27.3) return "A little above normal";
    if (bmi <= 32.2) return "High";
    if (bmi <= 44.7) return "Obese";
    return "Extremely obese";
}

// =====================
// RENDER FUNCTION
// =====================

function render() {
    clearInputs();

    switch (state) {

        case "INTRO":
            setText("Hello! My name is Aid.\nI was created in 2025.");
            break;

        case "ASK_NAME":
            setText("Please, remind me your name.");
            createInput("name", "Your name");
            break;

        case "NAME_CONFIRM":
            setText(`Nice to meet you, ${data.name}!`);
            break;

        case "AGE_R3":
            setText("Enter remainder of your age divided by 3:");
            createInput("r3", "0–2");
            break;

        case "AGE_R5":
            setText("Enter remainder of your age divided by 5:");
            createInput("r5", "0–4");
            break;

        case "AGE_R7":
            setText("Enter remainder of your age divided by 7:");
            createInput("r7", "0–6");
            break;

        case "AGE_RESULT":
            const age =
                (data.r3 * 70 + data.r5 * 21 + data.r7 * 15) % 105;

            setText(
                age >= 40
                    ? `You are ${age}. It's never too late to start programming!`
                    : `You are ${age}. That's a good time to start programming!`
            );
            break;

        case "BMI_HEIGHT":
            setText("Enter your height (cm):");
            createInput("height", "Height in cm");
            break;

        case "BMI_WEIGHT":
            setText("Enter your weight (kg):");
            createInput("weight", "Weight in kg");
            break;

        case "BMI_GENDER":
            setText("Enter your gender (M/F):");
            createInput("gender", "M or F");
            break;

        case "BMI_RESULT":
            const bmi =
                data.weight / Math.pow(data.height / 100, 2);

            const category = classifyBMI(bmi, data.gender);

            setText(`Your BMI is ${bmi.toFixed(2)}\nCategory: ${category}`);
            break;

        case "BMI_REPEAT":
            setText("Do you want to calculate BMI again? (yes / no)");
            createInput("repeat", "yes or no");
            break;

        case "END":
            setText("Thank you for using HealthyBot!");
            nextBtn.style.display = "none";
            break;
    }
}

// =====================
// STATE TRANSITIONS
// =====================

nextBtn.addEventListener("click", () => {

    switch (state) {

        case "INTRO":
            state = "ASK_NAME";
            break;

        case "ASK_NAME":
            data.name = value("name");
            state = "NAME_CONFIRM";
            break;

        case "NAME_CONFIRM":
            state = "AGE_R3";
            break;

        case "AGE_R3":
            data.r3 = Number(value("r3"));
            state = "AGE_R5";
            break;

        case "AGE_R5":
            data.r5 = Number(value("r5"));
            state = "AGE_R7";
            break;

        case "AGE_R7":
            data.r7 = Number(value("r7"));
            state = "AGE_RESULT";
            break;

        case "AGE_RESULT":
            state = "BMI_HEIGHT";
            break;

        case "BMI_HEIGHT":
            data.height = Number(value("height"));
            state = "BMI_WEIGHT";
            break;

        case "BMI_WEIGHT":
            data.weight = Number(value("weight"));
            state = "BMI_GENDER";
            break;

        case "BMI_GENDER":
            data.gender = value("gender").toUpperCase();
            state = "BMI_RESULT";
            break;

        case "BMI_RESULT":
            state = "BMI_REPEAT";
            break;

        case "BMI_REPEAT":
            const answer = value("repeat").toLowerCase();

            if (answer === "yes") {
                // Reset only BMI-related data
                delete data.height;
                delete data.weight;
                delete data.gender;
                state = "BMI_HEIGHT";
            } else {
                state = "END";
            }
            break;
    }

    render();
});

// =====================
// ENTER KEY SUPPORT
// =====================

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        nextBtn.click();
    }
});

// =====================
// START APP
// =====================

render();
