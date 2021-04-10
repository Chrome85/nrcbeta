const db = require("croxydb");
const Discord = require('discord.js');
const spallers = require("../index.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix
exports.run = async (client, message, args) => { 
let eklenti = new Discord.MessageEmbed()  
.addField(`<:onaytiki:813053491445760000> __Guard Komutları__`,` \`n.guard\` `,true)
.addField(`<:onaytiki:813053491445760000> __Yetkili Komutları__`,` \`n.moderasyon\` `,true)
.addField(`<:onaytiki:813053491445760000> __Abone Komutları__`,` \`n.abone\` `,true)
.addField(`<:onaytiki:813053491445760000> __Profil Komutları__`,` \`n.profil\` `,true)
.addField(`<:onaytiki:813053491445760000> __Eğlence Komutları__`,` \`n.eğlence\` `,true)
.addField(`<:onaytiki:813053491445760000> __Kullanıcı Komutları__`,` \`n.kullanıcı\` `,true)
.setImage('https://cdn.discordapp.com/attachments/769281758977458176/830411354275053578/standard_2.gif')
.addField(`╔═══════════◥◣❖◢◤════════════╗`,
`**║  \`${prefix}botdavet\` __Botu Davet Edebilirsiniz!__**
**║  \`${prefix}istatistik\` __İstatistiklerini Göre Bilirsiniz.__**
**╚═══════════◥◣❖◢◤════════════╝**
`)
message.channel.send(eklenti)
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardım","help"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  }; 
  