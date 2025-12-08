// ----------------------
//   BASIC STOPWATCH
//   Start / Stop / Lap / Reset
//   Svaki krug(lap) bilježi vrijeme od prethodnog kruga
//   Nakon kruga(lap) – timer kreće opet od nule
// ----------------------

// Varijable koje koristimo
let timerId = null;     // referenca na setInterval (potrebna da ga kasnije možemo zaustaviti)
let running = false;    // je li štoperica trenutno aktivna (true/false)

// Mjerenje vremena za trenutni lap
let lapOffset = 0;      // koliko je proteklo u trenutnom lapu prije pauze (u ms)
let lapStart = 0;       // vrijeme kad je trenutni lap počeo (koristimo Date.now())

// Lista svih krugova (lapova). Svaki lap spremamo kao trajanje u milisekundama.
let laps = [];

// ----------------------
// Funkcija za formatiranje milisekundi u "MM:SS.CC"
// (minuta : sekunde . centisekunde)
// ----------------------
function formatMs(ms) {
    const totalCentis = Math.floor(ms / 10);    // od ms radimo centisekunde (1cs = 10ms)
    const centis = totalCentis % 100;           // ostatak za .cc dio
    const totalSeconds = Math.floor(totalCentis / 100);
    const seconds = totalSeconds % 60;          // sekunde unutar minute (0–59)
    const minutes = Math.floor(totalSeconds / 60);

    // dodajemo nule ispred da izgleda uredno (05 umjesto 5)
    const mm = minutes < 10 ? "0" + minutes : String(minutes);
    const ss = seconds < 10 ? "0" + seconds : String(seconds);
    const cc = centis  < 10 ? "0" + centis  : String(centis);

    return `${mm}:${ss}.${cc}`;
}

// ----------------------
// Ažurira glavni ekran štoperice
// ----------------------
function updateDisplay(ms) {
    document.getElementById("display").innerText = formatMs(ms);
}

// ----------------------
// Funkcija koju poziva setInterval svakih 10ms
// Koristi se dok je timer pokrenut – izračunava proteklo vrijeme lapa
// ----------------------
function tick() {
    const now = Date.now();        // trenutni timestamp u milisekundama
    const elapsed = now - lapStart; // koliko je proteklo od početka lapa
    updateDisplay(elapsed);
}

// ----------------------
// Start / Stop dugme
// ----------------------
function startStop() {
    if (!running) {
        // Ako stopwatch NIJE pokrenut – pokreni ga

        // Ako nastavljamo nakon pauze, lapStart mora uzeti u obzir lapOffset
        lapStart = Date.now() - lapOffset;

        // Pokrećemo tick funkciju svakih 10ms
        timerId = setInterval(tick, 10);

        running = true;
        document.getElementById("startStop").innerText = "Stop";

    } else {
        // Ako JE pokrenut – pauziramo stopwatch

        clearInterval(timerId);     // zaustavi interval
        timerId = null;

        // Spremamo koliko je proteklo u ovom lapu
        lapOffset = Date.now() - lapStart;

        running = false;
        document.getElementById("startStop").innerText = "Start";
    }
}

// ----------------------
// LAP – spremi trajanje lapa i kreni novi od nule
// ----------------------
function lap() {
    if (!running) return; // ignoriši ako stopwatch nije pokrenut

    const now = Date.now();
    const lapMs = now - lapStart; // koliko je trajao trenutni lap

    laps.unshift(lapMs);  // stavimo novi lap na vrh liste (najnoviji = Lap 1)

    // Resetiramo timer tako da odmah počinje novi lap
    lapStart = Date.now();
    lapOffset = 0;

    updateDisplay(0); // glavni display odmah kreće ispočetka

    renderLaps(); // osvježi prikaz liste krugova + fastest/slowest
}

// ----------------------
// RESET – sve ispocetka
// ----------------------
function resetAll() {
    clearInterval(timerId);
    timerId = null;
    running = false;

    lapOffset = 0;
    lapStart = 0;

    laps = []; // brišemo sve lapove

    document.getElementById("startStop").innerText = "Start";
    updateDisplay(0);

    // Očisti listu lapova
    document.getElementById("laps").innerHTML = "";
    document.getElementById("fastestTime").innerText = "-";
    document.getElementById("slowestTime").innerText = "-";
}

// ----------------------
// Prikaz svih Lapova + označi fastest/slowest
// ----------------------
function renderLaps() {
    const list = document.getElementById("laps");
    list.innerHTML = ""; // obriši staru listu i stvori novu

    if (laps.length === 0) {
        document.getElementById("fastestTime").innerText = "-";
        document.getElementById("slowestTime").innerText = "-";
        return;
    }

    // Sve vrijednosti su već u ms – iz njih direktno računamo
    const numeric = laps.slice(); // kopija array-a

    const fastest = Math.min(...numeric); // najkraći lap
    const slowest = Math.max(...numeric); // najduži lap

    // Ispis liste lapova
    numeric.forEach((ms, i) => {
        const li = document.createElement("li");
        li.innerText = `Lap ${i+1}: ${formatMs(ms)}`;

        // ako je jednak najbržem, označi zeleno
        if (ms === fastest) li.classList.add("fastest");

        // ako je jednak najsporijem, označi crveno
        if (ms === slowest) li.classList.add("slowest");

        list.appendChild(li);
    });

    // Ažuriranje prikaza ispod liste
    document.getElementById("fastestTime").innerText = formatMs(fastest);
    document.getElementById("slowestTime").innerText = formatMs(slowest);
}

// ----------------------
// Event listeneri na dugme
// ----------------------
document.getElementById("startStop").onclick = startStop;
document.getElementById("lap").onclick = lap;
document.getElementById("reset").onclick = resetAll;

// ----------------------
// Na početku appa – pokaži čistu nulu
// ----------------------
updateDisplay(0);
