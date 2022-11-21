/**
 * Принимает объект, возвращает массив названий свойств. Нельзя пользоваться
 * встроенными статическими методами объекта, используйте цикл
 * @param {Object} object
 * @returns {string[]}
 */
export const keys = (object) => {
  let arr = [];
  for (let item in keys) {
   arr.push(item)
  }
  return arr;
};

/**
 * Принимает объект, возвращает массив значений объекта. Также без использования
 * встроенных методов, юзаем цикл
 * @param {Object} object
 * @returns {any[]}
 */
export const values = (object) => {
  let arr = [];
  for (let item in values) {
    arr.push(values[item])
  }
  return arr;
};


/**
 * Принимаем объект, возвращаем энтри. Все также без методов, используем цикл
 * @param {Object} object
 * @returns {[string, any][]}
 */
export const entries = (object) => {
  let arr = [];
  for (const item in object) {
    let arrNew = [item, object[item]];
    arr.push(arrNew);
  }
  return arr;
};

/**
 * Тут наоборот, мы должны сделать из энтри объект обратно) Можете погуглить
 * оригинальный метод)
 * @param {[string, any][]} entries
 * @returns {Object}
 */
export const fromEntries = (entries) => {
  let obj = {};
  for (let item of entries) {
    obj[item[0]] = item[1];
  }
  return obj;
};
