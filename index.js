const Discord = require('discord.js');
const client = new Discord.Client({ fetchAllMembers: true });
const cors = require('cors');
const express = require('express');
const config = require('./config.json');
const app = express();

let port = process.env.PORT || 3000;
app.use(cors());

app.listen(port, () => {
    console.log('[API] - Connected!')
});

app.get('/', async function (req, res) {
    let online_members = client.guilds.cache.get(config.guild_id).members.cache.filter(m => m.presence.status === 'online' || m.presence.status === 'idle' || m.presence.status === 'dnd').size
    let all_members = client.guilds.cache.get(config.guild_id).memberCount
    res.json({ members: all_members, online: online_members });
});

client.on('ready', () => {
    console.log(`[BOT] - Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();
    if (!message.content.startsWith(config.prefix)) return;
    if (message.author.bot) return;

    if (command === 'ping') {
        await message.reply('🏓 Pong: ' + client.ws.ping + ' ms.');
    }
});

client.login(config.token);