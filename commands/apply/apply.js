const discordjs = require('discord.js');
const appSettings = require('../../appsettings.json');

module.exports = {
	data: new discordjs.SlashCommandBuilder()
		.setName('apply')
		.setDescription('Get information on how to join the VTC')
    .setDMPermission(true),
	async execute(interaction) {
    const embed = new discordjs.EmbedBuilder()
      .setColor(0xF9A602)
      .setTitle("Apply")
      .setThumbnail(appSettings.settings.webProtocol + "://" + appSettings.links.logoURL)
      .addFields(
        { name:"**New Driver**", value: `Welcome to LKW Logistics! Looking to apply & Drive with us, Apply today: ${appSettings.settings.webProtocol}://${appSettings.links.applicationURL}` },
        { name:"**Returning Driver**", value: "Wish to Return as a Driver to LKW Logistics? Create a \`Human Resources\` ticket and get in contact with the Human Resources Directors to get started." })
      .setTimestamp();
    
		await interaction.reply({ embeds: [embed], ephemeral: appSettings.settings.eventsIsHidden });
	},
};