const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


const [V, E] = input[0].split(' ').map(Number);
const [K] = input[1];


const graph = Array.from({length: V + 1}, () => new Array(V + 1).fill(Number.POSITIVE_INFINITY))

for (let i = 1; i < graph.length; i++) {
    graph[i][i] = 0;
}


for (let i = 2; i < input.length; i++) {
    const [u, v, w] = input[i].split(' ').map(Number)
    graph[u][v] = w;
}


const visited = new Array(V + 1).fill(false);
const distanceList = new Array(V + 1).fill(Number.POSITIVE_INFINITY);

graph[K].forEach((elem, index) => {
    distanceList[index] = elem;
})

distanceList[K] = 0;
visited[K] = true;

const getMinIndex = () => {
    let min = Number.POSITIVE_INFINITY;
    let idx = -1;

    for (let i = 1; i < V; i++) {
        if (visited[i]) {
            continue;
        }

        if (distanceList[i] < min) {
            min = distanceList[i];
            idx = i;
        }
    }

    return idx;
}

for (let i = 1; i < V; i++) {
    let idx = getMinIndex();
    visited[idx] = true;

    for (let j = 1; j < V; j++) {
        if (visited[j]) {
            continue;
        }

        distanceList[j] = Math.min(distanceList[j], distanceList[idx] + graph[idx][j])

    }
}

console.log(distanceList.slice(1).map(elem => elem === Number.POSITIVE_INFINITY ? 'INF' : elem).join('\n'))
