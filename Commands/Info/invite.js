const { Client, Interaction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Get Links To Invite Me :D",
  type: "CHAT_INPUT",
  /**
   *
   * @param {Client} client
   * @param {Interaction} interaction
   */
   run: async (client, interaction, args) => {
    try {
      const embed = new MessageEmbed().setColor("WHITE");

      
      const row = new MessageActionRow().addComponents(
       
        new MessageButton().setLabel("Invite Me!").setURL("https://discord.com/api/oauth2/authorize?client_id=901811784414011413&permissions=8&scope=bot%20applications.commands").setStyle("LINK").setEmoji("845272558843985941")                                                                        
                                                                                                            
                                                                                                          
      ,
        new MessageButton()
      .setStyle("LINK")
      .setEmoji("895292197828718592")
.setLabel("SUPPORT SERVER")
      .setURL("https://discord.gg/96KCSEeU3N"),
      )

      embed.setDescription(`<a:yes:904275992338657330> **SUNDAY is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**`);
      embed.setImage("https://media.discordapp.net/attachments/904033176450633778/909290416745095238/standard_24.gif")
      await interaction.reply({ embeds: [embed], components: [row] });
    } catch (err) {
      console.log("Something Went Wrong => ", err);
    }
  },
};