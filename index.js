let surnames = ['10', 'juan', '@12', 'null', 'antonioPerezDelCarmen', 'abcdefghtioiasoisdjads', 'Manolo', 'Perez', 'Soledad'];
let escuses = ['OMG?', 'What’s going on?', 'How much is it?', '18', null, 'undefined', function(){}, '18','How much is it?','2' ];
let arr= ['Jeferson', 'Matilda', 'R@fael', '1van', 'Pep3', 'Loquesea', 'Fel1berto', 'Pepit@', 'D@M'];

//Funcion generadora de un numero aleatorio
function generateNumRandom (arr){
    return Math.floor(Math.random()*arr.length);
}
//Funcion para el elimnar del array todos los elementos que no son string
function clearArray (arr){
    let newArr=[];
    for (let i in arr){
        if(typeof (arr[i])==='string'){
            newArr.push(arr[i]);
        }
    } 
    return newArr;
}
//Funcion para darle la vuelta a una unica palabra//
function reverseWord(word){
    let newString = "";
    for (let i = word.length-1; i >=0; i--) {
        newString += word[i];
    }
    return newString;
}
//Funcion para contar las letras que se repiten de una palabra
function countLetter (word){
    let obj={}
    let str=word.toLowerCase()
    for(let i=0 ; i<str.length;i++){
        if(str[i] in obj){
            
            obj[str[i]]=obj[str[i]]+1
        }
        else{
            obj[str[i]]= 1
        }
    }
    return obj
}
//Funcion para eliminar el elemento repetido mediante indexOf
function removeRepeated(arr){
    let newArray = [];
    let arry = clearArray(arr)
    for(let i in arry){
        if(newArray.indexOf(arry[i]) === -1){
            newArray.push(arry[i]);
        }
    }
    return newArray;
}  
//Funcion para dar la vuelta a las palabras de cada elemento del array
function reverseArray(arr){
    let newArray = [];
    let arry = clearArray(arr);
    for(let i in arry){
        newArray.push(reverseWord(arry[i]));
    }
    return newArray;
}
//Funcion que mediante 3 array genera excusas
function generateExcuse (arr1,arr2,arr3){

    let num1=generateNumRandom(clearArray(arr1))
    let num2=generateNumRandom(clearArray(arr2))
    let num3=generateNumRandom(clearArray(arr3))

    return `${arr1[num1]} ${arr2[num2]} ${arr3[num3]} `

}
//Funcion para contar las letras repetidas de cada palabra de un array
function countArr (arr){
    let arry=clearArray(arr)
    let newArr=[];
    for(let i of arry){
        newArr.push(countLetter(i))
    }
    return newArr
}


// console.log(removeRepeated(arr))
// console.log(reverseArray(arr))
// console.log(generateExcuse(arr,escuses,surnames))
console.log(countArr(arr))




