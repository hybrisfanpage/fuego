const Discord = require('discord.js');

exports.run = async(client, message) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`); 

    const rules = new Discord.RichEmbed()
    
      .setColor('ff0000')
      .addField(`Kurallar`, [`
      
     ** - :fire: Küfür, argo ve reklam kesinlikle **yasaktır**!
      - :fire: Spam ve flood **yasaktır**!
      - :fire: Din, ırk ve siyaset konuşmak **yasaktır**!
      - :fire: Herkes birbirine saygılı olmalıdır!
      - :fire: Herkesin görüşü kendinedir bu yüzden tartışmak **yasaktır**!
      - :fire: Üstünlük göstermek/taslamak **yasaktır**!
      - :fire: Caps ve emoji kullanımı **yasaktır**! (Aşırı Olmadıkça)
      - :fire: Oynuyor kısmına reklam, küfür koymak **yasaktır**!
      - :fire: Yetkililere karşı gelmek **yasaktır**!
      - :fire: Bot basmak/j4j yapmak **yasaktır**!
      - :fire: Rahatsızlık vermek **yasaktır**! \n\n
      - :fire: SUNUCUYA GİRDİĞİNİZ ANDA OKUMUŞ SAYILACAKSINIZ!

      **`])

       message.delete();
      //message.react("🔴");

    return message.channel.send(rules).then(keleS => keleS.react("🔴"));

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rules'],
    permLevel: 0
}

exports.help = {
    name : 'hazırkurallar',
    description: 'Hazır kuralları kanalınıza atar.',
    usage: '<prefix>kurallar/rules'
}