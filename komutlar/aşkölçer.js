

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65

const Discord = require('discord.js')
exports.run = async (client, message, args) => {
    let member = message.guild.member(message.mentions.users.array()[0] || message.guild.members.get(args[0]))
    let member2 = message.guild.member(message.mentions.users.array()[1] || message.guild.members.get(args[1]))
    var s = message.author
    if(member2) {
        var s = member2.user
    }
    if(!member) {
        const embed = new Discord.RichEmbed()
            .setDescription(`Bir Kişi Etiketlemelisin.`)
    .setAuthor('Hata')
            .setColor("ff0000")
            .setTimestamp()
        message.channel.send({embed})
        return
    }
    var anasonuc = Math.floor(Math.random() * 101)
    var kalp = ''
    var akalp = ''
    if(Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
        var c = 0
        for(var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
            kalp += '❤️'
            c++
        }
        for(var x = c; x < 10; x++) {
            akalp += `🖤`
        }
    } else {
        var kalp = '🖤'
        var akalp = '🖤🖤🖤🖤🖤🖤🖤🖤🖤'
    }
    var yorum = `Evlenecek Kadar Sevgi Var Aranızda.`
    if(anasonuc < 80) {
        var yorum = 'Biraz Daha Uğraşırsan Olacak.'
    }
    if(anasonuc < 60) {
        var yorum = 'Eh İşte Arada Trip Atıyor.'
    }
    if(anasonuc < 40) {
        var yorum = 'Az Da Olsa Bişeycikler Hissediyor Sana.'
    }
    if(anasonuc < 20) {
        var yorum = 'Maalesef Neredeyse İmkansız.'
    }
    const embed = new Discord.RichEmbed()
        .setAuthor(`${member.user.tag} Ve ${s.tag} Arasındaki Aşk Sonucu.`)
        .setDescription(`Aşk Yüzdesi: ${anasonuc}\n${kalp}${akalp}\n\n${yorum}`)
        .setColor("ff0000")
        .setTimestamp()
    message.channel.send({embed})
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['aşk-ölçer', 'ask-olcer', 'askolcer', 'ask', 'aşk'],
    permLevel: 0,
  kategori: "eğlence"
}
exports.help = {
    name: 'aşkölçer',
    description: 'İki Kullanıcı Arasındaki Aşkı Ölçer.',
    usage: 'aşkölçer [@Kullanıcı]'
}

