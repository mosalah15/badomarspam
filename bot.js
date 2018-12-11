const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
client.on ("guildMemberAdd", m => {
    if (datediff(parseDate(moment(m.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 8) {
        m.ban();
          let log = guild.channels.find('name', 'admins-log');
          if (!log) return;
        client.fetchUser(m.id).then(m => {
          let embed = new Discord.RichEmbed()
        .setAuthor(exec)
        .setThumbnail(m.avatarURL)
        .addField('- Banned User:',`**${m.username}**`,true)
        .addField('- Banned By:',`**${exec}**`,true)
        .setFooter(m.username,m.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
  }, 1000);
    };
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    };
   
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
    };
});
client.login(process.env.BOT_TOKEN);
