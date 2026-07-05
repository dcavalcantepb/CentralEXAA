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

import { missionState, setConfigValue, setCurrentMission, setSidebarOpen } from "./state.js";
import { clamp } from "./utils.js";
import { generateMission } from "./generator.js";
import { renderMission, setStatus } from "./renderer.js";


/* ======================================================
   ALTERAÇÃO DOS CONTROLES
====================================================== */

export function changeValue(field, change, min, max) {

    setConfigValue(field, clamp(missionState[field] + change, min, max));

    updateUI();

}


/* ======================================================
   ATUALIZA OS VALORES EXIBIDOS NA SIDEBAR
====================================================== */

export function updateUI() {

    document.getElementById("acts").textContent = missionState.acts;

    document.getElementById("threats").textContent = missionState.threats;

    document.getElementById("successes").textContent = missionState.successes;

    document.getElementById("failures").textContent = missionState.failures;

}


/* ======================================================
   ABRIR / FECHAR SIDEBAR
====================================================== */

export function toggleSidebar() {

    setSidebarOpen(!missionState.isSidebarOpen);

    document
        .getElementById("sidebar")
        .classList
        .toggle("collapsed");

}


/* ======================================================
   BOTÃO GERAR MISSÃO
====================================================== */

export function receiveMission() {

    const mission = generateMission();

    setCurrentMission(mission);

    renderMission(mission);

}


/* ======================================================
   LIMPA A MISSÃO ATUAL
====================================================== */

export function resetMission() {

    setCurrentMission(null);

    document.getElementById("missionView").innerHTML = `

        <div class="welcome-screen">

            <h2>EXAA</h2>

            <p>

                Configure a missão no painel lateral
                e pressione <strong>GERAR MISSÃO</strong>.

            </p>

        </div>

    `;

    setStatus("");

}
