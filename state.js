/*
==========================================================
EXAA CENTRAL OPERACIONAL

Arquivo:
state.js

Responsabilidade:
Manter o estado global da aplicação e centralizar toda mutação
desse estado (nenhum outro arquivo deve atribuir diretamente a
campos de missionState).

Autor:
Danilo Cavalcante

==========================================================
*/

export const missionState = {

    // Configuration (controlled by sidebar)
    acts: 3,
    threats: 2,
    successes: 3,
    failures: 3,

    // Runtime state (generated mission)
    currentMission: null,

    // UI state
    isSidebarOpen: true,
    isMissionMode: false

};


/* ======================================================
   ALTERA UM VALOR DE CONFIGURAÇÃO
====================================================== */

export function setConfigValue(field, value) {

    missionState[field] = value;

}


/* ======================================================
   DEFINE A MISSÃO ATUAL
====================================================== */

export function setCurrentMission(mission) {

    missionState.currentMission = mission;
    missionState.isMissionMode = mission !== null;

}


/* ======================================================
   ABRE / FECHA A SIDEBAR
====================================================== */

export function setSidebarOpen(isOpen) {

    missionState.isSidebarOpen = isOpen;

}
