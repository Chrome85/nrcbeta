const db = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 

  
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Narcos Beta Moderasyon Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setImage('https://cdn.discordapp.com/attachments/769281758977458176/830411354275053578/standard_2.gif')
.setColor('#f6ff00')
.setDescription(` Narcos Beta botumuzu eklemek için \`n.botdavet\` yazabilirsiniz.`)  
.addField('YETKİLİ ROL AYARLAMAK İÇİN ','n.yetkilirol')
.addField('**--------------------------------------**','Komutlar')
.addField(`<:yesilok:810118122727669800> __Sa-As__`,` \`n.sa-as aç-kapat \` Otomatik Selamlamayı Açar/Kapatır.`,true)
.addField(`<:yesilok:810118122727669800> __Otorol__`,` \`n.otorol\` Gelenlere Rol Verir.`,true)
.addField(`<:yesilok:810118122727669800> __Sayaç__`,` \`n.sayaç <sayı> <#kanal>\` Sayaç Ayarlarsınız.`,true)
.addField(`<:yesilok:810118122727669800> __Sil__`,` \`n.sil \`Belirli Sayıda Mesaj Siler.`,true)
.addField(`<:yesilok:810118122727669800> __Yavaş Mod__`,` \`n.yavaş-mod \` Sohbete Süre Ayarlar.`,true)
.addField(`<:yesilok:810118122727669800>  __Mod Log__`,` \`n.modlog \` Modlogu ayarlar..`,true)
.addField(`<:yesilok:810118122727669800> __Ban Log__`,` \`n.ban-log\` Ban Log Kanalı Ayarlarsınız.`,true)
.addField(`<:yesilok:810118122727669800> __Ban Yetkili Rol__`,` \`n.ban-yetkili-rol\` Sadece Kimler Banlayabilir?`,true)
.addField(`<:yesilok:810118122727669800> __Ban__`,` \`n.ban <@üye> <sebep>\` Kişiyi Banlarsınız.`,true)
.addField(`<:yesilok:810118122727669800> __Ban Kaldır__`,` \`n.unban <KişiID> <Sebep> \` Belirtiğiniz Kişinin Banını Açar.`,true)
.addField(`<:yesilok:810118122727669800> __Ban Affı__`,` \`n.banaffı \` Bütün Yasaklıların Banını Açar.`,true)
.addField(`<:yesilok:810118122727669800> __Kick Log__`,` \`n.kick-log\`  Kick Log Kanalı Ayarlarsınız.`,true)
.addField(`<:yesilok:810118122727669800> __Kick Yetkili Rol__`,` \`n.kick-yetkili-rol\` Sadece Kimler Kick Atabilir?`,true)
.addField(`<:yesilok:810118122727669800> __Kick__`,` \`n.kick <@üye> <sebep> \` Kişiyi Sunucudan Kicklersiniz.`,true)
.addField(`<:yesilok:810118122727669800> __Jail Log__`,` \`n.jail-kanal ayarla\` Jail Log Kanalını Ayarlarsınız.`,true)
.addField(`<:yesilok:810118122727669800> __Jail Yetkili Rol__`,` \`n.jail-yetkilisi ayarla \` Sadece Kimler Jail Atabilir?`,true)
.addField(`<:yesilok:810118122727669800> __Jail Rolü__`,` \`n.jail-rol ayarla \` Jail Verilecek Rol.`,true)
.addField(`<:yesilok:810118122727669800> __Jail__`,` \`n.jail @üye <10s,10m,10h,10d> sebep \` Kişiye Jail Rolünü Verirsiniz.`,true)
.addField(`<:yesilok:810118122727669800> __Mute Log__`,` \`n.mute-log #kanal \` Mute Log Kanalı Ayarlarsınız.`,true)
.addField(`<:yesilok:810118122727669800> __Mute Log Kapat__`,` \`n.mute-log-kapat \` Mute Log Kanalını Sıfırlar.`,true)
.addField(`<:yesilok:810118122727669800> __Mute Yetkili Rol__`,` \`n.mute-yetkili-rol <@rol> \` Sadece Kimler Mute Atabilir?`,true)
.addField(`<:yesilok:810118122727669800> __Mute Yetkili Rol Sil__`,` \`n.muteyetki-sil \` Otomatik Selamlamayı Açar/Kapatır.`,true)
.addField(`<:yesilok:810118122727669800> __Mute__`,` \`n.mute <@üye> <1s> <1m> <1h> <1d> \` Otomatik Selamlamayı Açar/Kapatır.`,true)
.addField(`<:sagok:778774307253518366> __Bilgilendirme__`,` \`n.botdavet\` | Narcos Beta'yı Sunucunuza Davet Edersiniz\n \`s*istatistik\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["moderasyon","ayarlar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'moderasyon'
  }; 
  