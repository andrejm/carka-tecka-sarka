'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/******/(function(modules){// webpackBootstrap
/******/// The module cache
/******/var installedModules={};/******//******/// The require function
/******/function __webpack_require__(moduleId){/******//******/// Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/// Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******//******/// Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******//******/// Flag the module as loaded
/******/module.l=true;/******//******/// Return the exports of the module
/******/return module.exports;/******/}/******//******//******/// expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******//******/// expose the module cache
/******/__webpack_require__.c=installedModules;/******//******/// identity function for calling harmony imports with the correct context
/******/__webpack_require__.i=function(value){return value;};/******//******/// define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{/******/configurable:false,/******/enumerable:true,/******/get:getter/******/});/******/}/******/};/******//******/// getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******//******/// Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******//******/// __webpack_public_path__
/******/__webpack_require__.p="";/******//******/// Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=6);/******/})(/************************************************************************//******/[/* 0 *//***/function(module,exports){module.exports=jQuery;/***/},/* 1 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"a",function(){return rtl;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"b",function(){return GetYoDigits;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"c",function(){return transitionend;});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery__=__webpack_require__(0);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);// Core Foundation Utilities, utilized in a number of places.
/**
 * Returns a boolean for RTL support
 */function rtl(){return __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html').attr('dir')==='rtl';}/**
 * returns a random base-36 uid with namespacing
 * @function
 * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
 * @param {String} namespace - name of plugin to be incorporated in uid, optional.
 * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
 * @returns {String} - unique id
 */function GetYoDigits(length,namespace){length=length||6;return Math.round(Math.pow(36,length+1)-Math.random()*Math.pow(36,length)).toString(36).slice(1)+(namespace?'-'+namespace:'');}function transitionend($elem){var transitions={'transition':'transitionend','WebkitTransition':'webkitTransitionEnd','MozTransition':'transitionend','OTransition':'otransitionend'};var elem=document.createElement('div'),end;for(var t in transitions){if(typeof elem.style[t]!=='undefined'){end=transitions[t];}}if(end){return end;}else{end=setTimeout(function(){$elem.triggerHandler('transitionend',[$elem]);},1);return'transitionend';}}/***/},/* 2 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery__=__webpack_require__(0);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__foundation_core__=__webpack_require__(3);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation_util_core__=__webpack_require__(1);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__foundation_plugin__=__webpack_require__(4);__WEBPACK_IMPORTED_MODULE_1__foundation_core__["a"/* Foundation */].addToJquery(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);// These are now separated out, but historically were a part of this module,
