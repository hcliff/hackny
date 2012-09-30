goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.string_QMARK_.call(null,sel))
{return sel;
} else
{if(cljs.core.fn_QMARK_.call(null,sel))
{var temp__3695__auto____17049 = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__3695__auto____17049))
{var cm__17050 = temp__3695__auto____17049;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm__17050),cljs.core.str("]")].join('');
} else
{return sel;
}
} else
{if(cljs.core.keyword_QMARK_.call(null,sel))
{return cljs.core.name.call(null,sel);
} else
{if("\uFDD0'else")
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__17051){
var vec__17052__17053 = p__17051;
var context__17054 = cljs.core.nth.call(null,vec__17052__17053,0,null);
if(cljs.core.not.call(null,context__17054))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context__17054);
}
};
var $ = function (sel,var_args){
var p__17051 = null;
if (goog.isDef(var_args)) {
  p__17051 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__17051);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__17055){
var sel = cljs.core.first(arglist__17055);
var p__17051 = cljs.core.rest(arglist__17055);
return $__delegate(sel, p__17051);
});
$.cljs$lang$arity$variadic = $__delegate;
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
return cljs.core.ci_reduce.call(null,this$,f);
});
jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,this$,f,start);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var or__3548__auto____17056 = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__3548__auto____17056))
{return or__3548__auto____17056;
} else
{return null;
}
});
jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{if((void 0 === not_found))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
return this$.get(0);
});
jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
if((cljs.core.count.call(null,this$) > 1))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__17057 = null;
var G__17057__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__17057__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__17057 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__17057__2.call(this,_,k);
case 3:
return G__17057__3.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17057;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.clj__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.keyword_QMARK_.call(null,opts))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.clj__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__17058){
var vec__17059__17060 = p__17058;
var v__17061 = cljs.core.nth.call(null,vec__17059__17060,0,null);
var a__17062 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v__17061))
{return $elem.attr(a__17062);
} else
{return $elem.attr(a__17062,v__17061);
}
};
var attr = function ($elem,a,var_args){
var p__17058 = null;
if (goog.isDef(var_args)) {
  p__17058 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__17058);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__17063){
var $elem = cljs.core.first(arglist__17063);
var a = cljs.core.first(cljs.core.next(arglist__17063));
var p__17058 = cljs.core.rest(cljs.core.next(arglist__17063));
return attr__delegate($elem, a, p__17058);
});
attr.cljs$lang$arity$variadic = attr__delegate;
return attr;
})()
;
jayq.core.remove_attr = (function remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__17064){
var vec__17065__17066 = p__17064;
var v__17067 = cljs.core.nth.call(null,vec__17065__17066,0,null);
var k__17068 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v__17067))
{return $elem.data(k__17068);
} else
{return $elem.data(k__17068,v__17067);
}
};
var data = function ($elem,k,var_args){
var p__17064 = null;
if (goog.isDef(var_args)) {
  p__17064 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__17064);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__17069){
var $elem = cljs.core.first(arglist__17069);
var k = cljs.core.first(cljs.core.next(arglist__17069));
var p__17064 = cljs.core.rest(cljs.core.next(arglist__17069));
return data__delegate($elem, k, p__17064);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__17070 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__17070);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__17071 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__17071);
});
jayq.core.toggle_class = (function toggle_class($elem,cl){
var cl__17072 = cljs.core.name.call(null,cl);
return $elem.toggleClass(cl__17072);
});
jayq.core.has_class = (function has_class($elem,cl){
var cl__17073 = cljs.core.name.call(null,cl);
return $elem.hasClass(cl__17073);
});
jayq.core.after = (function after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__17074){
var vec__17075__17076 = p__17074;
var speed__17077 = cljs.core.nth.call(null,vec__17075__17076,0,null);
var on_finish__17078 = cljs.core.nth.call(null,vec__17075__17076,1,null);
return $elem.hide(speed__17077,on_finish__17078);
};
var hide = function ($elem,var_args){
var p__17074 = null;
if (goog.isDef(var_args)) {
  p__17074 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__17074);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__17079){
var $elem = cljs.core.first(arglist__17079);
var p__17074 = cljs.core.rest(arglist__17079);
return hide__delegate($elem, p__17074);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__17080){
var vec__17081__17082 = p__17080;
var speed__17083 = cljs.core.nth.call(null,vec__17081__17082,0,null);
var on_finish__17084 = cljs.core.nth.call(null,vec__17081__17082,1,null);
return $elem.show(speed__17083,on_finish__17084);
};
var show = function ($elem,var_args){
var p__17080 = null;
if (goog.isDef(var_args)) {
  p__17080 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__17080);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__17085){
var $elem = cljs.core.first(arglist__17085);
var p__17080 = cljs.core.rest(arglist__17085);
return show__delegate($elem, p__17080);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__17086){
var vec__17087__17088 = p__17086;
var speed__17089 = cljs.core.nth.call(null,vec__17087__17088,0,null);
var on_finish__17090 = cljs.core.nth.call(null,vec__17087__17088,1,null);
return $elem.toggle(speed__17089,on_finish__17090);
};
var toggle = function ($elem,var_args){
var p__17086 = null;
if (goog.isDef(var_args)) {
  p__17086 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__17086);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__17091){
var $elem = cljs.core.first(arglist__17091);
var p__17086 = cljs.core.rest(arglist__17091);
return toggle__delegate($elem, p__17086);
});
toggle.cljs$lang$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__17092){
var vec__17093__17094 = p__17092;
var speed__17095 = cljs.core.nth.call(null,vec__17093__17094,0,null);
var on_finish__17096 = cljs.core.nth.call(null,vec__17093__17094,1,null);
return $elem.fadeOut(speed__17095,on_finish__17096);
};
var fade_out = function ($elem,var_args){
var p__17092 = null;
if (goog.isDef(var_args)) {
  p__17092 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__17092);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__17097){
var $elem = cljs.core.first(arglist__17097);
var p__17092 = cljs.core.rest(arglist__17097);
return fade_out__delegate($elem, p__17092);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__17098){
var vec__17099__17100 = p__17098;
var speed__17101 = cljs.core.nth.call(null,vec__17099__17100,0,null);
var on_finish__17102 = cljs.core.nth.call(null,vec__17099__17100,1,null);
return $elem.fadeIn(speed__17101,on_finish__17102);
};
var fade_in = function ($elem,var_args){
var p__17098 = null;
if (goog.isDef(var_args)) {
  p__17098 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__17098);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__17103){
var $elem = cljs.core.first(arglist__17103);
var p__17098 = cljs.core.rest(arglist__17103);
return fade_in__delegate($elem, p__17098);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__17104){
var vec__17105__17106 = p__17104;
var speed__17107 = cljs.core.nth.call(null,vec__17105__17106,0,null);
var on_finish__17108 = cljs.core.nth.call(null,vec__17105__17106,1,null);
return $elem.slideUp(speed__17107,on_finish__17108);
};
var slide_up = function ($elem,var_args){
var p__17104 = null;
if (goog.isDef(var_args)) {
  p__17104 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__17104);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__17109){
var $elem = cljs.core.first(arglist__17109);
var p__17104 = cljs.core.rest(arglist__17109);
return slide_up__delegate($elem, p__17104);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__17110){
var vec__17111__17112 = p__17110;
var speed__17113 = cljs.core.nth.call(null,vec__17111__17112,0,null);
var on_finish__17114 = cljs.core.nth.call(null,vec__17111__17112,1,null);
return $elem.slideDown(speed__17113,on_finish__17114);
};
var slide_down = function ($elem,var_args){
var p__17110 = null;
if (goog.isDef(var_args)) {
  p__17110 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__17110);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__17115){
var $elem = cljs.core.first(arglist__17115);
var p__17110 = cljs.core.rest(arglist__17115);
return slide_down__delegate($elem, p__17110);
});
slide_down.cljs$lang$arity$variadic = slide_down__delegate;
return slide_down;
})()
;
jayq.core.parent = (function parent($elem){
return $elem.parent();
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
/**
* @param {...*} var_args
*/
jayq.core.closest = (function() { 
var closest__delegate = function ($elem,selector,p__17116){
var vec__17117__17118 = p__17116;
var context__17119 = cljs.core.nth.call(null,vec__17117__17118,0,null);
return $elem.closest(selector,context__17119);
};
var closest = function ($elem,selector,var_args){
var p__17116 = null;
if (goog.isDef(var_args)) {
  p__17116 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return closest__delegate.call(this, $elem, selector, p__17116);
};
closest.cljs$lang$maxFixedArity = 2;
closest.cljs$lang$applyTo = (function (arglist__17120){
var $elem = cljs.core.first(arglist__17120);
var selector = cljs.core.first(cljs.core.next(arglist__17120));
var p__17116 = cljs.core.rest(cljs.core.next(arglist__17120));
return closest__delegate($elem, selector, p__17116);
});
closest.cljs$lang$arity$variadic = closest__delegate;
return closest;
})()
;
jayq.core.clone = (function clone($elem){
return $elem.clone();
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__17121){
var vec__17122__17123 = p__17121;
var v__17124 = cljs.core.nth.call(null,vec__17122__17123,0,null);
if(cljs.core.truth_(v__17124))
{return $elem.val(v__17124);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__17121 = null;
if (goog.isDef(var_args)) {
  p__17121 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__17121);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__17125){
var $elem = cljs.core.first(arglist__17125);
var p__17121 = cljs.core.rest(arglist__17125);
return val__delegate($elem, p__17121);
});
val.cljs$lang$arity$variadic = val__delegate;
return val;
})()
;
jayq.core.serialize = (function serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.document_ready = (function document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.xhr = (function xhr(p__17126,content,callback){
var vec__17127__17128 = p__17126;
var method__17129 = cljs.core.nth.call(null,vec__17127__17128,0,null);
var uri__17130 = cljs.core.nth.call(null,vec__17127__17128,1,null);
var params__17131 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__17129)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));
return jQuery.ajax(uri__17130,params__17131);
});
jayq.core.ajax = (function() {
var ajax = null;
var ajax__1 = (function (settings){
return jQuery.ajax(jayq.util.clj__GT_js.call(null,settings));
});
var ajax__2 = (function (url,settings){
return jQuery.ajax(url,jayq.util.clj__GT_js.call(null,settings));
});
ajax = function(url,settings){
switch(arguments.length){
case 1:
return ajax__1.call(this,url);
case 2:
return ajax__2.call(this,url,settings);
}
throw('Invalid arity: ' + arguments.length);
};
ajax.cljs$lang$arity$1 = ajax__1;
ajax.cljs$lang$arity$2 = ajax__2;
return ajax;
})()
;
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
/**
* @param {...*} var_args
*/
jayq.core.unbind = (function() { 
var unbind__delegate = function ($elem,ev,p__17132){
var vec__17133__17134 = p__17132;
var func__17135 = cljs.core.nth.call(null,vec__17133__17134,0,null);
return $elem.unbind(cljs.core.name.call(null,ev),func__17135);
};
var unbind = function ($elem,ev,var_args){
var p__17132 = null;
if (goog.isDef(var_args)) {
  p__17132 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return unbind__delegate.call(this, $elem, ev, p__17132);
};
unbind.cljs$lang$maxFixedArity = 2;
unbind.cljs$lang$applyTo = (function (arglist__17136){
var $elem = cljs.core.first(arglist__17136);
var ev = cljs.core.first(cljs.core.next(arglist__17136));
var p__17132 = cljs.core.rest(cljs.core.next(arglist__17136));
return unbind__delegate($elem, ev, p__17132);
});
unbind.cljs$lang$arity$variadic = unbind__delegate;
return unbind;
})()
;
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function __GT_event(e){
if(cljs.core.keyword_QMARK_.call(null,e))
{return cljs.core.name.call(null,e);
} else
{if(cljs.core.map_QMARK_.call(null,e))
{return jayq.util.clj__GT_js.call(null,e);
} else
{if(cljs.core.coll_QMARK_.call(null,e))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Unknown event type: "),cljs.core.str(e)].join('')));
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.on = (function() { 
var on__delegate = function ($elem,events,p__17137){
var vec__17138__17139 = p__17137;
var sel__17140 = cljs.core.nth.call(null,vec__17138__17139,0,null);
var data__17141 = cljs.core.nth.call(null,vec__17138__17139,1,null);
var handler__17142 = cljs.core.nth.call(null,vec__17138__17139,2,null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__17140),data__17141,handler__17142);
};
var on = function ($elem,events,var_args){
var p__17137 = null;
if (goog.isDef(var_args)) {
  p__17137 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__17137);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__17143){
var $elem = cljs.core.first(arglist__17143);
var events = cljs.core.first(cljs.core.next(arglist__17143));
var p__17137 = cljs.core.rest(cljs.core.next(arglist__17143));
return on__delegate($elem, events, p__17137);
});
on.cljs$lang$arity$variadic = on__delegate;
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__17144){
var vec__17145__17146 = p__17144;
var sel__17147 = cljs.core.nth.call(null,vec__17145__17146,0,null);
var data__17148 = cljs.core.nth.call(null,vec__17145__17146,1,null);
var handler__17149 = cljs.core.nth.call(null,vec__17145__17146,2,null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__17147),data__17148,handler__17149);
};
var one = function ($elem,events,var_args){
var p__17144 = null;
if (goog.isDef(var_args)) {
  p__17144 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__17144);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__17150){
var $elem = cljs.core.first(arglist__17150);
var events = cljs.core.first(cljs.core.next(arglist__17150));
var p__17144 = cljs.core.rest(cljs.core.next(arglist__17150));
return one__delegate($elem, events, p__17144);
});
one.cljs$lang$arity$variadic = one__delegate;
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__17151){
var vec__17152__17153 = p__17151;
var sel__17154 = cljs.core.nth.call(null,vec__17152__17153,0,null);
var handler__17155 = cljs.core.nth.call(null,vec__17152__17153,1,null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__17154),handler__17155);
};
var off = function ($elem,events,var_args){
var p__17151 = null;
if (goog.isDef(var_args)) {
  p__17151 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__17151);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__17156){
var $elem = cljs.core.first(arglist__17156);
var events = cljs.core.first(cljs.core.next(arglist__17156));
var p__17151 = cljs.core.rest(cljs.core.next(arglist__17156));
return off__delegate($elem, events, p__17151);
});
off.cljs$lang$arity$variadic = off__delegate;
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
