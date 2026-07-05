/*
==========================================================
EXAA CENTRAL OPERACIONAL

Arquivo:
generator.js

Responsabilidade:
Gerar toda a estrutura de uma missão.

Autor:
Danilo Cavalcante

==========================================================
*/


/* ======================================================
   GERA UMA MISSÃO COMPLETA
====================================================== */

function generateMission() {

    const missionType = getRandomMissionType();

    const mission = createEmptyMission();

    mission.id = generateMissionId();
    mission.type = missionType.name;
    mission.title = `Operação ${missionType.name}`;
    mission.briefing = missionType.briefing;

    for (let i = 0; i < missionState.acts; i++) {

        const act = createAct(i, missionType);

        mission.acts.push(act);

    }

    return mission;

}


/* ======================================================
   GERA UM ATO
====================================================== */

function createAct(index, missionType) {

    let pool;

    if (index === 0) {

        pool = missionType.opening;

    }

    else if (index === missionState.acts - 1) {

        pool = missionType.ending;

    }

    else {

        pool = missionType.middle;

    }

    const template = getRandomItem(pool);

    const act = createEmptyAct();

    act.id = template.id;

    act.order = index + 1;

    act.description = template.description;

    act.primaryObjective = template.primaryObjective;

    act.resolution.successThreshold =
        missionState.successes;

    act.resolution.failureThreshold =
        missionState.failures;

    return act;

}


/* ======================================================
   TIPO DE MISSÃO ALEATÓRIO
====================================================== */

function getRandomMissionType() {

    return getRandomItem(

        Object.values(missionDatabase)

    );

}


/* ======================================================
   ITEM ALEATÓRIO
====================================================== */

function getRandomItem(array) {

    const randomIndex = Math.floor(

        Math.random() * array.length

    );

    return array[randomIndex];

}


/* ======================================================
   ID DA MISSÃO
====================================================== */

function generateMissionId() {

    return Math.floor(

        Math.random() * 9000

    ) + 1000;

}
