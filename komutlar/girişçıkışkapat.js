

        const Discord = require('discord.js')
        const fs = require('fs')
        const ayarlar = require("../emre.js")
        exports.run = async (client, message, args) => {
         
           if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`**:fire: Bu komutu kullanabilmek için **Sunucuyu Yönet** iznine sahip olmalısın!**`);
            let prefix = ayarlar.prefix
         
                let kanal = JSON.parse(fs.readFileSync("./ayarlar/gç.json", "utf8"));
                let kapat = JSON.parse(fs.readFileSync("./ayarlar/gç.json", "utf8"));
                        if(!kanal[message.guild.id]) {
         
                                const embed = new Discord.RichEmbed()
                                        .setDescription(`Giriş çıkışı Ayarlamadığın İçin Sıfırlayamazsın!`)
                                        .setColor("#ff0000")
                                        .setTimestamp('**:fire: Ayarlamak İçin %giriş-çıkış-ayarla #kanal**')
                                message.channel.send({embed})
                                return
                        }
         
                        delete kanal[message.guild.id]
                        fs.writeFile("./ayarlar/gç.json", JSON.stringify(kanal), (err) => {
                                console.log(err)
                        })
                        const embed = new Discord.RichEmbed()
                                .setDescription(`**:fire: Giriş Çıkış Başarıyla Kapatıldı.**`)
                                .setColor("#ff0000")
                                .setTimestamp()
                        message.channel.send({embed})
                        return
                }
         
         
        exports.conf = {
          enabled: true,
          guildOnly: false,
          aliases: [],
          permLevel: 0
        };
        //CodAre
        exports.help = {
          name: 'giriş-çıkış-kapat',
          description: 'Giriş çıkışı kapatır',
          usage: 'giriş-çıkış-kapat'
          };

