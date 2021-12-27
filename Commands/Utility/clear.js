const { MessageActionRow, MessageSelectMenu } = require('discord.js');
const {embedcolor, prefix} = require(`../../config.json`)
const db = require(`quick.db`)
const {MessageEmbed} = require(`discord.js`)
module.exports={
  name:"purge",
  aliases: ["clear"],
  category:"mod",
  timeout:"20000", //20 seconds
  run: async(client,message,args)=>{
    var prefix_db = db.get(`prefix_${message.author.id}`)
var prefix = prefix_db || prefix
    const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select')
                    .setPlaceholder('Nothing selected')
                    .addOptions([
                        {
                            label: '5',
                            description: 'Purge 5 messages',
                            value: '5',
                        },
                        {
                            label: '10',
                            description: 'Purge 10 messages',
                            value: '10',
                        },
            {
                            label: '15',
                            description: 'Purge 15 messages',
                            value: '15',
                        },
            {
                            label: '20',
                            description: 'Purge 20 messages',
                            value: '20',
                        },
            {
                            label: '25',
                            description: 'Purge 25 messages',
                            value: '25',
                        },
            {
                            label: '30',
                            description: 'Purge 30 messages',
                            value: '30',
                        },
            {
                            label: '35',
                            description: 'Purge 35 messages',
                            value: '35',
                        },
            {
                            label: '40',
                            description: 'Purge 40 messages',
                            value: '40',
                        },
            {
                            label: '45',
                            description: 'Purge 45 messages',
                            value: '45',
                        },
            {
                            label: '50',
                            description: 'Purge 50 messages',
                            value: '50',
                        },
            {
                            label: '55',
                            description: 'Purge 55 messages',
                            value: '55',
                        },
            {
                            label: '60',
                            description: 'Purge 60 messages',
                            value: '60',
                        },
            {
                            label: '65',
                            description: 'Purge 65 messages',
                            value: '65',
                        },
            {
                            label: '70',
                            description: 'Purge 70 messages',
                            value: '70',
                        },
            {
                            label: '75',
                            description: 'Purge 75 messages',
                            value: '75',
                        },
            {
                            label: '80',
                            description: 'Purge 80 messages',
                            value: '80',
                        },
            {
                            label: '85',
                            description: 'Purge 85 messages',
                            value: '85',
                        },
            {
                            label: '90',
                            description: 'Purge 90 messages',
                            value: '90',
                        },
            {
                            label: '95',
                            description: 'Purge 95 messages',
                            value: '95',
                        },
            {
                            label: '100',
                            description: 'Purge 100 messages',
                            value: '100',
                        },
                    ]),
            );

        await message.reply({ content: '_ _', ephemeral: true, components: [row]});
        const filter = i => i.user.id === message.author.id;

const collector = message.channel.createMessageComponentCollector({ filter, max: 20 });

collector.on('collect', async i => {
    if (i.customId === `select`) {
  message.channel.bulkDelete(i.values[0])
const embed = new MessageEmbed({
  color: embedcolor,
  title: `Purged ${i.values[0]} messages`,
  description: `You can purge again using ${prefix}purge again.`,
  author: {
    text: message.author.tag, iconURL: message.author.avatarURL({dynamic: true})
  }
}).setTimestamp()
message.author.send({embeds: [embed], ephemeral: true}).then(message => message.delete({timeout: 5000}))
  }
  })
  }
}