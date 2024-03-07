/**
 * Solves the traveling salesman problem using dynamic programming.
 * @param {number[][]} dist - The distance between each pair of nodes.
 */
const tsp = (dist) => {
  // JavaScript code for the above approach
  let n = dist.length - 1;

  let MAX = 1000000;

  let memo = new Array(n + 1);

  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Array(1 << (n + 1)).fill(0);
  }

  function fun(i, mask) {
    // base case
    // if only ith bit and 1st bit is set in our mask,
    // it implies we have visited all other nodes already
    if (mask == ((1 << i) | 3)) return dist[1][i];

    // memoization
    if (memo[i][mask] != 0) return memo[i][mask];

    let res = MAX; // result of this sub-problem

    // we have to travel all nodes j in mask and end the
    // path at ith node so for every node j in mask,
    // recursively calculate cost of travelling all nodes in
    // mask except i and then travel back from node j to
    // node i taking the shortest path take the minimum of
    // all possible j nodes

    for (let j = 1; j <= n; j++)
      if (mask & (1 << j) && j != i && j != 1)
        res = Math.min(res, fun(j, mask & ~(1 << i)) + dist[j][i]);
    return (memo[i][mask] = res);
  }

  // Driver program to test above logic
  let ans = MAX;
  console.log( { n})
  for (let i = 1; i <= n; i++) {
    // try to go from node 1 visiting all nodes in
    // between to i then return from i taking the
    // shortest route to 1
    res = fun(i, (1 << (n + 1)) - 1) + dist[i][1];
    ans = Math.min(ans, res);
  }

  return ans;
};

module.exports = {
  tsp,
};
