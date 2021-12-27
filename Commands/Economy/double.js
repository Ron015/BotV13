const { Client, Message, MessageEmbed } = require('discord.js');
const eco = require("../../database/models/economy")
const emo = require("../../emojis") 
module.exports = {
    name: 'double-or-nothing',
    aliases: ['don', 'gamble-double', 'double', 'double-nothing', 'doubleornothing'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
      let profile; 
    {
      profile = await eco.findOne({
        userID: message.author.id,
      })
    }
        if(!args[0]) return message.reply('Please specify an amount to bet!');

        if(isNaN(args[0])) return message.reply('Argument must be a number.');

        const amountToBet = parseInt(args[0]);

        if((await profile.coins < amountToBet)) return message.reply('You have insufficent funds to make this bet!');

        function random() {
            const math = Math.floor(Math.random() * 2);
            return math === 1;
        };

        if(random() === true ) {
            const winAmount = amountToBet * 2;
            message.channel.send(`Congrats you have won **${winAmount} ${emo.coin}**.`);
          {
            await eco.findOneAndUpdate(
              {
                userID: message.author.id,
              },
              {
                $inc: {
                  coins: winAmount,
                },
              }
            );
          }
        } else {
            message.channel.send(
                ` Aww you lost **${amountToBet} ${emo.coin}**. Better luck next time!`
            );
          {
            const winAmount = amountToBet * 1;
await eco.findOneAndUpdate(
              {
                userID: message.author.id,
              },
              {
                $inc: {
                  coins: -winAmount,
                },
              }
            );
          }
        }
    
}  
}