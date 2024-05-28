//file: set.js

module.exports = {
config: {
  name: "set",
  version: "1",
  role: 1,
  author: "kurt",
  description: "automatic change bio",
usePrefix: true,
  usage: "text/set",
  cooldown: 2,
},
async onRun({ api, event, args, Users }) {
let zeska = `• Restart every 40 mins \n»${global.client.config.botPrefix}« is my prefix | messenger bot.\nMade by: facebook.com/yakiro.wyatt`;
let zeskaa = args.join(" ");
var test = zeskaa || zeska;
api.changeBio(test);
api.sendMessage(`Bio has been successfully changed to\n"${test}"`, event.threadID, event.messageID);
  }
};
