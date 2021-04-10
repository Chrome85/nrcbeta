const Discord = require('discord.js');

exports.run = async(client, message) => {
  let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
  const westraben = new Discord.MessageEmbed()
  .setColor("#f6ff00")
  .setDescription(`:x: **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/tuG87ZadFu) gelebilirsin!`)
   if(karaliste) 
     return message.channel.send(westraben)
const nhediyeci = message.mentions.users.first() 
if (!nhediyeci) return message.channel.send("Kime Hediye Alıyoruz?")

 

      const narcoshediye = new Discord.MessageEmbed()
    .setDescription(`${nhediyeci} Sana Hediye Alan Biri Var Aramızda 😊`)
    .setColor("RANDOM")
    .setTimestamp()
    .setImage("https://media.giphy.com/media/3oz8xBkRsgPTnbK1GM/giphy.gif")
    message.channel.send(narcoshediye)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hediye","h-v","hv"],
  permLevel: 0
};

exports.help = {
  name: 'hediye-ver',
  description: 'Hediye Alırsınız',
  usage: 'hediye-ver'
};