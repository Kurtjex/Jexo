//file: osinfo.js

const os = require("os");

module.exports = {
  config: {
    name: "osinfo",
    version: "1.0.0",
    author: "Rui",
    role: 0,
    description: "Displays basic information about the operating system.",
    usage: "osinfo",
    usePrefix: true,
    cooldown: 5,
  },

  async onRun({ api, event }) {
    try {
      const currentTime = new Date();
      const uptime = currentTime - global.client.startTime;
      const uptimeFormatted = formatUptime(uptime);

      const osInfo = {
        platform: os.platform(),
        type: os.type(),
        release: os.release(),
        architecture: os.arch(),
        hostname: os.hostname(),
        uptime: uptime,
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        cpus: os.cpus(),
      };

      const message = `
Platform: ${osInfo.platform}
Type: ${osInfo.type}
Release: ${osInfo.release}
Architecture: ${osInfo.architecture}
Hostname: ${osInfo.hostname}
Uptime: ${uptimeFormatted}
Total Memory: ${formatBytes(osInfo.totalMemory)}
Free Memory: ${formatBytes(osInfo.freeMemory)}
Number of CPUs: ${osInfo.cpus.length}
      `;

      await api.sendMessage(message, event.threadID);
    } catch (error) {
      console.error(
        `❌ | Failed to execute "osinfo" command: ${error.message}`,
      );
      const errorMessage = `❌ | An error occurred while trying to execute the command. Please try again later.`;
      api.sendMessage(errorMessage, event.threadID);
    }
  },
};

function formatUptime(ms) {
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const hours = Math.floor((ms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((ms % (60 * 1000)) / 1000);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let index = 0;
  while (bytes >= 1024 && index < units.length - 1) {
    bytes /= 1024;
    index++;
  }
  return `${bytes.toFixed(2)} ${units[index]}`;
}
