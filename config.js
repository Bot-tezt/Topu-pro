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
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaEW2eE3WHTU7fTQht19";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaEW2eE3WHTU7fTQht19";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/s7spg1.jpeg";
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

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkxYWS9sUzVpajFuVmxWd1RreGNGS25CYmZ2aEZyRFVRRmM4L0NWbDJrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjl6OEdRWVJDTktVdjBNejlyRjhMMU5OWHhleUJ2elhTeEswMGJNdUdGUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTmJDM0NHRjBDMW1NYkZiQzlxWXkvTWNZd21iU1gzcXJyMWRudEpRd1ZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwb01OYXR5RlVUZXZkdzdKdW5hcmxhU2NqT3ptUHpIaFZpWndpNmNzenlNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFGSUZ5bGlIREdta3ZDeUZnQ094ZGVTMndWZHB5YmhTMFlmb1lFWlN5MjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlMxVi9DVGlyWTZlbWtPaFNybFRSZm5qN1ZhQ3AwZ2xoL04yRjJhL0FvQVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkkySVVoWjBlcjhEWnBNbmhROEFXK2dJek9JVFpvM2d4WEVtSDZrS1BVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjZCNnRGdEpVYUxzRDBCN2RVRGZIVzFCYmJ3QUZMQlErN2ZvQ3kvdmZDYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJscGJOYk1Ydkw4TFAzV3JYVlNwcG1ZZHUycHpUeUtVaE80WExKMng5N2o2WmRVVW5QZW1nS3NkUmVwaEVxLzlvU0Vpb01kUmk3S1NRa3luVWFkNUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIsImFkdlNlY3JldEtleSI6IjB0NUwvZEJlV1VOS1hISFNhVlFhcW1VNUF6NGg2ZW1BQS9GcnhmR1Vzd0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im1sME9Td3VWUjZhNUhaM0NwV0YzZ2ciLCJwaG9uZUlkIjoiNjg4MDU5ODgtNTU0MS00OTIyLWIwYWUtNTRkNjAzYzk2MzVmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InkrYm5KejJhYXA3TlVjUFlUdkUvRXNvNEJ4UT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUFp0TUVRWDZxd1M4a2pVQ3RhVTg4bjd1WUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSzczMUdXSFAiLCJtZSI6eyJpZCI6IjIzNzY3MzgwNTIwODoxMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJQUk9URUNIIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKYjJ2NmdDRUtpMGxyZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBczFJSHU5SWdUOTlOVEVBazUzR2htZUIvbER6Y3hmbmZ1NzU5bzkrZjNvPSIsImFjY291bnRTaWduYXR1cmUiOiJJQ2FzMDJHMVBBSmMxTkpRMWdWUGJXczlPekNVc2hsUU1HWnhwM2J1L045Ymd5NG5aRG5vcXpKMTd3YUpvZFphRnRPemJIV3ZqVlpEangremdZSUhDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQnhMZDhScjZlSmlnUDdwV2pKOXFLak9aMnVzdWNSbUhYMXFPbkRpYnoxbVJMQXpPNGJyVjNLbEhwY3c4QThTZkxReVdZWnVkT1Q4OElscUJSTDROQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2NzM4MDUyMDg6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUUxOU0I3dlNJRS9mVFV4QUpPZHhvWm5nZjVRODNNWDUzN3UrZmFQZm45NiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODQyMDQwNn0==="
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "., ,!,#,/,@",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.1.2",
  caption: process.env.CAPTION || "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐛𝐲 𝐏𝐫𝐨𝐓𝐞𝐜𝐡 𝐟𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧",
  author: process.env.PACK_AUTHER || "HALLOWEEN-BUGBOT",
  packname: process.env.PACK_NAME || "🤝",
  botname: process.env.BOT_NAME || "Halloween-Md",
  ownername: process.env.OWNER_NAME || "PROTECH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "Us2pP4zzoiWjzaWQnoEkUq3Q",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-IEsOXHzabn0WU1n317wNT3BlbkFJDuolINuD6XaMnxJxfR12",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "38",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "0385228b961473710eff4e7daed873e8",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "🎃HALLOWEEN-BUGBOT").toUpperCase(),
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
