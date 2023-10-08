
class Node {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }
}


class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    push = (data) => {
        const nextNode = new Node(data);

        if (this.front == null) {
            this.front = nextNode;
        } else {
            this.rear.next = nextNode;
        }

        this.rear = nextNode;
        length++;
    }

    pop = () => {
        if (length > 0) {
            length--;
        }

        const front = this.front;
        const newFront = front.next;
        front.next = undefined;

        this.front = newFront;
        
        return front.data;
    }

    peek = () => {
        return this.front.data ?? null
    }


    isEmpty = () => {
        return this.front === null;
    }

    isFull = () => {
        return this.front !== null;
    }

    size = () => {
        return this.length;
    }
}