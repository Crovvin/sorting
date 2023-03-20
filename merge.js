function merge(array1, array2) {
  let mergeArray = [];
  let num1 = 0;
  let num2 = 0;

  while (num1 < array1.length && num2 < array2.length) {
    if (array2[num2] > array1[num1]) {
      mergeArray.push(array1[num1]);
      num1++;
    } else {
      mergeArray.push(array2[num2]);
      num2++;
    }
  }

  while (num1 < array1.length) {
    mergeArray.push(array1[num1]);
    num1++;
  }

  while (num2 < array2.length) {
    mergeArray.push(array2[num2]);
    num2++;
  }

  return mergeArray;
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  const middle = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));
  return merge(left, right);
}

module.exports = { merge, mergeSort};