class que2 {

    constructor() {
        this.size = 0;
        this.head = {
            data: null,
            next: null,
        };
        this.tail = {
            data: null,
            next: null,
        };
    }

    size() {
        return this.size;
    };

    front() {
        if (this.isEmpty()) return -1;
        return this.head.data;
    }

    back() {
        if (this.isEmpty()) return -1;
        return this.head.data;
    }

    isEmpty() {
        return this.size <= 0;
    }

    push(data) {
        const oldtail = this.tail;
        this.tail = {
            data,
        }
        if (this.isEmpty()) {
            this.head = this.tail;
        } else {
            oldtail.next = this.tail;
        }
        this.size++;
    }
    pop() {
        if (this.isEmpty()) return -1;
        const del = this.head.data;
        this.head = this.head.next;
        this.size--;
        if (this.isEmpty()) this.tail = null;
        return del;
    }


}

let fs = require('fs');
let input = fs.readFileSync('/GitHub/stdin').toString().split('\n');
let result = "";

for (let i = 1; i < input.length; i++) {
    if (input[i] !== '') {
        const [ord, val] = input[i].split(" ");
        switch (ord) {
            case "push":
                que2.push(num(val));
                break;
            case "pop":
                result += (que2.pop() + "\n");
                break;
            case "size":
                result += (que2.size() + "\n");
                break;
            case "empty":
                result += (que2.isEmpty() ? "1\n" : "0\n");
                break;
            case "front":
                result += (que2.front() + "\n");
                break;
            case "back":
                result += (que2.back() + " \n");
                break;
        }
    }
}


//que2(15, push, 1, push, 2, front, back, size, empty, pop, pop, pop, size, empty, pop, push, 3, empty, front);
