const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`{ $Help } By !Bako Gaming_#1033 `,'https://www.twitch.tv/');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Bako') {
    msg.reply('!هلا ماذا تريد منى انا مشغول');
  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Bako channel') {
    msg.reply('https://www.youtube.com/channel/UCfo8zSHiyVA0BbiIiiE-2uw/featured?view_as=subscriber!');
  }
});

client.on('message', msg => {
  if (msg.content === 'برحتك يا Bako') {
    msg.reply('لا تسالنى على حاجة من فاضلك انا مشغول!');
  }
});

client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == '$bc') {
         message.react("✔️")
          let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('تم الارسال بواسطة :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**● Sender  :**', `*** → ${message.author.username}#${message.author.discriminator}***`)
            .addField('***● Server  :***', `*** → ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField('ّ', args)
            m.send(``,{embed: bc});
        });
    }
})

client.on('message', message => {
            if (message.content.startsWith("قوانين")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **1** ' ,' **ممنوع السب** ')
.addField('     **2** ' ,' **لا تسوي سبام ** ')
.addField('     **3** ' ,' **لا تزعج الاخرين** ')
.addField('    **4**' ,' **ممنوع الاعلانات** ')
.addField('    **5**' ,' **احترم الاخرين** ')
.addField('    **6**' ,' **لا تنشر في الشات او بل خاص** ')
.addField('    **7**' ,' **لا تنشر روابط!** ')
.addField('    **8**' ,' **لا تسوي سبام ايموجي** ')
.addField('    **9**' ,' **لا تطلب رتبه الاداره !** ')
.addField('    **10**' ,' **لا تزعج الاداره !** ')
.addField('    **11**' ,' **@everyone @here** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

client.login('NDg4ODgyNjQwOTM4NzI5NTEz.DoNZbA.65-XHxIqTccP1FV4f2RKcGNFpA0')