

const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, params, args) => {
     if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**:fire: Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!**')
     let otoTagkanal = message.mentions.channels.first();
     if (!otoTagkanal) return message.channel.send('**:fire: Otomatik Tag Sisteminde Tagları Görmek İçin Bir Kanal Etiketlemeniz Gerekli. `%ototagkanal #kanal`**')
     db.set(`ototagKanal_${message.guild.id}`, message.mentions.channels.first().id)
     let i = await db.fetch(`ototagKanal_${message.guild.id}`)
            	  	  const embed = new Discord.RichEmbed()
  .setDescription(`**:fire: Tagları Görmek İçin Bir Kanalı Başarıyla Ayarladınız Kanal <#${i}> Olarak Ayarlandı!` + "\n\n **Kapatmak için `%ototagkapat` Yazabilirsiniz!")
    .setColor("#ff0000")
    .setTimestamp();
  message.channel.send({ embed });
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'ototagkanal',
 description: 'neblm',
 usage: 'ototagkanal'
};

