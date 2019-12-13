const {summaryTwoNumbers, calculateTwoNumbers} = require('../functions/first');

describe('Первые тесты', () => {
    it('Функция summaryTwoNumbers', () => {
        const inData = [
            [4, 5],
            [12, 1],
            [-9, 0],
            [-90, 30],
        ];

        const checkResult = [9, 13, -9, -60];

        const result = inData.map(([a, b]) => {
            return summaryTwoNumbers(a, b);
        });

        expect(checkResult).toEqual(result);
    });

    it('Проверка функции калькулятора', () => {
      const inData = [
        [4, 7, '+'],
        [7, 1, '-'],
        [1, 3, '*'],
        [6, 2, '/'],
        ['tr', 5, '+'],
        [4, 6, 'l'],
        [1, null, '-'],
      ];

      const testResult = [11, 6, 3, 3, NaN, NaN, NaN];

      const result = inData.map(([first, second, operation]) => {
        return calculateTwoNumbers(first, second, operation);
      });

      expect(testResult).toEqual(result);
    })
});
