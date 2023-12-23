const discordjs = require('discord.js');
const appSettings = require('../appsettings.json');
const channels = require('../store/channels');

module.exports = {
	data: new discordjs.SlashCommandBuilder()
		.setName('setup')
		.setDescription('Setup for a game.')
        .setDMPermission(true)
        .setDefaultMemberPermissions(discordjs.PermissionFlagsBits.ManageChannels)
        .addStringOption((option => option
            .setName('game')
            .setDescription('The game to set up')
            .setRequired(true)
            .addChoices(
                { name: 'Project Zomboid', value: 'Project Zomboid' },
                { name: 'Hearts Of Iron III', value: 'Hearts Of Iron III' },
                { name: 'Hearts Of Iron IV', value: 'Hearts Of Iron IV' },
                { name: 'Victoria 2', value: 'Victoria 2' },
                { name: 'Victoria 3', value: 'Victoria 3' },
                { name: 'Europa Universalis IV', value: 'Europa Universalis IV' },
                { name: 'Stellaris', value: 'Stellaris' },
            ))),
	async execute(interaction) {
        try {
        const game = interaction.options.getString('game');
        // Channel setup
        const category = await interaction.guild.channels.create({
            name: game,
            type: discordjs.ChannelType.GuildCategory,
        });

        category.permissionOverwrites.set([
            {
                id: interaction.guild.roles.everyone.id,
                allow: [
                    discordjs.PermissionFlagsBits.ReadMessageHistory,
                    discordjs.PermissionFlagsBits.ViewChannel
                ],
                deny: [discordjs.PermissionFlagsBits.SendMessages],
            }
        ]);
        console.log(game);
        if (game != 'Project Zomboid')
            channels[game].reservations = category.children.create({
                name: game+'-reservations',
                type: discordjs.ChannelType.GuildText
            });
        else
            channels[game].server = category.children.create({
                name: game+'-server',
                type: discordjs.ChannelType.GuildText
            });

        channels[game].modlist = category.children.create({
            name: game+'-modlist',
            type: discordjs.ChannelType.GuildText
        });
        await interaction.reply({ content: `${game} set up.`, ephemeral: appSettings.settings.isHidden.setup });
        }
        catch (error) {
            console.log(error.message);
        }
	},
};