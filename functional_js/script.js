(function () {
  const arr = [1, 2, 3, 4, 5];

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    result.push(currentValue ** 2);
  }

  console.log(result);
})();

(function () {
  const arr = [1, 2, 3, 4, 5];

  const pow = (a) => a ** 2;
  const result = arr.map(pow);

  console.log(result);
})();
