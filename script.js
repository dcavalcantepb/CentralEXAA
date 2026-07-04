const missionState = {

    acts: 3,
    threats: 2,
    successes: 3,
    failures: 3

};

function changeValue(id, change, min, max) {

    missionState[id] += change;

    if (missionState[id] < min) missionState[id] = min;
    if (missionState[id] > max) missionState[id] = max;

    updateUI();

}

function receiveMission() {

    const mission = generateMission();

    renderMission(mission);

    enterMissionMode();

    console.log(mission);

}

function generateMission() {

    const missionType = getRandomMissionType();

    const mission = {

        id: generateMissionId(),

        type: missionType.name,

        title: `Operação ${missionType.name}`,

        briefing: missionType.briefing,

        createdAt: new Date(),

        acts: []

    };

    for (let i = 0; i < missionState.acts; i++) {

        mission.acts.push(createAct(i, missionType));

    }

    return mission;

}

function renderMission(mission) {

    let html = `
        <h2>${mission.title}</h2>
        <p><strong>Tipo:</strong> ${mission.type}</p>
        <p>${mission.briefing}</p>
        <hr>
    `;

    mission.acts.forEach(act => {

        html += `
            <section class="mission-act">
                <h3>Ato ${act.order}</h3>
                <p>${act.description}</p>
                <p><strong>Objetivo:</strong> ${act.primaryObjective}</p>
                <hr>
            </section>
        `;

    });

    document.getElementById("missionView").innerHTML = html;

}

function createAct(index, missionType) {

    let pool;

    if (index === 0) {

        pool = missionType.opening;

    } else if (index === missionState.acts - 1) {

        pool = missionType.ending;

    } else {

        pool = missionType.middle;

    }

    const template = getRandomItem(pool);

    return {

        id: template.id,

        order: index + 1,

        description: template.description,

        primaryObjective: template.primaryObjective,

        secondaryObjectives: [],

        threats: [],

        resolution: {

            successThreshold: missionState.successes,
            failureThreshold: missionState.failures

        },

        turningPoint: {

            description: "",
            successOutcome: "",
            failureOutcome: ""

        }

    };

}

function getRandomMissionType() {

    return getRandomItem(Object.values(missionDatabase));

}

function getRandomItem(array) {

    const randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];

}

function generateMissionId() {

    return Math.floor(Math.random() * 9000) + 1000;

}

function enterMissionMode() {

    // versão correta (não quebra layout)
    document.getElementById("controlPanel").style.opacity = "0.3";
    document.getElementById("controlPanel").style.pointerEvents = "none";

}

function updateUI() {

    document.getElementById("acts").innerText = missionState.acts;
    document.getElementById("threats").innerText = missionState.threats;
    document.getElementById("successes").innerText = missionState.successes;
    document.getElementById("failures").innerText = missionState.failures;

}

updateUI();
