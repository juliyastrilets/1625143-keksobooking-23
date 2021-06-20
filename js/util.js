function getRandomNumberInt(min, max) {
  if (min < 0 || max < 0) {
    return 'Вы ввели отрицательное число';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumberFloat(min, max, toFixed = 2) {
  if (min < 0 || max < 0) {
    return 'Вы ввели отрицательное число';
  }
  return ((Math.random() * (max - min + 1)) + min).toFixed(toFixed);
}

export { getRandomNumberFloat, getRandomNumberInt };