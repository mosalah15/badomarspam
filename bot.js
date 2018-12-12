const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const invites = {};
client.on('guildMemberAdd', member => { 
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const inviter = client.users.get(invites.inviter.username);
      if (datediff(parseDate(moment(member.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 8) {
          member.ban()

    const stewart = member.guild.channels.find("name", "fake-invites");
     stewart.send(`<@${member.user.id}> banned and invited by <@${inviter.id}>`);
  };
});
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    };
   
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
};
    });
client.login(process.env.BOT_TOKEN);
