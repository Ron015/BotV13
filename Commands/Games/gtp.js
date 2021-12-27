const { GuessThePokemon } = require('weky')
const blacklist = require("../../database/models/blacklist");  
const { MessageEmbed } = require("discord.js") 
module.exports = {
	name: 'guessthepokemon',
  description: "First one to shoot wins!",
	aliases: ['gtp'],
	run: async (client, message, args) => {
     // Before the command code
 blacklist.findOne({ id : message.author.id }, async(err, data) => {
        if(err) throw err;
        if(!data) { 
        //...your code

await GuessThePokemon({
	message: message,
	embed: {
		title: 'Guess The Pokémon | Lunar Development',
		description:
			'**Type:**\n{{type}}\n\n**Abilities:**\n{{abilities}}\n\nYou only have **{{time}}** to guess the pokémon.',
		color: '#5865F2',
        footer: '©️ Lunar Development',
		timestamp: true
	},
	thinkMessage: 'I am thinking',
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	winMessage:
		'GG, It was a **{{answer}}**. You got it correct in **{{time}}**.',
	loseMessage: 'Better luck next time! It was a **{{answer}}**.',
	time: 60000,
	incorrectMessage: "No {{author}}! The pokémon isn't `{{answer}}`",
	buttonText: 'Cancel'
});
          } else {
    const blist = new MessageEmbed()
                .setColor("RED")
                .setDescription(`**:hydroxerror: | You are blacklisted!**`)
.setThumbnail("https://cdn.discordapp.com/emojis/873550081159233586.gif?size=160")
            message.reply({embeds : [blist]});
        } 
 })}}