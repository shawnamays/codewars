//split strings | 6 kyu

function solution(str){
    //split a string into pairs of two characters
      
       let arr = str.split('')
       let answer = []
    
       for(let i = 0; i<arr.length; i+=2){
         if(arr[i+1]) answer.push(arr[i]+arr[i+1])
         else answer.push(arr[i]+'_')
       }
    
      return answer
    }