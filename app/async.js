exports = typeof window === "undefined" ? global : window;

exports.asyncAnswers = {
  async: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(value), 10);
    });
  },

  manipulateRemoteData: function (url) {
    var dfd = $.Deferred();

    $.ajax(url).then(function (resp) {
      var people = $.map(resp.people, function (person) {
        return person.name;
      });
      dfd.resolve(people.sort());
    });

    return dfd.promise();
  },
};
