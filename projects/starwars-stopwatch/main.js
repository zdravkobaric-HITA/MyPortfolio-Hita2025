// --------- Config / State ----------
const SOUND_PATHS = {
  start: "sounds/start.wav",
  stop: "sounds/stop.wav",
  lap: "sounds/lap.wav",
  running: "sounds/running.mp3",
  reset: "sounds/reset.wav"
};

let startTime = 0;
let elapsed = 0;
let interval = null;
let lastLapTime = 0;
let laps = [];
let runningAudioTimeout = null;

// --------- Elements ----------
const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("startStopBtn");
const lapBtn = document.getElementById("lapBtn");
const resetBtn = document.getElementById("resetBtn");
const lapsEl = document.getElementById("laps");
const toggle = document.getElementById("themeToggle");
const fastDisplay = document.getElementById("fastDisplay");
const slowDisplay = document.getElementById("slowDisplay");

// --------- Audio ----------
const startAudio = new Audio(SOUND_PATHS.start);
const stopAudio = new Audio(SOUND_PATHS.stop);
const lapAudio = new Audio(SOUND_PATHS.lap);
const runningAudio = new Audio(SOUND_PATHS.running);
const resetAudio = new Audio(SOUND_PATHS.reset);

runningAudio.loop = true;

function playSound(sound, volume = 0.7) {
  if (!sound) return;
  try {
    sound.pause();
    sound.currentTime = 0;
    sound.volume = volume;
    sound.play().catch(() => {
    });
  } catch (e) {
  }
}

// --------- Timer helpers ----------
function format(ms) {
  const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
  const seconds = String(Math.floor(ms / 1000) % 60).padStart(2, "0");
  const centis = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
  return `${minutes}:${seconds}.${centis}`;
}

function updateTimer() {
  const now = Date.now();
  elapsed = now - startTime;
  timerEl.textContent = format(elapsed);
}

// --------- UI helpers ----------
function enable(node) { node.removeAttribute("disabled"); }
function disable(node) { node.setAttribute("disabled", ""); }

function swapButtonIcon(button, iconKey, text) {
  const isSith = document.body.classList.contains("sith-mode");
  button.setAttribute("data-icon", iconKey);
  button.innerHTML = `
    <img class="icon" src="icons/${iconKey}-${isSith ? "sith" : "jedi"}.svg">
    <span>${text}</span>
  `;
}

function updateIcons() {
  const isSith = document.body.classList.contains("sith-mode");
  document.querySelectorAll("button[data-icon]").forEach(btn => {
    const type = btn.getAttribute("data-icon");
    const img = btn.querySelector("img.icon");
    if (img) img.src = `icons/${type}-${isSith ? "sith" : "jedi"}.svg`;
  });
}

// --------- Laps rendering ----------
function renderLaps() {
  lapsEl.innerHTML = "";

  if (laps.length === 0) {
    fastDisplay.textContent = "—";
    slowDisplay.textContent = "—";
    return;
  }

  const times = laps.map(l => l.time);
  const fastest = Math.min(...times);
  const slowest = Math.max(...times);

  for (let i = laps.length - 1; i >= 0; i--) {
    const { time } = laps[i];
    const li = document.createElement("li");
    li.textContent = format(time);

    li.classList.remove("fast", "slow");
    if (time === fastest && laps.length > 1) {
      li.classList.add("fast");
      li.textContent += " — Fastest";
    }
    if (time === slowest && laps.length > 1) {
      li.classList.add("slow");
      li.textContent += " — Slowest";
    }

    lapsEl.appendChild(li);
  }

  fastDisplay.textContent = format(fastest);
  slowDisplay.textContent = format(slowest);

  lapsEl.scrollTop = lapsEl.scrollHeight;
}

// --------- Core actions ----------
function start() {
  startTime = Date.now() - elapsed;
  interval = setInterval(updateTimer, 10);

  swapButtonIcon(startBtn, "stop", "Stop");

  enable(lapBtn);
  enable(resetBtn);

  playSound(startAudio, 0.8);
  const delay = (startAudio.duration && startAudio.duration > 0)
    ? Math.max((startAudio.duration - 0.6) * 1000, 200)
    : 300;
  runningAudioTimeout = setTimeout(() => {
    playSound(runningAudio, 0.35);
  }, delay);
}

function stop() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }

  clearTimeout(runningAudioTimeout);
  runningAudioTimeout = null;
  try { runningAudio.pause(); runningAudio.currentTime = 0; } catch(e){}

  swapButtonIcon(startBtn, "start", "Start");

  disable(lapBtn);

  playSound(stopAudio, 0.8);
}

function reset() {
  playSound(resetAudio, 0.7);

  if (interval) {
    clearInterval(interval);
    interval = null;
  }
  clearTimeout(runningAudioTimeout);
  runningAudioTimeout = null;
  try { runningAudio.pause(); runningAudio.currentTime = 0; } catch(e){}

  elapsed = 0;
  lastLapTime = 0;
  laps = [];

  timerEl.textContent = format(0);
  renderLaps();

  swapButtonIcon(startBtn, "start", "Start");
  disable(lapBtn);
  disable(resetBtn);
}

function addLap() {
  const lapTime = elapsed - lastLapTime;
  lastLapTime = elapsed;

  laps.push({ time: lapTime, total: elapsed });

  playSound(lapAudio, 0.7);

  renderLaps();
}

startBtn.addEventListener("click", () => {
  if (!interval) start();
  else stop();
});

lapBtn.addEventListener("click", () => {
  if (interval) addLap();
});

resetBtn.addEventListener("click", () => {
  reset();
});

toggle.addEventListener("change", () => {
  document.body.classList.toggle("sith-mode");
  document.body.classList.toggle("jedi-mode");
  updateIcons();
});

// keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    e.preventDefault();
    if (!interval) start();
    else stop();
  }
  if (e.key === "Enter") {
    e.preventDefault();
    if (interval) addLap();
  }
  if (e.key === "Backspace") {
    e.preventDefault();
    reset();
  }
});

// --------- Init ----------
(function init() {
  timerEl.textContent = format(0);
  swapButtonIcon(startBtn, "start", "Start");
  updateIcons();

  // initial button states
  disable(lapBtn);
  disable(resetBtn);

  [startAudio, stopAudio, lapAudio, runningAudio, resetAudio].forEach(a => {
    a.preload = "auto";
    a.load();
  });
})();

const help = document.getElementById("helpToggle");
help.querySelector(".help-btn").addEventListener("click", () => {
	help.classList.toggle("show");
});

document.addEventListener("click", e => {
	if (!help.contains(e.target)) help.classList.remove("show");
});

