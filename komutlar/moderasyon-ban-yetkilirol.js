const Discord = require('discord.js');
const db = require('croxydb');
const database = require('croxydb');

exports.run = async(client, message) => {

       let yrol =  database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
    let rol = message.mentions.roles.first()
    if(!rol) return message.channel.send('```Bir rol etiketlemelisin (Eğer rolü bulamıyorsan kanalı görebildiğinden veya etkietlenebilir olduğundan emin ol)```')
   db.set(`banrol_${message.guild.id}`, rol.id)
   return message.channel.send('<a:tmdir:778774341357797378> | **Ban yetkili rolü <@&' + rol+ '> Olarak ayarlandı**')
} 

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "ban-yetkili-rol"
}