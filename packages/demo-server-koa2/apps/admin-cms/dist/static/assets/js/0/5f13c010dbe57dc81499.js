webpackJsonp([0],{1664:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t){return{galaxyw:"abc"}}function i(t,e){return{dispatch:t}}var f=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),p=n(0),s=r(p),l=n(135),y=n(1665),d=r(y),h=function(t){function e(t){o(this,e);var n=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={count:0},n}return c(e,t),f(e,[{key:"componentDidMount",value:function(){var t=["x"];(0,d.default)(t,{$push:["y"]})}},{key:"render",value:function(){return s.default.createElement("div",null,"demo...")}}]),e}(p.Component);t.exports=(0,l.connect)(u,i)(h)},1665:function(t,e,n){function r(t){if(Array.isArray(t))return v(t.constructor(t.length),t);if("Map"===g(t))return new Map(t);if("Set"===g(t))return new Set(t);if(t&&"object"==typeof t){var e=t.constructor&&t.constructor.prototype;return v(Object.create(e||null),t)}return t}function o(){function t(n,o){if("function"==typeof o)return o(n);Array.isArray(n)&&Array.isArray(o)||y(!Array.isArray(o),"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."),y("object"==typeof o&&null!==o,"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: %s.",Object.keys(e).join(", "));var a=n;return $(o).forEach(function(c){if(d.call(e,c)){var u=n===a;a=e[c](o[c],a,o,n),u&&t.isEquals(a,n)&&(a=n)}else{var i="Map"===g(n)?t(n.get(c),o[c]):t(n[c],o[c]);t.isEquals(i,a[c])&&(void 0!==i||d.call(n,c))||(a===n&&(a=r(n)),"Map"===g(a)?a.set(c,i):a[c]=i)}}),a}var e=v({},j);return t.extend=function(t,n){e[t]=n},t.isEquals=function(t,e){return t===e},t}function a(t,e,n){y(Array.isArray(t),"update(): expected target of %s to be an array; got %s.",n,t),c(e[n],n)}function c(t,e){y(Array.isArray(t),"update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?",e,t)}function u(t,e){y(Array.isArray(t),"Expected $splice target to be an array; got %s",t),i(e.$splice)}function i(t){y(Array.isArray(t),"update(): expected spec of $splice to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",t)}function f(t){y("function"==typeof t,"update(): expected spec of $apply to be a function; got %s.",t)}function p(t){y(1===Object.keys(t).length,"Cannot have more than one key in an object with $set")}function s(t,e){y(e&&"object"==typeof e,"update(): $merge expects a spec of type 'object'; got %s",e),y(t&&"object"==typeof t,"update(): $merge expects a target of type 'object'; got %s",t)}function l(t,e){var n=g(t);y("Map"===n||"Set"===n,"update(): %s expects a target of type Set or Map; got %s",e,n)}var y=n(37),d=Object.prototype.hasOwnProperty,h=Array.prototype.splice,b=Object.prototype.toString,g=function(t){return b.call(t).slice(8,-1)},v=Object.assign||function(t,e){return $(e).forEach(function(n){d.call(e,n)&&(t[n]=e[n])}),t},$="function"==typeof Object.getOwnPropertySymbols?function(t){return Object.keys(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.keys(t)},j={$push:function(t,e,n){return a(e,n,"$push"),t.length?e.concat(t):e},$unshift:function(t,e,n){return a(e,n,"$unshift"),t.length?t.concat(e):e},$splice:function(t,e,n,o){return u(e,n),t.forEach(function(t){i(t),e===o&&t.length&&(e=r(o)),h.apply(e,t)}),e},$set:function(t,e,n){return p(n),t},$toggle:function(t,e){c(t,"$toggle");var n=t.length?r(e):e;return t.forEach(function(t){n[t]=!e[t]}),n},$unset:function(t,e,n,o){return c(t,"$unset"),t.forEach(function(t){Object.hasOwnProperty.call(e,t)&&(e===o&&(e=r(o)),delete e[t])}),e},$add:function(t,e,n,o){return l(e,"$add"),c(t,"$add"),"Map"===g(e)?t.forEach(function(t){var n=t[0],a=t[1];e===o&&e.get(n)!==a&&(e=r(o)),e.set(n,a)}):t.forEach(function(t){e!==o||e.has(t)||(e=r(o)),e.add(t)}),e},$remove:function(t,e,n,o){return l(e,"$remove"),c(t,"$remove"),t.forEach(function(t){e===o&&e.has(t)&&(e=r(o)),e.delete(t)}),e},$merge:function(t,e,n,o){return s(e,t),$(t).forEach(function(n){t[n]!==e[n]&&(e===o&&(e=r(o)),e[n]=t[n])}),e},$apply:function(t,e){return f(t),t(e)}},m=o();t.exports=m,t.exports.default=m,t.exports.newContext=o}});