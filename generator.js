/*
==========================================================
EXAA CENTRAL OPERACIONAL

Arquivo:
generator.js

Responsabilidade:
Orquestrar a criação de missões usando database + factories + utils.

NÃO:
- não cria entidades diretamente
- não renderiza UI
- não contém funções utilitárias
==========================================================
*/


/* ======================================================
   GERAR MISSÃO COMPLETA
====================================================== */

function generateMission(config = missionState) {

    const missionType = getRandomMissionType();

    const mission = createEmptyMission();

    mission.id = generateMissionId();

    mission.type = missionType.name;

    mission.title = `Operação ${missionType.name}`;

    mission.briefing = missionType.briefing;

    mission.acts = buildActs(config, missionType);

    return mission;

}


/* ======================================================
   CONSTRUIR ATOS
====================================================== */

function buildActs(config, missionType) {

    const acts = [];

    const totalActs = config.acts;

    for (let i = 0; i < totalActs; i++) {

        acts.push(createActFromTemplate(i, totalActs, missionType));

    }

    return acts;

}


/* ======================================================
   CRIAR ATO A PARTIR DE TEMPLATE
====================================================== */

function createActFromTemplate(index, totalActs, missionType) {

    let pool = null;

    if (index === 0) {

        pool = missionType.opening;

    } else if (index === totalActs - 1) {

        pool = missionType.ending;

    } else {

        pool = missionType.middle;

    }

    const template = getRandomItem(pool);

    const act = createEmptyAct();

    act.id = template.id;

    act.order = index + 1;

    act.description = template.description;

    act.primaryObjective = createObjectiveFromTemplate(template.primaryObjective);

    return act;

}


/* ======================================================
   OBJETIVO (ADAPTADOR SIMPLES)
====================================================== */

function createObjectiveFromTemplate(text) {

    const obj = createEmptyObjective();

    obj.description = text;

    return obj;

}


/* ======================================================
   ID DA MISSÃO
====================================================== */

function generateMissionId() {

    return randomInt(1000, 9999);

}


/* ======================================================
   ESCOLHA DE TIPO DE MISSÃO
====================================================== */

function getRandomMissionType() {

    const types = Object.values(missionDatabase);

    return getRandomItem(types);

}
