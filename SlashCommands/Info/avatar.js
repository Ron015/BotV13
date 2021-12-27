const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Display the avatar of a user!',
    permission: ['SEND_MESSAGES'],
    botPermission: ['SEND_MESSAGES', 'ATTCH_FILES'],
    ownerOnly: false,
    options: [
        {
            type: 'USER',
            description: 'Mention a user',
            name: 'user',
            required: true,
        },
    ],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, interaction, args) => {
        const member = interaction.guild.members.cache.get(args[0]) || interaction.member;
        const avatar = member.user.avatarURL({ dynamic: true, format: "png", })

        const avatarEmbed = new MessageEmbed()
            .setDescription(`<@${member.user.id}>**_'s Avatar :_**`)
            .setImage(avatar)
            
        interaction.followUp({ embeds: [avatarEmbed] });
    }
}