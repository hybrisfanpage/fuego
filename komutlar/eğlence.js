const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = '%'

	const codare = new Discord.RichEmbed()
  .setColor('#ff0000')
       .setAuthor(`Fuego Komutlar`, client.user.avatarURL) 
       .setTitle(`Genel Komutlar`)
         .setDescription(`**<:star:713069286847152249> - Eğlence Komutları [1/2] \n<:circus_tent:713111025150328832> - %tokat -> Etiketledğiniz Kullanıcıyı Tokatlarsınız. \n<:circus_tent:713111025150328832> - %aşkölçer -> Etiketlediğiniz Kullanıcıyla Aranızdaki Aşkı Ölçer. \n<:circus_tent:713111025150328832> - %slot -> Slot Oyununu Oynarsınız. \n<:star:713069286847152249> - Eğlence Komutları [2/2] \n<:circus_tent:713111025150328832> - %bilekgüreşi -> Bir Kişiyle Bilek Güreşi Yaparsınız. \n<:circus_tent:713111025150328832> - %uzaysavaşı -> Bir Kişiyle Uzay Savaşı Yaparsınız. \n<:circus_tent:713111025150328832> - %balıktut -> Balık Tutarsınız.                                              **`)
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
  name: 'eğlence',
  description: '[Admin Komutu]',
  usage: '%yetkili'
};