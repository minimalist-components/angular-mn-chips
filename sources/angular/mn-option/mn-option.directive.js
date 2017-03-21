angular
  .module('mn-chips')
  .directive('mnChips', mnChipsDirective)

function mnChipsDirective($parse, $timeout) {
  return {
    restrict: 'E',
    controller,
    link,
    require: 'ngModel',
  }

  function controller($scope, $element, $attrs) {
    const name = $element.attr('name')
      || $attrs.ngModel.split('.')[$attrs.ngModel.split('.').length - 1]

    $element.attr('name', name)
    $element.find('input').attr('name', name)
  }

  function link(scope, element, attributes) {
    const modelValue = $parse(attributes.ngModel)(scope)
    const modelApplied = angular.equals(element[0].value, modelValue)

    if (!modelApplied) {
      $timeout(() => {
        element[0].value = modelValue
        $parse(attributes.ngModel).assign(scope, element[0].value)
      }, 0)
    }

    element.on('change', () => {
      $timeout(() => {
        $parse(attributes.ngModel).assign(scope, element[0].value)
        scope.$apply()
      }, 0)
    })

    // const dirtyLabel = element[0].querySelector('label + label')
    // if (dirtyLabel) {
    //   element[0].removeChild(dirtyLabel)
    // }
  }
}
