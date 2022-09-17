// 题目：选择排序，输出数组 arr = [1,3,6,3,1,2,1,9,7,3,5,4,8] 从小到大排序后结果
const arr1 = [1,3,6,3,1,2,1,9,7,3,5,4,8]
const selectSort = (arr:number[]) => {
  if(!Array.isArray(arr) || arr.length < 2) return
  for(let i = 0; i < arr.length - 1; i++){
    let minValueIndex = i
    for(let j = i + 1; j < arr.length; j++){
      minValueIndex = arr[j] < arr[minValueIndex] ? j : minValueIndex
    }
    if(minValueIndex !==i){
      [arr[i],arr[minValueIndex]] = [arr[minValueIndex],arr[i]]
    }
  }
  return arr
}
const arr2 = selectSort(arr1)
console.log(arr2?.join(','));
export {}