// =====================
// SELECTORS
// =====================
const screens = document.querySelectorAll(".screen");
const nameInput = document.getElementById("name-input");
const nameConfirmText = document.getElementById("name-confirm-text");
const ageResultText = document.getElementById("age-result-text");
const bmiResultText = document.getElementById("bmi-result-text");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const genderSelect = document.getElementById("gender");

// =====================
// HELPER FUNCTIONS
// =====================
// Show a screen and hide others
function showScreen(screenId) {
  screens.forEach(s => s.classList.add("hidden"));
  document.getElementById(screenId).classList.remove("hidden");
}

// Calculate age from remainders
function calculateAge(r3, r5, r7) {
  return (r3 * 70 + r5 * 21 + r7 * 15) % 105;
}

// Calculate BMI
function calculateBMI(height, weight) {
  return weight / ((height / 100) ** 2);
}

// Classify BMI
function classifyBMI(bmi, gender) {
  if (gender === "M") {
    if (bmi < 20.7) return "Too low";
    if (bmi <= 26.4) return "Ideal";
    if (bmi <= 27.8) return "A little above normal";
    if (bmi <= 31.1) return "High";
    if (bmi <= 45.3) return "Too high";
    return "Extremely high";
  } else {
    if (bmi < 19.1) return "Too low";
    if (bmi <= 25.8) return "Ideal";
    if (bmi <= 27.3) return "A little above normal";
    if (bmi <= 32.2) return "High";
    if (bmi <= 44.7) return "Too high";
    return "Extremely high";
  }
}

// =====================
// BUTTON EVENT LISTENERS
// =====================
// Step 1: Greeting
document.getElementById("greet-next").addEventListener("click", () => {
  showScreen("name-screen");
});

// Step 2: Name submission
document.getElementById("name-next").addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (!name) return alert("Please enter your name.");
  nameConfirmText.textContent = `What a great name you have, ${name}!`;
  showScreen("name-confirm-screen");
});

// Step 3: Proceed after name confirmation
document.getElementById("age-next").addEventListener("click", () => {
  showScreen("age-screen");
});

// Step 4: Age calculation
document.getElementById("age-submit").addEventListener("click", () => {
  const r3 = Number(document.getElementById("r3").value);
  const r5 = Number(document.getElementById("r5").value);
  const r7 = Number(document.getElementById("r7").value);

  if ([r3,r5,r7].some(isNaN)) return alert("Please enter all remainders.");
  const age = calculateAge(r3,r5,r7);

  if (age >= 40) {
    ageResultText.textContent = `Your age is ${age}. It's never too late to start programming!`;
  } else {
    ageResultText.textContent = `Your age is ${age}; that's a good time to start programming!`;
  }

  showScreen("age-result-screen");
});

// Step 5: Go to BMI input
document.getElementById("bmi-next").addEventListener("click", () => {
  showScreen("bmi-screen");
});

// Step 6: BMI calculation
document.getElementById("bmi-calc").addEventListener("click", () => {
  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);
  const gender = genderSelect.value;

  if (!height || !weight || !gender) return alert("Please fill in all BMI fields.");
  const bmi = calculateBMI(height, weight);
  const classification = classifyBMI(bmi, gender);

  bmiResultText.textContent = `BMI is: ${bmi.toFixed(2)}\n${classification}`;
  showScreen("bmi-result-screen");
});

// Step 7: Repeat BMI
document.getElementById("bmi-repeat").addEventListener("click", () => {
  heightInput.value = "";
  weightInput.value = "";
  genderSelect.value = "";
  showScreen("bmi-screen");
});

// End button
document.getElementById("end-btn").addEventListener("click", () => {
  alert("Thank you! Bot session finished.");
  showScreen("greet-screen"); // restart flow
});

// =====================
// ENTER KEY GLOBAL HANDLER
// =====================
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const visibleButton = document.querySelector(".screen:not(.hidden) button");
    if (visibleButton) visibleButton.click();
  }
});
