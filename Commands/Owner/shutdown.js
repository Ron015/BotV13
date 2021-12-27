const Discord = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');
const OWNER_ID = require("../../config.json").OWNER_ID;
module.exports = {
    name: 'shut',
    aliases: [],
    usage: ["%ban <user>"],
    description: "This command ban a member!",
    run(client, message, args){

      if (message.author.id != OWNER_ID)
        return message.channel.send(
          `<a:_cross:725303285015117844> Developer Only <a:_cross:725303285015117844>`)
        

        
            const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId("2")
                .setLabel("Shutdown")
                .setStyle("SUCCESS")
                .setEmoji("✅"),
                new MessageButton()
                .setCustomId("1")
                .setEmoji("🚫")
                .setLabel("Cancel")
                .setStyle("DANGER"),
            )
            const row2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId("1")
                .setEmoji("🚫")
                .setLabel("Cancel")
                .setDisabled(true)
                .setStyle("DANGER")
            )
            const filter1 = i => i.customId === "2" && i.user.id;

            const collector = message.channel.createMessageComponentCollector({ filter1 });

            collector.on('collect', async i => {
                if (i.customId === "2") {
                    i.update({ content: "**Shutting down**", components: [] })
                    process.exit();
                }
            })
            const filter2 = b => b.customId === "1" && i.user.id;

            const collectorr = message.channel.createMessageComponentCollector({ filter2 });
            
            collectorr.on('collect', async b => {
                if (b.customId === "1") {
                    b.update({ content: "**Canceled**", components: [] })
                }
            })
            message.channel.send({ content: "**Shutdown**", components: [row] })
        }
         
}