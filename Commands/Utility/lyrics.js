const { Client, Message, MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: 'lyrics',

    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const song = args.join(" ");

        const data = await fetch(
            `https://some-random-api.ml/lyrics?title=${encodeURIComponent(song)}`
        ).then((res) => res.json())

        if(!data) return message.channel.send({ content: "Song not found." });
        const embed = new MessageEmbed()
        .setTitle(`${data.title} - ${data.author}`)
        .setDescription(data.lyrics)
        .setThumbnail(data.thumbnail.genius);

        return message.channel.send({ embeds: [embed] });
    },
};  


