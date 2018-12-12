const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
client.on ("guildMemberAdd", member => {
  member.guild.fetchInvites().then(guildInvites => {
    if (datediff(parseDate(moment(member.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 8) {
          member.ban()
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("name", "fake-invites");
     stewart.send(`<@${member.user.id}> banned as fake invite <@${inviter.id}>`);
   //  stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  });
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
