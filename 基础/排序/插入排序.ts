// 题目：插入排序，输出数组 arr = [1,3,6,3,1,2,1,9,7,3,5,4,8] 从小到大排序后结果
const arr1:number[] = [1,3,6,3,1,2,1,9,7,3,5,4,8]
const insertSort = (arr:number[]) => {
  if(!Array.isArray(arr) || arr.length < 2) return
  for(let i = 1; i < arr.length; i++){
    let newNumberIndex = i
    while(newNumberIndex - 1 >= 0 && arr[newNumberIndex-1] > arr[newNumberIndex]){
      [arr[newNumberIndex-1],arr[newNumberIndex]] = [arr[newNumberIndex],arr[newNumberIndex-1]]
      newNumberIndex--
    }
  }
  return arr
}

const insertSort1 = (arr:number[]) => {
  if(!Array.isArray(arr) || arr.length < 2) return
  for(let i = 1; i < arr.length; i++){
    for(let j = i - 1; j >= 0 && arr[j] > arr[j+1]; j--){
      [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
    }
  }
  return arr
}

const arr2 = insertSort(arr1)
console.log(arr2?.join(','));
const arr3 = insertSort1(arr1)
console.log(arr3?.join(','));
export {}