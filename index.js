const readline = require('readline')
const downloadFile = require('./function.js')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Indirilmesini istediğiniz dosyanın url\'sini yazınız.\n', async(url) => {
    if (!url) {
        return console.error('Indirilmesi gereken dosyanın url\'sini yazmak zorunludur.')
    }
    downloadFile(url)
})

rl.on('close', () => {
    process.exit(0);
});