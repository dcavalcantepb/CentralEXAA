/*
==========================================================
EXAA CENTRAL OPERACIONAL

Arquivo:
renderer.js

Responsabilidade:
Renderizar todos os elementos visuais da missão.

Autor:
Danilo Cavalcante

==========================================================
*/


/* ======================================================
   RENDERIZA A MISSÃO COMPLETA
====================================================== */

function renderMission(mission) {

    const missionView = document.getElementById("missionView");

    missionView.innerHTML = `

        ${renderMissionHeader(mission)}

        ${renderMissionBriefing(mission)}

        ${renderActs(mission)}

    `;

}


/* ======================================================
   CABEÇALHO
====================================================== */

function renderMissionHeader(mission) {

    return `

        <section class="mission-header">

            <h1>${mission.title}</h1>

            <p><strong>Tipo:</strong> ${mission.type}</p>

        </section>

    `;

}


/* ======================================================
   BRIEFING
====================================================== */

function renderMissionBriefing(mission) {

    return `

        <section class="mission-briefing">

            <h2>Briefing</h2>

            <p>${mission.briefing}</p>

        </section>

    `;

}


/* ======================================================
   TODOS OS ATOS
====================================================== */

function renderActs(mission) {

    let html = "";

    mission.acts.forEach(act => {

        html += renderAct(act);

    });

    return html;

}


/* ======================================================
   UM ATO
====================================================== */

function renderAct(act) {

    return `

        <article class="mission-card">

            <header>

                <h2>ATO ${act.order}</h2>

            </header>

            <section>

                <p>${act.description}</p>

            </section>

            ${renderObjectives(act)}

            ${renderThreats(act)}

            ${renderTurningPoint(act)}

        </article>

    `;

}


/* ======================================================
   OBJETIVOS
====================================================== */

function renderObjectives(act) {

    let html = `

        <section class="objectives">

            <h3>Objetivo Primário</h3>

            <p>${act.primaryObjective.description}</p>

    `;

    if (act.secondaryObjectives.length > 0) {

        html += `

            <h3>Objetivos Secundários</h3>

            <ul>

        `;

        act.secondaryObjectives.forEach(objective => {

            html += `

                <li>${objective.description}</li>

            `;

        });

        html += "</ul>";

    }

    html += "</section>";

    return html;

}


/* ======================================================
   AMEAÇAS
====================================================== */

function renderThreats(act) {

    if (act.threats.length === 0) {

        return "";

    }

    let html = `

        <section class="threats">

            <h3>Ameaças</h3>

    `;

    act.threats.forEach(threat => {

        html += `

            <div class="threat-card">

                <strong>${threat.name}</strong>

                <p>${threat.description}</p>

                <p>Dano: ${threat.damage}</p>

            </div>

        `;

    });

    html += "</section>";

    return html;

}


/* ======================================================
   PONTO DE VIRADA
====================================================== */

function renderTurningPoint(act) {

    return `

        <section class="turning-point">

            <h3>Ponto de Virada</h3>

            <p>${act.turningPoint.description}</p>

        </section>

    `;

}
