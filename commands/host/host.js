const discordjs = require('discord.js');
const appSettings = require('../../appsettings.json');

module.exports = {
	data: new discordjs.SlashCommandBuilder()
		.setName('host')
		.setDescription('Host a game')
        .setDMPermission(false)
        .setDefaultMemberPermissions(discordjs.PermissionFlagsBits.MentionEveryone)
        .addSubcommand(builder => builder
            .setName('projectzomboid')
            .setDescription('Host Project Zomboid')
            .addBooleanOption(bool => bool
                .setName('clearmods')
                .setDescription('Clear the modlist?')
                .setRequired(true))
            .addStringOption(string => string
                .setName('server')
                .setDescription('The server address')
                .setRequired(false)))
        .addSubcommand(builder => builder
            .setName('hoi4')
            .setDescription('Host Hearts Of Iron IV')
            .addBooleanOption(bool => bool
                .setName('historical')
                .setDescription('Is the game historical?')
                .setRequired(true))
            .addStringOption(option => option
                .setName('date')
                .setDescription('When the game takes place in GMT')
                .setRequired(true))
            .addBooleanOption(option => option
                .setName('unmodded')
                .setDescription('Is the game unmodded?')
                .setRequired(true)))
        .addSubcommand(builder => builder
            .setName('eu4')
            .setDescription('Host Europa Universalis IV')
            .addBooleanOption(bool => bool
                .setName('clearmods')
                .setDescription('Clear the modlist?')
                .setRequired(true))
            .addStringOption(option => option
                .setName('date')
                .setDescription('When the game takes place in GMT')
                .setRequired(true))
            .addBooleanOption(option => option
                .setName('unmodded')
                .setDescription('Is the game unmodded?')
                .setRequired(true)))
        .addSubcommand(builder => builder
            .setName('stellaris')
            .setDescription('Host Stellaris')
            .addBooleanOption(bool => bool
                .setName('clearmods')
                .setDescription('Clear the modlist?')
                .setRequired(true))
            .addStringOption(option => option
                .setName('date')
                .setDescription('When the game takes place in GMT')
                .setRequired(true))
            .addBooleanOption(option => option
                .setName('unmodded')
                .setDescription('Is the game unmodded?')
                .setRequired(true)))
        .addSubcommand(builder => builder
            .setName('vic3')
            .setDescription('Host Victoria 3')
            .addBooleanOption(bool => bool
                .setName('clearmods')
                .setDescription('Clear the modlist?')
                .setRequired(true))
            .addStringOption(option => option
                .setName('date')
                .setDescription('When the game takes place in GMT')
                .setRequired(true))
            .addBooleanOption(option => option
                .setName('unmodded')
                .setDescription('Is the game unmodded?')
                .setRequired(true))),
	async execute(interaction) {
        const game = interaction.options.getSubcommand();
		await interaction.reply({ content: 'a', ephemeral: appSettings.settings.isHidden.host });
	},
};