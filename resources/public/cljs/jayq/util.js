goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__17157 = {};
var G__17158__17159 = cljs.core.seq.call(null,m);
if(cljs.core.truth_(G__17158__17159))
{var G__17161__17163 = cljs.core.first.call(null,G__17158__17159);
var vec__17162__17164 = G__17161__17163;
var k__17165 = cljs.core.nth.call(null,vec__17162__17164,0,null);
var v__17166 = cljs.core.nth.call(null,vec__17162__17164,1,null);
var G__17158__17167 = G__17158__17159;
var G__17161__17168 = G__17161__17163;
var G__17158__17169 = G__17158__17167;
while(true){
var vec__17170__17171 = G__17161__17168;
var k__17172 = cljs.core.nth.call(null,vec__17170__17171,0,null);
var v__17173 = cljs.core.nth.call(null,vec__17170__17171,1,null);
var G__17158__17174 = G__17158__17169;
(out__17157[cljs.core.name.call(null,k__17172)] = v__17173);
var temp__3698__auto____17175 = cljs.core.next.call(null,G__17158__17174);
if(cljs.core.truth_(temp__3698__auto____17175))
{var G__17158__17176 = temp__3698__auto____17175;
{
var G__17177 = cljs.core.first.call(null,G__17158__17176);
var G__17178 = G__17158__17176;
G__17161__17168 = G__17177;
G__17158__17169 = G__17178;
continue;
}
} else
{}
break;
}
} else
{}
return out__17157;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__17179 = ((cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs__17179);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__17180){
var v = cljs.core.first(arglist__17180);
var text = cljs.core.rest(arglist__17180);
return log__delegate(v, text);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
jayq.util.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.reduce.call(null,(function (m,p__17181){
var vec__17182__17183 = p__17181;
var k__17184 = cljs.core.nth.call(null,vec__17182__17183,0,null);
var v__17185 = cljs.core.nth.call(null,vec__17182__17183,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__17184),clj__GT_js.call(null,v__17185));
}),cljs.core.ObjMap.fromObject([],{}),x).strobj;
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
