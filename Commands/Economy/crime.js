const Discord = require('discord.js')

let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const Color = `#ffcc00`


let emo = require("../../emojis")
const eco = require('../../database/models/economy');


module.exports = {
    name: "crime",
    category: "economy",
    description: 'search some places and hopefully get some money',
    usage: '?search',
    aliases: [],
    timeout: 20,
    
    // cooldownMsg: {title: "Slow Down!", description: "", color: "RED"},
    run : async (client, message, args) => {

    let profile; 
    try {
      profile = await eco.findOne({
        userID: message.author.id,
      })
      if(!profile) {
        if(message.author.bot) return message.channel.send(`Bots dont have bal`)
        profile = await eco.create({
          userID: message.author.id,
          coins: 500,
          bank: 0,
          maxBank: 500
        })
        profile.save()
      }
    } catch (e) {
      console.error(e)
    }     
     
    const locations = [
      {
        name: "Murder",
        messages: ["Did u just murdered the old lady? You just found [amount] ","You just murdered a officer and earn [amount]! I hope no one noticed this"]
      },
      {
        name: "Vandalism",
        messages: ["You found [amount] in the bathroom!", "You found [amount], I wonder if someone told the old lady about this", "I hope the cleaner wont see the wall and u found [amount]!"]
      },
      {
        name: "Stealing",
        messages: ["You stole a lady purse and found [amount]","You stole a man wallet and found [amount]"]
      },
     
    ];

    const chosenLocations = locations.sort(() => Math.random() - Math.random()).slice(0, 3);

    let search1 = new MessageButton()
    .setCustomId(`${chosenLocations[0].name}`)
    .setStyle(`PRIMARY`)
    .setLabel(`${chosenLocations[0].name}`)

    let search2 = new MessageButton()
    .setCustomId(`${chosenLocations[1].name}`)
    .setStyle(`PRIMARY`)
    .setLabel(`${chosenLocations[1].name}`)

    let search3 = new MessageButton()
    .setCustomId(`${chosenLocations[2].name}`)
    .setStyle(`PRIMARY`)
    .setLabel(`${chosenLocations[2].name}`)

    let searchRow = new MessageActionRow()
    .addComponents(
      search1, search2, search3
    )

    let sentMsg = await message.reply({content: `**${message.author.username},What crime do you want to commit?**\nPick an option below to commit one!`, components: [searchRow]})

    let collector = sentMsg.createMessageComponentCollector({
      time: 15000,
      max: 1
    })

    let amount = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;

    collector.on('collect', async i => {
      let sendEmbed = async (location) =>  {
        let embed = new MessageEmbed()
        .setTitle(`${message.author.username} commited a crime.... ${location.name}`)
        .setDescription(location.messages[Math.floor(Math.random() * location.messages.length)].replace("[amount]", `${amount} ${emo.coin}`))
        .setFooter(message.author.username)
        .setTimestamp()
        .setColor("RANDOM")
        i.update({embeds: [embed], components: [], content: " "})
        try {
          await eco.findOneAndUpdate(
              {
                userID: message.author.id,
              },
              {
                $inc: {
                  coins: amount,
                },
              }
            );
          } catch (err) {
            console.log(err);
          }
      }
      if(i.user.id !== message.author.id) return i.reply({
        content: "You can't interact with this!",
        ephemeral: true
      })
      if(i.customId == chosenLocations[0].name) return sendEmbed(chosenLocations[0])
      if(i.customId == chosenLocations[1].name) return sendEmbed(chosenLocations[1])
      if(i.customId == chosenLocations[2].name) return sendEmbed(chosenLocations[2])
    })

}
}