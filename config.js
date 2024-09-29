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

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEVQMm9hK3ZTNnhkK0VCanNXdmlOVEt3amRJaTE0SlBaZm4vNDgxWlUzaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWFRZUZNZnlOT2t2cCsvdFc0STBjK0s2cjViejlJYThFMHVqbytqa3ZIZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSTFsQ3VaMWVuVGZxU1BaYTN2SEI1RGw1aTA5QmpZV0Q5cGM1aDdyMDJvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyV1Z0OTlZOTkxTSttcC8rZlJzTGx4SGF6d3R2ZW5XRDZuckdqZ2RvM1hJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNPcUMwTHUvR0RXWFZ2TXBnV3lDN1hodkpvT3oraUNCeGw0KzNEeEQwSHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJkdFJVS1N3cEJLbE42Mjk1aHVSWW5JOTVPQWJMV0ZDekdEV1N5Q01Fak09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUZSSXM5WG5uMThYYUZKellma1k0bnNOOEFlRDNVYUxMaHI1NjNxODZWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL21nYjUrY2JKd25QTEZFcytHZmZ0UVgwK3h2T3dWRE5IWnpWeURpMkVHND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdnM2drRk1lUGVxOUdrY3h5NG5LTlRkTnZ6NmRQZWZhZ2I3aFFWZGl5QWkybzlBUll2NVBGT3I3empFS0t0UXdCZTFRMy9WK3Bhb0NxajI4MU1hdkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc5LCJhZHZTZWNyZXRLZXkiOiJWNXhuNE1kSENsSjIvZ0RmYzArUmVsemFMbVVVZnJTa0ZWUWVGVllBVDk0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBS0ZfRnBXbVJrYUtlRzdyTEtaeTR3IiwicGhvbmVJZCI6ImUyMTU2YTZkLTMxOGEtNDFkMi05NWYyLWM5MTAxYmJhMDNjZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzcmFoNC9uck4yTVdqWFNpU0dJRzZtb2t4Z0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0dsUmNtOUh5OWIxdjZuNzRyNGp5djA5RGJnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJHUlRFVFpaIiwibWUiOnsiaWQiOiIyMzc2NzM4MDUyMDg6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJQUk9URUNIIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPbW15S3NIRUo3VTVMY0dHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJacDc4d1J4ZXRuV2pVeWJlY3k4VkoxZFVnU2cvNWRMQnVxbDNoMjByNVZrPSIsImFjY291bnRTaWduYXR1cmUiOiJscFZheTBDeDNFWE9tYkJ4WEJCc3JxWXhESEVsTGpvQ01oRVFkT0k2M2EzaEhyeDhxS3hwbFdVdUd1Wmd1ZWV3ZFpESHlJUzd4dFhZbGtsQ29meXVDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicHpQL1hReDZBQ2FJanFIR1JUOEFJd1NlZXVqTVFhdkt2NGIzRWxnRWdBcXJZNlRmcW5NYzllSk81VDkwUDUzMEFxeS9pVDQ3aTU0Rk5ySndFZnQvQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2NzM4MDUyMDg6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXYWUvTUVjWHJaMW8xTW0zbk12RlNkWFZJRW9QK1hTd2JxcGQ0ZHRLK1ZaIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3NjA1MjkxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9LUSJ9"
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
