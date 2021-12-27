const { Discord,
MessageActionRow,
MessageButton,
MessageEmbed,
} = require("discord.js");


module.exports = {
name: "coinflip",
aliases: ["cf"],
description: "flip a coin",


run: async (client, message, args) => {

const sides = ['heads', 'tails']

const side = sides[Math.floor(Math.random()*sides.length)]



const row = new MessageActionRow()
.addComponents(
new MessageButton()
.setLabel('Flip!')
.setStyle('SECONDARY')
.setCustomId('flip')
)
const row2 = new MessageActionRow()
  .addComponents(
    new MessageButton()
    .setLabel("FLIPPED")
.setStyle("SECONDARY")
    .setDisabled(true)
    .setCustomId("t")
  )

message.channel.send({ content: 'Click the button to flip a coin!', components: [row]})

const filter = (interaction) => {
if (interaction.user.id === message.author.id) return true;
return interaction.reply({ content: "You cannot use this button!", ephemeral: true })
};

const collector = message.channel.createMessageComponentCollector({
filter, 
max: 1,
});

collector.on("end", async (ButtonInteraction) => {
const id = ButtonInteraction.first().customId;

if (id === "flip") {
const embed = new MessageEmbed()
.setAuthor(`You flipped ${side}!`, client.user.displayAvatarURL({ dynamic: true}))
.setColor('BLUE')
.setTimestamp()

return  ButtonInteraction.first().update({ embeds: [embed], components: [row2]})
} 

})}}


