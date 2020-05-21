const Discord = require('discord.js')
const data = require('quick.db')

exports.run = async (client, message, args) => {
let prefix = ''// botun prefixi

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`Yetkin yok.`)
if(!args[0]) return message.channel.send(`**:fire: Uyarı Sistemini Kullanmak için, \n:fire: Uyarı Yapmak İçin \`%uyarı at @kullanıcı Neden\` (Neden İsteğe Bağlı) \n:fire: Uyarı Silmek İçin \`%uyarı sil @kullanıcı sayı\` \n:fire: Kullanıcının Uyarı Sayısını Görmek İçin \`%uyarı bilgi @kullanıcı\`**`)


if(args[0] === 'at') {
let kullanıcı = message.mentions.users.first()
if(!args[1]) return message.channel.send(`**:fire: Bir kişiyi etiketlemelisin.**`)
if(!kullanıcı) return message.channel.send(`**:fire: ${args[1]}, kullanıcısını sunucuda bulamıyorum.**`)
if(kullanıcı.bot) return message.channel.send(`**:fire: Botları uyaramam.**`)
if(kullanıcı.id === message.author.id) return message.channel.send(`**:fire: :smile: Kendini uyaramazsın.**`)
let reason = args.slice(2).join(' ')

data.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, +1)
const syı = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

if(!reason) {
await message.channel.send(`**:fire: ${kullanıcı}, uyarıldı!\n:fire: Toplam uyarı sayısı: ${syı}**`)
await kullanıcı.send(`**:fire: ${kullanıcı}, Merhaba! ${message.guild.name} Sunucusunda \`Sebepsiz\` Bir Şekilde Uyarıldın. Dikkatli Ol!**`) 
return}

if(reason) {
await message.channel.send(`**:fire: ${kullanıcı}, uyarıldı!\n:fire: Toplam uyarı sayısı: ${syı}**`)
await kullanıcı.send(`**:fire: ${kullanıcı}, Merhaba! ${message.guild.name} Sunucusunda \`${reason}\` Sebebiyle Uyarıldın. Dikkatli Ol!**`) 
return} }

if(args[0] === 'sil') {
let kullanıcı = message.mentions.users.first()
if(!args[1]) return message.channel.send(`**:fire: Bir kişiyi etiketlemelisin.**`)
if(!kullanıcı) return message.channel.send(`**:fire: ${args[1]}, kullanıcısını sunucuda bulamıyorum.**`)
if(kullanıcı.bot) return message.channel.send(`**:fire: Botları Uyaramadığım İçin Silemem.**`)
if(kullanıcı.id === message.author.id) return message.channel.send(`**:fire: :smile: Kendini Uyaramadığım İçin Silemem.**`)

let sayı = args[2]
if(!sayı) return message.channel.send(`**:fire: Silinecek uyarı sayısını yazmadın!**`)
if(isNaN(sayı)) return message.channel.send(`**:fire: Silinecek uyarı sayısını yazmadın!**`)
if(sayı === '0') return message.channel.send(`**:fire: Beni mi kandırmaya çalışıyorsun sen?**`)
const syı2 = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
if(syı2 < sayı) return message.channel.send(`**:fire: ${kullanıcı}, kullanıcısının uyarı sayısı: ${syı2}!**`)

data.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, -sayı)
const syı = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
await message.channel.send(`**:fire: ${kullanıcı}, Uyarısı silindi!\n:fire: Toplam uyarı sayısı: ${syı ? syı : '0'}**`)
await kullanıcı.send(`**:fire: ${kullanıcı}, Merhaba! ${message.guild.name} Sunucusunda Uyarın silindi. Daha Dikkatli Ol!**`) }

if(args[0] === 'bilgi') {
let kullanıcı = message.mentions.users.first()
if(!args[1]) return message.channel.send(`**:fire: Bir kişiyi etiketlemelisin.**`)
if(!kullanıcı) return message.channel.send(`**:fire: ${args[1]}, Kullanıcısını sunucuda bulamıyorum.**`)
if(kullanıcı.bot) return message.channel.send(`**:fire: Botları Uyaramadığım İçin Bakamam.**`)
if(kullanıcı.id === message.author.id) return message.channel.send(`**:fire: :smile: Kendinizin Uyarı Atamadığınız İçin Bakamassınız.**`)

const syı2 = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
if(!syı2) return message.channel.send(`**:fire: ${kullanıcı}, Kullanıcısının hiç uyarısı yok.**`)
await message.channel.send(`**:fire: ${kullanıcı}:\nToplam uyarı sayısı: ${syı2 ? syı2 : '0'}**`) }
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['warn'],
permLevel: 0,
}

exports.help = {
name: 'uyarı'
}