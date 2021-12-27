const { Connect4 } = require('discord-gamecord')
const blacklist = require("../../database/models/blacklist");  
const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'connect4',
	aliases: ["c4"],
  run: async (client, message, args) => {
 // Before the command code
 blacklist.findOne({ id : message.author.id }, async(err, data) => {
        if(err) throw err;
        if(!data) { 
        //...your code


new Connect4({
  message: message,
  slash_command: false,
  opponent: message.mentions.users.first(),
  embed: {
    title: 'Connect 4',
    color: '#5865F2',
  },
  emojis: {
    player1: '🔵',
    player2: '🟡'
  },
  waitMessage: 'Waiting for the opponent...',
  turnMessage: '{emoji} | Its turn of player **{player}**.',
  winMessage: '{emoji} | **{winner}** won the game!',
  gameEndMessage: 'The game went unfinished :(',
  drawMessage: 'It was a draw!',
  othersMessage: 'You are not allowed to use buttons for this message!',
  askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Connect 4!',
  cancelMessage: 'Looks like they refused to have a game of Connect4. \:(',
  timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
}).startGame()
        } else {
    const blist = new MessageEmbed()
                .setColor("RED")
                .setDescription(`**:hydroxerror: | You are blacklisted!**`)
.setThumbnail("https://cdn.discordapp.com/emojis/873550081159233586.gif?size=160")
            message.reply({embeds : [blist]});
        } 
  })}};
