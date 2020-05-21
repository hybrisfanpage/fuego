const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**:fire: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
if(args[0] === 'aç') {
    db.set(`${message.guild.id}.kufur`, true)
    message.channel.send('**:fire: Küfür Engel Sistemini Açtın Artık Sunucuda Küfür Edilmeyecek**')
  return
}
if (args[0] === 'kapat') {
  db.delete(`${message.guild.id}.kufur`)
message.channel.send('**:fire: Küfür Engel Sistemini Kapattın Artık Sunucuda Küfür Serbest**')
return
}
  message.channel.send('**:fire: Küfür Engeli Açmak İçin \`%küfürengel aç\` Yazınız \n :fire: Küfür Engeli Kapatmak İçin \`%küfürengel aç\` Yazınız**')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür'],
 permLevel: 0
};

exports.help = {
 name: 'küfürengel',
 description: 'Davet Log Kanalını Belirler',
 usage: 'davet-kanal-ayarla #kanal'
};