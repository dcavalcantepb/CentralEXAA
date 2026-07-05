/*
==========================================================
EXAA CENTRAL OPERACIONAL

Arquivo:
factories.js

Responsabilidade:
Criar todas as entidades da aplicação.

Autor:
Danilo Cavalcante

==========================================================
*/


/* ======================================================
   MISSÃO
====================================================== */

export function createEmptyMission() {

    return {

        id: null,

        type: "",

        title: "",

        briefing: "",

        createdAt: new Date(),

        acts: [],

        metadata: {

            version: "1.0",

            generatedBy: "EXAA Central"

        }

    };

}


/* ======================================================
   ATO
====================================================== */

export function createEmptyAct() {

    return {

        id: "",

        order: 0,

        description: "",

        primaryObjective: createEmptyObjective(),

        secondaryObjectives: [],

        threats: [],

        resolution: {

            successThreshold: 0,

            failureThreshold: 0

        },

        turningPoint: createEmptyTurningPoint(),

        status: {

            completed: false,

            outcome: null

        }

    };

}


/* ======================================================
   OBJETIVO
====================================================== */

export function createEmptyObjective() {

    return {

        title: "",

        description: "",

        optional: false,

        completed: false

    };

}


/* ======================================================
   AMEAÇA
====================================================== */

export function createEmptyThreat() {

    return {

        id: "",

        name: "",

        description: "",

        successesToDefeat: 1,

        damage: 1,

        defeated: false

    };

}


/* ======================================================
   PONTO DE VIRADA
====================================================== */

export function createEmptyTurningPoint() {

    return {

        title: "",

        description: "",

        successOutcome: "",

        failureOutcome: "",

        triggered: false

    };

}
