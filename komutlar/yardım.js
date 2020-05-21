const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = '%'

	const codare = new Discord.RichEmbed()
  .setColor('#ff0000')
       .setAuthor(`Fuego Yardım`, client.user.avatarURL) 
       .setTitle(`Komutlar`)
       .setDescription(`**<:mega:713102528665092166> DUYURU : Bot Hakkında Duyuru Olduğu Zaman Buraya Yazılır**`)
       .addField("<:circus_tent:713062830097694751> **%genel** ", ` \n **Genel Komutları** \n **Görürsünüz.** ` , true) 
       .addField("<:partying_face:713064777353658401> **%eğlence**  ", ` \n **Eğlence Komutlarını** \n **Görürsünüz.** ` , true) 
       .addField("<:wrench:713066017269743767> **%yetkili**  ", ` \n **Yetkili Komutlarını** \n **Görürsünüz.** ` , true) 
       .addField("<:loud_sound:713066628987748543> **%müzik**  ", ` \n **Müzik Komutlarını** \n **Görürsünüz.**` , true) 
       .addField("<:scroll:713068027343667272> **%bilgi**  ", ` \n **Botumuz Hakkındaki** \n **Bilgileri Görürsünüz.**` , true)  
       .addField("<:syringe:713067733905834006> **%korona**  ", ` \n **Korona Hakkında** \n **Bilgi Alırsınız.**` , true)
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
  name: 'yardım',
  description: '[Admin Komutu]',
  usage: '%yetkili'
};