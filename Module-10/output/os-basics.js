const os = require("os");
console.log("System info \n");

console.log("_".repeat(50), "\n");

console.log("Platform Details: ");
console.log("Platform: ", os.platform());
console.log("Architecture: ", os.arch());
console.log("OS type: ", os.type());
console.log("OS Release: ", os.release());
console.log("Hostname: ", os.hostname());

console.log("_".repeat(50), "\n");

console.log("\nCPU info: ");
const cpus = os.cpus();
console.log("CPU Model: ", cpus[0].model);
console.log("CPU Speed: ", cpus[0].speed);
console.log("CPU Times: ", cpus[0].times);
console.log("Numbers of cores: ", cpus.length);

console.log("_".repeat(50), "\n");

const totalMem = os.totalmem();
const freeMem = os.freemem();
console.log("Total Memory: ", (totalMem / 1024 / 1024 / 1024).toFixed(2), "GB");
console.log("Free Memory: ", (freeMem / 1024 / 1024 / 1024).toFixed(2), "GB");

console.log("_".repeat(50), "\n");

const uptime = os.uptime();
const hours = Math.floor(uptime / 3600);
const minutes = Math.floor((uptime % 3600) / 60);
const seconds = Math.floor(uptime % 60);

console.log(`${hours}h ${minutes}m ${seconds}s`);
