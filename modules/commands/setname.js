module.exports = {
  config: {
  name: "setname",
  version: "1.0.0",
  role: 0,
    author: "kurt",
  description: "Change the nickname in your group or the person you tag",
  usePrefix: true,
  usage: "{pn} ",
  cooldowns: 3,
},

 async onRun({ api, message, event, args }) {
   message.reply("okay sige")
  const name = args.join(" ")
  const mention = Object.keys(event.mentions)[0];
  if (!mention) return api.changeNickname(`${name}`, event.threadID, event.senderID);
  if (mention[0]) return api.changeNickname(`${name.replace(event.mentions[mention], "")}`, event.threadID, mention);
}
};
