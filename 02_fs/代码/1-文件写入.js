const fs = require("fs")

//异步写入
/* fs.writeFile('./座右铭.txt', '三人行', err =>{
    if(err){
        console.log('写入失败')
        return;
    }
    console.log('写入成功')
}) */



//同步写入
fs.writeFileSync('./data1.txt', 'test111')
console.log(1 + 1)
