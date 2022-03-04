const discord = require("discord.js")
const token = process.env.token;

const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { join } = require("path");//It is encoded by Murat Eren
const ayarlar = require("./ayarlar.json")
client.on("ready", () => {
  console.log('Murat Eren Music Aktif!')
  client.user.setActivity("Murat Eren Music")
})
client.on("warn", info => console.log(info));

client.on("error", console.error)

client.commands = new discord.Collection()
client.prefix = ayarlar.PREFIX
client.queue = new Map();


const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"))
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file))
  client.commands.set(command.name, command)
} 


client.on("message", message => {
   if (message.author.bot) return;
  if (!message.guild) return;
  
  if(message.content.startsWith(ayarlar.PREFIX)) {//It is encoded by Murat Eren
    
    const args = message.content.slice(ayarlar.PREFIX.length).trim().split(/ +/)
    const command = args.shift().toLowerCase();
    
    if(!client.commands.has(command)) {
      return;
    } 
  try  { 
      client.commands.get(command).execute(client, message, args)
    } catch (err) { 
      console.log(err)
      message.reply("> 🎵 Bir hata oluştu!")//It is encoded by Murat Eren
    }
    
  }
});

client.login(token)    

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Power By FastUptime'));

app.listen(port, () =>
    console.log(`Bot bu adres üzerinde çalışıyor: http://localhost:${port}`)
);