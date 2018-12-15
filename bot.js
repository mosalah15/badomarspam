const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const invites = {};
const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(100000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
client.on('message', async (message) => {
    var prefix = '1';
    var fetchedPrefix = await db.fetch(`serverPrefix_${message.guild.id}`);
    if (fetchedPrefix === null || typeof fetchedPrefix === 'undefined') fetchedPrefix = prefix;
    else prefix = fetchedPrefix;

    if (message.author.bot) return undefined;
    if (!message.content.startsWith(prefix)) return undefined;
    var args = message.content.slice(prefix.length).trim().split(' ');
    var command = args.shift().toLowerCase();
    try {
        if (command === 'echo') command = 'say';
        if (command === 'clear') command = 'purge';
        if (command === 'yt') command = 'youtube';
        let commands = require(`./commands/${command}.js`);
        commands.run(client, message, args);
    } catch (err) {
        throw err;
    }          
client.on('guildMemberAdd', member => { //LAST CODES -HONRAR-
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
      if (datediff(parseDate(moment(member.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < prefix  ) {
          member.ban()
const logChannel = member.guild.channels.find(channel => channel.name === "fake-invites");
    logChannel.send(`${member} has been banned as a fake account ***Invited by: <@${inviter.id}>***`)
    }
})
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    };
   
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
};
})
}
    });
client.login(process.env.BOT_TOKEN); 
