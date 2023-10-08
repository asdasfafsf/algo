class Stack {

    constructor() {
        this.top = -1;
        this.arr = [];
    }


    push = (data) => {
        arr[++top] = data;
    }

    pop = () => {
        if (top < 1) {
            return null;
        }

        return arr[top--];
    }
}