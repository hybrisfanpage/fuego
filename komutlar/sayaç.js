const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
let kanal = message.mentions.channels.first() 
let sayı = args[1]
let kalan = args[1] - message.guild.memberCount
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**:fire: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
 
 if(!kanal) return message.channel.send(`
**:fire: Sayaç Ayarlamak İçin \`%sayaç #kanal sayı\` Şeklinde Yazınız.**

`)
 
  message.channel.send(`**Sayaç Sistemi**
**:fire: Sayaç Aktif Edildi.**
**:fire:** **${args[1]}** **Olarak Güncelledim!** 
:fire: **Kayıt Kanalını** **${kanal}** **Olarak Güncelledim!** 
:fire: **${args[1]}** **Kişi Olmaya Son** :tada: **${kalan}** :tada: **Kişi Kaldı!**
`)

  
  db.set(`sayacK_${message.guild.id}`, kanal.id)  
  db.set(`sayacS_${message.guild.id}`, sayı) 
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'sayaç',
  description: 'taslak', 
  usage: 'sayaç-ayarla'
};
