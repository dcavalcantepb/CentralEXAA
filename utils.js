/*
==========================================================
EXAA CENTRAL OPERACIONAL

Arquivo:
utils.js

Responsabilidade:
Funções utilitárias reutilizáveis em todo o sistema.

Autor:
Danilo Cavalcante

==========================================================
*/


/* ======================================================
   ESCOLHE UM ITEM ALEATÓRIO DE UM ARRAY
====================================================== */

function getRandomItem(array) {

    if (!array || array.length === 0) {
        return null;
    }

    const index = Math.floor(Math.random() * array.length);

    return array[index];

}


/* ======================================================
   NÚMERO ALEATÓRIO ENTRE MIN E MAX (INCLUSIVO)
====================================================== */

function randomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}


/* ======================================================
   LIMITA UM VALOR ENTRE MÍNIMO E MÁXIMO
====================================================== */

function clamp(value, min, max) {

    if (value < min) return min;
    if (value > max) return max;

    return value;

}


/* ======================================================
   EMBARALHA UM ARRAY (FISHER-YATES)
====================================================== */

function shuffleArray(array) {

    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];

    }

    return arr;

}


/* ======================================================
   CAPITALIZA PRIMEIRA LETRA
====================================================== */

function capitalize(text) {

    if (!text) return "";

    return text.charAt(0).toUpperCase() + text.slice(1);

}