// and since this is here for backwards compatibility we include them in
// this entry.
__WEBPACK_IMPORTED_MODULE_1__foundation_core__["a"/* Foundation */].rtl=__WEBPACK_IMPORTED_MODULE_2__foundation_util_core__["a"/* rtl */];__WEBPACK_IMPORTED_MODULE_1__foundation_core__["a"/* Foundation */].GetYoDigits=__WEBPACK_IMPORTED_MODULE_2__foundation_util_core__["b"/* GetYoDigits */];__WEBPACK_IMPORTED_MODULE_1__foundation_core__["a"/* Foundation */].transitionend=__WEBPACK_IMPORTED_MODULE_2__foundation_util_core__["c"/* transitionend */];// Every plugin depends on plugin now, we can include that on the core for the
// script inclusion path.
__WEBPACK_IMPORTED_MODULE_1__foundation_core__["a"/* Foundation */].Plugin=__WEBPACK_IMPORTED_MODULE_3__foundation_plugin__["a"/* Plugin */];window.Foundation=__WEBPACK_IMPORTED_MODULE_1__foundation_core__["a"/* Foundation */];/***/},/* 3 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"a",function(){return Foundation;});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery__=__webpack_require__(0);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__=__webpack_require__(1);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__=__webpack_require__(5);var FOUNDATION_VERSION='6.4.3';// Global Foundation object
// This is attached to the window, or used as a module for AMD/Browserify
var Foundation={version:FOUNDATION_VERSION,/**
   * Stores initialized plugins.
   */_plugins:{},/**
   * Stores generated unique ids for plugin instances
   */_uuids:[],/**
   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
   * @param {Object} plugin - The constructor of the plugin.
   */plugin:function plugin(_plugin,name){// Object key to use when adding to global Foundation object
// Examples: Foundation.Reveal, Foundation.OffCanvas
var className=name||functionName(_plugin);// Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
// Examples: data-reveal, data-off-canvas
var attrName=hyphenate(className);// Add to the Foundation object and the plugins list (for reflowing)
this._plugins[attrName]=this[className]=_plugin;},/**
   * @function
   * Populates the _uuids array with pointers to each individual plugin instance.
   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
   * Also fires the initialization event for each plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @param {String} name - the name of the plugin, passed as a camelCased string.
   * @fires Plugin#init
   */registerPlugin:function registerPlugin(plugin,name){var pluginName=name?hyphenate(name):functionName(plugin.constructor).toLowerCase();plugin.uuid=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["b"/* GetYoDigits */])(6,pluginName);if(!plugin.$element.attr('data-'+pluginName)){plugin.$element.attr('data-'+pluginName,plugin.uuid);}if(!plugin.$element.data('zfPlugin')){plugin.$element.data('zfPlugin',plugin);}/**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */plugin.$element.trigger('init.zf.'+pluginName);this._uuids.push(plugin.uuid);return;},/**
   * @function
   * Removes the plugins uuid from the _uuids array.
   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
   * Also fires the destroyed event for the plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @fires Plugin#destroyed
   */unregisterPlugin:function unregisterPlugin(plugin){var pluginName=hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));this._uuids.splice(this._uuids.indexOf(plugin.uuid),1);plugin.$element.removeAttr('data-'+pluginName).removeData('zfPlugin')/**
     * Fires when the plugin has been destroyed.
     * @event Plugin#destroyed
     */.trigger('destroyed.zf.'+pluginName);for(var prop in plugin){plugin[prop]=null;//clean up script to prep for garbage collection.
}return;},/**
   * @function
   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
   * @default If no argument is passed, reflow all currently active plugins.
   */reInit:function reInit(plugins){var isJQ=plugins instanceof __WEBPACK_IMPORTED_MODULE_0_jquery___default.a;try{if(isJQ){plugins.each(function(){__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('zfPlugin')._init();});}else{var type=typeof plugins==='undefined'?'undefined':_typeof(plugins),_this=this,fns={'object':function object(plgs){plgs.forEach(function(p){p=hyphenate(p);__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-'+p+']').foundation('_init');});},'string':function string(){plugins=hyphenate(plugins);__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-'+plugins+']').foundation('_init');},'undefined':function undefined(){this['object'](Object.keys(_this._plugins));}};fns[type](plugins);}}catch(err){console.error(err);}finally{return plugins;}},/**
   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
   */reflow:function reflow(elem,plugins){// If plugins is undefined, just grab everything
if(typeof plugins==='undefined'){plugins=Object.keys(this._plugins);}// If plugins is a string, convert it to an array with one item
else if(typeof plugins==='string'){plugins=[plugins];}var _this=this;// Iterate through each plugin
__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(plugins,function(i,name){// Get the current plugin
var plugin=_this._plugins[name];// Localize the search to all elements inside elem, as well as elem itself, unless elem === document
var $elem=__WEBPACK_IMPORTED_MODULE_0_jquery___default()(elem).find('[data-'+name+']').addBack('[data-'+name+']');// For each plugin found, initialize it
$elem.each(function(){var $el=__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),opts={};// Don't double-dip on plugins
if($el.data('zfPlugin')){console.warn("Tried to initialize "+name+" on an element that already has a Foundation plugin.");return;}if($el.attr('data-options')){var thing=$el.attr('data-options').split(';').forEach(function(e,i){var opt=e.split(':').map(function(el){return el.trim();});if(opt[0])opts[opt[0]]=parseValue(opt[1]);});}try{$el.data('zfPlugin',new plugin(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),opts));}catch(er){console.error(er);}finally{return;}});});},getFnName:functionName,addToJquery:function addToJquery($){// TODO: consider not making this a jQuery function
// TODO: need way to reflow vs. re-initialize
/**
     * The Foundation jQuery method.
     * @param {String|Array} method - An action to perform on the current jQuery object.
     */var foundation=function foundation(method){var type=typeof method==='undefined'?'undefined':_typeof(method),$noJS=$('.no-js');if($noJS.length){$noJS.removeClass('no-js');}if(type==='undefined'){//needs to initialize the Foundation object, or an individual plugin.
__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__["a"/* MediaQuery */]._init();Foundation.reflow(this);}else if(type==='string'){//an individual method to invoke on a plugin or group of plugins
var args=Array.prototype.slice.call(arguments,1);//collect all the arguments, if necessary
var plugClass=this.data('zfPlugin');//determine the class of plugin
if(plugClass!==undefined&&plugClass[method]!==undefined){//make sure both the class and method exist
if(this.length===1){//if there's only one, call it directly.
plugClass[method].apply(plugClass,args);}else{this.each(function(i,el){//otherwise loop through the jQuery collection and invoke the method on each
plugClass[method].apply($(el).data('zfPlugin'),args);});}}else{//error for no class or no method
throw new ReferenceError("We're sorry, '"+method+"' is not an available method for "+(plugClass?functionName(plugClass):'this element')+'.');}}else{//error for invalid argument type
throw new TypeError('We\'re sorry, '+type+' is not a valid parameter. You must use a string representing the method you wish to invoke.');}return this;};$.fn.foundation=foundation;return $;}};Foundation.util={/**
   * Function for applying a debounce effect to a function call.
   * @function
   * @param {Function} func - Function to be called at end of timeout.
   * @param {Number} delay - Time in ms to delay the call of `func`.
   * @returns function
   */throttle:function throttle(func,delay){var timer=null;return function(){var context=this,args=arguments;if(timer===null){timer=setTimeout(function(){func.apply(context,args);timer=null;},delay);}};}};window.Foundation=Foundation;// Polyfill for requestAnimationFrame
