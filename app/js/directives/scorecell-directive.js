(function () {
  'use strict';

  angular
    .module('directives')
    .directive('scorecell', scorecell);

  function scorecell() {
    return {
      restrict: 'EA',
      scope: {
        score : '=',
        firstroll : '@',
        secondroll : '@'
      },
      templateUrl: 'directives/scorecell-directive.tpl.html',
      replace: false,
      controllerAs: 'vm',
      controller: function () {
        var vm = this;
        vm.name = 'scorecell';
      },
      link: function (scope, element, attrs) {
        element
          .bind('click', function () {
            var scoreForm = $('.scoreform', element);
            $(scoreForm).fadeIn(200);
            $('body').append('<div id="mask"></div>');
            $('#mask').fadeIn(200);

            return false;
          });

          $(document).on('click', '#mask, button',function() {
            $('#mask , .scoreform').fadeOut(0 , function() {
              $('#mask').remove();
            });

            return false;
          });

      }
    };
  }
}());

//# sourceMappingURL=scorecell-directive.js.map
