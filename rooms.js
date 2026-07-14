/* ==================================================
CONFIGURAÇÕES
================================================== */
const MAX_USERS = 16;
/* ==================================================
LIMITE DE USUÁRIOS POR SALA
(AQUI VOCÊ ALTERA A QUANTIDADE DE CADA SALA)
================================================== */
const ROOM_LIMITS = {

    "sala-geral": 16,
    "sala-sgoffc": 10,
    "sala-events": 10,

    "sala-duo": 2,
    "sala-duo2": 2,

    "sala-squad": 4,
    "sala-squad2": 4,
    "sala-squad3": 4

};
/* ==================================================
SALAS PROTEGIDAS
================================================== */
const protectedRooms = [

    "sala-events",
    "sala-sgoffc"

];
/* ==================================================
LISTA DE SALAS
================================================== */
const rooms = [

    {
        id: "sala-geral",
        nome: "Global",
        icone: `<img src="layout/voz/drawable/global.svg">`
    },

    {
        id: "sala-sgoffc",
        nome: "SG e-Sports",
        icone: `<img src="layout/voz/drawable/sg.svg">`
    },

    {
        id: "sala-events",
        nome: "Eventos",
        icone: `<img src="layout/voz/drawable/events.svg">`
    },

    {
        id: "sala-duo",
        nome: "Dupla",
        icone: `<img src="layout/voz/drawable/duo.svg">`
    },

    {
        id: "sala-duo2",
        nome: "Dupla 2",
        icone: `<img src="layout/voz/drawable/duo.svg">`
    },

    {
        id: "sala-squad",
        nome: "Esquadrão",
        icone: `<img src="layout/voz/drawable/squad.svg">`
    },

    {
        id: "sala-squad2",
        nome: "Esquadrão 2",
        icone: `<img src="layout/voz/drawable/squad.svg">`
    },
        
    {
        id: "sala-squad3",
        nome: "Esquadrão 3",
        icone: `<img src="layout/voz/drawable/squad.svg">`
    }

];