//file: bio.js

module.exports = {
  config: {
  name: "bio",
  version: "1.0.0",
  role: 1,
  author: "Kv2team",
  description: "Change bot's bio",
  usePrefix: false,
  usage: "bio [text]",
  cooldown: 5

},

   async onRun({ api, event, global, args, permssion, utils, client, Users }) {
    api.changeBio(args.join(" "), (e) => {
      if(e) api.sendMessage("❌ | an error occurred" + e, event.threadID); return api.sendMessage("✅ | 𝗧𝗵𝗲 𝗯𝗶𝗼 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗰𝗵𝗮𝗻𝗴𝗲𝗱 𝗶𝗻𝘁𝗼: \n"+args.join(" "), event.threadID, event.messgaeID)
    }
    )
  }
};
