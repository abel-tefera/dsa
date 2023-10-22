// My impl - not working for big int
const addBinaryA = (a, b) => {
    let num1 = 0;
    let num2 = 0;
    let res = 0;
    let binary = "";

    for (let i = a.length - 1; i >= 0; i--) {
        const char = a.charAt(i);
        if (char === "1") {
            num1 += Math.pow(2, i)
        }
    }

    for (let i = b.length - 1; i >= 0; i--) {
        const char = b.charAt(i);
        if (char === "1") {
            num2 += Math.pow(2, i)
        }
    }

    res = num1 + num2;

    while (res > 0) {
        if (res & 1) {
            binary = "1" + binary;
        } else {
            binary = "0" + binary;
        }
        res = res >> 1;
    }
    return binary;
};

// Model solution
const addBinary = (a, b) => {
    const aBin = `0b${a}`
    const bBin = `0b${b}`
    const sum = BigInt(aBin) + BigInt(bBin)
    return sum.toString(2)
};

let a = "11"
let b = "1"

console.log(addBinary(a, b))