const Discord = require('discord.js');

exports.run = async(client, message) => {

  const davet = new Discord.MessageEmbed()
  .setColor('#f6ff00')
  .setImage('https://cdn.discordapp.com/attachments/769281758977458176/830411354275053578/standard_2.gif')
  .addField("Linkler", "[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=645226005144797184&scope=bot&permissions=805314622)\n[Destek Sunucusu](https://discord.gg/cUF35cS)\n[Vote Sayfası](https://top.gg/bot/645226005144797184/vote)") 

  message.channel.send(davet)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "botdavet"
}