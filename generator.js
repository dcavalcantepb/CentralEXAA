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

import { missionDatabase } from "./database.js";
import { createEmptyMission, createEmptyAct, createEmptyObjective, createEmptyThreat, createEmptyTurningPoint } from "./factories.js";
import { getRandomItem, randomInt, shuffleArray } from "./utils.js";
import { missionState } from "./state.js";


/* ======================================================
   GERAR MISSÃO COMPLETA
====================================================== */

export function generateMission(config = missionState) {

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

        acts.push(createActFromTemplate(i, totalActs, missionType, config));

    }

    assignThreats(acts, missionType.threats, config.threats);

    return acts;

}


/* ======================================================
   CRIAR ATO A PARTIR DE TEMPLATE
====================================================== */

function createActFromTemplate(index, totalActs, missionType, config) {

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

    act.turningPoint = createTurningPointFromTemplate(getRandomItem(missionType.turningPoints));

    act.resolution.successThreshold = config.successes;

    act.resolution.failureThreshold = config.failures;

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
   PONTO DE VIRADA (ADAPTADOR SIMPLES)
====================================================== */

function createTurningPointFromTemplate(template) {

    const turningPoint = createEmptyTurningPoint();

    turningPoint.title = template.title;

    turningPoint.description = template.description;

    turningPoint.successOutcome = template.successOutcome;

    turningPoint.failureOutcome = template.failureOutcome;

    return turningPoint;

}


/* ======================================================
   AMEAÇAS (DISTRIBUÍDAS ENTRE OS ATOS)
====================================================== */

function assignThreats(acts, threatPool, totalThreats) {

    const chosen = shuffleArray(threatPool).slice(0, totalThreats);

    chosen.forEach((template, index) => {

        const act = acts[index % acts.length];

        act.threats.push(createThreatFromTemplate(template));

    });

}


/* ======================================================
   AMEAÇA (ADAPTADOR SIMPLES)
====================================================== */

function createThreatFromTemplate(template) {

    const threat = createEmptyThreat();

    threat.id = template.id;

    threat.name = template.name;

    threat.description = template.description;

    threat.successesToDefeat = template.successesToDefeat;

    threat.damage = template.damage;

    return threat;

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
