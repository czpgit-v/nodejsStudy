// 创建一个长度为10字节的Buffer，相当于申请了10字节的内存空间，每个字节的值为0
let buf_1 = Buffer.alloc(10);
console.log(buf_1)

//创建了一个长度为 10 字节的 Buffer，buffer 中可能存在旧的数据, 可能会影响执行结果，所以叫unsafe
let buf_2 = Buffer.allocUnsafe(10)
console.log(buf_2)

//通过字符串创建 Buffer
let buf_3 = Buffer.from('hello')
console.log(buf_3)
console.log(buf_3.toString())
//通过数组创建 Buffer
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(buf_4.toString())

//Buffer读写
console.log(buf_3[0])
buf_3[0] = 98
console.log(buf_3.toString())
//如果修改的数值超过 255 ，则超过 8 位数据会被舍弃
let buf_5 = Buffer.from('你好')
console.log(buf_5)
console.log(buf_5.toString())