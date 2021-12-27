
const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
 name: "setchat",
 run: (client, message, args) => {
 
 let chatbot = message.mentions.channels.first() 
 
 if(!chatbot) { 
 return message.channel.send("Please Mention the channel first")
 }
 

 
 db.set(`chatchannel_${message.guild.id}`, chatbot.id) 
 
 message.channel.send(`Chat Bot Channel is set as ${chatbot}`) 
 }
} 

