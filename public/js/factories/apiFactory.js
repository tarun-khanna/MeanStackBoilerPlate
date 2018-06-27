app.factory("apiFactory", function($q, $http) {
  return {
    get: function() {
      let deferredObj = $q.defer();
      $http.get("api").then(
        data => {
          deferredObj.resolve(data);
        },
        err => {
          deferredObj.reject(err);
        }
      );
      return deferredObj.promise;
    },
    send: function(message, username) {
      let deferredObj = $q.defer();
      $http
        .post("api", {
          msg: message,
          username: username
        })
        .then(
          data => {
            deferredObj.resolve(data);
          },
          err => {
            deferredObj.reject(err);
          }
        );
      return deferredObj.promise;
    }
  };
});
