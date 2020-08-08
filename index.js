var arrayNumbers= [6,1,8,4,0,3];
console.log("The given array "+ arrayNumbers);
sortArray(arrayNumbers)
console.log("the sorted array :"+arrayNumbers);

function sortArray(array) {
  var flag = false;
  while (flag==false) {
    flag = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        var temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
        flag=false;
      }
    }
  }

  return array;
}

