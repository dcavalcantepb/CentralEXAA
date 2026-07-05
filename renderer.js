// ===============================
// EXAA - RENDERER
// ===============================

function renderMission(mission) {

    const container = document.getElementById("missionView");

    if (!container) {
        console.error("missionView element not found");
        return;
    }

    let html = "";

    // =========================
    // HEADER DA MISSÃO
    // =========================

    html += `
        <div class="mission-header">

            <p class="mission-type">
                ${mission.type}
            </p>

            <h2>
                ${mission.title}
            </h2>

            <p class="mission-briefing">
                ${mission.briefing}
            </p>

        </div>
    `;

    // =========================
    // ATOS DA MISSÃO
    // =========================

    mission.acts.forEach(act => {

       html += `
    <section class="mission-act">

        <h3>Ato ${act.order}</h3>

        <p class="act-description">
            ${act.description}
        </p>

        <p class="act-objective-title">
            Objetivo Primário
        </p>

        <p class="act-objective">
            ${act.primaryObjective}
        </p>

        <!-- TURNING POINT -->
        <div class="act-turning-point">

            <p class="turning-title">Ponto de Virada</p>

            <p class="turning-text">
                ${act.turningPoint?.description || ""}
            </p>

        </div>

    </section>
`;

    // =========================
    // INJEÇÃO NO DOM
    // =========================

    container.innerHTML = html;

}
