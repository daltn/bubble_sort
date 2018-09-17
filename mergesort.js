function split(wholeArray) {
  if (wholeArray.length === 1) {
    return wholeArray;
  } else {
    let firstHalf = wholeArray.slice(0, wholeArray.length / 2);
    let secondHalf = wholeArray.slice(wholeArray.length / 2);

    return [firstHalf, secondHalf];
  }
}

function merge(arr1, arr2) {
  let sortedArray = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] > arr2[0]) {
      let elem = arr2.shift();
      sortedArray.push(elem);
    } else {
      let elem2 = arr1.shift();
      sortedArray.push(elem2);
    }
  }

  if (arr2.length === 1) {
    sortedArray.push(arr2[0]);
  }
  if (arr1.length === 1) {
    sortedArray.push(arr1[0]);
  }

  return sortedArray;
}

function mergeSort(array) {
  // Base Case
  if (array.length === 1) {
    return array;
  }
  // if (split(array)[0].length === 1 && split(array)[1].length === 1) {
  //   return split(array);
  // }
  else {
    let leftSide = split(array)[0];
    let rightSide = split(array)[1];
    return merge(mergeSort(leftSide), mergeSort(rightSide));
  }
}

// console.log(mergeSort([1, 3, 2, 4, 60]));
// console.log(mergeSort([2, 4, 50, 32]));
