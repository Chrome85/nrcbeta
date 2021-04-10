const Discord = require('discord.js')
const db = require('croxydb')
const ayarlar = require('../ayarlar.json')
const database = require('croxydb');

exports.run = async(client, message) => {

  const sayacsayi =  db.fetch(`sayac_${message.guild.id}`);
  const sayackanal = message.mentions.channels.first()
  
  let yrol = await database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)        
  if(!args[0]) {
    message.channel.send(`:x: **Bir sayı yazmalısın.**`)
    return
  }
  
  if(!sayackanal) {
   message.channel.send(`:x: **Sayaç kanalını etiketlemelisin.**`)
  }
  
  
  if(args[0] === "sıfırla") {
    if(!sayacsayi) {
      message.channel.send(`:x: **Ayarlanmayan şeyi sıfırlayamazsın.**`)
      return
    }
    
    db.delete(`sayac_${message.guild.id}`)
    db.delete(`sayacK_${message.guild.id}`)
    message.channel.send(`:x: **Sayaç başarıyla sıfırlandı.**`)
    return
  }
  
  if(isNaN(args[0])) {
    message.channel.send(`:x: **Bir sayı yazmalısın.**`)
    return
  }
 
        if(args[0] <= message.guild.members.size) {
                message.channel.send(`:x: **Sunucudaki kullanıcı sayısından (${message.guild.members.size}) daha yüksek bir değer girmelisin.**`)
                return
        }
  
  db.set(`sayac_${message.guild.id}`, args[0])
  db.set(`sayacK_${message.guild.id}`, sayackanal.id)
  
  message.channel.send(`:x: | **Sayaç** \`${args[0]}\`, \n<a:tmdir:778774341357797378> | **Sayaç kanalı ${sayackanal} olarak ayarlandı.**`)
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['sayac'],
        permLevel: 3
}
 
exports.help = {
        name: 'sayaç',
        description: 'Sayacı ayarlar.',
        usage: 'sayaç <sayı> <#kanal> / sıfırla'
}