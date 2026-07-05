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
            <section class="mission-act"
                     data-success-threshold="${act.resolution.successThreshold}"
                     data-failure-threshold="${act.resolution.failureThreshold}">

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

                ${renderThreats(act.threats)}

                ${renderProgress(act.resolution)}

                <div class="act-section act-turning">

                    <p class="act-label">Ponto de Virada</p>

                    <p class="turning-title">
                        ${act.turningPoint?.title || "—"}
                    </p>

                    <p class="turning-text">
                        ${act.turningPoint?.description || "—"}
                    </p>

                    <p class="turning-outcome">
                        Sucesso: ${act.turningPoint?.successOutcome || "—"}
                    </p>

                    <p class="turning-outcome">
                        Falha: ${act.turningPoint?.failureOutcome || "—"}
                    </p>

                </div>

            </section>
        `;
    });

    container.innerHTML = html;

    bindProgressCheckboxes(container);

    setStatus("Missão gerada e carregada.");
}


/* ======================================================
   RENDERIZA O ACOMPANHAMENTO DE SUCESSOS/FALHAS DE UM ATO
====================================================== */

function renderProgress(resolution) {

    return `
        <div class="act-section act-progress">

            <p class="act-label">Acompanhamento</p>

            <div class="progress-row">

                <span class="progress-label progress-success">Sucessos</span>

                <div class="checkbox-group">
                    ${renderCheckboxes(resolution.successThreshold, "check-success")}
                </div>

            </div>

            <div class="progress-row">

                <span class="progress-label progress-failure">Falhas</span>

                <div class="checkbox-group">
                    ${renderCheckboxes(resolution.failureThreshold, "check-failure")}
                </div>

            </div>

        </div>
    `;

}

function renderCheckboxes(count, className) {

    let html = "";

    for (let i = 0; i < count; i++) {
        html += `<input type="checkbox" class="${className}">`;
    }

    return html;

}


/* ======================================================
   LIGA OS CHECKBOXES DE ACOMPANHAMENTO AO PONTO DE VIRADA
====================================================== */

function bindProgressCheckboxes(container) {

    container.querySelectorAll(".mission-act").forEach(actEl => {

        actEl.querySelectorAll(".check-success, .check-failure").forEach(checkbox => {

            checkbox.addEventListener("change", () => updateTurningPointState(actEl));

        });

    });

}

function updateTurningPointState(actEl) {

    const successThreshold = Number(actEl.dataset.successThreshold);
    const failureThreshold = Number(actEl.dataset.failureThreshold);

    const successCount = actEl.querySelectorAll(".check-success:checked").length;
    const failureCount = actEl.querySelectorAll(".check-failure:checked").length;

    const ready = successCount >= successThreshold || failureCount >= failureThreshold;

    actEl.querySelector(".act-turning").classList.toggle("turning-ready", ready);

}


/* ======================================================
   RENDERIZA A LISTA DE AMEAÇAS DE UM ATO
====================================================== */

function renderThreats(threats) {

    if (!threats || threats.length === 0) {
        return "";
    }

    const items = threats.map(threat => `
        <li>
            <strong>${threat.name}</strong> — ${threat.description}
            (${threat.successesToDefeat} sucessos para derrotar, dano ${threat.damage})
        </li>
    `).join("");

    return `
        <div class="act-section act-threats">

            <p class="act-label">Ameaças</p>

            <ul class="threat-list">
                ${items}
            </ul>

        </div>
    `;

}


/* ======================================================
   EXIBE UMA MENSAGEM NO TERMINAL
====================================================== */

export function setStatus(message) {

    document.getElementById("terminalStatus").textContent = message;

}
