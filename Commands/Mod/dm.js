const Discord = module.require("discord.js");

module.exports = {
  name: "dm",
  description: "Send DM message to a user",
  userPerms: ["MANAGE_GUILD"],
  botPerms: ["MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    message.delete();
    const state = "disabled";
    if (state === "disabled") {
      return message.channel.send(
        "the Command has been disabled because of facing crash issues"
      );
    }
    const userid = args[0];
    if (!userid) {
      return message.channel.send("Enter an ID");
    }
    const msg = args.slice(1).join(" ");
    if (!msg) {
      return message.channel.send("Enter the message");
    }
    const user = client.users.cache.get(`${userid}`);
    const embed = new Discord.MessageEmbed()
      .setTitle("Support Reply!")
      .setDescription(`${msg}`)
      .setFooter("Regards, Infinity Mod Team")
      .setColor("RANDOM");

    user.send({ embeds: [embed] });
  },
  catch(error) {
    const errorlogs = client.channels.cache.get("903893732645019679");
    message.channel.send("Looks like an error has occured");
    errorlogs.send("Error on DM command\n Error:\n" + error);
  },
};
