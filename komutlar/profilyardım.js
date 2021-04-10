const db = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async(client, message) => {

let eklenti = new Discord.MessageEmbed()  
.setDescription(` Narcos Beta botumuzu eklemek için \`n.botdavet\` yazabilirsiniz.`)  
.setImage('https://cdn.discordapp.com/attachments/769281758977458176/830411354275053578/standard_2.gif')
.addField(`<:sagok:778774307253518366> __Bayrak Ayarla__`,` \`n.bayrakayarla\` İstediğiniz Bayrağı Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Cinsiyet Ayarla__`,` \`n.cinsiyetayarla\` Cinsiyetinizi Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __İsim Ayarla__`,` \`n.isimayarla\` İsminizi Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Soyisim Ayarla__`,` \`n.soyisimayarla\` Soyisminizi Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Yaş Ayarla__`,` \`n.yaşayarla\` Yaşınızı Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Favori Oyun Ayarla__`,` \`n.favorioyun\` Favori Oyununuzu Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Favori Şarkı Ayarla__`,` \`n.favorişarkı\` Favori Şarkınızı Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Profilim__`,` \`n.profilim\` Profilinize Bakarsınız.`,true)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["moderasyon","ayarlar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'profil'
  }; 
  