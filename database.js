const missionDatabase = {

    infiltration: {

        name: "Infiltração",

        briefing:
            "Uma instalação inimiga precisa ser infiltrada e sabotada antes que seja tarde.",

        opening: [

            {
                id: "INF_OPEN_001",

                description:
                    "Os pilotos cruzam as linhas inimigas e iniciam a infiltração.",

                primaryObjective:
                    "Entrar na área operacional sem comprometer a missão."
            }

        ],

        middle: [

            {
                id: "INF_MID_001",

                description:
                    "A equipe avança pelos setores internos da instalação.",

                primaryObjective:
                    "Alcançar o alvo da sabotagem."
            }

        ],

        ending: [

            {
                id: "INF_END_001",

                description:
                    "Chegou o momento de executar a sabotagem e escapar.",

                primaryObjective:
                    "Destruir o alvo e iniciar a retirada."
            }

        ]

    },

    extraction: {

        name: "Extração",

        briefing:
            "Um recurso de alto valor precisa ser recuperado antes que caia em mãos inimigas.",

        opening: [

            {
                id: "EXT_OPEN_001",

                description:
                    "Os pilotos aproximam-se discretamente da zona de operação.",

                primaryObjective:
                    "Localizar o alvo."
            }

        ],

        middle: [

            {
                id: "EXT_MID_001",

                description:
                    "O alvo foi localizado, mas ainda precisa ser protegido.",

                primaryObjective:
                    "Recuperar o alvo."
            }

        ],

        ending: [

            {
                id: "EXT_END_001",

                description:
                    "Com o alvo em segurança, resta escapar.",

                primaryObjective:
                    "Extrair o alvo da zona de combate."
            }

        ]

    },

    defense: {

        name: "Defesa",

        briefing:
            "A posição deve ser mantida até a chegada dos reforços.",

        opening: [

            {
                id: "DEF_OPEN_001",

                description:
                    "Os pilotos organizam as defesas.",

                primaryObjective:
                    "Preparar a posição."
            }

        ],

        middle: [

            {
                id: "DEF_MID_001",

                description:
                    "O inimigo aumenta a pressão sobre a linha defensiva.",

                primaryObjective:
                    "Conter o avanço inimigo."
            }

        ],

        ending: [

            {
                id: "DEF_END_001",

                description:
                    "As últimas ondas de ataque antecedem a chegada do apoio.",

                primaryObjective:
                    "Resistir até os reforços chegarem."
            }

        ]

    }

};
