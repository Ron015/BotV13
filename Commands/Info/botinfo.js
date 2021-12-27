const { Message , MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');
module.exports = {
    name: "bot-info",
    aliases: ['botinfo'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const row = new MessageActionRow().addComponents(
       
            new MessageButton().setLabel("Invite Me!").setURL('https://discord.com/api/oauth2/authorize?client_id=901811784414011413&permissions=8&scope=bot%20applications.commands').setStyle("LINK"),
            new MessageButton().setLabel("Support Server!").setURL('https://discord.gg/96KCSEeU3N').setStyle("LINK"),
          );
        let days = Math.floor(client.uptime / 86400000 );
        let hours = Math.floor(client.uptime / 3600000 ) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
        const embed = new MessageEmbed()
        .setTitle('Bot stats!')
        .setColor('#c2ffee')
        .addField('Ping',`${client.ws.ping}ms`)
        .addField('Uptime',`My Uptime is ${days}d ${hours}h ${minutes}m ${seconds}s`)
        .addField('server-count',  `${client.guilds.cache.size} servers!`)
        .addField('member-count',   `${client.users.cache.size} users!`)
        .setFooter(`Requested by ${message.author.tag}`,  message.author.displayAvatarURL({ dynamic: true }))

        message.channel.send({ embeds: [embed], components: [row] });
    },
};