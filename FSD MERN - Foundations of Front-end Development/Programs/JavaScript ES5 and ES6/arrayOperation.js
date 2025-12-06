// let num1 = [];      // literal style array object created 
// let num2 = new Array(); // created memory using new keyword or constructor 
// let num3 = [10,20,30,40,50,60,"Raj",true];
// console.log("size is "+num1.length);    // property 
// console.log("size is "+num2.length);    // property 
// console.log("size is "+num3.length);    // property 
// console.log(num3);      // it display all elements in string format 
// console.log("Get value using index position "+num3[0])
// console.log("Get value using index position "+num3[1])
// num3.push(100);     // add the element at last 
// num3.push(200);     // add the element at last 
// num3.unshift(300);      // add the element at starting position 
// num3.unshift(400);
// console.log(num3);      // it display all elements in string format 
// console.log("size is "+num3.length);    // property 
// num3.pop();     // remove element from last 
// num3.shift();   // remove element from starting position 
// console.log(num3);      // it display all elements in string format 

//splice method help add or remove element in between from array
let num4 = [100,200,300,400,500]
console.log(num4)
//num4.splice(2,1);       // 1st parameter index position and 2nd parameter number of element to delete 
//num4.splice(2,2);       // 1st parameter index position and 2nd parameter number of element to delete 
//num4.splice(2,0,1000);// 1st parameter index, 2nd number of element to delete and 3rd,4th,5th element add
//num4.splice(3,0,1000,2000,3000);
num4.splice(3,2,4000,5000);
console.log(num4)