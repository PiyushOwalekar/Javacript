function function_name(para)
{
    //do something
    console.log(data);
    return "values";
}

function sumofTwoNumbers(para1, para2) {
    return para1 + para2;
}

const sumofTwoNumbersUsingArrowFunction = (para1, para2) => para1 + para2;

console.log(sumofTwoNumbers(1, 2)); //3
console.log(sumofTwoNumbersUsingArrowFunction(1, 2)); //3
sumofTwoNumbers;

function SayHello(fbname, lname) 
{
    console.log('Hello ${fbname} ${lname}');
}

function addition(num1, num2) 
{
    return num1 + num2;
}
console.log(addition(1)); 

function divide(num1, num2) 
{
    return function () {
        return num1 / num2;
    }
}

SayHello("Satvik"); //Hello Satvik undefined


let greet = function SayHello(fbname, lname) 
{
    console.log('Hello ${fbname} ${lname}');
}

greet("Satvik", "Kumar"); //Hello Satvik Kumar
