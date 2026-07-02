const missionState = {
    acts: 3,
    threats: 2,
    successes: 5,
    failures: 3
};

function changeValue(id, change, min, max) {

    missionState[id] += change;

    if (missionState[id] < min) missionState[id] = min;
    if (missionState[id] > max) missionState[id] = max;

    updateUI();
}

function generateMission() {

    const mission = structuredClone(missionState);

    console.log("MISSÃO GERADA:");
    console.log(mission);

    document.getElementById("output").innerText =
        "Missão gerada! Veja o console (F12)";
}
    
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

function updateUI() {
    document.getElementById("acts").innerText = missionState.acts;
    document.getElementById("threats").innerText = missionState.threats;
    document.getElementById("successes").innerText = missionState.successes;
    document.getElementById("failures").innerText = missionState.failures;
}
