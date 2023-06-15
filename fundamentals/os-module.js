const os = require("os");

//info about current user
const user = os.userInfo();

//system uptime in s

const uptime = os.uptime() / (3600 * 24);

console.log(`the system has been running for ${uptime} days`);

const currentOS = {
  type: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
