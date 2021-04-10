const Discord = require("discord.js");
const db = require("croxydb");
 
exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || message.author;
  if (user.bot) return message.channel.send("Botların profili olmaz!");
 
  let isim = await db.fetch(`pisim_${user.id}`);
  let isimYazi;
  if (isim == null) isimYazi = ":x: `İsim ayarlanmamış!`";
  else isimYazi = `<:yesilok:810118122727669800>  \`${isim}\``;
  
  let favorioyun = db.fetch(`pfavorioyun_${message.author.id}`);
  let favoriYazi;
  if (favorioyun == null) favoriYazi = ":x: `Oyun ayarlanmamış!`";
  else favoriYazi = `<:yesilok:810118122727669800> \`${favorioyun}\``;
  
    let favorişarkı = db.fetch(`pfavorişarkı_${message.author.id}`);
  let favorisYazi;
  if (favorişarkı == null) favorisYazi = ":x: `Şarkı ayarlanmamış!`";
  else favorisYazi = `<:yesilok:810118122727669800> \`${favorişarkı}\``;
 
  let soyisim = await db.fetch(`psoyisim_${user.id}`);
  let soyisimYazi;
  if (soyisim == null) soyisimYazi = ":x:`Soy İsim ayarlanmamış!`";
  else soyisimYazi = `<:yesilok:810118122727669800> \`${soyisim}\``;
 
  let cinsiyet = await db.fetch(`pcinsiyet_${user.id}`);
  let csYazi;
  if (cinsiyet == null) csYazi = ":x: `Cinsiyet ayarlanmamış!`";
  if (cinsiyet == "kız") csYazi = "<:yesilok:810118122727669800> `Kız`";
  if (cinsiyet == "erkek") csYazi = "<:yesilok:810118122727669800> `Erkek`";
  if (cinsiyet == "yok") csYazi = "<:yesilok:810118122727669800> `Belirtmek istemiyor.`";
 
  let yas = await db.fetch(`pyas_${user.id}`);
  let yasYazi;
  if (yas == null) yasYazi = ":x:`Yaş ayarlanmamış!`";
  else yasYazi = `<:yesilok:810118122727669800>\`${yas}\``;
 
  let bayrak = await db.fetch(`pbayrak_${user.id}`);
  let bYazi;
  if (bayrak == null) bYazi = ":x: `Bayrak Girilmemiş.`";
  else bYazi = `<:yesilok:810118122727669800> \`${bayrak}\``;
 
  const embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username} Adlı Kullanıcının Profili`, user.displayAvatarURL({dynamic : true}))
  .setThumbnail(user.displayAvatarURL({dynamic : true}))
.setImage(user.displayAvatarURL({dynamic : true}))
  .setColor('#f6ff00')
    .addField("『 İsim 』", isimYazi)
    .addField("『 Soy isim 』", soyisimYazi)
    .addField("『 Yaş 』", yasYazi)
    .addField("『 Cinsiyet 』", csYazi)
    .addField("『 Bayrak! 』", bYazi)
    .addField("『 Favori Oyun 』", favoriYazi)
    .addField("『 Favori Şarkı 』", favorisYazi)
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "profilim",
  description: "",
  usage: "",
  kategori: "Profil"
};