const {
  Client,
  Message,
  MessageEmbed,
  MessageButton,
  MessageActionRow
} = require("discord.js");
module.exports = {
  name: "ticket-panel",
  P_user: ["MANAGE_MESSAGES"],
  category: "admin",
  run: async (client, message, args) => {
    message.delete()
    const embed = new MessageEmbed()
      .setColor("BLUE")
      .setAuthor(
        message.guild.name,
        message.guild.iconURL({
          dynamic: true
        })
      )
      .setDescription(
        "__**How to make a ticket**__\n" +
          "> Click on the reaction that relates to your need\n" +
          "> Once the ticket is made you will be able to type in there"
      )
      .setTitle("Tickets")
      .setThumbnail(
        "https://media.discordapp.net/attachments/733317247522832445/767777222080725022/download-ticket-ticket-free-entertainment-icon-orange-ticket-design-0.png"
      );
    const bt = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("tic")
        .setEmoji("🎫")
        .setLabel("Create Ticket!")
        .setStyle("PRIMARY")
    );
    message.channel.send({
      embeds: [embed],
      components: [bt]
    });
    client.on("interactionCreate", async (interaction) => {

    await interaction.deferUpdate();
    if (interaction.isButton()) {
        if (interaction.customId === 'tic') {
const channel = await interaction.guild.channels.create(
        `${interaction.user.username} ticket`,
        {
          topic: `Common Information:
Ticket Name: ${interaction.user.username}
Ticket ID: ${interaction.user.id}`,
          permissionOverwrites: [
            {
              id: interaction.guild.roles.everyone,
              deny: ["VIEW_CHANNEL"]
            },
            {
              id: interaction.user.id,
              allow: ["VIEW_CHANNEL"]
            },
            {
              id: client.user.id,
              allow: [
                "VIEW_CHANNEL",
                "MANAGE_CHANNELS",
                "MANAGE_MESSAGES",
                "SEND_MESSAGES"
              ]
            }
          ]
        }
      );

      const embed = new MessageEmbed()
        .setTitle("Ticket")
        .setDescription(
          "Hello there,\nThe staff will be here as soon as possible mean while tell us about your issue!\nThank You!"
        )
        .setColor("GREEN")
        .setTimestamp()
        .setAuthor(
          interaction.guild.name,
          interaction.guild.iconURL({
            dynamic: true
          })
        );
      const suk = new MessageEmbed()
        .setTitle("Ticket")
        .setDescription(`Ticket created <#${channel.id}>`)
        .setColor("GREEN")
        .setTimestamp()
        .setAuthor(
          interaction.guild.name,
          interaction.guild.iconURL({
            dynamic: true
          })
        );
      const del = new MessageActionRow().addComponents(
        new MessageButton()
          .setCustomId("del")
          .setLabel("🔒 Close")
          .setStyle("DANGER")
      );
      channel
        .send({
          content: `Welcome <@${interaction.user.id}>`,
          embeds: [embed],
          components: [del]
        })
        .then(
          interaction.followUp({
            embeds: [suk],
            ephemeral: true
          })
        );
      data.set(`ticket_user_${channel.id}`, interaction.user.id);
     data.set(`ticket_create_${interaction.user.id}`, channel.id);
  }
}
    })
  }}