function findMinAndRemove(array){
  min = array[0];
  minIndex = 0;
  for (int i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function insertionSort(array){

}
