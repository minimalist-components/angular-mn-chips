angular
  .module('mn-chips')
  .directive('mnChips', mnChipsDirective)

function mnChipsDirective($parse, $timeout) {
  return {
    restrict: 'E',
    link,
    require: 'ngModel',
  }

  function link() {

  }
}
