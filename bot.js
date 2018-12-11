const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
client.on ("guildMemberAdd", m => {
    if (datediff(parseDate(moment(m.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 8) {
        m.ban().then((member) => {
    const channel = message.guild.channels.find('name', 'admins-log')
    message.channel.send(`@${m.username}`)

    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    };
   
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
    };
});
client.login(process.env.BOT_TOKEN);
