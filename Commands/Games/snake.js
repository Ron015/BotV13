const { Snake } = require('discord-gamecord')
const { MessageEmbed } = require("discord.js") 
    const blacklist = require("../../database/models/blacklist");  
module.exports = {
  name: "snake",
  description: "snake commands with buttons",
  

  run: async (client, message, args) => {
    blacklist.findOne({ id : message.author.id }, async(err, data) => {
        if(err) throw err;
        if(!data) { 
        //...your code

new Snake({
  message: message,
  embed: {
    title: 'Snake Game',
    color: '#7289da',
    OverTitle: "Game Over",
  },
  snake: { head: '🟢', body: '🟩', tail: '🟢' },
  emojis: {
    board: '⬛', 
    food: '🍎',
    up: '⬆️', 
    right: '➡️',
    down: '⬇️',
    left: '⬅️',
  },
}).startGame()
  
        }else {
    const blist = new MessageEmbed()
                .setColor("RED")
                .setDescription(`**:hydroxerror: | You are blacklisted!**`)
.setThumbnail("https://cdn.discordapp.com/emojis/873550081159233586.gif?size=160")
            message.reply({embeds : [blist]});
        } 
 })}}