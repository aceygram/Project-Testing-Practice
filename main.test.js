import {returnResult, capitalize, reverseString, calculator, caesarCipher, analyzeArray} from './main.js'

// const returnResult = require('./main.js')

test('returns a word correctly', () => {
    expect(returnResult()).toEqual('result');
})


test('returns a word capitalized', () => {
    expect(capitalize('aceygram')).toEqual('ACEYGRAM');
})

test('returns a word reversed', () => {
    expect(reverseString('ACEYGRAM')).toEqual('MARGYECA');
})

test('calculates the sum of two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
})

test('substraction of two numbers', () => {
    expect(calculator.substract(10, 3)).toBe(7);
})

test('calculates the division of two numbers', () => {
    expect(calculator.divide(100, 5)).toBe(20);
})

test('calculates multiplication of two numbers', () => {
    expect(calculator.multiply(4, 2)).toBe(8);
})

test('Returns ceaser cipher code', () => {
    expect(caesarCipher('xyz', 3)).toEqual('abc');
})

test('Returns ceaser cipher code', () => {
    expect(caesarCipher('HeLLo', 3)).toEqual('KhOOr');
})

test('Returns ceaser cipher code', () => {
    expect(caesarCipher('Hello, World', 3)).toEqual('Khoor, Zruog');
})

test('returns an object with the following properties: average, min, max, and length', () => {
    const object = [1,8,3,4,2,6];
    
    expect(analyzeArray(object)).toEqual(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        }
    )
})




