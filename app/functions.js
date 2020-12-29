exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return (str2) => {
      return str + ", " + str2;
    }
  },

  makeClosures: function(arr, fn) {
    let arrayFunctions = [];

    arr.forEach((element) => {
      arrayFunctions.push(() => {
        return fn(element);
      });
    });
    return arrayFunctions;
  },

  partial: function(fn, str1, str2) {
    return (str3) => fn(str1, str2, str3);
  },

  useArguments: function() {
    let args = [...arguments];
    return args.reduce((acc, item) => acc + item);
  },

  callIt: function(fn) {
    let args = [...arguments].slice(1, arguments.length);
    fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    let args = [...arguments].slice(1, arguments.length);
    return (...innerArgs) => fn.apply(null, [...args, ...innerArgs]);
  },

  curryIt: function(fn) {
    const expectedArgs = fn.length;
    let applyArguments = (callback, args) => callback.apply(null, args);
    let accumulateArguments = (args) => {
      return (currentArgument) => {
        args.push(currentArgument);
        if (args.length === expectedArgs) {
          return applyArguments(fn, args);
        }
        return accumulateArguments(args);
      };
    }
    return accumulateArguments([]);
  }
};
