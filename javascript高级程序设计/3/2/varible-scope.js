/**
 * @Author : Amnhh
 * @Date : 2018/10/14
 * @Email : amnhhlod@163.com
 * @Description :
 */
function Hello () {
    var message = 'Hello world'
}

Hello()

// ReferenceError: message is not defined
// message 属于 Hello 这个函数作用域中的局部变量，在外部其实没有定义，而引用一个 Undeclared 的变量，会导致 reference error，即引用错误
console.log(message)
