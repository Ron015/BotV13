
const fetch = require("node-fetch")
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")
const embed = MessageEmbed;
const component = MessageActionRow;
const button =  MessageButton;
const color = require("../../config.json").color;

module.exports = {
    name: "kanye",
    description: "Kanye west said with button",
    run: async (client, message, args) => {  
      
   const row = new component().addComponents(
   new button()
   .setLabel("Generate")
   .setStyle("PRIMARY")
   .setCustomId("kanye")
   .setEmoji("🍂")
       
    )
   
   const dis = new component().addComponents(
   new button()
   .setLabel("Generate")
   .setStyle("PRIMARY")
   .setCustomId("kanye")
   .setEmoji("🍂")
   .setDisabled(true)
       
    )
   
   
    let kanye = await fetch("https://api.eriner.repl.co/kanyewest")
    .then(r => r.json())
  
   const emb = new embed()
   .setAuthor("Kanye West once said:", "https://media.discordapp.net/attachments/890154435551055893/892049229973946378/download.jpeg")
   .setDescription(kanye.quote)
   .setColor(color)

  let msg = await message.channel.send({
      embeds: [emb],
     components: [row]
      })  
  
  
 let filter = (i) => i.user.id === message.author.id;
       
const collector = await msg.createMessageComponentCollector({
    filter,
    type: "BUTTON"
})       
  
collector.on("collect", async (i) =>{
    if(i.customId === "kanye") {
    let kanye2 = await fetch("https://api.eriner.repl.co/kanyewest")
    .then(r => r.json())
  
   const emb2 = new embed()
   .setAuthor("Kanye West once said:", "https://media.discordapp.net/attachments/890154435551055893/892049229973946378/download.jpeg")
   .setDescription(kanye2.quote)
   .setColor(color)
    return msg.edit({
      embeds: [emb2]
    }) 
    }
    
           
         })
   }  
      } 
