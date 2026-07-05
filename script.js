/*
==========================================================
EXAA CENTRAL OPERACIONAL

Arquivo:
script.js

Responsabilidade:
Inicializar a aplicação e ligar os elementos do DOM aos
handlers de ui.js (nenhum handler é exposto via onclick inline).

Autor:
Danilo Cavalcante

==========================================================
*/

import { updateUI, toggleSidebar, changeValue, receiveMission, resetMission } from "./ui.js";


/* ======================================================
   LIGAÇÃO DOS EVENTOS
====================================================== */

function bindEvents() {

    document.getElementById("sidebarToggle").addEventListener("click", toggleSidebar);

    document.getElementById("generateMissionButton").addEventListener("click", receiveMission);

    document.getElementById("resetMissionButton").addEventListener("click", resetMission);

    document.querySelectorAll(".stepper").forEach(button => {

        const { field, step, min, max } = button.dataset;

        button.addEventListener("click", () => {
            changeValue(field, Number(step), Number(min), Number(max));
        });

    });

}


/* ======================================================
   INICIALIZAÇÃO
====================================================== */

function initializeApp() {

    console.clear();

    console.log("=================================");
    console.log("EXAA CENTRAL OPERACIONAL");
    console.log("Sistema inicializado.");
    console.log("=================================");

    bindEvents();
    updateUI();

}

/* Executa apenas UMA vez quando o DOM estiver pronto */
window.addEventListener("DOMContentLoaded", initializeApp);
