const fs = require('fs')
const https = require('https')
const path = require('path')

function downloadFile(url) {
    const fileName = path.basename(url)

    const req = https.get(url, async(res) => {
        const fileStream = fs.createWriteStream('./Downloads/'+fileName)
        res.pipe(fileStream)

        fileStream.on('error', async(Err) => {
            throw new Error('Dosyayı indirirken bir hata oluştu: '+Err.message)
        })

        fileStream.on('finish', async() => {
            fileStream.close()
            console.log('Dosya indirme işlemi tamamlandı.')
            process.exit()
        })

        req.on('error', async(Err) => {
            throw new Error('Dosyayı indirirken bir hata oluştu: '+Err.message)
        })
    })
}

module.exports = downloadFile