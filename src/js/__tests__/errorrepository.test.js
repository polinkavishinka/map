import ErrorRepository from '../errorrepository';

// Решение 1
/*
test('Ошибка описанная в базе', () => {
  const codeErr = new ErrorRepository();
  expect(codeErr.translate(400)).toBe('Неверный запрос');
});
*/
// Можно написать так на каждую ошибку в базе
/*
test('Неизвесная ошибка', () => {
  const codeErr = new ErrorRepository();
  expect(codeErr.translate(1000)).toBe('Неизвесная ошибка');
});
*/

// Решение 2

describe('Тестируем ошибки:', () => {
  const codeErr = new ErrorRepository();
  const repErr = [
    [400, 'Неверный запрос'],
    [401, 'Ошибка авторизации'],
    [403, 'Доступ запрещен'],
    [404, 'Ресурс не найден'],
    [500, 'Внутренняя ошибка сервера'],
    [501, 'Ошибка метода'],
    [502, 'Служба сервера недоступна'],
    [11111, 'Неизвесная ошибка'],
  ];
  // console.log(typeof (baseErr));

  test.each(repErr)('Тест ошибки (%s) - (%s)', (code, expected) => {
    // console.log(code);
    // console.log(expected);
    expect(codeErr.translate(code)).toBe(expected);
  });
});

// `Функция вернет строку ошибки ${repErr}`

// const levels = [['manager'], ['supervisor']]
// const privileges = [['badges', 'toContain', 'badge-'], ['level', 'toBe', '']]

// describe.each(levels)('When I am a %s', (level) => {
//   test.each(privileges)(`I should have a ${level} %s`, (kind, assert, prefix) => {
//     const employee = new Employee({ level })

//     expect(employee[kind])[assert](`${prefix}${level}`)
//   })
// })