(function(){if(!Date.now||!window.Date.now)window.Date.now=Date.now=function(){return new Date().getTime();};var vendors=['webkit','moz'];for(var i=0;i<vendors.length&&!window.requestAnimationFrame;++i){var vp=vendors[i];window.requestAnimationFrame=window[vp+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vp+'CancelAnimationFrame']||window[vp+'CancelRequestAnimationFrame'];}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var lastTime=0;window.requestAnimationFrame=function(callback){var now=Date.now();var nextTime=Math.max(lastTime+16,now);return setTimeout(function(){callback(lastTime=nextTime);},nextTime-now);};window.cancelAnimationFrame=clearTimeout;}/**
   * Polyfill for performance.now, required by rAF
   */if(!window.performance||!window.performance.now){window.performance={start:Date.now(),now:function now(){return Date.now()-this.start;}};}})();if(!Function.prototype.bind){Function.prototype.bind=function(oThis){if(typeof this!=='function'){// closest thing possible to the ECMAScript 5
// internal IsCallable function
throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');}var aArgs=Array.prototype.slice.call(arguments,1),fToBind=this,fNOP=function fNOP(){},fBound=function fBound(){return fToBind.apply(this instanceof fNOP?this:oThis,aArgs.concat(Array.prototype.slice.call(arguments)));};if(this.prototype){// native functions don't have a prototype
fNOP.prototype=this.prototype;}fBound.prototype=new fNOP();return fBound;};}// Polyfill to get the name of a function in IE9
function functionName(fn){if(Function.prototype.name===undefined){var funcNameRegex=/function\s([^(]{1,})\(/;var results=funcNameRegex.exec(fn.toString());return results&&results.length>1?results[1].trim():"";}else if(fn.prototype===undefined){return fn.constructor.name;}else{return fn.prototype.constructor.name;}}function parseValue(str){if('true'===str)return true;else if('false'===str)return false;else if(!isNaN(str*1))return parseFloat(str);return str;}// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580
function hyphenate(str){return str.replace(/([a-z])([A-Z])/g,'$1-$2').toLowerCase();}/***/},/* 4 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"a",function(){return Plugin;});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery__=__webpack_require__(0);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__=__webpack_require__(1);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}// Abstract class for providing lifecycle hooks. Expect plugins to define AT LEAST
// {function} _setup (replaces previous constructor),
// {function} _destroy (replaces previous destroy)
var Plugin=function(){function Plugin(element,options){_classCallCheck(this,Plugin);this._setup(element,options);var pluginName=getPluginName(this);this.uuid=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["b"/* GetYoDigits */])(6,pluginName);if(!this.$element.attr('data-'+pluginName)){this.$element.attr('data-'+pluginName,this.uuid);}if(!this.$element.data('zfPlugin')){this.$element.data('zfPlugin',this);}/**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */this.$element.trigger('init.zf.'+pluginName);}_createClass(Plugin,[{key:'destroy',value:function destroy(){this._destroy();var pluginName=getPluginName(this);this.$element.removeAttr('data-'+pluginName).removeData('zfPlugin')/**
       * Fires when the plugin has been destroyed.
       * @event Plugin#destroyed
       */.trigger('destroyed.zf.'+pluginName);for(var prop in this){this[prop]=null;//clean up script to prep for garbage collection.
}}}]);return Plugin;}();// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580
function hyphenate(str){return str.replace(/([a-z])([A-Z])/g,'$1-$2').toLowerCase();}function getPluginName(obj){if(typeof obj.constructor.name!=='undefined'){return hyphenate(obj.constructor.name);}else{return hyphenate(obj.className);}}/***/},/* 5 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"a",function(){return MediaQuery;});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery__=__webpack_require__(0);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);// Default set of media queries
var defaultQueries={'default':'only screen',landscape:'only screen and (orientation: landscape)',portrait:'only screen and (orientation: portrait)',retina:'only screen and (-webkit-min-device-pixel-ratio: 2),'+'only screen and (min--moz-device-pixel-ratio: 2),'+'only screen and (-o-min-device-pixel-ratio: 2/1),'+'only screen and (min-device-pixel-ratio: 2),'+'only screen and (min-resolution: 192dpi),'+'only screen and (min-resolution: 2dppx)'};// matchMedia() polyfill - Test a CSS media type/query in JS.
// Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license
var matchMedia=window.matchMedia||function(){'use strict';// For browsers that support matchMedium api such as IE 9 and webkit
var styleMedia=window.styleMedia||window.media;// For those that don't support matchMedium
if(!styleMedia){var style=document.createElement('style'),script=document.getElementsByTagName('script')[0],info=null;style.type='text/css';style.id='matchmediajs-test';script&&script.parentNode&&script.parentNode.insertBefore(style,script);// 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
info='getComputedStyle'in window&&window.getComputedStyle(style,null)||style.currentStyle;styleMedia={matchMedium:function matchMedium(media){var text='@media '+media+'{ #matchmediajs-test { width: 1px; } }';// 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
if(style.styleSheet){style.styleSheet.cssText=text;}else{style.textContent=text;}// Test if media query is true or false
return info.width==='1px';}};}return function(media){return{matches:styleMedia.matchMedium(media||'all'),media:media||'all'};};}();var MediaQuery={queries:[],current:'',/**
   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
   * @function
   * @private
   */_init:function _init(){var self=this;var $meta=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('meta.foundation-mq');if(!$meta.length){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('<meta class="foundation-mq">').appendTo(document.head);}var extractedStyles=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.foundation-mq').css('font-family');var namedQueries;namedQueries=parseStyleToObject(extractedStyles);for(var key in namedQueries){if(namedQueries.hasOwnProperty(key)){self.queries.push({name:key,value:'only screen and (min-width: '+namedQueries[key]+')'});}}this.current=this._getCurrentSize();this._watcher();},/**
   * Checks if the screen is at least as wide as a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
   */atLeast:function atLeast(size){var query=this.get(size);if(query){return matchMedia(query).matches;}return false;},/**
   * Checks if the screen matches to a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
   */is:function is(size){size=size.trim().split(' ');if(size.length>1&&size[1]==='only'){if(size[0]===this._getCurrentSize())return true;}else{return this.atLeast(size[0]);}return false;},/**
   * Gets the media query of a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to get.
   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
   */get:function get(size){for(var i in this.queries){if(this.queries.hasOwnProperty(i)){var query=this.queries[i];if(size===query.name)return query.value;}}return null;},/**
   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
   * @function
   * @private
   * @returns {String} Name of the current breakpoint.
   */_getCurrentSize:function _getCurrentSize(){var matched;for(var i=0;i<this.queries.length;i++){var query=this.queries[i];if(matchMedia(query.value).matches){matched=query;}}if((typeof matched==='undefined'?'undefined':_typeof(matched))==='object'){return matched.name;}else{return matched;}},/**
   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
   * @function
   * @private
   */_watcher:function _watcher(){var _this=this;__WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('resize.zf.mediaquery').on('resize.zf.mediaquery',function(){var newSize=_this._getCurrentSize(),currentSize=_this.current;if(newSize!==currentSize){// Change the current media query
_this.current=newSize;// Broadcast the media query change on the window
__WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).trigger('changed.zf.mediaquery',[newSize,currentSize]);}});}};// Thank you: https://github.com/sindresorhus/query-string
function parseStyleToObject(str){var styleObject={};if(typeof str!=='string'){return styleObject;}str=str.trim().slice(1,-1);// browsers re-quote string style values
if(!str){return styleObject;}styleObject=str.split('&').reduce(function(ret,param){var parts=param.replace(/\+/g,' ').split('=');var key=parts[0];var val=parts[1];key=decodeURIComponent(key);// missing `=` should be `null`:
// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
val=val===undefined?null:decodeURIComponent(val);if(!ret.hasOwnProperty(key)){ret[key]=val;}else if(Array.isArray(ret[key])){ret[key].push(val);}else{ret[key]=[ret[key],val];}return ret;},{});return styleObject;}/***/},/* 6 *//***/function(module,exports,__webpack_require__){module.exports=__webpack_require__(2);/***/}]/******/);
'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/******/(function(modules){// webpackBootstrap
/******/// The module cache
/******/var installedModules={};/******//******/// The require function
/******/function __webpack_require__(moduleId){/******//******/// Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/// Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******//******/// Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******//******/// Flag the module as loaded
/******/module.l=true;/******//******/// Return the exports of the module
/******/return module.exports;/******/}/******//******//******/// expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******//******/// expose the module cache
/******/__webpack_require__.c=installedModules;/******//******/// identity function for calling harmony imports with the correct context
/******/__webpack_require__.i=function(value){return value;};/******//******/// define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{/******/configurable:false,/******/enumerable:true,/******/get:getter/******/});/******/}/******/};/******//******/// getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******//******/// Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******//******/// __webpack_public_path__
/******/__webpack_require__.p="";/******//******/// Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=103);/******/})(/************************************************************************//******/{/***/0:/***/function _(module,exports){module.exports=jQuery;/***/},/***/1:/***/function _(module,exports){module.exports={Foundation:window.Foundation};/***/},/***/103:/***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(37);/***/},/***/37:/***/function _(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__foundation_core__=__webpack_require__(1);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__foundation_core___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__foundation_core__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__=__webpack_require__(67);__WEBPACK_IMPORTED_MODULE_0__foundation_core__["Foundation"].MediaQuery=__WEBPACK_IMPORTED_MODULE_1__foundation_util_mediaQuery__["a"/* MediaQuery */];__WEBPACK_IMPORTED_MODULE_0__foundation_core__["Foundation"].MediaQuery._init();/***/},/***/67:/***/function _(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"a",function(){return MediaQuery;});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery__=__webpack_require__(0);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);// Default set of media queries
var defaultQueries={'default':'only screen',landscape:'only screen and (orientation: landscape)',portrait:'only screen and (orientation: portrait)',retina:'only screen and (-webkit-min-device-pixel-ratio: 2),'+'only screen and (min--moz-device-pixel-ratio: 2),'+'only screen and (-o-min-device-pixel-ratio: 2/1),'+'only screen and (min-device-pixel-ratio: 2),'+'only screen and (min-resolution: 192dpi),'+'only screen and (min-resolution: 2dppx)'};// matchMedia() polyfill - Test a CSS media type/query in JS.
// Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license
var matchMedia=window.matchMedia||function(){'use strict';// For browsers that support matchMedium api such as IE 9 and webkit
var styleMedia=window.styleMedia||window.media;// For those that don't support matchMedium
if(!styleMedia){var style=document.createElement('style'),script=document.getElementsByTagName('script')[0],info=null;style.type='text/css';style.id='matchmediajs-test';script&&script.parentNode&&script.parentNode.insertBefore(style,script);// 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
info='getComputedStyle'in window&&window.getComputedStyle(style,null)||style.currentStyle;styleMedia={matchMedium:function matchMedium(media){var text='@media '+media+'{ #matchmediajs-test { width: 1px; } }';// 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
if(style.styleSheet){style.styleSheet.cssText=text;}else{style.textContent=text;}// Test if media query is true or false
return info.width==='1px';}};}return function(media){return{matches:styleMedia.matchMedium(media||'all'),media:media||'all'};};}();var MediaQuery={queries:[],current:'',/**
   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
   * @function
   * @private
   */_init:function _init(){var self=this;var $meta=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('meta.foundation-mq');if(!$meta.length){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('<meta class="foundation-mq">').appendTo(document.head);}var extractedStyles=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.foundation-mq').css('font-family');var namedQueries;namedQueries=parseStyleToObject(extractedStyles);for(var key in namedQueries){if(namedQueries.hasOwnProperty(key)){self.queries.push({name:key,value:'only screen and (min-width: '+namedQueries[key]+')'});}}this.current=this._getCurrentSize();this._watcher();},/**
   * Checks if the screen is at least as wide as a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
   */atLeast:function atLeast(size){var query=this.get(size);if(query){return matchMedia(query).matches;}return false;},/**
   * Checks if the screen matches to a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
   */is:function is(size){size=size.trim().split(' ');if(size.length>1&&size[1]==='only'){if(size[0]===this._getCurrentSize())return true;}else{return this.atLeast(size[0]);}return false;},/**
   * Gets the media query of a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to get.
   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
   */get:function get(size){for(var i in this.queries){if(this.queries.hasOwnProperty(i)){var query=this.queries[i];if(size===query.name)return query.value;}}return null;},/**
   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
   * @function
   * @private
   * @returns {String} Name of the current breakpoint.
   */_getCurrentSize:function _getCurrentSize(){var matched;for(var i=0;i<this.queries.length;i++){var query=this.queries[i];if(matchMedia(query.value).matches){matched=query;}}if((typeof matched==='undefined'?'undefined':_typeof(matched))==='object'){return matched.name;}else{return matched;}},/**
   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
   * @function
   * @private
   */_watcher:function _watcher(){var _this=this;__WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('resize.zf.mediaquery').on('resize.zf.mediaquery',function(){var newSize=_this._getCurrentSize(),currentSize=_this.current;if(newSize!==currentSize){// Change the current media query
_this.current=newSize;// Broadcast the media query change on the window
__WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).trigger('changed.zf.mediaquery',[newSize,currentSize]);}});}};// Thank you: https://github.com/sindresorhus/query-string
function parseStyleToObject(str){var styleObject={};if(typeof str!=='string'){return styleObject;}str=str.trim().slice(1,-1);// browsers re-quote string style values
if(!str){return styleObject;}styleObject=str.split('&').reduce(function(ret,param){var parts=param.replace(/\+/g,' ').split('=');var key=parts[0];var val=parts[1];key=decodeURIComponent(key);// missing `=` should be `null`:
// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
val=val===undefined?null:decodeURIComponent(val);if(!ret.hasOwnProperty(key)){ret[key]=val;}else if(Array.isArray(ret[key])){ret[key].push(val);}else{ret[key]=[ret[key],val];}return ret;},{});return styleObject;}/***/}/******/});
'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/******/(function(modules){// webpackBootstrap
/******/// The module cache
/******/var installedModules={};/******//******/// The require function
/******/function __webpack_require__(moduleId){/******//******/// Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/// Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******//******/// Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******//******/// Flag the module as loaded
/******/module.l=true;/******//******/// Return the exports of the module
/******/return module.exports;/******/}/******//******//******/// expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******//******/// expose the module cache
/******/__webpack_require__.c=installedModules;/******//******/// identity function for calling harmony imports with the correct context
/******/__webpack_require__.i=function(value){return value;};/******//******/// define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{/******/configurable:false,/******/enumerable:true,/******/get:getter/******/});/******/}/******/};/******//******/// getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******//******/// Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******//******/// __webpack_public_path__
/******/__webpack_require__.p="";/******//******/// Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=80);/******/})(/************************************************************************//******/{/***/0:/***/function _(module,exports){module.exports=jQuery;/***/},/***/1:/***/function _(module,exports){module.exports={Foundation:window.Foundation};/***/},/***/14:/***/function _(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__foundation_core__=__webpack_require__(1);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__foundation_core___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__foundation_core__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__foundation_accordion__=__webpack_require__(44);__WEBPACK_IMPORTED_MODULE_0__foundation_core__["Foundation"].plugin(__WEBPACK_IMPORTED_MODULE_1__foundation_accordion__["a"/* Accordion */],'Accordion');/***/},/***/2:/***/function _(module,exports){module.exports={Plugin:window.Foundation.Plugin};/***/},/***/3:/***/function _(module,exports){module.exports={rtl:window.Foundation.rtl,GetYoDigits:window.Foundation.GetYoDigits,transitionend:window.Foundation.transitionend};/***/},/***/44:/***/function _(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"a",function(){return Accordion;});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery__=__webpack_require__(0);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__=__webpack_require__(5);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation_util_core__=__webpack_require__(3);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation_util_core___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__foundation_util_core__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__foundation_plugin__=__webpack_require__(2);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__foundation_plugin___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__foundation_plugin__);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * Accordion module.
 * @module foundation.accordion
 * @requires foundation.util.keyboard
 */var Accordion=function(_Plugin){_inherits(Accordion,_Plugin);function Accordion(){_classCallCheck(this,Accordion);return _possibleConstructorReturn(this,(Accordion.__proto__||Object.getPrototypeOf(Accordion)).apply(this,arguments));}_createClass(Accordion,[{key:'_setup',/**
     * Creates a new instance of an accordion.
     * @class
     * @name Accordion
     * @fires Accordion#init
     * @param {jQuery} element - jQuery object to make into an accordion.
     * @param {Object} options - a plain object with settings to override the default options.
     */value:function _setup(element,options){this.$element=element;this.options=__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({},Accordion.defaults,this.$element.data(),options);this.className='Accordion';// ie9 back compat
this._init();__WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["Keyboard"].register('Accordion',{'ENTER':'toggle','SPACE':'toggle','ARROW_DOWN':'next','ARROW_UP':'previous'});}/**
     * Initializes the accordion by animating the preset active pane(s).
     * @private
     */},{key:'_init',value:function _init(){var _this3=this;this.$element.attr('role','tablist');this.$tabs=this.$element.children('[data-accordion-item]');this.$tabs.each(function(idx,el){var $el=__WEBPACK_IMPORTED_MODULE_0_jquery___default()(el),$content=$el.children('[data-tab-content]'),id=$content[0].id||__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__foundation_util_core__["GetYoDigits"])(6,'accordion'),linkId=el.id||id+'-label';$el.find('a:first').attr({'aria-controls':id,'role':'tab','id':linkId,'aria-expanded':false,'aria-selected':false});$content.attr({'role':'tabpanel','aria-labelledby':linkId,'aria-hidden':true,'id':id});});var $initActive=this.$element.find('.is-active').children('[data-tab-content]');this.firstTimeInit=true;if($initActive.length){this.down($initActive,this.firstTimeInit);this.firstTimeInit=false;}this._checkDeepLink=function(){var anchor=window.location.hash;//need a hash and a relevant anchor in this tabset
if(anchor.length){var $link=_this3.$element.find('[href$="'+anchor+'"]'),$anchor=__WEBPACK_IMPORTED_MODULE_0_jquery___default()(anchor);if($link.length&&$anchor){if(!$link.parent('[data-accordion-item]').hasClass('is-active')){_this3.down($anchor,_this3.firstTimeInit);_this3.firstTimeInit=false;};//roll up a little to show the titles
if(_this3.options.deepLinkSmudge){var _this=_this3;__WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).load(function(){var offset=_this.$element.offset();__WEBPACK_IMPORTED_MODULE_0_jquery___default()('html, body').animate({scrollTop:offset.top},_this.options.deepLinkSmudgeDelay);});}/**
              * Fires when the zplugin has deeplinked at pageload
              * @event Accordion#deeplink
              */_this3.$element.trigger('deeplink.zf.accordion',[$link,$anchor]);}}};//use browser to open a tab, if it exists in this tabset
if(this.options.deepLink){this._checkDeepLink();}this._events();}/**
     * Adds event handlers for items within the accordion.
     * @private
     */},{key:'_events',value:function _events(){var _this=this;this.$tabs.each(function(){var $elem=__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);var $tabContent=$elem.children('[data-tab-content]');if($tabContent.length){$elem.children('a').off('click.zf.accordion keydown.zf.accordion').on('click.zf.accordion',function(e){e.preventDefault();_this.toggle($tabContent);}).on('keydown.zf.accordion',function(e){__WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["Keyboard"].handleKey(e,'Accordion',{toggle:function toggle(){_this.toggle($tabContent);},next:function next(){var $a=$elem.next().find('a').focus();if(!_this.options.multiExpand){$a.trigger('click.zf.accordion');}},previous:function previous(){var $a=$elem.prev().find('a').focus();if(!_this.options.multiExpand){$a.trigger('click.zf.accordion');}},handled:function handled(){e.preventDefault();e.stopPropagation();}});});}});if(this.options.deepLink){__WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('popstate',this._checkDeepLink);}}/**
     * Toggles the selected content pane's open/close state.
     * @param {jQuery} $target - jQuery object of the pane to toggle (`.accordion-content`).
     * @function
     */},{key:'toggle',value:function toggle($target){if($target.closest('[data-accordion]').is('[disabled]')){console.info('Cannot toggle an accordion that is disabled.');return;}if($target.parent().hasClass('is-active')){this.up($target);}else{this.down($target);}//either replace or update browser history
if(this.options.deepLink){var anchor=$target.prev('a').attr('href');if(this.options.updateHistory){history.pushState({},'',anchor);}else{history.replaceState({},'',anchor);}}}/**
     * Opens the accordion tab defined by `$target`.
     * @param {jQuery} $target - Accordion pane to open (`.accordion-content`).
     * @param {Boolean} firstTime - flag to determine if reflow should happen.
     * @fires Accordion#down
     * @function
     */},{key:'down',value:function down($target,firstTime){var _this4=this;/**
       * checking firstTime allows for initial render of the accordion
       * to render preset is-active panes.
       */if($target.closest('[data-accordion]').is('[disabled]')&&!firstTime){console.info('Cannot call down on an accordion that is disabled.');return;}$target.attr('aria-hidden',false).parent('[data-tab-content]').addBack().parent().addClass('is-active');if(!this.options.multiExpand&&!firstTime){var $currentActive=this.$element.children('.is-active').children('[data-tab-content]');if($currentActive.length){this.up($currentActive.not($target));}}$target.slideDown(this.options.slideSpeed,function(){/**
         * Fires when the tab is done opening.
         * @event Accordion#down
         */_this4.$element.trigger('down.zf.accordion',[$target]);});__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#'+$target.attr('aria-labelledby')).attr({'aria-expanded':true,'aria-selected':true});}/**
     * Closes the tab defined by `$target`.
     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
     * @fires Accordion#up
     * @function
     */},{key:'up',value:function up($target){if($target.closest('[data-accordion]').is('[disabled]')){console.info('Cannot call up on an accordion that is disabled.');return;}var $aunts=$target.parent().siblings(),_this=this;if(!this.options.allowAllClosed&&!$aunts.hasClass('is-active')||!$target.parent().hasClass('is-active')){return;}$target.slideUp(_this.options.slideSpeed,function(){/**
         * Fires when the tab is done collapsing up.
         * @event Accordion#up
         */_this.$element.trigger('up.zf.accordion',[$target]);});$target.attr('aria-hidden',true).parent().removeClass('is-active');__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#'+$target.attr('aria-labelledby')).attr({'aria-expanded':false,'aria-selected':false});}/**
     * Destroys an instance of an accordion.
     * @fires Accordion#destroyed
     * @function
     */},{key:'_destroy',value:function _destroy(){this.$element.find('[data-tab-content]').stop(true).slideUp(0).css('display','');this.$element.find('a').off('.zf.accordion');if(this.options.deepLink){__WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off('popstate',this._checkDeepLink);}}}]);return Accordion;}(__WEBPACK_IMPORTED_MODULE_3__foundation_plugin__["Plugin"]);Accordion.defaults={/**
   * Amount of time to animate the opening of an accordion pane.
   * @option
   * @type {number}
   * @default 250
   */slideSpeed:250,/**
   * Allow the accordion to have multiple open panes.
   * @option
   * @type {boolean}
   * @default false
   */multiExpand:false,/**
   * Allow the accordion to close all panes.
   * @option
   * @type {boolean}
   * @default false
   */allowAllClosed:false,/**
   * Allows the window to scroll to content of pane specified by hash anchor
   * @option
   * @type {boolean}
   * @default false
   */deepLink:false,/**
   * Adjust the deep link scroll to make sure the top of the accordion panel is visible
   * @option
   * @type {boolean}
   * @default false
   */deepLinkSmudge:false,/**
   * Animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */deepLinkSmudgeDelay:300,/**
   * Update the browser history with the open accordion
   * @option
   * @type {boolean}
   * @default false
   */updateHistory:false};/***/},/***/5:/***/function _(module,exports){module.exports={Keyboard:window.Foundation.Keyboard};/***/},/***/80:/***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(14);/***/}/******/});
