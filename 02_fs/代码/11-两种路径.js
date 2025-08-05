const fs = require('fs')

//命令行的工作路径
fs.writeFileSync('../index.html', 'love')
fs.writeFileSync('index.html', 'love')

fs.writeFileSync('D:/index.html', 'love')
fs.writeFileSync('/index1.html', 'love')