//file: glist.js

module.exports = {
  config: {
  name: "gclist",
  version: "1.0.0",
  author: "kurt",
  role: 1,
  description: "Lấy tên và id các nhóm chứa bot",
 usePrefix: false,
  usage: "allbox",
  cooldown: 5
},

async onRun({ api, event, clientL }) {
  var num = 0, box = "";
  api.getThreadList(100, null, ["INBOX"], (err, list) => {
    list.forEach(info => {
      if (info.isGroup && info.isSubscribed) {
        box += `━━━━━━━━━━━━━━━\n${num+=1}. ${info.name} - ${info.threadID}\n`;
      }			
    })
    return api.sendMessage(box, event.threadID, event.messageID);
  })
}
  };
