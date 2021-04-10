const db = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async(client, message) => {


let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Narcos Beta Eğlence Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setImage('https://cdn.discordapp.com/attachments/769281758977458176/830411354275053578/standard_2.gif')
.setColor('#f6ff00')
.setDescription(` Narcos Beta botumuzu eklemek için \`n.botdavet\` yazabilirsiniz.`)  
.addField(`<:yesilok:810118122727669800> __Minecraft Skin__`,` \`s*mcskin\`Adı yazılan kişinin mc skinini görürsünüz..`,true)
.addField(`<:yesilok:810118122727669800> __Maymun__`,` \`s*maymun\` Maymun Gif'i Atar.`,true)
.addField(`<:yesilok:810118122727669800> __Kedi__`,` \`s*kedi\` Kedi Gif'i Atar.`,true)
.addField(`<:yesilok:810118122727669800> __Kral Ol__`,` \`s*kralol\` Kral olursunuz.`,true)
.addField(`<:yesilok:810118122727669800> __Kahve İç__`,` \`s*kahveiç\` Türk Kahvesi İçersiniz.`,true)
.addField(`<:yesilok:810118122727669800> __Kapak Laflar__`,` \`s*kapaklaflar\` Bot, kapak laflar atar.`,true)
.addField(`<:yesilok:810118122727669800> __İlginç Bilgi__`,` \`s*ilginçbilgi\` Bot, ilginç bilgiler söyler.`,true)
.addField(`<:yesilok:810118122727669800> __Kartopu__`,` \`s*kartopu\` Etiketlediğiniz kişiye kartopu atarım.`,true)
.addField(`<:yesilok:810118122727669800> __Hava Durumu__`,` \`s*havadurumunu\` Hava durumunu söyler.`,true)
.addField(`<:yesilok:810118122727669800> __Hediye Ver__`,` \`s*hediyever\` Etiketlediğiniz kişiye hediye veririm.`,true)
.addField(`<:yesilok:810118122727669800> __Gol At__`,` \`s*golat\` Gol Atarsınız.`,true)
.addField(`<:yesilok:810118122727669800> __Emoji Ekle__`,` \`s*emojiekle\` Emoji eklersiniz.`,true)
.addField(`<:yesilok:810118122727669800> __Bilgilendirme__`,` \`s*botdavet\` | Spallers'i Sunucunuza Davet Edersiniz\n \`s*istatistik\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: [], 
    permLevel: 0
  };
  exports.help = {
    name: 'eğlence'
  }; 
  