webpackJsonp([1],{229:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function r(){var e=arguments.length<=0||void 0===arguments[0]?1:arguments[0];return{type:f,payload:e}}function o(){var e=arguments.length<=0||void 0===arguments[0]?_:arguments[0],n=arguments[1],t=s[n.type];return t?t(e,n):e}Object.defineProperty(n,"__esModule",{value:!0}),n.actions=n.doubleAsync=n.COUNTER_INCREMENT=void 0;var c=t(376),l=u(c),a=t(371),i=u(a);n.increment=r,n["default"]=o;var f=n.COUNTER_INCREMENT="COUNTER_INCREMENT",d=n.doubleAsync=function(){return function(e,n){return new i["default"](function(t){setTimeout(function(){e(r(n().counter)),t()},200)})}},s=(n.actions={increment:r,doubleAsync:d},(0,l["default"])({},f,function(e,n){return e+n.payload})),_=0},233:[802,99,25],243:[838,100,393,234,147,31,99],355:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0}),n.Counter=void 0;var r=t(9),o=u(r),c=t(427),l=u(c),a=n.Counter=function(e){return o["default"].createElement("div",null,o["default"].createElement("h2",{className:l["default"].counterContainer},"Counter:"," ",o["default"].createElement("span",{className:l["default"]["counter--green"]},e.counter)),o["default"].createElement("button",{className:"btn btn-default",onClick:e.increment},"Increment")," ",o["default"].createElement("button",{className:"btn btn-default",onClick:e.doubleAsync},"Double (Async)"))};a.propTypes={counter:o["default"].PropTypes.number.isRequired,doubleAsync:o["default"].PropTypes.func.isRequired,increment:o["default"].PropTypes.func.isRequired},n["default"]=a},356:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var r=t(355),o=u(r);n["default"]=o["default"]},361:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var r=t(258),o=t(229),c=t(356),l=u(c),a={increment:function(){return(0,o.increment)(1)},doubleAsync:o.doubleAsync},i=function(e){return{counter:e.counter}};n["default"]=(0,r.connect)(i,a)(l["default"])},371:function(e,n,t){e.exports={"default":t(385),__esModule:!0}},376:function(e,n,t){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0;var r=t(231),o=u(r);n["default"]=function(e,n,t){return n in e?(0,o["default"])(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},385:function(e,n,t){t(245),t(246),t(247),t(420),e.exports=t(24).Promise},389:69,392:[807,100,396,394,52,244,413],393:134,394:[812,101,25],396:[814,52],398:[817,25],402:[820,31,243,99],407:function(e,n,t){var u=t(65);e.exports=function(e,n,t){for(var r in n)t&&e[r]?e[r]=n[r]:u(e,r,n[r]);return e}},409:function(e,n,t){"use strict";var u=t(31),r=t(24),o=t(55),c=t(53),l=t(25)("species");e.exports=function(e){var n="function"==typeof r[e]?r[e]:u[e];c&&n&&!n[l]&&o.f(n,l,{configurable:!0,get:function(){return this}})}},410:[836,52,145,25],413:[847,233,25,101,24],420:[854,114,31,100,233,54,85,145,389,392,410,243,402,25,407,117,409,24,398],427:function(e,n){e.exports={counter:"Counter__counter___2lTkh","counter--green":"Counter__counter--green___1oJPa Counter__counter___2lTkh",counterContainer:"Counter__counterContainer___3frWE"}}});
//# sourceMappingURL=1.counter.js.map