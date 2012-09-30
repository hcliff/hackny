goog.provide('hackny.client.jayq');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
hackny.client.jayq.scroll_top = (function() { 
var scroll_top__delegate = function ($elem,p__55956){
var vec__55957__55958 = p__55956;
var v__55959 = cljs.core.nth.call(null,vec__55957__55958,0,null);
if(cljs.core.truth_(v__55959))
{return $elem.scrollTop(v__55959);
} else
{return $elem.scrollTop();
}
};
var scroll_top = function ($elem,var_args){
var p__55956 = null;
if (goog.isDef(var_args)) {
  p__55956 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return scroll_top__delegate.call(this, $elem, p__55956);
};
scroll_top.cljs$lang$maxFixedArity = 1;
scroll_top.cljs$lang$applyTo = (function (arglist__55960){
var $elem = cljs.core.first(arglist__55960);
var p__55956 = cljs.core.rest(arglist__55960);
return scroll_top__delegate($elem, p__55956);
});
scroll_top.cljs$lang$arity$variadic = scroll_top__delegate;
return scroll_top;
})()
;
/**
* @param {...*} var_args
*/
hackny.client.jayq.height = (function() { 
var height__delegate = function ($elem,p__55961){
var vec__55962__55963 = p__55961;
var v__55964 = cljs.core.nth.call(null,vec__55962__55963,0,null);
if(cljs.core.truth_(v__55964))
{return $elem.height(v__55964);
} else
{return $elem.height();
}
};
var height = function ($elem,var_args){
var p__55961 = null;
if (goog.isDef(var_args)) {
  p__55961 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return height__delegate.call(this, $elem, p__55961);
};
height.cljs$lang$maxFixedArity = 1;
height.cljs$lang$applyTo = (function (arglist__55965){
var $elem = cljs.core.first(arglist__55965);
var p__55961 = cljs.core.rest(arglist__55965);
return height__delegate($elem, p__55961);
});
height.cljs$lang$arity$variadic = height__delegate;
return height;
})()
;
