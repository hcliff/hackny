goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function bubble_max_key(k,coll){
var max__12281 = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max__12281,cljs.core.remove.call(null,(function (p1__12280_SHARP_){
return (max__12281 === p1__12280_SHARP_);
}),coll));
});
/**
* Return a set that is the union of the input sets
* @param {...*} var_args
*/
clojure.set.union = (function() {
var union = null;
var union__0 = (function (){
return cljs.core.set([]);
});
var union__1 = (function (s1){
return s1;
});
var union__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2)))
{return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});
var union__3 = (function() { 
var G__12284__delegate = function (s1,s2,sets){
var bubbled_sets__12283 = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets__12283),cljs.core.rest.call(null,bubbled_sets__12283));
};
var G__12284 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12284__delegate.call(this, s1, s2, sets);
};
G__12284.cljs$lang$maxFixedArity = 2;
G__12284.cljs$lang$applyTo = (function (arglist__12285){
var s1 = cljs.core.first(arglist__12285);
var s2 = cljs.core.first(cljs.core.next(arglist__12285));
var sets = cljs.core.rest(cljs.core.next(arglist__12285));
return G__12284__delegate(s1, s2, sets);
});
G__12284.cljs$lang$arity$variadic = G__12284__delegate;
return G__12284;
})()
;
union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 0:
return union__0.call(this);
case 1:
return union__1.call(this,s1);
case 2:
return union__2.call(this,s1,s2);
default:
return union__3.cljs$lang$arity$variadic(s1,s2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
union.cljs$lang$maxFixedArity = 2;
union.cljs$lang$applyTo = union__3.cljs$lang$applyTo;
union.cljs$lang$arity$0 = union__0;
union.cljs$lang$arity$1 = union__1;
union.cljs$lang$arity$2 = union__2;
union.cljs$lang$arity$variadic = union__3.cljs$lang$arity$variadic;
return union;
})()
;
/**
* Return a set that is the intersection of the input sets
* @param {...*} var_args
*/
clojure.set.intersection = (function() {
var intersection = null;
var intersection__1 = (function (s1){
return s1;
});
var intersection__2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1)))
{{
var G__12287 = s2;
var G__12288 = s1;
s1 = G__12287;
s2 = G__12288;
continue;
}
} else
{return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item))
{return result;
} else
{return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});
var intersection__3 = (function() { 
var G__12289__delegate = function (s1,s2,sets){
var bubbled_sets__12286 = clojure.set.bubble_max_key.call(null,(function (p1__12282_SHARP_){
return (- cljs.core.count.call(null,p1__12282_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,intersection,cljs.core.first.call(null,bubbled_sets__12286),cljs.core.rest.call(null,bubbled_sets__12286));
};
var G__12289 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12289__delegate.call(this, s1, s2, sets);
};
G__12289.cljs$lang$maxFixedArity = 2;
G__12289.cljs$lang$applyTo = (function (arglist__12290){
var s1 = cljs.core.first(arglist__12290);
var s2 = cljs.core.first(cljs.core.next(arglist__12290));
var sets = cljs.core.rest(cljs.core.next(arglist__12290));
return G__12289__delegate(s1, s2, sets);
});
G__12289.cljs$lang$arity$variadic = G__12289__delegate;
return G__12289;
})()
;
intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return intersection__1.call(this,s1);
case 2:
return intersection__2.call(this,s1,s2);
default:
return intersection__3.cljs$lang$arity$variadic(s1,s2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
intersection.cljs$lang$maxFixedArity = 2;
intersection.cljs$lang$applyTo = intersection__3.cljs$lang$applyTo;
intersection.cljs$lang$arity$1 = intersection__1;
intersection.cljs$lang$arity$2 = intersection__2;
intersection.cljs$lang$arity$variadic = intersection__3.cljs$lang$arity$variadic;
return intersection;
})()
;
/**
* Return a set that is the first set without elements of the remaining sets
* @param {...*} var_args
*/
clojure.set.difference = (function() {
var difference = null;
var difference__1 = (function (s1){
return s1;
});
var difference__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2)))
{return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item))
{return cljs.core.disj.call(null,result,item);
} else
{return result;
}
}),s1,s1);
} else
{return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});
var difference__3 = (function() { 
var G__12291__delegate = function (s1,s2,sets){
return cljs.core.reduce.call(null,difference,s1,cljs.core.conj.call(null,sets,s2));
};
var G__12291 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12291__delegate.call(this, s1, s2, sets);
};
G__12291.cljs$lang$maxFixedArity = 2;
G__12291.cljs$lang$applyTo = (function (arglist__12292){
var s1 = cljs.core.first(arglist__12292);
var s2 = cljs.core.first(cljs.core.next(arglist__12292));
var sets = cljs.core.rest(cljs.core.next(arglist__12292));
return G__12291__delegate(s1, s2, sets);
});
G__12291.cljs$lang$arity$variadic = G__12291__delegate;
return G__12291;
})()
;
difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return difference__1.call(this,s1);
case 2:
return difference__2.call(this,s1,s2);
default:
return difference__3.cljs$lang$arity$variadic(s1,s2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
difference.cljs$lang$maxFixedArity = 2;
difference.cljs$lang$applyTo = difference__3.cljs$lang$applyTo;
difference.cljs$lang$arity$1 = difference__1;
difference.cljs$lang$arity$2 = difference__2;
difference.cljs$lang$arity$variadic = difference__3.cljs$lang$arity$variadic;
return difference;
})()
;
/**
* Returns a set of the elements for which pred is true
*/
clojure.set.select = (function select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k)))
{return s;
} else
{return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
* Returns a rel of the elements of xrel with only the keys in ks
*/
clojure.set.project = (function project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__12293_SHARP_){
return cljs.core.select_keys.call(null,p1__12293_SHARP_,ks);
}),xrel));
});
/**
* Returns the map with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename_keys = (function rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__12295){
var vec__12296__12297 = p__12295;
var old__12298 = cljs.core.nth.call(null,vec__12296__12297,0,null);
var new$__12299 = cljs.core.nth.call(null,vec__12296__12297,1,null);
if((function (){var and__3546__auto____12300 = cljs.core.not_EQ_.call(null,old__12298,new$__12299);
if(and__3546__auto____12300)
{return cljs.core.contains_QMARK_.call(null,m,old__12298);
} else
{return and__3546__auto____12300;
}
})())
{return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,m,new$__12299,cljs.core.get.call(null,m,old__12298)),old__12298);
} else
{return m;
}
}),map,kmap);
});
/**
* Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename = (function rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__12294_SHARP_){
return clojure.set.rename_keys.call(null,p1__12294_SHARP_,kmap);
}),xrel));
});
/**
* Returns a map of the distinct values of ks in the xrel mapped to a
* set of the maps in xrel with the corresponding values of ks.
*/
clojure.set.index = (function index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik__12301 = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik__12301,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik__12301,cljs.core.set([])),x));
}),cljs.core.ObjMap.fromObject([],{}),xrel);
});
/**
* Returns the map with the vals mapped to the keys.
*/
clojure.set.map_invert = (function map_invert(m){
return cljs.core.reduce.call(null,(function (m,p__12306){
var vec__12307__12308 = p__12306;
var k__12309 = cljs.core.nth.call(null,vec__12307__12308,0,null);
var v__12310 = cljs.core.nth.call(null,vec__12307__12308,1,null);
return cljs.core.assoc.call(null,m,v__12310,k__12309);
}),cljs.core.ObjMap.fromObject([],{}),m);
});
/**
* When passed 2 rels, returns the rel corresponding to the natural
* join. When passed an additional keymap, joins on the corresponding
* keys.
*/
clojure.set.join = (function() {
var join = null;
var join__2 = (function (xrel,yrel){
if(cljs.core.truth_((function (){var and__3546__auto____12312 = cljs.core.seq.call(null,xrel);
if(cljs.core.truth_(and__3546__auto____12312))
{return cljs.core.seq.call(null,yrel);
} else
{return and__3546__auto____12312;
}
})()))
{var ks__12314 = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__12313__12315 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.PersistentVector.fromArray([xrel,yrel]):cljs.core.PersistentVector.fromArray([yrel,xrel]));
var r__12316 = cljs.core.nth.call(null,vec__12313__12315,0,null);
var s__12317 = cljs.core.nth.call(null,vec__12313__12315,1,null);
var idx__12318 = clojure.set.index.call(null,r__12316,ks__12314);
return cljs.core.reduce.call(null,(function (ret,x){
var found__12319 = idx__12318.call(null,cljs.core.select_keys.call(null,x,ks__12314));
if(cljs.core.truth_(found__12319))
{return cljs.core.reduce.call(null,(function (p1__12302_SHARP_,p2__12303_SHARP_){
return cljs.core.conj.call(null,p1__12302_SHARP_,cljs.core.merge.call(null,p2__12303_SHARP_,x));
}),ret,found__12319);
} else
{return ret;
}
}),cljs.core.set([]),s__12317);
} else
{return cljs.core.set([]);
}
});
var join__3 = (function (xrel,yrel,km){
var vec__12320__12321 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.PersistentVector.fromArray([xrel,yrel,clojure.set.map_invert.call(null,km)]):cljs.core.PersistentVector.fromArray([yrel,xrel,km]));
var r__12322 = cljs.core.nth.call(null,vec__12320__12321,0,null);
var s__12323 = cljs.core.nth.call(null,vec__12320__12321,1,null);
var k__12324 = cljs.core.nth.call(null,vec__12320__12321,2,null);
var idx__12325 = clojure.set.index.call(null,r__12322,cljs.core.vals.call(null,k__12324));
return cljs.core.reduce.call(null,(function (ret,x){
var found__12326 = idx__12325.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k__12324)),k__12324));
if(cljs.core.truth_(found__12326))
{return cljs.core.reduce.call(null,(function (p1__12304_SHARP_,p2__12305_SHARP_){
return cljs.core.conj.call(null,p1__12304_SHARP_,cljs.core.merge.call(null,p2__12305_SHARP_,x));
}),ret,found__12326);
} else
{return ret;
}
}),cljs.core.set([]),s__12323);
});
join = function(xrel,yrel,km){
switch(arguments.length){
case 2:
return join__2.call(this,xrel,yrel);
case 3:
return join__3.call(this,xrel,yrel,km);
}
throw('Invalid arity: ' + arguments.length);
};
join.cljs$lang$arity$2 = join__2;
join.cljs$lang$arity$3 = join__3;
return join;
})()
;
/**
* Is set1 a subset of set2?
*/
clojure.set.subset_QMARK_ = (function subset_QMARK_(set1,set2){
var and__3546__auto____12328 = (cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2));
if(and__3546__auto____12328)
{return cljs.core.every_QMARK_.call(null,(function (p1__12311_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__12311_SHARP_);
}),set1);
} else
{return and__3546__auto____12328;
}
});
/**
* Is set1 a superset of set2?
*/
clojure.set.superset_QMARK_ = (function superset_QMARK_(set1,set2){
var and__3546__auto____12329 = (cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2));
if(and__3546__auto____12329)
{return cljs.core.every_QMARK_.call(null,(function (p1__12327_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__12327_SHARP_);
}),set2);
} else
{return and__3546__auto____12329;
}
});
