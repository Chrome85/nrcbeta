const Discord = require("discord.js");
const moment = require("moment");
const db = require('croxydb');
const os = require("os");
require("moment-duration-format");

exports.run = async(client, message) => {

       const msg = new Discord.MessageEmbed()
    .setColor("#f6ff00")
    .setFooter(client.user.tag, client.user.avatarURL())
  .addField(
  "» **Sahibim**","<@769241220110352416> ve <@384683153769496586> "
  )
    .addField(
      "» **Bellek kullanımı**",
      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
      true
    )
    .addField(
      "» **Çalışma süresi**",
      moment
        .duration(client.uptime)
        .format(" D [gün], H [saat], m [dakika], s [saniye]")
    )
      .addField(
      "» **Kullanıcılar**",
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      true
    )
    .addField(
      "» **Sunucular**",
      client.guilds.cache.size.toLocaleString(),
      true
    )
    .addField(
      "» **Kanallar**",
      client.channels.cache.size.toLocaleString(),
      true
    )
    .addField("» **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField("» **Node.JS sürüm**", `${process.version}`, true)
    .addField("» **Ping**", client.ws.ping + " ms", true)
    .addField(
      "» **CPU**",
      `\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``
    )
    .addField("» **Bit**", `\`${os.arch()}\``, true)
    .setThumbnail(client.user.avatarURL())
    .setImage('https://cdn.discordapp.com/attachments/769281758977458176/830411354275053578/standard_2.gif')
    .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``)
    .addField("**Linkler", "[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=645226005144797184&scope=bot&permissions=805314622)\n[Destek Sunucusu](https://discord.gg/cUF35cS)\n[Vote Sayfası](https://top.gg/bot/645226005144797184/vote)") 
    return message.channel.send(msg);
};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ['i','is','botbilgi'],
    permLevel: 0,
}

exports.help = {
  name: "istatistik",
};