
const mass = [7,0,5,12,65,43,21,89,100,3,1,9,4,4,5,6,9,8,5,7,3,2,8,10];
let result = [];

const fun = (arr) => {

console.log("length", arr.length);
console.log("arr", arr);


if (arr.length === 1)
{
result.push(arr[0]);
return arr;
}
else if (arr.length === 0)
{
return arr;
}
else
{
let less_mass = [];
let big_mass = [];


let opora = arr[0];
console.log("opora", opora);
for (let i = 1; i < arr.length; i++)
{
if (arr[i] < opora)
{
less_mass.push(arr[i]);
}
else
{
big_mass.push(arr[i]);
}
}

console.log("less", less_mass);
console.log("big", big_mass);

fun(less_mass); 
result.push(opora);
fun(big_mass);

console.log("result", result);
return result;
}
}	

console.log(fun(mass));