'use strict';/******/(function(modules){// webpackBootstrap
/******/// The module cache
/******/var installedModules={};/******//******/// The require function
/******/function __webpack_require__(moduleId){/******//******/// Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/// Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******//******/// Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******//******/// Flag the module as loaded
/******/module.l=true;/******//******/// Return the exports of the module
/******/return module.exports;/******/}/******//******//******/// expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******//******/// expose the module cache
/******/__webpack_require__.c=installedModules;/******//******/// identity function for calling harmony imports with the correct context
/******/__webpack_require__.i=function(value){return value;};/******//******/// define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{/******/configurable:false,/******/enumerable:true,/******/get:getter/******/});/******/}/******/};/******//******/// getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******//******/// Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******//******/// __webpack_public_path__
/******/__webpack_require__.p="";/******//******/// Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=102);/******/})(/************************************************************************//******/{/***/0:/***/function _(module,exports){module.exports=jQuery;/***/},/***/1:/***/function _(module,exports){module.exports={Foundation:window.Foundation};/***/},/***/102:/***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(36);/***/},/***/3:/***/function _(module,exports){module.exports={rtl:window.Foundation.rtl,GetYoDigits:window.Foundation.GetYoDigits,transitionend:window.Foundation.transitionend};/***/},/***/36:/***/function _(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__foundation_core__=__webpack_require__(1);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__foundation_core___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__foundation_core__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__=__webpack_require__(66);__WEBPACK_IMPORTED_MODULE_0__foundation_core__["Foundation"].Keyboard=__WEBPACK_IMPORTED_MODULE_1__foundation_util_keyboard__["a"/* Keyboard */];/***/},/***/66:/***/function _(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"a",function(){return Keyboard;});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery__=__webpack_require__(0);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_jquery___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core__=__webpack_require__(3);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__foundation_util_core___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__);/*******************************************
 *                                         *
 * This util was created by Marius Olbertz *
 * Please thank Marius on GitHub /owlbertz *
 * or the web http://www.mariusolbertz.de/ *
 *                                         *
 ******************************************/var keyCodes={9:'TAB',13:'ENTER',27:'ESCAPE',32:'SPACE',35:'END',36:'HOME',37:'ARROW_LEFT',38:'ARROW_UP',39:'ARROW_RIGHT',40:'ARROW_DOWN'};var commands={};// Functions pulled out to be referenceable from internals
function findFocusable($element){if(!$element){return false;}return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function(){if(!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).is(':visible')||__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).attr('tabindex')<0){return false;}//only have visible elements and those that have a tabindex greater or equal 0
return true;});}function parseKey(event){var key=keyCodes[event.which||event.keyCode]||String.fromCharCode(event.which).toUpperCase();// Remove un-printable characters, e.g. for `fromCharCode` calls for CTRL only events
key=key.replace(/\W+/,'');if(event.shiftKey)key='SHIFT_'+key;if(event.ctrlKey)key='CTRL_'+key;if(event.altKey)key='ALT_'+key;// Remove trailing underscore, in case only modifiers were used (e.g. only `CTRL_ALT`)
key=key.replace(/_$/,'');return key;}var Keyboard={keys:getKeyCodes(keyCodes),/**
   * Parses the (keyboard) event and returns a String that represents its key
   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
   * @param {Event} event - the event generated by the event handler
   * @return String key - String that represents the key pressed
   */parseKey:parseKey,/**
   * Handles the given (keyboard) event
   * @param {Event} event - the event generated by the event handler
   * @param {String} component - Foundation component's name, e.g. Slider or Reveal
   * @param {Objects} functions - collection of functions that are to be executed
   */handleKey:function handleKey(event,component,functions){var commandList=commands[component],keyCode=this.parseKey(event),cmds,command,fn;if(!commandList)return console.warn('Component not defined!');if(typeof commandList.ltr==='undefined'){// this component does not differentiate between ltr and rtl
cmds=commandList;// use plain list
}else{// merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
if(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__foundation_util_core__["rtl"])())cmds=__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({},commandList.ltr,commandList.rtl);else cmds=__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend({},commandList.rtl,commandList.ltr);}command=cmds[keyCode];fn=functions[command];if(fn&&typeof fn==='function'){// execute function  if exists
var returnValue=fn.apply();if(functions.handled||typeof functions.handled==='function'){// execute function when event was handled
functions.handled(returnValue);}}else{if(functions.unhandled||typeof functions.unhandled==='function'){// execute function when event was not handled
functions.unhandled();}}},/**
   * Finds all focusable elements within the given `$element`
   * @param {jQuery} $element - jQuery object to search within
   * @return {jQuery} $focusable - all focusable elements within `$element`
   */findFocusable:findFocusable,/**
   * Returns the component name name
   * @param {Object} component - Foundation component, e.g. Slider or Reveal
   * @return String componentName
   */register:function register(componentName,cmds){commands[componentName]=cmds;},// TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?
