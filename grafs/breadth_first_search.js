const obj = {

name: "Dasha",
friends: [
{name: "Misha", 
friends: [{name: "Tolya", friends: [{name: "Masha", friends: []}, {name: "Lena", friends: []}]}]
},
{name: "Sasha", 
friends: [{name: "Kolya", friends: [{name:"Lon", friends: []}]}]}
]
};

const massiv = [];

const find_item = (item, profile) =>
{
for (let i of profile.friends)
{
massiv.push(i);
}

for (let y of massiv)
{
if (y.name === item)
{
return y.name;
}
else
{
for (let z of y.friends)
{
massiv.push(z);
}
}
}

return 0;
}

console.log(find_item("Lena", obj));
