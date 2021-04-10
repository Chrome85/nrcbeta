let database = require("croxydb")
let ayarlar = require("../ayarlar.json")

 //komutu alıp asıl botunuza atabilirsiniz
 exports.run = async(client, message) => {
  let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
  const westraben = new Discord.MessageEmbed()
  .setColor("#f6ff00")
  .setDescription(`:x: **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/cUF35cS) gelebilirsin!`)
   if(karaliste) 
     return message.channel.send(westraben) 
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abone-y-rol @rol`)
  
  
  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id)
  message.channel.send(`Abone yetkilisi başarıyla ${rol} olarak ayarlandı.`)
}
 //komutu alıp asıl botunuza atabilirsiniz
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aboneyrol'],
  perm: 0
}
exports.help = {
  name: 'abone-yetkili-rol'
}

exports.play = {
  kullanım: 'abone-y-rol @rol',
  açıklama: 'Abone Yetkili Rolünü Ayarlarsınız',
  kategori: 'Abone'
}