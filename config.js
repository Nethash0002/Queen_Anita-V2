//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347043759577";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0N3bzBLUEVoQy83QzUvWHZFVlJONGVjVkJTNWpySnNOTGxQSGJ6bFlsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTNzNWozSmRneTA0Q2xUNWZaZEYxUXpyOVd6WmRvRFB5c2MwdkRrbUhCND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TExwS1Z2OTVVUGtpOS9SekRmNEdqS2pvTG9HeC9CVnpZOWNSYWZ6ZGxvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLWjEzbThFaWttcU83bkZ4S2VNY2l6WUptK3RGTnlMUW5QbExRd3c1Q3h3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNEeVVEcjh4Nkgyb2tIdjlmOWNWMVJnUFNDWFcwRDZqdHE2SVVHQTF4Vms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ill1cnN5L3FuTXpXeDZ2eklBUGNhN1V2QlJLVkFTMmw3RThTdWUzNjVHSFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUJsZk1HRzNWNDBCYWFoYjVTelZxbEZoNEtuaXlvUnlmUjJsSmhIVGszdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUwvYnJXVGc5RGxZS29EUzJrY0xjdkE5VU1HcjFPZkNhcDdOd0lRS29DST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJoeVhwYVRXN2NFak9aa09LZG1pc3BBWW5XVVB5YU9VOXJ6OVZCaXd4T3FRb3M0R29LeWwwNmVYd3VRcVZmWjFXMTVRajd3YWRVNUlUSzJsMXdWUmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg2LCJhZHZTZWNyZXRLZXkiOiJzdTExb1pwVVBsZ1VHa1EzVUtMQ2Y1anhTZnJ3RXBsLzRFT3dHRXdWZ05FPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhYkdaV0U0clNSeW5QYjdLLVZ6eC13IiwicGhvbmVJZCI6ImQ5ODNjNmY1LTQyNDUtNDZiOC1hZmMxLTAxZDk3MWFlNmM5OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0MXB4azBnOENYOVF4Wk14QVFMMWFWanJOZHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjN6VUpLYjlSTFlHeHpndEtOMngvTHhqQU9FPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpWMUtOV0o0IiwibWUiOnsiaWQiOiI5NDc1MTMzNDYyMzoyOUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXJ6NW9jQ0VMQ1QrclFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieFdWSVVHdFZjZWxTTldUQzdvVVdjd3pxM0l4ZGIzdlc3YXhDVzZ4WXBSST0iLCJhY2NvdW50U2lnbmF0dXJlIjoibXhLZDZyNGxoUDJrL21JTFEvVjBRdmVuWHRxZXhPUy92WEpRMlVtaytsUmhVemloR1YrUkFTemhiRGxlRmlhekFEYnYremRsMS9DZ00yVjJRU20xQWc9PSIsImRldmljZVNpZ25hdHVyZSI6Im1ZVW52ckRDVU1UbjZrUlJSRjBPZWw3dTdQbU02V2tDclZPTEZSOHo5SU5CM3ZZeHR4N3JmNmdYeWdnM2NUSmhPRXhzOHJZK1BnMVlIbDlwTzJ2UWh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTEzMzQ2MjM6MjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY1ZsU0ZCclZYSHBValZrd3U2RkZuTU02dHlNWFc5NzF1MnNRbHVzV0tVUyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTY2NTk4MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGSmMifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-X00anFgosmRhhWP75khXT3BlbkFJlyo7xhWoWhz9Sdoap9Hv",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
