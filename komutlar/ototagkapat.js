

const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args, member) => {
     if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**:fire: Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!**') 
     if (message.channel.type === "dm") return;
     if (message.author.bot) return;
  let otorol= db.fetch(`ototag_${message.guild.id}`)
  
  if(!otorol) {
      message.channel.send(`**:fire: Bu sunucuda ototag ayarlanmamış.**`)
      return
    } 
    db.delete(`ototag_${message.guild.id}`)
    db.delete(`ototagKanal_${message.guild.id}`)
		  	  const embed = new Discord.RichEmbed()
  .setDescription(`**:fire: Ototag Sistemi Başarıyla Kapatıldı. Tag Sıfırlandı.**` )
    .setColor("#ff0000")
    .setTimestamp();
  message.channel.send({ embed });
}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ototag kapat'],
  permLevel: 0
};

exports.help = {
  name: 'ototagkapat',
  description: 'nblm',
  usage: 'ototag'
};

