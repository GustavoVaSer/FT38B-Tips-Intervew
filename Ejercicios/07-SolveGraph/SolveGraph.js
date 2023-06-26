function SolveGraph(graph, start, end) {
  const visited = new Set();

  function dfs(current) {
    visited.add(current);

    if (current === end) {
      return true;
    }

    const neighbors = graph[current];

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor)) {
          return true;
        }
      }
    }

    return false;
  }

  return dfs(start);
}

module.exports = SolveGraph;
