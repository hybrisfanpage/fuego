const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = '%'

	const codare = new Discord.RichEmbed()
  .setColor('#ff0000')
       .setAuthor(`Fuego Komutlar`, client.user.avatarURL) 
       .setTitle(`Yetkili Komutları`)
       .setDescription(`**<:star:713069286847152249>: - Yetkili Komutları [1/4]     \n<:wrench:713066017269743767> - %otorol -> Sunucuya Giren Kullanıcıların Rolünü Otomatik Ayarlar. \n<:wrench:713066017269743767> - %ototag -> Sunucuya Giren Kullanıcılara Otomatik Tag Ayarlar. \n<:wrench:713066017269743767> - %ototagkanal -> Kullanıcılara Verilen Tagı Kanalda Belirtir. \n<:wrench:713066017269743767> - %ototagkapat -> Ototag'ı Kapatır. \n<:wrench:713066017269743767> - %sil -> Belirtilen Sayı Kadar Mesaj Silinir.  
                        \n<:star:713069286847152249> - Yetkili Komutları [2/4]     \n<:wrench:713066017269743767> - %ban -> Kullanıcıyı Sunucudan Yasaklar. \n<:wrench:713066017269743767> - %unban -> Kullanıcı Banı ID İle Kaldırır. \n<:wrench:713066017269743767> - %at -> Kullanıcıyı Sunucudan Atar. \n<:wrench:713066017269743767> - %uyarı -> Kullanıcıyı Uyarırırsınız. \n<:wrench:713066017269743767> - %yaz -> Bota Mesaj Yazdırırsınız.
                        \n<:star:713069286847152249> - Yetkili Komutları [3/4]     \n<:wrench:713066017269743767> - %güvenlik -> Reklam Yapacak Veya Zararlı Üyeleri Tespit Eder. \n<:wrench:713066017269743767> - %sayaç -> Belirlenen Kullanıcı Sayısını Sayar. \n<:wrench:713066017269743767> - %sa-as -> Sunucuda Selam Verildiğinde Cevap Verir. \n<:wrench:713066017269743767> - %giriş-çıkış -> Resimli Hoşgeldin Güle Güle Ayarlarsınız. \n<:wrench:713066017269743767> - %panel -> Toplam Üye Çevrim İçi Üye Vb Gibi Panel Kurar.      
                        \n<:star:713069286847152249> - Yetkili Komutları [4/4]     \n<:wrench:713066017269743767> - %küfürengel -> Sunucuda Küfür Edilmesini Engeller. \n<:wrench:713066017269743767> - %reklamengel -> Sunucuda Reklam Yapılmasını Engeller. \n<:wrench:713066017269743767> - %oylama -> Sunucuda Oylama Başlatır.  \n<:wrench:713066017269743767> - %hazırkurallar -> Hazır Bir Şekilde Kuralları Yazar. \n<:wrench:713066017269743767> - %isimdeğiştir -> Etiketlediğiniz Kullanıcı İsmini Değiştirirsiniz.                                        **`)
       .addField("» Linkler", ` \n[Davet Et](https://discordapp.com/oauth2/authorize?client_id=712015753989193789&scope=bot&permissions=8) `, true)
       .addField("» Linkler", ` \n[Destek Sunucu](https://discord.gg/hv8vp5w) `, true)
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
  name: 'yetkili',
  description: '[Admin Komutu]',
  usage: '%yetkili'
};