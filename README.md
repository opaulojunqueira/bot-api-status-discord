# bot-api-status-discord
A simple json API that fetches online members from your Discord server in Node.JS.

---
Install the required dependency presented in the **package.json** file
```
npm install
```
Modify the commented information in the **config.json** file
```json
{
    "token": "TOKEN_BOT_HERE",
    "prefix": "PREFIX_BOT_HERE",
    "guild_id": "GUILD_ID_HERE"
}
```
"token" -> Here you put the token of your bot created in the developers panel of Discord.<br/>
"prefix" -> Prefix your bot here.<br/>
"guild_id" -> Here you enter your Discord server ID. Where it will pull the information into the json API.

---
After the changes give the command on the console to start the bot and the json api
```
node index.js
```
If this appears. Everything is alright:<br/>
<img height="60" src="https://i.imgur.com/8pZPNY5.png"/><br/><br/>
If you give this type of error:<br/>
<img height="125" src="https://i.imgur.com/Rj4FIvj.png"/><br/><br/>
Go to your bot's dashboard at (https://discord.com/developers/applications), select your bot, go to bot -> and enable the options "Privileged Gateway Intents":<br/>
![Privileged Gateway Intents](https://user-images.githubusercontent.com/48892662/131727318-67856d95-7b48-4e47-bc8e-afccded0aad8.png)<br/><br/>
All right? Now use the commands to start the application, and use the configured port. Ready!<br/>
You can now incorporate this information into your websites or other applications.<br/>
![Ready](https://user-images.githubusercontent.com/48892662/131727678-0ff37832-98d1-40ee-82e4-af83398028a7.png)
