const {createUrl, clearString} = require('../functions/second');

const url = `?name=ivan&surname=petrov`;

const urlObject = {
  name: 'ivan',
  surname: 'petrov',
};

const clearObject = {};

const clearUrl = '';

const urlObjectWithUndefined = {
  name: 'ivan',
  surname: null,
  age: undefined,
};

const urlWithUndefined = '?name=ivan';

describe('Тестирование функции createUrl', () => {
  it('Формирование заполненного url', () => {
    expect(createUrl(urlObject)).toEqual(url);
  });

  it('Формирование url из пустого объекта', () => {
    expect(createUrl(clearObject)).toEqual(clearUrl);
  });

  it('Формирование url со свойствами undefined | null', () => {
    expect(createUrl(urlObjectWithUndefined)).toEqual(urlWithUndefined);
  });
});

const dirtyStr = ' s    sdfsdf22 23r_f- - sdf dd';
const clearStr = 'ssdfsdf2223r_f--sdfdd';

describe('Тестирование функции clearString', () => {
  it('Проверка строки', () => {
    expect(clearString(dirtyStr)).toEqual(clearStr);
  });
});