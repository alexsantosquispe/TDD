exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((acc, item) => acc + item, 0);
  },

  remove: function(arr, item) {
    let newArray = [];
    arr.forEach(element => {
      if (element !== item) {
        newArray.push(element);
      }
    });
    return newArray;
  },

  removeWithoutCopy: function(arr, item) {
    let len = arr.length;
    let index = 0;
    
    while(len > index) {
      const element = arr[index];
      if (element === item) {
        arr.splice(index, 1);
      } else {
        index += 1;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let count = 0;
    count = arr.reduce((acc, element) => element === item ? count += 1 : count, 0);
    return count;
  },

  duplicates: function(arr) {
    let arr2 = [];
    let count = 0;
    let prevElem = arr[0];
    arr = arr.sort();
    arr.forEach((value, index) => {
      if (value === prevElem) {
        count += 1;        
      } else if (count > 1) {
        arr2.push(prevElem);
        count = 1;
      }
      prevElem = value;
    });
    return arr2;
  },

  square: function(arr) {
    return arr.map((value, index) => value * value);
  },

  findAllOccurrences: function(arr, target) {
    let positions = [];
    arr.forEach((element, index) => element === target ? positions.push(index) : null);
    return positions;
  }
};
