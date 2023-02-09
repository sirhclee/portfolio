function fibs(num){ //iterative
    let steps = [0,1]; 
    for (let i=2; i<num; i++){
        steps[i] = steps[i-1]+steps[i-2]; 
    }
    return steps

}

let max = 0;
let i = 2; 
let steps = [0,1]; 
function fibsRec(num){ //recursive
    max = Math.max(num, max); 
    if (i<max){
        steps[i] = steps[i-1] + steps[i-2]; 
        i++; 
        console.log(i)
        return fibsRec(i) 
    }
    else return steps 

}

const mergeSort = (array)=>{
    if (array.length <= 1) {console.log(array);
    return array;} //base case to pass values into the merge(left,right) function

    const mid = Math.floor(array.length/2); 
    const left = mergeSort(array.slice(0, mid)); //split left half; run recursively to split again
    const right = mergeSort(array.slice(mid)); //split right half
    console.log(`Let us sort: ${left} and ${right}`)
    return merge(left, right); // returned merged array
    
};
const merge = (left, right)=>{
    const mergedArray = []; 
    while (left.length>0 && right.length>0){ //repeat for whole length
        const findLower = left[0]<right[0]? left:right; //determine which half has lower value
        const mergeElement = findLower.shift(); //pull lower value from lower half
        mergedArray.push(mergeElement); //push value into merged array 
        
    }
    let a = mergedArray.concat(left,right)
    console.log(`The merge is: ${a}`)
    return a; //returns merged array to feed into mergeSort

}



let array =[400,1,8,6,3,9,5,2];
let sort = mergeSort(array);
// a = fibs(8); 
// console.log(a); 
// b = fibsRec(8);
// console.log(b);