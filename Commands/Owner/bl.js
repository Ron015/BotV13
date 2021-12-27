const blacklist = require('../../database/models/blacklist')

const Discord = require('discord.js');

module.exports = {
    name : 'blacklist',
    aliases: ['blackl' , 'bl'],
    ownerOnly: true,
    run : async(client, message, args) => {
    if (message.author.id !== "882978452918128641") return;
        const User = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!User) return message.reply('❌ | Please provide a valid user!')

        blacklist.findOne({ id : User.user.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
                message.reply(`❌ | ${User.user.tag} is already Blacklisted!`)
            } else {
                data = new blacklist({ id : User.user.id })
                data.save()
                .catch(err => console.log(err))
                const yay = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setDescription(`**:white_check_mark: | ${User.user.tag} has been blacklisted!**`)
            message.channel.send({embeds : [yay]})
            }
           
        })
    }
}