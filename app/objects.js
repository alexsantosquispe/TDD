exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    let objArray = [];

    for (const prop in obj) {
      if (Object.hasOwnProperty.call(obj, prop)) {
        const element = obj[prop];
        objArray.push(prop + ": " + element);
      }
    }

    return objArray;
  }
};
