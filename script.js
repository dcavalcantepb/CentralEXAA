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

    const mission = {
        title: "",
        briefing: "",

        acts: []
    };

    // Cria a quantidade de atos definida pelo usuário
    for (let i = 1; i <= missionState.acts; i++) {

        mission.acts.push({

            id: i,

            title: `Ato ${i}`,

            description: "",

            primaryObjective: "",

            secondaryObjectives: [],

            resolution: {
                successThreshold: missionState.successes,
                failureThreshold: missionState.failures
            },

            threats: [],

            turningPoint: {
                event: "",
                onSuccess: "",
                onFailure: ""
            }

        });

    }

    console.clear();
    console.log("MISSÃO GERADA:");
    console.log(mission);

    document.getElementById("output").innerText =
        "Missão estruturada! Veja o console (F12).";

}

function updateUI() {

    document.getElementById("acts").innerText = missionState.acts;
    document.getElementById("threats").innerText = missionState.threats;
    document.getElementById("successes").innerText = missionState.successes;
    document.getElementById("failures").innerText = missionState.failures;

}

updateUI();
