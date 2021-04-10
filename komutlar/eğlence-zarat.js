const Discord = require('discord.js')

exports.run = async(client, message) => {
  let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
  const westraben = new Discord.MessageEmbed()
  .setColor("#f6ff00")
  .setDescription(`:x: **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/tuG87ZadFu) gelebilirsin!`)
   if(karaliste) 
     return message.channel.send(westraben)
         message.channel.send(new Discord.MessageEmbed()
    .setColor(message.guild.me.displayHexColor)
    .setTitle('🎲 Zarın: ' + narcoscode()));

    function narcoscode() {
        var rand = ['1', '2', '3', '4', '5', '6'];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}

 exports.conf = {
  enabled: true,  
  aliases: ['zar'],
  guildOnly: false,
  permLevel: 0
};

 exports.help = {
  name: 'zarat',
  description: 'Zar Atın',
  usage: ''
};