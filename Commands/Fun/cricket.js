const crickplayer = require('crickrandom');

const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "cricket",
  run: async(client, message, args) => {



const embed = new MessageEmbed()
.setTitle('Cricket player')
.setDescription(`${crickplayer(1)}`)


message.channel.send({embeds: [embed]})
  
  }
}