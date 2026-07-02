function changeValue(id, change, min, max) {

    const element = document.getElementById(id);

    let value = Number(element.innerText);

    value += change;

    if (value < min) value = min;

    if (value > max) value = max;

    element.innerText = value;

}

function generateMission() {

const acts = Number(document.getElementById("acts").innerText);
const threats = Number(document.getElementById("threats").innerText);
const successes = Number(document.getElementById("successes").innerText);
const failures = Number(document.getElementById("failures").innerText);
    
const mission = {
        acts: Number(acts),
        threats: Number(threats),
        successes: Number(successes),
        failures: Number(failures)
    };

    console.log("MISSÃO GERADA:");
    console.log(mission);

    document.getElementById("output").innerText =
        "Missão gerada! Veja o console (F12)";
}
