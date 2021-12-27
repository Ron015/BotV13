const {MessageActionRow, MessageButton, MessageSelectMenu, MessageEmbed} = require("discord.js")

const config = require("../../config") 
module.exports = {
name: "help",

run: async (client, message, args) => {
const row = new MessageActionRow() 
  .addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')

					.addOptions([
            {
							label: 'Main Menu',
							description: 'Shows the main menu',
              emoji: "903063474547064892",
							value: '0',
						},
						{
							label: 'Config Commands',
							description: 'Shows all the config commands',
              emoji: "888347974944571392",
							value: '1',
						},

						{
							label: 'Birthday Commands',
							description: 'Shows all the birthday commands',
              emoji: "891240511262851092",
							value: '2',
						},
            {
							label: 'Economy Commands',
							description: 'Shows all the economy commands',
              emoji: "862415055622635560",
							value: '3',
						},
{
							label: 'Music Commands',
							description: 'Shows all the music commands',
  emoji: "887805234062188554",
							value: '4',
						},

{
							label: 'Fun Commands',
							description: 'Shows all the fun commands',
  emoji: "821627057943347221",
							value: '5',
						},
            {
							label: 'Games Commands',
							description: 'Shows all the game commands',
              emoji: "888346016791793674",
							value: '6',
						},
{
							label: 'Images Commands',
							description: 'Shows all the image commands',
  emoji: "787905402603438100",
							value: '7',
						},

{
							label: 'Information Commands',
							description: 'Shows all the information commands',
  emoji: "869468766529003560",
							value: '9',
						},
{
							label: 'Moderation Commands',
							description: 'Shows all the moderation commands',
  emoji: "834862725120917544",
							value: '10',
						},
            {
							label: 'Utility Commands',
							description: 'Shows all the utility commands',
              emoji: "887805199547269171",
							value: '11',
						},
					]),
			);
const row2 = new MessageActionRow() 
  .addComponents(
    new MessageButton()
    .setStyle("LINK")
.setLabel("INVITE ME")
.setEmoji("845272558843985941")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=901811784414011413&permissions=8&scope=bot%20applications.commands"),
    new MessageButton()
    .setStyle("LINK")
.setLabel("SUPPORT SERVER")
.setEmoji("895292197828718592")
    .setURL("https://discord.gg/96KCSEeU3N")
  )
  
const embed = new MessageEmbed()
  .setTitle("**HELP MENU**")
  .setDescription(`Pls select a category to see more commands.\n\n> <a:dil:906105325390819388> \`\Prefix\`\: ${config.DEFAULT_PREFIX}\n> <a:dil:906105325390819388> \`\Total Commands\`\: ${client.commands.size}\n> <a:dil:906105325390819388> \`\Total Servers\`\: ${client.guilds.cache.size} `)
  .setImage("https://media.discordapp.net/attachments/904033176450633778/909290416745095238/standard_24.gif")
.setColor("#f4c2c2")


  let sendmsg = message.channel.send({embeds: [embed], components: [row,row2]})

let embed1 = new MessageEmbed()
.setColor('#FFFFFF')
.setTitle('**HELP MENU**')
.addFields(
    {name: "**CONFIG COMMANDS**", value: `\`\ANTILINK\`\ \`\AUTOROLE\`\ \`\EMBED\`\ \`\PREFIX\`\ \`\SETUP\`\ `})
.setImage("https://media.discordapp.net/attachments/904033176450633778/909290416745095238/standard_24.gif")
.setColor("#f4c2c2")
.setFooter('Page 1')

    let embed2 = new MessageEmbed()
    .setTitle('**Help Menu**')
    .setColor('#FFFFFF')
   .addFields(
    {name: "**BIRTHDAY COMMANDS**", value: `\`\SET-B\`\ \`\CHECK-B\`\ `})
.setColor("#f4c2c2")
.setImage("https://media.discordapp.net/attachments/904033176450633778/909290416745095238/standard_24.gif")
.setFooter('Page 2')

    let embed3 = new MessageEmbed()
  
    .setTitle('**Help Menu**')
    .setColor('#FFFFFF')
  .addFields(
    {name: "**ECONOMY COMMANDS**", value: "`balance` `deposit` `crime` `search` `gamble-double` `withdraw`"})
.setColor("#f4c2c2")
.setImage("https://media.discordapp.net/attachments/904033176450633778/909290416745095238/standard_24.gif")
.setFooter('Page 3')



    let embed4 = new MessageEmbed()
    .setTitle('**Help Menu**')
    .setColor('#FFFFFF')
  .addFields(
    {name: "**MUSIC COMMANDS**", value: "`clearqueue`, `filter`, `filter list`, `info`, `jump`, `loop`, `lyrics`, `move`, `mute`, `pause`, `play`, `previoustrack`, `queue`, `remove`, `resume`, `unmute`, `volume`, `youtube`\n\n```Note: Music commands work only with slash commands!\nBe sure to use music before each command!```"})
      .setImage("https://media.discordapp.net/attachments/904033176450633778/909290416745095238/standard_24.gif")
.setColor("#f4c2c2")
    .setFooter('Page 4')
   let embed5 = new MessageEmbed()
    .setTitle('**Help Menu**')
    .setColor('#FFFFFF')
  .addFields(
    {name: "**FUN COMMANDS**", value: `\`\EIGHTBALL\`\ \`\AKI\`\ \`\ASCII\`\ \`\CATSAY\`\ \`\CHOOSE\`\ \`\CLAP\`\ \`\COWSAY\`\ \`\DAB\`\ \`\EMOJIFY\`\ \`\FLIPTEXT\`\ \`\GIF\`\ \`\GREENTEXT\`\ \`\HACK\`\ \`\HUG\`\ \`\JOKE\`\ \`\KANYE\`\ \`\KILL\`\ \`\MAM\`\ \`\MEME\`\ \`\NITRO\`\ \`\ORANGE TEXT\`\ \`\POKEIMG\`\ \`\RESPECT\`\ \`\REVERSE\`\ \`\ROAST\`\ \`\SLAP\`\ \`\SUDO\`\ \`\TRIVIA\`\ \`\VAPORTEXT\`\  `})
     .setColor("#f4c2c2")
     .setImage("https://media.discordapp.net/attachments/904033176450633778/909290416745095238/standard_24.gif")
    .setFooter('Page 5')
    
    let embed6 = new MessageEmbed()
  
    .setTitle('**Help Menu**')
    .setColor('#FFFFFF')
  .addFields(
    {name: "**GAMES COMMANDS**", value: `\`\CATCHTHEFISH\`\ \`\QUICKCLICK\`\ \`\C4\`\ \`\FASTTYPE\`\ \`\FIGHT\`\ \`\FOOTBALL\`\ \`\GUESSTHEPOKEMON\`\ \`\GUESSTHENUMBER\`\ \`\GUNFIGHT\`\ \`\LIESWATTER\`\ \`\ROADRACE\`\ \`\RPS\`\ \`\SNAKE\`\ \`\TTT\`\ \`\WOULDYOURATHER\`\ `})
      .setImage("https://media.discordapp.net/attachments/904033176450633778/909290416745095238/standard_24.gif")
      .setColor("#f4c2c2")
.setFooter('Page 6')
   let embed7 = new MessageEmbed()
    .setTitle('**Help Menu**')
    .setColor('#FFFFFF')
  .addFields(
    {name: "**IMAGE COMMANDS**", value: `\`\ACHIEVEMENT\`\ \`\ALERT\`\ \`\AMAZEME\`\ \`\AMIAJOKE\`\ \`\BAD\`\ \`\BIDEN\`\ \`\CHALLENGE\`\ \`\CHANGEMYMIND\`\ \`\CLYDE\`\ \`\CREATEMEME\`\ \`\DOCKOFSHAME\`\ \`\DRAKE\`\ \`\FACTS\`\ \`\ILLEGAL\`\ \`\MEMETEMPLATE\`\ \`\PHB\`\ \`\SCROLL\`\ \`\TEXTIMAGE\`\ \`\TRASH\`\ \`\TRIGGER\`\ \`\TRUMPTWEET\`\ \`\WASTED\`\ \`\WIDEAVATAR\`\  `})
     .setImage("https://media.discordapp.net/attachments/904033176450633778/909290416745095238/standard_24.gif")
     .setColor("#f4c2c2")
    .setFooter('Page 7')
       
       let embed9 = new MessageEmbed()
    .setTitle('**Help Menu**')
    .setColor('#FFFFFF')
  .addFields(
    {name: "**INFO COMMANDS**", value: `\`\BOTINFO\`\ \`\EMOJIID\`\ \`\HELP\`\ \`\INVITE\`\ \`\PING\`\ \`\BUGREPORT\`\   `})
         .setImage("https://media.discordapp.net/attachments/904033176450633778/909290416745095238/standard_24.gif")
         .setColor("#f4c2c2")
    .setFooter('Page 9')
    
       let embed10 = new MessageEmbed()
    .setTitle('**Help Menu**')
    .setColor('#FFFFFF')
  .addFields(
    {name: "**MOD COMMANDS**", value: `\`\ADDROLEALL\`\ \`\BAN\`\ \`\DM\`\ \`\KICK\`\ \`\MUTE\`\  \`\REMOVEROLEALL\`\ \`\SOFTBAN\`\ \`\TEMPMUTE\`\ \`\UNMUTE\`\ \`\STEALMOJI\`\ \`\TICKET\`\  `})
    .setFooter('Page 10')
         .setImage("https://media.discordapp.net/attachments/904033176450633778/909290416745095238/standard_24.gif")
  .setColor("#f4c2c2")
       let embed11 = new MessageEmbed()
    .setTitle('**Help Menu**')
    .setColor('#FFFFFF')
.addFields({name: "**UTILITY COMMANDS**", value: "`avatar` `animesearch` `announce``calculator` `clear` `createrole` `delchannel` `delrole` `enlargemoji` `esay` `giverole` `google` `imdb` `lock` `newtext` `newvoice` `nickname` `poll` `removerole` `say` `servericon` `serverinfo` `dump` `translate` `unlock` `weather` `wiki` `youtube` `findemoji` `rolelist`"})
         .setImage("https://media.discordapp.net/attachments/904033176450633778/909290416745095238/standard_24.gif")
         .setColor("#f4c2c2")
    .setFooter('Page 11')
    
const filter = i => i.user.id===message.author.id;
    const collector = message.channel.createMessageComponentCollector({
    filter,
      time: 18000,
    componentType: "SELECT_MENU"
 });
       

collector.on("collect", async (collected) =>{
const value = collected.values[0]
if(value === "0" ){
collected.update({embeds: [embed], components: [row,row2]})
}
if(value === "1" ){
collected.update({embeds: [embed1], components: [row,row2]})
  }
  if(value === "2" ){
collected.update({embeds: [embed2],components: [row,row2]})
  }
if(value === "3"){
collected.update({embeds: [embed3],components: [row,row2]})
}
if(value === "4" ){
collected.update({embeds: [embed4],components: [row,row2]})
}
if(value === "5" ){
collected.update({embeds: [embed5],components: [row,row2]})
}
if(value === "6"){
collected.update({embeds: [embed6],components: [row,row2]})
}
if(value === "7"){
collected.update({embeds: [embed7],components: [row,row2]})
}
  
  if(value === "9"){
collected.update({embeds: [embed9],components: [row,row2]})
  }
  if(value === "10"){
collected.update({embeds: [embed10],components: [row,row2]})
  }
  if(value === "11"){
collected.update({embeds: [embed11],components: [row,row2]})
  }
 })
  
  
}
}