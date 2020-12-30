exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(greetingArg, nameArg) {
    return {
      name: nameArg,
      greeting: greetingArg,
      sayIt: function() {
        return this.greeting + ', ' + this.name;
      }
    };
  }
};
