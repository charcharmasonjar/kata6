let repeatNumbers = function(data) {

  const print = function(array) {
    let value = array[0];
    let repeat = array[1];
    let string = "";
    for (let i = 0; i < repeat; i++) {
      string += value;
    }
    return string;
  };

  let result = "";

  for (let element of data) {
    if (element === data[0]) {
      result += print(element);
    } else {
      result += ", " + print(element);
    }
  }
  return result;
};



console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

// Expected Output:
// 1111111111
// 11, 222
// 10101010, 343434343434, 9292