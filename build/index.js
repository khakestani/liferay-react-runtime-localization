module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t){e.exports=require("react")},function(e,t,r){e.exports=r(3)()},function(e,t){e.exports=e=>e.replace(/\\\n( )*/g,"").split("\n").filter(e=>!/(\#|\!)/.test(e.replace(/\s/g,"").slice(0,1))&&e).reduce((e,t)=>{const r=t.replace(/(\=)/,":"),n=r.substring(0,r.indexOf(":")).trim(),o=r.substring(r.indexOf(":")+1).trim();return e[n]=o,e},{})},function(e,t,r){"use strict";var n=r(4);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t),r.d(t,"isLanguageLoaded",(function(){return b})),r.d(t,"LanguageProvider",(function(){return h})),r.d(t,"getLanguage",(function(){return x}));var n=r(0),o=r.n(n),a=r(1),i=r.n(a);var u=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;return e.payload},c=r(2),l=r.n(c),s=function(e){var t=e.languageId,r=e.portalUrl,o=e.contextPath,a=e.directory,i=e.dispatch,u=(t||"").split("_").shift(),c="Language";"en"!==u&&""!==u&&(c+="_"+u);var s="".concat(r+o,"/").concat(a,"/").concat(c,".properties");return Object(n.useEffect)((function(){fetch(s).then((function(e){return e.text()})).then((function(e){var t=l()(e);i({payload:t})}))}),[]),null};s.prototype={languageId:i.a.string.isRequired,portalUrl:i.a.string.isRequired,contextPath:i.a.string.isRequired,directory:i.a.string},s.defaultProps={languageId:"en_US",directory:"localization"};var f=s;function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var y=o.a.createContext(),g=o.a.createContext(),v=function(e){var t=e.languageId,r=e.portalUrl,a=e.contextPath,i=e.directory,c=e.children,l=p(Object(n.useReducer)(u,{}),2),s=l[0],d=l[1];return o.a.createElement(g.Provider,{value:d},o.a.createElement(y.Provider,{value:s},o.a.createElement(f,{dispatch:d,languageId:t,portalUrl:r,contextPath:a,directory:i}),c))},b=function(){var e=Object(n.useContext)(y);return"{}"!==JSON.stringify(e)};v.prototype={languageId:i.a.string.isRequired,portalUrl:i.a.string.isRequired,contextPath:i.a.string.isRequired,directory:i.a.string},v.defaultProps={languageId:"en_US",directory:"localization"};var h=v,m=function(e){var t=e.langKey,r=Object(n.useContext)(y);return o.a.createElement(n.Fragment,null,function(e){return Object.keys(r).indexOf(e)>=0?r[e]:e}(t))};m.prototype={langKey:i.a.string.isRequired};var O=m;var x=function(e){var t=Object(n.useContext)(y);return function(e){return Object.keys(t).indexOf(e)>=0?t[e]:e}(e)};t.default=O}]);