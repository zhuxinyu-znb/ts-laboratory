//--开发深度实践-- 配合CLI效果更佳
//  interface IPriceData {
//     /** id */
//     id: number
//     /** 市场价格 */
//     m: string
//     /** 折扣价 */
//     op: string
// }

// // 将IPriceData塞进数组里
// type IPriceDataArray = IPriceData[]

// function getPrice () {
//     // Promise的泛型参数使用了IPriceDataArray类型，then里面返回的数据就是IPriceDataArray类型
//     return new Promise<IPriceDataArray>((resolve, reject) => {
//         fetch('https://xxxxxxx/prices/pgets?ids=P_100012&area=&source=', data => {
//             resolve(data)
//         })
//     })
// }

// getPrice().then(data=>{
//     data[0].id
// })
//----高级实现----
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick();
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
digital.tick();

