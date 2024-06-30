const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348166643015";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_43_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTksXG4gICAgICAgIDk1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDY3LFxuICAgICAgICAxODEsXG4gICAgICAgIDgzLFxuICAgICAgICAxODksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU2LFxuICAgICAgICA4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4MixcbiAgICAgICAgNDAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgNzksXG4gICAgICAgIDM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDgxLFxuICAgICAgICAzNixcbiAgICAgICAgNzEsXG4gICAgICAgIDYyLFxuICAgICAgICA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NixcbiAgICAgICAgNjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgODYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTksXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NyxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY4LFxuICAgICAgICA1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDU1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMCxcbiAgICAgICAgODksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAyOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM0LFxuICAgICAgICA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA5LFxuICAgICAgICA5MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDU5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMixcbiAgICAgICAgMTI5LFxuICAgICAgICAzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MixcbiAgICAgICAgMTM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3b2w4Y2lVczFqN3BZTThRU0pYZEtJbXY5azJjRmhvcjZablJQMHJuNGJnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNjY2NDMwMTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBREFENzZFMEQwNjQ2NEZGRjM5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTc2OTM4OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNjY2NDMwMTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNDM3QUIwMjRCQzc0MEQ1ODBEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTc2OTM5MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2elhjZ245R1FrYXlOTHhLRWx0QWF3XCIsXG4gIFwicGhvbmVJZFwiOiBcImIyOWEwNDk2LTJmMDAtNGNkYi04OThkLWIwYzk1OWU2MjAxNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OCxcbiAgICAgIDI1MixcbiAgICAgIDE5NSxcbiAgICAgIDY3LFxuICAgICAgMjUxLFxuICAgICAgMjE1LFxuICAgICAgMTUzLFxuICAgICAgMTE5LFxuICAgICAgOTgsXG4gICAgICAyMzQsXG4gICAgICA4OSxcbiAgICAgIDE2MSxcbiAgICAgIDcsXG4gICAgICA2NCxcbiAgICAgIDI4LFxuICAgICAgMTE4LFxuICAgICAgMTAxLFxuICAgICAgMTA1LFxuICAgICAgMjIyLFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMSxcbiAgICAgIDYxLFxuICAgICAgMjIwLFxuICAgICAgMjQ3LFxuICAgICAgNTIsXG4gICAgICA0MyxcbiAgICAgIDE2NixcbiAgICAgIDI0MixcbiAgICAgIDIwNyxcbiAgICAgIDI4LFxuICAgICAgMTA4LFxuICAgICAgMTczLFxuICAgICAgMjksXG4gICAgICAyMjYsXG4gICAgICA2MCxcbiAgICAgIDEzMSxcbiAgICAgIDg0LFxuICAgICAgMTUxLFxuICAgICAgMTIwLFxuICAgICAgMTAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTNJMUpRRkVLYXloclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSbmZBcDdySlNUU3FuQ0pjbVlwazZub1FEMWw0b0dIa1V1K25Lc3ZrTW1zPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJ6QmVtbmxlZVgzUEgrUzh5Zm0zaXNnL1ZRb1NEcHJuay9Qcjl6SVdUeEgvaHRJa0J1YkYydUdrSDBrMCtzUDVQZlYzZTNDN2NCWWF4RU42UjZKcER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5ucCt2OG5aSXZxbGFZa29jbFZWUUxLTS9kcXdPWTRvZFlxSEt5blJBT2NNM1JScUNDbkFpdTVKV3RTTTUwRCtuaGFORTFiOUhialhaZ01iZ0p0NEJRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2NjY0MzAxNTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjg5NjQyNzM4ODUzMDI6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJIdW1ibGUgMlwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2NjY0MzAxNTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk3NjkzODUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFONjRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU42NC5qc29uIjogIntcImtleURhdGFcIjpcImtYbjBpVmtJTFJyWnVWSXZKTWVha3poK2FnZGlteVRzVjRvQy9kRnlJR0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM4NTUwNTg2OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NzY5Mzg1NzEyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
