import { sum, mult, sub } from './Counter';
let a: number;
let b: number;

beforeEach(() => {
    a = 5;
    b = 6;
});

test('Initial test', () => {
    const message = "It should work.";
    expect('It should work.').toEqual(message);
});

test('It should perform sum', () => {
    expect(sum(a, b)).toEqual(11);
});

test('It should perform mult', () => {
    expect(mult(a, b)).toBe(30);
});

test('It should perform sub', () => {
    expect(sub(a, b)).toBe(-1);
});