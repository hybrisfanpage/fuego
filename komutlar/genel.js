const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = '%'

	const codare = new Discord.RichEmbed()
  .setColor('#ff0000')
       .setAuthor(`Fuego Komutlar`, client.user.avatarURL) 
       .setTitle(`Genel Komutlar`)
       .setDescription(`**<:star:713069286847152249> - Genel Komutlar [1/2] \n<:circus_tent:713111025150328832> - %sunucubilgi -> Sunucu Hakkında Geniş Çaplı Bilgi Verir. \n<:circus_tent:713111025150328832> - %avatar -> Kendi Veya Başka Bir Kullanıcnın Avatarını Görürsünüz. \n<:circus_tent:713111025150328832> - %kullanıcıbilgi -> Kendinizin Veya Bir Kullanıcının Bilgilerini Görürsünüz. \n<:star:713069286847152249> - Genel Komutlar [2/2] \n<:circus_tent:713111025150328832> - %sunucudavet -> Sunucunun Davet Linkini Atar. \n<:circus_tent:713111025150328832> - %havadurumu -> Belirlediğiniz İl'lerin Havadurumunu Gösterir. \n<:circus_tent:713111025150328832> - %alkışla -> Yazdığınız Cümleyi Alkışlar İçinde Bota Yazdırırsınız. \n<:circus_tent:713111025150328832> - %spotify -> Etkiteklediğiniz Kişinin Güncel Ve Son Dinlediği Spotify Şarkısını Paylaşır.                                                      **`)
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
  name: 'genel',
  description: '[Admin Komutu]',
  usage: '%yetkili'
};