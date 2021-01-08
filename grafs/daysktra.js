const grafs = {start_node: {B: 2, C: 5, D: 12}, B: {start_node: {}, C: 1, D: 7}, C: {D: 1}, D: {}};

const grafs_costs = {B: 2, C: 5, D: 12};

const parents = {B: grafs.start_node, C: grafs.start_node, D: grafs.start_node};

verified_nodes = [];

const find_min_cost = (costs) =>
{
let min = Infinity;
let key = 0;

for (let [keys, value] of Object.entries(costs))
{
if ((value < min) && (verified_nodes.indexOf(keys) === -1))
{
min = value;
key = keys;
}
}

return key;
};

let node = find_min_cost(grafs_costs);

while(Object.keys(grafs_costs).length !== verified_nodes.length)
{

let costs = grafs_costs[node];
let neighbors = grafs[node];

for (let item of Object.keys(neighbors))
{
let new_cost = costs + neighbors[item];
if (grafs_costs[item] > new_cost)
{
grafs_costs[item] = new_cost;
parents[item] = node;
}
}
verified_nodes.push(node);

node = find_min_cost(grafs_costs);
}
