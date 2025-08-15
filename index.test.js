const {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} = require("./index");

//for capitalize
test("random", () => {
    expect(capitalize("racecar")).toBe("Racecar");
});

test("capitalize empty string", () => {
    expect(capitalize("")).toBe("");
});

//for reverseString
test("testing reverse", () => {
    expect(reverseString("Racecar")).toBe("racecaR");
});

//for calculator
test("calculator add", () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test("calculator subtract", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});

test("calculator multiply", () => {
    expect(calculator.multiply(4, 3)).toBe(12);
});

test("calculator divide", () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test("calculator divide by zero returns NaN", () => {
    expect(calculator.divide(10, 0)).toBeNaN();
});

//caesarShift
test("wrapping", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("preserves case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("punctuation unchanged", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("negative shifts", () => {
    expect(caesarCipher("abc", -3)).toBe("xyz");
});

test("0 shift = no changes", () => {
    expect(caesarCipher("Hello, World!", 0)).toBe("Hello, World!");
});

//analysearray
// Analyze Array Tests
test('normal array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });