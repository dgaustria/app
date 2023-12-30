const gameData = [
    {
        name: 'Project Zomboid',
        hasModlist: true,
        hasReservationList: true,
        hasServerMessage: false,
    },
    {
        name: 'Hearts Of Iron III',
        hasModlist: true,
        hasReservationList: true,
        hasServerMessage: false,
    },
    {
        name: 'Hearts Of Iron IV',
        hasModlist: true,
        hasReservationList: true,
        hasServerMessage: false,
    },
    {
        name: 'Victoria 2',
        hasModlist: true,
        hasReservationList: true,
        hasServerMessage: false,
    },
    {
        name: 'Victoria 3',
        hasModlist: true,
        hasReservationList: true,
        hasServerMessage: false,
    },
    {
        name: 'Europa Universalis IV',
        hasModlist: true,
        hasReservationList: true,
        hasServerMessage: false,
    },
    {
        name: 'Stellaris',
        hasModlist: true,
        hasReservationList: true,
        hasServerMessage: false,
    },
];

module.exports = {
    gameNames: gameData.map((game) => ({ name: game.name, value: game.name })),
    gameData: gameData,
};