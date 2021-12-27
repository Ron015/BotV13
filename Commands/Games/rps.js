// messageCreate Event
const simplydjs = require('simply-djs')
// rps command
const blacklist = require("../../database/models/blacklist");  
const { MessageEmbed } = require("discord.js") 
module.exports = {
	name: 'rockpapersiccors',
  description: "First one to shoot wins!",
	aliases: ['rps'],
	run: async (client, message, args) => {
     // Before the command code
 blacklist.findOne({ id : message.author.id }, async(err, data) => {
        if(err) throw err;
        if(!data) { 
        //...your code


simplydjs.rps(message)
                  } else {
    const blist = new MessageEmbed()
                .setColor("RED")
                .setDescription(`**:hydroxerror: | You are blacklisted!**`)
.setThumbnail("https://cdn.discordapp.com/emojis/873550081159233586.gif?size=160")
            message.reply({embeds : [blist]});
        } 
 })}}
