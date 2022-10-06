const findPies = (arr, s) => {
    let min = Math.min(...arr)
    if(s < min) return -1
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if(map.get(arr[i])){
            map.set(arr[i],map.get(arr[i])+1 )
        }else{
            map.set(arr[i], 1)
        }
    }
    map.set(0,1)
    let sweetness = []
    for(let [keys,values] of map){
        sweetness.push(keys)
    }
    sweetness = sweetness.sort((a,b) => {
        return a-b
    })
    return sweetness.slice(0,s/2)
}

console.log(findPies([1, 2, 3, 2, 1],6))