// ===============================
// EXAA - RENDERER (FINAL LIMPO)
// ===============================

function renderMission(mission) {

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
                        ${act.primaryObjective || "—"}
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

    // status opcional (se existir no HTML)
    const status = document.getElementById("terminalStatus");
    if (status) {
        status.innerText = "Missão gerada e carregada.";
    }
}
