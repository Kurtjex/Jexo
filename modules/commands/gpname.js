module.exports = {
  config: {
  name: "gpname",
  version: "1.0.0", 
  role: 0,
  author: "kurt",
  description: "Rename your group",
  usePrefix: true,
  usage: "groupname [name]", 
  cooldown: 5,
},

async onRun({ api, event, args }) {
  var name = args.join(" ")
  if (!name) api.sendMessage("❌ | You have not entered the group name you want to change", event.threadID, event.messageID)
  else api.setTitle(name, event.threadID, () => api.sendMessage(`🔨 | The bot changed the group name to: ${name}`, event.threadID, event.messageID));
}
};
