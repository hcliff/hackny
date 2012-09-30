goog.provide('hackny.client.bootstrap');
goog.require('cljs.core');
goog.require('jayq.util');
hackny.client.bootstrap.modal = (function modal(element,options){
return element.modal(jayq.util.clj__GT_js.call(null,options));
});
