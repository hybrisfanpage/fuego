

        const Discord = require('discord.js');
        const ayarlar = require('../emre.js');
        const db = require('quick.db');
        const moment = require('moment');
         
        exports.run = async (client, message, params) => {  
         
            var konum = 'Konumlar'
                if(message.guild.region === "russia") {
                    var konum = '<:flag_ru: 712699314580750416> Rusya'
                }
                if(message.guild.region === "us-west") {
                    var konum = '<:flag_us:712697732552196127> Batı Amerika'
                }
                if(message.guild.region === "us-south") {
                    var konum = '<:flag_us:712697732552196127> Güney Amerika'
                }
                if(message.guild.region === "us-east") {
                    var konum = '<:flag_us:712697732552196127> Doğu Amerika'
                }
                if(message.guild.region === "us-central") {
                    var konum = '<:flag_us:712697732552196127> Amerika'
                }
                if(message.guild.region === "brazil") {
                    var konum = '<:flag_br:712699099128004688> Brezilya'
                }
                if(message.guild.region === "singapore") {
                    var konum = '<:flag_sg: 712698784525844611> Singapur'
                }
                if(message.guild.region === "sydney") {
                    var konum = '<:flag_au:712698648475205654> Sidney'
                }
                if(message.guild.region === "eu-west") {
                    var konum = '<:flag_eu:712697883773632512> Batı Avrupa'
                }
                if(message.guild.region === "eu-south") {
                    var konum = '<:flag_eu:712697883773632512> Güney Avrupa'
                }
                if(message.guild.region === "eu-east") {
                    var konum = '<:flag_eu:712697883773632512> Doğu Avrupa'
                }
                if(message.guild.region === "eu-central") {
                    var konum = '<:flag_eu:712697883773632512> Orta Avrupa'
                }
                if(message.guild.region === "hongkong") {
                    var konum = '<:flag_hk:712695866665730089> Hong Kong'
                }
                if(message.guild.region === "japan") {
                    var konum = '<:flag_jp:712695697086087299> Japonya'
                }
                if(message.guild.region === "europe") {
                    var konum = '<:flag_eu:712694031716712450> Avrupa'
                }
          
         
          var tarih = 'Tarihler'
                if(moment(message.guild.createdAt).format('MM') === '01') {
                    var tarih = `${moment(message.guild.createdAt).format('DD')}/01/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
                }
                if(moment(message.guild.createdAt).format('MM') === '02') {
                    var tarih = `${moment(message.guild.createdAt).format('DD')}/02/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
                }
                if(moment(message.guild.createdAt).format('MM') === '03') {
                    var tarih = `${moment(message.guild.createdAt).format('DD')}/03/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
                }
                if(moment(message.guild.createdAt).format('MM') === '04') {
                    var tarih = `${moment(message.guild.createdAt).format('DD')}/04/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
                }
                if(moment(message.guild.createdAt).format('MM') === '05') {
                    var tarih = `${moment(message.guild.createdAt).format('DD')}/05/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
                }
                if(moment(message.guild.createdAt).format('MM') === '06') {
                    var tarih = `${moment(message.guild.createdAt).format('DD')}/06/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
                }
                if(moment(message.guild.createdAt).format('MM') === '07') {
                    var tarih = `${moment(message.guild.createdAt).format('DD')}/07/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
                }
                if(moment(message.guild.createdAt).format('MM') === '08') {
                    var tarih = `${moment(message.guild.createdAt).format('DD')}/08/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
                }
                if(moment(message.guild.createdAt).format('MM') === '09') {
                    var tarih = `${moment(message.guild.createdAt).format('DD')}/09/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
                }
                if(moment(message.guild.createdAt).format('MM') === '10') {
                    var tarih = `${moment(message.guild.createdAt).format('DD')}/10/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
                }
                if(moment(message.guild.createdAt).format('MM') === '11') {
                    var tarih = `${moment(message.guild.createdAt).format('DD')}/11/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
                }
                if(moment(message.guild.createdAt).format('MM') === '12') {
                    var tarih = `${moment(message.guild.createdAt).format('DD')}/12/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
                }  
         
          const sunucubilgi = new Discord.RichEmbed()
          .setAuthor(`Sunucu Bilgisi`, message.guild.iconURL )
          .setColor("ff0000")
          .addField(`**-> Kullanıcılar [${message.guild.memberCount}]**`, `**<a:7277_green_flame:712675842391539722> ${message.guild.members.filter(m => m.user.presence.status === "online").size} Aktif \n<a:2371_yellow_flame:712675841590558793> ${message.guild.members.filter(m => m.user.presence.status === "idle").size} Boşta \n<a:5203_pink_flame:712675842333081641>  ${message.guild.members.filter(m => m.user.presence.status === "dnd").size} Rahatsız Etmeyin \n<a:4832_white_flame:712675841682702370> ${message.guild.members.filter(m => m.user.presence.status === "offline").size} Çevrim Dışı \n<a:BOT:712802557809918026>   ${message.guild.members.filter(m => m.user.bot).size} Bot**`, true)
          .addField(`**-> Kanallar**`, `**<:speech_balloon:712689614892040273> ${message.guild.channels.filter(c => c.type === "text").size} \n<:loud_sound:712689568838582704> ${message.guild.channels.filter(c => c.type === "voice").size}**`, true)
          .addField(`**-> Sunucu Kurucusu**`,`**<:crown:712694975011487795> ${message.guild.owner}**`, true)
          .addField(`**-> Rol Sayısı**`, `**<:gear:712695416583618610> ${message.guild.roles.size}**`, true)
          .addField(`**-> Doğrulama Seviyesi**`, `<:shield:712693613485883413> **${message.guild.verificationLevel}**`, true)
         
          .addField(`**-> Sunucu Bölgesi**`, `**${konum}**`, true)
          .addField(`**-> Oluşturulma Tarihi**`, `**${tarih}**`, true)
          .addField(`**-> Sunucu İD**`,`**${message.guild.id}**` ,true)
          .addField(`**-> Sunucu İsmi**`,`**<:heart:712694237036281856> ${message.guild.name}**` ,true)
         
           .addField('**-> Roller:**', `**${message.guild.roles.map(role => role.name).join(', ')}**`, false)
           .setFooter(`Fuego Bot`, client.user.avatarURL) 
          return message.channel.sendEmbed(sunucubilgi);
        };
         
        exports.conf = {
          enabled: true,
          guildOnly: false,
          aliases: ["sunucubilgisi","sb"],
          permLevel: 0
        };
         
        exports.help = {
          name: 'sunucubilgi',
          description: 'Sunucunun bilgilerini gönderir.',
          usage: 'sunucubilgi'
        };

