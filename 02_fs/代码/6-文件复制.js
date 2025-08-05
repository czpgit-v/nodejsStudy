const fs = require('fs');
const process = require('process');

//方式一 readFile
//读取文件内容
let data = fs.readFileSync('../资料/笑看风云.mp4');
//写入文件
fs.writeFileSync('../资料/笑看风云-2.mp4', data);
console.log(process.memoryUsage()); // rss    110710784 字节   105MB


const rs = fs.createReadStream('../资料/笑看风云-2.mp4')

const ws = fs.createWriteStream('../资料/笑看风云-3.mp4')

rs.on('data', chunk => {
    ws.write(chunk)
})

rs.on('end', ()=>{
    console.log(process.memoryUsage())
})


// rs.pipe(ws)
