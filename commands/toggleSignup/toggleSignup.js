const discordjs = require('discord.js');
const appSettings = require('../../appsettings.json');

module.exports = {
	data: new discordjs.SlashCommandBuilder()
    .setName('allowSignup')
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

		await interaction.reply({ embeds: [embed], ephemeral: appSettings.settings.eventsIsHidden });
	},
};