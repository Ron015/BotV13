const { TicTacToe } = require('discord-gamecord')
const blacklist = require("../../database/models/blacklist");  
module.exports = {
	name: 'tictactoe',
  description: "First one to shoot wins!",
	aliases: ['ttt'],
	run: async (client, message, args) => {
     // Before the command code
 blacklist.findOne({ id : message.author.id }, async(err, data) => {
        if(err) throw err;
        if(!data) { 
        //...your code

new TicTacToe({
  message: message,
  slash_command: false,
  opponent: message.mentions.users.first(),
  embed: {
    title: 'Tic Tac Toe',
    overTitle: 'Game Over',
    color: '#5865F2',
  },
  oEmoji: '🔵',
  xEmoji: '❌',
  blankEmoji: '➖',
  oColor: 'PRIMARY',
  xColor: 'DANGER',
  waitMessage: 'Waiting for the opponent...',
  turnMessage: '{emoji} | Its now **{player}** turn!',
  askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Tic Tac Toe!',
  cancelMessage: 'Looks like they refused to have a game of Tic Tac Toe. \:(',
  timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
  drawMessage: 'It was a draw!',
  winMessage: '{emoji} | **{winner}** won the game!',
  gameEndMessage: 'The game went unfinished :(',
}).startGame();

        } else {
    const blist = new MessageEmbed()
                .setColor("RED")
                .setDescription(`**:hydroxerror: | You are blacklisted!**`)
.setThumbnail("https://cdn.discordapp.com/emojis/873550081159233586.gif?size=160")
            message.reply({embeds : [blist]});
        } 
 })}}