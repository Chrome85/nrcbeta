const db = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 


let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Narcos Beta Kullanıcı Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setImage('https://cdn.discordapp.com/attachments/769281758977458176/830411354275053578/standard_2.gif')
.setColor('#f6ff00')
.setDescription(` Narcos Beta botumuzu eklemek için \`n.botdavet\` yazabilirsiniz.`)  
.addField(`<:yesilok:810118122727669800> __Profil Resmi__`,` \`n.pp\` Avatarınızı Atar`,true)
.addField(`<:yesilok:810118122727669800> __V11TOV12__`,` \`n.v11tov12\` V11 Komutları V12'ye çevirir..`,true)
.addField(`<:yesilok:810118122727669800> __Kullanıcı Bilgi__`,` \`n.kullanıcı-bilgi <@üye>\` Kullanıcı'nın Bilgilerini Gösterir.`,true)
.addField(`<:yesilok:810118122727669800> __Çek__`,` \`n.çek\` Kullanıcı seste ise sizin yanınıza gelir.`,true)
.addField(`<:yesilok:810118122727669800> __Git__`,` \`n.git\` Kullanıcı seste ise sizin yanına gidersiniz.`,true)
.addField(`<:yesilok:810118122727669800> __Sunucu Bilgi__`,` \`n.sunucu-bilgi\` Sunucu'nun Bilgilerini Gösterir.`,true)
.addField(`<:yesilok:810118122727669800> __Bilgilendirme__`,` \`n.botdavet\` | Narcos Beta'yı Sunucunuza Davet Edersiniz\n \`s*istatistik\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: [], 
    permLevel: 0
  };
  exports.help = {
    name: 'kullanıcı'
  }; 
  