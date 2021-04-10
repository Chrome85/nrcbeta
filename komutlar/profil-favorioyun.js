const Discord = require("discord.js");
const db = require("croxydb");
 
exports.run = async (client, message, args) => {


  let favorioyun = args.slice(0).join(" ");
  if (!favorioyun) return message.channel.send(":x: | **Lütfen Oyununu yaz.**");
  message.channel.send("<:onaytiki:813053491445760000> | **Favori Oyunun ``" + favorioyun + "`` olarak ayarlandı!**");
  db.set(`pfavorioyun_${message.author.id}`, favorioyun);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "favorioyun",
  description: "",
  usage: "",
  kategori: "Profil"
};