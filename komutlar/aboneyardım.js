const db = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 

let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Narcos Beta Abone Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setImage('https://cdn.discordapp.com/attachments/769281758977458176/830411354275053578/standard_2.gif')
.setColor('#f6ff00')
.setDescription(` Spallers botumuzu eklemek için \`n.botdavet\` yazabilirsiniz.`)  
.addField(`<:yesilok:810118122727669800> __Abone Yetkili Rol__`,` \`n.abone-y-rol\` Abone Yetkili Rolü Ayarlarsınız.`,true)
.addField(`<:yesilok:810118122727669800> __Abone Log__`,` \`n.abone-log\` Abone Logu ayarlarsınız`,true)
.addField(`<:yesilok:810118122727669800> __Abone Rolü Ver__`,` \`n.a <@etiket>\` Kişiye abone rolü verirsiniz.`,true)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: [], 
    permLevel: 0
  };
  exports.help = {
    name: 'abone'
  };