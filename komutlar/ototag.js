const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args, member) => {
     if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**:fire: Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!**') 
     let mesaj = args.join(' ');
     if (!mesaj) return message.channel.send("**:fire: Ototag Sistemini Aktif Etmek İçin `%ototag 🔱|`Yazınız**"); 
     if (message.channel.type === "dm") return;
     if (message.author.bot) return;
      await db.set(`ototag_${message.guild.id}`, mesaj)
	  	  const embed = new Discord.RichEmbed()
  .setDescription(`:fire: Ototag Sistemi Başarıyla Aktif Tagınız \`${mesaj}\` Olarak Ayarlandı!` + "\n\n Kapatmak için **`%ototagkapat`** Yazabilirsiniz!")
    .setColor("#ff0000")
    .setTimestamp();
  message.channel.send({ embed });
}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ototag',
  description: 'nblm',
  usage: 'ototag'
};