//
/**
   * Traps the focus in the given element.
   * @param  {jQuery} $element  jQuery object to trap the foucs into.
   */trapFocus:function trapFocus($element){var $focusable=findFocusable($element),$firstFocusable=$focusable.eq(0),$lastFocusable=$focusable.eq(-1);$element.on('keydown.zf.trapfocus',function(event){if(event.target===$lastFocusable[0]&&parseKey(event)==='TAB'){event.preventDefault();$firstFocusable.focus();}else if(event.target===$firstFocusable[0]&&parseKey(event)==='SHIFT_TAB'){event.preventDefault();$lastFocusable.focus();}});},/**
   * Releases the trapped focus from the given element.
   * @param  {jQuery} $element  jQuery object to release the focus for.
   */releaseFocus:function releaseFocus($element){$element.off('keydown.zf.trapfocus');}};/*
 * Constants for easier comparing.
 * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
 */function getKeyCodes(kcs){var k={};for(var kc in kcs){k[kcs[kc]]=kcs[kc];}return k;}/***/}/******/});
'use strict';jQuery(document).ready(function($){// Select all links with hashes
$('a[href*="#"]')// Remove links that don't actually link to anything
.not('[href="#"]').not('[href="#0"]').click(function(event){// On-page links
if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){// Figure out element to scroll to
var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');// Does a scroll target exist?
if(target.length){// Only prevent default if animation is actually gonna happen
event.preventDefault();$('html, body').animate({scrollTop:target.offset().top},1000,function(){// Callback after animation
// Must change focus!
var $target=$(target);$target.focus();if($target.is(":focus")){// Checking if the target was focused
return false;}else{$target.attr('tabindex','-1');// Adding tabindex for elements not focusable
$target.focus();// Set focus again
};});}}});});
"use strict";/*
* Initialize Foundation Sites plugins
*/$(document).foundation();