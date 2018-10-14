/**
 * @Author : Amnhh
 * @Date : 2018/10/14
 * @Email : amnhhlod@163.com
 * @Description :
 */
function Hello () {
    message = 'Hello World'
}

Hello()

// 这里会正确的打印出 Hello World
// 因为在 Hello 这个函数执行后，message 这个标识符已经被声明到了全局
// 所以在全局下的任何子作用域下都可以引用他，甚至修改它
console.log(message)

message = 'Hello World, twice'

// Hello World, twice
console.log(message)