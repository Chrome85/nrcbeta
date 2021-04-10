const Discord = require("discord.js");
const db = require("croxydb");
 
exports.run = async (client, message, args) => {

  let cinsiyet = args.slice(0).join(" ");
  if (!cinsiyet)
    return message.channel.send(
      ":x: | Lütfen Cinsiyetini yaz. Unutma Sadece erkek,kız veya yok yazabilirsin (**Baş Harflerini BÜYÜK YAZMA**)"
    );
  message.channel.send("<:onaytiki:813053491445760000> | **Cinsiyetin Başarıyla ``" + cinsiyet + "`` olarak ayarlandı!**");
  db.set(`pcinsiyet_${message.author.id}`, cinsiyet);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori:"Profil"
};
 
exports.help = {
  name: "cinsiyetayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};