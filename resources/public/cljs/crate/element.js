goog.provide('crate.element');
goog.require('cljs.core');
goog.require('crate.util');
goog.require('crate.compiler');
goog.require('clojure.string');
/**
* Wrap the supplied javascript up in script tags and a CDATA section.
*/
crate.element.javascript_tag = (function javascript_tag(script){
return cljs.core.PersistentVector.fromArray(["\uFDD0'script",cljs.core.ObjMap.fromObject(["\uFDD0'type"],{"\uFDD0'type":"text/javascript"}),[cljs.core.str("//<![CDATA[\n"),cljs.core.str(script),cljs.core.str("\n//]]>")].join('')]);
});
void 0;
var func__9576__auto____12369 = (function() { 
var G__12370__delegate = function (url,content){
return cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":crate.util.to_uri.call(null,url)}),content]);
};
var G__12370 = function (url,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12370__delegate.call(this, url, content);
};
G__12370.cljs$lang$maxFixedArity = 1;
G__12370.cljs$lang$applyTo = (function (arglist__12371){
var url = cljs.core.first(arglist__12371);
var content = cljs.core.rest(arglist__12371);
return G__12370__delegate(url, content);
});
G__12370.cljs$lang$arity$variadic = G__12370__delegate;
return G__12370;
})()
;
crate.element.link_to = crate.compiler.add_optional_attrs.call(null,func__9576__auto____12369);
void 0;
var func__9576__auto____12377 = (function() { 
var G__12378__delegate = function (e_mail,p__12372){
var vec__12373__12374 = p__12372;
var content__12375 = cljs.core.nth.call(null,vec__12373__12374,0,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')}),(function (){var or__3548__auto____12376 = content__12375;
if(cljs.core.truth_(or__3548__auto____12376))
{return or__3548__auto____12376;
} else
{return e_mail;
}
})()]);
};
var G__12378 = function (e_mail,var_args){
var p__12372 = null;
if (goog.isDef(var_args)) {
  p__12372 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12378__delegate.call(this, e_mail, p__12372);
};
G__12378.cljs$lang$maxFixedArity = 1;
G__12378.cljs$lang$applyTo = (function (arglist__12379){
var e_mail = cljs.core.first(arglist__12379);
var p__12372 = cljs.core.rest(arglist__12379);
return G__12378__delegate(e_mail, p__12372);
});
G__12378.cljs$lang$arity$variadic = G__12378__delegate;
return G__12378;
})()
;
crate.element.mail_to = crate.compiler.add_optional_attrs.call(null,func__9576__auto____12377);
void 0;
var func__9576__auto____12385 = (function (coll){
return cljs.core.PersistentVector.fromArray(["\uFDD0'ul",(function (){var iter__2455__auto____12384 = (function iter__12380(s__12381){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12381__12382 = s__12381;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__12381__12382)))
{var x__12383 = cljs.core.first.call(null,s__12381__12382);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",x__12383]),iter__12380.call(null,cljs.core.rest.call(null,s__12381__12382)));
} else
{return null;
}
break;
}
})));
});
return iter__2455__auto____12384.call(null,coll);
})()]);
});
crate.element.unordered_list = crate.compiler.add_optional_attrs.call(null,func__9576__auto____12385);
void 0;
var func__9576__auto____12391 = (function (coll){
return cljs.core.PersistentVector.fromArray(["\uFDD0'ol",(function (){var iter__2455__auto____12390 = (function iter__12386(s__12387){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12387__12388 = s__12387;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__12387__12388)))
{var x__12389 = cljs.core.first.call(null,s__12387__12388);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",x__12389]),iter__12386.call(null,cljs.core.rest.call(null,s__12387__12388)));
} else
{return null;
}
break;
}
})));
});
return iter__2455__auto____12390.call(null,coll);
})()]);
});
crate.element.ordered_list = crate.compiler.add_optional_attrs.call(null,func__9576__auto____12391);
void 0;
var func__9576__auto____12392 = (function() {
var G__12393 = null;
var G__12393__1 = (function (src){
return cljs.core.PersistentVector.fromArray(["\uFDD0'img",cljs.core.ObjMap.fromObject(["\uFDD0'src"],{"\uFDD0'src":crate.util.to_uri.call(null,src)})]);
});
var G__12393__2 = (function (src,alt){
return cljs.core.PersistentVector.fromArray(["\uFDD0'img",cljs.core.ObjMap.fromObject(["\uFDD0'src","\uFDD0'alt"],{"\uFDD0'src":crate.util.to_uri.call(null,src),"\uFDD0'alt":alt})]);
});
G__12393 = function(src,alt){
switch(arguments.length){
case 1:
return G__12393__1.call(this,src);
case 2:
return G__12393__2.call(this,src,alt);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12393;
})()
;
crate.element.image = crate.compiler.add_optional_attrs.call(null,func__9576__auto____12392);
