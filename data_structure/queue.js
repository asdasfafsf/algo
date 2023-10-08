class Queue {
    constructor() {
        this.queue = [];
        this.length = 0;
        this.front = -1;
        this.rear = -1;
    }


    enqueue = (data) => {
        if (this.front === -1) {
            this.front++;
        }
        this.rear++;
        this.queue[this.rear] = data;
    }

    dequeue = () => {
        const data = this.queue[this.front];

        if (typeof data === 'unedfined') {
            return null;
        }

        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front++;
        }


        return data;
    }

    peek = () => {
        return this.queue[this.front] ?? null;
    }

    isFull = () => {
        return !this.isEmpty();
    }

    isEmpty = () => {
        return this.peek() === null;
    }
}
