

        const Discord = require('discord.js')
        const fs = require('fs');
        const ayarlar = require('../emre.js');
        let kanal = JSON.parse(fs.readFileSync("./ayarlar/gç.json", "utf8"));
         
        exports.run = async (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`**:fire: Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!**`);
         
          let channel = message.mentions.channels.first()
            if (!channel) {
                message.channel.send(`**:fire: Açamak İçin - %giriş-çıkış #kanal \n:fire: Kapatmak İçin - %giriş-çıkış-kapat Yazınız.**`)
                return
            }
            if(!kanal[message.guild.id]){
                kanal[message.guild.id] = {
           resim: channel.id
                };
            }
            fs.writeFile("./ayarlar/gç.json", JSON.stringify(kanal), (err) => {
                console.log(err)
            })
            message.channel.send(`:white_check_mark: | ** Resimli Hoşgeldin - Güle Güle kanalı ${channel} Olarak Ayarlandı.** `)
        }
           
        exports.conf = {
            enabled: true,
            guildOnly: false,
            aliases: ["gç-ayarla"],
            permLevel: 0
        }
         
        exports.help = {
            name: 'giriş-çıkış',
            description: 'Giriş Çıkış Kanalını Ayarlar.',
            usage: 'gç-ayarla <#kanal>'
        }

