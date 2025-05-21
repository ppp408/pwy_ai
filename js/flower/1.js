// 申明了一个对象常量
// 内存之中开辟了一个空间，里面存放了一个对象
// xp 取址 & 变量名是地址的标记
// js是一个弱类型语言 变量的类型由值决定
// = 赋值 Object
// 对象字面量（字面意义上） JSON
// JS 太灵活，不需要new，通过一个{}可以拿到一个对象，[]拿到数组
// js非常灵活
const xp={
    name:'小彭', // key value string
    age:21,// Number 数值类型
    hometown:'新余',
    isSingle:true, // Boolean 布尔类型
    // 送花
    // 形参
    sendFlower:function(girl){// function 函数类型
        console.log(xp.name+'给'+girl.name+'送了99朵玫瑰')
        girl.receiveFlower(xp)
    }
   };

const xm={
    xq:30, // 心情
    name:'小美',
    room:'408',
    receiveFlower:function(sender){
        console.log(xm.name+'收到了'+sender.name+'送的99朵玫瑰')
        if(xm.xq>90){
            console.log('硕果走起')
        }
        else{
            console.log('gun————')
        }
    }
}
// 僚机 小美的闺蜜
const xh={
    name:'小红',
    hometown:'新余', // 老乡
    room:'408',
    // 送小美，送小红，都具有receiveFlower方法
    // 对象互换
    // 接口 interface
    receiveFlower:function(sender){
        // if(sender.name==='小彭'){
        //    console.log('哥哥我们在一起吧');
        //    return;
        // }
         setTimeout(()=>{  // 定时器
           xm.xq=99;
           xm.receiveFlower(sender)
         },3000)
        //xm.receiveFlower(sender) // 函数的递归 自己调自己 函数的循环 死循环 递归
    }
}

xp.sendFlower(xh)