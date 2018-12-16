const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
 client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
  if (!args.join(' ')) return message.channel.send('Please provide a prefix to set server prefix.');
  var lesstime = (args.slice(1, args.length).join(" "))
client.on ("guildRoleUpdate", (member, guild)=> {
  message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: MEMBER_Role_Update
      })
        .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
          client.fetchUser(member.id).then(myUser => {
      if (datediff(parseDate(moment(myUser.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 8) {
          myUser.ban()
};
});
});
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    };
   
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
};
});
});
}
});
client.login(process.env.BOT_TOKEN); 
