const {summaryTwoNumbers, calculateTwoNumbers, getUsers} = require('../functions/first');

const testAsyncData = {
  data: [
    {id: 7, email: "michael.lawson@reqres.in", first_name: "Michael", last_name: "Lawson", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"},
    {id: 8, email: "lindsay.ferguson@reqres.in", first_name: "Lindsay", last_name: "Ferguson", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"},
    {id: 9, email: "tobias.funke@reqres.in", first_name: "Tobias", last_name: "Funke", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"},
    {id: 10, email: "byron.fields@reqres.in", first_name: "Byron", last_name: "Fields", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"},
    {id: 11, email: "george.edwards@reqres.in", first_name: "George", last_name: "Edwards", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"},
    {id: 12, email: "rachel.howell@reqres.in", first_name: "Rachel", last_name: "Howell", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"}
  ],
  length: 6,
  page: 2,
  per_page: 6,
  total: 12,
  total_pages: 2,
};

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
    });

    it('two plus two', () => {
      const value = 2 + 2;

      expect(value).not.toBe(5);
      expect(value).not.toBeNull();
      expect(value).toBeDefined();
      expect(value).not.toBeUndefined();
      expect(value).not.toBeFalsy();
      expect(value).toBeTruthy();
    });

    it('is string test', () => {
      const str = 'Hello world!';

      expect(str).toMatch(/ello/);
      expect(str).not.toMatch(/jake/);
    });

    it('Проверка массива', () => {
      const array = ['red', 'blue', 'yellow', 'black'];

      expect(array).toContain('red');
      expect(array).not.toContain('brown');
    });

    it('Проверка ошибок', () => {
      function compileCode () {
        throw new Error('Use a normal pc');
      }

      expect(compileCode).toThrow();
      expect(compileCode).toThrow(Error);
      expect(compileCode).toThrow('Use a normal pc');
      expect(compileCode).toThrow(/pc/);
    });

    it('Тест асинхронных функций с использованием await', async () => {
      const users = await getUsers();
      expect(users).toEqual(testAsyncData);
    });

    it('Тест асинхронных функций с использованием обещаний', () => {
      return getUsers().then(res => {
        expect(res).toEqual(testAsyncData);
      });
    });
});
