module.exports = {
  name: "şarkı",
  description: "Murat Eren Music 🎵",
  execute (client, message, args) {//It is encoded by Murat Eren
    
      const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send(">  🎵  **Herhangi bir ses kanalında bulunmalısınız.**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send(">  🎵 **Herhangi bir şarkı oynatmıyorum.**");
    }
    message.channel.send(serverQueue.songs[0].title + ' - **🎵 Şuanda Oynatılan Şarkı.**')

    
    
    
  }
}