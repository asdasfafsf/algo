class MaxHeap {
    constructor() {
        this.arr = [null,];
    }


    swap = (index1, index2) => {
        [this.arr[index1], this.arr[index2]] = [this.arr[index2], this.arr[index1]];
    }

    push = (data) => {
        this.arr.push(data);

        let currentIndex = this.arr.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);

        while (currentIndex > 1 && this.arr[parentIndex] < this.arr[currentIndex]) {
            this.swap(currentIndex, parentIndex)
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }


    pop = () => {
        const root = this.arr[1];

        if (this.arr.length <= 2) {
            this.arr = [null];
        } else {
            this.arr[1] = this.arr.pop();
        }

        let currentIndex = 1;
        let leftIndex = currentIndex * 2;
        let rightIndex = currentIndex * 2 + 1;

        // if (!this.arr[leftIndex]) {
        //     return root;
        // }

        // if (!this.arr[rightIndex]) {
        //     if (this.arr[leftIndex] > this.arr[currentIndex]) {
        //         this.swap(leftIndex, currentIndex)
        //     }

        //     return root;
        // }

        while( (this.arr[leftIndex]) > this.arr[currentIndex] || this.arr[rightIndex] > this.arr[currentIndex]) {
            const targetIndex = this.arr[rightIndex] > this.arr[leftIndex] ? rightIndex : leftIndex;
            this.swap(currentIndex, targetIndex);
            currentIndex = targetIndex;
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }


        return root;
    }

    peek = () => {
        return this.arr[1];
    }
}


const maxHeap = new MaxHeap();

maxHeap.push(1);
maxHeap.push(10)
maxHeap.push(5)
maxHeap.push(100)
maxHeap.push(8)

console.log(maxHeap.pop())
console.log(maxHeap.pop())
console.log(maxHeap.pop())
console.log(maxHeap.pop())
console.log(maxHeap.pop())
