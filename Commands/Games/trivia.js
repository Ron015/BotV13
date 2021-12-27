
module.exports = {
	name: 'trivia',
  description: "First one to shoot wins!",
	aliases: ['tri'],
	run: async (client, message, args) => {
const { Trivia } = require('discord-gamecord')
const { MessageEmbed } = require("discord.js") 
    const blacklist = require("../../database/models/blacklist");  

     // Before the command code
 blacklist.findOne({ id : message.author.id }, async(err, data) => {
        if(err) throw err;
        if(!data) { 
        //...your code

new Trivia({
  message: message,
  slash_command: false,
  embed: {
    title: 'Trivia',
    description: 'You have {time} seconds to respond!',
    color: '#5865F2',
  },
  difficulty: 'medium',
  winMessage: 'GG, Your answer was correct! It was **{answer}**',
  loseMessage: 'Your answer was Incorrect! The correct answer was **{answer}**',
  othersMessage: 'You are not allowed to use buttons for this message!',
}).startGame();

          } else {
    const blist = new MessageEmbed()
                .setColor("RED")
                .setDescription(`**:hydroxerror: | You are blacklisted!**`)
.setThumbnail("https://cdn.discordapp.com/emojis/873550081159233586.gif?size=160")
            message.reply({embeds : [blist]});
        } 
 })}}