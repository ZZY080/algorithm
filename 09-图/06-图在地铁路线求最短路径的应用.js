// 1.图
// class Graph {
//   constructor() {
//     this.adjacencyList = {};
//   }

//   // 添加站点
//   addStation(station) {
//     if (!this.adjacencyList[station]) {
//       this.adjacencyList[station] = [];
//     }
//   }

//   // 添加连接站点的边和距离
//   addEdge(station1, station2, distance) {
//     this.adjacencyList[station1].push({ station: station2, distance });
//     this.adjacencyList[station2].push({ station: station1, distance });
//   }
// }

// 2.最短路线推荐：Dijkstra 算法
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // 添加站点
  addStation(station) {
    if (!this.adjacencyList[station]) {
      this.adjacencyList[station] = [];
    }
  }

  // 添加边
  addEdge(station1, station2, distance) {
    this.adjacencyList[station1].push({ station: station2, distance });
    this.adjacencyList[station2].push({ station: station1, distance });
  }

  // Dijkstra 最短路径算法
  findShortestPath(start, end) {
    const distances = {};
    const priorityQueue = new PriorityQueue();
    const previous = {};
    let path = []; // 返回的最短路径
    let smallest;

    // 初始化所有站点的距离
    for (let station in this.adjacencyList) {
      if (station === start) {
        distances[station] = 0;
        priorityQueue.enqueue(station, 0);
      } else {
        distances[station] = Infinity;
        priorityQueue.enqueue(station, Infinity);
      }
      previous[station] = null;
    }

    // 循环直到队列为空
    while (priorityQueue.values.length) {
      smallest = priorityQueue.dequeue().val;

      if (smallest === end) {
        // 我们已经找到最短路径，构建 path 数组
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];

          // 计算邻居节点的新距离
          let candidate = distances[smallest] + nextNode.distance;
          let nextNeighbor = nextNode.station;

          if (candidate < distances[nextNeighbor]) {
            // 更新最短路径和之前的节点
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            priorityQueue.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    // 最后返回起点到终点的路径
    return path.concat(smallest).reverse();
  }
}

const subway = new Graph();

// 添加站点
subway.addStation("A");
subway.addStation("B");
subway.addStation("C");
subway.addStation("D");
subway.addStation("E");

// 添加站点之间的连接和距离
subway.addEdge("A", "B", 5);
subway.addEdge("A", "C", 10);
subway.addEdge("B", "C", 3);
subway.addEdge("B", "D", 2);
subway.addEdge("C", "E", 7);
subway.addEdge("D", "E", 1);

// 查找从 A 到 E 的最短路径
const shortestPath = subway.findShortestPath("A", "E");
console.log(`最短路径: ${shortestPath.join(" -> ")}`);
