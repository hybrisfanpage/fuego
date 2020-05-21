const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = '%'

	const codare = new Discord.RichEmbed()
  .setColor('#ff0000')
       .setAuthor(`Fuego Komutlar`, client.user.avatarURL) 
       .setTitle(`Genel Komutlar`)
       .setDescription(`**<:star:713069286847152249> - Müzik Komutları [1/1] \n<:loud_sound:713066628987748543> - %çal -> Müzik Açmanızı Sağlar. \n<:loud_sound:713066628987748543> - %döngü -> Şarkıyı Tekrar Tekrar Çalmanızı Sağlar. \n<:loud_sound:713066628987748543> - %durdur -> Şarkıyı Durdurursunuz. \n<:loud_sound:713066628987748543> - %devam -> Şarkıya Devam Edersiniz. \n<:loud_sound:713066628987748543> - %geç -> Bir Sonraki Şarkıya Geçersiniz. \n<:loud_sound:713066628987748543> - %liste -> Şarkı Listesini Gösterir. \n<:loud_sound:713066628987748543> - %şarkıismi -> Çalan Şarkının İsmini Söyler. \n<:loud_sound:713066628987748543> - %kapat -> Şarkıyı Kapatır.                                                        **`)
       .setFooter(`Fuego Bot`, client.user.avatarURL) 
  return message.channel.send(codare)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'müzik',
  description: '[Admin Komutu]',
  usage: '%yetkili'
};