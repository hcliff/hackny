goog.provide('crate.util');
goog.require('cljs.core');
goog.require('clojure.string');
crate.util._STAR_base_url_STAR_ = null;
/**
* @param {...*} var_args
*/
crate.util.as_str = (function() {
var as_str = null;
var as_str__0 = (function (){
return "";
});
var as_str__1 = (function (x){
if((function (){var or__3548__auto____12353 = cljs.core.symbol_QMARK_.call(null,x);
if(or__3548__auto____12353)
{return or__3548__auto____12353;
} else
{return cljs.core.keyword_QMARK_.call(null,x);
}
})())
{return cljs.core.name.call(null,x);
} else
{return [cljs.core.str(x)].join('');
}
});
var as_str__2 = (function() { 
var G__12354__delegate = function (x,xs){
return (function (s,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__12355 = [cljs.core.str(s),cljs.core.str(as_str.call(null,cljs.core.first.call(null,more)))].join('');
var G__12356 = cljs.core.next.call(null,more);
s = G__12355;
more = G__12356;
continue;
}
} else
{return s;
}
break;
}
}).call(null,as_str.call(null,x),xs);
};
var G__12354 = function (x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12354__delegate.call(this, x, xs);
};
G__12354.cljs$lang$maxFixedArity = 1;
G__12354.cljs$lang$applyTo = (function (arglist__12357){
var x = cljs.core.first(arglist__12357);
var xs = cljs.core.rest(arglist__12357);
return G__12354__delegate(x, xs);
});
G__12354.cljs$lang$arity$variadic = G__12354__delegate;
return G__12354;
})()
;
as_str = function(x,var_args){
var xs = var_args;
switch(arguments.length){
case 0:
return as_str__0.call(this);
case 1:
return as_str__1.call(this,x);
default:
return as_str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
as_str.cljs$lang$maxFixedArity = 1;
as_str.cljs$lang$applyTo = as_str__2.cljs$lang$applyTo;
as_str.cljs$lang$arity$0 = as_str__0;
as_str.cljs$lang$arity$1 = as_str__1;
as_str.cljs$lang$arity$variadic = as_str__2.cljs$lang$arity$variadic;
return as_str;
})()
;
/**
* Change special characters into HTML character entities.
*/
crate.util.escape_html = (function escape_html(text){
return crate.util.as_str.call(null,text).replace("&","&amp;").replace("<","&lt;").replace(">","&gt;").replace("\"","&quot;");
});
/**
* Prepends the base-url to the supplied URI.
*/
crate.util.to_uri = (function to_uri(uri){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^\w+:.*/,uri)))
{return uri;
} else
{return [cljs.core.str(crate.util._STAR_base_url_STAR_),cljs.core.str(uri)].join('');
}
});
crate.util.url_encode_component = (function url_encode_component(s){
return encodeURIComponent(crate.util.as_str.call(null,s));
});
/**
* Turn a map of parameters into a urlencoded string.
*/
crate.util.url_encode = (function url_encode(params){
return clojure.string.join.call(null,"&",(function (){var iter__2455__auto____12365 = (function iter__12358(s__12359){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12359__12360 = s__12359;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__12359__12360)))
{var vec__12361__12362 = cljs.core.first.call(null,s__12359__12360);
var k__12363 = cljs.core.nth.call(null,vec__12361__12362,0,null);
var v__12364 = cljs.core.nth.call(null,vec__12361__12362,1,null);
return cljs.core.cons.call(null,[cljs.core.str(crate.util.url_encode_component.call(null,k__12363)),cljs.core.str("="),cljs.core.str(crate.util.url_encode_component.call(null,v__12364))].join(''),iter__12358.call(null,cljs.core.rest.call(null,s__12359__12360)));
} else
{return null;
}
break;
}
})));
});
return iter__2455__auto____12365.call(null,params);
})());
});
/**
* Creates a URL string from a variable list of arguments and an optional
* parameter map as the last argument. For example:
* (url "/group/" 4 "/products" {:page 9})
* => "/group/4/products?page=9"
* @param {...*} var_args
*/
crate.util.url = (function() { 
var url__delegate = function (args){
var params__12366 = cljs.core.last.call(null,args);
var args__12367 = cljs.core.butlast.call(null,args);
return [cljs.core.str(crate.util.to_uri.call(null,[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,args__12367)),cljs.core.str(((cljs.core.map_QMARK_.call(null,params__12366))?[cljs.core.str("?"),cljs.core.str(crate.util.url_encode.call(null,params__12366))].join(''):params__12366))].join('')))].join('');
};
var url = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return url__delegate.call(this, args);
};
url.cljs$lang$maxFixedArity = 0;
url.cljs$lang$applyTo = (function (arglist__12368){
var args = cljs.core.seq(arglist__12368);;
return url__delegate(args);
});
url.cljs$lang$arity$variadic = url__delegate;
return url;
})()
;
