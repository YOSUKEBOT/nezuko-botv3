const fs = require("fs")
const chalk = require("chalk")

//┏⧐┅┅┅⃟🌺┅┅⧏ ❀ ⧐┅┅🌺⃟┅┅┅⧏┓
//Tenha Cuidado ao Alterar as Coisas
//Nunca apague os " " 
//Caso Contrário, O Bot Não Irá Ligar 
//Caso Tenha Interesse em Ter o Bot descriptografado 
//Chama no WhatsApp: https://wa.me/555195237143
//Caso Tenha Ideias de Comandos, Chama Ai
//Caso Tenha Dúvidas, Chama Ai
//┗⧐┅┅┅⃟🌺┅┅⧏ ❀ ⧐┅┅🌺⃟┅┅┅⧏┛

//===================================== 
// mudar logos 
global.log0 = "https://telegra.ph/file/0b831f0c5c62ba72f7904.jpg" 
global.log2 = "https://telegra.ph/file/f67a9151be9be345fa9e9.jpg"
global.thumb = "https://telegra.ph/file/db0956276ed548db4aa21.jpg"
global.err4r = "https://telegra.ph/file/db0956276ed548db4aa21.jpg"

//┏⧐┅┅┅⃟🌺┅┅⧏ ❀ ⧐┅┅🌺⃟┅┅┅⧏┓
//EMOJIS DO BOT
//Troque os Emojis Apenas
//Todos os Lugares do Bot, Que tiver Configurado
//Serão Automaticamente Substituídos pelos Emojis Que Você Quiser

nezukoemoji1 = "☔"
nezukoemoji2 = "🌺"
nezukoemoji3 = "🌹"

//┗⧐┅┅┅⃟🌺┅┅⧏ ❀ ⧐┅┅🌺⃟┅┅┅⧏┛

//=====================================//
//[ definições dono ]
global.numerodonoa = "5551995237143"

global.lolhuman = "RelzzAPIs"
global.banChats = false
global.wlcm = []
global.banChats = false
global.gcrevoke = [] 

//[ anterações nome dono entre outros ]
global.packname = "© C᥆ρᥡrιght bᥡ Nᥱzᥙk᥆ b᥆t"

global.packname2 = `https://youtube.com/@nicegamer23?si=kcPkDloM4WeVXTlT`

global.author = "⚡𝑵𝑰𝑪𝑬 𝑮𝑨𝑴𝑬𝑹𝑺⚡"

global.sessionName = "CONECTAR COM NÚMERO DE TELEFONE"

global.NomeDoBot = "⚡𝒀𝑶𝑺𝑼𝑲𝑬 𝑩𝑶𝑻 𝑽3⚡"

global.linkgrupss = "https://chat.whatsapp.com/IyYUywXZmA39X9JQ5IoWoy"

global.prefix = "/" "."

global.NickDono = ⚡𝑵𝑰𝑪𝑬 𝑮𝑨𝑴𝑬𝑹𝑺⚡

global.websitex = "https://youtube.com/@nicegamer23?si=kcPkDloM4WeVXTlT"

//=====================================//
// [ mensagens ]
global.mess = {
    success: '『❗』Prontinho mestre!',
    admin: ' 『❗』Apenas adm pode utilizar esse comando.',
    botAdmin: ' 『❗』Bot precisa ser adm para executar o comando.',
    owner: ' 『❗』Somente meu mestre pode utilizar esse comando!',
    group: ' 『❗』Esse comando só pode ser utilizado em grupo!',
    private: ' 『❗』Esse comando só pode ser utlizado no pv!',
    bot: ' 『❗』Recurso específico para o próprio número do bot.',
    wait: 'Aguarde, estou atendendo seu pedido...!',
    linkm: ' 『❗』Cadê o link?',
    donosmt: ' 『❗』Este é um recurso especial para meu mestre!',
    premium: ' 『 ❗』Esse recurso é especial para usuários premium.',
    ban: ' 『❗』Você foi banido pelo dono, se quiser ser desbanido do bot fale com meu dono!'
}

//===================================== 


//===================================== 

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//===================================== 



//===================================== 


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
