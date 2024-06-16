
//Exercise -1

//find Prime Numbers by using JS

var numbers=prompt("enter number")
if(number==1){
    console.log(`${number}is not prime  neither composite`)
}else if(number>1){
    console.log(`prime number of ${number} is not posible`)
}else
 for(let i=2;1<number;i++ ){
    if(number%i==0){
        var result=`${number} is not prime number`
        break;
    }else{
        var result=`${number} is prime number`
    }
    console.log(result)
}

//Exercise -2

//By using JS reverse a string

const reverseString=(str)=>{
var strToArray=str.split("")
var arrReverse=strToArray.reverse()
var strReverse=arrReverse.join("")
return strToArray
}
console.log(reverseString("butter"))
// reverseString("butter")

//Exercise -3

//By using JS Swap two variable without using third

let a = 7;
let b = 8;
//with using Third variable
let temp=a;
 a = b
 b = temp
 //without using third variable
 [a,b]=[b,a]
 console.log(`value of a is ${a} and value of b is ${b}`)