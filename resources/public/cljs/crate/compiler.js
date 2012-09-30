goog.provide('crate.compiler');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('crate.binding');
crate.compiler.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
void 0;
void 0;
void 0;
crate.compiler.group_id = cljs.core.atom.call(null,0);
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.fromArray([]));
crate.compiler.capture_binding = (function capture_binding(tag,b){
return cljs.core.swap_BANG_.call(null,crate.compiler.bindings,cljs.core.conj,cljs.core.PersistentVector.fromArray([tag,b]));
});
crate.compiler.dom_binding = (function (){var method_table__2525__auto____11998 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__2526__auto____11999 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__2527__auto____12000 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__2528__auto____12001 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__2529__auto____12002 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("dom-binding",(function (type,_12003,_){
return type;
}),"\uFDD0'default",hierarchy__2529__auto____12002,method_table__2525__auto____11998,prefer_table__2526__auto____11999,method_cache__2527__auto____12000,cached_hierarchy__2528__auto____12001));
})();
cljs.core._add_method.call(null,crate.compiler.dom_binding,"\uFDD0'text",(function (_,b,elem){
return crate.binding.on_change.call(null,b,(function (v){
return goog.dom.setTextContent.call(null,elem,v);
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,"\uFDD0'attr",(function (_,p__12004,elem){
var vec__12005__12006 = p__12004;
var k__12007 = cljs.core.nth.call(null,vec__12005__12006,0,null);
var b__12008 = cljs.core.nth.call(null,vec__12005__12006,1,null);
return crate.binding.on_change.call(null,b__12008,(function (v){
return crate.compiler.dom_attr.call(null,elem,k__12007,v);
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,"\uFDD0'style",(function (_,p__12009,elem){
var vec__12010__12011 = p__12009;
var k__12012 = cljs.core.nth.call(null,vec__12010__12011,0,null);
var b__12013 = cljs.core.nth.call(null,vec__12010__12011,1,null);
return crate.binding.on_change.call(null,b__12013,(function (v){
return crate.compiler.dom_style.call(null,elem,k__12012,v);
}));
}));
crate.compiler.dom_add = (function dom_add(bc,parent,elem,v){
var temp__3695__auto____12014 = crate.binding.opt.call(null,bc,"\uFDD0'add");
if(cljs.core.truth_(temp__3695__auto____12014))
{var adder__12015 = temp__3695__auto____12014;
return adder__12015.call(null,parent,elem,v);
} else
{return goog.dom.appendChild.call(null,parent,elem);
}
});
crate.compiler.dom_remove = (function dom_remove(bc,elem){
var temp__3695__auto____12016 = crate.binding.opt.call(null,bc,"\uFDD0'remove");
if(cljs.core.truth_(temp__3695__auto____12016))
{var remover__12017 = temp__3695__auto____12016;
return remover__12017.call(null,elem);
} else
{return goog.dom.removeNode.call(null,elem);
}
});
cljs.core._add_method.call(null,crate.compiler.dom_binding,"\uFDD0'coll",(function (_,bc,parent){
return crate.binding.on_change.call(null,bc,(function (type,elem,v){
var pred__12018__12021 = cljs.core._EQ_;
var expr__12019__12022 = type;
if(cljs.core.truth_(pred__12018__12021.call(null,"\uFDD0'add",expr__12019__12022)))
{return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else
{if(cljs.core.truth_(pred__12018__12021.call(null,"\uFDD0'remove",expr__12019__12022)))
{return crate.compiler.dom_remove.call(null,bc,elem);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12019__12022)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){
var G__12023__12024 = cljs.core.seq.call(null,bs);
if(cljs.core.truth_(G__12023__12024))
{var G__12026__12028 = cljs.core.first.call(null,G__12023__12024);
var vec__12027__12029 = G__12026__12028;
var type__12030 = cljs.core.nth.call(null,vec__12027__12029,0,null);
var b__12031 = cljs.core.nth.call(null,vec__12027__12029,1,null);
var G__12023__12032 = G__12023__12024;
var G__12026__12033 = G__12026__12028;
var G__12023__12034 = G__12023__12032;
while(true){
var vec__12035__12036 = G__12026__12033;
var type__12037 = cljs.core.nth.call(null,vec__12035__12036,0,null);
var b__12038 = cljs.core.nth.call(null,vec__12035__12036,1,null);
var G__12023__12039 = G__12023__12034;
crate.compiler.dom_binding.call(null,type__12037,b__12038,elem);
var temp__3698__auto____12040 = cljs.core.next.call(null,G__12023__12039);
if(cljs.core.truth_(temp__3698__auto____12040))
{var G__12023__12041 = temp__3698__auto____12040;
{
var G__12042 = cljs.core.first.call(null,G__12023__12041);
var G__12043 = G__12023__12041;
G__12026__12033 = G__12042;
G__12023__12034 = G__12043;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
crate.compiler.dom_style = (function() {
var dom_style = null;
var dom_style__2 = (function (elem,v){
if(cljs.core.string_QMARK_.call(null,v))
{elem.setAttribute("style",v);
} else
{if(cljs.core.map_QMARK_.call(null,v))
{var G__12044__12045 = cljs.core.seq.call(null,v);
if(cljs.core.truth_(G__12044__12045))
{var G__12047__12049 = cljs.core.first.call(null,G__12044__12045);
var vec__12048__12050 = G__12047__12049;
var k__12051 = cljs.core.nth.call(null,vec__12048__12050,0,null);
var v__12052 = cljs.core.nth.call(null,vec__12048__12050,1,null);
var G__12044__12053 = G__12044__12045;
var G__12047__12054 = G__12047__12049;
var G__12044__12055 = G__12044__12053;
while(true){
var vec__12056__12057 = G__12047__12054;
var k__12058 = cljs.core.nth.call(null,vec__12056__12057,0,null);
var v__12059 = cljs.core.nth.call(null,vec__12056__12057,1,null);
var G__12044__12060 = G__12044__12055;
dom_style.call(null,elem,k__12058,v__12059);
var temp__3698__auto____12061 = cljs.core.next.call(null,G__12044__12060);
if(cljs.core.truth_(temp__3698__auto____12061))
{var G__12044__12062 = temp__3698__auto____12061;
{
var G__12064 = cljs.core.first.call(null,G__12044__12062);
var G__12065 = G__12044__12062;
G__12047__12054 = G__12064;
G__12044__12055 = G__12065;
continue;
}
} else
{}
break;
}
} else
{}
} else
{if(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v)))
{crate.compiler.capture_binding.call(null,"\uFDD0'attr",cljs.core.PersistentVector.fromArray(["\uFDD0'style",v]));
dom_style.call(null,crate.binding.value.call(null,v));
} else
{}
}
}
return elem;
});
var dom_style__3 = (function (elem,k,v){
var v__12063 = (cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,"\uFDD0'style",cljs.core.PersistentVector.fromArray([k,v]));
return crate.binding.value.call(null,v);
})():v);
return goog.style.setStyle.call(null,elem,cljs.core.name.call(null,k),v__12063);
});
dom_style = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_style__2.call(this,elem,k);
case 3:
return dom_style__3.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
dom_style.cljs$lang$arity$2 = dom_style__2;
dom_style.cljs$lang$arity$3 = dom_style__3;
return dom_style;
})()
;
crate.compiler.dom_attr = (function() {
var dom_attr = null;
var dom_attr__2 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs)))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__12066__12067 = cljs.core.seq.call(null,attrs);
if(cljs.core.truth_(G__12066__12067))
{var G__12069__12071 = cljs.core.first.call(null,G__12066__12067);
var vec__12070__12072 = G__12069__12071;
var k__12073 = cljs.core.nth.call(null,vec__12070__12072,0,null);
var v__12074 = cljs.core.nth.call(null,vec__12070__12072,1,null);
var G__12066__12075 = G__12066__12067;
var G__12069__12076 = G__12069__12071;
var G__12066__12077 = G__12066__12075;
while(true){
var vec__12078__12079 = G__12069__12076;
var k__12080 = cljs.core.nth.call(null,vec__12078__12079,0,null);
var v__12081 = cljs.core.nth.call(null,vec__12078__12079,1,null);
var G__12066__12082 = G__12066__12077;
dom_attr.call(null,elem,k__12080,v__12081);
var temp__3698__auto____12083 = cljs.core.next.call(null,G__12066__12082);
if(cljs.core.truth_(temp__3698__auto____12083))
{var G__12066__12084 = temp__3698__auto____12083;
{
var G__12086 = cljs.core.first.call(null,G__12066__12084);
var G__12087 = G__12066__12084;
G__12069__12076 = G__12086;
G__12066__12077 = G__12087;
continue;
}
} else
{}
break;
}
} else
{}
return elem;
}
} else
{return null;
}
});
var dom_attr__3 = (function (elem,k,v){
if(cljs.core._EQ_.call(null,k,"\uFDD0'style"))
{crate.compiler.dom_style.call(null,elem,v);
} else
{var v__12085 = (cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,"\uFDD0'attr",cljs.core.PersistentVector.fromArray([k,v]));
return crate.binding.value.call(null,v);
})():v);
elem.setAttribute(cljs.core.name.call(null,k),v__12085);
}
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_attr__2.call(this,elem,k);
case 3:
return dom_attr__3.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
dom_attr.cljs$lang$arity$2 = dom_attr__2;
dom_attr.cljs$lang$arity$3 = dom_attr__3;
return dom_attr;
})()
;
crate.compiler.as_content = (function as_content(parent,content){
var G__12088__12089 = cljs.core.seq.call(null,content);
if(cljs.core.truth_(G__12088__12089))
{var c__12090 = cljs.core.first.call(null,G__12088__12089);
var G__12088__12091 = G__12088__12089;
while(true){
var child__12092 = (((c__12090 == null))?null:((cljs.core.map_QMARK_.call(null,c__12090))?(function(){throw "Maps cannot be used as content"})():((cljs.core.string_QMARK_.call(null,c__12090))?goog.dom.createTextNode.call(null,c__12090):((cljs.core.vector_QMARK_.call(null,c__12090))?crate.compiler.elem_factory.call(null,c__12090):((cljs.core.seq_QMARK_.call(null,c__12090))?as_content.call(null,parent,c__12090):(cljs.core.truth_(crate.binding.binding_coll_QMARK_.call(null,c__12090))?(function (){crate.compiler.capture_binding.call(null,"\uFDD0'coll",c__12090);
return as_content.call(null,parent,cljs.core.PersistentVector.fromArray([crate.binding.value.call(null,c__12090)]));
})():(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,c__12090))?(function (){crate.compiler.capture_binding.call(null,"\uFDD0'text",c__12090);
return as_content.call(null,parent,cljs.core.PersistentVector.fromArray([crate.binding.value.call(null,c__12090)]));
})():(cljs.core.truth_(c__12090.nodeName)?c__12090:null))))))));
if(cljs.core.truth_(child__12092))
{goog.dom.appendChild.call(null,parent,child__12092);
} else
{}
var temp__3698__auto____12093 = cljs.core.next.call(null,G__12088__12091);
if(cljs.core.truth_(temp__3698__auto____12093))
{var G__12088__12094 = temp__3698__auto____12093;
{
var G__12095 = cljs.core.first.call(null,G__12088__12094);
var G__12096 = G__12088__12094;
c__12090 = G__12095;
G__12088__12091 = G__12096;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.compiler.normalize_element = (function normalize_element(p__12098){
var vec__12099__12100 = p__12098;
var tag__12101 = cljs.core.nth.call(null,vec__12099__12100,0,null);
var content__12102 = cljs.core.nthnext.call(null,vec__12099__12100,1);
if(cljs.core.not.call(null,(function (){var or__3548__auto____12103 = cljs.core.keyword_QMARK_.call(null,tag__12101);
if(or__3548__auto____12103)
{return or__3548__auto____12103;
} else
{var or__3548__auto____12104 = cljs.core.symbol_QMARK_.call(null,tag__12101);
if(or__3548__auto____12104)
{return or__3548__auto____12104;
} else
{return cljs.core.string_QMARK_.call(null,tag__12101);
}
}
})()))
{throw [cljs.core.str(tag__12101),cljs.core.str(" is not a valid tag name.")].join('');
} else
{}
var vec__12105__12107 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag__12101));
var ___12108 = cljs.core.nth.call(null,vec__12105__12107,0,null);
var tag__12109 = cljs.core.nth.call(null,vec__12105__12107,1,null);
var id__12110 = cljs.core.nth.call(null,vec__12105__12107,2,null);
var class$__12111 = cljs.core.nth.call(null,vec__12105__12107,3,null);
var vec__12106__12118 = (function (){var vec__12112__12113 = clojure.string.split.call(null,tag__12109,/:/);
var nsp__12114 = cljs.core.nth.call(null,vec__12112__12113,0,null);
var t__12115 = cljs.core.nth.call(null,vec__12112__12113,1,null);
var ns_xmlns__12116 = crate.compiler.xmlns.call(null,cljs.core.keyword.call(null,nsp__12114));
if(cljs.core.truth_(t__12115))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____12117 = ns_xmlns__12116;
if(cljs.core.truth_(or__3548__auto____12117))
{return or__3548__auto____12117;
} else
{return nsp__12114;
}
})(),t__12115]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.compiler.xmlns),nsp__12114]);
}
})();
var nsp__12119 = cljs.core.nth.call(null,vec__12106__12118,0,null);
var tag__12120 = cljs.core.nth.call(null,vec__12106__12118,1,null);
var tag_attrs__12122 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__12097_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__12097_SHARP_) == null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____12121 = id__12110;
if(cljs.core.truth_(or__3548__auto____12121))
{return or__3548__auto____12121;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__12111)?clojure.string.replace.call(null,class$__12111,/\./," "):null)})));
var map_attrs__12123 = cljs.core.first.call(null,content__12102);
if(cljs.core.map_QMARK_.call(null,map_attrs__12123))
{return cljs.core.PersistentVector.fromArray([nsp__12119,tag__12120,cljs.core.merge.call(null,tag_attrs__12122,map_attrs__12123),cljs.core.next.call(null,content__12102)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__12119,tag__12120,tag_attrs__12122,content__12102]);
}
});
crate.compiler.parse_content = (function parse_content(elem,content){
var attrs__12124 = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,attrs__12124))
{crate.compiler.dom_attr.call(null,elem,attrs__12124);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){
return document.createElementNS(nsp,tag);
}):(function (_,tag){
return document.createElement(tag);
}));
crate.compiler.elem_factory = (function elem_factory(tag_def){
var bindings12125__12126 = crate.compiler.bindings;
try{crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.fromArray([]));
var vec__12128__12129 = crate.compiler.normalize_element.call(null,tag_def);
var nsp__12130 = cljs.core.nth.call(null,vec__12128__12129,0,null);
var tag__12131 = cljs.core.nth.call(null,vec__12128__12129,1,null);
var attrs__12132 = cljs.core.nth.call(null,vec__12128__12129,2,null);
var content__12133 = cljs.core.nth.call(null,vec__12128__12129,3,null);
var elem__12134 = crate.compiler.create_elem.call(null,nsp__12130,tag__12131);
crate.compiler.dom_attr.call(null,elem__12134,attrs__12132);
crate.compiler.as_content.call(null,elem__12134,content__12133);
crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem__12134);
return elem__12134;
}finally {crate.compiler.bindings = bindings12125__12126;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__12139__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__12135__12136 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag__12137 = cljs.core.nth.call(null,vec__12135__12136,0,null);
var body__12138 = cljs.core.nthnext.call(null,vec__12135__12136,1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body__12138)))
{return cljs.core.apply.call(null,cljs.core.vector,tag__12137,cljs.core.merge.call(null,cljs.core.first.call(null,body__12138),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body__12138));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag__12137,cljs.core.first.call(null,args),body__12138);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__12139 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12139__delegate.call(this, args);
};
G__12139.cljs$lang$maxFixedArity = 0;
G__12139.cljs$lang$applyTo = (function (arglist__12140){
var args = cljs.core.seq(arglist__12140);;
return G__12139__delegate(args);
});
G__12139.cljs$lang$arity$variadic = G__12139__delegate;
return G__12139;
})()
;
});
