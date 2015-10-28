(function () {
  'use strict';

  angular
    .module('bowling')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/keepscore');
  }
}());

//# sourceMappingURL=app-routes.js.map
