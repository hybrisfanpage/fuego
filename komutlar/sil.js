const Discord = require('discord.js');
exports.run = async(client, message, args) => {
let frenzy_code_sayı = args[0]  
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**:fire: Yetersiz Yetkiye Sahipsin**");
if(isNaN(frenzy_code_sayı)) return message.channel.send("**:fire: Mesaj Silmek İçin Bir Sayı Belirtiniz.**");
if(!frenzy_code_sayı) return message.channel.send("**Kaç mesaj silmem gerek söyle.**");
message.channel.bulkDelete(frenzy_code_sayı).catch(console.error)
  message.channel.send(`**:fire: ${frenzy_code_sayı} Adet Mesaj Sildim.!**`).then(fc => fc.delete(7000));
}
exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 0
};
exports.help = {
  name: 'sil',
  description: 'mesaj siiler',
  usage: 'sil 100'
};