const find_small_index_and_value = (arr) =>
{
let small_index = 0;

for (let i = 0; i < arr.length; i++)
{
 if (arr[i] < arr[small_index])
{
small_index = i;
}
}
console.log('small_index = ', small_index);
return small_index;
};


const find_select_sort = (arr, mass = []) =>
{

if (arr.length === 0)
{
console.log('mass = ', mass);
return mass;
}
else
{
mass.push(arr[find_small_index_and_value(arr)]);
arr.splice(find_small_index_and_value(arr), 1);
find_select_sort(arr, mass);
}
};

let test_mass = [3,2,6,1,3,4,9,0];
find_select_sort(test_mass);
