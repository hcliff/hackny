goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
var id__12141 = cljs.core.atom.call(null,0);
crate.binding.watch_id = (function watch_id(){
return cljs.core.keyword.call(null,[cljs.core.str("binding"),cljs.core.str(cljs.core.swap_BANG_.call(null,id__12141,cljs.core.inc))].join(''));
});
void 0;crate.binding.bindable_coll = {};
void 0;void 0;crate.binding.bindable = {};
crate.binding._value = (function _value(this$){
if((function (){var and__3546__auto____12142 = this$;
if(and__3546__auto____12142)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__3546__auto____12142;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{return (function (){var or__3548__auto____12143 = (crate.binding._value[goog.typeOf.call(null,this$)]);
if(or__3548__auto____12143)
{return or__3548__auto____12143;
} else
{var or__3548__auto____12144 = (crate.binding._value["_"]);
if(or__3548__auto____12144)
{return or__3548__auto____12144;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){
if((function (){var and__3546__auto____12145 = this$;
if(and__3546__auto____12145)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__3546__auto____12145;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{return (function (){var or__3548__auto____12146 = (crate.binding._on_change[goog.typeOf.call(null,this$)]);
if(or__3548__auto____12146)
{return or__3548__auto____12146;
} else
{var or__3548__auto____12147 = (crate.binding._on_change["_"]);
if(or__3548__auto____12147)
{return or__3548__auto____12147;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});
void 0;
/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"crate.binding.atom_binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var this__12148 = this;
return this__12148.value_func.call(null,cljs.core.deref.call(null,this__12148.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var this__12149 = this;
return cljs.core.add_watch.call(null,this__12149.atm,crate.binding.watch_id.call(null),(function (){
return func.call(null,crate.binding._value.call(null,this$));
}));
});
crate.binding.atom_binding;

/**
* @constructor
*/
crate.binding.notifier_binding = (function (notif,value_func){
this.notif = notif;
this.value_func = value_func;
})
crate.binding.notifier_binding.cljs$lang$type = true;
crate.binding.notifier_binding.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"crate.binding.notifier_binding");
});
crate.binding.notifier_binding.prototype.crate$binding$bindable$ = true;
crate.binding.notifier_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var this__12150 = this;
return null;
});
crate.binding.notifier_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var this__12151 = this;
return cljs.core.add_watch.call(null,this__12151.notif,crate.binding.watch_id.call(null),(function (_12152,_12153,_,v){
return func.call(null,this__12151.value_func.call(null,v));
}));
});
crate.binding.notifier_binding;

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1075839104;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"crate.binding.notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$ = true;
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__12154 = this;
var G__12155__12156 = cljs.core.seq.call(null,this__12154.watches);
if(cljs.core.truth_(G__12155__12156))
{var G__12158__12160 = cljs.core.first.call(null,G__12155__12156);
var vec__12159__12161 = G__12158__12160;
var key__12162 = cljs.core.nth.call(null,vec__12159__12161,0,null);
var f__12163 = cljs.core.nth.call(null,vec__12159__12161,1,null);
var G__12155__12164 = G__12155__12156;
var G__12158__12165 = G__12158__12160;
var G__12155__12166 = G__12155__12164;
while(true){
var vec__12167__12168 = G__12158__12165;
var key__12169 = cljs.core.nth.call(null,vec__12167__12168,0,null);
var f__12170 = cljs.core.nth.call(null,vec__12167__12168,1,null);
var G__12155__12171 = G__12155__12166;
f__12170.call(null,key__12169,this$,null,newval);
var temp__3698__auto____12172 = cljs.core.next.call(null,G__12155__12171);
if(cljs.core.truth_(temp__3698__auto____12172))
{var G__12155__12173 = temp__3698__auto____12172;
{
var G__12183 = cljs.core.first.call(null,G__12155__12173);
var G__12184 = G__12155__12173;
G__12158__12165 = G__12183;
G__12155__12166 = G__12184;
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
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__12174 = this;
return this$.watches = cljs.core.assoc.call(null,this__12174.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__12175 = this;
return this$.watches = cljs.core.dissoc.call(null,this__12175.watches,key);
});
crate.binding.notifier.prototype.cljs$core$IHash$ = true;
crate.binding.notifier.prototype.cljs$core$IHash$_hash$arity$1 = (function (t){
var this__12176 = this;
return null;
});
crate.binding.notifier.prototype.cljs$core$ILookup$ = true;
crate.binding.notifier.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__12177 = this;
return (new crate.binding.notifier(cljs.core.ObjMap.fromObject([],{})));
});
crate.binding.notifier.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__12178 = this;
return not_found;
});
crate.binding.notifier.prototype.crate$binding$bindable$ = true;
crate.binding.notifier.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var this__12179 = this;
return null;
});
crate.binding.notifier.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var this__12180 = this;
return cljs.core.add_watch.call(null,this$,crate.binding.watch_id.call(null),(function (_12181,_12182,_,v){
return func.call(null,v);
}));
});
crate.binding.notifier;

/**
* @constructor
*/
crate.binding.bound_collection = (function (notif,hash,opts,stuff){
this.notif = notif;
this.hash = hash;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"crate.binding.bound_collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var this__12185 = this;
return cljs.core.map.call(null,"\uFDD0'elem",cljs.core.vals.call(null,this$.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var this__12186 = this;
return cljs.core.add_watch.call(null,this__12186.notif,crate.binding.watch_id.call(null),(function (_12188,_12189,_,p__12187){
var vec__12190__12191 = p__12187;
var event__12192 = cljs.core.nth.call(null,vec__12190__12191,0,null);
var el__12193 = cljs.core.nth.call(null,vec__12190__12191,1,null);
var v__12194 = cljs.core.nth.call(null,vec__12190__12191,2,null);
return func.call(null,event__12192,el__12193,v__12194);
}));
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.bound_collection;
crate.binding.bc_add = (function bc_add(bc,key,p__12195){
var map__12196__12197 = p__12195;
var map__12196__12198 = ((cljs.core.seq_QMARK_.call(null,map__12196__12197))?cljs.core.apply.call(null,cljs.core.hash_map,map__12196__12197):map__12196__12197);
var hash__12199 = cljs.core.get.call(null,map__12196__12198,"\uFDD0'hash");
var value__12200 = cljs.core.get.call(null,map__12196__12198,"\uFDD0'value");
var notif__12201 = (new crate.binding.notifier(null));
var elem__12202 = crate.binding.opt.call(null,bc,"\uFDD0'as").call(null,notif__12201);
bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,cljs.core.ObjMap.fromObject(["\uFDD0'hash","\uFDD0'elem","\uFDD0'notif"],{"\uFDD0'hash":hash__12199,"\uFDD0'elem":elem__12202,"\uFDD0'notif":notif__12201}));
crate.binding.notify.call(null,notif__12201,value__12200);
return crate.binding.notify.call(null,bc.notif,cljs.core.PersistentVector.fromArray(["\uFDD0'add",elem__12202,value__12200]));
});
crate.binding.bc_remove = (function bc_remove(bc,key){
var notif__12203 = bc.notif;
var prev__12204 = bc.stuff.call(null,key);
bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
return crate.binding.notify.call(null,bc.notif,cljs.core.PersistentVector.fromArray(["\uFDD0'remove","\uFDD0'elem".call(null,prev__12204),null]));
});
crate.binding.bc_change = (function bc_change(bc,key,p__12205){
var map__12206__12207 = p__12205;
var map__12206__12208 = ((cljs.core.seq_QMARK_.call(null,map__12206__12207))?cljs.core.apply.call(null,cljs.core.hash_map,map__12206__12207):map__12206__12207);
var value__12209 = cljs.core.get.call(null,map__12206__12208,"\uFDD0'value");
var hash__12210 = cljs.core.get.call(null,map__12206__12208,"\uFDD0'hash");
var prev__12211 = bc.stuff.call(null,key);
bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,cljs.core.assoc.call(null,prev__12211,"\uFDD0'hash",hash__12210));
return crate.binding.notify.call(null,"\uFDD0'notif".call(null,prev__12211),value__12209);
});
crate.binding.opt = (function opt(bc,k){
return bc.opts.call(null,k);
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){
return cljs.core.reduce.call(null,(function (res,v){
return cljs.core.assoc.call(null,res,keyfn.call(null,v),cljs.core.ObjMap.fromObject(["\uFDD0'value","\uFDD0'hash"],{"\uFDD0'value":v,"\uFDD0'hash":cljs.core.hash.call(null,v)}));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
crate.binding.bc_compare = (function bc_compare(bc,neue,keyfn){
var prev__12212 = bc.stuff;
var nkeyed__12213 = crate.binding.__GT_keyed.call(null,neue,keyfn);
var pset__12214 = cljs.core.into.call(null,cljs.core.set([]),cljs.core.keys.call(null,prev__12212));
var nset__12215 = cljs.core.into.call(null,cljs.core.set([]),cljs.core.keys.call(null,nkeyed__12213));
var added__12216 = clojure.set.difference.call(null,nset__12215,pset__12214);
var removed__12217 = clojure.set.difference.call(null,pset__12214,nset__12215);
var changed_QMARK___12218 = clojure.set.intersection.call(null,pset__12214,nset__12215);
var G__12219__12220 = cljs.core.seq.call(null,added__12216);
if(cljs.core.truth_(G__12219__12220))
{var a__12221 = cljs.core.first.call(null,G__12219__12220);
var G__12219__12222 = G__12219__12220;
while(true){
crate.binding.bc_add.call(null,bc,a__12221,nkeyed__12213.call(null,a__12221));
var temp__3698__auto____12223 = cljs.core.next.call(null,G__12219__12222);
if(cljs.core.truth_(temp__3698__auto____12223))
{var G__12219__12224 = temp__3698__auto____12223;
{
var G__12239 = cljs.core.first.call(null,G__12219__12224);
var G__12240 = G__12219__12224;
a__12221 = G__12239;
G__12219__12222 = G__12240;
continue;
}
} else
{}
break;
}
} else
{}
var G__12225__12226 = cljs.core.seq.call(null,removed__12217);
if(cljs.core.truth_(G__12225__12226))
{var r__12227 = cljs.core.first.call(null,G__12225__12226);
var G__12225__12228 = G__12225__12226;
while(true){
crate.binding.bc_remove.call(null,bc,r__12227);
var temp__3698__auto____12229 = cljs.core.next.call(null,G__12225__12228);
if(cljs.core.truth_(temp__3698__auto____12229))
{var G__12225__12230 = temp__3698__auto____12229;
{
var G__12241 = cljs.core.first.call(null,G__12225__12230);
var G__12242 = G__12225__12230;
r__12227 = G__12241;
G__12225__12228 = G__12242;
continue;
}
} else
{}
break;
}
} else
{}
var G__12231__12232 = cljs.core.seq.call(null,changed_QMARK___12218);
if(cljs.core.truth_(G__12231__12232))
{var c__12233 = cljs.core.first.call(null,G__12231__12232);
var G__12231__12234 = G__12231__12232;
while(true){
var latest__12235 = nkeyed__12213.call(null,c__12233);
var old__12236 = prev__12212.call(null,c__12233);
if(cljs.core._EQ_.call(null,"\uFDD0'hash".call(null,latest__12235),"\uFDD0'hash".call(null,old__12236)))
{} else
{crate.binding.bc_change.call(null,bc,c__12233,latest__12235);
}
var temp__3698__auto____12237 = cljs.core.next.call(null,G__12231__12234);
if(cljs.core.truth_(temp__3698__auto____12237))
{var G__12231__12238 = temp__3698__auto____12237;
{
var G__12243 = cljs.core.first.call(null,G__12231__12238);
var G__12244 = G__12231__12238;
c__12233 = G__12243;
G__12231__12234 = G__12244;
continue;
}
} else
{}
break;
}
} else
{}
return bc.hash = cljs.core.hash.call(null,neue);
});
crate.binding.notify = (function notify(notif,v){
return cljs.core._notify_watches.call(null,notif,null,v);
});
crate.binding.from_path = (function from_path(atm,path){
var v__12248 = (((function (){var G__12245__12246 = atm;
if((G__12245__12246 != null))
{if((function (){var or__3548__auto____12247 = (G__12245__12246.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3548__auto____12247)
{return or__3548__auto____12247;
} else
{return G__12245__12246.cljs$core$IDeref$;
}
})())
{return true;
} else
{if((!G__12245__12246.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IDeref,G__12245__12246);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IDeref,G__12245__12246);
}
})())?cljs.core.deref.call(null,atm):(("\uFDD0'else")?atm:null));
if(cljs.core.not.call(null,path))
{return v__12248;
} else
{return path.call(null,v__12248);
}
});
crate.binding.notifier_QMARK_ = (function notifier_QMARK_(n){
return cljs.core.instance_QMARK_.call(null,crate.binding.notifier,n);
});
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__12249){
var vec__12250__12251 = p__12249;
var path__12252 = cljs.core.nth.call(null,vec__12250__12251,0,null);
var opts__12253 = cljs.core.nth.call(null,vec__12250__12251,1,null);
var vec__12254__12255 = (cljs.core.truth_(opts__12253)?cljs.core.PersistentVector.fromArray([path__12252,opts__12253]):cljs.core.PersistentVector.fromArray([null,path__12252]));
var path__12256 = cljs.core.nth.call(null,vec__12254__12255,0,null);
var opts__12257 = cljs.core.nth.call(null,vec__12254__12255,1,null);
var keyfn__12259 = (function (){var or__3548__auto____12258 = "\uFDD0'keyfn".call(null,opts__12257);
if(cljs.core.truth_(or__3548__auto____12258))
{return or__3548__auto____12258;
} else
{return cljs.core.hash;
}
})();
var bc__12261 = (new crate.binding.bound_collection((new crate.binding.notifier(null)),null,(function (){var or__3548__auto____12260 = opts__12257;
if(cljs.core.truth_(or__3548__auto____12260))
{return or__3548__auto____12260;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.ObjMap.fromObject([],{})));
cljs.core.add_watch.call(null,atm,crate.binding.watch_id.call(null),(function (_12262,_12263,_,v){
var neue__12264 = crate.binding.from_path.call(null,v,path__12256);
var neue_hash__12265 = cljs.core.hash.call(null,neue__12264);
if(cljs.core._EQ_.call(null,neue_hash__12265,bc__12261.hash))
{return null;
} else
{bc__12261.hash = neue_hash__12265;
return crate.binding.bc_compare.call(null,bc__12261,neue__12264,keyfn__12259);
}
}));
if(cljs.core.truth_(crate.binding.notifier_QMARK_.call(null,atm)))
{} else
{crate.binding.bc_compare.call(null,bc__12261,crate.binding.from_path.call(null,atm,path__12256),keyfn__12259);
}
return bc__12261;
};
var bound_coll = function (atm,var_args){
var p__12249 = null;
if (goog.isDef(var_args)) {
  p__12249 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bound_coll__delegate.call(this, atm, p__12249);
};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__12266){
var atm = cljs.core.first(arglist__12266);
var p__12249 = cljs.core.rest(arglist__12266);
return bound_coll__delegate(atm, p__12249);
});
bound_coll.cljs$lang$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){
var G__12267__12268 = b;
if((G__12267__12268 != null))
{if(cljs.core.truth_((function (){var or__3548__auto____12269 = null;
if(cljs.core.truth_(or__3548__auto____12269))
{return or__3548__auto____12269;
} else
{return G__12267__12268.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__12267__12268.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable,G__12267__12268);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable,G__12267__12268);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){
var G__12270__12271 = b;
if((G__12270__12271 != null))
{if(cljs.core.truth_((function (){var or__3548__auto____12272 = null;
if(cljs.core.truth_(or__3548__auto____12272))
{return or__3548__auto____12272;
} else
{return G__12270__12271.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__12270__12271.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable_coll,G__12270__12271);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable_coll,G__12270__12271);
}
});
crate.binding.value = (function value(b){
return crate.binding._value.call(null,b);
});
crate.binding.on_change = (function on_change(b,func){
return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__12273){
var vec__12274__12275 = p__12273;
var func__12276 = cljs.core.nth.call(null,vec__12274__12275,0,null);
var func__12278 = (function (){var or__3548__auto____12277 = func__12276;
if(cljs.core.truth_(or__3548__auto____12277))
{return or__3548__auto____12277;
} else
{return cljs.core.identity;
}
})();
if(cljs.core.not.call(null,crate.binding.binding_QMARK_.call(null,atm)))
{return (new crate.binding.atom_binding(atm,func__12278,cljs.core.ObjMap.fromObject([],{})));
} else
{return (new crate.binding.notifier_binding(atm,func__12278));
}
};
var bound = function (atm,var_args){
var p__12273 = null;
if (goog.isDef(var_args)) {
  p__12273 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bound__delegate.call(this, atm, p__12273);
};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__12279){
var atm = cljs.core.first(arglist__12279);
var p__12273 = cljs.core.rest(arglist__12279);
return bound__delegate(atm, p__12273);
});
bound.cljs$lang$arity$variadic = bound__delegate;
return bound;
})()
;
