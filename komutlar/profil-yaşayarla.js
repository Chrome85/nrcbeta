const Discord = require("discord.js");
const db = require("croxydb");
const database = require('croxydb');

exports.run = async (client, message, args) => {

  let yas = args.slice(0).join(" ");
  if (!yas)
    return message.channel.send(
      ":x: | **Lütfen yaşını yaz.**"
    );
  message.channel.send(
    "<:onaytiki:813053491445760000> | **Yaşın ``" + yas + "`` olarak ayarlandı!**"
  );
  db.set(`pyas_${message.author.id}`, yas);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "yaşayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};
