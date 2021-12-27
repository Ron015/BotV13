const blacklist = require("../../database/models/blacklist"); 
const Discord = require('discord.js');

module.exports = {
    name : 'whitelist',
    aliases: ['wlist' , 'unbl'],
    ownerOnly: true,
    run : async(client, message, args) => {
if (message.author.id !== "882978452918128641") return;
       const User = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!User) return message.reply('**:x: |** Please provide a valid user!')

        blacklist.findOne({ id : User.user.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
               await blacklist.findOneAndDelete({ id : User.user.id })
                .catch(err => console.log(err))
                const yay = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setDescription(`**:white_check_mark: | ${User.user.tag} has been removed from blacklist.**`)
            message.channel.send({embeds : [yay]})
            } else {
               message.reply(`**:x: |** ${User.user.tag} is not blacklisted!`)
            }
           
        })
    }
}