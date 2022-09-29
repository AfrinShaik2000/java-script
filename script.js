//printing the output
console.log("hello world!");

//Finding the length
var a = [1,2,3,1,9];
console.log(a.length);

//Removing the element
a.pop();
console.log(a);

//concating
var firstName = "Afrin";
var secondName = "Shaik";
var fullName = firstName + secondName;
console.log(fullName);

//array
var b = ["This","dog","is","big"]
console.log(b[3]);
console.log(b[6]);

//sum of the numbers
var c = 22;
var d = 33;
var sum = c+d;
console.log(sum);

//nested array
var array = [["first","second","third","fourth"],["fifth","sixth","seventh"]];
console.log(array);

//concatenating string with plus operator
var firstName="Afrin";
var secondName="Shaik";
console.log(firstName +" "+ secondName);

//concatenating string with += operator
var name1="dog";
var name2="animal";
console.log(name1+=name2);

//for loop
for(i=0;i<=4;i++){
    if(i<=4){
        console.log("value of i is less than four");
    }
    else{
        console.log("value of i is greater than four");
    }    
}

//push
var myarr = [0,22,14,12,11];
myarr.push(80);
console.log(myarr);

var ourarr = ["cat","animal","23","dar"]
ourarr.push("dog","elephant");
console.log(ourarr);

//shift - to remove first element of an array
var removeFirstValue = ourarr.shift();
console.log(removeFirstValue);

//unshift
var data = ["fasf","gdsy"]
var add= data.unshift("boat");
console.log(data);

//function
function functionname(){
    console.log("Hello World");
}
functionname();

//passing values to functions using arguments
function addition(a,b){
    console.log(a+b);
}
addition(33,44)