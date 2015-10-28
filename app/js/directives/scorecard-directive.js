(function () {
  'use strict';

  angular
    .module('directives')
    .directive('scorecard', ['Game', scorecard]);

  function scorecard(Game) {
    return {
      restrict: 'EA',
      scope: {},
      bindToController : true,
      templateUrl: 'directives/scorecard-directive.tpl.html',
      replace: false,
      controllerAs: 'vm',
      controller: function () {
        var game = new Game();
        var vm = this;

        vm.players = game.getPlayers();
      },

      link: function (scope, element, attrs) {

      }
    };
  }
}());

//# sourceMappingURL=scorecard-directive.js.map
