const fs = require('fs')
const rs = fs.createReadStream('../资料/笑看风云.mp4')
rs.on('data', chunk => {
    console.log(chunk.length)
})

rs.on('end', ()=>{
    console.log('读取完成')
})