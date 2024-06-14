//file: unblock.js

//file: unblock.js

async function getUserName(api, senderID, mentionID) {
  try {
    const userInfo = await api.getUserInfo(senderID);
    return userInfo[senderID]?.name || "User";
  } catch (error) {
    console.log(error);
    return "User";
  }
}

module.exports = {
     config: {
     name: "unblock",
     version: "•.•",
      role: 1,
      credits: "cliff | AkhiroDEV",
      description: "unblock a user",
      usePrefix: false,
      usages: "{p}{n} @mention, reply, senderID",
      cooldown: 0,
},

async onRun({ api, event, args }) {
  const { mentions, messageReply, threadID, senderID, messageID } = event;
  const mentionID = args[0];
  if (!mentionID && !messageReply) {
    return api.sendMessage(`Please mention the user you want to unblock.`, threadID, messageID);
  }

  if (mentionID) {
    api.sendMessage("🔓 | You have been unblocked.", mentionID);
    api.sendMessage(`✅ | ${await getUserName(api, mentionID)} has been unblocked successfully.`, threadID, messageID);
    api.changeBlockedStatus(mentionID, false);
  } else if (messageReply) {
    const replySenderID = messageReply.senderID;
    api.sendMessage("🔓 | You have been unblocked.", replySenderID);
    api.sendMessage(`✅ | ${await getUserName(api, replySenderID)} has been unblocked successfully.`, threadID, messageID);
    api.changeBlockedStatus(replySenderID, false);
    }
  }
};
