export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors
      .set(400, 'Неверный запрос')
      .set(401, 'Ошибка авторизации')
      .set(403, 'Доступ запрещен')
      .set(404, 'Ресурс не найден')
      .set(500, 'Внутренняя ошибка сервера')
      .set(501, 'Ошибка метода')
      .set(502, 'Служба сервера недоступна');
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Неизвесная ошибка';
  }
}
