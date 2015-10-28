(function () {
  'use strict';

  angular
    .module('home')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/keepscore',
        templateUrl: 'home/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      });
  }
}());

//# sourceMappingURL=home-routes.js.map
