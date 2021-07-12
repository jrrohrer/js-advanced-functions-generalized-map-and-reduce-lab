function map(arr, callback) {
  const a = [];
  for (let i = 0; i < arr.length; i++) {
    const arrElement = arr[i];
    a.push(callback(arrElement));
  }
  return a;
}

function reduce(arr, callback, start) {
  let total;
  if (start) {
    total = start;
    for (let i = 0; i < arr.length; i++) {
      total = callback(arr[i], total);
    }
    return total;
  } else {
    total = arr[0];
    for (let i = 1; i < arr.length; i++) {
      total = callback(arr[i], total);
    }
    return total;
  }
}