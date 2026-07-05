/*
==========================================================
EXAA CENTRAL OPERACIONAL

Arquivo:
database.js

Responsabilidade:
Armazenar os dados estáticos de tipos de missão (templates).

Autor:
Danilo Cavalcante

==========================================================
*/

export const missionDatabase = {

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

        ],

        threats: [

            {
                id: "INF_THR_001",
                name: "Patrulha de Sentinelas",
                description: "Uma patrulha automatizada varre o perímetro em intervalos regulares.",
                successesToDefeat: 2,
                damage: 1
            },
            {
                id: "INF_THR_002",
                name: "Alarme Silencioso",
                description: "Sensores de movimento prontos para denunciar a presença da equipe.",
                successesToDefeat: 1,
                damage: 0
            },
            {
                id: "INF_THR_003",
                name: "Esquadrão de Elite",
                description: "Tropas de elite reagem rapidamente a qualquer sinal de invasão.",
                successesToDefeat: 3,
                damage: 2
            },
            {
                id: "INF_THR_004",
                name: "Torre de Vigilância",
                description: "Uma torre blindada com visão total do pátio interno.",
                successesToDefeat: 2,
                damage: 1
            }

        ],

        turningPoints: [

            {
                title: "Contato Perdido",
                description: "A comunicação com o comando é interrompida no pior momento possível.",
                successOutcome: "A equipe recupera o sinal e segue com a missão sob controle.",
                failureOutcome: "Isolados, os pilotos precisam decidir sem apoio externo."
            },
            {
                title: "Identidade Comprometida",
                description: "Um registro de segurança quase expõe a presença da equipe.",
                successOutcome: "A falha é corrigida antes que alguém perceba.",
                failureOutcome: "O alarme é acionado e o tempo começa a se esgotar."
            },
            {
                title: "Reforços Inimigos",
                description: "Uma segunda leva de tropas converge para a área de operação.",
                successOutcome: "A equipe consegue se antecipar e reorganizar as rotas de fuga.",
                failureOutcome: "A pressão aumenta e o cerco começa a se fechar."
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

        ],

        threats: [

            {
                id: "EXT_THR_001",
                name: "Caçadores Blindados",
                description: "Unidades pesadas rastreiam o alvo com sensores térmicos.",
                successesToDefeat: 3,
                damage: 2
            },
            {
                id: "EXT_THR_002",
                name: "Bloqueio de Estrada",
                description: "Uma barreira móvel corta a rota de fuga planejada.",
                successesToDefeat: 1,
                damage: 0
            },
            {
                id: "EXT_THR_003",
                name: "Franco-Atirador",
                description: "Um atirador posicionado em altura ameaça a equipe de resgate.",
                successesToDefeat: 2,
                damage: 2
            },
            {
                id: "EXT_THR_004",
                name: "Drone de Reconhecimento",
                description: "Um drone transmite a posição da equipe em tempo real.",
                successesToDefeat: 1,
                damage: 1
            }

        ],

        turningPoints: [

            {
                title: "Alvo Ferido",
                description: "O recurso a ser extraído está mais fragilizado do que o esperado.",
                successOutcome: "A equipe estabiliza a situação e segue com a extração.",
                failureOutcome: "O tempo de extração se estende, aumentando o risco."
            },
            {
                title: "Rota Bloqueada",
                description: "A rota de fuga original foi comprometida pelo inimigo.",
                successOutcome: "Uma rota alternativa é encontrada a tempo.",
                failureOutcome: "A equipe precisa abrir caminho à força."
            },
            {
                title: "Sinal Duplo",
                description: "Aparece um segundo alvo não identificado na zona de extração.",
                successOutcome: "A equipe identifica a ameaça e mantém o controle da situação.",
                failureOutcome: "A confusão gerada custa um tempo precioso."
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

        ],

        threats: [

            {
                id: "DEF_THR_001",
                name: "Onda de Assalto",
                description: "Uma leva concentrada de unidades avança sobre a linha defensiva.",
                successesToDefeat: 3,
                damage: 2
            },
            {
                id: "DEF_THR_002",
                name: "Artilharia de Longo Alcance",
                description: "Fogo de artilharia ameaça desestabilizar as posições defensivas.",
                successesToDefeat: 2,
                damage: 2
            },
            {
                id: "DEF_THR_003",
                name: "Infiltrador Inimigo",
                description: "Uma unidade tenta contornar a linha de frente pelos flancos.",
                successesToDefeat: 1,
                damage: 1
            },
            {
                id: "DEF_THR_004",
                name: "Blindado Pesado",
                description: "Um veículo blindado avança lentamente, absorvendo o fogo defensivo.",
                successesToDefeat: 3,
                damage: 1
            }

        ],

        turningPoints: [

            {
                title: "Munição Escassa",
                description: "Os suprimentos começam a se esgotar antes do previsto.",
                successOutcome: "A equipe reorganiza o uso de recursos e sustenta a posição.",
                failureOutcome: "A defesa enfraquece na pior hora possível."
            },
            {
                title: "Flanco Exposto",
                description: "Uma brecha se abre em um ponto mal protegido da linha defensiva.",
                successOutcome: "A brecha é fechada antes que o inimigo explore a falha.",
                failureOutcome: "O inimigo avança pelo ponto fraco da defesa."
            },
            {
                title: "Reforços Atrasados",
                description: "A chegada dos reforços prometidos sofre um atraso crítico.",
                successOutcome: "A posição resiste até a chegada do apoio.",
                failureOutcome: "A equipe precisa resistir sozinha por mais tempo que o esperado."
            }

        ]

    }

};
