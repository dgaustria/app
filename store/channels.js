const gameNames = require('gameNames');
const channels = {};

for (let value in gameNames) {
    channels[value.name] = {
        'reservations': null,
        'modlist': null,
        'allowPlayerSignup': true,
    }
}

function changeChannelData(game, channelid, property) {
    if (!channels[game]) throw new Error(game + ' is not in gameNames!');
    if (!channels[game][property]) throw new Error(property + ' is not a property of the channel!');
    channels[game][property] = channelid
}

module.exports = {
    changeChannelData: changeChannelData,
    channels: channels,
};