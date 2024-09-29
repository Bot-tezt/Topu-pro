//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "princenjiprospper@gmail.com";
global.location = "Buea,Cameroon.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Prosper-Protech/Topu-ai.git";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaEW2eE3WHTU7fTQht19";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaEW2eE3WHTU7fTQht19";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/4c2819e618d8946926b82.jpg";
global.devs = "237673805208";
global.sudo = process.env.SUDO || "237673805208";
global.owner = process.env.OWNER_NUMBER || "237673805208";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUJFekJlajNqSG5HQTR4OFNiSnhKSjFLOWtNSlpsTUF3WitRVHQxQnFVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamVSU1QySC9lQnNINmRWbmoxSS9vWUY0bkoxRTd1L1ZEbUVCWVNaQmtIND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTkhmS05yaGtPck5JUDd5QXpsbmNxRFhDc1gyNE9LaDl1dlk0NjUzV25vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIveWlpMEFFdmhWU3g0K3FQa29INnlpdkxncmFHV1dDMC9jRmt2ODUxQVUwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlIWXFqSGlQaUdlWmxUZVJ6TTgvK2FPMHR1eXVOQVNLYUhjbGZNWFpaWE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx1NXI5K0VDaFFvMzNNRVVBblFReDlhRTZ4SGNFSWk3MTJQdDl4TERZRTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU1KRGx4WVBndTJjNkFiZ2h6b2plQi9FOFJZZkVnVGQ2aUFsa0o3Z0RrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnd6VEJvc0tXVnVNMDBUUm9zUTRNNzQ2b0hrdzQvVW1YNjlsT09YVzFVbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt4aVpGT3Z6Z283QklQUzljeGs5QmdvUGtZazJaTitORE1OYVhkZXdOWGxqcFpjNFBjVUw2dmJYRy9ZWGNqb0FzMmVITjJsZFNKZml4QmxldVJMdGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTExLCJhZHZTZWNyZXRLZXkiOiJDRUZ4MVMwVjZWaHFyMzBCc3FTMXZVeFBNTENRNm9EM3YzaDAyS0lyT1FjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuUUtNRmFGdlN2U2JGNW5yMy1FUWx3IiwicGhvbmVJZCI6IjIwNzk3ZTMzLTVlM2MtNDI5ZS04YTljLTVkMmJjNDM4MTI1NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxYzduNjRUUm4ydWVJZTdTdWVNRVV0Y1Z1d1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2VtV2RvNDRRYzdrdmVXSHhDNWxmM0ljcFZFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Iks5U1BBNDlRIiwibWUiOnsiaWQiOiIyMzc2NzM4MDUyMDg6ODlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUHJvdGVjaCBQcm8uIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPdVA4cmNERU4vMHliVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ0NUk4MEJQUXh6NVVTdjZZcER1KzI4TmZKQ2xUamp6dDNCQTl2UmNyTUhjPSIsImFjY291bnRTaWduYXR1cmUiOiJ3dDZsS1lCYytnaUJmTVUzOGlMUUJGV3V3MTA2UFdPMGVZb2N2TDkyVHNON3FQVTAwRUJHMHJuRHBuNEt5OVM4NDFHNEFERUVOaWE5SDVSNXRKYzFBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZXl4ZW9aR1BkR08waDVFUlYyYW9aeisxY2RZbytvYjdZVGhnc0g0bmdkZGxNL1RwZllkRHR5VFdaQlBVYnhtODl5ZWdMWEpaanUvcVJ1TmpDMU9yakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2NzM4MDUyMDg6ODlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYmVTUE5BVDBNYytWRXIrbUtRN3Z0dkRYeVFwVTQ0ODdkd1FQYjBYS3pCMyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjk3Mjc4MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPZXMifQ=="
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".,!,#,/,@,😎,🌍,🌎,💀",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐛𝐲 𝐏𝐫𝐨𝐓𝐞𝐜𝐡 𝐟𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧",
  author: process.env.PACK_AUTHER || "PROTECH",
  packname: process.env.PACK_NAME || "🤝",
  botname: process.env.BOT_NAME || "Pro-Md",
  ownername: process.env.OWNER_NAME || "PROTECH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "Us2pP4zzoiWjzaWQnoEkUq3Q",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-IEsOXHzabn0WU1n317wNT3BlbkFJDuolINuD6XaMnxJxfR12",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "0385228b961473710eff4e7daed873e8",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "PROTECH").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
