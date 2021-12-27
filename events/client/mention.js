const prefixModel = require("../../database/guildData/prefix");
const {MessageActionRow, MessageButton, MessageEmbed} = require("discord.js") 

module.exports = async (message, client) => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES"))
    return;

  const prefixData = await prefixModel.findOne({
      GuildID: message.guild.id,
    }).catch(err=>console.log(err))
  
    if (prefixData) {
      var PREFIX = prefixData.Prefix
    } else if (!prefixData) {
      PREFIX = "+"
    }
    client.prefix = PREFIX;

  // mentioned bot
  
   const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {

    let embed = new MessageEmbed()
        .setTitle(`${client.user.username} is Here!`)
        .setDescription(`Hey **${message.author.username},** I was made by <@882978452918128641> 
        Bot Prefix: \`$\` Forgot My Prefix? Dw you can always mention me as prefix
        Invite Link: [Click Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)
        :question: Still need help? [Click Here](https://discord.gg/96KCSEeU3N) to join server
        `)
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("#006732")
        .setFooter(`Thanks for using me`)
    const row = new MessageActionRow() 
    .addComponents(
      new MessageButton()
    .setStyle("LINK")
.setLabel("INVITE ME")
.setEmoji("845272558843985941")
    .setURL("https://discord.com/oauth2/authorize?client_id=901811784414011413&permissions=8&scope=bot%20applications.commands"),
    new MessageButton()
    .setStyle("LINK")
.setLabel("SUPPORT SERVER")
.setEmoji("895292197828718592")
    .setURL("https://discord.gg/96KCSEeU3N")
      )
      message.channel.send({embeds: [embed], components: [row]})
    
      }

      }
