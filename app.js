

const fs = require('fs')


const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')

const [N, M] = input.shift().split(' ').map(Number);
const arr = input.map(elem => elem.split(''));
const visited = arr.map(elem => elem.map(e => false));



const dp = [[1, 0], [0, 1], [-1, 0], [0, -1]];
const queue = [[0, 0]];
visited[0][0] = true;
let current = 0;

let count = 0;

while (queue.length !== current) {
    const [cy, cx] = queue[current];
    visited[cy][cx] = true;

    for (let i = 0; i < dp.length; i++) {
        const [dy, dx] = dp[i];
        const [tx, ty] = []
    }

    current++;
}

