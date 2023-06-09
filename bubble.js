function bubbleSort(array) {
    const swap = (array, index1, index2) => {
        [array[index1], array[index2]] = [array[index2], array[index1]];
    };
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
          if (array[j] > array[j + 1]) {
            swap(array, j, j + 1);
          }
        }
    }
    return array;
}

module.exports = bubbleSort;
