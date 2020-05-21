const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = '%'

	const codare = new Discord.RichEmbed()
  .setColor('#ff0000')
       .setAuthor(`Fuego Bilgi`, client.user.avatarURL) 
       .setTitle(`Bot Bilgi`)
       .setDescription(`**Botun Yapımında Destek Olan Arkadaşım Kaan'G#2247'a Teşekkür Ederim Onun Botu Olan Svart Ve Fuego Davet Ve Sunucu Linkeri**`)
        .addField("<a:BOT:712802557809918026> Botlar", ` \n[Fuego Bot](https://discordapp.com/oauth2/authorize?client_id=712015753989193789&scope=bot&permissions=8)\n[Svart Bot](https://discord.com/oauth2/authorize?client_id=700318752780189737&scope=bot&permissions=8)  `, true)
        .addField("<a:BOT:712802557809918026> Destek Sunucuları", ` \n[Fuego Destek Sunucu](https://discord.gg/hv8vp5w)\n[Svart Destek Sunucu](https://discord.gg/rPS9jJh) `, true)
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
  name: 'bilgi',
  description: '[Admin Komutu]',
  usage: '%yetkili'
};