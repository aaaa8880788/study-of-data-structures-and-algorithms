// 打印二进制底层32位
const print = (num) => {
  let str = ''
  for(let i = 31; i >= 0; i--){
    str += (num & (1 << i)) === 0 ? '0' : '1'
  }
  console.log(str); 
}
const test1 = 1
const test2 = test1<<1
const test3 = 99050
print(test1)
print(test2)
print(test3)