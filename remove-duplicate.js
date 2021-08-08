/*
const names = ['abul','babul','cabul','dabul','ebul','fabul', 'babul','ebul','babul','gabul','abul','habul','dabul'];


function removeDuplicate(names){
    const unique = [];

    // for( let i = 0; i< names.length; i++){
    //     const element = names[i];
    //     // console.log(element);
    // }

    for (const element of names){
        console.log(element);
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
*/


// remove duplicate number from array

const numbers = [1,2,1,2,4,3,5,5,6,7,8,8,4,5,9,10];

function removeNumbers(numbers){
    const unique = [];

    for(const element of numbers){
        console.log(element);
        if(unique.indexOf(element ) == -1 ) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNumbers = removeNumbers(numbers);
console.log(uniqueNumbers);