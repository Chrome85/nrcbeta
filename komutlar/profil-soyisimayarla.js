const Discord = require("discord.js");
const db = require("croxydb");
 
exports.run = async (client, message, args) => {
  let soyisim = args.slice(0).join(" ");
  if (!soyisim) return message.channel.send(" :x: | **Lütfen Soyismini yaz.**");
  message.channel.send("<:onaytiki:813053491445760000> | **Soy İsmin ``" + soyisim + "`` olarak ayarlandı!**");
  db.set(`psoyisim_${message.author.id}`, soyisim);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "soyisimayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};