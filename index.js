function capitalize(str) {
    let first = str[0].toUpperCase();
    return first + str.slice(1);
}

function reverseString(str) {
    let arr = str.split("");
    let res = arr.reverse().join("");
    return res;
}

class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add(){
        return this.a + this.b;
    }
    subtract(){
        return this.a - this.b;
    }
    multiply(){
        return this.a * this.b;
    }
    divide(){
        return this.a / this.b;
    }
}

const calc= new Calculator();
module.exports = capitalize;