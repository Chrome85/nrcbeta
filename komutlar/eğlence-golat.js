const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message) => {
  let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
  const westraben = new Discord.MessageEmbed()
  .setColor("#f6ff00")
  .setDescription(`:x: **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/tuG87ZadFu) gelebilirsin!`)
   if(karaliste) 
     return message.channel.send(westraben)
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor('10 Nolu Formaya Sahip ' + message.author.username + ' Attı Veeeeee Goooooooooool! ')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
        .setImage(`https://i.gifer.com/Firv.gif`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'golat',
  description: 'Gol Atarsınız',
  usage: 'golat'
};