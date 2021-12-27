const { MessageButton, MessageActionRow, MessageEmbed } = require('discord.js')

module.exports = {
  name: "ping",
  description: "get user ping",
  run: async (client, message, args) => {
    const sendm =  new MessageEmbed()
    .setTitle("Pong.....")
    .setDescription(`Bot's Latency is ${client.ws.ping}`)
    .setTimestamp()

    message.channel.send({embeds:[sendm] })
                
  }}