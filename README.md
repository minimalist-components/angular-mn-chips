[![npm version](https://badge.fury.io/js/angular-mn-chips.svg)](https://badge.fury.io/js/angular-mn-chips)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/angular-mn-chips.svg)](https://gemnasium.com/github.com/minimalist-components/angular-mn-chips)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)  

# angular-mn-chips

An angular directive to [mn-chips](https://github.com/minimalist-components/mn-chips)

See the [demo](https://minimalist-components.github.io/mn-chips)

[![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-chips/master/preview.gif)](https://minimalist-components.github.io/angular-mn-chips/)

### Install

```sh
npm install --save angular-mn-chips
```

And bundle dependencies and main files in [dist/](https://github.com/minimalist-components/angular-mn-chips/tree/master/dist) with your preferred tool.

### Usage

```js
// add dependency in you module
angular.module('app', [
  'mn-chips'
]);
```

Add to your html, the tag `mn-chips` with respective type, default is checkbox, e.g.

```html
<!-- checkbox -->
<mn-chips ng-model="house"></mn-chips>
```


For more details check docs [mn-chips docs](https://github.com/minimalist-components/mn-chips).

