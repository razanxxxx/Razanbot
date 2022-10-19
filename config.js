const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'c584c28dfb',
}

//api
global.xteam = 'c528349ca04420f1'
global.lolhuman = 'f2c15dab7695f0afffe09dcd'
global.zenzapi = 'c584c28dfb'

// Other
global.owner = ['6285736800927']
global.premium = ['6285736800927']
global.ownername = 'Razan⚝'
global.botname = 'RazanBot•MD'
global.packname = '© Razan⚝'
global.gc = 'https://bit.ly/razanGc'
global.linkyt = 'https://youtube.com/channel/UCmUhiytK9WMYaOFgdOho_2g'
global.linkgc = 'https://bit.ly/razanGc'
global.limitawal = '10'
global.author = '@Razan⚝\n@RazanBot•MD'
global.sessionName = 'razanxx'
global.prefa = ['','!','.','#','&']
global.sp = '⌕'
global.mess = {
    success: 'Berhasil',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    premium: 'Fitur Hanya Untuk Member Premium, Jika Ingin Membeli Premium Silahkan Chat Owner',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, sedang di proses',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
global.allmenu = fs.readFileSync('./media/allmenu.jpg')
global.thumb = { url: 'https://i.pinimg.com/736x/d0/f8/b8/d0f8b804a908ce4aaee63d54035d2192.jpg' }
global.visoka = { url: 'https://telegra.ph/file/769d88bb8c8357546a149.mp4' }
global.menuimg = { url: 'https://i.postimg.cc/W46sKssR/razan.jpg' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update${__filename}`))
	delete require.cache[file]
	require(file)
})
