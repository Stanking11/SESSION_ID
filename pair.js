const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Gifted_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Gifted_Tech = Gifted_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Gifted_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Gifted_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Gifted_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Gifted_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id, { text: '' + b64data });

               let GIFTED_MD_TEXT = `
> ┏━━━━━━━━━━━━━━
> ┃𝙎𝙏𝘼𝙉𝙔 𝙏𝙕𝙍 𝙕𝙈𝘿
> ┃𝙎𝙐𝘾𝘾𝙀𝙎𝙎𝙁𝙐𝙇𝙇𝙔
> ┃𝘾𝙊𝙉𝙉𝙀𝘾𝙏𝙀𝘿 ✅🔥
> ┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
*574N6T3CH de STANY-TECH*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
* FOLLOW US FOR HACKING AND TECHNOLOGY UPDATE
 https://whatsapp.com/channel/0029Vb5RfcrJ3jv4u0wJwd0r
* JOIN US FOR DAILY USEFUL TIPS 
 https://chat.whatsapp.com/I6Ey19yeqQvCBBuzXIzece
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> ANY INCONVENIENCE DM ME DIRECTLY
> 574N6T3CH de STANY-TECH 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> *STANY-TECH AND SUPPORT OF IT TECH BRO'S TEAM*

_Thanks for Choosing Us Fork and Star My Repo🔥_`
 await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id,{text:GIFTED_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Gifted_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await GIFTED_MD_PAIR_CODE()
});
module.exports = router
