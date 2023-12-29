const gameData = [
    {
        name: 'Project Zomboid',
        value: 'Project Zomboid',
        hasModlist: true,
        hasReservationList: true,
        hasServerMessage: false,
    },
    {
        name: 'Hearts Of Iron III',
        value: 'Hearts Of Iron III',
        hasModlist: true,
        hasReservationList: true,
        hasServerMessage: false,
    },
    {
        name: 'Hearts Of Iron IV',
        value: 'Hearts Of Iron IV',
        hasModlist: true,
        hasReservationList: true,
        hasServerMessage: false,
    },
    {
        name: 'Victoria 2',
        value: 'Victoria 2',
        hasModlist: true,
        hasReservationList: true,
        hasServerMessage: false,
    },
    {
        name: 'Victoria 3',
        value: 'Victoria 3',
        hasModlist: true,
        hasReservationList: true,
        hasServerMessage: false,
    },
    {
        name: 'Europa Universalis IV',
        value: 'Europa Universalis IV',
        hasModlist: true,
        hasReservationList: true,
        hasServerMessage: false,
    },
    {
        name: 'Stellaris',
        value: 'Stellaris',
        hasModlist: true,
        hasReservationList: true,
        hasServerMessage: false,
    },
];

module.exports = {
    gameNames: gameData.map(
        (key, value) => (
            key == 'name' || key == 'value')
            ? 
            (key, value):
            null),
    gameData: gameData,
};