const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, message, args) => {

  const db = require('quick.db');
  

  
  if (!message.guild.members.get(client.user.id).hasPermission("KICK_MEMBERS")) return message.reply('**:fire: Gerekli izniniz bulunmuyor**')
  //if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`);
  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  if (message.mentions.users.size < 1) return message.reply('**:fire: Lütfen Atmak İstediğiniz Kullanıcıyı Etiketleyin Ve Neden Yazınız**');
  if (reason.length < 1) return message.reply('**:fire: Atma Sebebinizi Giriniz**');
  if (user.id === message.author.id) return message.reply('**:fire: :smile: Kendini Atacağına Kendin Çık?**');
  /*if (user.highestRole.calculatedPosition > message.member.highestRole.calculatedPosition - 1) {
			return message.reply(`Bu kişinin senin rollerinden/rolünden daha yüksek rolleri/rolü var.`);
		}*/
  //if (!message.guild.member(user).kickable) return message.channel.send(`Bu kişiyi sunucudan atamıyorum çünkü \`benden daha yüksek bir role sahip\` ya da \`bana gerekli yetkileri vermedin\`.`);
    
  message.guild.member(user).kick();
  
  const embed2 = new Discord.RichEmbed()
  .setColor("ff0000")
  .setDescription(`Üye başarıyla kicklendi`)
  message.channel.send(embed2)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kick'],
  permLevel: 2,
    kategori: "moderasyon",
 
};

exports.help = {
  name: 'at',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'at <@kullanıcı> <sebep>',
 
};