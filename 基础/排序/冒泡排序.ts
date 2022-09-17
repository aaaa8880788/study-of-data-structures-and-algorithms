// 题目：冒泡排序，输出数组 arr = [1,3,6,3,1,2,1,9,7,3,5,4,8] 从小到大排序后结果
const arr1:number[] = [1,3,6,3,1,2,1,9,7,3,5,4,8]
const bubbleSort = (arr:number[]) => {
  if(!Array.isArray(arr) || arr.length < 2) return
  for(let i = 0; i < arr.length - 1; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[j] > arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  return arr
}
const arr2 = bubbleSort(arr1)
console.log(arr2?.join(','));
export {}