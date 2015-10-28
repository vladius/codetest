(function () {

	'use strict';

	angular.module('services')

		.factory('Game', function () {

			function Object() {
				this.turn = 0;
				this.frame = 0;
        this.players = ['first','second', 'third', 'fourth'];
			}

      Object.prototype.getPlayers = function(){
        return this.players;
      };

			return Object;

		})

}());

//# sourceMappingURL=game-factory.js.map
