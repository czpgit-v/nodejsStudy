const fs = require('fs');
/*fs.appendFile('座右铭.txt', ',则必有我师', err =>{
    if(err){
        console.log('追加失败')
        return;
    }
    console.log('追加成功')
}) */

//同步追加
fs.appendFileSync('data1.txt', 'test333')

//writeFile追加
fs.writeFile('座右铭.txt', '。择其善者而从之', {flag: 'a'}, err => {
    if (err) {
        console.log('追加失败')
        return;
    }
    console.log('追加成功')
})





/*
fs.writeFile 详解 - 异步文件写入方法

语法：fs.writeFile(file, data[, options], callback)

参数：
- file: 文件名或文件描述符
- data: 要写入的数据（字符串、Buffer、TypedArray 或 DataView）
- options: 可选参数对象或字符串
  - encoding: 编码格式，默认 'utf8'
  - mode: 文件权限，默认 0o666
  - flag: 文件打开标志，默认 'w'
- callback: 回调函数 (err) => {}

特点：
1. 异步执行，不会阻塞后续代码
2. 通过回调函数处理结果和错误
3. 默认是覆盖模式（flag: 'w'）
*/

// 1. 基本用法 - 异步写入
/* fs.writeFile('./test1.txt', 'Hello, fs.writeFile!', (err) => {
    if (err) {
        console.log('写入失败:', err.message);
        return;
    }
    console.log('基本写入成功');
}); */

// 2. 指定编码格式
/* fs.writeFile('./test2.txt', '你好，Node.js！', 'utf8', (err) => {
    if (err) {
        console.log('UTF-8写入失败:', err.message);
        return;
    }
    console.log('UTF-8编码写入成功');
}); */

// 3. 使用选项对象
/* fs.writeFile('./test3.txt', '这是一个测试文件', {
    encoding: 'utf8',
    flag: 'w',  // 'w' 覆盖模式（默认）
    mode: 0o666  // 文件权限
}, (err) => {
    if (err) {
        console.log('选项对象写入失败:', err.message);
        return;
    }
    console.log('选项对象写入成功');
}); */

// 4. 写入 Buffer 数据
/* const buffer = Buffer.from('Buffer 数据写入测试');
fs.writeFile('./test4.txt', buffer, (err) => {
    if (err) {
        console.log('Buffer写入失败:', err.message);
        return;
    }
    console.log('Buffer写入成功');
}); */

// 5. 链式操作示例 - 先写入再读取
/* fs.writeFile('./chain-test.txt', '链式操作测试', (err) => {
    if (err) {
        console.log('链式写入失败:', err.message);
        return;
    }
    console.log('链式写入成功');
    
    // 写入成功后读取文件
    fs.readFile('./chain-test.txt', 'utf8', (readErr, data) => {
        if (readErr) {
            console.log('读取失败:', readErr.message);
            return;
        }
        console.log('读取到的内容:', data);
    });
});

console.log('这行代码会立即执行，因为 fs.writeFile 是异步的'); */

/* 
常用的 flag 参数值：
- 'w': 写入模式，文件不存在则创建，存在则覆盖（默认）
- 'a': 追加模式，文件不存在则创建，存在则追加到末尾
- 'wx': 写入模式，但如果文件已存在则失败
- 'ax': 追加模式，但如果文件已存在则失败

fs.writeFile vs fs.writeFileSync 比较：
1. fs.writeFile: 异步，不阻塞，使用回调函数
2. fs.writeFileSync: 同步，阻塞，直接返回结果或抛出异常

推荐使用异步版本（fs.writeFile）以避免阻塞事件循环

现代化写法 - 使用 fs.promises:
const fs = require('fs').promises;
await fs.writeFile('./modern.txt', 'modern syntax');
*/

