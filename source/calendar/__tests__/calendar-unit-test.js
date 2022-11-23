// const { exportAllDeclaration } = require('@babel/types');
const functions = require('../calendar-js.js');

/* Test getDaysInMonth() */
test('Check number of months in Feb, 2002', () => {
    expect(functions.getDaysInMonth(2002,2)).toBe(28);
});
test('Check number of months in Jan, 1923', () => {
    expect(functions.getDaysInMonth(1923, 1)).toBe(31);
});
test('Check number of months in Feb, 2020 (Leap Year)', () => {
    expect(functions.getDaysInMonth(2020,2)).toBe(29);
});

/* Test getFirstDay() */
test('Check first day of Nov, 2022', () => {
    expect(functions.getFirstDay(2022, 11)).toBe(2);
});
test('Check first day of Mar, 2023', () => {
    expect(functions.getFirstDay(2023, 3)).toBe(3);
});
test('Check first day of Feb, 2001', () => {
    expect(functions.getFirstDay(2001, 2)).toBe(4);
});