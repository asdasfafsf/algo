
class Node {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }

    getData = () => {
        return this.data;
    }
}


class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push = (data) => {
        const nextNode = new Node(data, this.top);
        this.top = nextNode;
        this.length++;
    }

    pop = () => {
        const currentHeadNode = this.top;
        const nextHeadNode = currentHeadNode?.next;
        this.top = nextHeadNode ?? null;
        
        if (this.length > 0) {
            this.length--;
        }
        return currentHeadNode?.data ?? null;
    }

    peek = () => {
        return this?.top?.data ?? null;
    }


    isEmpty = () => {
        return this.length === 0
    }

    isFull = () => {
        return this.length > 0;
    }

    size = () => {
        return this.length;
    }
}