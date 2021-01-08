const mass = [1,3,4,6,7];

const find = (arr, item, begin = 0, end = arr.length-1) =>
{
console.log('begin = ', begin);
console.log('end = ', end);

let mid = Math.floor((begin + end)/2);

console.log('mid = ', mid);

if(item === arr[mid])
{
return mid;
}
else if (begin >= end)
{
return null;
}
else if (item > arr[mid])
{
begin = mid + 1;
find(arr, item, begin, end);
}
else
{
end = mid - 1;
find(arr, item, begin, end);
}

};

find(mass, 9);
