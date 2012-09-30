goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
void 0;
void 0;
void 0;
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
void 0;/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
if((p[goog.typeOf.call(null,x)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
void 0;cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error("No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return new Array(size);
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
void 0;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__7573__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__7573 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7573__delegate.call(this, array, i, idxs);
};
G__7573.cljs$lang$maxFixedArity = 2;
G__7573.cljs$lang$applyTo = (function (arglist__7574){
var array = cljs.core.first(arglist__7574);
var i = cljs.core.first(cljs.core.next(arglist__7574));
var idxs = cljs.core.rest(cljs.core.next(arglist__7574));
return G__7573__delegate(array, i, idxs);
});
G__7573.cljs$lang$arity$variadic = G__7573__delegate;
return G__7573;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
void 0;
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
void 0;cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3546__auto____7575 = this$;
if(and__3546__auto____7575)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3546__auto____7575;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3548__auto____7576 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7576)
{return or__3548__auto____7576;
} else
{var or__3548__auto____7577 = (cljs.core._invoke["_"]);
if(or__3548__auto____7577)
{return or__3548__auto____7577;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3546__auto____7578 = this$;
if(and__3546__auto____7578)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3546__auto____7578;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3548__auto____7579 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7579)
{return or__3548__auto____7579;
} else
{var or__3548__auto____7580 = (cljs.core._invoke["_"]);
if(or__3548__auto____7580)
{return or__3548__auto____7580;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3546__auto____7581 = this$;
if(and__3546__auto____7581)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3546__auto____7581;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3548__auto____7582 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7582)
{return or__3548__auto____7582;
} else
{var or__3548__auto____7583 = (cljs.core._invoke["_"]);
if(or__3548__auto____7583)
{return or__3548__auto____7583;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3546__auto____7584 = this$;
if(and__3546__auto____7584)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3546__auto____7584;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7585 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7585)
{return or__3548__auto____7585;
} else
{var or__3548__auto____7586 = (cljs.core._invoke["_"]);
if(or__3548__auto____7586)
{return or__3548__auto____7586;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3546__auto____7587 = this$;
if(and__3546__auto____7587)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3546__auto____7587;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7588 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7588)
{return or__3548__auto____7588;
} else
{var or__3548__auto____7589 = (cljs.core._invoke["_"]);
if(or__3548__auto____7589)
{return or__3548__auto____7589;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3546__auto____7590 = this$;
if(and__3546__auto____7590)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3546__auto____7590;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7591 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7591)
{return or__3548__auto____7591;
} else
{var or__3548__auto____7592 = (cljs.core._invoke["_"]);
if(or__3548__auto____7592)
{return or__3548__auto____7592;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3546__auto____7593 = this$;
if(and__3546__auto____7593)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3546__auto____7593;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7594 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7594)
{return or__3548__auto____7594;
} else
{var or__3548__auto____7595 = (cljs.core._invoke["_"]);
if(or__3548__auto____7595)
{return or__3548__auto____7595;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3546__auto____7596 = this$;
if(and__3546__auto____7596)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3546__auto____7596;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7597 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7597)
{return or__3548__auto____7597;
} else
{var or__3548__auto____7598 = (cljs.core._invoke["_"]);
if(or__3548__auto____7598)
{return or__3548__auto____7598;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3546__auto____7599 = this$;
if(and__3546__auto____7599)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3546__auto____7599;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7600 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7600)
{return or__3548__auto____7600;
} else
{var or__3548__auto____7601 = (cljs.core._invoke["_"]);
if(or__3548__auto____7601)
{return or__3548__auto____7601;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3546__auto____7602 = this$;
if(and__3546__auto____7602)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3546__auto____7602;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7603 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7603)
{return or__3548__auto____7603;
} else
{var or__3548__auto____7604 = (cljs.core._invoke["_"]);
if(or__3548__auto____7604)
{return or__3548__auto____7604;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3546__auto____7605 = this$;
if(and__3546__auto____7605)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3546__auto____7605;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7606 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7606)
{return or__3548__auto____7606;
} else
{var or__3548__auto____7607 = (cljs.core._invoke["_"]);
if(or__3548__auto____7607)
{return or__3548__auto____7607;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3546__auto____7608 = this$;
if(and__3546__auto____7608)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3546__auto____7608;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7609 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7609)
{return or__3548__auto____7609;
} else
{var or__3548__auto____7610 = (cljs.core._invoke["_"]);
if(or__3548__auto____7610)
{return or__3548__auto____7610;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3546__auto____7611 = this$;
if(and__3546__auto____7611)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3546__auto____7611;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7612 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7612)
{return or__3548__auto____7612;
} else
{var or__3548__auto____7613 = (cljs.core._invoke["_"]);
if(or__3548__auto____7613)
{return or__3548__auto____7613;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3546__auto____7614 = this$;
if(and__3546__auto____7614)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3546__auto____7614;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7615 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7615)
{return or__3548__auto____7615;
} else
{var or__3548__auto____7616 = (cljs.core._invoke["_"]);
if(or__3548__auto____7616)
{return or__3548__auto____7616;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3546__auto____7617 = this$;
if(and__3546__auto____7617)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3546__auto____7617;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7618 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7618)
{return or__3548__auto____7618;
} else
{var or__3548__auto____7619 = (cljs.core._invoke["_"]);
if(or__3548__auto____7619)
{return or__3548__auto____7619;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3546__auto____7620 = this$;
if(and__3546__auto____7620)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3546__auto____7620;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7621 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7621)
{return or__3548__auto____7621;
} else
{var or__3548__auto____7622 = (cljs.core._invoke["_"]);
if(or__3548__auto____7622)
{return or__3548__auto____7622;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3546__auto____7623 = this$;
if(and__3546__auto____7623)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3546__auto____7623;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7624 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7624)
{return or__3548__auto____7624;
} else
{var or__3548__auto____7625 = (cljs.core._invoke["_"]);
if(or__3548__auto____7625)
{return or__3548__auto____7625;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3546__auto____7626 = this$;
if(and__3546__auto____7626)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3546__auto____7626;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7627 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7627)
{return or__3548__auto____7627;
} else
{var or__3548__auto____7628 = (cljs.core._invoke["_"]);
if(or__3548__auto____7628)
{return or__3548__auto____7628;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3546__auto____7629 = this$;
if(and__3546__auto____7629)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3546__auto____7629;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7630 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7630)
{return or__3548__auto____7630;
} else
{var or__3548__auto____7631 = (cljs.core._invoke["_"]);
if(or__3548__auto____7631)
{return or__3548__auto____7631;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3546__auto____7632 = this$;
if(and__3546__auto____7632)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3546__auto____7632;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7633 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7633)
{return or__3548__auto____7633;
} else
{var or__3548__auto____7634 = (cljs.core._invoke["_"]);
if(or__3548__auto____7634)
{return or__3548__auto____7634;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3546__auto____7635 = this$;
if(and__3546__auto____7635)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3546__auto____7635;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7636 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7636)
{return or__3548__auto____7636;
} else
{var or__3548__auto____7637 = (cljs.core._invoke["_"]);
if(or__3548__auto____7637)
{return or__3548__auto____7637;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
void 0;void 0;cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3546__auto____7638 = coll;
if(and__3546__auto____7638)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3546__auto____7638;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3548__auto____7639 = (cljs.core._count[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7639)
{return or__3548__auto____7639;
} else
{var or__3548__auto____7640 = (cljs.core._count["_"]);
if(or__3548__auto____7640)
{return or__3548__auto____7640;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3546__auto____7641 = coll;
if(and__3546__auto____7641)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3546__auto____7641;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3548__auto____7642 = (cljs.core._empty[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7642)
{return or__3548__auto____7642;
} else
{var or__3548__auto____7643 = (cljs.core._empty["_"]);
if(or__3548__auto____7643)
{return or__3548__auto____7643;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3546__auto____7644 = coll;
if(and__3546__auto____7644)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3546__auto____7644;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3548__auto____7645 = (cljs.core._conj[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7645)
{return or__3548__auto____7645;
} else
{var or__3548__auto____7646 = (cljs.core._conj["_"]);
if(or__3548__auto____7646)
{return or__3548__auto____7646;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
void 0;void 0;cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3546__auto____7647 = coll;
if(and__3546__auto____7647)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3546__auto____7647;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3548__auto____7648 = (cljs.core._nth[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7648)
{return or__3548__auto____7648;
} else
{var or__3548__auto____7649 = (cljs.core._nth["_"]);
if(or__3548__auto____7649)
{return or__3548__auto____7649;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3546__auto____7650 = coll;
if(and__3546__auto____7650)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3546__auto____7650;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7651 = (cljs.core._nth[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7651)
{return or__3548__auto____7651;
} else
{var or__3548__auto____7652 = (cljs.core._nth["_"]);
if(or__3548__auto____7652)
{return or__3548__auto____7652;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
void 0;void 0;cljs.core.ASeq = {};
void 0;void 0;cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3546__auto____7653 = coll;
if(and__3546__auto____7653)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3546__auto____7653;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3548__auto____7654 = (cljs.core._first[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7654)
{return or__3548__auto____7654;
} else
{var or__3548__auto____7655 = (cljs.core._first["_"]);
if(or__3548__auto____7655)
{return or__3548__auto____7655;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3546__auto____7656 = coll;
if(and__3546__auto____7656)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3546__auto____7656;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3548__auto____7657 = (cljs.core._rest[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7657)
{return or__3548__auto____7657;
} else
{var or__3548__auto____7658 = (cljs.core._rest["_"]);
if(or__3548__auto____7658)
{return or__3548__auto____7658;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3546__auto____7659 = o;
if(and__3546__auto____7659)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3546__auto____7659;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3548__auto____7660 = (cljs.core._lookup[goog.typeOf.call(null,o)]);
if(or__3548__auto____7660)
{return or__3548__auto____7660;
} else
{var or__3548__auto____7661 = (cljs.core._lookup["_"]);
if(or__3548__auto____7661)
{return or__3548__auto____7661;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3546__auto____7662 = o;
if(and__3546__auto____7662)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3546__auto____7662;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3548__auto____7663 = (cljs.core._lookup[goog.typeOf.call(null,o)]);
if(or__3548__auto____7663)
{return or__3548__auto____7663;
} else
{var or__3548__auto____7664 = (cljs.core._lookup["_"]);
if(or__3548__auto____7664)
{return or__3548__auto____7664;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
void 0;void 0;cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3546__auto____7665 = coll;
if(and__3546__auto____7665)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3546__auto____7665;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3548__auto____7666 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7666)
{return or__3548__auto____7666;
} else
{var or__3548__auto____7667 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3548__auto____7667)
{return or__3548__auto____7667;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3546__auto____7668 = coll;
if(and__3546__auto____7668)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3546__auto____7668;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3548__auto____7669 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7669)
{return or__3548__auto____7669;
} else
{var or__3548__auto____7670 = (cljs.core._assoc["_"]);
if(or__3548__auto____7670)
{return or__3548__auto____7670;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3546__auto____7671 = coll;
if(and__3546__auto____7671)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3546__auto____7671;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3548__auto____7672 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7672)
{return or__3548__auto____7672;
} else
{var or__3548__auto____7673 = (cljs.core._dissoc["_"]);
if(or__3548__auto____7673)
{return or__3548__auto____7673;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3546__auto____7674 = coll;
if(and__3546__auto____7674)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3546__auto____7674;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3548__auto____7675 = (cljs.core._key[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7675)
{return or__3548__auto____7675;
} else
{var or__3548__auto____7676 = (cljs.core._key["_"]);
if(or__3548__auto____7676)
{return or__3548__auto____7676;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3546__auto____7677 = coll;
if(and__3546__auto____7677)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3546__auto____7677;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3548__auto____7678 = (cljs.core._val[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7678)
{return or__3548__auto____7678;
} else
{var or__3548__auto____7679 = (cljs.core._val["_"]);
if(or__3548__auto____7679)
{return or__3548__auto____7679;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3546__auto____7680 = coll;
if(and__3546__auto____7680)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3546__auto____7680;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3548__auto____7681 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7681)
{return or__3548__auto____7681;
} else
{var or__3548__auto____7682 = (cljs.core._disjoin["_"]);
if(or__3548__auto____7682)
{return or__3548__auto____7682;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3546__auto____7683 = coll;
if(and__3546__auto____7683)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3546__auto____7683;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3548__auto____7684 = (cljs.core._peek[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7684)
{return or__3548__auto____7684;
} else
{var or__3548__auto____7685 = (cljs.core._peek["_"]);
if(or__3548__auto____7685)
{return or__3548__auto____7685;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3546__auto____7686 = coll;
if(and__3546__auto____7686)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3546__auto____7686;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3548__auto____7687 = (cljs.core._pop[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7687)
{return or__3548__auto____7687;
} else
{var or__3548__auto____7688 = (cljs.core._pop["_"]);
if(or__3548__auto____7688)
{return or__3548__auto____7688;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3546__auto____7689 = coll;
if(and__3546__auto____7689)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3546__auto____7689;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3548__auto____7690 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7690)
{return or__3548__auto____7690;
} else
{var or__3548__auto____7691 = (cljs.core._assoc_n["_"]);
if(or__3548__auto____7691)
{return or__3548__auto____7691;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3546__auto____7692 = o;
if(and__3546__auto____7692)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3546__auto____7692;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3548__auto____7693 = (cljs.core._deref[goog.typeOf.call(null,o)]);
if(or__3548__auto____7693)
{return or__3548__auto____7693;
} else
{var or__3548__auto____7694 = (cljs.core._deref["_"]);
if(or__3548__auto____7694)
{return or__3548__auto____7694;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3546__auto____7695 = o;
if(and__3546__auto____7695)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3546__auto____7695;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7696 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);
if(or__3548__auto____7696)
{return or__3548__auto____7696;
} else
{var or__3548__auto____7697 = (cljs.core._deref_with_timeout["_"]);
if(or__3548__auto____7697)
{return or__3548__auto____7697;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3546__auto____7698 = o;
if(and__3546__auto____7698)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3546__auto____7698;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3548__auto____7699 = (cljs.core._meta[goog.typeOf.call(null,o)]);
if(or__3548__auto____7699)
{return or__3548__auto____7699;
} else
{var or__3548__auto____7700 = (cljs.core._meta["_"]);
if(or__3548__auto____7700)
{return or__3548__auto____7700;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3546__auto____7701 = o;
if(and__3546__auto____7701)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3546__auto____7701;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3548__auto____7702 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);
if(or__3548__auto____7702)
{return or__3548__auto____7702;
} else
{var or__3548__auto____7703 = (cljs.core._with_meta["_"]);
if(or__3548__auto____7703)
{return or__3548__auto____7703;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
void 0;void 0;cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3546__auto____7704 = coll;
if(and__3546__auto____7704)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3546__auto____7704;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3548__auto____7705 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7705)
{return or__3548__auto____7705;
} else
{var or__3548__auto____7706 = (cljs.core._reduce["_"]);
if(or__3548__auto____7706)
{return or__3548__auto____7706;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3546__auto____7707 = coll;
if(and__3546__auto____7707)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3546__auto____7707;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3548__auto____7708 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7708)
{return or__3548__auto____7708;
} else
{var or__3548__auto____7709 = (cljs.core._reduce["_"]);
if(or__3548__auto____7709)
{return or__3548__auto____7709;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
void 0;void 0;cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3546__auto____7710 = coll;
if(and__3546__auto____7710)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3546__auto____7710;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3548__auto____7711 = (cljs.core._kv_reduce[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7711)
{return or__3548__auto____7711;
} else
{var or__3548__auto____7712 = (cljs.core._kv_reduce["_"]);
if(or__3548__auto____7712)
{return or__3548__auto____7712;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3546__auto____7713 = o;
if(and__3546__auto____7713)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3546__auto____7713;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3548__auto____7714 = (cljs.core._equiv[goog.typeOf.call(null,o)]);
if(or__3548__auto____7714)
{return or__3548__auto____7714;
} else
{var or__3548__auto____7715 = (cljs.core._equiv["_"]);
if(or__3548__auto____7715)
{return or__3548__auto____7715;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3546__auto____7716 = o;
if(and__3546__auto____7716)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3546__auto____7716;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3548__auto____7717 = (cljs.core._hash[goog.typeOf.call(null,o)]);
if(or__3548__auto____7717)
{return or__3548__auto____7717;
} else
{var or__3548__auto____7718 = (cljs.core._hash["_"]);
if(or__3548__auto____7718)
{return or__3548__auto____7718;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3546__auto____7719 = o;
if(and__3546__auto____7719)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3546__auto____7719;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3548__auto____7720 = (cljs.core._seq[goog.typeOf.call(null,o)]);
if(or__3548__auto____7720)
{return or__3548__auto____7720;
} else
{var or__3548__auto____7721 = (cljs.core._seq["_"]);
if(or__3548__auto____7721)
{return or__3548__auto____7721;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISequential = {};
void 0;void 0;cljs.core.IList = {};
void 0;void 0;cljs.core.IRecord = {};
void 0;void 0;cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3546__auto____7722 = coll;
if(and__3546__auto____7722)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3546__auto____7722;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3548__auto____7723 = (cljs.core._rseq[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7723)
{return or__3548__auto____7723;
} else
{var or__3548__auto____7724 = (cljs.core._rseq["_"]);
if(or__3548__auto____7724)
{return or__3548__auto____7724;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3546__auto____7725 = coll;
if(and__3546__auto____7725)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3546__auto____7725;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3548__auto____7726 = (cljs.core._sorted_seq[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7726)
{return or__3548__auto____7726;
} else
{var or__3548__auto____7727 = (cljs.core._sorted_seq["_"]);
if(or__3548__auto____7727)
{return or__3548__auto____7727;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3546__auto____7728 = coll;
if(and__3546__auto____7728)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3546__auto____7728;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3548__auto____7729 = (cljs.core._sorted_seq_from[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7729)
{return or__3548__auto____7729;
} else
{var or__3548__auto____7730 = (cljs.core._sorted_seq_from["_"]);
if(or__3548__auto____7730)
{return or__3548__auto____7730;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3546__auto____7731 = coll;
if(and__3546__auto____7731)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3546__auto____7731;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3548__auto____7732 = (cljs.core._entry_key[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7732)
{return or__3548__auto____7732;
} else
{var or__3548__auto____7733 = (cljs.core._entry_key["_"]);
if(or__3548__auto____7733)
{return or__3548__auto____7733;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3546__auto____7734 = coll;
if(and__3546__auto____7734)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3546__auto____7734;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3548__auto____7735 = (cljs.core._comparator[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7735)
{return or__3548__auto____7735;
} else
{var or__3548__auto____7736 = (cljs.core._comparator["_"]);
if(or__3548__auto____7736)
{return or__3548__auto____7736;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3546__auto____7737 = o;
if(and__3546__auto____7737)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3546__auto____7737;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3548__auto____7738 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);
if(or__3548__auto____7738)
{return or__3548__auto____7738;
} else
{var or__3548__auto____7739 = (cljs.core._pr_seq["_"]);
if(or__3548__auto____7739)
{return or__3548__auto____7739;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3546__auto____7740 = d;
if(and__3546__auto____7740)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3546__auto____7740;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3548__auto____7741 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);
if(or__3548__auto____7741)
{return or__3548__auto____7741;
} else
{var or__3548__auto____7742 = (cljs.core._realized_QMARK_["_"]);
if(or__3548__auto____7742)
{return or__3548__auto____7742;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3546__auto____7743 = this$;
if(and__3546__auto____7743)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3546__auto____7743;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____7744 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7744)
{return or__3548__auto____7744;
} else
{var or__3548__auto____7745 = (cljs.core._notify_watches["_"]);
if(or__3548__auto____7745)
{return or__3548__auto____7745;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3546__auto____7746 = this$;
if(and__3546__auto____7746)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3546__auto____7746;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3548__auto____7747 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7747)
{return or__3548__auto____7747;
} else
{var or__3548__auto____7748 = (cljs.core._add_watch["_"]);
if(or__3548__auto____7748)
{return or__3548__auto____7748;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3546__auto____7749 = this$;
if(and__3546__auto____7749)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3546__auto____7749;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3548__auto____7750 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);
if(or__3548__auto____7750)
{return or__3548__auto____7750;
} else
{var or__3548__auto____7751 = (cljs.core._remove_watch["_"]);
if(or__3548__auto____7751)
{return or__3548__auto____7751;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3546__auto____7752 = coll;
if(and__3546__auto____7752)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3546__auto____7752;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3548__auto____7753 = (cljs.core._as_transient[goog.typeOf.call(null,coll)]);
if(or__3548__auto____7753)
{return or__3548__auto____7753;
} else
{var or__3548__auto____7754 = (cljs.core._as_transient["_"]);
if(or__3548__auto____7754)
{return or__3548__auto____7754;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3546__auto____7755 = tcoll;
if(and__3546__auto____7755)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3546__auto____7755;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3548__auto____7756 = (cljs.core._conj_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____7756)
{return or__3548__auto____7756;
} else
{var or__3548__auto____7757 = (cljs.core._conj_BANG_["_"]);
if(or__3548__auto____7757)
{return or__3548__auto____7757;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3546__auto____7758 = tcoll;
if(and__3546__auto____7758)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3546__auto____7758;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3548__auto____7759 = (cljs.core._persistent_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____7759)
{return or__3548__auto____7759;
} else
{var or__3548__auto____7760 = (cljs.core._persistent_BANG_["_"]);
if(or__3548__auto____7760)
{return or__3548__auto____7760;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3546__auto____7761 = tcoll;
if(and__3546__auto____7761)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3546__auto____7761;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3548__auto____7762 = (cljs.core._assoc_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____7762)
{return or__3548__auto____7762;
} else
{var or__3548__auto____7763 = (cljs.core._assoc_BANG_["_"]);
if(or__3548__auto____7763)
{return or__3548__auto____7763;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3546__auto____7764 = tcoll;
if(and__3546__auto____7764)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3546__auto____7764;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3548__auto____7765 = (cljs.core._dissoc_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____7765)
{return or__3548__auto____7765;
} else
{var or__3548__auto____7766 = (cljs.core._dissoc_BANG_["_"]);
if(or__3548__auto____7766)
{return or__3548__auto____7766;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3546__auto____7767 = tcoll;
if(and__3546__auto____7767)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3546__auto____7767;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3548__auto____7768 = (cljs.core._assoc_n_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____7768)
{return or__3548__auto____7768;
} else
{var or__3548__auto____7769 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3548__auto____7769)
{return or__3548__auto____7769;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3546__auto____7770 = tcoll;
if(and__3546__auto____7770)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3546__auto____7770;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3548__auto____7771 = (cljs.core._pop_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____7771)
{return or__3548__auto____7771;
} else
{var or__3548__auto____7772 = (cljs.core._pop_BANG_["_"]);
if(or__3548__auto____7772)
{return or__3548__auto____7772;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3546__auto____7773 = tcoll;
if(and__3546__auto____7773)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3546__auto____7773;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3548__auto____7774 = (cljs.core._disjoin_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____7774)
{return or__3548__auto____7774;
} else
{var or__3548__auto____7775 = (cljs.core._disjoin_BANG_["_"]);
if(or__3548__auto____7775)
{return or__3548__auto____7775;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
void 0;
void 0;
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3548__auto____7776 = (x === y);
if(or__3548__auto____7776)
{return or__3548__auto____7776;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__7777__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7778 = y;
var G__7779 = cljs.core.first.call(null,more);
var G__7780 = cljs.core.next.call(null,more);
x = G__7778;
y = G__7779;
more = G__7780;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7777 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7777__delegate.call(this, x, y, more);
};
G__7777.cljs$lang$maxFixedArity = 2;
G__7777.cljs$lang$applyTo = (function (arglist__7781){
var x = cljs.core.first(arglist__7781);
var y = cljs.core.first(cljs.core.next(arglist__7781));
var more = cljs.core.rest(cljs.core.next(arglist__7781));
return G__7777__delegate(x, y, more);
});
G__7777.cljs$lang$arity$variadic = G__7777__delegate;
return G__7777;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((function (){var or__3548__auto____7782 = (x == null);
if(or__3548__auto____7782)
{return or__3548__auto____7782;
} else
{return (void 0 === x);
}
})())
{return null;
} else
{return (x).constructor;
}
});
void 0;
void 0;
void 0;
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__7783 = null;
var G__7783__2 = (function (o,k){
return null;
});
var G__7783__3 = (function (o,k,not_found){
return not_found;
});
G__7783 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7783__2.call(this,o,k);
case 3:
return G__7783__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7783;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__7784 = null;
var G__7784__2 = (function (_,f){
return f.call(null);
});
var G__7784__3 = (function (_,f,start){
return start;
});
G__7784 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7784__2.call(this,_,f);
case 3:
return G__7784__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7784;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__7785 = null;
var G__7785__2 = (function (_,n){
return null;
});
var G__7785__3 = (function (_,n,not_found){
return not_found;
});
G__7785 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7785__2.call(this,_,n);
case 3:
return G__7785__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7785;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
void 0;
void 0;
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
if((cljs.core._count.call(null,cicoll) === 0))
{return f.call(null);
} else
{var val__7786 = cljs.core._nth.call(null,cicoll,0);
var n__7787 = 1;
while(true){
if((n__7787 < cljs.core._count.call(null,cicoll)))
{var nval__7788 = f.call(null,val__7786,cljs.core._nth.call(null,cicoll,n__7787));
if(cljs.core.reduced_QMARK_.call(null,nval__7788))
{return cljs.core.deref.call(null,nval__7788);
} else
{{
var G__7795 = nval__7788;
var G__7796 = (n__7787 + 1);
val__7786 = G__7795;
n__7787 = G__7796;
continue;
}
}
} else
{return val__7786;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var val__7789 = val;
var n__7790 = 0;
while(true){
if((n__7790 < cljs.core._count.call(null,cicoll)))
{var nval__7791 = f.call(null,val__7789,cljs.core._nth.call(null,cicoll,n__7790));
if(cljs.core.reduced_QMARK_.call(null,nval__7791))
{return cljs.core.deref.call(null,nval__7791);
} else
{{
var G__7797 = nval__7791;
var G__7798 = (n__7790 + 1);
val__7789 = G__7797;
n__7790 = G__7798;
continue;
}
}
} else
{return val__7789;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var val__7792 = val;
var n__7793 = idx;
while(true){
if((n__7793 < cljs.core._count.call(null,cicoll)))
{var nval__7794 = f.call(null,val__7792,cljs.core._nth.call(null,cicoll,n__7793));
if(cljs.core.reduced_QMARK_.call(null,nval__7794))
{return cljs.core.deref.call(null,nval__7794);
} else
{{
var G__7799 = nval__7794;
var G__7800 = (n__7793 + 1);
val__7792 = G__7799;
n__7793 = G__7800;
continue;
}
}
} else
{return val__7792;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
void 0;
void 0;
void 0;
void 0;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15990906;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7801 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7802 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$ASeq$ = true;
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7803 = this;
var this$__7804 = this;
return cljs.core.pr_str.call(null,this$__7804);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7805 = this;
if(cljs.core.counted_QMARK_.call(null,this__7805.a))
{return cljs.core.ci_reduce.call(null,this__7805.a,f,(this__7805.a[this__7805.i]),(this__7805.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__7805.a[this__7805.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7806 = this;
if(cljs.core.counted_QMARK_.call(null,this__7806.a))
{return cljs.core.ci_reduce.call(null,this__7806.a,f,start,this__7806.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7807 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7808 = this;
return (this__7808.a.length - this__7808.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7809 = this;
return (this__7809.a[this__7809.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7810 = this;
if(((this__7810.i + 1) < this__7810.a.length))
{return (new cljs.core.IndexedSeq(this__7810.a,(this__7810.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7811 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7812 = this;
var i__7813 = (n + this__7812.i);
if((i__7813 < this__7812.a.length))
{return (this__7812.a[i__7813]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7814 = this;
var i__7815 = (n + this__7814.i);
if((i__7815 < this__7814.a.length))
{return (this__7814.a[i__7815]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__7816 = null;
var G__7816__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7816__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7816 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7816__2.call(this,array,f);
case 3:
return G__7816__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7816;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7817 = null;
var G__7817__2 = (function (array,k){
return (array[k]);
});
var G__7817__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7817 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7817__2.call(this,array,k);
case 3:
return G__7817__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7817;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7818 = null;
var G__7818__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7818__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7818 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7818__2.call(this,array,n);
case 3:
return G__7818__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7818;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll != null))
{if((function (){var G__7819__7820 = coll;
if((G__7819__7820 != null))
{if((function (){var or__3548__auto____7821 = (G__7819__7820.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3548__auto____7821)
{return or__3548__auto____7821;
} else
{return G__7819__7820.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7819__7820.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7819__7820);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7819__7820);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll != null))
{if((function (){var G__7822__7823 = coll;
if((G__7822__7823 != null))
{if((function (){var or__3548__auto____7824 = (G__7822__7823.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____7824)
{return or__3548__auto____7824;
} else
{return G__7822__7823.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7822__7823.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7822__7823);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7822__7823);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__7825 = cljs.core.seq.call(null,coll);
if((s__7825 != null))
{return cljs.core._first.call(null,s__7825);
} else
{return null;
}
}
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if((coll != null))
{if((function (){var G__7826__7827 = coll;
if((G__7826__7827 != null))
{if((function (){var or__3548__auto____7828 = (G__7826__7827.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____7828)
{return or__3548__auto____7828;
} else
{return G__7826__7827.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7826__7827.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7826__7827);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7826__7827);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__7829 = cljs.core.seq.call(null,coll);
if((s__7829 != null))
{return cljs.core._rest.call(null,s__7829);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll != null))
{if((function (){var G__7830__7831 = coll;
if((G__7830__7831 != null))
{if((function (){var or__3548__auto____7832 = (G__7830__7831.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____7832)
{return or__3548__auto____7832;
} else
{return G__7830__7831.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7830__7831.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7830__7831);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7830__7831);
}
})())
{var coll__7833 = cljs.core._rest.call(null,coll);
if((coll__7833 != null))
{if((function (){var G__7834__7835 = coll__7833;
if((G__7834__7835 != null))
{if((function (){var or__3548__auto____7836 = (G__7834__7835.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3548__auto____7836)
{return or__3548__auto____7836;
} else
{return G__7834__7835.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7834__7835.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7834__7835);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7834__7835);
}
})())
{return coll__7833;
} else
{return cljs.core._seq.call(null,coll__7833);
}
} else
{return null;
}
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__7837 = cljs.core.next.call(null,s);
s = G__7837;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__7838__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7839 = conj.call(null,coll,x);
var G__7840 = cljs.core.first.call(null,xs);
var G__7841 = cljs.core.next.call(null,xs);
coll = G__7839;
x = G__7840;
xs = G__7841;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7838 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7838__delegate.call(this, coll, x, xs);
};
G__7838.cljs$lang$maxFixedArity = 2;
G__7838.cljs$lang$applyTo = (function (arglist__7842){
var coll = cljs.core.first(arglist__7842);
var x = cljs.core.first(cljs.core.next(arglist__7842));
var xs = cljs.core.rest(cljs.core.next(arglist__7842));
return G__7838__delegate(coll, x, xs);
});
G__7838.cljs$lang$arity$variadic = G__7838__delegate;
return G__7838;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
void 0;
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll,acc){
while(true){
if(cljs.core.counted_QMARK_.call(null,coll))
{return (acc + cljs.core._count.call(null,coll));
} else
{{
var G__7843 = cljs.core.next.call(null,coll);
var G__7844 = (acc + 1);
coll = G__7843;
acc = G__7844;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll,0);
}
});
void 0;
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((n === 0))
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((n === 0))
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((function (){var G__7845__7846 = coll;
if((G__7845__7846 != null))
{if((function (){var or__3548__auto____7847 = (G__7845__7846.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3548__auto____7847)
{return or__3548__auto____7847;
} else
{return G__7845__7846.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7845__7846.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7845__7846);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7845__7846);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
});
var nth__3 = (function (coll,n,not_found){
if((function (){var G__7848__7849 = coll;
if((G__7848__7849 != null))
{if((function (){var or__3548__auto____7850 = (G__7848__7849.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3548__auto____7850)
{return or__3548__auto____7850;
} else
{return G__7848__7849.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7848__7849.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7848__7849);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7848__7849);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__7852__delegate = function (coll,k,v,kvs){
while(true){
var ret__7851 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7853 = ret__7851;
var G__7854 = cljs.core.first.call(null,kvs);
var G__7855 = cljs.core.second.call(null,kvs);
var G__7856 = cljs.core.nnext.call(null,kvs);
coll = G__7853;
k = G__7854;
v = G__7855;
kvs = G__7856;
continue;
}
} else
{return ret__7851;
}
break;
}
};
var G__7852 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7852__delegate.call(this, coll, k, v, kvs);
};
G__7852.cljs$lang$maxFixedArity = 3;
G__7852.cljs$lang$applyTo = (function (arglist__7857){
var coll = cljs.core.first(arglist__7857);
var k = cljs.core.first(cljs.core.next(arglist__7857));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7857)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7857)));
return G__7852__delegate(coll, k, v, kvs);
});
G__7852.cljs$lang$arity$variadic = G__7852__delegate;
return G__7852;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__7859__delegate = function (coll,k,ks){
while(true){
var ret__7858 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7860 = ret__7858;
var G__7861 = cljs.core.first.call(null,ks);
var G__7862 = cljs.core.next.call(null,ks);
coll = G__7860;
k = G__7861;
ks = G__7862;
continue;
}
} else
{return ret__7858;
}
break;
}
};
var G__7859 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7859__delegate.call(this, coll, k, ks);
};
G__7859.cljs$lang$maxFixedArity = 2;
G__7859.cljs$lang$applyTo = (function (arglist__7863){
var coll = cljs.core.first(arglist__7863);
var k = cljs.core.first(cljs.core.next(arglist__7863));
var ks = cljs.core.rest(cljs.core.next(arglist__7863));
return G__7859__delegate(coll, k, ks);
});
G__7859.cljs$lang$arity$variadic = G__7859__delegate;
return G__7859;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__7864__7865 = o;
if((G__7864__7865 != null))
{if((function (){var or__3548__auto____7866 = (G__7864__7865.cljs$lang$protocol_mask$partition0$ & 65536);
if(or__3548__auto____7866)
{return or__3548__auto____7866;
} else
{return G__7864__7865.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7864__7865.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7864__7865);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7864__7865);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__7868__delegate = function (coll,k,ks){
while(true){
var ret__7867 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7869 = ret__7867;
var G__7870 = cljs.core.first.call(null,ks);
var G__7871 = cljs.core.next.call(null,ks);
coll = G__7869;
k = G__7870;
ks = G__7871;
continue;
}
} else
{return ret__7867;
}
break;
}
};
var G__7868 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7868__delegate.call(this, coll, k, ks);
};
G__7868.cljs$lang$maxFixedArity = 2;
G__7868.cljs$lang$applyTo = (function (arglist__7872){
var coll = cljs.core.first(arglist__7872);
var k = cljs.core.first(cljs.core.next(arglist__7872));
var ks = cljs.core.rest(cljs.core.next(arglist__7872));
return G__7868__delegate(coll, k, ks);
});
G__7868.cljs$lang$arity$variadic = G__7868__delegate;
return G__7868;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7873__7874 = x;
if((G__7873__7874 != null))
{if((function (){var or__3548__auto____7875 = (G__7873__7874.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3548__auto____7875)
{return or__3548__auto____7875;
} else
{return G__7873__7874.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7873__7874.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7873__7874);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7873__7874);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7876__7877 = x;
if((G__7876__7877 != null))
{if((function (){var or__3548__auto____7878 = (G__7876__7877.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3548__auto____7878)
{return or__3548__auto____7878;
} else
{return G__7876__7877.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7876__7877.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7876__7877);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7876__7877);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7879__7880 = x;
if((G__7879__7880 != null))
{if((function (){var or__3548__auto____7881 = (G__7879__7880.cljs$lang$protocol_mask$partition0$ & 256);
if(or__3548__auto____7881)
{return or__3548__auto____7881;
} else
{return G__7879__7880.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7879__7880.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7879__7880);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7879__7880);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7882__7883 = x;
if((G__7882__7883 != null))
{if((function (){var or__3548__auto____7884 = (G__7882__7883.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3548__auto____7884)
{return or__3548__auto____7884;
} else
{return G__7882__7883.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7882__7883.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7882__7883);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7882__7883);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7885__7886 = x;
if((G__7885__7886 != null))
{if((function (){var or__3548__auto____7887 = (G__7885__7886.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3548__auto____7887)
{return or__3548__auto____7887;
} else
{return G__7885__7886.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7885__7886.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7885__7886);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7885__7886);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7888__7889 = x;
if((G__7888__7889 != null))
{if((function (){var or__3548__auto____7890 = (G__7888__7889.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3548__auto____7890)
{return or__3548__auto____7890;
} else
{return G__7888__7889.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7888__7889.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7888__7889);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7888__7889);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7891__7892 = x;
if((G__7891__7892 != null))
{if((function (){var or__3548__auto____7893 = (G__7891__7892.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3548__auto____7893)
{return or__3548__auto____7893;
} else
{return G__7891__7892.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7891__7892.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7891__7892);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7891__7892);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7894__7895 = x;
if((G__7894__7895 != null))
{if((function (){var or__3548__auto____7896 = (G__7894__7895.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3548__auto____7896)
{return or__3548__auto____7896;
} else
{return G__7894__7895.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7894__7895.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7894__7895);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7894__7895);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7897__7898 = x;
if((G__7897__7898 != null))
{if((function (){var or__3548__auto____7899 = (G__7897__7898.cljs$lang$protocol_mask$partition0$ & 8192);
if(or__3548__auto____7899)
{return or__3548__auto____7899;
} else
{return G__7897__7898.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7897__7898.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7897__7898);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7897__7898);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__7900__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__7900 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7900__delegate.call(this, keyvals);
};
G__7900.cljs$lang$maxFixedArity = 0;
G__7900.cljs$lang$applyTo = (function (arglist__7901){
var keyvals = cljs.core.seq(arglist__7901);;
return G__7900__delegate(keyvals);
});
G__7900.cljs$lang$arity$variadic = G__7900__delegate;
return G__7900;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(falsecljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__7902 = [];
goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__7902.push(key);
}));
return keys__7902;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7903 = i;
var j__7904 = j;
var len__7905 = len;
while(true){
if((len__7905 === 0))
{return to;
} else
{(to[j__7904] = (from[i__7903]));
{
var G__7906 = (i__7903 + 1);
var G__7907 = (j__7904 + 1);
var G__7908 = (len__7905 - 1);
i__7903 = G__7906;
j__7904 = G__7907;
len__7905 = G__7908;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7909 = (i + (len - 1));
var j__7910 = (j + (len - 1));
var len__7911 = len;
while(true){
if((len__7911 === 0))
{return to;
} else
{(to[j__7910] = (from[i__7909]));
{
var G__7912 = (i__7909 - 1);
var G__7913 = (j__7910 - 1);
var G__7914 = (len__7911 - 1);
i__7909 = G__7912;
j__7910 = G__7913;
len__7911 = G__7914;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__7915__7916 = s;
if((G__7915__7916 != null))
{if((function (){var or__3548__auto____7917 = (G__7915__7916.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____7917)
{return or__3548__auto____7917;
} else
{return G__7915__7916.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7915__7916.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7915__7916);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7915__7916);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7918__7919 = s;
if((G__7918__7919 != null))
{if((function (){var or__3548__auto____7920 = (G__7918__7919.cljs$lang$protocol_mask$partition0$ & 4194304);
if(or__3548__auto____7920)
{return or__3548__auto____7920;
} else
{return G__7918__7919.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7918__7919.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7918__7919);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7918__7919);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____7921 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3546__auto____7921))
{return cljs.core.not.call(null,(function (){var or__3548__auto____7922 = (x.charAt(0) === "\uFDD0");
if(or__3548__auto____7922)
{return or__3548__auto____7922;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3546__auto____7921;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____7923 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3546__auto____7923))
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3546__auto____7923;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____7924 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3546__auto____7924))
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3546__auto____7924;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3548__auto____7925 = cljs.core.fn_QMARK_.call(null,f);
if(or__3548__auto____7925)
{return or__3548__auto____7925;
} else
{var G__7926__7927 = f;
if((G__7926__7927 != null))
{if((function (){var or__3548__auto____7928 = (G__7926__7927.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3548__auto____7928)
{return or__3548__auto____7928;
} else
{return G__7926__7927.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7926__7927.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7926__7927);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7926__7927);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____7929 = cljs.core.number_QMARK_.call(null,n);
if(and__3546__auto____7929)
{return (n == n.toFixed());
} else
{return and__3546__auto____7929;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7930 = coll;
if(cljs.core.truth_(and__3546__auto____7930))
{var and__3546__auto____7931 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3546__auto____7931)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____7931;
}
} else
{return and__3546__auto____7930;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__7936__delegate = function (x,y,more){
if(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y)))
{var s__7932 = cljs.core.set([y,x]);
var xs__7933 = more;
while(true){
var x__7934 = cljs.core.first.call(null,xs__7933);
var etc__7935 = cljs.core.next.call(null,xs__7933);
if(cljs.core.truth_(xs__7933))
{if(cljs.core.contains_QMARK_.call(null,s__7932,x__7934))
{return false;
} else
{{
var G__7937 = cljs.core.conj.call(null,s__7932,x__7934);
var G__7938 = etc__7935;
s__7932 = G__7937;
xs__7933 = G__7938;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__7936 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7936__delegate.call(this, x, y, more);
};
G__7936.cljs$lang$maxFixedArity = 2;
G__7936.cljs$lang$applyTo = (function (arglist__7939){
var x = cljs.core.first(arglist__7939);
var y = cljs.core.first(cljs.core.next(arglist__7939));
var more = cljs.core.rest(cljs.core.next(arglist__7939));
return G__7936__delegate(x, y, more);
});
G__7936.cljs$lang$arity$variadic = G__7936__delegate;
return G__7936;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare for objects of the same type
* and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{return goog.array.defaultCompare.call(null,x,y);
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__7940 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7940))
{return r__7940;
} else
{if(cljs.core.truth_(r__7940))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
void 0;
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__7941 = cljs.core.to_array.call(null,coll);
goog.array.stableSort.call(null,a__7941,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7941);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3695__auto____7942 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3695__auto____7942))
{var s__7943 = temp__3695__auto____7942;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7943),cljs.core.next.call(null,s__7943));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7944 = val;
var coll__7945 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_(coll__7945))
{var nval__7946 = f.call(null,val__7944,cljs.core.first.call(null,coll__7945));
if(cljs.core.reduced_QMARK_.call(null,nval__7946))
{return cljs.core.deref.call(null,nval__7946);
} else
{{
var G__7947 = nval__7946;
var G__7948 = cljs.core.next.call(null,coll__7945);
val__7944 = G__7947;
coll__7945 = G__7948;
continue;
}
}
} else
{return val__7944;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__7949__7950 = coll;
if((G__7949__7950 != null))
{if((function (){var or__3548__auto____7951 = (G__7949__7950.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3548__auto____7951)
{return or__3548__auto____7951;
} else
{return G__7949__7950.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7949__7950.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7949__7950);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7949__7950);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7952__7953 = coll;
if((G__7952__7953 != null))
{if((function (){var or__3548__auto____7954 = (G__7952__7953.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3548__auto____7954)
{return or__3548__auto____7954;
} else
{return G__7952__7953.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7952__7953.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7952__7953);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7952__7953);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16384;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$ = true;
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__7955 = this;
return this__7955.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__7956__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7956 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7956__delegate.call(this, x, y, more);
};
G__7956.cljs$lang$maxFixedArity = 2;
G__7956.cljs$lang$applyTo = (function (arglist__7957){
var x = cljs.core.first(arglist__7957);
var y = cljs.core.first(cljs.core.next(arglist__7957));
var more = cljs.core.rest(cljs.core.next(arglist__7957));
return G__7956__delegate(x, y, more);
});
G__7956.cljs$lang$arity$variadic = G__7956__delegate;
return G__7956;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__7958__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7958 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7958__delegate.call(this, x, y, more);
};
G__7958.cljs$lang$maxFixedArity = 2;
G__7958.cljs$lang$applyTo = (function (arglist__7959){
var x = cljs.core.first(arglist__7959);
var y = cljs.core.first(cljs.core.next(arglist__7959));
var more = cljs.core.rest(cljs.core.next(arglist__7959));
return G__7958__delegate(x, y, more);
});
G__7958.cljs$lang$arity$variadic = G__7958__delegate;
return G__7958;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__7960__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7960 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7960__delegate.call(this, x, y, more);
};
G__7960.cljs$lang$maxFixedArity = 2;
G__7960.cljs$lang$applyTo = (function (arglist__7961){
var x = cljs.core.first(arglist__7961);
var y = cljs.core.first(cljs.core.next(arglist__7961));
var more = cljs.core.rest(cljs.core.next(arglist__7961));
return G__7960__delegate(x, y, more);
});
G__7960.cljs$lang$arity$variadic = G__7960__delegate;
return G__7960;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__7962__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7962 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7962__delegate.call(this, x, y, more);
};
G__7962.cljs$lang$maxFixedArity = 2;
G__7962.cljs$lang$applyTo = (function (arglist__7963){
var x = cljs.core.first(arglist__7963);
var y = cljs.core.first(cljs.core.next(arglist__7963));
var more = cljs.core.rest(cljs.core.next(arglist__7963));
return G__7962__delegate(x, y, more);
});
G__7962.cljs$lang$arity$variadic = G__7962__delegate;
return G__7962;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__7964__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7965 = y;
var G__7966 = cljs.core.first.call(null,more);
var G__7967 = cljs.core.next.call(null,more);
x = G__7965;
y = G__7966;
more = G__7967;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7964 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7964__delegate.call(this, x, y, more);
};
G__7964.cljs$lang$maxFixedArity = 2;
G__7964.cljs$lang$applyTo = (function (arglist__7968){
var x = cljs.core.first(arglist__7968);
var y = cljs.core.first(cljs.core.next(arglist__7968));
var more = cljs.core.rest(cljs.core.next(arglist__7968));
return G__7964__delegate(x, y, more);
});
G__7964.cljs$lang$arity$variadic = G__7964__delegate;
return G__7964;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__7969__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7970 = y;
var G__7971 = cljs.core.first.call(null,more);
var G__7972 = cljs.core.next.call(null,more);
x = G__7970;
y = G__7971;
more = G__7972;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7969 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7969__delegate.call(this, x, y, more);
};
G__7969.cljs$lang$maxFixedArity = 2;
G__7969.cljs$lang$applyTo = (function (arglist__7973){
var x = cljs.core.first(arglist__7973);
var y = cljs.core.first(cljs.core.next(arglist__7973));
var more = cljs.core.rest(cljs.core.next(arglist__7973));
return G__7969__delegate(x, y, more);
});
G__7969.cljs$lang$arity$variadic = G__7969__delegate;
return G__7969;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__7974__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7975 = y;
var G__7976 = cljs.core.first.call(null,more);
var G__7977 = cljs.core.next.call(null,more);
x = G__7975;
y = G__7976;
more = G__7977;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7974 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7974__delegate.call(this, x, y, more);
};
G__7974.cljs$lang$maxFixedArity = 2;
G__7974.cljs$lang$applyTo = (function (arglist__7978){
var x = cljs.core.first(arglist__7978);
var y = cljs.core.first(cljs.core.next(arglist__7978));
var more = cljs.core.rest(cljs.core.next(arglist__7978));
return G__7974__delegate(x, y, more);
});
G__7974.cljs$lang$arity$variadic = G__7974__delegate;
return G__7974;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__7979__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7980 = y;
var G__7981 = cljs.core.first.call(null,more);
var G__7982 = cljs.core.next.call(null,more);
x = G__7980;
y = G__7981;
more = G__7982;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7979 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7979__delegate.call(this, x, y, more);
};
G__7979.cljs$lang$maxFixedArity = 2;
G__7979.cljs$lang$applyTo = (function (arglist__7983){
var x = cljs.core.first(arglist__7983);
var y = cljs.core.first(cljs.core.next(arglist__7983));
var more = cljs.core.rest(cljs.core.next(arglist__7983));
return G__7979__delegate(x, y, more);
});
G__7979.cljs$lang$arity$variadic = G__7979__delegate;
return G__7979;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__7984__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7984 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7984__delegate.call(this, x, y, more);
};
G__7984.cljs$lang$maxFixedArity = 2;
G__7984.cljs$lang$applyTo = (function (arglist__7985){
var x = cljs.core.first(arglist__7985);
var y = cljs.core.first(cljs.core.next(arglist__7985));
var more = cljs.core.rest(cljs.core.next(arglist__7985));
return G__7984__delegate(x, y, more);
});
G__7984.cljs$lang$arity$variadic = G__7984__delegate;
return G__7984;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__7986__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7986 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7986__delegate.call(this, x, y, more);
};
G__7986.cljs$lang$maxFixedArity = 2;
G__7986.cljs$lang$applyTo = (function (arglist__7987){
var x = cljs.core.first(arglist__7987);
var y = cljs.core.first(cljs.core.next(arglist__7987));
var more = cljs.core.rest(cljs.core.next(arglist__7987));
return G__7986__delegate(x, y, more);
});
G__7986.cljs$lang$arity$variadic = G__7986__delegate;
return G__7986;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__7988 = (n % d);
return cljs.core.fix.call(null,((n - rem__7988) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7989 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7989));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(n){
var c__7990 = 0;
var n__7991 = n;
while(true){
if((n__7991 === 0))
{return c__7990;
} else
{{
var G__7992 = (c__7990 + 1);
var G__7993 = (n__7991 & (n__7991 - 1));
c__7990 = G__7992;
n__7991 = G__7993;
continue;
}
}
break;
}
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__7994__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7995 = y;
var G__7996 = cljs.core.first.call(null,more);
var G__7997 = cljs.core.next.call(null,more);
x = G__7995;
y = G__7996;
more = G__7997;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7994 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7994__delegate.call(this, x, y, more);
};
G__7994.cljs$lang$maxFixedArity = 2;
G__7994.cljs$lang$applyTo = (function (arglist__7998){
var x = cljs.core.first(arglist__7998);
var y = cljs.core.first(cljs.core.next(arglist__7998));
var more = cljs.core.rest(cljs.core.next(arglist__7998));
return G__7994__delegate(x, y, more);
});
G__7994.cljs$lang$arity$variadic = G__7994__delegate;
return G__7994;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__7999 = n;
var xs__8000 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8001 = xs__8000;
if(cljs.core.truth_(and__3546__auto____8001))
{return (n__7999 > 0);
} else
{return and__3546__auto____8001;
}
})()))
{{
var G__8002 = (n__7999 - 1);
var G__8003 = cljs.core.next.call(null,xs__8000);
n__7999 = G__8002;
xs__8000 = G__8003;
continue;
}
} else
{return xs__8000;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__8004__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8005 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8006 = cljs.core.next.call(null,more);
sb = G__8005;
more = G__8006;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8004 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8004__delegate.call(this, x, ys);
};
G__8004.cljs$lang$maxFixedArity = 1;
G__8004.cljs$lang$applyTo = (function (arglist__8007){
var x = cljs.core.first(arglist__8007);
var ys = cljs.core.rest(arglist__8007);
return G__8004__delegate(x, ys);
});
G__8004.cljs$lang$arity$variadic = G__8004__delegate;
return G__8004;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__8008__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8009 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__8010 = cljs.core.next.call(null,more);
sb = G__8009;
more = G__8010;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__8008 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8008__delegate.call(this, x, ys);
};
G__8008.cljs$lang$maxFixedArity = 1;
G__8008.cljs$lang$applyTo = (function (arglist__8011){
var x = cljs.core.first(arglist__8011);
var ys = cljs.core.rest(arglist__8011);
return G__8008__delegate(x, ys);
});
G__8008.cljs$lang$arity$variadic = G__8008__delegate;
return G__8008;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8012 = cljs.core.seq.call(null,x);
var ys__8013 = cljs.core.seq.call(null,y);
while(true){
if((xs__8012 == null))
{return (ys__8013 == null);
} else
{if((ys__8013 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8012),cljs.core.first.call(null,ys__8013)))
{{
var G__8014 = cljs.core.next.call(null,xs__8012);
var G__8015 = cljs.core.next.call(null,ys__8013);
xs__8012 = G__8014;
ys__8013 = G__8015;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__8016_SHARP_,p2__8017_SHARP_){
return cljs.core.hash_combine.call(null,p1__8016_SHARP_,cljs.core.hash.call(null,p2__8017_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__8018 = 0;
var s__8019 = cljs.core.seq.call(null,m);
while(true){
if(cljs.core.truth_(s__8019))
{var e__8020 = cljs.core.first.call(null,s__8019);
{
var G__8021 = ((h__8018 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__8020)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__8020)))) % 4503599627370496);
var G__8022 = cljs.core.next.call(null,s__8019);
h__8018 = G__8021;
s__8019 = G__8022;
continue;
}
} else
{return h__8018;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__8023 = 0;
var s__8024 = cljs.core.seq.call(null,s);
while(true){
if(cljs.core.truth_(s__8024))
{var e__8025 = cljs.core.first.call(null,s__8024);
{
var G__8026 = ((h__8023 + cljs.core.hash.call(null,e__8025)) % 4503599627370496);
var G__8027 = cljs.core.next.call(null,s__8024);
h__8023 = G__8026;
s__8024 = G__8027;
continue;
}
} else
{return h__8023;
}
break;
}
});
void 0;
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__8028__8029 = cljs.core.seq.call(null,fn_map);
if(cljs.core.truth_(G__8028__8029))
{var G__8031__8033 = cljs.core.first.call(null,G__8028__8029);
var vec__8032__8034 = G__8031__8033;
var key_name__8035 = cljs.core.nth.call(null,vec__8032__8034,0,null);
var f__8036 = cljs.core.nth.call(null,vec__8032__8034,1,null);
var G__8028__8037 = G__8028__8029;
var G__8031__8038 = G__8031__8033;
var G__8028__8039 = G__8028__8037;
while(true){
var vec__8040__8041 = G__8031__8038;
var key_name__8042 = cljs.core.nth.call(null,vec__8040__8041,0,null);
var f__8043 = cljs.core.nth.call(null,vec__8040__8041,1,null);
var G__8028__8044 = G__8028__8039;
var str_name__8045 = cljs.core.name.call(null,key_name__8042);
obj[str_name__8045] = f__8043;
var temp__3698__auto____8046 = cljs.core.next.call(null,G__8028__8044);
if(cljs.core.truth_(temp__3698__auto____8046))
{var G__8028__8047 = temp__3698__auto____8046;
{
var G__8048 = cljs.core.first.call(null,G__8028__8047);
var G__8049 = G__8028__8047;
G__8031__8038 = G__8048;
G__8028__8039 = G__8049;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32706670;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8050 = this;
var h__2226__auto____8051 = this__8050.__hash;
if((h__2226__auto____8051 != null))
{return h__2226__auto____8051;
} else
{var h__2226__auto____8052 = cljs.core.hash_coll.call(null,coll);
this__8050.__hash = h__2226__auto____8052;
return h__2226__auto____8052;
}
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8053 = this;
return (new cljs.core.List(this__8053.meta,o,coll,(this__8053.count + 1),null));
});
cljs.core.List.prototype.cljs$core$ASeq$ = true;
cljs.core.List.prototype.toString = (function (){
var this__8054 = this;
var this$__8055 = this;
return cljs.core.pr_str.call(null,this$__8055);
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8056 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8057 = this;
return this__8057.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8058 = this;
return this__8058.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8059 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8060 = this;
return this__8060.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8061 = this;
return this__8061.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8062 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8063 = this;
return (new cljs.core.List(meta,this__8063.first,this__8063.rest,this__8063.count,this__8063.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8064 = this;
return this__8064.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8065 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IList$ = true;
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32706638;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8066 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8067 = this;
return (new cljs.core.List(this__8067.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__8068 = this;
var this$__8069 = this;
return cljs.core.pr_str.call(null,this$__8069);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8070 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8071 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8072 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8073 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8074 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8075 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8076 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8077 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8078 = this;
return this__8078.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8079 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IList$ = true;
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__8080__8081 = coll;
if((G__8080__8081 != null))
{if((function (){var or__3548__auto____8082 = (G__8080__8081.cljs$lang$protocol_mask$partition0$ & 67108864);
if(or__3548__auto____8082)
{return or__3548__auto____8082;
} else
{return G__8080__8081.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__8080__8081.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__8080__8081);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__8080__8081);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__8083){
var items = cljs.core.seq(arglist__8083);;
return list__delegate(items);
});
list.cljs$lang$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32702572;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8084 = this;
var h__2226__auto____8085 = this__8084.__hash;
if((h__2226__auto____8085 != null))
{return h__2226__auto____8085;
} else
{var h__2226__auto____8086 = cljs.core.hash_coll.call(null,coll);
this__8084.__hash = h__2226__auto____8086;
return h__2226__auto____8086;
}
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8087 = this;
return (new cljs.core.Cons(null,o,coll,this__8087.__hash));
});
cljs.core.Cons.prototype.cljs$core$ASeq$ = true;
cljs.core.Cons.prototype.toString = (function (){
var this__8088 = this;
var this$__8089 = this;
return cljs.core.pr_str.call(null,this$__8089);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8090 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8091 = this;
return this__8091.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8092 = this;
if((this__8092.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__8092.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8093 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8094 = this;
return (new cljs.core.Cons(meta,this__8094.first,this__8094.rest,this__8094.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8095 = this;
return this__8095.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8096 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8096.meta);
});
cljs.core.Cons.prototype.cljs$core$IList$ = true;
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3548__auto____8097 = (coll == null);
if(or__3548__auto____8097)
{return or__3548__auto____8097;
} else
{var G__8098__8099 = coll;
if((G__8098__8099 != null))
{if((function (){var or__3548__auto____8100 = (G__8098__8099.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____8100)
{return or__3548__auto____8100;
} else
{return G__8098__8099.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8098__8099.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8098__8099);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8098__8099);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__8101__8102 = x;
if((G__8101__8102 != null))
{if((function (){var or__3548__auto____8103 = (G__8101__8102.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3548__auto____8103)
{return or__3548__auto____8103;
} else
{return G__8101__8102.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__8101__8102.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__8101__8102);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__8101__8102);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__8104 = null;
var G__8104__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__8104__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__8104 = function(string,f,start){
switch(arguments.length){
case 2:
return G__8104__2.call(this,string,f);
case 3:
return G__8104__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8104;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__8105 = null;
var G__8105__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__8105__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__8105 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__8105__2.call(this,string,k);
case 3:
return G__8105__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8105;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__8106 = null;
var G__8106__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__8106__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__8106 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__8106__2.call(this,string,n);
case 3:
return G__8106__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8106;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__8115 = null;
var G__8115__2 = (function (tsym8109,coll){
var tsym8109__8111 = this;
var this$__8112 = tsym8109__8111;
return cljs.core.get.call(null,coll,this$__8112.toString());
});
var G__8115__3 = (function (tsym8110,coll,not_found){
var tsym8110__8113 = this;
var this$__8114 = tsym8110__8113;
return cljs.core.get.call(null,coll,this$__8114.toString(),not_found);
});
G__8115 = function(tsym8110,coll,not_found){
switch(arguments.length){
case 2:
return G__8115__2.call(this,tsym8110,coll);
case 3:
return G__8115__3.call(this,tsym8110,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8115;
})()
;
String.prototype.apply = (function (tsym8107,args8108){
return tsym8107.call.apply(tsym8107,[tsym8107].concat(cljs.core.aclone.call(null,args8108)));
});
String['prototype']['apply'] = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__8116 = lazy_seq.x;
if(cljs.core.truth_(lazy_seq.realized))
{return x__8116;
} else
{lazy_seq.x = x__8116.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8117 = this;
var h__2226__auto____8118 = this__8117.__hash;
if((h__2226__auto____8118 != null))
{return h__2226__auto____8118;
} else
{var h__2226__auto____8119 = cljs.core.hash_coll.call(null,coll);
this__8117.__hash = h__2226__auto____8119;
return h__2226__auto____8119;
}
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8120 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__8121 = this;
var this$__8122 = this;
return cljs.core.pr_str.call(null,this$__8122);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8123 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8124 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8125 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8126 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8127 = this;
return (new cljs.core.LazySeq(meta,this__8127.realized,this__8127.x,this__8127.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8128 = this;
return this__8128.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8129 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8129.meta);
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__8130 = [];
var s__8131 = s;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__8131)))
{ary__8130.push(cljs.core.first.call(null,s__8131));
{
var G__8132 = cljs.core.next.call(null,s__8131);
s__8131 = G__8132;
continue;
}
} else
{return ary__8130;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__8133 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__8134 = 0;
var xs__8135 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_(xs__8135))
{(ret__8133[i__8134] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__8135)));
{
var G__8136 = (i__8134 + 1);
var G__8137 = cljs.core.next.call(null,xs__8135);
i__8134 = G__8136;
xs__8135 = G__8137;
continue;
}
} else
{}
break;
}
return ret__8133;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__8138 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8139 = cljs.core.seq.call(null,init_val_or_seq);
var i__8140 = 0;
var s__8141 = s__8139;
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8142 = s__8141;
if(cljs.core.truth_(and__3546__auto____8142))
{return (i__8140 < size);
} else
{return and__3546__auto____8142;
}
})()))
{(a__8138[i__8140] = cljs.core.first.call(null,s__8141));
{
var G__8145 = (i__8140 + 1);
var G__8146 = cljs.core.next.call(null,s__8141);
i__8140 = G__8145;
s__8141 = G__8146;
continue;
}
} else
{return a__8138;
}
break;
}
} else
{var n__2515__auto____8143 = size;
var i__8144 = 0;
while(true){
if((i__8144 < n__2515__auto____8143))
{(a__8138[i__8144] = init_val_or_seq);
{
var G__8147 = (i__8144 + 1);
i__8144 = G__8147;
continue;
}
} else
{}
break;
}
return a__8138;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__8148 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8149 = cljs.core.seq.call(null,init_val_or_seq);
var i__8150 = 0;
var s__8151 = s__8149;
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8152 = s__8151;
if(cljs.core.truth_(and__3546__auto____8152))
{return (i__8150 < size);
} else
{return and__3546__auto____8152;
}
})()))
{(a__8148[i__8150] = cljs.core.first.call(null,s__8151));
{
var G__8155 = (i__8150 + 1);
var G__8156 = cljs.core.next.call(null,s__8151);
i__8150 = G__8155;
s__8151 = G__8156;
continue;
}
} else
{return a__8148;
}
break;
}
} else
{var n__2515__auto____8153 = size;
var i__8154 = 0;
while(true){
if((i__8154 < n__2515__auto____8153))
{(a__8148[i__8154] = init_val_or_seq);
{
var G__8157 = (i__8154 + 1);
i__8154 = G__8157;
continue;
}
} else
{}
break;
}
return a__8148;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__8158 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8159 = cljs.core.seq.call(null,init_val_or_seq);
var i__8160 = 0;
var s__8161 = s__8159;
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8162 = s__8161;
if(cljs.core.truth_(and__3546__auto____8162))
{return (i__8160 < size);
} else
{return and__3546__auto____8162;
}
})()))
{(a__8158[i__8160] = cljs.core.first.call(null,s__8161));
{
var G__8165 = (i__8160 + 1);
var G__8166 = cljs.core.next.call(null,s__8161);
i__8160 = G__8165;
s__8161 = G__8166;
continue;
}
} else
{return a__8158;
}
break;
}
} else
{var n__2515__auto____8163 = size;
var i__8164 = 0;
while(true){
if((i__8164 < n__2515__auto____8163))
{(a__8158[i__8164] = init_val_or_seq);
{
var G__8167 = (i__8164 + 1);
i__8164 = G__8167;
continue;
}
} else
{}
break;
}
return a__8158;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__8168 = s;
var i__8169 = n;
var sum__8170 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8171 = (i__8169 > 0);
if(and__3546__auto____8171)
{return cljs.core.seq.call(null,s__8168);
} else
{return and__3546__auto____8171;
}
})()))
{{
var G__8172 = cljs.core.next.call(null,s__8168);
var G__8173 = (i__8169 - 1);
var G__8174 = (sum__8170 + 1);
s__8168 = G__8172;
i__8169 = G__8173;
sum__8170 = G__8174;
continue;
}
} else
{return sum__8170;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8175 = cljs.core.seq.call(null,x);
if(cljs.core.truth_(s__8175))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8175),concat.call(null,cljs.core.rest.call(null,s__8175),y));
} else
{return y;
}
})));
});
var concat__3 = (function() { 
var G__8178__delegate = function (x,y,zs){
var cat__8177 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__8176 = cljs.core.seq.call(null,xys);
if(cljs.core.truth_(xys__8176))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__8176),cat.call(null,cljs.core.rest.call(null,xys__8176),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});
return cat__8177.call(null,concat.call(null,x,y),zs);
};
var G__8178 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8178__delegate.call(this, x, y, zs);
};
G__8178.cljs$lang$maxFixedArity = 2;
G__8178.cljs$lang$applyTo = (function (arglist__8179){
var x = cljs.core.first(arglist__8179);
var y = cljs.core.first(cljs.core.next(arglist__8179));
var zs = cljs.core.rest(cljs.core.next(arglist__8179));
return G__8178__delegate(x, y, zs);
});
G__8178.cljs$lang$arity$variadic = G__8178__delegate;
return G__8178;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__8180__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__8180 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8180__delegate.call(this, a, b, c, d, more);
};
G__8180.cljs$lang$maxFixedArity = 4;
G__8180.cljs$lang$applyTo = (function (arglist__8181){
var a = cljs.core.first(arglist__8181);
var b = cljs.core.first(cljs.core.next(arglist__8181));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8181)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8181))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8181))));
return G__8180__delegate(a, b, c, d, more);
});
G__8180.cljs$lang$arity$variadic = G__8180__delegate;
return G__8180;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
void 0;cljs.core.apply_to = (function apply_to(f,argc,args){
var args__8182 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__8183 = cljs.core._first.call(null,args__8182);
var args__8184 = cljs.core._rest.call(null,args__8182);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__8183);
} else
{return f.call(null,a__8183);
}
} else
{var b__8185 = cljs.core._first.call(null,args__8184);
var args__8186 = cljs.core._rest.call(null,args__8184);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__8183,b__8185);
} else
{return f.call(null,a__8183,b__8185);
}
} else
{var c__8187 = cljs.core._first.call(null,args__8186);
var args__8188 = cljs.core._rest.call(null,args__8186);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__8183,b__8185,c__8187);
} else
{return f.call(null,a__8183,b__8185,c__8187);
}
} else
{var d__8189 = cljs.core._first.call(null,args__8188);
var args__8190 = cljs.core._rest.call(null,args__8188);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__8183,b__8185,c__8187,d__8189);
} else
{return f.call(null,a__8183,b__8185,c__8187,d__8189);
}
} else
{var e__8191 = cljs.core._first.call(null,args__8190);
var args__8192 = cljs.core._rest.call(null,args__8190);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__8183,b__8185,c__8187,d__8189,e__8191);
} else
{return f.call(null,a__8183,b__8185,c__8187,d__8189,e__8191);
}
} else
{var f__8193 = cljs.core._first.call(null,args__8192);
var args__8194 = cljs.core._rest.call(null,args__8192);
if((argc === 6))
{if(f__8193.cljs$lang$arity$6)
{return f__8193.cljs$lang$arity$6(a__8183,b__8185,c__8187,d__8189,e__8191,f__8193);
} else
{return f__8193.call(null,a__8183,b__8185,c__8187,d__8189,e__8191,f__8193);
}
} else
{var g__8195 = cljs.core._first.call(null,args__8194);
var args__8196 = cljs.core._rest.call(null,args__8194);
if((argc === 7))
{if(f__8193.cljs$lang$arity$7)
{return f__8193.cljs$lang$arity$7(a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195);
} else
{return f__8193.call(null,a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195);
}
} else
{var h__8197 = cljs.core._first.call(null,args__8196);
var args__8198 = cljs.core._rest.call(null,args__8196);
if((argc === 8))
{if(f__8193.cljs$lang$arity$8)
{return f__8193.cljs$lang$arity$8(a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197);
} else
{return f__8193.call(null,a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197);
}
} else
{var i__8199 = cljs.core._first.call(null,args__8198);
var args__8200 = cljs.core._rest.call(null,args__8198);
if((argc === 9))
{if(f__8193.cljs$lang$arity$9)
{return f__8193.cljs$lang$arity$9(a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199);
} else
{return f__8193.call(null,a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199);
}
} else
{var j__8201 = cljs.core._first.call(null,args__8200);
var args__8202 = cljs.core._rest.call(null,args__8200);
if((argc === 10))
{if(f__8193.cljs$lang$arity$10)
{return f__8193.cljs$lang$arity$10(a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201);
} else
{return f__8193.call(null,a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201);
}
} else
{var k__8203 = cljs.core._first.call(null,args__8202);
var args__8204 = cljs.core._rest.call(null,args__8202);
if((argc === 11))
{if(f__8193.cljs$lang$arity$11)
{return f__8193.cljs$lang$arity$11(a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201,k__8203);
} else
{return f__8193.call(null,a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201,k__8203);
}
} else
{var l__8205 = cljs.core._first.call(null,args__8204);
var args__8206 = cljs.core._rest.call(null,args__8204);
if((argc === 12))
{if(f__8193.cljs$lang$arity$12)
{return f__8193.cljs$lang$arity$12(a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201,k__8203,l__8205);
} else
{return f__8193.call(null,a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201,k__8203,l__8205);
}
} else
{var m__8207 = cljs.core._first.call(null,args__8206);
var args__8208 = cljs.core._rest.call(null,args__8206);
if((argc === 13))
{if(f__8193.cljs$lang$arity$13)
{return f__8193.cljs$lang$arity$13(a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201,k__8203,l__8205,m__8207);
} else
{return f__8193.call(null,a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201,k__8203,l__8205,m__8207);
}
} else
{var n__8209 = cljs.core._first.call(null,args__8208);
var args__8210 = cljs.core._rest.call(null,args__8208);
if((argc === 14))
{if(f__8193.cljs$lang$arity$14)
{return f__8193.cljs$lang$arity$14(a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201,k__8203,l__8205,m__8207,n__8209);
} else
{return f__8193.call(null,a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201,k__8203,l__8205,m__8207,n__8209);
}
} else
{var o__8211 = cljs.core._first.call(null,args__8210);
var args__8212 = cljs.core._rest.call(null,args__8210);
if((argc === 15))
{if(f__8193.cljs$lang$arity$15)
{return f__8193.cljs$lang$arity$15(a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201,k__8203,l__8205,m__8207,n__8209,o__8211);
} else
{return f__8193.call(null,a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201,k__8203,l__8205,m__8207,n__8209,o__8211);
}
} else
{var p__8213 = cljs.core._first.call(null,args__8212);
var args__8214 = cljs.core._rest.call(null,args__8212);
if((argc === 16))
{if(f__8193.cljs$lang$arity$16)
{return f__8193.cljs$lang$arity$16(a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201,k__8203,l__8205,m__8207,n__8209,o__8211,p__8213);
} else
{return f__8193.call(null,a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201,k__8203,l__8205,m__8207,n__8209,o__8211,p__8213);
}
} else
{var q__8215 = cljs.core._first.call(null,args__8214);
var args__8216 = cljs.core._rest.call(null,args__8214);
if((argc === 17))
{if(f__8193.cljs$lang$arity$17)
{return f__8193.cljs$lang$arity$17(a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201,k__8203,l__8205,m__8207,n__8209,o__8211,p__8213,q__8215);
} else
{return f__8193.call(null,a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201,k__8203,l__8205,m__8207,n__8209,o__8211,p__8213,q__8215);
}
} else
{var r__8217 = cljs.core._first.call(null,args__8216);
var args__8218 = cljs.core._rest.call(null,args__8216);
if((argc === 18))
{if(f__8193.cljs$lang$arity$18)
{return f__8193.cljs$lang$arity$18(a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201,k__8203,l__8205,m__8207,n__8209,o__8211,p__8213,q__8215,r__8217);
} else
{return f__8193.call(null,a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201,k__8203,l__8205,m__8207,n__8209,o__8211,p__8213,q__8215,r__8217);
}
} else
{var s__8219 = cljs.core._first.call(null,args__8218);
var args__8220 = cljs.core._rest.call(null,args__8218);
if((argc === 19))
{if(f__8193.cljs$lang$arity$19)
{return f__8193.cljs$lang$arity$19(a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201,k__8203,l__8205,m__8207,n__8209,o__8211,p__8213,q__8215,r__8217,s__8219);
} else
{return f__8193.call(null,a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201,k__8203,l__8205,m__8207,n__8209,o__8211,p__8213,q__8215,r__8217,s__8219);
}
} else
{var t__8221 = cljs.core._first.call(null,args__8220);
var args__8222 = cljs.core._rest.call(null,args__8220);
if((argc === 20))
{if(f__8193.cljs$lang$arity$20)
{return f__8193.cljs$lang$arity$20(a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201,k__8203,l__8205,m__8207,n__8209,o__8211,p__8213,q__8215,r__8217,s__8219,t__8221);
} else
{return f__8193.call(null,a__8183,b__8185,c__8187,d__8189,e__8191,f__8193,g__8195,h__8197,i__8199,j__8201,k__8203,l__8205,m__8207,n__8209,o__8211,p__8213,q__8215,r__8217,s__8219,t__8221);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
void 0;/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__8223 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8224 = cljs.core.bounded_count.call(null,args,(fixed_arity__8223 + 1));
if((bc__8224 <= fixed_arity__8223))
{return cljs.core.apply_to.call(null,f,bc__8224,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__8225 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__8226 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8227 = cljs.core.bounded_count.call(null,arglist__8225,(fixed_arity__8226 + 1));
if((bc__8227 <= fixed_arity__8226))
{return cljs.core.apply_to.call(null,f,bc__8227,arglist__8225);
} else
{return f.cljs$lang$applyTo(arglist__8225);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8225));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__8228 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__8229 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8230 = cljs.core.bounded_count.call(null,arglist__8228,(fixed_arity__8229 + 1));
if((bc__8230 <= fixed_arity__8229))
{return cljs.core.apply_to.call(null,f,bc__8230,arglist__8228);
} else
{return f.cljs$lang$applyTo(arglist__8228);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8228));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__8231 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__8232 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8233 = cljs.core.bounded_count.call(null,arglist__8231,(fixed_arity__8232 + 1));
if((bc__8233 <= fixed_arity__8232))
{return cljs.core.apply_to.call(null,f,bc__8233,arglist__8231);
} else
{return f.cljs$lang$applyTo(arglist__8231);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8231));
}
});
var apply__6 = (function() { 
var G__8237__delegate = function (f,a,b,c,d,args){
var arglist__8234 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__8235 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8236 = cljs.core.bounded_count.call(null,arglist__8234,(fixed_arity__8235 + 1));
if((bc__8236 <= fixed_arity__8235))
{return cljs.core.apply_to.call(null,f,bc__8236,arglist__8234);
} else
{return f.cljs$lang$applyTo(arglist__8234);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8234));
}
};
var G__8237 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8237__delegate.call(this, f, a, b, c, d, args);
};
G__8237.cljs$lang$maxFixedArity = 5;
G__8237.cljs$lang$applyTo = (function (arglist__8238){
var f = cljs.core.first(arglist__8238);
var a = cljs.core.first(cljs.core.next(arglist__8238));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8238)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8238))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8238)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8238)))));
return G__8237__delegate(f, a, b, c, d, args);
});
G__8237.cljs$lang$arity$variadic = G__8237__delegate;
return G__8237;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__8239){
var obj = cljs.core.first(arglist__8239);
var f = cljs.core.first(cljs.core.next(arglist__8239));
var args = cljs.core.rest(cljs.core.next(arglist__8239));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__8240__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__8240 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8240__delegate.call(this, x, y, more);
};
G__8240.cljs$lang$maxFixedArity = 2;
G__8240.cljs$lang$applyTo = (function (arglist__8241){
var x = cljs.core.first(arglist__8241);
var y = cljs.core.first(cljs.core.next(arglist__8241));
var more = cljs.core.rest(cljs.core.next(arglist__8241));
return G__8240__delegate(x, y, more);
});
G__8240.cljs$lang$arity$variadic = G__8240__delegate;
return G__8240;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__8242 = pred;
var G__8243 = cljs.core.next.call(null,coll);
pred = G__8242;
coll = G__8243;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____8244 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3548__auto____8244))
{return or__3548__auto____8244;
} else
{{
var G__8245 = pred;
var G__8246 = cljs.core.next.call(null,coll);
pred = G__8245;
coll = G__8246;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__8247 = null;
var G__8247__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__8247__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__8247__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__8247__3 = (function() { 
var G__8248__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__8248 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8248__delegate.call(this, x, y, zs);
};
G__8248.cljs$lang$maxFixedArity = 2;
G__8248.cljs$lang$applyTo = (function (arglist__8249){
var x = cljs.core.first(arglist__8249);
var y = cljs.core.first(cljs.core.next(arglist__8249));
var zs = cljs.core.rest(cljs.core.next(arglist__8249));
return G__8248__delegate(x, y, zs);
});
G__8248.cljs$lang$arity$variadic = G__8248__delegate;
return G__8248;
})()
;
G__8247 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__8247__0.call(this);
case 1:
return G__8247__1.call(this,x);
case 2:
return G__8247__2.call(this,x,y);
default:
return G__8247__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__8247.cljs$lang$maxFixedArity = 2;
G__8247.cljs$lang$applyTo = G__8247__3.cljs$lang$applyTo;
return G__8247;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__8250__delegate = function (args){
return x;
};
var G__8250 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8250__delegate.call(this, args);
};
G__8250.cljs$lang$maxFixedArity = 0;
G__8250.cljs$lang$applyTo = (function (arglist__8251){
var args = cljs.core.seq(arglist__8251);;
return G__8250__delegate(args);
});
G__8250.cljs$lang$arity$variadic = G__8250__delegate;
return G__8250;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__8255 = null;
var G__8255__0 = (function (){
return f.call(null,g.call(null));
});
var G__8255__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__8255__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__8255__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__8255__4 = (function() { 
var G__8256__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8256 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8256__delegate.call(this, x, y, z, args);
};
G__8256.cljs$lang$maxFixedArity = 3;
G__8256.cljs$lang$applyTo = (function (arglist__8257){
var x = cljs.core.first(arglist__8257);
var y = cljs.core.first(cljs.core.next(arglist__8257));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8257)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8257)));
return G__8256__delegate(x, y, z, args);
});
G__8256.cljs$lang$arity$variadic = G__8256__delegate;
return G__8256;
})()
;
G__8255 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8255__0.call(this);
case 1:
return G__8255__1.call(this,x);
case 2:
return G__8255__2.call(this,x,y);
case 3:
return G__8255__3.call(this,x,y,z);
default:
return G__8255__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8255.cljs$lang$maxFixedArity = 3;
G__8255.cljs$lang$applyTo = G__8255__4.cljs$lang$applyTo;
return G__8255;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__8258 = null;
var G__8258__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__8258__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__8258__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__8258__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__8258__4 = (function() { 
var G__8259__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__8259 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8259__delegate.call(this, x, y, z, args);
};
G__8259.cljs$lang$maxFixedArity = 3;
G__8259.cljs$lang$applyTo = (function (arglist__8260){
var x = cljs.core.first(arglist__8260);
var y = cljs.core.first(cljs.core.next(arglist__8260));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8260)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8260)));
return G__8259__delegate(x, y, z, args);
});
G__8259.cljs$lang$arity$variadic = G__8259__delegate;
return G__8259;
})()
;
G__8258 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8258__0.call(this);
case 1:
return G__8258__1.call(this,x);
case 2:
return G__8258__2.call(this,x,y);
case 3:
return G__8258__3.call(this,x,y,z);
default:
return G__8258__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8258.cljs$lang$maxFixedArity = 3;
G__8258.cljs$lang$applyTo = G__8258__4.cljs$lang$applyTo;
return G__8258;
})()
});
var comp__4 = (function() { 
var G__8261__delegate = function (f1,f2,f3,fs){
var fs__8252 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__8262__delegate = function (args){
var ret__8253 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__8252),args);
var fs__8254 = cljs.core.next.call(null,fs__8252);
while(true){
if(cljs.core.truth_(fs__8254))
{{
var G__8263 = cljs.core.first.call(null,fs__8254).call(null,ret__8253);
var G__8264 = cljs.core.next.call(null,fs__8254);
ret__8253 = G__8263;
fs__8254 = G__8264;
continue;
}
} else
{return ret__8253;
}
break;
}
};
var G__8262 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8262__delegate.call(this, args);
};
G__8262.cljs$lang$maxFixedArity = 0;
G__8262.cljs$lang$applyTo = (function (arglist__8265){
var args = cljs.core.seq(arglist__8265);;
return G__8262__delegate(args);
});
G__8262.cljs$lang$arity$variadic = G__8262__delegate;
return G__8262;
})()
;
};
var G__8261 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8261__delegate.call(this, f1, f2, f3, fs);
};
G__8261.cljs$lang$maxFixedArity = 3;
G__8261.cljs$lang$applyTo = (function (arglist__8266){
var f1 = cljs.core.first(arglist__8266);
var f2 = cljs.core.first(cljs.core.next(arglist__8266));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8266)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8266)));
return G__8261__delegate(f1, f2, f3, fs);
});
G__8261.cljs$lang$arity$variadic = G__8261__delegate;
return G__8261;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__8267__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__8267 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8267__delegate.call(this, args);
};
G__8267.cljs$lang$maxFixedArity = 0;
G__8267.cljs$lang$applyTo = (function (arglist__8268){
var args = cljs.core.seq(arglist__8268);;
return G__8267__delegate(args);
});
G__8267.cljs$lang$arity$variadic = G__8267__delegate;
return G__8267;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__8269__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__8269 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8269__delegate.call(this, args);
};
G__8269.cljs$lang$maxFixedArity = 0;
G__8269.cljs$lang$applyTo = (function (arglist__8270){
var args = cljs.core.seq(arglist__8270);;
return G__8269__delegate(args);
});
G__8269.cljs$lang$arity$variadic = G__8269__delegate;
return G__8269;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__8271__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__8271 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8271__delegate.call(this, args);
};
G__8271.cljs$lang$maxFixedArity = 0;
G__8271.cljs$lang$applyTo = (function (arglist__8272){
var args = cljs.core.seq(arglist__8272);;
return G__8271__delegate(args);
});
G__8271.cljs$lang$arity$variadic = G__8271__delegate;
return G__8271;
})()
;
});
var partial__5 = (function() { 
var G__8273__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__8274__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__8274 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8274__delegate.call(this, args);
};
G__8274.cljs$lang$maxFixedArity = 0;
G__8274.cljs$lang$applyTo = (function (arglist__8275){
var args = cljs.core.seq(arglist__8275);;
return G__8274__delegate(args);
});
G__8274.cljs$lang$arity$variadic = G__8274__delegate;
return G__8274;
})()
;
};
var G__8273 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8273__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__8273.cljs$lang$maxFixedArity = 4;
G__8273.cljs$lang$applyTo = (function (arglist__8276){
var f = cljs.core.first(arglist__8276);
var arg1 = cljs.core.first(cljs.core.next(arglist__8276));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8276)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8276))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8276))));
return G__8273__delegate(f, arg1, arg2, arg3, more);
});
G__8273.cljs$lang$arity$variadic = G__8273__delegate;
return G__8273;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__8277 = null;
var G__8277__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__8277__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__8277__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__8277__4 = (function() { 
var G__8278__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__8278 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8278__delegate.call(this, a, b, c, ds);
};
G__8278.cljs$lang$maxFixedArity = 3;
G__8278.cljs$lang$applyTo = (function (arglist__8279){
var a = cljs.core.first(arglist__8279);
var b = cljs.core.first(cljs.core.next(arglist__8279));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8279)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8279)));
return G__8278__delegate(a, b, c, ds);
});
G__8278.cljs$lang$arity$variadic = G__8278__delegate;
return G__8278;
})()
;
G__8277 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__8277__1.call(this,a);
case 2:
return G__8277__2.call(this,a,b);
case 3:
return G__8277__3.call(this,a,b,c);
default:
return G__8277__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8277.cljs$lang$maxFixedArity = 3;
G__8277.cljs$lang$applyTo = G__8277__4.cljs$lang$applyTo;
return G__8277;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__8280 = null;
var G__8280__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__8280__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__8280__4 = (function() { 
var G__8281__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__8281 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8281__delegate.call(this, a, b, c, ds);
};
G__8281.cljs$lang$maxFixedArity = 3;
G__8281.cljs$lang$applyTo = (function (arglist__8282){
var a = cljs.core.first(arglist__8282);
var b = cljs.core.first(cljs.core.next(arglist__8282));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8282)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8282)));
return G__8281__delegate(a, b, c, ds);
});
G__8281.cljs$lang$arity$variadic = G__8281__delegate;
return G__8281;
})()
;
G__8280 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8280__2.call(this,a,b);
case 3:
return G__8280__3.call(this,a,b,c);
default:
return G__8280__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8280.cljs$lang$maxFixedArity = 3;
G__8280.cljs$lang$applyTo = G__8280__4.cljs$lang$applyTo;
return G__8280;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__8283 = null;
var G__8283__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__8283__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__8283__4 = (function() { 
var G__8284__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__8284 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8284__delegate.call(this, a, b, c, ds);
};
G__8284.cljs$lang$maxFixedArity = 3;
G__8284.cljs$lang$applyTo = (function (arglist__8285){
var a = cljs.core.first(arglist__8285);
var b = cljs.core.first(cljs.core.next(arglist__8285));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8285)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8285)));
return G__8284__delegate(a, b, c, ds);
});
G__8284.cljs$lang$arity$variadic = G__8284__delegate;
return G__8284;
})()
;
G__8283 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8283__2.call(this,a,b);
case 3:
return G__8283__3.call(this,a,b,c);
default:
return G__8283__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8283.cljs$lang$maxFixedArity = 3;
G__8283.cljs$lang$applyTo = G__8283__4.cljs$lang$applyTo;
return G__8283;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__8288 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8286 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____8286))
{var s__8287 = temp__3698__auto____8286;
return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__8287)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8287)));
} else
{return null;
}
})));
});
return mapi__8288.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8289 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____8289))
{var s__8290 = temp__3698__auto____8289;
var x__8291 = f.call(null,cljs.core.first.call(null,s__8290));
if((x__8291 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__8290));
} else
{return cljs.core.cons.call(null,x__8291,keep.call(null,f,cljs.core.rest.call(null,s__8290)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__8301 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8298 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____8298))
{var s__8299 = temp__3698__auto____8298;
var x__8300 = f.call(null,idx,cljs.core.first.call(null,s__8299));
if((x__8300 == null))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8299));
} else
{return cljs.core.cons.call(null,x__8300,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8299)));
}
} else
{return null;
}
})));
});
return keepi__8301.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8308 = p.call(null,x);
if(cljs.core.truth_(and__3546__auto____8308))
{return p.call(null,y);
} else
{return and__3546__auto____8308;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8309 = p.call(null,x);
if(cljs.core.truth_(and__3546__auto____8309))
{var and__3546__auto____8310 = p.call(null,y);
if(cljs.core.truth_(and__3546__auto____8310))
{return p.call(null,z);
} else
{return and__3546__auto____8310;
}
} else
{return and__3546__auto____8309;
}
})());
});
var ep1__4 = (function() { 
var G__8346__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8311 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3546__auto____8311))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____8311;
}
})());
};
var G__8346 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8346__delegate.call(this, x, y, z, args);
};
G__8346.cljs$lang$maxFixedArity = 3;
G__8346.cljs$lang$applyTo = (function (arglist__8347){
var x = cljs.core.first(arglist__8347);
var y = cljs.core.first(cljs.core.next(arglist__8347));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8347)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8347)));
return G__8346__delegate(x, y, z, args);
});
G__8346.cljs$lang$arity$variadic = G__8346__delegate;
return G__8346;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8312 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____8312))
{return p2.call(null,x);
} else
{return and__3546__auto____8312;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8313 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____8313))
{var and__3546__auto____8314 = p1.call(null,y);
if(cljs.core.truth_(and__3546__auto____8314))
{var and__3546__auto____8315 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____8315))
{return p2.call(null,y);
} else
{return and__3546__auto____8315;
}
} else
{return and__3546__auto____8314;
}
} else
{return and__3546__auto____8313;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8316 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____8316))
{var and__3546__auto____8317 = p1.call(null,y);
if(cljs.core.truth_(and__3546__auto____8317))
{var and__3546__auto____8318 = p1.call(null,z);
if(cljs.core.truth_(and__3546__auto____8318))
{var and__3546__auto____8319 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____8319))
{var and__3546__auto____8320 = p2.call(null,y);
if(cljs.core.truth_(and__3546__auto____8320))
{return p2.call(null,z);
} else
{return and__3546__auto____8320;
}
} else
{return and__3546__auto____8319;
}
} else
{return and__3546__auto____8318;
}
} else
{return and__3546__auto____8317;
}
} else
{return and__3546__auto____8316;
}
})());
});
var ep2__4 = (function() { 
var G__8348__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8321 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3546__auto____8321))
{return cljs.core.every_QMARK_.call(null,(function (p1__8292_SHARP_){
var and__3546__auto____8322 = p1.call(null,p1__8292_SHARP_);
if(cljs.core.truth_(and__3546__auto____8322))
{return p2.call(null,p1__8292_SHARP_);
} else
{return and__3546__auto____8322;
}
}),args);
} else
{return and__3546__auto____8321;
}
})());
};
var G__8348 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8348__delegate.call(this, x, y, z, args);
};
G__8348.cljs$lang$maxFixedArity = 3;
G__8348.cljs$lang$applyTo = (function (arglist__8349){
var x = cljs.core.first(arglist__8349);
var y = cljs.core.first(cljs.core.next(arglist__8349));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8349)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8349)));
return G__8348__delegate(x, y, z, args);
});
G__8348.cljs$lang$arity$variadic = G__8348__delegate;
return G__8348;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8323 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____8323))
{var and__3546__auto____8324 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____8324))
{return p3.call(null,x);
} else
{return and__3546__auto____8324;
}
} else
{return and__3546__auto____8323;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8325 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____8325))
{var and__3546__auto____8326 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____8326))
{var and__3546__auto____8327 = p3.call(null,x);
if(cljs.core.truth_(and__3546__auto____8327))
{var and__3546__auto____8328 = p1.call(null,y);
if(cljs.core.truth_(and__3546__auto____8328))
{var and__3546__auto____8329 = p2.call(null,y);
if(cljs.core.truth_(and__3546__auto____8329))
{return p3.call(null,y);
} else
{return and__3546__auto____8329;
}
} else
{return and__3546__auto____8328;
}
} else
{return and__3546__auto____8327;
}
} else
{return and__3546__auto____8326;
}
} else
{return and__3546__auto____8325;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8330 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____8330))
{var and__3546__auto____8331 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____8331))
{var and__3546__auto____8332 = p3.call(null,x);
if(cljs.core.truth_(and__3546__auto____8332))
{var and__3546__auto____8333 = p1.call(null,y);
if(cljs.core.truth_(and__3546__auto____8333))
{var and__3546__auto____8334 = p2.call(null,y);
if(cljs.core.truth_(and__3546__auto____8334))
{var and__3546__auto____8335 = p3.call(null,y);
if(cljs.core.truth_(and__3546__auto____8335))
{var and__3546__auto____8336 = p1.call(null,z);
if(cljs.core.truth_(and__3546__auto____8336))
{var and__3546__auto____8337 = p2.call(null,z);
if(cljs.core.truth_(and__3546__auto____8337))
{return p3.call(null,z);
} else
{return and__3546__auto____8337;
}
} else
{return and__3546__auto____8336;
}
} else
{return and__3546__auto____8335;
}
} else
{return and__3546__auto____8334;
}
} else
{return and__3546__auto____8333;
}
} else
{return and__3546__auto____8332;
}
} else
{return and__3546__auto____8331;
}
} else
{return and__3546__auto____8330;
}
})());
});
var ep3__4 = (function() { 
var G__8350__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8338 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3546__auto____8338))
{return cljs.core.every_QMARK_.call(null,(function (p1__8293_SHARP_){
var and__3546__auto____8339 = p1.call(null,p1__8293_SHARP_);
if(cljs.core.truth_(and__3546__auto____8339))
{var and__3546__auto____8340 = p2.call(null,p1__8293_SHARP_);
if(cljs.core.truth_(and__3546__auto____8340))
{return p3.call(null,p1__8293_SHARP_);
} else
{return and__3546__auto____8340;
}
} else
{return and__3546__auto____8339;
}
}),args);
} else
{return and__3546__auto____8338;
}
})());
};
var G__8350 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8350__delegate.call(this, x, y, z, args);
};
G__8350.cljs$lang$maxFixedArity = 3;
G__8350.cljs$lang$applyTo = (function (arglist__8351){
var x = cljs.core.first(arglist__8351);
var y = cljs.core.first(cljs.core.next(arglist__8351));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8351)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8351)));
return G__8350__delegate(x, y, z, args);
});
G__8350.cljs$lang$arity$variadic = G__8350__delegate;
return G__8350;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__8352__delegate = function (p1,p2,p3,ps){
var ps__8341 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__8294_SHARP_){
return p1__8294_SHARP_.call(null,x);
}),ps__8341);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__8295_SHARP_){
var and__3546__auto____8342 = p1__8295_SHARP_.call(null,x);
if(cljs.core.truth_(and__3546__auto____8342))
{return p1__8295_SHARP_.call(null,y);
} else
{return and__3546__auto____8342;
}
}),ps__8341);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__8296_SHARP_){
var and__3546__auto____8343 = p1__8296_SHARP_.call(null,x);
if(cljs.core.truth_(and__3546__auto____8343))
{var and__3546__auto____8344 = p1__8296_SHARP_.call(null,y);
if(cljs.core.truth_(and__3546__auto____8344))
{return p1__8296_SHARP_.call(null,z);
} else
{return and__3546__auto____8344;
}
} else
{return and__3546__auto____8343;
}
}),ps__8341);
});
var epn__4 = (function() { 
var G__8353__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8345 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3546__auto____8345))
{return cljs.core.every_QMARK_.call(null,(function (p1__8297_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__8297_SHARP_,args);
}),ps__8341);
} else
{return and__3546__auto____8345;
}
})());
};
var G__8353 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8353__delegate.call(this, x, y, z, args);
};
G__8353.cljs$lang$maxFixedArity = 3;
G__8353.cljs$lang$applyTo = (function (arglist__8354){
var x = cljs.core.first(arglist__8354);
var y = cljs.core.first(cljs.core.next(arglist__8354));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8354)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8354)));
return G__8353__delegate(x, y, z, args);
});
G__8353.cljs$lang$arity$variadic = G__8353__delegate;
return G__8353;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__8352 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8352__delegate.call(this, p1, p2, p3, ps);
};
G__8352.cljs$lang$maxFixedArity = 3;
G__8352.cljs$lang$applyTo = (function (arglist__8355){
var p1 = cljs.core.first(arglist__8355);
var p2 = cljs.core.first(cljs.core.next(arglist__8355));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8355)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8355)));
return G__8352__delegate(p1, p2, p3, ps);
});
G__8352.cljs$lang$arity$variadic = G__8352__delegate;
return G__8352;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3548__auto____8357 = p.call(null,x);
if(cljs.core.truth_(or__3548__auto____8357))
{return or__3548__auto____8357;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3548__auto____8358 = p.call(null,x);
if(cljs.core.truth_(or__3548__auto____8358))
{return or__3548__auto____8358;
} else
{var or__3548__auto____8359 = p.call(null,y);
if(cljs.core.truth_(or__3548__auto____8359))
{return or__3548__auto____8359;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__8395__delegate = function (x,y,z,args){
var or__3548__auto____8360 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3548__auto____8360))
{return or__3548__auto____8360;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8395 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8395__delegate.call(this, x, y, z, args);
};
G__8395.cljs$lang$maxFixedArity = 3;
G__8395.cljs$lang$applyTo = (function (arglist__8396){
var x = cljs.core.first(arglist__8396);
var y = cljs.core.first(cljs.core.next(arglist__8396));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8396)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8396)));
return G__8395__delegate(x, y, z, args);
});
G__8395.cljs$lang$arity$variadic = G__8395__delegate;
return G__8395;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3548__auto____8361 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____8361))
{return or__3548__auto____8361;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3548__auto____8362 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____8362))
{return or__3548__auto____8362;
} else
{var or__3548__auto____8363 = p1.call(null,y);
if(cljs.core.truth_(or__3548__auto____8363))
{return or__3548__auto____8363;
} else
{var or__3548__auto____8364 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____8364))
{return or__3548__auto____8364;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3548__auto____8365 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____8365))
{return or__3548__auto____8365;
} else
{var or__3548__auto____8366 = p1.call(null,y);
if(cljs.core.truth_(or__3548__auto____8366))
{return or__3548__auto____8366;
} else
{var or__3548__auto____8367 = p1.call(null,z);
if(cljs.core.truth_(or__3548__auto____8367))
{return or__3548__auto____8367;
} else
{var or__3548__auto____8368 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____8368))
{return or__3548__auto____8368;
} else
{var or__3548__auto____8369 = p2.call(null,y);
if(cljs.core.truth_(or__3548__auto____8369))
{return or__3548__auto____8369;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8397__delegate = function (x,y,z,args){
var or__3548__auto____8370 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3548__auto____8370))
{return or__3548__auto____8370;
} else
{return cljs.core.some.call(null,(function (p1__8302_SHARP_){
var or__3548__auto____8371 = p1.call(null,p1__8302_SHARP_);
if(cljs.core.truth_(or__3548__auto____8371))
{return or__3548__auto____8371;
} else
{return p2.call(null,p1__8302_SHARP_);
}
}),args);
}
};
var G__8397 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8397__delegate.call(this, x, y, z, args);
};
G__8397.cljs$lang$maxFixedArity = 3;
G__8397.cljs$lang$applyTo = (function (arglist__8398){
var x = cljs.core.first(arglist__8398);
var y = cljs.core.first(cljs.core.next(arglist__8398));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8398)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8398)));
return G__8397__delegate(x, y, z, args);
});
G__8397.cljs$lang$arity$variadic = G__8397__delegate;
return G__8397;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3548__auto____8372 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____8372))
{return or__3548__auto____8372;
} else
{var or__3548__auto____8373 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____8373))
{return or__3548__auto____8373;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3548__auto____8374 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____8374))
{return or__3548__auto____8374;
} else
{var or__3548__auto____8375 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____8375))
{return or__3548__auto____8375;
} else
{var or__3548__auto____8376 = p3.call(null,x);
if(cljs.core.truth_(or__3548__auto____8376))
{return or__3548__auto____8376;
} else
{var or__3548__auto____8377 = p1.call(null,y);
if(cljs.core.truth_(or__3548__auto____8377))
{return or__3548__auto____8377;
} else
{var or__3548__auto____8378 = p2.call(null,y);
if(cljs.core.truth_(or__3548__auto____8378))
{return or__3548__auto____8378;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3548__auto____8379 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____8379))
{return or__3548__auto____8379;
} else
{var or__3548__auto____8380 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____8380))
{return or__3548__auto____8380;
} else
{var or__3548__auto____8381 = p3.call(null,x);
if(cljs.core.truth_(or__3548__auto____8381))
{return or__3548__auto____8381;
} else
{var or__3548__auto____8382 = p1.call(null,y);
if(cljs.core.truth_(or__3548__auto____8382))
{return or__3548__auto____8382;
} else
{var or__3548__auto____8383 = p2.call(null,y);
if(cljs.core.truth_(or__3548__auto____8383))
{return or__3548__auto____8383;
} else
{var or__3548__auto____8384 = p3.call(null,y);
if(cljs.core.truth_(or__3548__auto____8384))
{return or__3548__auto____8384;
} else
{var or__3548__auto____8385 = p1.call(null,z);
if(cljs.core.truth_(or__3548__auto____8385))
{return or__3548__auto____8385;
} else
{var or__3548__auto____8386 = p2.call(null,z);
if(cljs.core.truth_(or__3548__auto____8386))
{return or__3548__auto____8386;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__8399__delegate = function (x,y,z,args){
var or__3548__auto____8387 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3548__auto____8387))
{return or__3548__auto____8387;
} else
{return cljs.core.some.call(null,(function (p1__8303_SHARP_){
var or__3548__auto____8388 = p1.call(null,p1__8303_SHARP_);
if(cljs.core.truth_(or__3548__auto____8388))
{return or__3548__auto____8388;
} else
{var or__3548__auto____8389 = p2.call(null,p1__8303_SHARP_);
if(cljs.core.truth_(or__3548__auto____8389))
{return or__3548__auto____8389;
} else
{return p3.call(null,p1__8303_SHARP_);
}
}
}),args);
}
};
var G__8399 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8399__delegate.call(this, x, y, z, args);
};
G__8399.cljs$lang$maxFixedArity = 3;
G__8399.cljs$lang$applyTo = (function (arglist__8400){
var x = cljs.core.first(arglist__8400);
var y = cljs.core.first(cljs.core.next(arglist__8400));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8400)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8400)));
return G__8399__delegate(x, y, z, args);
});
G__8399.cljs$lang$arity$variadic = G__8399__delegate;
return G__8399;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__8401__delegate = function (p1,p2,p3,ps){
var ps__8390 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__8304_SHARP_){
return p1__8304_SHARP_.call(null,x);
}),ps__8390);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8305_SHARP_){
var or__3548__auto____8391 = p1__8305_SHARP_.call(null,x);
if(cljs.core.truth_(or__3548__auto____8391))
{return or__3548__auto____8391;
} else
{return p1__8305_SHARP_.call(null,y);
}
}),ps__8390);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8306_SHARP_){
var or__3548__auto____8392 = p1__8306_SHARP_.call(null,x);
if(cljs.core.truth_(or__3548__auto____8392))
{return or__3548__auto____8392;
} else
{var or__3548__auto____8393 = p1__8306_SHARP_.call(null,y);
if(cljs.core.truth_(or__3548__auto____8393))
{return or__3548__auto____8393;
} else
{return p1__8306_SHARP_.call(null,z);
}
}
}),ps__8390);
});
var spn__4 = (function() { 
var G__8402__delegate = function (x,y,z,args){
var or__3548__auto____8394 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3548__auto____8394))
{return or__3548__auto____8394;
} else
{return cljs.core.some.call(null,(function (p1__8307_SHARP_){
return cljs.core.some.call(null,p1__8307_SHARP_,args);
}),ps__8390);
}
};
var G__8402 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8402__delegate.call(this, x, y, z, args);
};
G__8402.cljs$lang$maxFixedArity = 3;
G__8402.cljs$lang$applyTo = (function (arglist__8403){
var x = cljs.core.first(arglist__8403);
var y = cljs.core.first(cljs.core.next(arglist__8403));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8403)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8403)));
return G__8402__delegate(x, y, z, args);
});
G__8402.cljs$lang$arity$variadic = G__8402__delegate;
return G__8402;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__8401 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8401__delegate.call(this, p1, p2, p3, ps);
};
G__8401.cljs$lang$maxFixedArity = 3;
G__8401.cljs$lang$applyTo = (function (arglist__8404){
var p1 = cljs.core.first(arglist__8404);
var p2 = cljs.core.first(cljs.core.next(arglist__8404));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8404)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8404)));
return G__8401__delegate(p1, p2, p3, ps);
});
G__8401.cljs$lang$arity$variadic = G__8401__delegate;
return G__8401;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8405 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____8405))
{var s__8406 = temp__3698__auto____8405;
return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8406)),map.call(null,f,cljs.core.rest.call(null,s__8406)));
} else
{return null;
}
})));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8407 = cljs.core.seq.call(null,c1);
var s2__8408 = cljs.core.seq.call(null,c2);
if(cljs.core.truth_((function (){var and__3546__auto____8409 = s1__8407;
if(cljs.core.truth_(and__3546__auto____8409))
{return s2__8408;
} else
{return and__3546__auto____8409;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8407),cljs.core.first.call(null,s2__8408)),map.call(null,f,cljs.core.rest.call(null,s1__8407),cljs.core.rest.call(null,s2__8408)));
} else
{return null;
}
})));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8410 = cljs.core.seq.call(null,c1);
var s2__8411 = cljs.core.seq.call(null,c2);
var s3__8412 = cljs.core.seq.call(null,c3);
if(cljs.core.truth_((function (){var and__3546__auto____8413 = s1__8410;
if(cljs.core.truth_(and__3546__auto____8413))
{var and__3546__auto____8414 = s2__8411;
if(cljs.core.truth_(and__3546__auto____8414))
{return s3__8412;
} else
{return and__3546__auto____8414;
}
} else
{return and__3546__auto____8413;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8410),cljs.core.first.call(null,s2__8411),cljs.core.first.call(null,s3__8412)),map.call(null,f,cljs.core.rest.call(null,s1__8410),cljs.core.rest.call(null,s2__8411),cljs.core.rest.call(null,s3__8412)));
} else
{return null;
}
})));
});
var map__5 = (function() { 
var G__8417__delegate = function (f,c1,c2,c3,colls){
var step__8416 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8415 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8415))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8415),step.call(null,map.call(null,cljs.core.rest,ss__8415)));
} else
{return null;
}
})));
});
return map.call(null,(function (p1__8356_SHARP_){
return cljs.core.apply.call(null,f,p1__8356_SHARP_);
}),step__8416.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8417 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8417__delegate.call(this, f, c1, c2, c3, colls);
};
G__8417.cljs$lang$maxFixedArity = 4;
G__8417.cljs$lang$applyTo = (function (arglist__8418){
var f = cljs.core.first(arglist__8418);
var c1 = cljs.core.first(cljs.core.next(arglist__8418));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8418)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8418))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8418))));
return G__8417__delegate(f, c1, c2, c3, colls);
});
G__8417.cljs$lang$arity$variadic = G__8417__delegate;
return G__8417;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3698__auto____8419 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____8419))
{var s__8420 = temp__3698__auto____8419;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8420),take.call(null,(n - 1),cljs.core.rest.call(null,s__8420)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__8423 = (function (n,coll){
while(true){
var s__8421 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3546__auto____8422 = (n > 0);
if(and__3546__auto____8422)
{return s__8421;
} else
{return and__3546__auto____8422;
}
})()))
{{
var G__8424 = (n - 1);
var G__8425 = cljs.core.rest.call(null,s__8421);
n = G__8424;
coll = G__8425;
continue;
}
} else
{return s__8421;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8423.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__8426 = cljs.core.seq.call(null,coll);
var lead__8427 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(cljs.core.truth_(lead__8427))
{{
var G__8428 = cljs.core.next.call(null,s__8426);
var G__8429 = cljs.core.next.call(null,lead__8427);
s__8426 = G__8428;
lead__8427 = G__8429;
continue;
}
} else
{return s__8426;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8432 = (function (pred,coll){
while(true){
var s__8430 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3546__auto____8431 = s__8430;
if(cljs.core.truth_(and__3546__auto____8431))
{return pred.call(null,cljs.core.first.call(null,s__8430));
} else
{return and__3546__auto____8431;
}
})()))
{{
var G__8433 = pred;
var G__8434 = cljs.core.rest.call(null,s__8430);
pred = G__8433;
coll = G__8434;
continue;
}
} else
{return s__8430;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8432.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8435 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____8435))
{var s__8436 = temp__3698__auto____8435;
return cljs.core.concat.call(null,s__8436,cycle.call(null,s__8436));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8437 = cljs.core.seq.call(null,c1);
var s2__8438 = cljs.core.seq.call(null,c2);
if(cljs.core.truth_((function (){var and__3546__auto____8439 = s1__8437;
if(cljs.core.truth_(and__3546__auto____8439))
{return s2__8438;
} else
{return and__3546__auto____8439;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8437),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8438),interleave.call(null,cljs.core.rest.call(null,s1__8437),cljs.core.rest.call(null,s2__8438))));
} else
{return null;
}
})));
});
var interleave__3 = (function() { 
var G__8441__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8440 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8440))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8440),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8440)));
} else
{return null;
}
})));
};
var G__8441 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8441__delegate.call(this, c1, c2, colls);
};
G__8441.cljs$lang$maxFixedArity = 2;
G__8441.cljs$lang$applyTo = (function (arglist__8442){
var c1 = cljs.core.first(arglist__8442);
var c2 = cljs.core.first(cljs.core.next(arglist__8442));
var colls = cljs.core.rest(cljs.core.next(arglist__8442));
return G__8441__delegate(c1, c2, colls);
});
G__8441.cljs$lang$arity$variadic = G__8441__delegate;
return G__8441;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__8445 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____8443 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3695__auto____8443))
{var coll__8444 = temp__3695__auto____8443;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8444),cat.call(null,cljs.core.rest.call(null,coll__8444),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});
return cat__8445.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__8446__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8446 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8446__delegate.call(this, f, coll, colls);
};
G__8446.cljs$lang$maxFixedArity = 2;
G__8446.cljs$lang$applyTo = (function (arglist__8447){
var f = cljs.core.first(arglist__8447);
var coll = cljs.core.first(cljs.core.next(arglist__8447));
var colls = cljs.core.rest(cljs.core.next(arglist__8447));
return G__8446__delegate(f, coll, colls);
});
G__8446.cljs$lang$arity$variadic = G__8446__delegate;
return G__8446;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8448 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____8448))
{var s__8449 = temp__3698__auto____8448;
var f__8450 = cljs.core.first.call(null,s__8449);
var r__8451 = cljs.core.rest.call(null,s__8449);
if(cljs.core.truth_(pred.call(null,f__8450)))
{return cljs.core.cons.call(null,f__8450,filter.call(null,pred,r__8451));
} else
{return filter.call(null,pred,r__8451);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__8453 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});
return walk__8453.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8452_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__8452_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8454__8455 = to;
if((G__8454__8455 != null))
{if((function (){var or__3548__auto____8456 = (G__8454__8455.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3548__auto____8456)
{return or__3548__auto____8456;
} else
{return G__8454__8455.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8454__8455.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8454__8455);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8454__8455);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.fromArray([])),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([]),cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([]),cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__8457__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([]),cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__8457 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8457__delegate.call(this, f, c1, c2, c3, colls);
};
G__8457.cljs$lang$maxFixedArity = 4;
G__8457.cljs$lang$applyTo = (function (arglist__8458){
var f = cljs.core.first(arglist__8458);
var c1 = cljs.core.first(cljs.core.next(arglist__8458));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8458)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8458))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8458))));
return G__8457__delegate(f, c1, c2, c3, colls);
});
G__8457.cljs$lang$arity$variadic = G__8457__delegate;
return G__8457;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.fromArray([])),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8459 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____8459))
{var s__8460 = temp__3698__auto____8459;
var p__8461 = cljs.core.take.call(null,n,s__8460);
if((n === cljs.core.count.call(null,p__8461)))
{return cljs.core.cons.call(null,p__8461,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8460)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8462 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____8462))
{var s__8463 = temp__3698__auto____8462;
var p__8464 = cljs.core.take.call(null,n,s__8463);
if((n === cljs.core.count.call(null,p__8464)))
{return cljs.core.cons.call(null,p__8464,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8463)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8464,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__8465 = cljs.core.lookup_sentinel;
var m__8466 = m;
var ks__8467 = cljs.core.seq.call(null,ks);
while(true){
if(cljs.core.truth_(ks__8467))
{var m__8468 = cljs.core.get.call(null,m__8466,cljs.core.first.call(null,ks__8467),sentinel__8465);
if((sentinel__8465 === m__8468))
{return not_found;
} else
{{
var G__8469 = sentinel__8465;
var G__8470 = m__8468;
var G__8471 = cljs.core.next.call(null,ks__8467);
sentinel__8465 = G__8469;
m__8466 = G__8470;
ks__8467 = G__8471;
continue;
}
}
} else
{return m__8466;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__8472,v){
var vec__8473__8474 = p__8472;
var k__8475 = cljs.core.nth.call(null,vec__8473__8474,0,null);
var ks__8476 = cljs.core.nthnext.call(null,vec__8473__8474,1);
if(cljs.core.truth_(ks__8476))
{return cljs.core.assoc.call(null,m,k__8475,assoc_in.call(null,cljs.core.get.call(null,m,k__8475),ks__8476,v));
} else
{return cljs.core.assoc.call(null,m,k__8475,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__8477,f,args){
var vec__8478__8479 = p__8477;
var k__8480 = cljs.core.nth.call(null,vec__8478__8479,0,null);
var ks__8481 = cljs.core.nthnext.call(null,vec__8478__8479,1);
if(cljs.core.truth_(ks__8481))
{return cljs.core.assoc.call(null,m,k__8480,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__8480),ks__8481,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8480,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__8480),args));
}
};
var update_in = function (m,p__8477,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8477, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8482){
var m = cljs.core.first(arglist__8482);
var p__8477 = cljs.core.first(cljs.core.next(arglist__8482));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8482)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8482)));
return update_in__delegate(m, p__8477, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16200095;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8487 = this;
var h__2226__auto____8488 = this__8487.__hash;
if((h__2226__auto____8488 != null))
{return h__2226__auto____8488;
} else
{var h__2226__auto____8489 = cljs.core.hash_coll.call(null,coll);
this__8487.__hash = h__2226__auto____8489;
return h__2226__auto____8489;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8490 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8491 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8492 = this;
var new_array__8493 = cljs.core.aclone.call(null,this__8492.array);
(new_array__8493[k] = v);
return (new cljs.core.Vector(this__8492.meta,new_array__8493,null));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__8522 = null;
var G__8522__2 = (function (tsym8485,k){
var this__8494 = this;
var tsym8485__8495 = this;
var coll__8496 = tsym8485__8495;
return cljs.core._lookup.call(null,coll__8496,k);
});
var G__8522__3 = (function (tsym8486,k,not_found){
var this__8497 = this;
var tsym8486__8498 = this;
var coll__8499 = tsym8486__8498;
return cljs.core._lookup.call(null,coll__8499,k,not_found);
});
G__8522 = function(tsym8486,k,not_found){
switch(arguments.length){
case 2:
return G__8522__2.call(this,tsym8486,k);
case 3:
return G__8522__3.call(this,tsym8486,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8522;
})()
;
cljs.core.Vector.prototype.apply = (function (tsym8483,args8484){
return tsym8483.call.apply(tsym8483,[tsym8483].concat(cljs.core.aclone.call(null,args8484)));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8500 = this;
var new_array__8501 = cljs.core.aclone.call(null,this__8500.array);
new_array__8501.push(o);
return (new cljs.core.Vector(this__8500.meta,new_array__8501,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8502 = this;
var this$__8503 = this;
return cljs.core.pr_str.call(null,this$__8503);
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8504 = this;
return cljs.core.ci_reduce.call(null,this__8504.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8505 = this;
return cljs.core.ci_reduce.call(null,this__8505.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8506 = this;
if((this__8506.array.length > 0))
{var vector_seq__8507 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8506.array.length))
{return cljs.core.cons.call(null,(this__8506.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});
return vector_seq__8507.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8508 = this;
return this__8508.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8509 = this;
var count__8510 = this__8509.array.length;
if((count__8510 > 0))
{return (this__8509.array[(count__8510 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8511 = this;
if((this__8511.array.length > 0))
{var new_array__8512 = cljs.core.aclone.call(null,this__8511.array);
new_array__8512.pop();
return (new cljs.core.Vector(this__8511.meta,new_array__8512,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8513 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8514 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8515 = this;
return (new cljs.core.Vector(meta,this__8515.array,this__8515.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8516 = this;
return this__8516.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8518 = this;
if((function (){var and__3546__auto____8519 = (0 <= n);
if(and__3546__auto____8519)
{return (n < this__8518.array.length);
} else
{return and__3546__auto____8519;
}
})())
{return (this__8518.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8520 = this;
if((function (){var and__3546__auto____8521 = (0 <= n);
if(and__3546__auto____8521)
{return (n < this__8520.array.length);
} else
{return and__3546__auto____8521;
}
})())
{return (this__8520.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8517 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8517.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2299__auto__){
return cljs.core.list.call(null,"cljs.core.VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone.call(null,node.arr)));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__8523 = pv.cnt;
if((cnt__8523 < 32))
{return 0;
} else
{return (((cnt__8523 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8524 = level;
var ret__8525 = node;
while(true){
if((ll__8524 === 0))
{return ret__8525;
} else
{var embed__8526 = ret__8525;
var r__8527 = cljs.core.pv_fresh_node.call(null,edit);
var ___8528 = cljs.core.pv_aset.call(null,r__8527,0,embed__8526);
{
var G__8529 = (ll__8524 - 5);
var G__8530 = r__8527;
ll__8524 = G__8529;
ret__8525 = G__8530;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8531 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8532 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8531,subidx__8532,tailnode);
return ret__8531;
} else
{var temp__3695__auto____8533 = cljs.core.pv_aget.call(null,parent,subidx__8532);
if(cljs.core.truth_(temp__3695__auto____8533))
{var child__8534 = temp__3695__auto____8533;
var node_to_insert__8535 = push_tail.call(null,pv,(level - 5),child__8534,tailnode);
cljs.core.pv_aset.call(null,ret__8531,subidx__8532,node_to_insert__8535);
return ret__8531;
} else
{var node_to_insert__8536 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8531,subidx__8532,node_to_insert__8536);
return ret__8531;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3546__auto____8537 = (0 <= i);
if(and__3546__auto____8537)
{return (i < pv.cnt);
} else
{return and__3546__auto____8537;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8538 = pv.root;
var level__8539 = pv.shift;
while(true){
if((level__8539 > 0))
{{
var G__8540 = cljs.core.pv_aget.call(null,node__8538,((i >>> level__8539) & 31));
var G__8541 = (level__8539 - 5);
node__8538 = G__8540;
level__8539 = G__8541;
continue;
}
} else
{return node__8538.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8542 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8542,(i & 31),val);
return ret__8542;
} else
{var subidx__8543 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8542,subidx__8543,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8543),i,val));
return ret__8542;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8544 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8545 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8544));
if((function (){var and__3546__auto____8546 = (new_child__8545 == null);
if(and__3546__auto____8546)
{return (subidx__8544 === 0);
} else
{return and__3546__auto____8546;
}
})())
{return null;
} else
{var ret__8547 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8547,subidx__8544,new_child__8545);
return ret__8547;
}
} else
{if((subidx__8544 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8548 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8548,subidx__8544,null);
return ret__8548;
} else
{return null;
}
}
}
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
cljs.core.vector_seq = (function vector_seq(v,offset){
var c__8549 = cljs.core._count.call(null,v);
if((c__8549 > 0))
{if((void 0 === cljs.core.t8550))
{
/**
* @constructor
*/
cljs.core.t8550 = (function (c,offset,v,vector_seq,__meta__2233__auto__){
this.c = c;
this.offset = offset;
this.v = v;
this.vector_seq = vector_seq;
this.__meta__2233__auto__ = __meta__2233__auto__;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 282263648;
})
cljs.core.t8550.cljs$lang$type = true;
cljs.core.t8550.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.t8550");
});
cljs.core.t8550.prototype.cljs$core$ISeqable$ = true;
cljs.core.t8550.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (vseq){
var this__8551 = this;
return vseq;
});
cljs.core.t8550.prototype.cljs$core$ISeq$ = true;
cljs.core.t8550.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__8552 = this;
return cljs.core._nth.call(null,this__8552.v,this__8552.offset);
});
cljs.core.t8550.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__8553 = this;
var offset__8554 = (this__8553.offset + 1);
if((offset__8554 < this__8553.c))
{return this__8553.vector_seq.call(null,this__8553.v,offset__8554);
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.t8550.prototype.cljs$core$ASeq$ = true;
cljs.core.t8550.prototype.cljs$core$IEquiv$ = true;
cljs.core.t8550.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (vseq,other){
var this__8555 = this;
return cljs.core.equiv_sequential.call(null,vseq,other);
});
cljs.core.t8550.prototype.cljs$core$ISequential$ = true;
cljs.core.t8550.prototype.cljs$core$IPrintable$ = true;
cljs.core.t8550.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (vseq,opts){
var this__8556 = this;
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,vseq);
});
cljs.core.t8550.prototype.cljs$core$IMeta$ = true;
cljs.core.t8550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (___2234__auto__){
var this__8557 = this;
return this__8557.__meta__2233__auto__;
});
cljs.core.t8550.prototype.cljs$core$IWithMeta$ = true;
cljs.core.t8550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (___2234__auto__,__meta__2233__auto__){
var this__8558 = this;
return (new cljs.core.t8550(this__8558.c,this__8558.offset,this__8558.v,this__8558.vector_seq,__meta__2233__auto__));
});
cljs.core.t8550;
} else
{}
return (new cljs.core.t8550(c__8549,offset,v,vector_seq,null));
} else
{return null;
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2164209055;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8563 = this;
return (new cljs.core.TransientVector(this__8563.cnt,this__8563.shift,cljs.core.tv_editable_root.call(null,this__8563.root),cljs.core.tv_editable_tail.call(null,this__8563.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8564 = this;
var h__2226__auto____8565 = this__8564.__hash;
if((h__2226__auto____8565 != null))
{return h__2226__auto____8565;
} else
{var h__2226__auto____8566 = cljs.core.hash_coll.call(null,coll);
this__8564.__hash = h__2226__auto____8566;
return h__2226__auto____8566;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8567 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8568 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8569 = this;
if((function (){var and__3546__auto____8570 = (0 <= k);
if(and__3546__auto____8570)
{return (k < this__8569.cnt);
} else
{return and__3546__auto____8570;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8571 = cljs.core.aclone.call(null,this__8569.tail);
(new_tail__8571[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8569.meta,this__8569.cnt,this__8569.shift,this__8569.root,new_tail__8571,null));
} else
{return (new cljs.core.PersistentVector(this__8569.meta,this__8569.cnt,this__8569.shift,cljs.core.do_assoc.call(null,coll,this__8569.shift,this__8569.root,k,v),this__8569.tail,null));
}
} else
{if((k === this__8569.cnt))
{return cljs.core._conj.call(null,coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8569.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__8616 = null;
var G__8616__2 = (function (tsym8561,k){
var this__8572 = this;
var tsym8561__8573 = this;
var coll__8574 = tsym8561__8573;
return cljs.core._lookup.call(null,coll__8574,k);
});
var G__8616__3 = (function (tsym8562,k,not_found){
var this__8575 = this;
var tsym8562__8576 = this;
var coll__8577 = tsym8562__8576;
return cljs.core._lookup.call(null,coll__8577,k,not_found);
});
G__8616 = function(tsym8562,k,not_found){
switch(arguments.length){
case 2:
return G__8616__2.call(this,tsym8562,k);
case 3:
return G__8616__3.call(this,tsym8562,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8616;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (tsym8559,args8560){
return tsym8559.call.apply(tsym8559,[tsym8559].concat(cljs.core.aclone.call(null,args8560)));
});
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8578 = this;
var step_init__8579 = [0,init];
var i__8580 = 0;
while(true){
if((i__8580 < this__8578.cnt))
{var arr__8581 = cljs.core.array_for.call(null,v,i__8580);
var len__8582 = arr__8581.length;
var init__8586 = (function (){var j__8583 = 0;
var init__8584 = (step_init__8579[1]);
while(true){
if((j__8583 < len__8582))
{var init__8585 = f.call(null,init__8584,(j__8583 + i__8580),(arr__8581[j__8583]));
if(cljs.core.reduced_QMARK_.call(null,init__8585))
{return init__8585;
} else
{{
var G__8617 = (j__8583 + 1);
var G__8618 = init__8585;
j__8583 = G__8617;
init__8584 = G__8618;
continue;
}
}
} else
{(step_init__8579[0] = len__8582);
(step_init__8579[1] = init__8584);
return init__8584;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8586))
{return cljs.core.deref.call(null,init__8586);
} else
{{
var G__8619 = (i__8580 + (step_init__8579[0]));
i__8580 = G__8619;
continue;
}
}
} else
{return (step_init__8579[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8587 = this;
if(((this__8587.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8588 = cljs.core.aclone.call(null,this__8587.tail);
new_tail__8588.push(o);
return (new cljs.core.PersistentVector(this__8587.meta,(this__8587.cnt + 1),this__8587.shift,this__8587.root,new_tail__8588,null));
} else
{var root_overflow_QMARK___8589 = ((this__8587.cnt >>> 5) > (1 << this__8587.shift));
var new_shift__8590 = ((root_overflow_QMARK___8589)?(this__8587.shift + 5):this__8587.shift);
var new_root__8592 = ((root_overflow_QMARK___8589)?(function (){var n_r__8591 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8591,0,this__8587.root);
cljs.core.pv_aset.call(null,n_r__8591,1,cljs.core.new_path.call(null,null,this__8587.shift,(new cljs.core.VectorNode(null,this__8587.tail))));
return n_r__8591;
})():cljs.core.push_tail.call(null,coll,this__8587.shift,this__8587.root,(new cljs.core.VectorNode(null,this__8587.tail))));
return (new cljs.core.PersistentVector(this__8587.meta,(this__8587.cnt + 1),new_shift__8590,new_root__8592,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8593 = this;
return cljs.core._nth.call(null,coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8594 = this;
return cljs.core._nth.call(null,coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8595 = this;
var this$__8596 = this;
return cljs.core.pr_str.call(null,this$__8596);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8597 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8598 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8599 = this;
return cljs.core.vector_seq.call(null,coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8600 = this;
return this__8600.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8601 = this;
if((this__8601.cnt > 0))
{return cljs.core._nth.call(null,coll,(this__8601.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8602 = this;
if((this__8602.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8602.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8602.meta);
} else
{if((1 < (this__8602.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8602.meta,(this__8602.cnt - 1),this__8602.shift,this__8602.root,this__8602.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8603 = cljs.core.array_for.call(null,coll,(this__8602.cnt - 2));
var nr__8604 = cljs.core.pop_tail.call(null,coll,this__8602.shift,this__8602.root);
var new_root__8605 = (((nr__8604 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8604);
var cnt_1__8606 = (this__8602.cnt - 1);
if((function (){var and__3546__auto____8607 = (5 < this__8602.shift);
if(and__3546__auto____8607)
{return (cljs.core.pv_aget.call(null,new_root__8605,1) == null);
} else
{return and__3546__auto____8607;
}
})())
{return (new cljs.core.PersistentVector(this__8602.meta,cnt_1__8606,(this__8602.shift - 5),cljs.core.pv_aget.call(null,new_root__8605,0),new_tail__8603,null));
} else
{return (new cljs.core.PersistentVector(this__8602.meta,cnt_1__8606,this__8602.shift,new_root__8605,new_tail__8603,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8609 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8610 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8611 = this;
return (new cljs.core.PersistentVector(meta,this__8611.cnt,this__8611.shift,this__8611.root,this__8611.tail,this__8611.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8612 = this;
return this__8612.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8613 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8614 = this;
if((function (){var and__3546__auto____8615 = (0 <= n);
if(and__3546__auto____8615)
{return (n < this__8614.cnt);
} else
{return and__3546__auto____8615;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8608 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8608.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs){
var xs__8620 = cljs.core.seq.call(null,xs);
var out__8621 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.truth_(xs__8620))
{{
var G__8622 = cljs.core.next.call(null,xs__8620);
var G__8623 = cljs.core.conj_BANG_.call(null,out__8621,cljs.core.first.call(null,xs__8620));
xs__8620 = G__8622;
out__8621 = G__8623;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8621);
}
break;
}
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__8624){
var args = cljs.core.seq(arglist__8624);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16200095;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8629 = this;
var h__2226__auto____8630 = this__8629.__hash;
if((h__2226__auto____8630 != null))
{return h__2226__auto____8630;
} else
{var h__2226__auto____8631 = cljs.core.hash_coll.call(null,coll);
this__8629.__hash = h__2226__auto____8631;
return h__2226__auto____8631;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8632 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8633 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8634 = this;
var v_pos__8635 = (this__8634.start + key);
return (new cljs.core.Subvec(this__8634.meta,cljs.core._assoc.call(null,this__8634.v,v_pos__8635,val),this__8634.start,((this__8634.end > (v_pos__8635 + 1)) ? this__8634.end : (v_pos__8635 + 1)),null));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__8659 = null;
var G__8659__2 = (function (tsym8627,k){
var this__8636 = this;
var tsym8627__8637 = this;
var coll__8638 = tsym8627__8637;
return cljs.core._lookup.call(null,coll__8638,k);
});
var G__8659__3 = (function (tsym8628,k,not_found){
var this__8639 = this;
var tsym8628__8640 = this;
var coll__8641 = tsym8628__8640;
return cljs.core._lookup.call(null,coll__8641,k,not_found);
});
G__8659 = function(tsym8628,k,not_found){
switch(arguments.length){
case 2:
return G__8659__2.call(this,tsym8628,k);
case 3:
return G__8659__3.call(this,tsym8628,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8659;
})()
;
cljs.core.Subvec.prototype.apply = (function (tsym8625,args8626){
return tsym8625.call.apply(tsym8625,[tsym8625].concat(cljs.core.aclone.call(null,args8626)));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8642 = this;
return (new cljs.core.Subvec(this__8642.meta,cljs.core._assoc_n.call(null,this__8642.v,this__8642.end,o),this__8642.start,(this__8642.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8643 = this;
var this$__8644 = this;
return cljs.core.pr_str.call(null,this$__8644);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8645 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8646 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8647 = this;
var subvec_seq__8648 = (function subvec_seq(i){
if((i === this__8647.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8647.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});
return subvec_seq__8648.call(null,this__8647.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8649 = this;
return (this__8649.end - this__8649.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8650 = this;
return cljs.core._nth.call(null,this__8650.v,(this__8650.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8651 = this;
if((this__8651.start === this__8651.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8651.meta,this__8651.v,this__8651.start,(this__8651.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8652 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8653 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8654 = this;
return (new cljs.core.Subvec(meta,this__8654.v,this__8654.start,this__8654.end,this__8654.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8655 = this;
return this__8655.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8657 = this;
return cljs.core._nth.call(null,this__8657.v,(this__8657.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8658 = this;
return cljs.core._nth.call(null,this__8658.v,(this__8658.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8656 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8656.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,cljs.core.aclone.call(null,node.arr)));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},cljs.core.aclone.call(null,node.arr)));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__8660 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8660,0,tl.length);
return ret__8660;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8661 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8662 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8661,subidx__8662,(((level === 5))?tail_node:(function (){var child__8663 = cljs.core.pv_aget.call(null,ret__8661,subidx__8662);
if((child__8663 != null))
{return tv_push_tail.call(null,tv,(level - 5),child__8663,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8661;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8664 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8665 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8666 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8664,subidx__8665));
if((function (){var and__3546__auto____8667 = (new_child__8666 == null);
if(and__3546__auto____8667)
{return (subidx__8665 === 0);
} else
{return and__3546__auto____8667;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8664,subidx__8665,new_child__8666);
return node__8664;
}
} else
{if((subidx__8665 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8664,subidx__8665,null);
return node__8664;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3546__auto____8668 = (0 <= i);
if(and__3546__auto____8668)
{return (i < tv.cnt);
} else
{return and__3546__auto____8668;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8669 = tv.root;
var node__8670 = root__8669;
var level__8671 = tv.shift;
while(true){
if((level__8671 > 0))
{{
var G__8672 = cljs.core.tv_ensure_editable.call(null,root__8669.edit,cljs.core.pv_aget.call(null,node__8670,((i >>> level__8671) & 31)));
var G__8673 = (level__8671 - 5);
node__8670 = G__8672;
level__8671 = G__8673;
continue;
}
} else
{return node__8670.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 147;
this.cljs$lang$protocol_mask$partition1$ = 11;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.TransientVector");
});
cljs.core.TransientVector.prototype.cljs$core$IFn$ = true;
cljs.core.TransientVector.prototype.call = (function() {
var G__8711 = null;
var G__8711__2 = (function (tsym8676,k){
var this__8678 = this;
var tsym8676__8679 = this;
var coll__8680 = tsym8676__8679;
return cljs.core._lookup.call(null,coll__8680,k);
});
var G__8711__3 = (function (tsym8677,k,not_found){
var this__8681 = this;
var tsym8677__8682 = this;
var coll__8683 = tsym8677__8682;
return cljs.core._lookup.call(null,coll__8683,k,not_found);
});
G__8711 = function(tsym8677,k,not_found){
switch(arguments.length){
case 2:
return G__8711__2.call(this,tsym8677,k);
case 3:
return G__8711__3.call(this,tsym8677,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8711;
})()
;
cljs.core.TransientVector.prototype.apply = (function (tsym8674,args8675){
return tsym8674.call.apply(tsym8674,[tsym8674].concat(cljs.core.aclone.call(null,args8675)));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8684 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8685 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8686 = this;
if(cljs.core.truth_(this__8686.root.edit))
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8687 = this;
if((function (){var and__3546__auto____8688 = (0 <= n);
if(and__3546__auto____8688)
{return (n < this__8687.cnt);
} else
{return and__3546__auto____8688;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8689 = this;
if(cljs.core.truth_(this__8689.root.edit))
{return this__8689.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8690 = this;
if(cljs.core.truth_(this__8690.root.edit))
{if((function (){var and__3546__auto____8691 = (0 <= n);
if(and__3546__auto____8691)
{return (n < this__8690.cnt);
} else
{return and__3546__auto____8691;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8690.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8694 = (function go(level,node){
var node__8692 = cljs.core.tv_ensure_editable.call(null,this__8690.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8692,(n & 31),val);
return node__8692;
} else
{var subidx__8693 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8692,subidx__8693,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8692,subidx__8693)));
return node__8692;
}
}).call(null,this__8690.shift,this__8690.root);
this__8690.root = new_root__8694;
return tcoll;
}
} else
{if((n === this__8690.cnt))
{return cljs.core._conj_BANG_.call(null,tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8690.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__8695 = this;
if(cljs.core.truth_(this__8695.root.edit))
{if((this__8695.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8695.cnt))
{this__8695.cnt = 0;
return tcoll;
} else
{if((((this__8695.cnt - 1) & 31) > 0))
{this__8695.cnt = (this__8695.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8696 = cljs.core.editable_array_for.call(null,tcoll,(this__8695.cnt - 2));
var new_root__8698 = (function (){var nr__8697 = cljs.core.tv_pop_tail.call(null,tcoll,this__8695.shift,this__8695.root);
if((nr__8697 != null))
{return nr__8697;
} else
{return (new cljs.core.VectorNode(this__8695.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3546__auto____8699 = (5 < this__8695.shift);
if(and__3546__auto____8699)
{return (cljs.core.pv_aget.call(null,new_root__8698,1) == null);
} else
{return and__3546__auto____8699;
}
})())
{var new_root__8700 = cljs.core.tv_ensure_editable.call(null,this__8695.root.edit,cljs.core.pv_aget.call(null,new_root__8698,0));
this__8695.root = new_root__8700;
this__8695.shift = (this__8695.shift - 5);
this__8695.cnt = (this__8695.cnt - 1);
this__8695.tail = new_tail__8696;
return tcoll;
} else
{this__8695.root = new_root__8698;
this__8695.cnt = (this__8695.cnt - 1);
this__8695.tail = new_tail__8696;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8701 = this;
return cljs.core._assoc_n_BANG_.call(null,tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8702 = this;
if(cljs.core.truth_(this__8702.root.edit))
{if(((this__8702.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8702.tail[(this__8702.cnt & 31)] = o);
this__8702.cnt = (this__8702.cnt + 1);
return tcoll;
} else
{var tail_node__8703 = (new cljs.core.VectorNode(this__8702.root.edit,this__8702.tail));
var new_tail__8704 = cljs.core.make_array.call(null,32);
(new_tail__8704[0] = o);
this__8702.tail = new_tail__8704;
if(((this__8702.cnt >>> 5) > (1 << this__8702.shift)))
{var new_root_array__8705 = cljs.core.make_array.call(null,32);
var new_shift__8706 = (this__8702.shift + 5);
(new_root_array__8705[0] = this__8702.root);
(new_root_array__8705[1] = cljs.core.new_path.call(null,this__8702.root.edit,this__8702.shift,tail_node__8703));
this__8702.root = (new cljs.core.VectorNode(this__8702.root.edit,new_root_array__8705));
this__8702.shift = new_shift__8706;
this__8702.cnt = (this__8702.cnt + 1);
return tcoll;
} else
{var new_root__8707 = cljs.core.tv_push_tail.call(null,tcoll,this__8702.shift,this__8702.root,tail_node__8703);
this__8702.root = new_root__8707;
this__8702.cnt = (this__8702.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8708 = this;
if(cljs.core.truth_(this__8708.root.edit))
{this__8708.root.edit = null;
var len__8709 = (this__8708.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8710 = cljs.core.make_array.call(null,len__8709);
cljs.core.array_copy.call(null,this__8708.tail,0,trimmed_tail__8710,0,len__8709);
return (new cljs.core.PersistentVector(null,this__8708.cnt,this__8708.shift,this__8708.root,trimmed_tail__8710,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8712 = this;
var h__2226__auto____8713 = this__8712.__hash;
if((h__2226__auto____8713 != null))
{return h__2226__auto____8713;
} else
{var h__2226__auto____8714 = cljs.core.hash_coll.call(null,coll);
this__8712.__hash = h__2226__auto____8714;
return h__2226__auto____8714;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8715 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8716 = this;
var this$__8717 = this;
return cljs.core.pr_str.call(null,this$__8717);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8718 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8719 = this;
return cljs.core._first.call(null,this__8719.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8720 = this;
var temp__3695__auto____8721 = cljs.core.next.call(null,this__8720.front);
if(cljs.core.truth_(temp__3695__auto____8721))
{var f1__8722 = temp__3695__auto____8721;
return (new cljs.core.PersistentQueueSeq(this__8720.meta,f1__8722,this__8720.rear,null));
} else
{if((this__8720.rear == null))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8720.meta,this__8720.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8723 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8724 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8724.front,this__8724.rear,this__8724.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8725 = this;
return this__8725.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8726 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8726.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15929422;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8727 = this;
var h__2226__auto____8728 = this__8727.__hash;
if((h__2226__auto____8728 != null))
{return h__2226__auto____8728;
} else
{var h__2226__auto____8729 = cljs.core.hash_coll.call(null,coll);
this__8727.__hash = h__2226__auto____8729;
return h__2226__auto____8729;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8730 = this;
if(cljs.core.truth_(this__8730.front))
{return (new cljs.core.PersistentQueue(this__8730.meta,(this__8730.count + 1),this__8730.front,cljs.core.conj.call(null,(function (){var or__3548__auto____8731 = this__8730.rear;
if(cljs.core.truth_(or__3548__auto____8731))
{return or__3548__auto____8731;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8730.meta,(this__8730.count + 1),cljs.core.conj.call(null,this__8730.front,o),cljs.core.PersistentVector.fromArray([]),null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8732 = this;
var this$__8733 = this;
return cljs.core.pr_str.call(null,this$__8733);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8734 = this;
var rear__8735 = cljs.core.seq.call(null,this__8734.rear);
if(cljs.core.truth_((function (){var or__3548__auto____8736 = this__8734.front;
if(cljs.core.truth_(or__3548__auto____8736))
{return or__3548__auto____8736;
} else
{return rear__8735;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8734.front,cljs.core.seq.call(null,rear__8735),null,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8737 = this;
return this__8737.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8738 = this;
return cljs.core._first.call(null,this__8738.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8739 = this;
if(cljs.core.truth_(this__8739.front))
{var temp__3695__auto____8740 = cljs.core.next.call(null,this__8739.front);
if(cljs.core.truth_(temp__3695__auto____8740))
{var f1__8741 = temp__3695__auto____8740;
return (new cljs.core.PersistentQueue(this__8739.meta,(this__8739.count - 1),f1__8741,this__8739.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8739.meta,(this__8739.count - 1),cljs.core.seq.call(null,this__8739.rear),cljs.core.PersistentVector.fromArray([]),null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8742 = this;
return cljs.core.first.call(null,this__8742.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8743 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8744 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8745 = this;
return (new cljs.core.PersistentQueue(meta,this__8745.count,this__8745.front,this__8745.rear,this__8745.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8746 = this;
return this__8746.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8747 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.fromArray([]),0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1048576;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8748 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__8749 = array.length;
var i__8750 = 0;
while(true){
if((i__8750 < len__8749))
{if(cljs.core._EQ_.call(null,k,(array[i__8750])))
{return i__8750;
} else
{{
var G__8751 = (i__8750 + incr);
i__8750 = G__8751;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___2 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____8752 = goog.isString.call(null,k);
if(cljs.core.truth_(and__3546__auto____8752))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8752;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case 2:
return obj_map_contains_key_QMARK___2.call(this,k,strobj);
case 4:
return obj_map_contains_key_QMARK___4.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
obj_map_contains_key_QMARK_.cljs$lang$arity$2 = obj_map_contains_key_QMARK___2;
obj_map_contains_key_QMARK_.cljs$lang$arity$4 = obj_map_contains_key_QMARK___4;
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8753 = cljs.core.hash.call(null,a);
var b__8754 = cljs.core.hash.call(null,b);
if((a__8753 < b__8754))
{return -1;
} else
{if((a__8753 > b__8754))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__8756 = m.keys;
var len__8757 = ks__8756.length;
var so__8758 = m.strobj;
var out__8759 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8760 = 0;
var out__8761 = cljs.core.transient$.call(null,out__8759);
while(true){
if((i__8760 < len__8757))
{var k__8762 = (ks__8756[i__8760]);
{
var G__8763 = (i__8760 + 1);
var G__8764 = cljs.core.assoc_BANG_.call(null,out__8761,k__8762,(so__8758[k__8762]));
i__8760 = G__8763;
out__8761 = G__8764;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8761,k,v));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155021199;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8769 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8770 = this;
var h__2226__auto____8771 = this__8770.__hash;
if((h__2226__auto____8771 != null))
{return h__2226__auto____8771;
} else
{var h__2226__auto____8772 = cljs.core.hash_imap.call(null,coll);
this__8770.__hash = h__2226__auto____8772;
return h__2226__auto____8772;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8773 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8774 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8774.strobj,(this__8774.strobj[k]),not_found);
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8775 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var overwrite_QMARK___8776 = this__8775.strobj.hasOwnProperty(k);
if(cljs.core.truth_(overwrite_QMARK___8776))
{var new_strobj__8777 = goog.object.clone.call(null,this__8775.strobj);
(new_strobj__8777[k] = v);
return (new cljs.core.ObjMap(this__8775.meta,this__8775.keys,new_strobj__8777,(this__8775.update_count + 1),null));
} else
{if((this__8775.update_count < cljs.core.ObjMap.HASHMAP_THRESHOLD))
{var new_strobj__8778 = goog.object.clone.call(null,this__8775.strobj);
var new_keys__8779 = cljs.core.aclone.call(null,this__8775.keys);
(new_strobj__8778[k] = v);
new_keys__8779.push(k);
return (new cljs.core.ObjMap(this__8775.meta,new_keys__8779,new_strobj__8778,(this__8775.update_count + 1),null));
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8780 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8780.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__8800 = null;
var G__8800__2 = (function (tsym8767,k){
var this__8781 = this;
var tsym8767__8782 = this;
var coll__8783 = tsym8767__8782;
return cljs.core._lookup.call(null,coll__8783,k);
});
var G__8800__3 = (function (tsym8768,k,not_found){
var this__8784 = this;
var tsym8768__8785 = this;
var coll__8786 = tsym8768__8785;
return cljs.core._lookup.call(null,coll__8786,k,not_found);
});
G__8800 = function(tsym8768,k,not_found){
switch(arguments.length){
case 2:
return G__8800__2.call(this,tsym8768,k);
case 3:
return G__8800__3.call(this,tsym8768,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8800;
})()
;
cljs.core.ObjMap.prototype.apply = (function (tsym8765,args8766){
return tsym8765.call.apply(tsym8765,[tsym8765].concat(cljs.core.aclone.call(null,args8766)));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8787 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8788 = this;
var this$__8789 = this;
return cljs.core.pr_str.call(null,this$__8789);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8790 = this;
if((this__8790.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8755_SHARP_){
return cljs.core.vector.call(null,p1__8755_SHARP_,(this__8790.strobj[p1__8755_SHARP_]));
}),this__8790.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8791 = this;
return this__8791.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8792 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8793 = this;
return (new cljs.core.ObjMap(meta,this__8793.keys,this__8793.strobj,this__8793.update_count,this__8793.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8794 = this;
return this__8794.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8795 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8795.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8796 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8797 = goog.isString.call(null,k);
if(cljs.core.truth_(and__3546__auto____8797))
{return this__8796.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8797;
}
})()))
{var new_keys__8798 = cljs.core.aclone.call(null,this__8796.keys);
var new_strobj__8799 = goog.object.clone.call(null,this__8796.strobj);
new_keys__8798.splice(cljs.core.scan_array.call(null,1,k,new_keys__8798),1);
cljs.core.js_delete.call(null,new_strobj__8799,k);
return (new cljs.core.ObjMap(this__8796.meta,new_keys__8798,new_strobj__8799,(this__8796.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 7537551;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8806 = this;
var h__2226__auto____8807 = this__8806.__hash;
if((h__2226__auto____8807 != null))
{return h__2226__auto____8807;
} else
{var h__2226__auto____8808 = cljs.core.hash_imap.call(null,coll);
this__8806.__hash = h__2226__auto____8808;
return h__2226__auto____8808;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8809 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8810 = this;
var bucket__8811 = (this__8810.hashobj[cljs.core.hash.call(null,k)]);
var i__8812 = (cljs.core.truth_(bucket__8811)?cljs.core.scan_array.call(null,2,k,bucket__8811):null);
if(cljs.core.truth_(i__8812))
{return (bucket__8811[(i__8812 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8813 = this;
var h__8814 = cljs.core.hash.call(null,k);
var bucket__8815 = (this__8813.hashobj[h__8814]);
if(cljs.core.truth_(bucket__8815))
{var new_bucket__8816 = cljs.core.aclone.call(null,bucket__8815);
var new_hashobj__8817 = goog.object.clone.call(null,this__8813.hashobj);
(new_hashobj__8817[h__8814] = new_bucket__8816);
var temp__3695__auto____8818 = cljs.core.scan_array.call(null,2,k,new_bucket__8816);
if(cljs.core.truth_(temp__3695__auto____8818))
{var i__8819 = temp__3695__auto____8818;
(new_bucket__8816[(i__8819 + 1)] = v);
return (new cljs.core.HashMap(this__8813.meta,this__8813.count,new_hashobj__8817,null));
} else
{new_bucket__8816.push(k,v);
return (new cljs.core.HashMap(this__8813.meta,(this__8813.count + 1),new_hashobj__8817,null));
}
} else
{var new_hashobj__8820 = goog.object.clone.call(null,this__8813.hashobj);
(new_hashobj__8820[h__8814] = [k,v]);
return (new cljs.core.HashMap(this__8813.meta,(this__8813.count + 1),new_hashobj__8820,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8821 = this;
var bucket__8822 = (this__8821.hashobj[cljs.core.hash.call(null,k)]);
var i__8823 = (cljs.core.truth_(bucket__8822)?cljs.core.scan_array.call(null,2,k,bucket__8822):null);
if(cljs.core.truth_(i__8823))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__8846 = null;
var G__8846__2 = (function (tsym8804,k){
var this__8824 = this;
var tsym8804__8825 = this;
var coll__8826 = tsym8804__8825;
return cljs.core._lookup.call(null,coll__8826,k);
});
var G__8846__3 = (function (tsym8805,k,not_found){
var this__8827 = this;
var tsym8805__8828 = this;
var coll__8829 = tsym8805__8828;
return cljs.core._lookup.call(null,coll__8829,k,not_found);
});
G__8846 = function(tsym8805,k,not_found){
switch(arguments.length){
case 2:
return G__8846__2.call(this,tsym8805,k);
case 3:
return G__8846__3.call(this,tsym8805,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8846;
})()
;
cljs.core.HashMap.prototype.apply = (function (tsym8802,args8803){
return tsym8802.call.apply(tsym8802,[tsym8802].concat(cljs.core.aclone.call(null,args8803)));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8830 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8831 = this;
var this$__8832 = this;
return cljs.core.pr_str.call(null,this$__8832);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8833 = this;
if((this__8833.count > 0))
{var hashes__8834 = cljs.core.js_keys.call(null,this__8833.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8801_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8833.hashobj[p1__8801_SHARP_])));
}),hashes__8834);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8835 = this;
return this__8835.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8836 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8837 = this;
return (new cljs.core.HashMap(meta,this__8837.count,this__8837.hashobj,this__8837.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8838 = this;
return this__8838.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8839 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8839.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8840 = this;
var h__8841 = cljs.core.hash.call(null,k);
var bucket__8842 = (this__8840.hashobj[h__8841]);
var i__8843 = (cljs.core.truth_(bucket__8842)?cljs.core.scan_array.call(null,2,k,bucket__8842):null);
if(cljs.core.not.call(null,i__8843))
{return coll;
} else
{var new_hashobj__8844 = goog.object.clone.call(null,this__8840.hashobj);
if((3 > bucket__8842.length))
{cljs.core.js_delete.call(null,new_hashobj__8844,h__8841);
} else
{var new_bucket__8845 = cljs.core.aclone.call(null,bucket__8842);
new_bucket__8845.splice(i__8843,2);
(new_hashobj__8844[h__8841] = new_bucket__8845);
}
return (new cljs.core.HashMap(this__8840.meta,(this__8840.count - 1),new_hashobj__8844,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8847 = ks.length;
var i__8848 = 0;
var out__8849 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8848 < len__8847))
{{
var G__8850 = (i__8848 + 1);
var G__8851 = cljs.core.assoc.call(null,out__8849,(ks[i__8848]),(vs[i__8848]));
i__8848 = G__8850;
out__8849 = G__8851;
continue;
}
} else
{return out__8849;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8852 = m.arr;
var len__8853 = arr__8852.length;
var i__8854 = 0;
while(true){
if((len__8853 <= i__8854))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8852[i__8854]),k))
{return i__8854;
} else
{if("\uFDD0'else")
{{
var G__8855 = (i__8854 + 2);
i__8854 = G__8855;
continue;
}
} else
{return null;
}
}
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155545487;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8860 = this;
return (new cljs.core.TransientArrayMap({},this__8860.arr.length,cljs.core.aclone.call(null,this__8860.arr)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8861 = this;
var h__2226__auto____8862 = this__8861.__hash;
if((h__2226__auto____8862 != null))
{return h__2226__auto____8862;
} else
{var h__2226__auto____8863 = cljs.core.hash_imap.call(null,coll);
this__8861.__hash = h__2226__auto____8863;
return h__2226__auto____8863;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8864 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8865 = this;
var idx__8866 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8866 === -1))
{return not_found;
} else
{return (this__8865.arr[(idx__8866 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8867 = this;
var idx__8868 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8868 === -1))
{if((this__8867.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8867.meta,(this__8867.cnt + 1),(function (){var G__8869__8870 = cljs.core.aclone.call(null,this__8867.arr);
G__8869__8870.push(k);
G__8869__8870.push(v);
return G__8869__8870;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8867.arr[(idx__8868 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8867.meta,this__8867.cnt,(function (){var G__8871__8872 = cljs.core.aclone.call(null,this__8867.arr);
(G__8871__8872[(idx__8868 + 1)] = v);
return G__8871__8872;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8873 = this;
return (cljs.core.array_map_index_of.call(null,coll,k) != -1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__8903 = null;
var G__8903__2 = (function (tsym8858,k){
var this__8874 = this;
var tsym8858__8875 = this;
var coll__8876 = tsym8858__8875;
return cljs.core._lookup.call(null,coll__8876,k);
});
var G__8903__3 = (function (tsym8859,k,not_found){
var this__8877 = this;
var tsym8859__8878 = this;
var coll__8879 = tsym8859__8878;
return cljs.core._lookup.call(null,coll__8879,k,not_found);
});
G__8903 = function(tsym8859,k,not_found){
switch(arguments.length){
case 2:
return G__8903__2.call(this,tsym8859,k);
case 3:
return G__8903__3.call(this,tsym8859,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8903;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (tsym8856,args8857){
return tsym8856.call.apply(tsym8856,[tsym8856].concat(cljs.core.aclone.call(null,args8857)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8880 = this;
var len__8881 = this__8880.arr.length;
var i__8882 = 0;
var init__8883 = init;
while(true){
if((i__8882 < len__8881))
{var init__8884 = f.call(null,init__8883,(this__8880.arr[i__8882]),(this__8880.arr[(i__8882 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8884))
{return cljs.core.deref.call(null,init__8884);
} else
{{
var G__8904 = (i__8882 + 2);
var G__8905 = init__8884;
i__8882 = G__8904;
init__8883 = G__8905;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8885 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8886 = this;
var this$__8887 = this;
return cljs.core.pr_str.call(null,this$__8887);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8888 = this;
if((this__8888.cnt > 0))
{var len__8889 = this__8888.arr.length;
var array_map_seq__8890 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8889))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8888.arr[i]),(this__8888.arr[(i + 1)])]),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
})));
});
return array_map_seq__8890.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8891 = this;
return this__8891.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8892 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8893 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8893.cnt,this__8893.arr,this__8893.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8894 = this;
return this__8894.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8895 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8895.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8896 = this;
var idx__8897 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8897 >= 0))
{var len__8898 = this__8896.arr.length;
var new_len__8899 = (len__8898 - 2);
if((new_len__8899 === 0))
{return cljs.core._empty.call(null,coll);
} else
{var new_arr__8900 = cljs.core.make_array.call(null,new_len__8899);
var s__8901 = 0;
var d__8902 = 0;
while(true){
if((s__8901 >= len__8898))
{return (new cljs.core.PersistentArrayMap(this__8896.meta,(this__8896.cnt - 1),new_arr__8900,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__8896.arr[s__8901])))
{{
var G__8906 = (s__8901 + 2);
var G__8907 = d__8902;
s__8901 = G__8906;
d__8902 = G__8907;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__8900[d__8902] = (this__8896.arr[s__8901]));
(new_arr__8900[(d__8902 + 1)] = (this__8896.arr[(s__8901 + 1)]));
{
var G__8908 = (s__8901 + 2);
var G__8909 = (d__8902 + 2);
s__8901 = G__8908;
d__8902 = G__8909;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__8910 = cljs.core.count.call(null,ks);
var i__8911 = 0;
var out__8912 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__8911 < len__8910))
{{
var G__8913 = (i__8911 + 1);
var G__8914 = cljs.core.assoc_BANG_.call(null,out__8912,(ks[i__8911]),(vs[i__8911]));
i__8911 = G__8913;
out__8912 = G__8914;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8912);
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 7;
this.cljs$lang$protocol_mask$partition0$ = 130;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8915 = this;
if(cljs.core.truth_(this__8915.editable_QMARK_))
{var idx__8916 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8916 >= 0))
{(this__8915.arr[idx__8916] = (this__8915.arr[(this__8915.len - 2)]));
(this__8915.arr[(idx__8916 + 1)] = (this__8915.arr[(this__8915.len - 1)]));
var G__8917__8918 = this__8915.arr;
G__8917__8918.pop();
G__8917__8918.pop();
G__8917__8918;
this__8915.len = (this__8915.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8919 = this;
if(cljs.core.truth_(this__8919.editable_QMARK_))
{var idx__8920 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8920 === -1))
{if(((this__8919.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__8919.len = (this__8919.len + 2);
this__8919.arr.push(key);
this__8919.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__8919.len,this__8919.arr),key,val);
}
} else
{if((val === (this__8919.arr[(idx__8920 + 1)])))
{return tcoll;
} else
{(this__8919.arr[(idx__8920 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8921 = this;
if(cljs.core.truth_(this__8921.editable_QMARK_))
{if((function (){var G__8922__8923 = o;
if((G__8922__8923 != null))
{if((function (){var or__3548__auto____8924 = (G__8922__8923.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3548__auto____8924)
{return or__3548__auto____8924;
} else
{return G__8922__8923.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8922__8923.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8922__8923);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8922__8923);
}
})())
{return cljs.core._assoc_BANG_.call(null,tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8925 = cljs.core.seq.call(null,o);
var tcoll__8926 = tcoll;
while(true){
var temp__3695__auto____8927 = cljs.core.first.call(null,es__8925);
if(cljs.core.truth_(temp__3695__auto____8927))
{var e__8928 = temp__3695__auto____8927;
{
var G__8934 = cljs.core.next.call(null,es__8925);
var G__8935 = cljs.core._assoc_BANG_.call(null,tcoll__8926,cljs.core.key.call(null,e__8928),cljs.core.val.call(null,e__8928));
es__8925 = G__8934;
tcoll__8926 = G__8935;
continue;
}
} else
{return tcoll__8926;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8929 = this;
if(cljs.core.truth_(this__8929.editable_QMARK_))
{this__8929.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__8929.len,2),this__8929.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8930 = this;
return cljs.core._lookup.call(null,tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8931 = this;
if(cljs.core.truth_(this__8931.editable_QMARK_))
{var idx__8932 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__8932 === -1))
{return not_found;
} else
{return (this__8931.arr[(idx__8932 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__8933 = this;
if(cljs.core.truth_(this__8933.editable_QMARK_))
{return cljs.core.quot.call(null,this__8933.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__8936 = cljs.core.transient$.call(null,cljs.core.ObjMap.fromObject([],{}));
var i__8937 = 0;
while(true){
if((i__8937 < len))
{{
var G__8938 = cljs.core.assoc_BANG_.call(null,out__8936,(arr[i__8937]),(arr[(i__8937 + 1)]));
var G__8939 = (i__8937 + 2);
out__8936 = G__8938;
i__8937 = G__8939;
continue;
}
} else
{return out__8936;
}
break;
}
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__8940__8941 = cljs.core.aclone.call(null,arr);
(G__8940__8941[i] = a);
return G__8940__8941;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__8942__8943 = cljs.core.aclone.call(null,arr);
(G__8942__8943[i] = a);
(G__8942__8943[j] = b);
return G__8942__8943;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__8944 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__8944,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__8944,(2 * i),(new_arr__8944.length - (2 * i)));
return new_arr__8944;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__8945 = inode.ensure_editable(edit);
(editable__8945.arr[i] = a);
return editable__8945;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__8946 = inode.ensure_editable(edit);
(editable__8946.arr[i] = a);
(editable__8946.arr[j] = b);
return editable__8946;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__8947 = arr.length;
var i__8948 = 0;
var init__8949 = init;
while(true){
if((i__8948 < len__8947))
{var init__8952 = (function (){var k__8950 = (arr[i__8948]);
if((k__8950 != null))
{return f.call(null,init__8949,k__8950,(arr[(i__8948 + 1)]));
} else
{var node__8951 = (arr[(i__8948 + 1)]);
if((node__8951 != null))
{return node__8951.kv_reduce(f,init__8949);
} else
{return init__8949;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8952))
{return cljs.core.deref.call(null,init__8952);
} else
{{
var G__8953 = (i__8948 + 2);
var G__8954 = init__8952;
i__8948 = G__8953;
init__8949 = G__8954;
continue;
}
}
} else
{return init__8949;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__8955 = this;
var inode__8956 = this;
if((this__8955.bitmap === bit))
{return null;
} else
{var editable__8957 = inode__8956.ensure_editable(e);
var earr__8958 = editable__8957.arr;
var len__8959 = earr__8958.length;
editable__8957.bitmap = (bit ^ editable__8957.bitmap);
cljs.core.array_copy.call(null,earr__8958,(2 * (i + 1)),earr__8958,(2 * i),(len__8959 - (2 * (i + 1))));
(earr__8958[(len__8959 - 2)] = null);
(earr__8958[(len__8959 - 1)] = null);
return editable__8957;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8960 = this;
var inode__8961 = this;
var bit__8962 = (1 << ((hash >>> shift) & 0x01f));
var idx__8963 = cljs.core.bitmap_indexed_node_index.call(null,this__8960.bitmap,bit__8962);
if(((this__8960.bitmap & bit__8962) === 0))
{var n__8964 = cljs.core.bit_count.call(null,this__8960.bitmap);
if(((2 * n__8964) < this__8960.arr.length))
{var editable__8965 = inode__8961.ensure_editable(edit);
var earr__8966 = editable__8965.arr;
(added_leaf_QMARK_[0] = true);
cljs.core.array_copy_downward.call(null,earr__8966,(2 * idx__8963),earr__8966,(2 * (idx__8963 + 1)),(2 * (n__8964 - idx__8963)));
(earr__8966[(2 * idx__8963)] = key);
(earr__8966[((2 * idx__8963) + 1)] = val);
editable__8965.bitmap = (editable__8965.bitmap | bit__8962);
return editable__8965;
} else
{if((n__8964 >= 16))
{var nodes__8967 = cljs.core.make_array.call(null,32);
var jdx__8968 = ((hash >>> shift) & 0x01f);
(nodes__8967[jdx__8968] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8969 = 0;
var j__8970 = 0;
while(true){
if((i__8969 < 32))
{if((((this__8960.bitmap >>> i__8969) & 1) === 0))
{{
var G__9023 = (i__8969 + 1);
var G__9024 = j__8970;
i__8969 = G__9023;
j__8970 = G__9024;
continue;
}
} else
{(nodes__8967[i__8969] = (((null != (this__8960.arr[j__8970])))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__8960.arr[j__8970])),(this__8960.arr[j__8970]),(this__8960.arr[(j__8970 + 1)]),added_leaf_QMARK_):(this__8960.arr[(j__8970 + 1)])));
{
var G__9025 = (i__8969 + 1);
var G__9026 = (j__8970 + 2);
i__8969 = G__9025;
j__8970 = G__9026;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__8964 + 1),nodes__8967));
} else
{if("\uFDD0'else")
{var new_arr__8971 = cljs.core.make_array.call(null,(2 * (n__8964 + 4)));
cljs.core.array_copy.call(null,this__8960.arr,0,new_arr__8971,0,(2 * idx__8963));
(new_arr__8971[(2 * idx__8963)] = key);
(added_leaf_QMARK_[0] = true);
(new_arr__8971[((2 * idx__8963) + 1)] = val);
cljs.core.array_copy.call(null,this__8960.arr,(2 * idx__8963),new_arr__8971,(2 * (idx__8963 + 1)),(2 * (n__8964 - idx__8963)));
var editable__8972 = inode__8961.ensure_editable(edit);
editable__8972.arr = new_arr__8971;
editable__8972.bitmap = (editable__8972.bitmap | bit__8962);
return editable__8972;
} else
{return null;
}
}
}
} else
{var key_or_nil__8973 = (this__8960.arr[(2 * idx__8963)]);
var val_or_node__8974 = (this__8960.arr[((2 * idx__8963) + 1)]);
if((null == key_or_nil__8973))
{var n__8975 = val_or_node__8974.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8975 === val_or_node__8974))
{return inode__8961;
} else
{return cljs.core.edit_and_set.call(null,inode__8961,edit,((2 * idx__8963) + 1),n__8975);
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__8973))
{if((val === val_or_node__8974))
{return inode__8961;
} else
{return cljs.core.edit_and_set.call(null,inode__8961,edit,((2 * idx__8963) + 1),val);
}
} else
{if("\uFDD0'else")
{(added_leaf_QMARK_[0] = true);
return cljs.core.edit_and_set.call(null,inode__8961,edit,(2 * idx__8963),null,((2 * idx__8963) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__8973,val_or_node__8974,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__8976 = this;
var inode__8977 = this;
return cljs.core.create_inode_seq.call(null,this__8976.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8978 = this;
var inode__8979 = this;
var bit__8980 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8978.bitmap & bit__8980) === 0))
{return inode__8979;
} else
{var idx__8981 = cljs.core.bitmap_indexed_node_index.call(null,this__8978.bitmap,bit__8980);
var key_or_nil__8982 = (this__8978.arr[(2 * idx__8981)]);
var val_or_node__8983 = (this__8978.arr[((2 * idx__8981) + 1)]);
if((null == key_or_nil__8982))
{var n__8984 = val_or_node__8983.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8984 === val_or_node__8983))
{return inode__8979;
} else
{if((null != n__8984))
{return cljs.core.edit_and_set.call(null,inode__8979,edit,((2 * idx__8981) + 1),n__8984);
} else
{if((this__8978.bitmap === bit__8980))
{return null;
} else
{if("\uFDD0'else")
{return inode__8979.edit_and_remove_pair(edit,bit__8980,idx__8981);
} else
{return null;
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__8982))
{(removed_leaf_QMARK_[0] = true);
return inode__8979.edit_and_remove_pair(edit,bit__8980,idx__8981);
} else
{if("\uFDD0'else")
{return inode__8979;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__8985 = this;
var inode__8986 = this;
if((e === this__8985.edit))
{return inode__8986;
} else
{var n__8987 = cljs.core.bit_count.call(null,this__8985.bitmap);
var new_arr__8988 = cljs.core.make_array.call(null,(((n__8987 < 0))?4:(2 * (n__8987 + 1))));
cljs.core.array_copy.call(null,this__8985.arr,0,new_arr__8988,0,(2 * n__8987));
return (new cljs.core.BitmapIndexedNode(e,this__8985.bitmap,new_arr__8988));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__8989 = this;
var inode__8990 = this;
return cljs.core.inode_kv_reduce.call(null,this__8989.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function() {
var G__9027 = null;
var G__9027__3 = (function (shift,hash,key){
var this__8991 = this;
var inode__8992 = this;
var bit__8993 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8991.bitmap & bit__8993) === 0))
{return null;
} else
{var idx__8994 = cljs.core.bitmap_indexed_node_index.call(null,this__8991.bitmap,bit__8993);
var key_or_nil__8995 = (this__8991.arr[(2 * idx__8994)]);
var val_or_node__8996 = (this__8991.arr[((2 * idx__8994) + 1)]);
if((null == key_or_nil__8995))
{return val_or_node__8996.inode_find((shift + 5),hash,key);
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__8995))
{return cljs.core.PersistentVector.fromArray([key_or_nil__8995,val_or_node__8996]);
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
});
var G__9027__4 = (function (shift,hash,key,not_found){
var this__8997 = this;
var inode__8998 = this;
var bit__8999 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8997.bitmap & bit__8999) === 0))
{return not_found;
} else
{var idx__9000 = cljs.core.bitmap_indexed_node_index.call(null,this__8997.bitmap,bit__8999);
var key_or_nil__9001 = (this__8997.arr[(2 * idx__9000)]);
var val_or_node__9002 = (this__8997.arr[((2 * idx__9000) + 1)]);
if((null == key_or_nil__9001))
{return val_or_node__9002.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__9001))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9001,val_or_node__9002]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
G__9027 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__9027__3.call(this,shift,hash,key);
case 4:
return G__9027__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9027;
})()
;
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__9003 = this;
var inode__9004 = this;
var bit__9005 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9003.bitmap & bit__9005) === 0))
{return inode__9004;
} else
{var idx__9006 = cljs.core.bitmap_indexed_node_index.call(null,this__9003.bitmap,bit__9005);
var key_or_nil__9007 = (this__9003.arr[(2 * idx__9006)]);
var val_or_node__9008 = (this__9003.arr[((2 * idx__9006) + 1)]);
if((null == key_or_nil__9007))
{var n__9009 = val_or_node__9008.inode_without((shift + 5),hash,key);
if((n__9009 === val_or_node__9008))
{return inode__9004;
} else
{if((null != n__9009))
{return (new cljs.core.BitmapIndexedNode(null,this__9003.bitmap,cljs.core.clone_and_set.call(null,this__9003.arr,((2 * idx__9006) + 1),n__9009)));
} else
{if((this__9003.bitmap === bit__9005))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9003.bitmap ^ bit__9005),cljs.core.remove_pair.call(null,this__9003.arr,idx__9006)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__9007))
{return (new cljs.core.BitmapIndexedNode(null,(this__9003.bitmap ^ bit__9005),cljs.core.remove_pair.call(null,this__9003.arr,idx__9006)));
} else
{if("\uFDD0'else")
{return inode__9004;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9010 = this;
var inode__9011 = this;
var bit__9012 = (1 << ((hash >>> shift) & 0x01f));
var idx__9013 = cljs.core.bitmap_indexed_node_index.call(null,this__9010.bitmap,bit__9012);
if(((this__9010.bitmap & bit__9012) === 0))
{var n__9014 = cljs.core.bit_count.call(null,this__9010.bitmap);
if((n__9014 >= 16))
{var nodes__9015 = cljs.core.make_array.call(null,32);
var jdx__9016 = ((hash >>> shift) & 0x01f);
(nodes__9015[jdx__9016] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9017 = 0;
var j__9018 = 0;
while(true){
if((i__9017 < 32))
{if((((this__9010.bitmap >>> i__9017) & 1) === 0))
{{
var G__9028 = (i__9017 + 1);
var G__9029 = j__9018;
i__9017 = G__9028;
j__9018 = G__9029;
continue;
}
} else
{(nodes__9015[i__9017] = (((null != (this__9010.arr[j__9018])))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__9010.arr[j__9018])),(this__9010.arr[j__9018]),(this__9010.arr[(j__9018 + 1)]),added_leaf_QMARK_):(this__9010.arr[(j__9018 + 1)])));
{
var G__9030 = (i__9017 + 1);
var G__9031 = (j__9018 + 2);
i__9017 = G__9030;
j__9018 = G__9031;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9014 + 1),nodes__9015));
} else
{var new_arr__9019 = cljs.core.make_array.call(null,(2 * (n__9014 + 1)));
cljs.core.array_copy.call(null,this__9010.arr,0,new_arr__9019,0,(2 * idx__9013));
(new_arr__9019[(2 * idx__9013)] = key);
(added_leaf_QMARK_[0] = true);
(new_arr__9019[((2 * idx__9013) + 1)] = val);
cljs.core.array_copy.call(null,this__9010.arr,(2 * idx__9013),new_arr__9019,(2 * (idx__9013 + 1)),(2 * (n__9014 - idx__9013)));
return (new cljs.core.BitmapIndexedNode(null,(this__9010.bitmap | bit__9012),new_arr__9019));
}
} else
{var key_or_nil__9020 = (this__9010.arr[(2 * idx__9013)]);
var val_or_node__9021 = (this__9010.arr[((2 * idx__9013) + 1)]);
if((null == key_or_nil__9020))
{var n__9022 = val_or_node__9021.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9022 === val_or_node__9021))
{return inode__9011;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9010.bitmap,cljs.core.clone_and_set.call(null,this__9010.arr,((2 * idx__9013) + 1),n__9022)));
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__9020))
{if((val === val_or_node__9021))
{return inode__9011;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9010.bitmap,cljs.core.clone_and_set.call(null,this__9010.arr,((2 * idx__9013) + 1),val)));
}
} else
{if("\uFDD0'else")
{(added_leaf_QMARK_[0] = true);
return (new cljs.core.BitmapIndexedNode(null,this__9010.bitmap,cljs.core.clone_and_set.call(null,this__9010.arr,(2 * idx__9013),null,((2 * idx__9013) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__9020,val_or_node__9021,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__9032 = array_node.arr;
var len__9033 = (2 * (array_node.cnt - 1));
var new_arr__9034 = cljs.core.make_array.call(null,len__9033);
var i__9035 = 0;
var j__9036 = 1;
var bitmap__9037 = 0;
while(true){
if((i__9035 < len__9033))
{if((function (){var and__3546__auto____9038 = (i__9035 != idx);
if(and__3546__auto____9038)
{return (null != (arr__9032[i__9035]));
} else
{return and__3546__auto____9038;
}
})())
{(new_arr__9034[j__9036] = (arr__9032[i__9035]));
{
var G__9039 = (i__9035 + 1);
var G__9040 = (j__9036 + 2);
var G__9041 = (bitmap__9037 | (1 << i__9035));
i__9035 = G__9039;
j__9036 = G__9040;
bitmap__9037 = G__9041;
continue;
}
} else
{{
var G__9042 = (i__9035 + 1);
var G__9043 = j__9036;
var G__9044 = bitmap__9037;
i__9035 = G__9042;
j__9036 = G__9043;
bitmap__9037 = G__9044;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__9037,new_arr__9034));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9045 = this;
var inode__9046 = this;
var idx__9047 = ((hash >>> shift) & 0x01f);
var node__9048 = (this__9045.arr[idx__9047]);
if((null == node__9048))
{return (new cljs.core.ArrayNode(null,(this__9045.cnt + 1),cljs.core.clone_and_set.call(null,this__9045.arr,idx__9047,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__9049 = node__9048.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9049 === node__9048))
{return inode__9046;
} else
{return (new cljs.core.ArrayNode(null,this__9045.cnt,cljs.core.clone_and_set.call(null,this__9045.arr,idx__9047,n__9049)));
}
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__9050 = this;
var inode__9051 = this;
var idx__9052 = ((hash >>> shift) & 0x01f);
var node__9053 = (this__9050.arr[idx__9052]);
if((null != node__9053))
{var n__9054 = node__9053.inode_without((shift + 5),hash,key);
if((n__9054 === node__9053))
{return inode__9051;
} else
{if((n__9054 == null))
{if((this__9050.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9051,null,idx__9052);
} else
{return (new cljs.core.ArrayNode(null,(this__9050.cnt - 1),cljs.core.clone_and_set.call(null,this__9050.arr,idx__9052,n__9054)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__9050.cnt,cljs.core.clone_and_set.call(null,this__9050.arr,idx__9052,n__9054)));
} else
{return null;
}
}
}
} else
{return inode__9051;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function() {
var G__9086 = null;
var G__9086__3 = (function (shift,hash,key){
var this__9055 = this;
var inode__9056 = this;
var idx__9057 = ((hash >>> shift) & 0x01f);
var node__9058 = (this__9055.arr[idx__9057]);
if((null != node__9058))
{return node__9058.inode_find((shift + 5),hash,key);
} else
{return null;
}
});
var G__9086__4 = (function (shift,hash,key,not_found){
var this__9059 = this;
var inode__9060 = this;
var idx__9061 = ((hash >>> shift) & 0x01f);
var node__9062 = (this__9059.arr[idx__9061]);
if((null != node__9062))
{return node__9062.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
G__9086 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__9086__3.call(this,shift,hash,key);
case 4:
return G__9086__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9086;
})()
;
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__9063 = this;
var inode__9064 = this;
return cljs.core.create_array_node_seq.call(null,this__9063.arr);
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__9065 = this;
var inode__9066 = this;
if((e === this__9065.edit))
{return inode__9066;
} else
{return (new cljs.core.ArrayNode(e,this__9065.cnt,cljs.core.aclone.call(null,this__9065.arr)));
}
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9067 = this;
var inode__9068 = this;
var idx__9069 = ((hash >>> shift) & 0x01f);
var node__9070 = (this__9067.arr[idx__9069]);
if((null == node__9070))
{var editable__9071 = cljs.core.edit_and_set.call(null,inode__9068,edit,idx__9069,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__9071.cnt = (editable__9071.cnt + 1);
return editable__9071;
} else
{var n__9072 = node__9070.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9072 === node__9070))
{return inode__9068;
} else
{return cljs.core.edit_and_set.call(null,inode__9068,edit,idx__9069,n__9072);
}
}
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9073 = this;
var inode__9074 = this;
var idx__9075 = ((hash >>> shift) & 0x01f);
var node__9076 = (this__9073.arr[idx__9075]);
if((null == node__9076))
{return inode__9074;
} else
{var n__9077 = node__9076.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9077 === node__9076))
{return inode__9074;
} else
{if((null == n__9077))
{if((this__9073.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9074,edit,idx__9075);
} else
{var editable__9078 = cljs.core.edit_and_set.call(null,inode__9074,edit,idx__9075,n__9077);
editable__9078.cnt = (editable__9078.cnt - 1);
return editable__9078;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__9074,edit,idx__9075,n__9077);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__9079 = this;
var inode__9080 = this;
var len__9081 = this__9079.arr.length;
var i__9082 = 0;
var init__9083 = init;
while(true){
if((i__9082 < len__9081))
{var node__9084 = (this__9079.arr[i__9082]);
if((node__9084 != null))
{var init__9085 = node__9084.kv_reduce(f,init__9083);
if(cljs.core.reduced_QMARK_.call(null,init__9085))
{return cljs.core.deref.call(null,init__9085);
} else
{{
var G__9087 = (i__9082 + 1);
var G__9088 = init__9085;
i__9082 = G__9087;
init__9083 = G__9088;
continue;
}
}
} else
{return null;
}
} else
{return init__9083;
}
break;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__9089 = (2 * cnt);
var i__9090 = 0;
while(true){
if((i__9090 < lim__9089))
{if(cljs.core._EQ_.call(null,key,(arr[i__9090])))
{return i__9090;
} else
{{
var G__9091 = (i__9090 + 2);
i__9090 = G__9091;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9092 = this;
var inode__9093 = this;
if((hash === this__9092.collision_hash))
{var idx__9094 = cljs.core.hash_collision_node_find_index.call(null,this__9092.arr,this__9092.cnt,key);
if((idx__9094 === -1))
{var len__9095 = this__9092.arr.length;
var new_arr__9096 = cljs.core.make_array.call(null,(len__9095 + 2));
cljs.core.array_copy.call(null,this__9092.arr,0,new_arr__9096,0,len__9095);
(new_arr__9096[len__9095] = key);
(new_arr__9096[(len__9095 + 1)] = val);
(added_leaf_QMARK_[0] = true);
return (new cljs.core.HashCollisionNode(null,this__9092.collision_hash,(this__9092.cnt + 1),new_arr__9096));
} else
{if(cljs.core._EQ_.call(null,(this__9092.arr[idx__9094]),val))
{return inode__9093;
} else
{return (new cljs.core.HashCollisionNode(null,this__9092.collision_hash,this__9092.cnt,cljs.core.clone_and_set.call(null,this__9092.arr,(idx__9094 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9092.collision_hash >>> shift) & 0x01f)),[null,inode__9093])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__9097 = this;
var inode__9098 = this;
var idx__9099 = cljs.core.hash_collision_node_find_index.call(null,this__9097.arr,this__9097.cnt,key);
if((idx__9099 === -1))
{return inode__9098;
} else
{if((this__9097.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9097.collision_hash,(this__9097.cnt - 1),cljs.core.remove_pair.call(null,this__9097.arr,cljs.core.quot.call(null,idx__9099,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_find = (function() {
var G__9126 = null;
var G__9126__3 = (function (shift,hash,key){
var this__9100 = this;
var inode__9101 = this;
var idx__9102 = cljs.core.hash_collision_node_find_index.call(null,this__9100.arr,this__9100.cnt,key);
if((idx__9102 < 0))
{return null;
} else
{if(cljs.core._EQ_.call(null,key,(this__9100.arr[idx__9102])))
{return cljs.core.PersistentVector.fromArray([(this__9100.arr[idx__9102]),(this__9100.arr[(idx__9102 + 1)])]);
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
var G__9126__4 = (function (shift,hash,key,not_found){
var this__9103 = this;
var inode__9104 = this;
var idx__9105 = cljs.core.hash_collision_node_find_index.call(null,this__9103.arr,this__9103.cnt,key);
if((idx__9105 < 0))
{return not_found;
} else
{if(cljs.core._EQ_.call(null,key,(this__9103.arr[idx__9105])))
{return cljs.core.PersistentVector.fromArray([(this__9103.arr[idx__9105]),(this__9103.arr[(idx__9105 + 1)])]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
G__9126 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__9126__3.call(this,shift,hash,key);
case 4:
return G__9126__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9126;
})()
;
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9106 = this;
var inode__9107 = this;
return cljs.core.create_inode_seq.call(null,this__9106.arr);
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function() {
var G__9127 = null;
var G__9127__1 = (function (e){
var this__9108 = this;
var inode__9109 = this;
if((e === this__9108.edit))
{return inode__9109;
} else
{var new_arr__9110 = cljs.core.make_array.call(null,(2 * (this__9108.cnt + 1)));
cljs.core.array_copy.call(null,this__9108.arr,0,new_arr__9110,0,(2 * this__9108.cnt));
return (new cljs.core.HashCollisionNode(e,this__9108.collision_hash,this__9108.cnt,new_arr__9110));
}
});
var G__9127__3 = (function (e,count,array){
var this__9111 = this;
var inode__9112 = this;
if((e === this__9111.edit))
{this__9111.arr = array;
this__9111.cnt = count;
return inode__9112;
} else
{return (new cljs.core.HashCollisionNode(this__9111.edit,this__9111.collision_hash,count,array));
}
});
G__9127 = function(e,count,array){
switch(arguments.length){
case 1:
return G__9127__1.call(this,e);
case 3:
return G__9127__3.call(this,e,count,array);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9127;
})()
;
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9113 = this;
var inode__9114 = this;
if((hash === this__9113.collision_hash))
{var idx__9115 = cljs.core.hash_collision_node_find_index.call(null,this__9113.arr,this__9113.cnt,key);
if((idx__9115 === -1))
{if((this__9113.arr.length > (2 * this__9113.cnt)))
{var editable__9116 = cljs.core.edit_and_set.call(null,inode__9114,edit,(2 * this__9113.cnt),key,((2 * this__9113.cnt) + 1),val);
(added_leaf_QMARK_[0] = true);
editable__9116.cnt = (editable__9116.cnt + 1);
return editable__9116;
} else
{var len__9117 = this__9113.arr.length;
var new_arr__9118 = cljs.core.make_array.call(null,(len__9117 + 2));
cljs.core.array_copy.call(null,this__9113.arr,0,new_arr__9118,0,len__9117);
(new_arr__9118[len__9117] = key);
(new_arr__9118[(len__9117 + 1)] = val);
(added_leaf_QMARK_[0] = true);
return inode__9114.ensure_editable(edit,(this__9113.cnt + 1),new_arr__9118);
}
} else
{if(((this__9113.arr[(idx__9115 + 1)]) === val))
{return inode__9114;
} else
{return cljs.core.edit_and_set.call(null,inode__9114,edit,(idx__9115 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9113.collision_hash >>> shift) & 0x01f)),[null,inode__9114,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9119 = this;
var inode__9120 = this;
var idx__9121 = cljs.core.hash_collision_node_find_index.call(null,this__9119.arr,this__9119.cnt,key);
if((idx__9121 === -1))
{return inode__9120;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9119.cnt === 1))
{return null;
} else
{var editable__9122 = inode__9120.ensure_editable(edit);
var earr__9123 = editable__9122.arr;
(earr__9123[idx__9121] = (earr__9123[((2 * this__9119.cnt) - 2)]));
(earr__9123[(idx__9121 + 1)] = (earr__9123[((2 * this__9119.cnt) - 1)]));
(earr__9123[((2 * this__9119.cnt) - 1)] = null);
(earr__9123[((2 * this__9119.cnt) - 2)] = null);
editable__9122.cnt = (editable__9122.cnt - 1);
return editable__9122;
}
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9124 = this;
var inode__9125 = this;
return cljs.core.inode_kv_reduce.call(null,this__9124.arr,f,init);
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9128 = cljs.core.hash.call(null,key1);
if((key1hash__9128 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9128,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9129 = [false];
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9128,key1,val1,added_leaf_QMARK___9129).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9129);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9130 = cljs.core.hash.call(null,key1);
if((key1hash__9130 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9130,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9131 = [false];
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9130,key1,val1,added_leaf_QMARK___9131).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9131);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9132 = this;
var h__2226__auto____9133 = this__9132.__hash;
if((h__2226__auto____9133 != null))
{return h__2226__auto____9133;
} else
{var h__2226__auto____9134 = cljs.core.hash_coll.call(null,coll);
this__9132.__hash = h__2226__auto____9134;
return h__2226__auto____9134;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9135 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9136 = this;
var this$__9137 = this;
return cljs.core.pr_str.call(null,this$__9137);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9138 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9139 = this;
if((this__9139.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9139.nodes[this__9139.i]),(this__9139.nodes[(this__9139.i + 1)])]);
} else
{return cljs.core.first.call(null,this__9139.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9140 = this;
if((this__9140.s == null))
{return cljs.core.create_inode_seq.call(null,this__9140.nodes,(this__9140.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__9140.nodes,this__9140.i,cljs.core.next.call(null,this__9140.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9141 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9142 = this;
return (new cljs.core.NodeSeq(meta,this__9142.nodes,this__9142.i,this__9142.s,this__9142.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9143 = this;
return this__9143.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9144 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9144.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9145 = nodes.length;
var j__9146 = i;
while(true){
if((j__9146 < len__9145))
{if((null != (nodes[j__9146])))
{return (new cljs.core.NodeSeq(null,nodes,j__9146,null,null));
} else
{var temp__3695__auto____9147 = (nodes[(j__9146 + 1)]);
if(cljs.core.truth_(temp__3695__auto____9147))
{var node__9148 = temp__3695__auto____9147;
var temp__3695__auto____9149 = node__9148.inode_seq();
if(cljs.core.truth_(temp__3695__auto____9149))
{var node_seq__9150 = temp__3695__auto____9149;
return (new cljs.core.NodeSeq(null,nodes,(j__9146 + 2),node_seq__9150,null));
} else
{{
var G__9151 = (j__9146 + 2);
j__9146 = G__9151;
continue;
}
}
} else
{{
var G__9152 = (j__9146 + 2);
j__9146 = G__9152;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9153 = this;
var h__2226__auto____9154 = this__9153.__hash;
if((h__2226__auto____9154 != null))
{return h__2226__auto____9154;
} else
{var h__2226__auto____9155 = cljs.core.hash_coll.call(null,coll);
this__9153.__hash = h__2226__auto____9155;
return h__2226__auto____9155;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9156 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9157 = this;
var this$__9158 = this;
return cljs.core.pr_str.call(null,this$__9158);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9159 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9160 = this;
return cljs.core.first.call(null,this__9160.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9161 = this;
return cljs.core.create_array_node_seq.call(null,null,this__9161.nodes,this__9161.i,cljs.core.next.call(null,this__9161.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9162 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9163 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9163.nodes,this__9163.i,this__9163.s,this__9163.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9164 = this;
return this__9164.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9165 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9165.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9166 = nodes.length;
var j__9167 = i;
while(true){
if((j__9167 < len__9166))
{var temp__3695__auto____9168 = (nodes[j__9167]);
if(cljs.core.truth_(temp__3695__auto____9168))
{var nj__9169 = temp__3695__auto____9168;
var temp__3695__auto____9170 = nj__9169.inode_seq();
if(cljs.core.truth_(temp__3695__auto____9170))
{var ns__9171 = temp__3695__auto____9170;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9167 + 1),ns__9171,null));
} else
{{
var G__9172 = (j__9167 + 1);
j__9167 = G__9172;
continue;
}
}
} else
{{
var G__9173 = (j__9167 + 1);
j__9167 = G__9173;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155545487;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9178 = this;
return (new cljs.core.TransientHashMap({},this__9178.root,this__9178.cnt,this__9178.has_nil_QMARK_,this__9178.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9179 = this;
var h__2226__auto____9180 = this__9179.__hash;
if((h__2226__auto____9180 != null))
{return h__2226__auto____9180;
} else
{var h__2226__auto____9181 = cljs.core.hash_imap.call(null,coll);
this__9179.__hash = h__2226__auto____9181;
return h__2226__auto____9181;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9182 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9183 = this;
if((k == null))
{if(cljs.core.truth_(this__9183.has_nil_QMARK_))
{return this__9183.nil_val;
} else
{return not_found;
}
} else
{if((this__9183.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return cljs.core.nth.call(null,this__9183.root.inode_find(0,cljs.core.hash.call(null,k),k,[null,not_found]),1);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9184 = this;
if((k == null))
{if(cljs.core.truth_((function (){var and__3546__auto____9185 = this__9184.has_nil_QMARK_;
if(cljs.core.truth_(and__3546__auto____9185))
{return (v === this__9184.nil_val);
} else
{return and__3546__auto____9185;
}
})()))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9184.meta,(cljs.core.truth_(this__9184.has_nil_QMARK_)?this__9184.cnt:(this__9184.cnt + 1)),this__9184.root,true,v,null));
}
} else
{var added_leaf_QMARK___9186 = [false];
var new_root__9187 = (((this__9184.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9184.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9186);
if((new_root__9187 === this__9184.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9184.meta,(cljs.core.truth_((added_leaf_QMARK___9186[0]))?(this__9184.cnt + 1):this__9184.cnt),new_root__9187,this__9184.has_nil_QMARK_,this__9184.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9188 = this;
if((k == null))
{return this__9188.has_nil_QMARK_;
} else
{if((this__9188.root == null))
{return false;
} else
{if("\uFDD0'else")
{return cljs.core.not.call(null,(this__9188.root.inode_find(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9209 = null;
var G__9209__2 = (function (tsym9176,k){
var this__9189 = this;
var tsym9176__9190 = this;
var coll__9191 = tsym9176__9190;
return cljs.core._lookup.call(null,coll__9191,k);
});
var G__9209__3 = (function (tsym9177,k,not_found){
var this__9192 = this;
var tsym9177__9193 = this;
var coll__9194 = tsym9177__9193;
return cljs.core._lookup.call(null,coll__9194,k,not_found);
});
G__9209 = function(tsym9177,k,not_found){
switch(arguments.length){
case 2:
return G__9209__2.call(this,tsym9177,k);
case 3:
return G__9209__3.call(this,tsym9177,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9209;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (tsym9174,args9175){
return tsym9174.call.apply(tsym9174,[tsym9174].concat(cljs.core.aclone.call(null,args9175)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9195 = this;
var init__9196 = (cljs.core.truth_(this__9195.has_nil_QMARK_)?f.call(null,init,null,this__9195.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__9196))
{return cljs.core.deref.call(null,init__9196);
} else
{if((null != this__9195.root))
{return this__9195.root.kv_reduce(f,init__9196);
} else
{if("\uFDD0'else")
{return init__9196;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9197 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9198 = this;
var this$__9199 = this;
return cljs.core.pr_str.call(null,this$__9199);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9200 = this;
if((this__9200.cnt > 0))
{var s__9201 = (((null != this__9200.root))?this__9200.root.inode_seq():null);
if(cljs.core.truth_(this__9200.has_nil_QMARK_))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__9200.nil_val]),s__9201);
} else
{return s__9201;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9202 = this;
return this__9202.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9203 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9204 = this;
return (new cljs.core.PersistentHashMap(meta,this__9204.cnt,this__9204.root,this__9204.has_nil_QMARK_,this__9204.nil_val,this__9204.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9205 = this;
return this__9205.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9206 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__9206.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9207 = this;
if((k == null))
{if(cljs.core.truth_(this__9207.has_nil_QMARK_))
{return (new cljs.core.PersistentHashMap(this__9207.meta,(this__9207.cnt - 1),this__9207.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9207.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9208 = this__9207.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__9208 === this__9207.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9207.meta,(this__9207.cnt - 1),new_root__9208,this__9207.has_nil_QMARK_,this__9207.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__9210 = ks.length;
var i__9211 = 0;
var out__9212 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9211 < len__9210))
{{
var G__9213 = (i__9211 + 1);
var G__9214 = cljs.core.assoc_BANG_.call(null,out__9212,(ks[i__9211]),(vs[i__9211]));
i__9211 = G__9213;
out__9212 = G__9214;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9212);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 7;
this.cljs$lang$protocol_mask$partition0$ = 130;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9215 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9216 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9217 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9218 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9219 = this;
if((k == null))
{if(cljs.core.truth_(this__9219.has_nil_QMARK_))
{return this__9219.nil_val;
} else
{return null;
}
} else
{if((this__9219.root == null))
{return null;
} else
{return cljs.core.nth.call(null,this__9219.root.inode_find(0,cljs.core.hash.call(null,k),k),1);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9220 = this;
if((k == null))
{if(cljs.core.truth_(this__9220.has_nil_QMARK_))
{return this__9220.nil_val;
} else
{return not_found;
}
} else
{if((this__9220.root == null))
{return not_found;
} else
{return cljs.core.nth.call(null,this__9220.root.inode_find(0,cljs.core.hash.call(null,k),k,[null,not_found]),1);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9221 = this;
if(cljs.core.truth_(this__9221.edit))
{return this__9221.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9222 = this;
var tcoll__9223 = this;
if(cljs.core.truth_(this__9222.edit))
{if((function (){var G__9224__9225 = o;
if((G__9224__9225 != null))
{if((function (){var or__3548__auto____9226 = (G__9224__9225.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3548__auto____9226)
{return or__3548__auto____9226;
} else
{return G__9224__9225.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9224__9225.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9224__9225);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9224__9225);
}
})())
{return tcoll__9223.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9227 = cljs.core.seq.call(null,o);
var tcoll__9228 = tcoll__9223;
while(true){
var temp__3695__auto____9229 = cljs.core.first.call(null,es__9227);
if(cljs.core.truth_(temp__3695__auto____9229))
{var e__9230 = temp__3695__auto____9229;
{
var G__9241 = cljs.core.next.call(null,es__9227);
var G__9242 = tcoll__9228.assoc_BANG_(cljs.core.key.call(null,e__9230),cljs.core.val.call(null,e__9230));
es__9227 = G__9241;
tcoll__9228 = G__9242;
continue;
}
} else
{return tcoll__9228;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9231 = this;
var tcoll__9232 = this;
if(cljs.core.truth_(this__9231.edit))
{if((k == null))
{if((this__9231.nil_val === v))
{} else
{this__9231.nil_val = v;
}
if(cljs.core.truth_(this__9231.has_nil_QMARK_))
{} else
{this__9231.count = (this__9231.count + 1);
this__9231.has_nil_QMARK_ = true;
}
return tcoll__9232;
} else
{var added_leaf_QMARK___9233 = [false];
var node__9234 = (((this__9231.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9231.root).inode_assoc_BANG_(this__9231.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9233);
if((node__9234 === this__9231.root))
{} else
{this__9231.root = node__9234;
}
if(cljs.core.truth_((added_leaf_QMARK___9233[0])))
{this__9231.count = (this__9231.count + 1);
} else
{}
return tcoll__9232;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9235 = this;
var tcoll__9236 = this;
if(cljs.core.truth_(this__9235.edit))
{if((k == null))
{if(cljs.core.truth_(this__9235.has_nil_QMARK_))
{this__9235.has_nil_QMARK_ = false;
this__9235.nil_val = null;
this__9235.count = (this__9235.count - 1);
return tcoll__9236;
} else
{return tcoll__9236;
}
} else
{if((this__9235.root == null))
{return tcoll__9236;
} else
{var removed_leaf_QMARK___9237 = [false];
var node__9238 = this__9235.root.inode_without_BANG_(this__9235.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9237);
if((node__9238 === this__9235.root))
{} else
{this__9235.root = node__9238;
}
if(cljs.core.truth_((removed_leaf_QMARK___9237[0])))
{this__9235.count = (this__9235.count - 1);
} else
{}
return tcoll__9236;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9239 = this;
var tcoll__9240 = this;
if(cljs.core.truth_(this__9239.edit))
{this__9239.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9239.count,this__9239.root,this__9239.has_nil_QMARK_,this__9239.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9243 = node;
var stack__9244 = stack;
while(true){
if((t__9243 != null))
{{
var G__9245 = (cljs.core.truth_(ascending_QMARK_)?t__9243.left:t__9243.right);
var G__9246 = cljs.core.conj.call(null,stack__9244,t__9243);
t__9243 = G__9245;
stack__9244 = G__9246;
continue;
}
} else
{return stack__9244;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925322;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9247 = this;
var h__2226__auto____9248 = this__9247.__hash;
if((h__2226__auto____9248 != null))
{return h__2226__auto____9248;
} else
{var h__2226__auto____9249 = cljs.core.hash_coll.call(null,coll);
this__9247.__hash = h__2226__auto____9249;
return h__2226__auto____9249;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9250 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9251 = this;
var this$__9252 = this;
return cljs.core.pr_str.call(null,this$__9252);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9253 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9254 = this;
if((this__9254.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9254.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9255 = this;
return cljs.core.peek.call(null,this__9255.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9256 = this;
var t__9257 = cljs.core.peek.call(null,this__9256.stack);
var next_stack__9258 = cljs.core.tree_map_seq_push.call(null,(cljs.core.truth_(this__9256.ascending_QMARK_)?t__9257.right:t__9257.left),cljs.core.pop.call(null,this__9256.stack),this__9256.ascending_QMARK_);
if((next_stack__9258 != null))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9258,this__9256.ascending_QMARK_,(this__9256.cnt - 1),null));
} else
{return null;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9259 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9260 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9260.stack,this__9260.ascending_QMARK_,this__9260.cnt,this__9260.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9261 = this;
return this__9261.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
void 0;
void 0;
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3546__auto____9262 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3546__auto____9262)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3546__auto____9262;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3546__auto____9263 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3546__auto____9263)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3546__auto____9263;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__9264 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9264))
{return cljs.core.deref.call(null,init__9264);
} else
{var init__9265 = (((node.left != null))?tree_map_kv_reduce.call(null,node.left,f,init__9264):init__9264);
if(cljs.core.reduced_QMARK_.call(null,init__9265))
{return cljs.core.deref.call(null,init__9265);
} else
{var init__9266 = (((node.right != null))?tree_map_kv_reduce.call(null,node.right,f,init__9265):init__9265);
if(cljs.core.reduced_QMARK_.call(null,init__9266))
{return cljs.core.deref.call(null,init__9266);
} else
{return init__9266;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16201119;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$ = true;
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9271 = this;
var h__2226__auto____9272 = this__9271.__hash;
if((h__2226__auto____9272 != null))
{return h__2226__auto____9272;
} else
{var h__2226__auto____9273 = cljs.core.hash_coll.call(null,coll);
this__9271.__hash = h__2226__auto____9273;
return h__2226__auto____9273;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$ = true;
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9274 = this;
return cljs.core._nth.call(null,node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9275 = this;
return cljs.core._nth.call(null,node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$ = true;
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9276 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9276.key,this__9276.val]),k,v);
});
cljs.core.BlackNode.prototype.cljs$core$IFn$ = true;
cljs.core.BlackNode.prototype.call = (function() {
var G__9323 = null;
var G__9323__2 = (function (tsym9269,k){
var this__9277 = this;
var tsym9269__9278 = this;
var node__9279 = tsym9269__9278;
return cljs.core._lookup.call(null,node__9279,k);
});
var G__9323__3 = (function (tsym9270,k,not_found){
var this__9280 = this;
var tsym9270__9281 = this;
var node__9282 = tsym9270__9281;
return cljs.core._lookup.call(null,node__9282,k,not_found);
});
G__9323 = function(tsym9270,k,not_found){
switch(arguments.length){
case 2:
return G__9323__2.call(this,tsym9270,k);
case 3:
return G__9323__3.call(this,tsym9270,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9323;
})()
;
cljs.core.BlackNode.prototype.apply = (function (tsym9267,args9268){
return tsym9267.call.apply(tsym9267,[tsym9267].concat(cljs.core.aclone.call(null,args9268)));
});
cljs.core.BlackNode.prototype.cljs$core$ISequential$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICollection$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9283 = this;
return cljs.core.PersistentVector.fromArray([this__9283.key,this__9283.val,o]);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$ = true;
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9284 = this;
return this__9284.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9285 = this;
return this__9285.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9286 = this;
var node__9287 = this;
return ins.balance_right(node__9287);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9288 = this;
var node__9289 = this;
return (new cljs.core.RedNode(this__9288.key,this__9288.val,this__9288.left,this__9288.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9290 = this;
var node__9291 = this;
return cljs.core.balance_right_del.call(null,this__9290.key,this__9290.val,this__9290.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9292 = this;
var node__9293 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9294 = this;
var node__9295 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9295,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9296 = this;
var node__9297 = this;
return cljs.core.balance_left_del.call(null,this__9296.key,this__9296.val,del,this__9296.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9298 = this;
var node__9299 = this;
return ins.balance_left(node__9299);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9300 = this;
var node__9301 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9301,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9324 = null;
var G__9324__0 = (function (){
var this__9304 = this;
var this$__9305 = this;
return cljs.core.pr_str.call(null,this$__9305);
});
G__9324 = function(){
switch(arguments.length){
case 0:
return G__9324__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9324;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9306 = this;
var node__9307 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9307,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9308 = this;
var node__9309 = this;
return node__9309;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$ = true;
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9310 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9311 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$ = true;
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9312 = this;
return cljs.core.list.call(null,this__9312.key,this__9312.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9314 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$ = true;
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9315 = this;
return this__9315.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9316 = this;
return cljs.core.PersistentVector.fromArray([this__9316.key]);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$ = true;
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9317 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9317.key,this__9317.val]),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$ = true;
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9318 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$ = true;
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9319 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9319.key,this__9319.val]),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$ = true;
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9320 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$ = true;
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9321 = this;
if((n === 0))
{return this__9321.key;
} else
{if((n === 1))
{return this__9321.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9322 = this;
if((n === 0))
{return this__9322.key;
} else
{if((n === 1))
{return this__9322.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9313 = this;
return cljs.core.PersistentVector.fromArray([]);
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16201119;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$ = true;
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9329 = this;
var h__2226__auto____9330 = this__9329.__hash;
if((h__2226__auto____9330 != null))
{return h__2226__auto____9330;
} else
{var h__2226__auto____9331 = cljs.core.hash_coll.call(null,coll);
this__9329.__hash = h__2226__auto____9331;
return h__2226__auto____9331;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$ = true;
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9332 = this;
return cljs.core._nth.call(null,node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9333 = this;
return cljs.core._nth.call(null,node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$ = true;
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9334 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9334.key,this__9334.val]),k,v);
});
cljs.core.RedNode.prototype.cljs$core$IFn$ = true;
cljs.core.RedNode.prototype.call = (function() {
var G__9381 = null;
var G__9381__2 = (function (tsym9327,k){
var this__9335 = this;
var tsym9327__9336 = this;
var node__9337 = tsym9327__9336;
return cljs.core._lookup.call(null,node__9337,k);
});
var G__9381__3 = (function (tsym9328,k,not_found){
var this__9338 = this;
var tsym9328__9339 = this;
var node__9340 = tsym9328__9339;
return cljs.core._lookup.call(null,node__9340,k,not_found);
});
G__9381 = function(tsym9328,k,not_found){
switch(arguments.length){
case 2:
return G__9381__2.call(this,tsym9328,k);
case 3:
return G__9381__3.call(this,tsym9328,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9381;
})()
;
cljs.core.RedNode.prototype.apply = (function (tsym9325,args9326){
return tsym9325.call.apply(tsym9325,[tsym9325].concat(cljs.core.aclone.call(null,args9326)));
});
cljs.core.RedNode.prototype.cljs$core$ISequential$ = true;
cljs.core.RedNode.prototype.cljs$core$ICollection$ = true;
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9341 = this;
return cljs.core.PersistentVector.fromArray([this__9341.key,this__9341.val,o]);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$ = true;
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9342 = this;
return this__9342.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9343 = this;
return this__9343.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9344 = this;
var node__9345 = this;
return (new cljs.core.RedNode(this__9344.key,this__9344.val,this__9344.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9346 = this;
var node__9347 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9348 = this;
var node__9349 = this;
return (new cljs.core.RedNode(this__9348.key,this__9348.val,this__9348.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9350 = this;
var node__9351 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9352 = this;
var node__9353 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9353,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9354 = this;
var node__9355 = this;
return (new cljs.core.RedNode(this__9354.key,this__9354.val,del,this__9354.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9356 = this;
var node__9357 = this;
return (new cljs.core.RedNode(this__9356.key,this__9356.val,ins,this__9356.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9358 = this;
var node__9359 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9358.left))
{return (new cljs.core.RedNode(this__9358.key,this__9358.val,this__9358.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9358.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9358.right))
{return (new cljs.core.RedNode(this__9358.right.key,this__9358.right.val,(new cljs.core.BlackNode(this__9358.key,this__9358.val,this__9358.left,this__9358.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9358.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9359,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9382 = null;
var G__9382__0 = (function (){
var this__9362 = this;
var this$__9363 = this;
return cljs.core.pr_str.call(null,this$__9363);
});
G__9382 = function(){
switch(arguments.length){
case 0:
return G__9382__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9382;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9364 = this;
var node__9365 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9364.right))
{return (new cljs.core.RedNode(this__9364.key,this__9364.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9364.left,null)),this__9364.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9364.left))
{return (new cljs.core.RedNode(this__9364.left.key,this__9364.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9364.left.left,null)),(new cljs.core.BlackNode(this__9364.key,this__9364.val,this__9364.left.right,this__9364.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9365,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9366 = this;
var node__9367 = this;
return (new cljs.core.BlackNode(this__9366.key,this__9366.val,this__9366.left,this__9366.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$ = true;
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9368 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9369 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$ = true;
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9370 = this;
return cljs.core.list.call(null,this__9370.key,this__9370.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$ = true;
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9372 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$ = true;
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9373 = this;
return this__9373.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9374 = this;
return cljs.core.PersistentVector.fromArray([this__9374.key]);
});
cljs.core.RedNode.prototype.cljs$core$IVector$ = true;
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9375 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9375.key,this__9375.val]),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$ = true;
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9376 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$ = true;
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9377 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9377.key,this__9377.val]),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$ = true;
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9378 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$ = true;
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9379 = this;
if((n === 0))
{return this__9379.key;
} else
{if((n === 1))
{return this__9379.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9380 = this;
if((n === 0))
{return this__9380.key;
} else
{if((n === 1))
{return this__9380.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9371 = this;
return cljs.core.PersistentVector.fromArray([]);
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9383 = comp.call(null,k,tree.key);
if((c__9383 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9383 < 0))
{var ins__9384 = tree_map_add.call(null,comp,tree.left,k,v,found);
if((ins__9384 != null))
{return tree.add_left(ins__9384);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9385 = tree_map_add.call(null,comp,tree.right,k,v,found);
if((ins__9385 != null))
{return tree.add_right(ins__9385);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__9386 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9386))
{return (new cljs.core.RedNode(app__9386.key,app__9386.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9386.left)),(new cljs.core.RedNode(right.key,right.val,app__9386.right,right.right)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9386,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9387 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9387))
{return (new cljs.core.RedNode(app__9387.key,app__9387.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9387.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9387.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9387,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if((tree != null))
{var c__9388 = comp.call(null,k,tree.key);
if((c__9388 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9388 < 0))
{var del__9389 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3548__auto____9390 = (del__9389 != null);
if(or__3548__auto____9390)
{return or__3548__auto____9390;
} else
{return ((found[0]) != null);
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9389,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9389,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9391 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3548__auto____9392 = (del__9391 != null);
if(or__3548__auto____9392)
{return or__3548__auto____9392;
} else
{return ((found[0]) != null);
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9391);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9391,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__9393 = tree.key;
var c__9394 = comp.call(null,k,tk__9393);
if((c__9394 === 0))
{return tree.replace(tk__9393,v,tree.left,tree.right);
} else
{if((c__9394 < 0))
{return tree.replace(tk__9393,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9393,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 209388431;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9399 = this;
var h__2226__auto____9400 = this__9399.__hash;
if((h__2226__auto____9400 != null))
{return h__2226__auto____9400;
} else
{var h__2226__auto____9401 = cljs.core.hash_imap.call(null,coll);
this__9399.__hash = h__2226__auto____9401;
return h__2226__auto____9401;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9402 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9403 = this;
var n__9404 = coll.entry_at(k);
if((n__9404 != null))
{return n__9404.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9405 = this;
var found__9406 = [null];
var t__9407 = cljs.core.tree_map_add.call(null,this__9405.comp,this__9405.tree,k,v,found__9406);
if((t__9407 == null))
{var found_node__9408 = cljs.core.nth.call(null,found__9406,0);
if(cljs.core._EQ_.call(null,v,found_node__9408.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9405.comp,cljs.core.tree_map_replace.call(null,this__9405.comp,this__9405.tree,k,v),this__9405.cnt,this__9405.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9405.comp,t__9407.blacken(),(this__9405.cnt + 1),this__9405.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9409 = this;
return (coll.entry_at(k) != null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9441 = null;
var G__9441__2 = (function (tsym9397,k){
var this__9410 = this;
var tsym9397__9411 = this;
var coll__9412 = tsym9397__9411;
return cljs.core._lookup.call(null,coll__9412,k);
});
var G__9441__3 = (function (tsym9398,k,not_found){
var this__9413 = this;
var tsym9398__9414 = this;
var coll__9415 = tsym9398__9414;
return cljs.core._lookup.call(null,coll__9415,k,not_found);
});
G__9441 = function(tsym9398,k,not_found){
switch(arguments.length){
case 2:
return G__9441__2.call(this,tsym9398,k);
case 3:
return G__9441__3.call(this,tsym9398,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9441;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (tsym9395,args9396){
return tsym9395.call.apply(tsym9395,[tsym9395].concat(cljs.core.aclone.call(null,args9396)));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9416 = this;
if((this__9416.tree != null))
{return cljs.core.tree_map_kv_reduce.call(null,this__9416.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9417 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9418 = this;
if((this__9418.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9418.tree,false,this__9418.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9419 = this;
var this$__9420 = this;
return cljs.core.pr_str.call(null,this$__9420);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9421 = this;
var coll__9422 = this;
var t__9423 = this__9421.tree;
while(true){
if((t__9423 != null))
{var c__9424 = this__9421.comp.call(null,k,t__9423.key);
if((c__9424 === 0))
{return t__9423;
} else
{if((c__9424 < 0))
{{
var G__9442 = t__9423.left;
t__9423 = G__9442;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9443 = t__9423.right;
t__9423 = G__9443;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9425 = this;
if((this__9425.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9425.tree,ascending_QMARK_,this__9425.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9426 = this;
if((this__9426.cnt > 0))
{var stack__9427 = null;
var t__9428 = this__9426.tree;
while(true){
if((t__9428 != null))
{var c__9429 = this__9426.comp.call(null,k,t__9428.key);
if((c__9429 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9427,t__9428),ascending_QMARK_,-1));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9429 < 0))
{{
var G__9444 = cljs.core.conj.call(null,stack__9427,t__9428);
var G__9445 = t__9428.left;
stack__9427 = G__9444;
t__9428 = G__9445;
continue;
}
} else
{{
var G__9446 = stack__9427;
var G__9447 = t__9428.right;
stack__9427 = G__9446;
t__9428 = G__9447;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9429 > 0))
{{
var G__9448 = cljs.core.conj.call(null,stack__9427,t__9428);
var G__9449 = t__9428.right;
stack__9427 = G__9448;
t__9428 = G__9449;
continue;
}
} else
{{
var G__9450 = stack__9427;
var G__9451 = t__9428.left;
stack__9427 = G__9450;
t__9428 = G__9451;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9427 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9427,ascending_QMARK_,-1));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9430 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9431 = this;
return this__9431.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9432 = this;
if((this__9432.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9432.tree,true,this__9432.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9433 = this;
return this__9433.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9434 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9435 = this;
return (new cljs.core.PersistentTreeMap(this__9435.comp,this__9435.tree,this__9435.cnt,meta,this__9435.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9439 = this;
return this__9439.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9440 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9440.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9436 = this;
var found__9437 = [null];
var t__9438 = cljs.core.tree_map_remove.call(null,this__9436.comp,this__9436.tree,k,found__9437);
if((t__9438 == null))
{if((cljs.core.nth.call(null,found__9437,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9436.comp,null,0,this__9436.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9436.comp,t__9438.blacken(),(this__9436.cnt - 1),this__9436.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__9452 = cljs.core.seq.call(null,keyvals);
var out__9453 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(cljs.core.truth_(in$__9452))
{{
var G__9454 = cljs.core.nnext.call(null,in$__9452);
var G__9455 = cljs.core.assoc_BANG_.call(null,out__9453,cljs.core.first.call(null,in$__9452),cljs.core.second.call(null,in$__9452));
in$__9452 = G__9454;
out__9453 = G__9455;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9453);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__9456){
var keyvals = cljs.core.seq(arglist__9456);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__9457){
var keyvals = cljs.core.seq(arglist__9457);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in$__9458 = cljs.core.seq.call(null,keyvals);
var out__9459 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(cljs.core.truth_(in$__9458))
{{
var G__9460 = cljs.core.nnext.call(null,in$__9458);
var G__9461 = cljs.core.assoc.call(null,out__9459,cljs.core.first.call(null,in$__9458),cljs.core.second.call(null,in$__9458));
in$__9458 = G__9460;
out__9459 = G__9461;
continue;
}
} else
{return out__9459;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__9462){
var keyvals = cljs.core.seq(arglist__9462);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in$__9463 = cljs.core.seq.call(null,keyvals);
var out__9464 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(cljs.core.truth_(in$__9463))
{{
var G__9465 = cljs.core.nnext.call(null,in$__9463);
var G__9466 = cljs.core.assoc.call(null,out__9464,cljs.core.first.call(null,in$__9463),cljs.core.second.call(null,in$__9463));
in$__9463 = G__9465;
out__9464 = G__9466;
continue;
}
} else
{return out__9464;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__9467){
var comparator = cljs.core.first(arglist__9467);
var keyvals = cljs.core.rest(arglist__9467);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__9468_SHARP_,p2__9469_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____9470 = p1__9468_SHARP_;
if(cljs.core.truth_(or__3548__auto____9470))
{return or__3548__auto____9470;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__9469_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__9471){
var maps = cljs.core.seq(arglist__9471);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__9474 = (function (m,e){
var k__9472 = cljs.core.first.call(null,e);
var v__9473 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9472))
{return cljs.core.assoc.call(null,m,k__9472,f.call(null,cljs.core.get.call(null,m,k__9472),v__9473));
} else
{return cljs.core.assoc.call(null,m,k__9472,v__9473);
}
});
var merge2__9476 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9474,(function (){var or__3548__auto____9475 = m1;
if(cljs.core.truth_(or__3548__auto____9475))
{return or__3548__auto____9475;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9476,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__9477){
var f = cljs.core.first(arglist__9477);
var maps = cljs.core.rest(arglist__9477);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__9478 = cljs.core.ObjMap.fromObject([],{});
var keys__9479 = cljs.core.seq.call(null,keyseq);
while(true){
if(cljs.core.truth_(keys__9479))
{var key__9480 = cljs.core.first.call(null,keys__9479);
var entry__9481 = cljs.core.get.call(null,map,key__9480,"\uFDD0'torrent-client.server/not-found");
{
var G__9482 = ((cljs.core.not_EQ_.call(null,entry__9481,"\uFDD0'torrent-client.server/not-found"))?cljs.core.assoc.call(null,ret__9478,key__9480,entry__9481):ret__9478);
var G__9483 = cljs.core.next.call(null,keys__9479);
ret__9478 = G__9482;
keys__9479 = G__9483;
continue;
}
} else
{return ret__9478;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155022479;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9489 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9489.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9490 = this;
var h__2226__auto____9491 = this__9490.__hash;
if((h__2226__auto____9491 != null))
{return h__2226__auto____9491;
} else
{var h__2226__auto____9492 = cljs.core.hash_iset.call(null,coll);
this__9490.__hash = h__2226__auto____9492;
return h__2226__auto____9492;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9493 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9494 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9494.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9513 = null;
var G__9513__2 = (function (tsym9487,k){
var this__9495 = this;
var tsym9487__9496 = this;
var coll__9497 = tsym9487__9496;
return cljs.core._lookup.call(null,coll__9497,k);
});
var G__9513__3 = (function (tsym9488,k,not_found){
var this__9498 = this;
var tsym9488__9499 = this;
var coll__9500 = tsym9488__9499;
return cljs.core._lookup.call(null,coll__9500,k,not_found);
});
G__9513 = function(tsym9488,k,not_found){
switch(arguments.length){
case 2:
return G__9513__2.call(this,tsym9488,k);
case 3:
return G__9513__3.call(this,tsym9488,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9513;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (tsym9485,args9486){
return tsym9485.call.apply(tsym9485,[tsym9485].concat(cljs.core.aclone.call(null,args9486)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9501 = this;
return (new cljs.core.PersistentHashSet(this__9501.meta,cljs.core.assoc.call(null,this__9501.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9502 = this;
var this$__9503 = this;
return cljs.core.pr_str.call(null,this$__9503);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9504 = this;
return cljs.core.keys.call(null,this__9504.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9505 = this;
return (new cljs.core.PersistentHashSet(this__9505.meta,cljs.core.dissoc.call(null,this__9505.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9506 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9507 = this;
var and__3546__auto____9508 = cljs.core.set_QMARK_.call(null,other);
if(and__3546__auto____9508)
{var and__3546__auto____9509 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3546__auto____9509)
{return cljs.core.every_QMARK_.call(null,(function (p1__9484_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9484_SHARP_);
}),other);
} else
{return and__3546__auto____9509;
}
} else
{return and__3546__auto____9508;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9510 = this;
return (new cljs.core.PersistentHashSet(meta,this__9510.hash_map,this__9510.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9511 = this;
return this__9511.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9512 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9512.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 131;
this.cljs$lang$protocol_mask$partition1$ = 17;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.TransientHashSet");
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$ = true;
cljs.core.TransientHashSet.prototype.call = (function() {
var G__9531 = null;
var G__9531__2 = (function (tsym9517,k){
var this__9519 = this;
var tsym9517__9520 = this;
var tcoll__9521 = tsym9517__9520;
if((cljs.core._lookup.call(null,this__9519.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9531__3 = (function (tsym9518,k,not_found){
var this__9522 = this;
var tsym9518__9523 = this;
var tcoll__9524 = tsym9518__9523;
if((cljs.core._lookup.call(null,this__9522.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9531 = function(tsym9518,k,not_found){
switch(arguments.length){
case 2:
return G__9531__2.call(this,tsym9518,k);
case 3:
return G__9531__3.call(this,tsym9518,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9531;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (tsym9515,args9516){
return tsym9515.call.apply(tsym9515,[tsym9515].concat(cljs.core.aclone.call(null,args9516)));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9525 = this;
return cljs.core._lookup.call(null,tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9526 = this;
if((cljs.core._lookup.call(null,this__9526.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9527 = this;
return cljs.core.count.call(null,this__9527.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9528 = this;
this__9528.transient_map = cljs.core.dissoc_BANG_.call(null,this__9528.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9529 = this;
this__9529.transient_map = cljs.core.assoc_BANG_.call(null,this__9529.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9530 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9530.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 208865423;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9536 = this;
var h__2226__auto____9537 = this__9536.__hash;
if((h__2226__auto____9537 != null))
{return h__2226__auto____9537;
} else
{var h__2226__auto____9538 = cljs.core.hash_iset.call(null,coll);
this__9536.__hash = h__2226__auto____9538;
return h__2226__auto____9538;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9539 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9540 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9540.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9564 = null;
var G__9564__2 = (function (tsym9534,k){
var this__9541 = this;
var tsym9534__9542 = this;
var coll__9543 = tsym9534__9542;
return cljs.core._lookup.call(null,coll__9543,k);
});
var G__9564__3 = (function (tsym9535,k,not_found){
var this__9544 = this;
var tsym9535__9545 = this;
var coll__9546 = tsym9535__9545;
return cljs.core._lookup.call(null,coll__9546,k,not_found);
});
G__9564 = function(tsym9535,k,not_found){
switch(arguments.length){
case 2:
return G__9564__2.call(this,tsym9535,k);
case 3:
return G__9564__3.call(this,tsym9535,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9564;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (tsym9532,args9533){
return tsym9532.call.apply(tsym9532,[tsym9532].concat(cljs.core.aclone.call(null,args9533)));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9547 = this;
return (new cljs.core.PersistentTreeSet(this__9547.meta,cljs.core.assoc.call(null,this__9547.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9548 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9548.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9549 = this;
var this$__9550 = this;
return cljs.core.pr_str.call(null,this$__9550);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9551 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9551.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9552 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9552.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9553 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9554 = this;
return cljs.core._comparator.call(null,this__9554.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9555 = this;
return cljs.core.keys.call(null,this__9555.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9556 = this;
return (new cljs.core.PersistentTreeSet(this__9556.meta,cljs.core.dissoc.call(null,this__9556.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9557 = this;
return cljs.core.count.call(null,this__9557.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9558 = this;
var and__3546__auto____9559 = cljs.core.set_QMARK_.call(null,other);
if(and__3546__auto____9559)
{var and__3546__auto____9560 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3546__auto____9560)
{return cljs.core.every_QMARK_.call(null,(function (p1__9514_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9514_SHARP_);
}),other);
} else
{return and__3546__auto____9560;
}
} else
{return and__3546__auto____9559;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9561 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9561.tree_map,this__9561.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9562 = this;
return this__9562.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9563 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9563.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__9565 = cljs.core.seq.call(null,coll);
var out__9566 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,in$__9565)))
{{
var G__9567 = cljs.core.next.call(null,in$__9565);
var G__9568 = cljs.core.conj_BANG_.call(null,out__9566,cljs.core.first.call(null,in$__9565));
in$__9565 = G__9567;
out__9566 = G__9568;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9566);
}
break;
}
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__9569){
var keys = cljs.core.seq(arglist__9569);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__9571){
var comparator = cljs.core.first(arglist__9571);
var keys = cljs.core.rest(arglist__9571);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__9572 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____9573 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3695__auto____9573))
{var e__9574 = temp__3695__auto____9573;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9574));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9572,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9570_SHARP_){
var temp__3695__auto____9575 = cljs.core.find.call(null,smap,p1__9570_SHARP_);
if(cljs.core.truth_(temp__3695__auto____9575))
{var e__9576 = temp__3695__auto____9575;
return cljs.core.second.call(null,e__9576);
} else
{return p1__9570_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9584 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9577,seen){
while(true){
var vec__9578__9579 = p__9577;
var f__9580 = cljs.core.nth.call(null,vec__9578__9579,0,null);
var xs__9581 = vec__9578__9579;
var temp__3698__auto____9582 = cljs.core.seq.call(null,xs__9581);
if(cljs.core.truth_(temp__3698__auto____9582))
{var s__9583 = temp__3698__auto____9582;
if(cljs.core.contains_QMARK_.call(null,seen,f__9580))
{{
var G__9585 = cljs.core.rest.call(null,s__9583);
var G__9586 = seen;
p__9577 = G__9585;
seen = G__9586;
continue;
}
} else
{return cljs.core.cons.call(null,f__9580,step.call(null,cljs.core.rest.call(null,s__9583),cljs.core.conj.call(null,seen,f__9580)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});
return step__9584.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__9587 = cljs.core.PersistentVector.fromArray([]);
var s__9588 = s;
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__9588)))
{{
var G__9589 = cljs.core.conj.call(null,ret__9587,cljs.core.first.call(null,s__9588));
var G__9590 = cljs.core.next.call(null,s__9588);
ret__9587 = G__9589;
s__9588 = G__9590;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9587);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3548__auto____9591 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3548__auto____9591)
{return or__3548__auto____9591;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9592 = x.lastIndexOf("/");
if((i__9592 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9592 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3548__auto____9593 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3548__auto____9593)
{return or__3548__auto____9593;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9594 = x.lastIndexOf("/");
if((i__9594 > -1))
{return cljs.core.subs.call(null,x,2,i__9594);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__9597 = cljs.core.ObjMap.fromObject([],{});
var ks__9598 = cljs.core.seq.call(null,keys);
var vs__9599 = cljs.core.seq.call(null,vals);
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9600 = ks__9598;
if(cljs.core.truth_(and__3546__auto____9600))
{return vs__9599;
} else
{return and__3546__auto____9600;
}
})()))
{{
var G__9601 = cljs.core.assoc.call(null,map__9597,cljs.core.first.call(null,ks__9598),cljs.core.first.call(null,vs__9599));
var G__9602 = cljs.core.next.call(null,ks__9598);
var G__9603 = cljs.core.next.call(null,vs__9599);
map__9597 = G__9601;
ks__9598 = G__9602;
vs__9599 = G__9603;
continue;
}
} else
{return map__9597;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__9606__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9595_SHARP_,p2__9596_SHARP_){
return max_key.call(null,k,p1__9595_SHARP_,p2__9596_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9606 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9606__delegate.call(this, k, x, y, more);
};
G__9606.cljs$lang$maxFixedArity = 3;
G__9606.cljs$lang$applyTo = (function (arglist__9607){
var k = cljs.core.first(arglist__9607);
var x = cljs.core.first(cljs.core.next(arglist__9607));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9607)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9607)));
return G__9606__delegate(k, x, y, more);
});
G__9606.cljs$lang$arity$variadic = G__9606__delegate;
return G__9606;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__9608__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9604_SHARP_,p2__9605_SHARP_){
return min_key.call(null,k,p1__9604_SHARP_,p2__9605_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9608 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9608__delegate.call(this, k, x, y, more);
};
G__9608.cljs$lang$maxFixedArity = 3;
G__9608.cljs$lang$applyTo = (function (arglist__9609){
var k = cljs.core.first(arglist__9609);
var x = cljs.core.first(cljs.core.next(arglist__9609));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9609)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9609)));
return G__9608__delegate(k, x, y, more);
});
G__9608.cljs$lang$arity$variadic = G__9608__delegate;
return G__9608;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9610 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____9610))
{var s__9611 = temp__3698__auto____9610;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9611),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9611)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9612 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____9612))
{var s__9613 = temp__3698__auto____9612;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9613))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9613),take_while.call(null,pred,cljs.core.rest.call(null,s__9613)));
} else
{return null;
}
} else
{return null;
}
})));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__9614 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9614.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__9615 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3698__auto____9616 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3698__auto____9616))
{var vec__9617__9618 = temp__3698__auto____9616;
var e__9619 = cljs.core.nth.call(null,vec__9617__9618,0,null);
var s__9620 = vec__9617__9618;
if(cljs.core.truth_(include__9615.call(null,e__9619)))
{return s__9620;
} else
{return cljs.core.next.call(null,s__9620);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9615,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3698__auto____9621 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3698__auto____9621))
{var vec__9622__9623 = temp__3698__auto____9621;
var e__9624 = cljs.core.nth.call(null,vec__9622__9623,0,null);
var s__9625 = vec__9622__9623;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9624))?s__9625:cljs.core.next.call(null,s__9625)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__9626 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3698__auto____9627 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3698__auto____9627))
{var vec__9628__9629 = temp__3698__auto____9627;
var e__9630 = cljs.core.nth.call(null,vec__9628__9629,0,null);
var s__9631 = vec__9628__9629;
if(cljs.core.truth_(include__9626.call(null,e__9630)))
{return s__9631;
} else
{return cljs.core.next.call(null,s__9631);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9626,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3698__auto____9632 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3698__auto____9632))
{var vec__9633__9634 = temp__3698__auto____9632;
var e__9635 = cljs.core.nth.call(null,vec__9633__9634,0,null);
var s__9636 = vec__9633__9634;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9635))?s__9636:cljs.core.next.call(null,s__9636)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16187486;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__9637 = this;
var h__2226__auto____9638 = this__9637.__hash;
if((h__2226__auto____9638 != null))
{return h__2226__auto____9638;
} else
{var h__2226__auto____9639 = cljs.core.hash_coll.call(null,rng);
this__9637.__hash = h__2226__auto____9639;
return h__2226__auto____9639;
}
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9640 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9641 = this;
var this$__9642 = this;
return cljs.core.pr_str.call(null,this$__9642);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9643 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9644 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9645 = this;
var comp__9646 = (((this__9645.step > 0))?cljs.core._LT_:cljs.core._GT_);
if(cljs.core.truth_(comp__9646.call(null,this__9645.start,this__9645.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9647 = this;
if(cljs.core.not.call(null,cljs.core._seq.call(null,rng)))
{return 0;
} else
{return Math['ceil'](((this__9647.end - this__9647.start) / this__9647.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9648 = this;
return this__9648.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9649 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__9649.meta,(this__9649.start + this__9649.step),this__9649.end,this__9649.step,null));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9650 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9651 = this;
return (new cljs.core.Range(meta,this__9651.start,this__9651.end,this__9651.step,this__9651.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9652 = this;
return this__9652.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9653 = this;
if((n < cljs.core._count.call(null,rng)))
{return (this__9653.start + (n * this__9653.step));
} else
{if((function (){var and__3546__auto____9654 = (this__9653.start > this__9653.end);
if(and__3546__auto____9654)
{return (this__9653.step === 0);
} else
{return and__3546__auto____9654;
}
})())
{return this__9653.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9655 = this;
if((n < cljs.core._count.call(null,rng)))
{return (this__9655.start + (n * this__9655.step));
} else
{if((function (){var and__3546__auto____9656 = (this__9655.start > this__9655.end);
if(and__3546__auto____9656)
{return (this__9655.step === 0);
} else
{return and__3546__auto____9656;
}
})())
{return this__9655.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9657 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9657.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9658 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____9658))
{var s__9659 = temp__3698__auto____9658;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9659),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9659)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9661 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____9661))
{var s__9662 = temp__3698__auto____9661;
var fst__9663 = cljs.core.first.call(null,s__9662);
var fv__9664 = f.call(null,fst__9663);
var run__9665 = cljs.core.cons.call(null,fst__9663,cljs.core.take_while.call(null,(function (p1__9660_SHARP_){
return cljs.core._EQ_.call(null,fv__9664,f.call(null,p1__9660_SHARP_));
}),cljs.core.next.call(null,s__9662)));
return cljs.core.cons.call(null,run__9665,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9665),s__9662))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.fromObject([],{})),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____9676 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3695__auto____9676))
{var s__9677 = temp__3695__auto____9676;
return reductions.call(null,f,cljs.core.first.call(null,s__9677),cljs.core.rest.call(null,s__9677));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9678 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____9678))
{var s__9679 = temp__3698__auto____9678;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9679)),cljs.core.rest.call(null,s__9679));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__9681 = null;
var G__9681__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9681__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9681__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9681__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9681__4 = (function() { 
var G__9682__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9682 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9682__delegate.call(this, x, y, z, args);
};
G__9682.cljs$lang$maxFixedArity = 3;
G__9682.cljs$lang$applyTo = (function (arglist__9683){
var x = cljs.core.first(arglist__9683);
var y = cljs.core.first(cljs.core.next(arglist__9683));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9683)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9683)));
return G__9682__delegate(x, y, z, args);
});
G__9682.cljs$lang$arity$variadic = G__9682__delegate;
return G__9682;
})()
;
G__9681 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9681__0.call(this);
case 1:
return G__9681__1.call(this,x);
case 2:
return G__9681__2.call(this,x,y);
case 3:
return G__9681__3.call(this,x,y,z);
default:
return G__9681__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9681.cljs$lang$maxFixedArity = 3;
G__9681.cljs$lang$applyTo = G__9681__4.cljs$lang$applyTo;
return G__9681;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9684 = null;
var G__9684__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9684__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9684__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9684__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9684__4 = (function() { 
var G__9685__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9685 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9685__delegate.call(this, x, y, z, args);
};
G__9685.cljs$lang$maxFixedArity = 3;
G__9685.cljs$lang$applyTo = (function (arglist__9686){
var x = cljs.core.first(arglist__9686);
var y = cljs.core.first(cljs.core.next(arglist__9686));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9686)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9686)));
return G__9685__delegate(x, y, z, args);
});
G__9685.cljs$lang$arity$variadic = G__9685__delegate;
return G__9685;
})()
;
G__9684 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9684__0.call(this);
case 1:
return G__9684__1.call(this,x);
case 2:
return G__9684__2.call(this,x,y);
case 3:
return G__9684__3.call(this,x,y,z);
default:
return G__9684__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9684.cljs$lang$maxFixedArity = 3;
G__9684.cljs$lang$applyTo = G__9684__4.cljs$lang$applyTo;
return G__9684;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9687 = null;
var G__9687__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9687__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9687__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9687__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9687__4 = (function() { 
var G__9688__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9688 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9688__delegate.call(this, x, y, z, args);
};
G__9688.cljs$lang$maxFixedArity = 3;
G__9688.cljs$lang$applyTo = (function (arglist__9689){
var x = cljs.core.first(arglist__9689);
var y = cljs.core.first(cljs.core.next(arglist__9689));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9689)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9689)));
return G__9688__delegate(x, y, z, args);
});
G__9688.cljs$lang$arity$variadic = G__9688__delegate;
return G__9688;
})()
;
G__9687 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9687__0.call(this);
case 1:
return G__9687__1.call(this,x);
case 2:
return G__9687__2.call(this,x,y);
case 3:
return G__9687__3.call(this,x,y,z);
default:
return G__9687__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9687.cljs$lang$maxFixedArity = 3;
G__9687.cljs$lang$applyTo = G__9687__4.cljs$lang$applyTo;
return G__9687;
})()
});
var juxt__4 = (function() { 
var G__9690__delegate = function (f,g,h,fs){
var fs__9680 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9691 = null;
var G__9691__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9666_SHARP_,p2__9667_SHARP_){
return cljs.core.conj.call(null,p1__9666_SHARP_,p2__9667_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__9680);
});
var G__9691__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9668_SHARP_,p2__9669_SHARP_){
return cljs.core.conj.call(null,p1__9668_SHARP_,p2__9669_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__9680);
});
var G__9691__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9670_SHARP_,p2__9671_SHARP_){
return cljs.core.conj.call(null,p1__9670_SHARP_,p2__9671_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__9680);
});
var G__9691__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9672_SHARP_,p2__9673_SHARP_){
return cljs.core.conj.call(null,p1__9672_SHARP_,p2__9673_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__9680);
});
var G__9691__4 = (function() { 
var G__9692__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9674_SHARP_,p2__9675_SHARP_){
return cljs.core.conj.call(null,p1__9674_SHARP_,cljs.core.apply.call(null,p2__9675_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__9680);
};
var G__9692 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9692__delegate.call(this, x, y, z, args);
};
G__9692.cljs$lang$maxFixedArity = 3;
G__9692.cljs$lang$applyTo = (function (arglist__9693){
var x = cljs.core.first(arglist__9693);
var y = cljs.core.first(cljs.core.next(arglist__9693));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9693)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9693)));
return G__9692__delegate(x, y, z, args);
});
G__9692.cljs$lang$arity$variadic = G__9692__delegate;
return G__9692;
})()
;
G__9691 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9691__0.call(this);
case 1:
return G__9691__1.call(this,x);
case 2:
return G__9691__2.call(this,x,y);
case 3:
return G__9691__3.call(this,x,y,z);
default:
return G__9691__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9691.cljs$lang$maxFixedArity = 3;
G__9691.cljs$lang$applyTo = G__9691__4.cljs$lang$applyTo;
return G__9691;
})()
};
var G__9690 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9690__delegate.call(this, f, g, h, fs);
};
G__9690.cljs$lang$maxFixedArity = 3;
G__9690.cljs$lang$applyTo = (function (arglist__9694){
var f = cljs.core.first(arglist__9694);
var g = cljs.core.first(cljs.core.next(arglist__9694));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9694)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9694)));
return G__9690__delegate(f, g, h, fs);
});
G__9690.cljs$lang$arity$variadic = G__9690__delegate;
return G__9690;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__9696 = cljs.core.next.call(null,coll);
coll = G__9696;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9695 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(and__3546__auto____9695))
{return (n > 0);
} else
{return and__3546__auto____9695;
}
})()))
{{
var G__9697 = (n - 1);
var G__9698 = cljs.core.next.call(null,coll);
n = G__9697;
coll = G__9698;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__9699 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9699),s))
{if((cljs.core.count.call(null,matches__9699) === 1))
{return cljs.core.first.call(null,matches__9699);
} else
{return cljs.core.vec.call(null,matches__9699);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__9700 = re.exec(s);
if((matches__9700 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9700) === 1))
{return cljs.core.first.call(null,matches__9700);
} else
{return cljs.core.vec.call(null,matches__9700);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9701 = cljs.core.re_find.call(null,re,s);
var match_idx__9702 = s.search(re);
var match_str__9703 = ((cljs.core.coll_QMARK_.call(null,match_data__9701))?cljs.core.first.call(null,match_data__9701):match_data__9701);
var post_match__9704 = cljs.core.subs.call(null,s,(match_idx__9702 + cljs.core.count.call(null,match_str__9703)));
if(cljs.core.truth_(match_data__9701))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9701,re_seq.call(null,re,post_match__9704));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9706__9707 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9708 = cljs.core.nth.call(null,vec__9706__9707,0,null);
var flags__9709 = cljs.core.nth.call(null,vec__9706__9707,1,null);
var pattern__9710 = cljs.core.nth.call(null,vec__9706__9707,2,null);
return (new RegExp(pattern__9710,flags__9709));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__9705_SHARP_){
return print_one.call(null,p1__9705_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____9711 = cljs.core.get.call(null,opts,"\uFDD0'meta");
if(cljs.core.truth_(and__3546__auto____9711))
{var and__3546__auto____9715 = (function (){var G__9712__9713 = obj;
if((G__9712__9713 != null))
{if((function (){var or__3548__auto____9714 = (G__9712__9713.cljs$lang$protocol_mask$partition0$ & 65536);
if(or__3548__auto____9714)
{return or__3548__auto____9714;
} else
{return G__9712__9713.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9712__9713.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9712__9713);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9712__9713);
}
})();
if(cljs.core.truth_(and__3546__auto____9715))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____9715;
}
} else
{return and__3546__auto____9711;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var and__3546__auto____9716 = (obj != null);
if(and__3546__auto____9716)
{return obj.cljs$lang$type;
} else
{return and__3546__auto____9716;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__9717__9718 = obj;
if((G__9717__9718 != null))
{if((function (){var or__3548__auto____9719 = (G__9717__9718.cljs$lang$protocol_mask$partition0$ & 268435456);
if(or__3548__auto____9719)
{return or__3548__auto____9719;
} else
{return G__9717__9718.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9717__9718.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9717__9718);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9717__9718);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__9720 = cljs.core.first.call(null,objs);
var sb__9721 = (new goog.string.StringBuffer());
var G__9722__9723 = cljs.core.seq.call(null,objs);
if(cljs.core.truth_(G__9722__9723))
{var obj__9724 = cljs.core.first.call(null,G__9722__9723);
var G__9722__9725 = G__9722__9723;
while(true){
if((obj__9724 === first_obj__9720))
{} else
{sb__9721.append(" ");
}
var G__9726__9727 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9724,opts));
if(cljs.core.truth_(G__9726__9727))
{var string__9728 = cljs.core.first.call(null,G__9726__9727);
var G__9726__9729 = G__9726__9727;
while(true){
sb__9721.append(string__9728);
var temp__3698__auto____9730 = cljs.core.next.call(null,G__9726__9729);
if(cljs.core.truth_(temp__3698__auto____9730))
{var G__9726__9731 = temp__3698__auto____9730;
{
var G__9734 = cljs.core.first.call(null,G__9726__9731);
var G__9735 = G__9726__9731;
string__9728 = G__9734;
G__9726__9729 = G__9735;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____9732 = cljs.core.next.call(null,G__9722__9725);
if(cljs.core.truth_(temp__3698__auto____9732))
{var G__9722__9733 = temp__3698__auto____9732;
{
var G__9736 = cljs.core.first.call(null,G__9722__9733);
var G__9737 = G__9722__9733;
obj__9724 = G__9736;
G__9722__9725 = G__9737;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9721;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__9738 = cljs.core.pr_sb.call(null,objs,opts);
sb__9738.append("\n");
return [cljs.core.str(sb__9738)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__9739 = cljs.core.first.call(null,objs);
var G__9740__9741 = cljs.core.seq.call(null,objs);
if(cljs.core.truth_(G__9740__9741))
{var obj__9742 = cljs.core.first.call(null,G__9740__9741);
var G__9740__9743 = G__9740__9741;
while(true){
if((obj__9742 === first_obj__9739))
{} else
{cljs.core.string_print.call(null," ");
}
var G__9744__9745 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9742,opts));
if(cljs.core.truth_(G__9744__9745))
{var string__9746 = cljs.core.first.call(null,G__9744__9745);
var G__9744__9747 = G__9744__9745;
while(true){
cljs.core.string_print.call(null,string__9746);
var temp__3698__auto____9748 = cljs.core.next.call(null,G__9744__9747);
if(cljs.core.truth_(temp__3698__auto____9748))
{var G__9744__9749 = temp__3698__auto____9748;
{
var G__9752 = cljs.core.first.call(null,G__9744__9749);
var G__9753 = G__9744__9749;
string__9746 = G__9752;
G__9744__9747 = G__9753;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____9750 = cljs.core.next.call(null,G__9740__9743);
if(cljs.core.truth_(temp__3698__auto____9750))
{var G__9740__9751 = temp__3698__auto____9750;
{
var G__9754 = cljs.core.first.call(null,G__9740__9751);
var G__9755 = G__9740__9751;
obj__9742 = G__9754;
G__9740__9743 = G__9755;
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
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"\uFDD0'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__9756){
var objs = cljs.core.seq(arglist__9756);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__9757){
var objs = cljs.core.seq(arglist__9757);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__9758){
var objs = cljs.core.seq(arglist__9758);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__9759){
var objs = cljs.core.seq(arglist__9759);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__9760){
var objs = cljs.core.seq(arglist__9760);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__9761){
var objs = cljs.core.seq(arglist__9761);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__9762){
var objs = cljs.core.seq(arglist__9762);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__9763){
var objs = cljs.core.seq(arglist__9763);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9764 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9764,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9765 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9765,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9766 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9766,"{",", ","}",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3698__auto____9767 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3698__auto____9767))
{var nspc__9768 = temp__3698__auto____9767;
return [cljs.core.str(nspc__9768),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3698__auto____9769 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3698__auto____9769))
{var nspc__9770 = temp__3698__auto____9769;
return [cljs.core.str(nspc__9770),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9771 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9771,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9772 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9772,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1345404928;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9773 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__9774 = this;
var G__9775__9776 = cljs.core.seq.call(null,this__9774.watches);
if(cljs.core.truth_(G__9775__9776))
{var G__9778__9780 = cljs.core.first.call(null,G__9775__9776);
var vec__9779__9781 = G__9778__9780;
var key__9782 = cljs.core.nth.call(null,vec__9779__9781,0,null);
var f__9783 = cljs.core.nth.call(null,vec__9779__9781,1,null);
var G__9775__9784 = G__9775__9776;
var G__9778__9785 = G__9778__9780;
var G__9775__9786 = G__9775__9784;
while(true){
var vec__9787__9788 = G__9778__9785;
var key__9789 = cljs.core.nth.call(null,vec__9787__9788,0,null);
var f__9790 = cljs.core.nth.call(null,vec__9787__9788,1,null);
var G__9775__9791 = G__9775__9786;
f__9790.call(null,key__9789,this$,oldval,newval);
var temp__3698__auto____9792 = cljs.core.next.call(null,G__9775__9791);
if(cljs.core.truth_(temp__3698__auto____9792))
{var G__9775__9793 = temp__3698__auto____9792;
{
var G__9800 = cljs.core.first.call(null,G__9775__9793);
var G__9801 = G__9775__9793;
G__9778__9785 = G__9800;
G__9775__9786 = G__9801;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__9794 = this;
return this$.watches = cljs.core.assoc.call(null,this__9794.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__9795 = this;
return this$.watches = cljs.core.dissoc.call(null,this__9795.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__9796 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__9796.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__9797 = this;
return this__9797.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9798 = this;
return this__9798.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__9799 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__9808__delegate = function (x,p__9802){
var map__9803__9804 = p__9802;
var map__9803__9805 = ((cljs.core.seq_QMARK_.call(null,map__9803__9804))?cljs.core.apply.call(null,cljs.core.hash_map,map__9803__9804):map__9803__9804);
var validator__9806 = cljs.core.get.call(null,map__9803__9805,"\uFDD0'validator");
var meta__9807 = cljs.core.get.call(null,map__9803__9805,"\uFDD0'meta");
return (new cljs.core.Atom(x,meta__9807,validator__9806,null));
};
var G__9808 = function (x,var_args){
var p__9802 = null;
if (goog.isDef(var_args)) {
  p__9802 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9808__delegate.call(this, x, p__9802);
};
G__9808.cljs$lang$maxFixedArity = 1;
G__9808.cljs$lang$applyTo = (function (arglist__9809){
var x = cljs.core.first(arglist__9809);
var p__9802 = cljs.core.rest(arglist__9809);
return G__9808__delegate(x, p__9802);
});
G__9808.cljs$lang$arity$variadic = G__9808__delegate;
return G__9808;
})()
;
atom = function(x,var_args){
var p__9802 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____9810 = a.validator;
if(cljs.core.truth_(temp__3698__auto____9810))
{var validate__9811 = temp__3698__auto____9810;
if(cljs.core.truth_(validate__9811.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",5905))))].join('')));
}
} else
{}
var old_value__9812 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__9812,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__9813__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__9813 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9813__delegate.call(this, a, f, x, y, z, more);
};
G__9813.cljs$lang$maxFixedArity = 5;
G__9813.cljs$lang$applyTo = (function (arglist__9814){
var a = cljs.core.first(arglist__9814);
var f = cljs.core.first(cljs.core.next(arglist__9814));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9814)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9814))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9814)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9814)))));
return G__9813__delegate(a, f, x, y, z, more);
});
G__9813.cljs$lang$arity$variadic = G__9813__delegate;
return G__9813;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9815){
var iref = cljs.core.first(arglist__9815);
var f = cljs.core.first(cljs.core.next(arglist__9815));
var args = cljs.core.rest(cljs.core.next(arglist__9815));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 536887296;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__9816 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__9816.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9817 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__9817.state,(function (p__9818){
var curr_state__9819 = p__9818;
var curr_state__9820 = ((cljs.core.seq_QMARK_.call(null,curr_state__9819))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__9819):curr_state__9819);
var done__9821 = cljs.core.get.call(null,curr_state__9820,"\uFDD0'done");
if(cljs.core.truth_(done__9821))
{return curr_state__9820;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__9817.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__9822__9823 = options;
var map__9822__9824 = ((cljs.core.seq_QMARK_.call(null,map__9822__9823))?cljs.core.apply.call(null,cljs.core.hash_map,map__9822__9823):map__9822__9823);
var keywordize_keys__9825 = cljs.core.get.call(null,map__9822__9824,"\uFDD0'keywordize-keys");
var keyfn__9826 = (cljs.core.truth_(keywordize_keys__9825)?cljs.core.keyword:cljs.core.str);
var f__9832 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__2455__auto____9831 = (function iter__9827(s__9828){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9828__9829 = s__9828;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__9828__9829)))
{var k__9830 = cljs.core.first.call(null,s__9828__9829);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__9826.call(null,k__9830),thisfn.call(null,(x[k__9830]))]),iter__9827.call(null,cljs.core.rest.call(null,s__9828__9829)));
} else
{return null;
}
break;
}
})));
});
return iter__2455__auto____9831.call(null,cljs.core.js_keys.call(null,x));
})());
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
return f__9832.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__9833){
var x = cljs.core.first(arglist__9833);
var options = cljs.core.rest(arglist__9833);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__9834 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
return (function() { 
var G__9838__delegate = function (args){
var temp__3695__auto____9835 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__9834),args);
if(cljs.core.truth_(temp__3695__auto____9835))
{var v__9836 = temp__3695__auto____9835;
return v__9836;
} else
{var ret__9837 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__9834,cljs.core.assoc,args,ret__9837);
return ret__9837;
}
};
var G__9838 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9838__delegate.call(this, args);
};
G__9838.cljs$lang$maxFixedArity = 0;
G__9838.cljs$lang$applyTo = (function (arglist__9839){
var args = cljs.core.seq(arglist__9839);;
return G__9838__delegate(args);
});
G__9838.cljs$lang$arity$variadic = G__9838__delegate;
return G__9838;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__9840 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__9840))
{{
var G__9841 = ret__9840;
f = G__9841;
continue;
}
} else
{return ret__9840;
}
break;
}
});
var trampoline__2 = (function() { 
var G__9842__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__9842 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9842__delegate.call(this, f, args);
};
G__9842.cljs$lang$maxFixedArity = 1;
G__9842.cljs$lang$applyTo = (function (arglist__9843){
var f = cljs.core.first(arglist__9843);
var args = cljs.core.rest(arglist__9843);
return G__9842__delegate(f, args);
});
G__9842.cljs$lang$arity$variadic = G__9842__delegate;
return G__9842;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__9844 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__9844,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__9844,cljs.core.PersistentVector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'descendants":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3548__auto____9845 = cljs.core._EQ_.call(null,child,parent);
if(or__3548__auto____9845)
{return or__3548__auto____9845;
} else
{var or__3548__auto____9846 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);
if(or__3548__auto____9846)
{return or__3548__auto____9846;
} else
{var and__3546__auto____9847 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3546__auto____9847)
{var and__3546__auto____9848 = cljs.core.vector_QMARK_.call(null,child);
if(and__3546__auto____9848)
{var and__3546__auto____9849 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3546__auto____9849)
{var ret__9850 = true;
var i__9851 = 0;
while(true){
if((function (){var or__3548__auto____9852 = cljs.core.not.call(null,ret__9850);
if(or__3548__auto____9852)
{return or__3548__auto____9852;
} else
{return (i__9851 === cljs.core.count.call(null,parent));
}
})())
{return ret__9850;
} else
{{
var G__9853 = isa_QMARK_.call(null,h,child.call(null,i__9851),parent.call(null,i__9851));
var G__9854 = (i__9851 + 1);
ret__9850 = G__9853;
i__9851 = G__9854;
continue;
}
}
break;
}
} else
{return and__3546__auto____9849;
}
} else
{return and__3546__auto____9848;
}
} else
{return and__3546__auto____9847;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6189))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6193))))].join('')));
}
var tp__9858 = "\uFDD0'parents".call(null,h);
var td__9859 = "\uFDD0'descendants".call(null,h);
var ta__9860 = "\uFDD0'ancestors".call(null,h);
var tf__9861 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3548__auto____9862 = ((cljs.core.contains_QMARK_.call(null,tp__9858.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__9860.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__9860.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__9858,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__9861.call(null,"\uFDD0'ancestors".call(null,h),tag,td__9859,parent,ta__9860),"\uFDD0'descendants":tf__9861.call(null,"\uFDD0'descendants".call(null,h),parent,ta__9860,tag,td__9859)});
})());
if(cljs.core.truth_(or__3548__auto____9862))
{return or__3548__auto____9862;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__9863 = "\uFDD0'parents".call(null,h);
var childsParents__9864 = (cljs.core.truth_(parentMap__9863.call(null,tag))?cljs.core.disj.call(null,parentMap__9863.call(null,tag),parent):cljs.core.set([]));
var newParents__9865 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__9864))?cljs.core.assoc.call(null,parentMap__9863,tag,childsParents__9864):cljs.core.dissoc.call(null,parentMap__9863,tag));
var deriv_seq__9866 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__9855_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__9855_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__9855_SHARP_),cljs.core.second.call(null,p1__9855_SHARP_)));
}),cljs.core.seq.call(null,newParents__9865)));
if(cljs.core.contains_QMARK_.call(null,parentMap__9863.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__9856_SHARP_,p2__9857_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__9856_SHARP_,p2__9857_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__9866));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__9867 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3548__auto____9869 = (cljs.core.truth_((function (){var and__3546__auto____9868 = xprefs__9867;
if(cljs.core.truth_(and__3546__auto____9868))
{return xprefs__9867.call(null,y);
} else
{return and__3546__auto____9868;
}
})())?true:null);
if(cljs.core.truth_(or__3548__auto____9869))
{return or__3548__auto____9869;
} else
{var or__3548__auto____9871 = (function (){var ps__9870 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__9870) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__9870),prefer_table)))
{} else
{}
{
var G__9874 = cljs.core.rest.call(null,ps__9870);
ps__9870 = G__9874;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3548__auto____9871))
{return or__3548__auto____9871;
} else
{var or__3548__auto____9873 = (function (){var ps__9872 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__9872) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__9872),y,prefer_table)))
{} else
{}
{
var G__9875 = cljs.core.rest.call(null,ps__9872);
ps__9872 = G__9875;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3548__auto____9873))
{return or__3548__auto____9873;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____9876 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3548__auto____9876))
{return or__3548__auto____9876;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__9885 = cljs.core.reduce.call(null,(function (be,p__9877){
var vec__9878__9879 = p__9877;
var k__9880 = cljs.core.nth.call(null,vec__9878__9879,0,null);
var ___9881 = cljs.core.nth.call(null,vec__9878__9879,1,null);
var e__9882 = vec__9878__9879;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__9880))
{var be2__9884 = (cljs.core.truth_((function (){var or__3548__auto____9883 = (be == null);
if(or__3548__auto____9883)
{return or__3548__auto____9883;
} else
{return cljs.core.dominates.call(null,k__9880,cljs.core.first.call(null,be),prefer_table);
}
})())?e__9882:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__9884),k__9880,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__9880),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__9884)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__9884;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__9885))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__9885));
return cljs.core.second.call(null,best_entry__9885);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
void 0;cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3546__auto____9886 = mf;
if(and__3546__auto____9886)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3546__auto____9886;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3548__auto____9887 = (cljs.core._reset[goog.typeOf.call(null,mf)]);
if(or__3548__auto____9887)
{return or__3548__auto____9887;
} else
{var or__3548__auto____9888 = (cljs.core._reset["_"]);
if(or__3548__auto____9888)
{return or__3548__auto____9888;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3546__auto____9889 = mf;
if(and__3546__auto____9889)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3546__auto____9889;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____9890 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);
if(or__3548__auto____9890)
{return or__3548__auto____9890;
} else
{var or__3548__auto____9891 = (cljs.core._add_method["_"]);
if(or__3548__auto____9891)
{return or__3548__auto____9891;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3546__auto____9892 = mf;
if(and__3546__auto____9892)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3546__auto____9892;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____9893 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);
if(or__3548__auto____9893)
{return or__3548__auto____9893;
} else
{var or__3548__auto____9894 = (cljs.core._remove_method["_"]);
if(or__3548__auto____9894)
{return or__3548__auto____9894;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3546__auto____9895 = mf;
if(and__3546__auto____9895)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3546__auto____9895;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____9896 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);
if(or__3548__auto____9896)
{return or__3548__auto____9896;
} else
{var or__3548__auto____9897 = (cljs.core._prefer_method["_"]);
if(or__3548__auto____9897)
{return or__3548__auto____9897;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3546__auto____9898 = mf;
if(and__3546__auto____9898)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3546__auto____9898;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____9899 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);
if(or__3548__auto____9899)
{return or__3548__auto____9899;
} else
{var or__3548__auto____9900 = (cljs.core._get_method["_"]);
if(or__3548__auto____9900)
{return or__3548__auto____9900;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3546__auto____9901 = mf;
if(and__3546__auto____9901)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3546__auto____9901;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3548__auto____9902 = (cljs.core._methods[goog.typeOf.call(null,mf)]);
if(or__3548__auto____9902)
{return or__3548__auto____9902;
} else
{var or__3548__auto____9903 = (cljs.core._methods["_"]);
if(or__3548__auto____9903)
{return or__3548__auto____9903;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3546__auto____9904 = mf;
if(and__3546__auto____9904)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3546__auto____9904;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3548__auto____9905 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);
if(or__3548__auto____9905)
{return or__3548__auto____9905;
} else
{var or__3548__auto____9906 = (cljs.core._prefers["_"]);
if(or__3548__auto____9906)
{return or__3548__auto____9906;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3546__auto____9907 = mf;
if(and__3546__auto____9907)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3546__auto____9907;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3548__auto____9908 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);
if(or__3548__auto____9908)
{return or__3548__auto____9908;
} else
{var or__3548__auto____9909 = (cljs.core._dispatch["_"]);
if(or__3548__auto____9909)
{return or__3548__auto____9909;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__9910 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__9911 = cljs.core._get_method.call(null,mf,dispatch_val__9910);
if(cljs.core.truth_(target_fn__9911))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__9910)].join('')));
}
return cljs.core.apply.call(null,target_fn__9911,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
this.cljs$lang$protocol_mask$partition1$ = 32;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9912 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__9913 = this;
cljs.core.swap_BANG_.call(null,this__9913.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9913.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9913.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9913.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__9914 = this;
cljs.core.swap_BANG_.call(null,this__9914.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__9914.method_cache,this__9914.method_table,this__9914.cached_hierarchy,this__9914.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__9915 = this;
cljs.core.swap_BANG_.call(null,this__9915.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__9915.method_cache,this__9915.method_table,this__9915.cached_hierarchy,this__9915.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__9916 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__9916.cached_hierarchy),cljs.core.deref.call(null,this__9916.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__9916.method_cache,this__9916.method_table,this__9916.cached_hierarchy,this__9916.hierarchy);
}
var temp__3695__auto____9917 = cljs.core.deref.call(null,this__9916.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3695__auto____9917))
{var target_fn__9918 = temp__3695__auto____9917;
return target_fn__9918;
} else
{var temp__3695__auto____9919 = cljs.core.find_and_cache_best_method.call(null,this__9916.name,dispatch_val,this__9916.hierarchy,this__9916.method_table,this__9916.prefer_table,this__9916.method_cache,this__9916.cached_hierarchy);
if(cljs.core.truth_(temp__3695__auto____9919))
{var target_fn__9920 = temp__3695__auto____9919;
return target_fn__9920;
} else
{return cljs.core.deref.call(null,this__9916.method_table).call(null,this__9916.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__9921 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__9921.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__9921.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__9921.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__9921.method_cache,this__9921.method_table,this__9921.cached_hierarchy,this__9921.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__9922 = this;
return cljs.core.deref.call(null,this__9922.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__9923 = this;
return cljs.core.deref.call(null,this__9923.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__9924 = this;
return cljs.core.do_dispatch.call(null,mf,this__9924.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__9925__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__9925 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9925__delegate.call(this, _, args);
};
G__9925.cljs$lang$maxFixedArity = 1;
G__9925.cljs$lang$applyTo = (function (arglist__9926){
var _ = cljs.core.first(arglist__9926);
var args = cljs.core.rest(arglist__9926);
return G__9925__delegate(_, args);
});
G__9925.cljs$lang$arity$variadic = G__9925__delegate;
return G__9925;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
