const discordjs = require('discord.js');
const appSettings = require('../../appsettings.json');
const _gameNames = require('../../store/gameNames');
const channels = require('../../store/channels');
const gameNames = _gameNames.gameNames;

module.exports = {
	data: new discordjs.SlashCommandBuilder()
		.setName('setchannel')
		.setDescription('Assign a channel to a specific game')
        .setDMPermission(false)
        .addStringOption(option => option
            .setName('game')
            .setDescription('The game')
            .setRequired(true)
            .addChoices(
                ...gameNames,
            ))
        .addStringOption(option => option
            .setName('type')
            .setDescription('Is the channel a modlist or playerlist?')
            .setRequired(true)
            .addChoices(
                { name: 'Reservations/Players', value: 'reservation' },
                { name: 'Modlist', value: 'modlist' },
            ))
        .addChannelOption(option => option
            .setName('channel')
            .setDescription('The channel to assign')
            .setRequired(true)),
	async execute(interaction) {
        const game = interaction.options.getString('game');
        const type = interaction.options.getString('type');
        const channel = interaction.options.getChannel('channel');

        channels.changeChannelData(game, channel.id, type == reservation);

		await interaction.reply({ content: 'Data updated.', ephemeral: appSettings.settings.isHidden.setchannel });
	},
};