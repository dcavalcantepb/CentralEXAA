/*
==========================================================
EXAA CENTRAL OPERACIONAL

Arquivo:
ui.js

Responsabilidade:
Controlar toda a interface da Central Operacional.

Autor:
Danilo Cavalcante

==========================================================
*/


/* ======================================================
   ALTERAÇÃO DOS CONTROLES
====================================================== */

function changeValue(id, change, min, max) {

    missionState[id] += change;

    if (missionState[id] < min) {
        missionState[id] = min;
    }

    if (missionState[id] > max) {
        missionState[id] = max;
    }

    updateUI();

}


/* ======================================================
   ATUALIZA OS VALORES EXIBIDOS NA SIDEBAR
====================================================== */

function updateUI() {

    document.getElementById("acts").textContent = missionState.acts;

    document.getElementById("threats").textContent = missionState.threats;

    document.getElementById("successes").textContent = missionState.successes;

    document.getElementById("failures").textContent = missionState.failures;

}


/* ======================================================
   ABRIR / FECHAR SIDEBAR
====================================================== */

function toggleSidebar() {

    document
        .getElementById("sidebar")
        .classList
        .toggle("collapsed");

}


/* ======================================================
   BOTÃO GERAR MISSÃO
====================================================== */

function receiveMission() {

    const mission = generateMission();

    missionState.currentMission = mission;

    renderMission(mission);

}


/* ======================================================
   LIMPA A MISSÃO ATUAL
====================================================== */

function resetMission() {

    missionState.currentMission = null;

    document.getElementById("missionView").innerHTML = `

        <div class="welcome-screen">

            <h2>EXAA</h2>

            <p>

                Configure a missão no painel lateral
                e pressione <strong>GERAR MISSÃO</strong>.

            </p>

        </div>

    `;

}


/* ======================================================
   EXIBE UMA MENSAGEM NO TERMINAL
====================================================== */

function setStatus(message) {

    document.getElementById("terminalStatus").textContent = message;

}
