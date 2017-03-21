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
      element[0].value = modelValue
      applyNgModel()
    }

    // scope.$watchCollection(() => ngModel.$modelValue, value => {
    //   console.log(value)
    // })

    element.on('change', () => applyNgModel())

    // const dirtyLabel = element[0].querySelector('label + label')
    // if (dirtyLabel) {
    //   element[0].removeChild(dirtyLabel)
    // }

    function applyNgModel() {
      $timeout(() => {
        $parse(attributes.ngModel).assign(scope, element[0].value)
        scope.$apply()
      }, 0)
    }
  }
}
