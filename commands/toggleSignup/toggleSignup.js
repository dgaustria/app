const discordjs = require('discord.js');
const appSettings = require('../../appsettings.json');
const gameNames = require('../../store/gameData').gameNames;
const channels = require('../../store/channels');

module.exports = {
	data: new discordjs.SlashCommandBuilder()
    .setName('allowsignup')
    .setDescription('Allow or disallow everyone to signup to the game.')
    .setDMPermission(false)
    .addStringOption(option => option
      .setName('game')
      .setDescription('The game to toggle the reservation for')
      .setRequired(true)
      .addChoices(
          ...gameNames,
      )),
	async execute(interaction) {
        const game = interaction.options.getString('game');
		await interaction.reply({ content: `Signup for ${game} toggled ${channels[game].allowPlayerSignup ? 'ON' : 'OFF'}`, ephemeral: appSettings.settings.isHidden.toggleSignup });
	},
};