const { LieSwatter } = require('weky')
const blacklist = require("../../database/models/blacklist");  
const { MessageEmbed } = require("discord.js") 
module.exports = {
	name: 'lieswatter',
  description: "First one to shoot wins!",
	aliases: ['lie'],
	run: async (client, message, args) => {
     // Before the command code
 blacklist.findOne({ id : message.author.id }, async(err, data) => {
        if(err) throw err;
        if(!data) { 
        //...your code

await LieSwatter({
	message: message,
	embed: {
		title: 'Lie Swatter | Lunar Development',
		color: '#5865F2',
        footer: '©️ Lunar Development',
		timestamp: true
	},
	thinkMessage: 'I am thinking',
	winMessage:
		'GG, It was a **{{answer}}**. You got it correct in **{{time}}**.',
	loseMessage: 'Better luck next time! It was a **{{answer}}**.',
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	buttons: { true: 'Truth', lie: 'Lie' }
});

          } else {
    const blist = new MessageEmbed()
                .setColor("RED")
                .setDescription(`**:hydroxerror: | You are blacklisted!**`)
.setThumbnail("https://cdn.discordapp.com/emojis/873550081159233586.gif?size=160")
            message.reply({embeds : [blist]});
        } 
 })}}