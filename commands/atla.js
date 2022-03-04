module.exports = {
  name: "atla",
  description: "Murat Eren Music",
  execute(client, message, args) {//It is encoded by Murat Eren
    const { channel } = message.member.voice;

    if (!channel) {
      return message.channel.send("> 🎵 **Herhangi bir ses kanalında bulunmalısınız.**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("> 🎵 **Atlayabileceğim bir şarkı yok.**");
    }
    serverQueue.connection.dispatcher.end();
    message.channel.send("> ✅ **Şarkı geçildi.**");
  }
};