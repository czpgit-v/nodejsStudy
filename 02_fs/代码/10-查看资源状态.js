const fs = require('fs')
fs.stat('../资料/笑看风云.mp4', (err, data) => {
    if(err){
        console.log(err)
        return
    }

    console.log(data.isFile())
    console.log(data.isDirectory())
})