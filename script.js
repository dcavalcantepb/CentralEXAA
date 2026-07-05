/*
==========================================================
EXAA - CENTRAL OPERACIONAL
script.js

Responsabilidade:
Inicializar a aplicação.
==========================================================
*/

const missionState = {

    acts: 3,
    threats: 2,
    successes: 5,
    failures: 3,

    currentMission: null

};

function initializeApp() {

    console.clear();

    console.log("=================================");
    console.log("EXAA CENTRAL OPERACIONAL");
    console.log("Sistema inicializado.");
    console.log("=================================");

    updateUI();

}

window.onload = initializeApp;
