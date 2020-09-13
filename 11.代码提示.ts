// /**
//  * 一个方法：生成错误提示信息
//  *
//  * @param {string} message 提示信息，比如`you have a error`
//  * @param {number | string} code 错误码，数字和字符都行
//  * @param {string} type 类型，请写`demo1`或者`demo2`
//  *
//  * [还不懂？点这里吧](https://www.google.com)
//  *
//  * ```js
//  * // demo
//  * genErrMsg('demo', 10086)
//  *
//  * ```
//  */
// function genErrMsg (message: string, code: number | string, type?: ('demo1' | 'demo2')): string {
//     return (message || `网络繁忙，请稍候再试`) + (code ? `(${code})` : ``)
// }

globalLib({ x: 1 })
globalLib.doSomething()

// 模块插件
// import m from 'moment';
// declare module 'moment' {
//     export function myFunction(): void;
// }
// m.myFunction = () => {}