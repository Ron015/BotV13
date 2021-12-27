const { QuickClick } = require('weky')
const blacklist = require("../../database/models/blacklist");  
const { MessageEmbed } = require("discord.js") 
module.exports = {
	name: 'qc',
  description: "First one to shoot wins!",
	aliases: ['quickclick'],
	run: async (client, message, args) => {
     // Before the command code
 blacklist.findOne({ id : message.author.id }, async(err, data) => {
        if(err) throw err;
        if(!data) { 
        //...your code


await QuickClick({
	message: message,
	embed: {
		title: 'Quick Click | Lunar Development',
		color: '#5865F2',
        footer: '©️ Lunar Development',
		timestamp: true
	},
	time: 60000,
	waitMessage: 'The buttons may appear anytime now!',
	startMessage:
		'First person to press the correct button will win. You have **{{time}}**!',
	winMessage: 'GG, <@{{winner}}> pressed the button in **{{time}} seconds**.',
	loseMessage: 'No one pressed the button in time. So, I dropped the game!',
	emoji: '👆',
	ongoingMessage:
		"A game is already runnning in <#{{channel}}>. You can't start a new one!"
});


          } else {
    const blist = new MessageEmbed()
                .setColor("RED")
                .setDescription(`**:hydroxerror: | You are blacklisted!**`)
.setThumbnail("https://cdn.discordapp.com/emojis/873550081159233586.gif?size=160")
            message.reply({embeds : [blist]});
        } 
 })}}