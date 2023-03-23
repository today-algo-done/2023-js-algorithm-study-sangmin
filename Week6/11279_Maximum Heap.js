let fs = require('fs');
let [, ...input] = fs.readFileSync('./dev/stdin').toString().split('\n');
let num = input.map(v => +v);

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    empty() {
        if (this.heap.length == 0) {
            return true;
        }
        return false;
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleup();
    }

    bubbleup() {
        let currentIndex = this.heap.length - 1;

        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);

            if (this.heap[parentIndex] >= this.heap[currentIndex]) {
                break;
            }

            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
            currentIndex = parentIndex;
        }
    }
    extractMax() {
        if (this.heap.length == 1) {
            return this.heap.pop();
        }
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sinkDown(0);

        return max;
    }

    sinkDown(index) {
        const leftidx = 2 * index + 1;
        const rightidx = 2 * index + 2;
        const length = this.heap.length;
        let largestIdx = index;

        if (leftidx < length && this.heap[leftidx] > this.heap[largestIdx]) {
            largestIdx = leftidx;
        }
        if (rightidx < length && this.heap[rightidx] > this.heap[largestIdx]) {
            largestIdx = rightidx;
        }

        if (largestIdx !== index) {
            [this.heap[index], this.heap[largestIdx]] = [this.heap[largestIdx], this.heap[index]]
            [this.heap[index], this.heap[largestIdx]] = [this.heap[largestIdx], this.heap[index]]
            this.sinkDown(largestIdx);
        }
    }
}

const answer = [];
const maxheap = new MaxHeap();
num.forEach(v => {
    if (v == 0) {
        if (maxheap.empty()) {
            answer.push(0);
        } else {
            answer.push(maxheap.extractMax());
        }
    } else {
        maxheap.insert(v);
    }
});

console.log(answer.join('\n'));