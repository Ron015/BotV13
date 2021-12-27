const Schema = require('../../database/models/welc');

module.exports = {
  name: 'sw',

run: async(client, message, args ) => {
  if(!message.member.permissions.has('MANAGE_GUILD')) return message.reply('You Dont Have Permiss!')

const channel = message.mentions.channels.first()
if(!channel) return message.channel.send(`Incorrect Usages!\n\nCorrect Usages: \`m!set-welcome-channel #channel\``);

Schema.findOne({ Guild: message.guild.id }, async(err, data) => {

if(data) {
  data.Channel = channel.id;
  data.save()
} else {
  new Schema({
    Guild: message.guild.id,
    Channel: channel.id,
  }).save()
}
message.reply(`${channel} Has Been Set As Welcome Channel!`)
})
  
}
  }