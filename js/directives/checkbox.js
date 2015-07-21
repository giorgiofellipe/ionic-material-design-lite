angular.module('ionic')
  .directive('checkbox', function () {
    return {
      restrict: 'EC',
      compile: function (element, attrs) {
        if(!attrs.hasOwnProperty('noRipple')) {
          element.addClass('mdl-js-checkbox mdl-js-ripple-effect');
        }
      }
    }
  });
