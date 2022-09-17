// 题目：给定一个参数N，返回：1!+2!+3!+...+N!
const f2 = (N:number) => {
  let sum:number = 0
  let cur:number = 1
  for(let i = 1; i <= N; i++){
    cur *= i
    sum += cur
  }
  return sum
}

console.log(f2(4));
