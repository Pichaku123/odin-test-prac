function capitalize(str) {
    if (!str) return "";
    let first = str[0].toUpperCase();
    return first + str.slice(1);
}

function reverseString(str) {
    let arr = str.split("");
    let res = arr.reverse().join("");
    return res;
}

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        if (b === 0) {
            return NaN;
        }
        return a / b;
    },
};

function caesarCipher(str, shift) {
    //a=
    const a = "a".charCodeAt(0);
    const z = "z".charCodeAt(0);
    const A = "A".charCodeAt(0);
    const Z = "Z".charCodeAt(0);
    let res = str.split("");

    for (let i = 0; i < str.length; i++) {
        let curr = str.charCodeAt(i);
        if (curr >= a && curr <= z) {
            curr = ((((curr - a + shift) % 26) + 26) % 26) + a;
        } else if (curr >= A && curr <= Z) {
            curr = ((((curr - A + shift) % 26) + 26) % 26) + A;
        }
        res[i] = String.fromCharCode(curr);
    }

    return res.join("");
}

function analyzeArray(arr) {
    let mini = arr[0];
    let maxi = arr[0];
    let sum=0;
    for (let x of arr) {
        sum += x;
        mini = Math.min(x, mini);
        maxi = Math.max(x, maxi);
    }
    return {
        average: sum / arr.length,
        min: mini,
        max: maxi,
        length: arr.length,
    };
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
};
