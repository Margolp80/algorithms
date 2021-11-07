
const insert =(array,index,value)=>{
    return [].concat(array.slice(0,index),value,array.slice(index,array.length))
}
// PARAMS=([1,2],3) OUT=[[3,1,2],[1,3,2],[1,2,3]]
const merge=(arr,next)=>{
   return  arr.reduce((prev,curr,index)=>
       [...prev,insert([...arr],index+1,next)],[[next,...arr]])
}
//PARAMS=([1],2) OUT=[[1,2],[2,1]]
const map =(list,next)=>{
    return list.flatMap(arr=>merge(arr,next))
}
const permutations =(str)=>{
    const strArr = str.split('').slice(1)
    return strArr.reduce((acc,cur)=>map(acc,cur),[[str[0]]]).map(res=>res.join())
}


