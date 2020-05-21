const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client ,message, args) =>{
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**:fire: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  
    return message.channel.send('**:fire: Reklam Engel Sistemi Başarı İle Açıldı.**')

    if (args[0] == 'aç') {
        var durum = await db.fetch(`reklam_${message.guild.id}`)            
        if (durum == "acik") return message.channel.send("**:fire: Daha Önceden Zaten Açmışsın :smile:**");
        db.set(`reklam_${message.guild.id}`, 'acik')
        message.channel.send(`**:fire: Reklam Engel Sistemini Açtın Artık Sunucuda Reklam Yapılmayacak**`)
    }

    if (args[0] == 'kapat') {
        var durum = await db.fetch(`reklam_${message.guild.id}`)            
        if (durum == "kapali") return message.channel.send("**:fire: Daha Önceden Zaten Kapatmışsın :smile:**");
        db.set(`reklam_${message.guild.id}`, 'kapali')
        message.channel.send(`**:fire: Reklam Engel Sistemi Kapalı Artık Sunucuda Reklam Yapmak Serbest**`)
    }

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 3
};
exports.help = {
  name: 'reklamengel',
  description: '',
  usage: 'reklam-engel'
};
