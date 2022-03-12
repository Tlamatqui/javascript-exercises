const removeFromArray = function(arr, ...remove) {
  let array = arr;
  let removeValues = remove;

  for (i=0; i<removeValues.length; i++) {
    for (j=0; j<array.length; j++) {
      if (array[j] === removeValues[i]) {
        array.splice(j, 1);
        j--
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
