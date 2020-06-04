'use strict';

/*
 * Complete the 'findCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. WEIGHTED_INTEGER_GRAPH graph
 *  2. INTEGER minDistance
 *  3. INTEGER_ARRAY company
 */

/*
 * For the weighted graph, <name>:
 *
 * 1. The number of nodes is <name>Nodes.
 * 2. The number of edges is <name>Edges.
 * 3. An edge exists between <name>From[i] and <name>To[i]. The weight of the edge is <name>Weight[i].
 *
 */

function findCount(graphNodes, graphFrom, graphTo, graphWeight, minDistance, company) {
  let count = graphNodes;
  const createGraph = [...graphFrom, ...graphTo];
  const n = createGraph.length;
  for(let i = 0; i < n; i++){
    if(graphWeight[i] > minDistance)
      count++;
  }
  return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const graphNodesEdges = readLine().split(' ');

    const graphNodes = parseInt(graphNodesEdges[0], 10);
    const graphEdges = parseInt(graphNodesEdges[1], 10);

    let graphFrom = [];
    let graphTo = [];
    let graphWeight = [];

    for (let i = 0; i < graphEdges; i++) {
        const graphFromToWeight = readLine().split(' ');

        graphFrom.push(parseInt(graphFromToWeight[0], 10));
        graphTo.push(parseInt(graphFromToWeight[1], 10));
        graphWeight.push(parseInt(graphFromToWeight[2], 10));
    }

    const minDistance = parseInt(readLine().trim(), 10);

    const companyCount = parseInt(readLine().trim(), 10);

    let company = [];

    for (let i = 0; i < companyCount; i++) {
        const companyItem = parseInt(readLine().trim(), 10);
        company.push(companyItem);
    }

    const result = findCount(graphNodes, graphFrom, graphTo, graphWeight, minDistance, company);

    ws.write(result + '\n');

    ws.end();
}
