
const express = require("express")
const app = express()

app.get("/", (req, res) => {
 res.send("hello hell!")
})

app.listen(3000, () => {
 console.log("Whatever you want to put here")
})



require("dotenv").config({ path: "src/.env" });

const fs = require("fs");
const chalk = require("chalk");
let {
    MessageActionRow, 
    MessageButton, 
    Discord 
} = require("discord.js")

const { Client, Collection, Intents, MessageEmbed } = require("discord.js");
const { DEFAULT_PREFIX, BOT_TOKEN, ERROR_LOGS_CHANNEL, ALEXFLIPNOTE_API_KEY, YT_COOKIE } = require("./config.json");
const { loadCommands } = require("./handler/loadCommands");
const { loadEvents } = require("./handler/loadEvents");
const { loadSlashCommands } = require("./handler/loadSlashCommands")
const { loadPlayerEvents } = require("./handler/loadPlayerEvents");
const { DiscordTogether } = require('discord-together')
const { Player } = require('discord-player')
const Enmap = require("enmap")
const Chat = require("easy-discord-chatbot");
const db = require("quick.db")
const Levels = require("discord-xp") 


const client = new Client({
  allowedMentions: { parse: ["users", "roles"] },
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_PRESENCES,
  ],
});
const Embeds = require("./functions/embeds/Embeds")
const Logger = require("./functions/Logger/Logger")
const Util = require("./functions/util/Util")
const prefixData = require("./database/guildData/prefix") 
const alexClient = require("alexflipnote.js")
client.images = new alexClient(ALEXFLIPNOTE_API_KEY)
client.discordTogether = new DiscordTogether(client);
client.commands = new Collection();
client.slash = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./Commands/");
client.setMaxListeners(0);
const Cookie = YT_COOKIE;
client.logger = Logger;
client.utils = Util;
client.say = Embeds;
client.player = new Player(client, {
  leaveOnEnd: false,
  leaveOnStop: false,
  leaveOnEmpty: false,
  leaveOnEmptyCooldown: 60000,
  autoSelfDeaf: true,
  initialVolume: 130,
  ytdlDownloadOptions: {
    requestOptions: {
      headers: {
        cookie: Cookie,
      }
    }
  },
})

client.player.use("YOUTUBE_DL", require("@discord-player/downloader").Downloader);
client.db = new Enmap({ name: "musicdb" });

loadCommands(client);
loadEvents(client);
loadPlayerEvents(client);
loadSlashCommands(client);

// Error Handling

process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception: " + err);

  const exceptionembed = new MessageEmbed()
  .setTitle("Uncaught Exception")
  .setDescription(`${err}`)
  .setColor("RED")
  client.channels.cache.get(ERROR_LOGS_CHANNEL).send({ embeds: [exceptionembed] })
});

process.on("unhandledRejection", (reason, promise) => {
  console.log(
    "[FATAL] Possibly Unhandled Rejection at: Promise ",
    promise,
    " reason: ",
    reason.message
  );

   const rejectionembed = new MessageEmbed()
  .setTitle("Unhandled Promise Rejection")
  .addField("Promise", `${promise}`)
  .addField("Reason", `${reason.message}`)
  .setColor("RED")
  client.channels.cache.get(ERROR_LOGS_CHANNEL).send({ embeds: [rejectionembed] })
});

client.login(BOT_TOKEN).then(() => {
  console.log(
    chalk.bgBlueBright.black(
      ` Successfully logged in as: ${client.user.username}#${client.user.discriminator} `
    )
  );
});
client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
 let embed = new MessageEmbed()
 .setColor('BLACK')
 .setTitle('Connected To New Server')
 .setURL('https://discord.com/api/oauth2/authorize?client_id=901811784414011413&permissions=8&scope=bot%20applications.commands')
 .setDescription('<a:load:906108022118563870> Thank You For Inviting Me. My prefix is `$` Run $help for more info about me!')
 
 .addFields(
 { name: 'Creator', value: 'BoyNighth' }
 )

 .setImage('https://media.discordapp.net/attachments/904033176450633778/909290416745095238/standard_24.gif')
 .setTimestamp()
 .setFooter('Sunday', 'https://discord.com/api/oauth2/authorize?client_id=901811784414011413&permissions=8&scope=bot%20applications.commands');
channel.send({embeds : [embed]});
})

client.on('guildCreate', async guild => {
  let owner = await client.users.fetch('882978452918128641')
const hey = new MessageEmbed()
  .setTitle("New Guild!")
  .setDescription(`<a:load:906108022118563870> I have been added to **${guild.name}** with **${guild.memberCount}** members`)
  .setColor("BLACK")

  owner.send({embeds : [hey]} )







const chat = new Chat({ name: "LUNAR" });

client.on("message", async message => {
const chatbot = db.get(`chatchannel_${message.guild.id}`)
if(message.channel.id === `${chatbot}` &&
 !message.author.bot) { 
 let reply = await chat.chat(message.content)
 client.channels.cache.get(chatbot).send(reply)
 }
});



})