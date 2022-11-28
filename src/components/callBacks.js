export const checkCount = (elem, array)=>{
    let count =0;
     for(let i=0; i<array.length; i++){
        if(elem ===array[i]){
         count++
        }
     }
     return count
}

export const yearsLabels =[]
for( let i=1984; i<=2022; i++){
   yearsLabels.push(i)
}
export  function getRandomColor() {
        
   var letters = '0123456789ABCDEF'.split('');
   var color = '#';
   for (var i = 0; i < 6; i++ ) {
       color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}
export const colorArray = (arr)=>{
   const colors=[]
    for(let i=0; i<Object.keys(arr).length; i++){
      colors.push(getRandomColor())
    }
    return colors
  }