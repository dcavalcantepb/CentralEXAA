/*
==========================================================
EXAA CENTRAL OPERACIONAL

Arquivo:
renderer.js

Responsabilidade:
Renderizar a missão gerada e o status do terminal.

Autor:
Danilo Cavalcante

==========================================================
*/

export function renderMission(mission) {

    const container = document.getElementById("missionView");

    if (!container) {
        console.error("missionView not found");
        return;
    }

    let html = "";

    // =========================
    // HEADER DA MISSÃO
    // =========================

    html += `
        <div class="mission-header">

            <p class="mission-type">
                ${mission.type || "—"}
            </p>

            <h2>
                ${mission.title || "Missão sem título"}
            </h2>

            <p class="mission-briefing">
                ${mission.briefing || "—"}
            </p>

        </div>
    `;

    // =========================
    // ATOS
    // =========================

    mission.acts.forEach(act => {

        html += `
            <section class="mission-act">

                <h3>Ato ${act.order}</h3>

                <p class="act-description">
                    ${act.description || "—"}
                </p>

                <div class="act-section">

                    <p class="act-label">Objetivo Primário</p>

                    <p class="act-objective">
                        ${act.primaryObjective?.description || "—"}
                    </p>

                </div>

                <div class="act-section act-turning">

                    <p class="act-label">Ponto de Virada</p>

                    <p class="turning-text">
                        ${act.turningPoint?.description || "—"}
                    </p>

                </div>

            </section>
        `;
    });

    container.innerHTML = html;

    setStatus("Missão gerada e carregada.");
}


/* ======================================================
   EXIBE UMA MENSAGEM NO TERMINAL
====================================================== */

export function setStatus(message) {

    document.getElementById("terminalStatus").textContent = message;

}
