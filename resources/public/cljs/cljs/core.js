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
var G__9642__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__9642 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9642__delegate.call(this, array, i, idxs);
};
G__9642.cljs$lang$maxFixedArity = 2;
G__9642.cljs$lang$applyTo = (function (arglist__9643){
var array = cljs.core.first(arglist__9643);
var i = cljs.core.first(cljs.core.next(arglist__9643));
var idxs = cljs.core.rest(cljs.core.next(arglist__9643));
return G__9642__delegate(array, i, idxs);
});
G__9642.cljs$lang$arity$variadic = G__9642__delegate;
return G__9642;
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
if((function (){var and__3546__auto____9644 = this$;
if(and__3546__auto____9644)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3546__auto____9644;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3548__auto____9645 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9645)
{return or__3548__auto____9645;
} else
{var or__3548__auto____9646 = (cljs.core._invoke["_"]);
if(or__3548__auto____9646)
{return or__3548__auto____9646;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3546__auto____9647 = this$;
if(and__3546__auto____9647)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3546__auto____9647;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3548__auto____9648 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9648)
{return or__3548__auto____9648;
} else
{var or__3548__auto____9649 = (cljs.core._invoke["_"]);
if(or__3548__auto____9649)
{return or__3548__auto____9649;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3546__auto____9650 = this$;
if(and__3546__auto____9650)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3546__auto____9650;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3548__auto____9651 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9651)
{return or__3548__auto____9651;
} else
{var or__3548__auto____9652 = (cljs.core._invoke["_"]);
if(or__3548__auto____9652)
{return or__3548__auto____9652;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3546__auto____9653 = this$;
if(and__3546__auto____9653)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3546__auto____9653;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3548__auto____9654 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9654)
{return or__3548__auto____9654;
} else
{var or__3548__auto____9655 = (cljs.core._invoke["_"]);
if(or__3548__auto____9655)
{return or__3548__auto____9655;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3546__auto____9656 = this$;
if(and__3546__auto____9656)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3546__auto____9656;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____9657 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9657)
{return or__3548__auto____9657;
} else
{var or__3548__auto____9658 = (cljs.core._invoke["_"]);
if(or__3548__auto____9658)
{return or__3548__auto____9658;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3546__auto____9659 = this$;
if(and__3546__auto____9659)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3546__auto____9659;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____9660 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9660)
{return or__3548__auto____9660;
} else
{var or__3548__auto____9661 = (cljs.core._invoke["_"]);
if(or__3548__auto____9661)
{return or__3548__auto____9661;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3546__auto____9662 = this$;
if(and__3546__auto____9662)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3546__auto____9662;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____9663 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9663)
{return or__3548__auto____9663;
} else
{var or__3548__auto____9664 = (cljs.core._invoke["_"]);
if(or__3548__auto____9664)
{return or__3548__auto____9664;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3546__auto____9665 = this$;
if(and__3546__auto____9665)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3546__auto____9665;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____9666 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9666)
{return or__3548__auto____9666;
} else
{var or__3548__auto____9667 = (cljs.core._invoke["_"]);
if(or__3548__auto____9667)
{return or__3548__auto____9667;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3546__auto____9668 = this$;
if(and__3546__auto____9668)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3546__auto____9668;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____9669 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9669)
{return or__3548__auto____9669;
} else
{var or__3548__auto____9670 = (cljs.core._invoke["_"]);
if(or__3548__auto____9670)
{return or__3548__auto____9670;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3546__auto____9671 = this$;
if(and__3546__auto____9671)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3546__auto____9671;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____9672 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9672)
{return or__3548__auto____9672;
} else
{var or__3548__auto____9673 = (cljs.core._invoke["_"]);
if(or__3548__auto____9673)
{return or__3548__auto____9673;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3546__auto____9674 = this$;
if(and__3546__auto____9674)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3546__auto____9674;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____9675 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9675)
{return or__3548__auto____9675;
} else
{var or__3548__auto____9676 = (cljs.core._invoke["_"]);
if(or__3548__auto____9676)
{return or__3548__auto____9676;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3546__auto____9677 = this$;
if(and__3546__auto____9677)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3546__auto____9677;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____9678 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9678)
{return or__3548__auto____9678;
} else
{var or__3548__auto____9679 = (cljs.core._invoke["_"]);
if(or__3548__auto____9679)
{return or__3548__auto____9679;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3546__auto____9680 = this$;
if(and__3546__auto____9680)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3546__auto____9680;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____9681 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9681)
{return or__3548__auto____9681;
} else
{var or__3548__auto____9682 = (cljs.core._invoke["_"]);
if(or__3548__auto____9682)
{return or__3548__auto____9682;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3546__auto____9683 = this$;
if(and__3546__auto____9683)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3546__auto____9683;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____9684 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9684)
{return or__3548__auto____9684;
} else
{var or__3548__auto____9685 = (cljs.core._invoke["_"]);
if(or__3548__auto____9685)
{return or__3548__auto____9685;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3546__auto____9686 = this$;
if(and__3546__auto____9686)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3546__auto____9686;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____9687 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9687)
{return or__3548__auto____9687;
} else
{var or__3548__auto____9688 = (cljs.core._invoke["_"]);
if(or__3548__auto____9688)
{return or__3548__auto____9688;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3546__auto____9689 = this$;
if(and__3546__auto____9689)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3546__auto____9689;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____9690 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9690)
{return or__3548__auto____9690;
} else
{var or__3548__auto____9691 = (cljs.core._invoke["_"]);
if(or__3548__auto____9691)
{return or__3548__auto____9691;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3546__auto____9692 = this$;
if(and__3546__auto____9692)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3546__auto____9692;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____9693 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9693)
{return or__3548__auto____9693;
} else
{var or__3548__auto____9694 = (cljs.core._invoke["_"]);
if(or__3548__auto____9694)
{return or__3548__auto____9694;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3546__auto____9695 = this$;
if(and__3546__auto____9695)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3546__auto____9695;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____9696 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9696)
{return or__3548__auto____9696;
} else
{var or__3548__auto____9697 = (cljs.core._invoke["_"]);
if(or__3548__auto____9697)
{return or__3548__auto____9697;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3546__auto____9698 = this$;
if(and__3546__auto____9698)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3546__auto____9698;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____9699 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9699)
{return or__3548__auto____9699;
} else
{var or__3548__auto____9700 = (cljs.core._invoke["_"]);
if(or__3548__auto____9700)
{return or__3548__auto____9700;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3546__auto____9701 = this$;
if(and__3546__auto____9701)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3546__auto____9701;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____9702 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9702)
{return or__3548__auto____9702;
} else
{var or__3548__auto____9703 = (cljs.core._invoke["_"]);
if(or__3548__auto____9703)
{return or__3548__auto____9703;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3546__auto____9704 = this$;
if(and__3546__auto____9704)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3546__auto____9704;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____9705 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9705)
{return or__3548__auto____9705;
} else
{var or__3548__auto____9706 = (cljs.core._invoke["_"]);
if(or__3548__auto____9706)
{return or__3548__auto____9706;
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
if((function (){var and__3546__auto____9707 = coll;
if(and__3546__auto____9707)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3546__auto____9707;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3548__auto____9708 = (cljs.core._count[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9708)
{return or__3548__auto____9708;
} else
{var or__3548__auto____9709 = (cljs.core._count["_"]);
if(or__3548__auto____9709)
{return or__3548__auto____9709;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3546__auto____9710 = coll;
if(and__3546__auto____9710)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3546__auto____9710;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3548__auto____9711 = (cljs.core._empty[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9711)
{return or__3548__auto____9711;
} else
{var or__3548__auto____9712 = (cljs.core._empty["_"]);
if(or__3548__auto____9712)
{return or__3548__auto____9712;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3546__auto____9713 = coll;
if(and__3546__auto____9713)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3546__auto____9713;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3548__auto____9714 = (cljs.core._conj[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9714)
{return or__3548__auto____9714;
} else
{var or__3548__auto____9715 = (cljs.core._conj["_"]);
if(or__3548__auto____9715)
{return or__3548__auto____9715;
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
if((function (){var and__3546__auto____9716 = coll;
if(and__3546__auto____9716)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3546__auto____9716;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3548__auto____9717 = (cljs.core._nth[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9717)
{return or__3548__auto____9717;
} else
{var or__3548__auto____9718 = (cljs.core._nth["_"]);
if(or__3548__auto____9718)
{return or__3548__auto____9718;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3546__auto____9719 = coll;
if(and__3546__auto____9719)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3546__auto____9719;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3548__auto____9720 = (cljs.core._nth[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9720)
{return or__3548__auto____9720;
} else
{var or__3548__auto____9721 = (cljs.core._nth["_"]);
if(or__3548__auto____9721)
{return or__3548__auto____9721;
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
if((function (){var and__3546__auto____9722 = coll;
if(and__3546__auto____9722)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3546__auto____9722;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3548__auto____9723 = (cljs.core._first[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9723)
{return or__3548__auto____9723;
} else
{var or__3548__auto____9724 = (cljs.core._first["_"]);
if(or__3548__auto____9724)
{return or__3548__auto____9724;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3546__auto____9725 = coll;
if(and__3546__auto____9725)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3546__auto____9725;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3548__auto____9726 = (cljs.core._rest[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9726)
{return or__3548__auto____9726;
} else
{var or__3548__auto____9727 = (cljs.core._rest["_"]);
if(or__3548__auto____9727)
{return or__3548__auto____9727;
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
if((function (){var and__3546__auto____9728 = o;
if(and__3546__auto____9728)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3546__auto____9728;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3548__auto____9729 = (cljs.core._lookup[goog.typeOf.call(null,o)]);
if(or__3548__auto____9729)
{return or__3548__auto____9729;
} else
{var or__3548__auto____9730 = (cljs.core._lookup["_"]);
if(or__3548__auto____9730)
{return or__3548__auto____9730;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3546__auto____9731 = o;
if(and__3546__auto____9731)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3546__auto____9731;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3548__auto____9732 = (cljs.core._lookup[goog.typeOf.call(null,o)]);
if(or__3548__auto____9732)
{return or__3548__auto____9732;
} else
{var or__3548__auto____9733 = (cljs.core._lookup["_"]);
if(or__3548__auto____9733)
{return or__3548__auto____9733;
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
if((function (){var and__3546__auto____9734 = coll;
if(and__3546__auto____9734)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3546__auto____9734;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3548__auto____9735 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9735)
{return or__3548__auto____9735;
} else
{var or__3548__auto____9736 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3548__auto____9736)
{return or__3548__auto____9736;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3546__auto____9737 = coll;
if(and__3546__auto____9737)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3546__auto____9737;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3548__auto____9738 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9738)
{return or__3548__auto____9738;
} else
{var or__3548__auto____9739 = (cljs.core._assoc["_"]);
if(or__3548__auto____9739)
{return or__3548__auto____9739;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3546__auto____9740 = coll;
if(and__3546__auto____9740)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3546__auto____9740;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3548__auto____9741 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9741)
{return or__3548__auto____9741;
} else
{var or__3548__auto____9742 = (cljs.core._dissoc["_"]);
if(or__3548__auto____9742)
{return or__3548__auto____9742;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3546__auto____9743 = coll;
if(and__3546__auto____9743)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3546__auto____9743;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3548__auto____9744 = (cljs.core._key[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9744)
{return or__3548__auto____9744;
} else
{var or__3548__auto____9745 = (cljs.core._key["_"]);
if(or__3548__auto____9745)
{return or__3548__auto____9745;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3546__auto____9746 = coll;
if(and__3546__auto____9746)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3546__auto____9746;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3548__auto____9747 = (cljs.core._val[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9747)
{return or__3548__auto____9747;
} else
{var or__3548__auto____9748 = (cljs.core._val["_"]);
if(or__3548__auto____9748)
{return or__3548__auto____9748;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3546__auto____9749 = coll;
if(and__3546__auto____9749)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3546__auto____9749;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3548__auto____9750 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9750)
{return or__3548__auto____9750;
} else
{var or__3548__auto____9751 = (cljs.core._disjoin["_"]);
if(or__3548__auto____9751)
{return or__3548__auto____9751;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3546__auto____9752 = coll;
if(and__3546__auto____9752)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3546__auto____9752;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3548__auto____9753 = (cljs.core._peek[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9753)
{return or__3548__auto____9753;
} else
{var or__3548__auto____9754 = (cljs.core._peek["_"]);
if(or__3548__auto____9754)
{return or__3548__auto____9754;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3546__auto____9755 = coll;
if(and__3546__auto____9755)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3546__auto____9755;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3548__auto____9756 = (cljs.core._pop[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9756)
{return or__3548__auto____9756;
} else
{var or__3548__auto____9757 = (cljs.core._pop["_"]);
if(or__3548__auto____9757)
{return or__3548__auto____9757;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3546__auto____9758 = coll;
if(and__3546__auto____9758)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3546__auto____9758;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3548__auto____9759 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9759)
{return or__3548__auto____9759;
} else
{var or__3548__auto____9760 = (cljs.core._assoc_n["_"]);
if(or__3548__auto____9760)
{return or__3548__auto____9760;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3546__auto____9761 = o;
if(and__3546__auto____9761)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3546__auto____9761;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3548__auto____9762 = (cljs.core._deref[goog.typeOf.call(null,o)]);
if(or__3548__auto____9762)
{return or__3548__auto____9762;
} else
{var or__3548__auto____9763 = (cljs.core._deref["_"]);
if(or__3548__auto____9763)
{return or__3548__auto____9763;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3546__auto____9764 = o;
if(and__3546__auto____9764)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3546__auto____9764;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____9765 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);
if(or__3548__auto____9765)
{return or__3548__auto____9765;
} else
{var or__3548__auto____9766 = (cljs.core._deref_with_timeout["_"]);
if(or__3548__auto____9766)
{return or__3548__auto____9766;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3546__auto____9767 = o;
if(and__3546__auto____9767)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3546__auto____9767;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3548__auto____9768 = (cljs.core._meta[goog.typeOf.call(null,o)]);
if(or__3548__auto____9768)
{return or__3548__auto____9768;
} else
{var or__3548__auto____9769 = (cljs.core._meta["_"]);
if(or__3548__auto____9769)
{return or__3548__auto____9769;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3546__auto____9770 = o;
if(and__3546__auto____9770)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3546__auto____9770;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3548__auto____9771 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);
if(or__3548__auto____9771)
{return or__3548__auto____9771;
} else
{var or__3548__auto____9772 = (cljs.core._with_meta["_"]);
if(or__3548__auto____9772)
{return or__3548__auto____9772;
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
if((function (){var and__3546__auto____9773 = coll;
if(and__3546__auto____9773)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3546__auto____9773;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3548__auto____9774 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9774)
{return or__3548__auto____9774;
} else
{var or__3548__auto____9775 = (cljs.core._reduce["_"]);
if(or__3548__auto____9775)
{return or__3548__auto____9775;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3546__auto____9776 = coll;
if(and__3546__auto____9776)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3546__auto____9776;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3548__auto____9777 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9777)
{return or__3548__auto____9777;
} else
{var or__3548__auto____9778 = (cljs.core._reduce["_"]);
if(or__3548__auto____9778)
{return or__3548__auto____9778;
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
if((function (){var and__3546__auto____9779 = coll;
if(and__3546__auto____9779)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3546__auto____9779;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3548__auto____9780 = (cljs.core._kv_reduce[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9780)
{return or__3548__auto____9780;
} else
{var or__3548__auto____9781 = (cljs.core._kv_reduce["_"]);
if(or__3548__auto____9781)
{return or__3548__auto____9781;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3546__auto____9782 = o;
if(and__3546__auto____9782)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3546__auto____9782;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3548__auto____9783 = (cljs.core._equiv[goog.typeOf.call(null,o)]);
if(or__3548__auto____9783)
{return or__3548__auto____9783;
} else
{var or__3548__auto____9784 = (cljs.core._equiv["_"]);
if(or__3548__auto____9784)
{return or__3548__auto____9784;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3546__auto____9785 = o;
if(and__3546__auto____9785)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3546__auto____9785;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3548__auto____9786 = (cljs.core._hash[goog.typeOf.call(null,o)]);
if(or__3548__auto____9786)
{return or__3548__auto____9786;
} else
{var or__3548__auto____9787 = (cljs.core._hash["_"]);
if(or__3548__auto____9787)
{return or__3548__auto____9787;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3546__auto____9788 = o;
if(and__3546__auto____9788)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3546__auto____9788;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3548__auto____9789 = (cljs.core._seq[goog.typeOf.call(null,o)]);
if(or__3548__auto____9789)
{return or__3548__auto____9789;
} else
{var or__3548__auto____9790 = (cljs.core._seq["_"]);
if(or__3548__auto____9790)
{return or__3548__auto____9790;
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
if((function (){var and__3546__auto____9791 = coll;
if(and__3546__auto____9791)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3546__auto____9791;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3548__auto____9792 = (cljs.core._rseq[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9792)
{return or__3548__auto____9792;
} else
{var or__3548__auto____9793 = (cljs.core._rseq["_"]);
if(or__3548__auto____9793)
{return or__3548__auto____9793;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3546__auto____9794 = coll;
if(and__3546__auto____9794)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3546__auto____9794;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3548__auto____9795 = (cljs.core._sorted_seq[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9795)
{return or__3548__auto____9795;
} else
{var or__3548__auto____9796 = (cljs.core._sorted_seq["_"]);
if(or__3548__auto____9796)
{return or__3548__auto____9796;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3546__auto____9797 = coll;
if(and__3546__auto____9797)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3546__auto____9797;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3548__auto____9798 = (cljs.core._sorted_seq_from[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9798)
{return or__3548__auto____9798;
} else
{var or__3548__auto____9799 = (cljs.core._sorted_seq_from["_"]);
if(or__3548__auto____9799)
{return or__3548__auto____9799;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3546__auto____9800 = coll;
if(and__3546__auto____9800)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3546__auto____9800;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3548__auto____9801 = (cljs.core._entry_key[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9801)
{return or__3548__auto____9801;
} else
{var or__3548__auto____9802 = (cljs.core._entry_key["_"]);
if(or__3548__auto____9802)
{return or__3548__auto____9802;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3546__auto____9803 = coll;
if(and__3546__auto____9803)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3546__auto____9803;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3548__auto____9804 = (cljs.core._comparator[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9804)
{return or__3548__auto____9804;
} else
{var or__3548__auto____9805 = (cljs.core._comparator["_"]);
if(or__3548__auto____9805)
{return or__3548__auto____9805;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3546__auto____9806 = o;
if(and__3546__auto____9806)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3546__auto____9806;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3548__auto____9807 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);
if(or__3548__auto____9807)
{return or__3548__auto____9807;
} else
{var or__3548__auto____9808 = (cljs.core._pr_seq["_"]);
if(or__3548__auto____9808)
{return or__3548__auto____9808;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3546__auto____9809 = d;
if(and__3546__auto____9809)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3546__auto____9809;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3548__auto____9810 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);
if(or__3548__auto____9810)
{return or__3548__auto____9810;
} else
{var or__3548__auto____9811 = (cljs.core._realized_QMARK_["_"]);
if(or__3548__auto____9811)
{return or__3548__auto____9811;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3546__auto____9812 = this$;
if(and__3546__auto____9812)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3546__auto____9812;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____9813 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9813)
{return or__3548__auto____9813;
} else
{var or__3548__auto____9814 = (cljs.core._notify_watches["_"]);
if(or__3548__auto____9814)
{return or__3548__auto____9814;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3546__auto____9815 = this$;
if(and__3546__auto____9815)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3546__auto____9815;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3548__auto____9816 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9816)
{return or__3548__auto____9816;
} else
{var or__3548__auto____9817 = (cljs.core._add_watch["_"]);
if(or__3548__auto____9817)
{return or__3548__auto____9817;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3546__auto____9818 = this$;
if(and__3546__auto____9818)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3546__auto____9818;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3548__auto____9819 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);
if(or__3548__auto____9819)
{return or__3548__auto____9819;
} else
{var or__3548__auto____9820 = (cljs.core._remove_watch["_"]);
if(or__3548__auto____9820)
{return or__3548__auto____9820;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3546__auto____9821 = coll;
if(and__3546__auto____9821)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3546__auto____9821;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3548__auto____9822 = (cljs.core._as_transient[goog.typeOf.call(null,coll)]);
if(or__3548__auto____9822)
{return or__3548__auto____9822;
} else
{var or__3548__auto____9823 = (cljs.core._as_transient["_"]);
if(or__3548__auto____9823)
{return or__3548__auto____9823;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3546__auto____9824 = tcoll;
if(and__3546__auto____9824)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3546__auto____9824;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3548__auto____9825 = (cljs.core._conj_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____9825)
{return or__3548__auto____9825;
} else
{var or__3548__auto____9826 = (cljs.core._conj_BANG_["_"]);
if(or__3548__auto____9826)
{return or__3548__auto____9826;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3546__auto____9827 = tcoll;
if(and__3546__auto____9827)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3546__auto____9827;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3548__auto____9828 = (cljs.core._persistent_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____9828)
{return or__3548__auto____9828;
} else
{var or__3548__auto____9829 = (cljs.core._persistent_BANG_["_"]);
if(or__3548__auto____9829)
{return or__3548__auto____9829;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3546__auto____9830 = tcoll;
if(and__3546__auto____9830)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3546__auto____9830;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3548__auto____9831 = (cljs.core._assoc_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____9831)
{return or__3548__auto____9831;
} else
{var or__3548__auto____9832 = (cljs.core._assoc_BANG_["_"]);
if(or__3548__auto____9832)
{return or__3548__auto____9832;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3546__auto____9833 = tcoll;
if(and__3546__auto____9833)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3546__auto____9833;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3548__auto____9834 = (cljs.core._dissoc_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____9834)
{return or__3548__auto____9834;
} else
{var or__3548__auto____9835 = (cljs.core._dissoc_BANG_["_"]);
if(or__3548__auto____9835)
{return or__3548__auto____9835;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3546__auto____9836 = tcoll;
if(and__3546__auto____9836)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3546__auto____9836;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3548__auto____9837 = (cljs.core._assoc_n_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____9837)
{return or__3548__auto____9837;
} else
{var or__3548__auto____9838 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3548__auto____9838)
{return or__3548__auto____9838;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3546__auto____9839 = tcoll;
if(and__3546__auto____9839)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3546__auto____9839;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3548__auto____9840 = (cljs.core._pop_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____9840)
{return or__3548__auto____9840;
} else
{var or__3548__auto____9841 = (cljs.core._pop_BANG_["_"]);
if(or__3548__auto____9841)
{return or__3548__auto____9841;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3546__auto____9842 = tcoll;
if(and__3546__auto____9842)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3546__auto____9842;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3548__auto____9843 = (cljs.core._disjoin_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____9843)
{return or__3548__auto____9843;
} else
{var or__3548__auto____9844 = (cljs.core._disjoin_BANG_["_"]);
if(or__3548__auto____9844)
{return or__3548__auto____9844;
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
var or__3548__auto____9845 = (x === y);
if(or__3548__auto____9845)
{return or__3548__auto____9845;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__9846__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9847 = y;
var G__9848 = cljs.core.first.call(null,more);
var G__9849 = cljs.core.next.call(null,more);
x = G__9847;
y = G__9848;
more = G__9849;
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
var G__9846 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9846__delegate.call(this, x, y, more);
};
G__9846.cljs$lang$maxFixedArity = 2;
G__9846.cljs$lang$applyTo = (function (arglist__9850){
var x = cljs.core.first(arglist__9850);
var y = cljs.core.first(cljs.core.next(arglist__9850));
var more = cljs.core.rest(cljs.core.next(arglist__9850));
return G__9846__delegate(x, y, more);
});
G__9846.cljs$lang$arity$variadic = G__9846__delegate;
return G__9846;
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
if((function (){var or__3548__auto____9851 = (x == null);
if(or__3548__auto____9851)
{return or__3548__auto____9851;
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
var G__9852 = null;
var G__9852__2 = (function (o,k){
return null;
});
var G__9852__3 = (function (o,k,not_found){
return not_found;
});
G__9852 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__9852__2.call(this,o,k);
case 3:
return G__9852__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9852;
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
var G__9853 = null;
var G__9853__2 = (function (_,f){
return f.call(null);
});
var G__9853__3 = (function (_,f,start){
return start;
});
G__9853 = function(_,f,start){
switch(arguments.length){
case 2:
return G__9853__2.call(this,_,f);
case 3:
return G__9853__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9853;
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
var G__9854 = null;
var G__9854__2 = (function (_,n){
return null;
});
var G__9854__3 = (function (_,n,not_found){
return not_found;
});
G__9854 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__9854__2.call(this,_,n);
case 3:
return G__9854__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9854;
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
{var val__9855 = cljs.core._nth.call(null,cicoll,0);
var n__9856 = 1;
while(true){
if((n__9856 < cljs.core._count.call(null,cicoll)))
{var nval__9857 = f.call(null,val__9855,cljs.core._nth.call(null,cicoll,n__9856));
if(cljs.core.reduced_QMARK_.call(null,nval__9857))
{return cljs.core.deref.call(null,nval__9857);
} else
{{
var G__9864 = nval__9857;
var G__9865 = (n__9856 + 1);
val__9855 = G__9864;
n__9856 = G__9865;
continue;
}
}
} else
{return val__9855;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var val__9858 = val;
var n__9859 = 0;
while(true){
if((n__9859 < cljs.core._count.call(null,cicoll)))
{var nval__9860 = f.call(null,val__9858,cljs.core._nth.call(null,cicoll,n__9859));
if(cljs.core.reduced_QMARK_.call(null,nval__9860))
{return cljs.core.deref.call(null,nval__9860);
} else
{{
var G__9866 = nval__9860;
var G__9867 = (n__9859 + 1);
val__9858 = G__9866;
n__9859 = G__9867;
continue;
}
}
} else
{return val__9858;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var val__9861 = val;
var n__9862 = idx;
while(true){
if((n__9862 < cljs.core._count.call(null,cicoll)))
{var nval__9863 = f.call(null,val__9861,cljs.core._nth.call(null,cicoll,n__9862));
if(cljs.core.reduced_QMARK_.call(null,nval__9863))
{return cljs.core.deref.call(null,nval__9863);
} else
{{
var G__9868 = nval__9863;
var G__9869 = (n__9862 + 1);
val__9861 = G__9868;
n__9862 = G__9869;
continue;
}
}
} else
{return val__9861;
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
var this__9870 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9871 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$ASeq$ = true;
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__9872 = this;
var this$__9873 = this;
return cljs.core.pr_str.call(null,this$__9873);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9874 = this;
if(cljs.core.counted_QMARK_.call(null,this__9874.a))
{return cljs.core.ci_reduce.call(null,this__9874.a,f,(this__9874.a[this__9874.i]),(this__9874.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__9874.a[this__9874.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9875 = this;
if(cljs.core.counted_QMARK_.call(null,this__9875.a))
{return cljs.core.ci_reduce.call(null,this__9875.a,f,start,this__9875.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9876 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__9877 = this;
return (this__9877.a.length - this__9877.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__9878 = this;
return (this__9878.a[this__9878.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__9879 = this;
if(((this__9879.i + 1) < this__9879.a.length))
{return (new cljs.core.IndexedSeq(this__9879.a,(this__9879.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9880 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9881 = this;
var i__9882 = (n + this__9881.i);
if((i__9882 < this__9881.a.length))
{return (this__9881.a[i__9882]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9883 = this;
var i__9884 = (n + this__9883.i);
if((i__9884 < this__9883.a.length))
{return (this__9883.a[i__9884]);
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
var G__9885 = null;
var G__9885__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__9885__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__9885 = function(array,f,start){
switch(arguments.length){
case 2:
return G__9885__2.call(this,array,f);
case 3:
return G__9885__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9885;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__9886 = null;
var G__9886__2 = (function (array,k){
return (array[k]);
});
var G__9886__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__9886 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__9886__2.call(this,array,k);
case 3:
return G__9886__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9886;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__9887 = null;
var G__9887__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__9887__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__9887 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__9887__2.call(this,array,n);
case 3:
return G__9887__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9887;
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
{if((function (){var G__9888__9889 = coll;
if((G__9888__9889 != null))
{if((function (){var or__3548__auto____9890 = (G__9888__9889.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3548__auto____9890)
{return or__3548__auto____9890;
} else
{return G__9888__9889.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__9888__9889.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__9888__9889);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__9888__9889);
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
{if((function (){var G__9891__9892 = coll;
if((G__9891__9892 != null))
{if((function (){var or__3548__auto____9893 = (G__9891__9892.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____9893)
{return or__3548__auto____9893;
} else
{return G__9891__9892.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9891__9892.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9891__9892);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9891__9892);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__9894 = cljs.core.seq.call(null,coll);
if((s__9894 != null))
{return cljs.core._first.call(null,s__9894);
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
{if((function (){var G__9895__9896 = coll;
if((G__9895__9896 != null))
{if((function (){var or__3548__auto____9897 = (G__9895__9896.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____9897)
{return or__3548__auto____9897;
} else
{return G__9895__9896.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9895__9896.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9895__9896);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9895__9896);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__9898 = cljs.core.seq.call(null,coll);
if((s__9898 != null))
{return cljs.core._rest.call(null,s__9898);
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
{if((function (){var G__9899__9900 = coll;
if((G__9899__9900 != null))
{if((function (){var or__3548__auto____9901 = (G__9899__9900.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____9901)
{return or__3548__auto____9901;
} else
{return G__9899__9900.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9899__9900.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9899__9900);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9899__9900);
}
})())
{var coll__9902 = cljs.core._rest.call(null,coll);
if((coll__9902 != null))
{if((function (){var G__9903__9904 = coll__9902;
if((G__9903__9904 != null))
{if((function (){var or__3548__auto____9905 = (G__9903__9904.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3548__auto____9905)
{return or__3548__auto____9905;
} else
{return G__9903__9904.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__9903__9904.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__9903__9904);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__9903__9904);
}
})())
{return coll__9902;
} else
{return cljs.core._seq.call(null,coll__9902);
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
var G__9906 = cljs.core.next.call(null,s);
s = G__9906;
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
var G__9907__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__9908 = conj.call(null,coll,x);
var G__9909 = cljs.core.first.call(null,xs);
var G__9910 = cljs.core.next.call(null,xs);
coll = G__9908;
x = G__9909;
xs = G__9910;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__9907 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9907__delegate.call(this, coll, x, xs);
};
G__9907.cljs$lang$maxFixedArity = 2;
G__9907.cljs$lang$applyTo = (function (arglist__9911){
var coll = cljs.core.first(arglist__9911);
var x = cljs.core.first(cljs.core.next(arglist__9911));
var xs = cljs.core.rest(cljs.core.next(arglist__9911));
return G__9907__delegate(coll, x, xs);
});
G__9907.cljs$lang$arity$variadic = G__9907__delegate;
return G__9907;
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
var G__9912 = cljs.core.next.call(null,coll);
var G__9913 = (acc + 1);
coll = G__9912;
acc = G__9913;
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
if((function (){var G__9914__9915 = coll;
if((G__9914__9915 != null))
{if((function (){var or__3548__auto____9916 = (G__9914__9915.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3548__auto____9916)
{return or__3548__auto____9916;
} else
{return G__9914__9915.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9914__9915.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9914__9915);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9914__9915);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
});
var nth__3 = (function (coll,n,not_found){
if((function (){var G__9917__9918 = coll;
if((G__9917__9918 != null))
{if((function (){var or__3548__auto____9919 = (G__9917__9918.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3548__auto____9919)
{return or__3548__auto____9919;
} else
{return G__9917__9918.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9917__9918.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9917__9918);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9917__9918);
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
var G__9921__delegate = function (coll,k,v,kvs){
while(true){
var ret__9920 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__9922 = ret__9920;
var G__9923 = cljs.core.first.call(null,kvs);
var G__9924 = cljs.core.second.call(null,kvs);
var G__9925 = cljs.core.nnext.call(null,kvs);
coll = G__9922;
k = G__9923;
v = G__9924;
kvs = G__9925;
continue;
}
} else
{return ret__9920;
}
break;
}
};
var G__9921 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9921__delegate.call(this, coll, k, v, kvs);
};
G__9921.cljs$lang$maxFixedArity = 3;
G__9921.cljs$lang$applyTo = (function (arglist__9926){
var coll = cljs.core.first(arglist__9926);
var k = cljs.core.first(cljs.core.next(arglist__9926));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9926)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9926)));
return G__9921__delegate(coll, k, v, kvs);
});
G__9921.cljs$lang$arity$variadic = G__9921__delegate;
return G__9921;
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
var G__9928__delegate = function (coll,k,ks){
while(true){
var ret__9927 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__9929 = ret__9927;
var G__9930 = cljs.core.first.call(null,ks);
var G__9931 = cljs.core.next.call(null,ks);
coll = G__9929;
k = G__9930;
ks = G__9931;
continue;
}
} else
{return ret__9927;
}
break;
}
};
var G__9928 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9928__delegate.call(this, coll, k, ks);
};
G__9928.cljs$lang$maxFixedArity = 2;
G__9928.cljs$lang$applyTo = (function (arglist__9932){
var coll = cljs.core.first(arglist__9932);
var k = cljs.core.first(cljs.core.next(arglist__9932));
var ks = cljs.core.rest(cljs.core.next(arglist__9932));
return G__9928__delegate(coll, k, ks);
});
G__9928.cljs$lang$arity$variadic = G__9928__delegate;
return G__9928;
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
if((function (){var G__9933__9934 = o;
if((G__9933__9934 != null))
{if((function (){var or__3548__auto____9935 = (G__9933__9934.cljs$lang$protocol_mask$partition0$ & 65536);
if(or__3548__auto____9935)
{return or__3548__auto____9935;
} else
{return G__9933__9934.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9933__9934.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9933__9934);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9933__9934);
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
var G__9937__delegate = function (coll,k,ks){
while(true){
var ret__9936 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__9938 = ret__9936;
var G__9939 = cljs.core.first.call(null,ks);
var G__9940 = cljs.core.next.call(null,ks);
coll = G__9938;
k = G__9939;
ks = G__9940;
continue;
}
} else
{return ret__9936;
}
break;
}
};
var G__9937 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9937__delegate.call(this, coll, k, ks);
};
G__9937.cljs$lang$maxFixedArity = 2;
G__9937.cljs$lang$applyTo = (function (arglist__9941){
var coll = cljs.core.first(arglist__9941);
var k = cljs.core.first(cljs.core.next(arglist__9941));
var ks = cljs.core.rest(cljs.core.next(arglist__9941));
return G__9937__delegate(coll, k, ks);
});
G__9937.cljs$lang$arity$variadic = G__9937__delegate;
return G__9937;
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
{var G__9942__9943 = x;
if((G__9942__9943 != null))
{if((function (){var or__3548__auto____9944 = (G__9942__9943.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3548__auto____9944)
{return or__3548__auto____9944;
} else
{return G__9942__9943.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__9942__9943.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__9942__9943);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__9942__9943);
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
{var G__9945__9946 = x;
if((G__9945__9946 != null))
{if((function (){var or__3548__auto____9947 = (G__9945__9946.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3548__auto____9947)
{return or__3548__auto____9947;
} else
{return G__9945__9946.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__9945__9946.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__9945__9946);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__9945__9946);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__9948__9949 = x;
if((G__9948__9949 != null))
{if((function (){var or__3548__auto____9950 = (G__9948__9949.cljs$lang$protocol_mask$partition0$ & 256);
if(or__3548__auto____9950)
{return or__3548__auto____9950;
} else
{return G__9948__9949.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__9948__9949.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__9948__9949);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__9948__9949);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__9951__9952 = x;
if((G__9951__9952 != null))
{if((function (){var or__3548__auto____9953 = (G__9951__9952.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3548__auto____9953)
{return or__3548__auto____9953;
} else
{return G__9951__9952.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__9951__9952.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__9951__9952);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__9951__9952);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__9954__9955 = x;
if((G__9954__9955 != null))
{if((function (){var or__3548__auto____9956 = (G__9954__9955.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3548__auto____9956)
{return or__3548__auto____9956;
} else
{return G__9954__9955.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__9954__9955.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__9954__9955);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__9954__9955);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__9957__9958 = x;
if((G__9957__9958 != null))
{if((function (){var or__3548__auto____9959 = (G__9957__9958.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3548__auto____9959)
{return or__3548__auto____9959;
} else
{return G__9957__9958.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9957__9958.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9957__9958);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9957__9958);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__9960__9961 = x;
if((G__9960__9961 != null))
{if((function (){var or__3548__auto____9962 = (G__9960__9961.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3548__auto____9962)
{return or__3548__auto____9962;
} else
{return G__9960__9961.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9960__9961.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9960__9961);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9960__9961);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__9963__9964 = x;
if((G__9963__9964 != null))
{if((function (){var or__3548__auto____9965 = (G__9963__9964.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3548__auto____9965)
{return or__3548__auto____9965;
} else
{return G__9963__9964.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__9963__9964.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__9963__9964);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__9963__9964);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__9966__9967 = x;
if((G__9966__9967 != null))
{if((function (){var or__3548__auto____9968 = (G__9966__9967.cljs$lang$protocol_mask$partition0$ & 8192);
if(or__3548__auto____9968)
{return or__3548__auto____9968;
} else
{return G__9966__9967.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__9966__9967.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__9966__9967);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__9966__9967);
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
var G__9969__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__9969 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9969__delegate.call(this, keyvals);
};
G__9969.cljs$lang$maxFixedArity = 0;
G__9969.cljs$lang$applyTo = (function (arglist__9970){
var keyvals = cljs.core.seq(arglist__9970);;
return G__9969__delegate(keyvals);
});
G__9969.cljs$lang$arity$variadic = G__9969__delegate;
return G__9969;
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
var keys__9971 = [];
goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__9971.push(key);
}));
return keys__9971;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__9972 = i;
var j__9973 = j;
var len__9974 = len;
while(true){
if((len__9974 === 0))
{return to;
} else
{(to[j__9973] = (from[i__9972]));
{
var G__9975 = (i__9972 + 1);
var G__9976 = (j__9973 + 1);
var G__9977 = (len__9974 - 1);
i__9972 = G__9975;
j__9973 = G__9976;
len__9974 = G__9977;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__9978 = (i + (len - 1));
var j__9979 = (j + (len - 1));
var len__9980 = len;
while(true){
if((len__9980 === 0))
{return to;
} else
{(to[j__9979] = (from[i__9978]));
{
var G__9981 = (i__9978 - 1);
var G__9982 = (j__9979 - 1);
var G__9983 = (len__9980 - 1);
i__9978 = G__9981;
j__9979 = G__9982;
len__9980 = G__9983;
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
{var G__9984__9985 = s;
if((G__9984__9985 != null))
{if((function (){var or__3548__auto____9986 = (G__9984__9985.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____9986)
{return or__3548__auto____9986;
} else
{return G__9984__9985.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9984__9985.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9984__9985);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9984__9985);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__9987__9988 = s;
if((G__9987__9988 != null))
{if((function (){var or__3548__auto____9989 = (G__9987__9988.cljs$lang$protocol_mask$partition0$ & 4194304);
if(or__3548__auto____9989)
{return or__3548__auto____9989;
} else
{return G__9987__9988.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__9987__9988.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__9987__9988);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__9987__9988);
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
var and__3546__auto____9990 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3546__auto____9990))
{return cljs.core.not.call(null,(function (){var or__3548__auto____9991 = (x.charAt(0) === "\uFDD0");
if(or__3548__auto____9991)
{return or__3548__auto____9991;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3546__auto____9990;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____9992 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3546__auto____9992))
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3546__auto____9992;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____9993 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3546__auto____9993))
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3546__auto____9993;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3548__auto____9994 = cljs.core.fn_QMARK_.call(null,f);
if(or__3548__auto____9994)
{return or__3548__auto____9994;
} else
{var G__9995__9996 = f;
if((G__9995__9996 != null))
{if((function (){var or__3548__auto____9997 = (G__9995__9996.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3548__auto____9997)
{return or__3548__auto____9997;
} else
{return G__9995__9996.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__9995__9996.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__9995__9996);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__9995__9996);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____9998 = cljs.core.number_QMARK_.call(null,n);
if(and__3546__auto____9998)
{return (n == n.toFixed());
} else
{return and__3546__auto____9998;
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
if(cljs.core.truth_((function (){var and__3546__auto____9999 = coll;
if(cljs.core.truth_(and__3546__auto____9999))
{var and__3546__auto____10000 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3546__auto____10000)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____10000;
}
} else
{return and__3546__auto____9999;
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
var G__10005__delegate = function (x,y,more){
if(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y)))
{var s__10001 = cljs.core.set([y,x]);
var xs__10002 = more;
while(true){
var x__10003 = cljs.core.first.call(null,xs__10002);
var etc__10004 = cljs.core.next.call(null,xs__10002);
if(cljs.core.truth_(xs__10002))
{if(cljs.core.contains_QMARK_.call(null,s__10001,x__10003))
{return false;
} else
{{
var G__10006 = cljs.core.conj.call(null,s__10001,x__10003);
var G__10007 = etc__10004;
s__10001 = G__10006;
xs__10002 = G__10007;
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
var G__10005 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10005__delegate.call(this, x, y, more);
};
G__10005.cljs$lang$maxFixedArity = 2;
G__10005.cljs$lang$applyTo = (function (arglist__10008){
var x = cljs.core.first(arglist__10008);
var y = cljs.core.first(cljs.core.next(arglist__10008));
var more = cljs.core.rest(cljs.core.next(arglist__10008));
return G__10005__delegate(x, y, more);
});
G__10005.cljs$lang$arity$variadic = G__10005__delegate;
return G__10005;
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
var r__10009 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__10009))
{return r__10009;
} else
{if(cljs.core.truth_(r__10009))
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
{var a__10010 = cljs.core.to_array.call(null,coll);
goog.array.stableSort.call(null,a__10010,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__10010);
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
var temp__3695__auto____10011 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3695__auto____10011))
{var s__10012 = temp__3695__auto____10011;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__10012),cljs.core.next.call(null,s__10012));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__10013 = val;
var coll__10014 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_(coll__10014))
{var nval__10015 = f.call(null,val__10013,cljs.core.first.call(null,coll__10014));
if(cljs.core.reduced_QMARK_.call(null,nval__10015))
{return cljs.core.deref.call(null,nval__10015);
} else
{{
var G__10016 = nval__10015;
var G__10017 = cljs.core.next.call(null,coll__10014);
val__10013 = G__10016;
coll__10014 = G__10017;
continue;
}
}
} else
{return val__10013;
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
if((function (){var G__10018__10019 = coll;
if((G__10018__10019 != null))
{if((function (){var or__3548__auto____10020 = (G__10018__10019.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3548__auto____10020)
{return or__3548__auto____10020;
} else
{return G__10018__10019.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__10018__10019.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__10018__10019);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__10018__10019);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__10021__10022 = coll;
if((G__10021__10022 != null))
{if((function (){var or__3548__auto____10023 = (G__10021__10022.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3548__auto____10023)
{return or__3548__auto____10023;
} else
{return G__10021__10022.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__10021__10022.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__10021__10022);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__10021__10022);
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
var this__10024 = this;
return this__10024.val;
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
var G__10025__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__10025 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10025__delegate.call(this, x, y, more);
};
G__10025.cljs$lang$maxFixedArity = 2;
G__10025.cljs$lang$applyTo = (function (arglist__10026){
var x = cljs.core.first(arglist__10026);
var y = cljs.core.first(cljs.core.next(arglist__10026));
var more = cljs.core.rest(cljs.core.next(arglist__10026));
return G__10025__delegate(x, y, more);
});
G__10025.cljs$lang$arity$variadic = G__10025__delegate;
return G__10025;
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
var G__10027__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__10027 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10027__delegate.call(this, x, y, more);
};
G__10027.cljs$lang$maxFixedArity = 2;
G__10027.cljs$lang$applyTo = (function (arglist__10028){
var x = cljs.core.first(arglist__10028);
var y = cljs.core.first(cljs.core.next(arglist__10028));
var more = cljs.core.rest(cljs.core.next(arglist__10028));
return G__10027__delegate(x, y, more);
});
G__10027.cljs$lang$arity$variadic = G__10027__delegate;
return G__10027;
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
var G__10029__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__10029 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10029__delegate.call(this, x, y, more);
};
G__10029.cljs$lang$maxFixedArity = 2;
G__10029.cljs$lang$applyTo = (function (arglist__10030){
var x = cljs.core.first(arglist__10030);
var y = cljs.core.first(cljs.core.next(arglist__10030));
var more = cljs.core.rest(cljs.core.next(arglist__10030));
return G__10029__delegate(x, y, more);
});
G__10029.cljs$lang$arity$variadic = G__10029__delegate;
return G__10029;
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
var G__10031__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__10031 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10031__delegate.call(this, x, y, more);
};
G__10031.cljs$lang$maxFixedArity = 2;
G__10031.cljs$lang$applyTo = (function (arglist__10032){
var x = cljs.core.first(arglist__10032);
var y = cljs.core.first(cljs.core.next(arglist__10032));
var more = cljs.core.rest(cljs.core.next(arglist__10032));
return G__10031__delegate(x, y, more);
});
G__10031.cljs$lang$arity$variadic = G__10031__delegate;
return G__10031;
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
var G__10033__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__10034 = y;
var G__10035 = cljs.core.first.call(null,more);
var G__10036 = cljs.core.next.call(null,more);
x = G__10034;
y = G__10035;
more = G__10036;
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
var G__10033 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10033__delegate.call(this, x, y, more);
};
G__10033.cljs$lang$maxFixedArity = 2;
G__10033.cljs$lang$applyTo = (function (arglist__10037){
var x = cljs.core.first(arglist__10037);
var y = cljs.core.first(cljs.core.next(arglist__10037));
var more = cljs.core.rest(cljs.core.next(arglist__10037));
return G__10033__delegate(x, y, more);
});
G__10033.cljs$lang$arity$variadic = G__10033__delegate;
return G__10033;
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
var G__10038__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__10039 = y;
var G__10040 = cljs.core.first.call(null,more);
var G__10041 = cljs.core.next.call(null,more);
x = G__10039;
y = G__10040;
more = G__10041;
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
var G__10038 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10038__delegate.call(this, x, y, more);
};
G__10038.cljs$lang$maxFixedArity = 2;
G__10038.cljs$lang$applyTo = (function (arglist__10042){
var x = cljs.core.first(arglist__10042);
var y = cljs.core.first(cljs.core.next(arglist__10042));
var more = cljs.core.rest(cljs.core.next(arglist__10042));
return G__10038__delegate(x, y, more);
});
G__10038.cljs$lang$arity$variadic = G__10038__delegate;
return G__10038;
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
var G__10043__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__10044 = y;
var G__10045 = cljs.core.first.call(null,more);
var G__10046 = cljs.core.next.call(null,more);
x = G__10044;
y = G__10045;
more = G__10046;
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
var G__10043 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10043__delegate.call(this, x, y, more);
};
G__10043.cljs$lang$maxFixedArity = 2;
G__10043.cljs$lang$applyTo = (function (arglist__10047){
var x = cljs.core.first(arglist__10047);
var y = cljs.core.first(cljs.core.next(arglist__10047));
var more = cljs.core.rest(cljs.core.next(arglist__10047));
return G__10043__delegate(x, y, more);
});
G__10043.cljs$lang$arity$variadic = G__10043__delegate;
return G__10043;
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
var G__10048__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__10049 = y;
var G__10050 = cljs.core.first.call(null,more);
var G__10051 = cljs.core.next.call(null,more);
x = G__10049;
y = G__10050;
more = G__10051;
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
var G__10048 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10048__delegate.call(this, x, y, more);
};
G__10048.cljs$lang$maxFixedArity = 2;
G__10048.cljs$lang$applyTo = (function (arglist__10052){
var x = cljs.core.first(arglist__10052);
var y = cljs.core.first(cljs.core.next(arglist__10052));
var more = cljs.core.rest(cljs.core.next(arglist__10052));
return G__10048__delegate(x, y, more);
});
G__10048.cljs$lang$arity$variadic = G__10048__delegate;
return G__10048;
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
var G__10053__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__10053 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10053__delegate.call(this, x, y, more);
};
G__10053.cljs$lang$maxFixedArity = 2;
G__10053.cljs$lang$applyTo = (function (arglist__10054){
var x = cljs.core.first(arglist__10054);
var y = cljs.core.first(cljs.core.next(arglist__10054));
var more = cljs.core.rest(cljs.core.next(arglist__10054));
return G__10053__delegate(x, y, more);
});
G__10053.cljs$lang$arity$variadic = G__10053__delegate;
return G__10053;
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
var G__10055__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__10055 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10055__delegate.call(this, x, y, more);
};
G__10055.cljs$lang$maxFixedArity = 2;
G__10055.cljs$lang$applyTo = (function (arglist__10056){
var x = cljs.core.first(arglist__10056);
var y = cljs.core.first(cljs.core.next(arglist__10056));
var more = cljs.core.rest(cljs.core.next(arglist__10056));
return G__10055__delegate(x, y, more);
});
G__10055.cljs$lang$arity$variadic = G__10055__delegate;
return G__10055;
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
var rem__10057 = (n % d);
return cljs.core.fix.call(null,((n - rem__10057) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__10058 = cljs.core.quot.call(null,n,d);
return (n - (d * q__10058));
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
var c__10059 = 0;
var n__10060 = n;
while(true){
if((n__10060 === 0))
{return c__10059;
} else
{{
var G__10061 = (c__10059 + 1);
var G__10062 = (n__10060 & (n__10060 - 1));
c__10059 = G__10061;
n__10060 = G__10062;
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
var G__10063__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__10064 = y;
var G__10065 = cljs.core.first.call(null,more);
var G__10066 = cljs.core.next.call(null,more);
x = G__10064;
y = G__10065;
more = G__10066;
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
var G__10063 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10063__delegate.call(this, x, y, more);
};
G__10063.cljs$lang$maxFixedArity = 2;
G__10063.cljs$lang$applyTo = (function (arglist__10067){
var x = cljs.core.first(arglist__10067);
var y = cljs.core.first(cljs.core.next(arglist__10067));
var more = cljs.core.rest(cljs.core.next(arglist__10067));
return G__10063__delegate(x, y, more);
});
G__10063.cljs$lang$arity$variadic = G__10063__delegate;
return G__10063;
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
var n__10068 = n;
var xs__10069 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10070 = xs__10069;
if(cljs.core.truth_(and__3546__auto____10070))
{return (n__10068 > 0);
} else
{return and__3546__auto____10070;
}
})()))
{{
var G__10071 = (n__10068 - 1);
var G__10072 = cljs.core.next.call(null,xs__10069);
n__10068 = G__10071;
xs__10069 = G__10072;
continue;
}
} else
{return xs__10069;
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
var G__10073__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__10074 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__10075 = cljs.core.next.call(null,more);
sb = G__10074;
more = G__10075;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__10073 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10073__delegate.call(this, x, ys);
};
G__10073.cljs$lang$maxFixedArity = 1;
G__10073.cljs$lang$applyTo = (function (arglist__10076){
var x = cljs.core.first(arglist__10076);
var ys = cljs.core.rest(arglist__10076);
return G__10073__delegate(x, ys);
});
G__10073.cljs$lang$arity$variadic = G__10073__delegate;
return G__10073;
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
var G__10077__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__10078 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__10079 = cljs.core.next.call(null,more);
sb = G__10078;
more = G__10079;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__10077 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10077__delegate.call(this, x, ys);
};
G__10077.cljs$lang$maxFixedArity = 1;
G__10077.cljs$lang$applyTo = (function (arglist__10080){
var x = cljs.core.first(arglist__10080);
var ys = cljs.core.rest(arglist__10080);
return G__10077__delegate(x, ys);
});
G__10077.cljs$lang$arity$variadic = G__10077__delegate;
return G__10077;
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__10081 = cljs.core.seq.call(null,x);
var ys__10082 = cljs.core.seq.call(null,y);
while(true){
if((xs__10081 == null))
{return (ys__10082 == null);
} else
{if((ys__10082 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__10081),cljs.core.first.call(null,ys__10082)))
{{
var G__10083 = cljs.core.next.call(null,xs__10081);
var G__10084 = cljs.core.next.call(null,ys__10082);
xs__10081 = G__10083;
ys__10082 = G__10084;
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
return cljs.core.reduce.call(null,(function (p1__10085_SHARP_,p2__10086_SHARP_){
return cljs.core.hash_combine.call(null,p1__10085_SHARP_,cljs.core.hash.call(null,p2__10086_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__10087 = 0;
var s__10088 = cljs.core.seq.call(null,m);
while(true){
if(cljs.core.truth_(s__10088))
{var e__10089 = cljs.core.first.call(null,s__10088);
{
var G__10090 = ((h__10087 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__10089)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__10089)))) % 4503599627370496);
var G__10091 = cljs.core.next.call(null,s__10088);
h__10087 = G__10090;
s__10088 = G__10091;
continue;
}
} else
{return h__10087;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__10092 = 0;
var s__10093 = cljs.core.seq.call(null,s);
while(true){
if(cljs.core.truth_(s__10093))
{var e__10094 = cljs.core.first.call(null,s__10093);
{
var G__10095 = ((h__10092 + cljs.core.hash.call(null,e__10094)) % 4503599627370496);
var G__10096 = cljs.core.next.call(null,s__10093);
h__10092 = G__10095;
s__10093 = G__10096;
continue;
}
} else
{return h__10092;
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
var G__10097__10098 = cljs.core.seq.call(null,fn_map);
if(cljs.core.truth_(G__10097__10098))
{var G__10100__10102 = cljs.core.first.call(null,G__10097__10098);
var vec__10101__10103 = G__10100__10102;
var key_name__10104 = cljs.core.nth.call(null,vec__10101__10103,0,null);
var f__10105 = cljs.core.nth.call(null,vec__10101__10103,1,null);
var G__10097__10106 = G__10097__10098;
var G__10100__10107 = G__10100__10102;
var G__10097__10108 = G__10097__10106;
while(true){
var vec__10109__10110 = G__10100__10107;
var key_name__10111 = cljs.core.nth.call(null,vec__10109__10110,0,null);
var f__10112 = cljs.core.nth.call(null,vec__10109__10110,1,null);
var G__10097__10113 = G__10097__10108;
var str_name__10114 = cljs.core.name.call(null,key_name__10111);
obj[str_name__10114] = f__10112;
var temp__3698__auto____10115 = cljs.core.next.call(null,G__10097__10113);
if(cljs.core.truth_(temp__3698__auto____10115))
{var G__10097__10116 = temp__3698__auto____10115;
{
var G__10117 = cljs.core.first.call(null,G__10097__10116);
var G__10118 = G__10097__10116;
G__10100__10107 = G__10117;
G__10097__10108 = G__10118;
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
var this__10119 = this;
var h__2226__auto____10120 = this__10119.__hash;
if((h__2226__auto____10120 != null))
{return h__2226__auto____10120;
} else
{var h__2226__auto____10121 = cljs.core.hash_coll.call(null,coll);
this__10119.__hash = h__2226__auto____10121;
return h__2226__auto____10121;
}
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10122 = this;
return (new cljs.core.List(this__10122.meta,o,coll,(this__10122.count + 1),null));
});
cljs.core.List.prototype.cljs$core$ASeq$ = true;
cljs.core.List.prototype.toString = (function (){
var this__10123 = this;
var this$__10124 = this;
return cljs.core.pr_str.call(null,this$__10124);
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10125 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10126 = this;
return this__10126.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10127 = this;
return this__10127.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10128 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10129 = this;
return this__10129.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10130 = this;
return this__10130.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10131 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10132 = this;
return (new cljs.core.List(meta,this__10132.first,this__10132.rest,this__10132.count,this__10132.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10133 = this;
return this__10133.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10134 = this;
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
var this__10135 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10136 = this;
return (new cljs.core.List(this__10136.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__10137 = this;
var this$__10138 = this;
return cljs.core.pr_str.call(null,this$__10138);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10139 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10140 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10141 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10142 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10143 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10144 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10145 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10146 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10147 = this;
return this__10147.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10148 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IList$ = true;
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__10149__10150 = coll;
if((G__10149__10150 != null))
{if((function (){var or__3548__auto____10151 = (G__10149__10150.cljs$lang$protocol_mask$partition0$ & 67108864);
if(or__3548__auto____10151)
{return or__3548__auto____10151;
} else
{return G__10149__10150.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__10149__10150.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__10149__10150);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__10149__10150);
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
list.cljs$lang$applyTo = (function (arglist__10152){
var items = cljs.core.seq(arglist__10152);;
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
var this__10153 = this;
var h__2226__auto____10154 = this__10153.__hash;
if((h__2226__auto____10154 != null))
{return h__2226__auto____10154;
} else
{var h__2226__auto____10155 = cljs.core.hash_coll.call(null,coll);
this__10153.__hash = h__2226__auto____10155;
return h__2226__auto____10155;
}
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10156 = this;
return (new cljs.core.Cons(null,o,coll,this__10156.__hash));
});
cljs.core.Cons.prototype.cljs$core$ASeq$ = true;
cljs.core.Cons.prototype.toString = (function (){
var this__10157 = this;
var this$__10158 = this;
return cljs.core.pr_str.call(null,this$__10158);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10159 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10160 = this;
return this__10160.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10161 = this;
if((this__10161.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__10161.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10162 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10163 = this;
return (new cljs.core.Cons(meta,this__10163.first,this__10163.rest,this__10163.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10164 = this;
return this__10164.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10165 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10165.meta);
});
cljs.core.Cons.prototype.cljs$core$IList$ = true;
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3548__auto____10166 = (coll == null);
if(or__3548__auto____10166)
{return or__3548__auto____10166;
} else
{var G__10167__10168 = coll;
if((G__10167__10168 != null))
{if((function (){var or__3548__auto____10169 = (G__10167__10168.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____10169)
{return or__3548__auto____10169;
} else
{return G__10167__10168.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__10167__10168.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__10167__10168);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__10167__10168);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__10170__10171 = x;
if((G__10170__10171 != null))
{if((function (){var or__3548__auto____10172 = (G__10170__10171.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3548__auto____10172)
{return or__3548__auto____10172;
} else
{return G__10170__10171.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__10170__10171.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__10170__10171);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__10170__10171);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__10173 = null;
var G__10173__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10173__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10173 = function(string,f,start){
switch(arguments.length){
case 2:
return G__10173__2.call(this,string,f);
case 3:
return G__10173__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10173;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10174 = null;
var G__10174__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10174__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10174 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__10174__2.call(this,string,k);
case 3:
return G__10174__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10174;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10175 = null;
var G__10175__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__10175__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10175 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__10175__2.call(this,string,n);
case 3:
return G__10175__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10175;
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
var G__10184 = null;
var G__10184__2 = (function (tsym10178,coll){
var tsym10178__10180 = this;
var this$__10181 = tsym10178__10180;
return cljs.core.get.call(null,coll,this$__10181.toString());
});
var G__10184__3 = (function (tsym10179,coll,not_found){
var tsym10179__10182 = this;
var this$__10183 = tsym10179__10182;
return cljs.core.get.call(null,coll,this$__10183.toString(),not_found);
});
G__10184 = function(tsym10179,coll,not_found){
switch(arguments.length){
case 2:
return G__10184__2.call(this,tsym10179,coll);
case 3:
return G__10184__3.call(this,tsym10179,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10184;
})()
;
String.prototype.apply = (function (tsym10176,args10177){
return tsym10176.call.apply(tsym10176,[tsym10176].concat(cljs.core.aclone.call(null,args10177)));
});
String['prototype']['apply'] = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__10185 = lazy_seq.x;
if(cljs.core.truth_(lazy_seq.realized))
{return x__10185;
} else
{lazy_seq.x = x__10185.call(null);
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
var this__10186 = this;
var h__2226__auto____10187 = this__10186.__hash;
if((h__2226__auto____10187 != null))
{return h__2226__auto____10187;
} else
{var h__2226__auto____10188 = cljs.core.hash_coll.call(null,coll);
this__10186.__hash = h__2226__auto____10188;
return h__2226__auto____10188;
}
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10189 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__10190 = this;
var this$__10191 = this;
return cljs.core.pr_str.call(null,this$__10191);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10192 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10193 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10194 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10195 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10196 = this;
return (new cljs.core.LazySeq(meta,this__10196.realized,this__10196.x,this__10196.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10197 = this;
return this__10197.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10198 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10198.meta);
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10199 = [];
var s__10200 = s;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10200)))
{ary__10199.push(cljs.core.first.call(null,s__10200));
{
var G__10201 = cljs.core.next.call(null,s__10200);
s__10200 = G__10201;
continue;
}
} else
{return ary__10199;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__10202 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__10203 = 0;
var xs__10204 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_(xs__10204))
{(ret__10202[i__10203] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__10204)));
{
var G__10205 = (i__10203 + 1);
var G__10206 = cljs.core.next.call(null,xs__10204);
i__10203 = G__10205;
xs__10204 = G__10206;
continue;
}
} else
{}
break;
}
return ret__10202;
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
var a__10207 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__10208 = cljs.core.seq.call(null,init_val_or_seq);
var i__10209 = 0;
var s__10210 = s__10208;
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10211 = s__10210;
if(cljs.core.truth_(and__3546__auto____10211))
{return (i__10209 < size);
} else
{return and__3546__auto____10211;
}
})()))
{(a__10207[i__10209] = cljs.core.first.call(null,s__10210));
{
var G__10214 = (i__10209 + 1);
var G__10215 = cljs.core.next.call(null,s__10210);
i__10209 = G__10214;
s__10210 = G__10215;
continue;
}
} else
{return a__10207;
}
break;
}
} else
{var n__2515__auto____10212 = size;
var i__10213 = 0;
while(true){
if((i__10213 < n__2515__auto____10212))
{(a__10207[i__10213] = init_val_or_seq);
{
var G__10216 = (i__10213 + 1);
i__10213 = G__10216;
continue;
}
} else
{}
break;
}
return a__10207;
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
var a__10217 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__10218 = cljs.core.seq.call(null,init_val_or_seq);
var i__10219 = 0;
var s__10220 = s__10218;
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10221 = s__10220;
if(cljs.core.truth_(and__3546__auto____10221))
{return (i__10219 < size);
} else
{return and__3546__auto____10221;
}
})()))
{(a__10217[i__10219] = cljs.core.first.call(null,s__10220));
{
var G__10224 = (i__10219 + 1);
var G__10225 = cljs.core.next.call(null,s__10220);
i__10219 = G__10224;
s__10220 = G__10225;
continue;
}
} else
{return a__10217;
}
break;
}
} else
{var n__2515__auto____10222 = size;
var i__10223 = 0;
while(true){
if((i__10223 < n__2515__auto____10222))
{(a__10217[i__10223] = init_val_or_seq);
{
var G__10226 = (i__10223 + 1);
i__10223 = G__10226;
continue;
}
} else
{}
break;
}
return a__10217;
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
var a__10227 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__10228 = cljs.core.seq.call(null,init_val_or_seq);
var i__10229 = 0;
var s__10230 = s__10228;
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10231 = s__10230;
if(cljs.core.truth_(and__3546__auto____10231))
{return (i__10229 < size);
} else
{return and__3546__auto____10231;
}
})()))
{(a__10227[i__10229] = cljs.core.first.call(null,s__10230));
{
var G__10234 = (i__10229 + 1);
var G__10235 = cljs.core.next.call(null,s__10230);
i__10229 = G__10234;
s__10230 = G__10235;
continue;
}
} else
{return a__10227;
}
break;
}
} else
{var n__2515__auto____10232 = size;
var i__10233 = 0;
while(true){
if((i__10233 < n__2515__auto____10232))
{(a__10227[i__10233] = init_val_or_seq);
{
var G__10236 = (i__10233 + 1);
i__10233 = G__10236;
continue;
}
} else
{}
break;
}
return a__10227;
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
{var s__10237 = s;
var i__10238 = n;
var sum__10239 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10240 = (i__10238 > 0);
if(and__3546__auto____10240)
{return cljs.core.seq.call(null,s__10237);
} else
{return and__3546__auto____10240;
}
})()))
{{
var G__10241 = cljs.core.next.call(null,s__10237);
var G__10242 = (i__10238 - 1);
var G__10243 = (sum__10239 + 1);
s__10237 = G__10241;
i__10238 = G__10242;
sum__10239 = G__10243;
continue;
}
} else
{return sum__10239;
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
var s__10244 = cljs.core.seq.call(null,x);
if(cljs.core.truth_(s__10244))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10244),concat.call(null,cljs.core.rest.call(null,s__10244),y));
} else
{return y;
}
})));
});
var concat__3 = (function() { 
var G__10247__delegate = function (x,y,zs){
var cat__10246 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10245 = cljs.core.seq.call(null,xys);
if(cljs.core.truth_(xys__10245))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10245),cat.call(null,cljs.core.rest.call(null,xys__10245),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});
return cat__10246.call(null,concat.call(null,x,y),zs);
};
var G__10247 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10247__delegate.call(this, x, y, zs);
};
G__10247.cljs$lang$maxFixedArity = 2;
G__10247.cljs$lang$applyTo = (function (arglist__10248){
var x = cljs.core.first(arglist__10248);
var y = cljs.core.first(cljs.core.next(arglist__10248));
var zs = cljs.core.rest(cljs.core.next(arglist__10248));
return G__10247__delegate(x, y, zs);
});
G__10247.cljs$lang$arity$variadic = G__10247__delegate;
return G__10247;
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
var G__10249__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10249 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10249__delegate.call(this, a, b, c, d, more);
};
G__10249.cljs$lang$maxFixedArity = 4;
G__10249.cljs$lang$applyTo = (function (arglist__10250){
var a = cljs.core.first(arglist__10250);
var b = cljs.core.first(cljs.core.next(arglist__10250));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10250)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10250))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10250))));
return G__10249__delegate(a, b, c, d, more);
});
G__10249.cljs$lang$arity$variadic = G__10249__delegate;
return G__10249;
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
var args__10251 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__10252 = cljs.core._first.call(null,args__10251);
var args__10253 = cljs.core._rest.call(null,args__10251);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__10252);
} else
{return f.call(null,a__10252);
}
} else
{var b__10254 = cljs.core._first.call(null,args__10253);
var args__10255 = cljs.core._rest.call(null,args__10253);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__10252,b__10254);
} else
{return f.call(null,a__10252,b__10254);
}
} else
{var c__10256 = cljs.core._first.call(null,args__10255);
var args__10257 = cljs.core._rest.call(null,args__10255);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__10252,b__10254,c__10256);
} else
{return f.call(null,a__10252,b__10254,c__10256);
}
} else
{var d__10258 = cljs.core._first.call(null,args__10257);
var args__10259 = cljs.core._rest.call(null,args__10257);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__10252,b__10254,c__10256,d__10258);
} else
{return f.call(null,a__10252,b__10254,c__10256,d__10258);
}
} else
{var e__10260 = cljs.core._first.call(null,args__10259);
var args__10261 = cljs.core._rest.call(null,args__10259);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__10252,b__10254,c__10256,d__10258,e__10260);
} else
{return f.call(null,a__10252,b__10254,c__10256,d__10258,e__10260);
}
} else
{var f__10262 = cljs.core._first.call(null,args__10261);
var args__10263 = cljs.core._rest.call(null,args__10261);
if((argc === 6))
{if(f__10262.cljs$lang$arity$6)
{return f__10262.cljs$lang$arity$6(a__10252,b__10254,c__10256,d__10258,e__10260,f__10262);
} else
{return f__10262.call(null,a__10252,b__10254,c__10256,d__10258,e__10260,f__10262);
}
} else
{var g__10264 = cljs.core._first.call(null,args__10263);
var args__10265 = cljs.core._rest.call(null,args__10263);
if((argc === 7))
{if(f__10262.cljs$lang$arity$7)
{return f__10262.cljs$lang$arity$7(a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264);
} else
{return f__10262.call(null,a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264);
}
} else
{var h__10266 = cljs.core._first.call(null,args__10265);
var args__10267 = cljs.core._rest.call(null,args__10265);
if((argc === 8))
{if(f__10262.cljs$lang$arity$8)
{return f__10262.cljs$lang$arity$8(a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266);
} else
{return f__10262.call(null,a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266);
}
} else
{var i__10268 = cljs.core._first.call(null,args__10267);
var args__10269 = cljs.core._rest.call(null,args__10267);
if((argc === 9))
{if(f__10262.cljs$lang$arity$9)
{return f__10262.cljs$lang$arity$9(a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268);
} else
{return f__10262.call(null,a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268);
}
} else
{var j__10270 = cljs.core._first.call(null,args__10269);
var args__10271 = cljs.core._rest.call(null,args__10269);
if((argc === 10))
{if(f__10262.cljs$lang$arity$10)
{return f__10262.cljs$lang$arity$10(a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270);
} else
{return f__10262.call(null,a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270);
}
} else
{var k__10272 = cljs.core._first.call(null,args__10271);
var args__10273 = cljs.core._rest.call(null,args__10271);
if((argc === 11))
{if(f__10262.cljs$lang$arity$11)
{return f__10262.cljs$lang$arity$11(a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270,k__10272);
} else
{return f__10262.call(null,a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270,k__10272);
}
} else
{var l__10274 = cljs.core._first.call(null,args__10273);
var args__10275 = cljs.core._rest.call(null,args__10273);
if((argc === 12))
{if(f__10262.cljs$lang$arity$12)
{return f__10262.cljs$lang$arity$12(a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270,k__10272,l__10274);
} else
{return f__10262.call(null,a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270,k__10272,l__10274);
}
} else
{var m__10276 = cljs.core._first.call(null,args__10275);
var args__10277 = cljs.core._rest.call(null,args__10275);
if((argc === 13))
{if(f__10262.cljs$lang$arity$13)
{return f__10262.cljs$lang$arity$13(a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270,k__10272,l__10274,m__10276);
} else
{return f__10262.call(null,a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270,k__10272,l__10274,m__10276);
}
} else
{var n__10278 = cljs.core._first.call(null,args__10277);
var args__10279 = cljs.core._rest.call(null,args__10277);
if((argc === 14))
{if(f__10262.cljs$lang$arity$14)
{return f__10262.cljs$lang$arity$14(a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270,k__10272,l__10274,m__10276,n__10278);
} else
{return f__10262.call(null,a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270,k__10272,l__10274,m__10276,n__10278);
}
} else
{var o__10280 = cljs.core._first.call(null,args__10279);
var args__10281 = cljs.core._rest.call(null,args__10279);
if((argc === 15))
{if(f__10262.cljs$lang$arity$15)
{return f__10262.cljs$lang$arity$15(a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270,k__10272,l__10274,m__10276,n__10278,o__10280);
} else
{return f__10262.call(null,a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270,k__10272,l__10274,m__10276,n__10278,o__10280);
}
} else
{var p__10282 = cljs.core._first.call(null,args__10281);
var args__10283 = cljs.core._rest.call(null,args__10281);
if((argc === 16))
{if(f__10262.cljs$lang$arity$16)
{return f__10262.cljs$lang$arity$16(a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270,k__10272,l__10274,m__10276,n__10278,o__10280,p__10282);
} else
{return f__10262.call(null,a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270,k__10272,l__10274,m__10276,n__10278,o__10280,p__10282);
}
} else
{var q__10284 = cljs.core._first.call(null,args__10283);
var args__10285 = cljs.core._rest.call(null,args__10283);
if((argc === 17))
{if(f__10262.cljs$lang$arity$17)
{return f__10262.cljs$lang$arity$17(a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270,k__10272,l__10274,m__10276,n__10278,o__10280,p__10282,q__10284);
} else
{return f__10262.call(null,a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270,k__10272,l__10274,m__10276,n__10278,o__10280,p__10282,q__10284);
}
} else
{var r__10286 = cljs.core._first.call(null,args__10285);
var args__10287 = cljs.core._rest.call(null,args__10285);
if((argc === 18))
{if(f__10262.cljs$lang$arity$18)
{return f__10262.cljs$lang$arity$18(a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270,k__10272,l__10274,m__10276,n__10278,o__10280,p__10282,q__10284,r__10286);
} else
{return f__10262.call(null,a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270,k__10272,l__10274,m__10276,n__10278,o__10280,p__10282,q__10284,r__10286);
}
} else
{var s__10288 = cljs.core._first.call(null,args__10287);
var args__10289 = cljs.core._rest.call(null,args__10287);
if((argc === 19))
{if(f__10262.cljs$lang$arity$19)
{return f__10262.cljs$lang$arity$19(a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270,k__10272,l__10274,m__10276,n__10278,o__10280,p__10282,q__10284,r__10286,s__10288);
} else
{return f__10262.call(null,a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270,k__10272,l__10274,m__10276,n__10278,o__10280,p__10282,q__10284,r__10286,s__10288);
}
} else
{var t__10290 = cljs.core._first.call(null,args__10289);
var args__10291 = cljs.core._rest.call(null,args__10289);
if((argc === 20))
{if(f__10262.cljs$lang$arity$20)
{return f__10262.cljs$lang$arity$20(a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270,k__10272,l__10274,m__10276,n__10278,o__10280,p__10282,q__10284,r__10286,s__10288,t__10290);
} else
{return f__10262.call(null,a__10252,b__10254,c__10256,d__10258,e__10260,f__10262,g__10264,h__10266,i__10268,j__10270,k__10272,l__10274,m__10276,n__10278,o__10280,p__10282,q__10284,r__10286,s__10288,t__10290);
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
var fixed_arity__10292 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10293 = cljs.core.bounded_count.call(null,args,(fixed_arity__10292 + 1));
if((bc__10293 <= fixed_arity__10292))
{return cljs.core.apply_to.call(null,f,bc__10293,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__10294 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10295 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10296 = cljs.core.bounded_count.call(null,arglist__10294,(fixed_arity__10295 + 1));
if((bc__10296 <= fixed_arity__10295))
{return cljs.core.apply_to.call(null,f,bc__10296,arglist__10294);
} else
{return f.cljs$lang$applyTo(arglist__10294);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10294));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__10297 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10298 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10299 = cljs.core.bounded_count.call(null,arglist__10297,(fixed_arity__10298 + 1));
if((bc__10299 <= fixed_arity__10298))
{return cljs.core.apply_to.call(null,f,bc__10299,arglist__10297);
} else
{return f.cljs$lang$applyTo(arglist__10297);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10297));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__10300 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10301 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10302 = cljs.core.bounded_count.call(null,arglist__10300,(fixed_arity__10301 + 1));
if((bc__10302 <= fixed_arity__10301))
{return cljs.core.apply_to.call(null,f,bc__10302,arglist__10300);
} else
{return f.cljs$lang$applyTo(arglist__10300);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10300));
}
});
var apply__6 = (function() { 
var G__10306__delegate = function (f,a,b,c,d,args){
var arglist__10303 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10304 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10305 = cljs.core.bounded_count.call(null,arglist__10303,(fixed_arity__10304 + 1));
if((bc__10305 <= fixed_arity__10304))
{return cljs.core.apply_to.call(null,f,bc__10305,arglist__10303);
} else
{return f.cljs$lang$applyTo(arglist__10303);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10303));
}
};
var G__10306 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10306__delegate.call(this, f, a, b, c, d, args);
};
G__10306.cljs$lang$maxFixedArity = 5;
G__10306.cljs$lang$applyTo = (function (arglist__10307){
var f = cljs.core.first(arglist__10307);
var a = cljs.core.first(cljs.core.next(arglist__10307));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10307)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10307))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10307)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10307)))));
return G__10306__delegate(f, a, b, c, d, args);
});
G__10306.cljs$lang$arity$variadic = G__10306__delegate;
return G__10306;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10308){
var obj = cljs.core.first(arglist__10308);
var f = cljs.core.first(cljs.core.next(arglist__10308));
var args = cljs.core.rest(cljs.core.next(arglist__10308));
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
var G__10309__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10309 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10309__delegate.call(this, x, y, more);
};
G__10309.cljs$lang$maxFixedArity = 2;
G__10309.cljs$lang$applyTo = (function (arglist__10310){
var x = cljs.core.first(arglist__10310);
var y = cljs.core.first(cljs.core.next(arglist__10310));
var more = cljs.core.rest(cljs.core.next(arglist__10310));
return G__10309__delegate(x, y, more);
});
G__10309.cljs$lang$arity$variadic = G__10309__delegate;
return G__10309;
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
var G__10311 = pred;
var G__10312 = cljs.core.next.call(null,coll);
pred = G__10311;
coll = G__10312;
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
{var or__3548__auto____10313 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3548__auto____10313))
{return or__3548__auto____10313;
} else
{{
var G__10314 = pred;
var G__10315 = cljs.core.next.call(null,coll);
pred = G__10314;
coll = G__10315;
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
var G__10316 = null;
var G__10316__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10316__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10316__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10316__3 = (function() { 
var G__10317__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10317 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10317__delegate.call(this, x, y, zs);
};
G__10317.cljs$lang$maxFixedArity = 2;
G__10317.cljs$lang$applyTo = (function (arglist__10318){
var x = cljs.core.first(arglist__10318);
var y = cljs.core.first(cljs.core.next(arglist__10318));
var zs = cljs.core.rest(cljs.core.next(arglist__10318));
return G__10317__delegate(x, y, zs);
});
G__10317.cljs$lang$arity$variadic = G__10317__delegate;
return G__10317;
})()
;
G__10316 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__10316__0.call(this);
case 1:
return G__10316__1.call(this,x);
case 2:
return G__10316__2.call(this,x,y);
default:
return G__10316__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__10316.cljs$lang$maxFixedArity = 2;
G__10316.cljs$lang$applyTo = G__10316__3.cljs$lang$applyTo;
return G__10316;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10319__delegate = function (args){
return x;
};
var G__10319 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10319__delegate.call(this, args);
};
G__10319.cljs$lang$maxFixedArity = 0;
G__10319.cljs$lang$applyTo = (function (arglist__10320){
var args = cljs.core.seq(arglist__10320);;
return G__10319__delegate(args);
});
G__10319.cljs$lang$arity$variadic = G__10319__delegate;
return G__10319;
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
var G__10324 = null;
var G__10324__0 = (function (){
return f.call(null,g.call(null));
});
var G__10324__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10324__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10324__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10324__4 = (function() { 
var G__10325__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10325 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10325__delegate.call(this, x, y, z, args);
};
G__10325.cljs$lang$maxFixedArity = 3;
G__10325.cljs$lang$applyTo = (function (arglist__10326){
var x = cljs.core.first(arglist__10326);
var y = cljs.core.first(cljs.core.next(arglist__10326));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10326)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10326)));
return G__10325__delegate(x, y, z, args);
});
G__10325.cljs$lang$arity$variadic = G__10325__delegate;
return G__10325;
})()
;
G__10324 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10324__0.call(this);
case 1:
return G__10324__1.call(this,x);
case 2:
return G__10324__2.call(this,x,y);
case 3:
return G__10324__3.call(this,x,y,z);
default:
return G__10324__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10324.cljs$lang$maxFixedArity = 3;
G__10324.cljs$lang$applyTo = G__10324__4.cljs$lang$applyTo;
return G__10324;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__10327 = null;
var G__10327__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10327__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10327__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10327__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10327__4 = (function() { 
var G__10328__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10328 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10328__delegate.call(this, x, y, z, args);
};
G__10328.cljs$lang$maxFixedArity = 3;
G__10328.cljs$lang$applyTo = (function (arglist__10329){
var x = cljs.core.first(arglist__10329);
var y = cljs.core.first(cljs.core.next(arglist__10329));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10329)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10329)));
return G__10328__delegate(x, y, z, args);
});
G__10328.cljs$lang$arity$variadic = G__10328__delegate;
return G__10328;
})()
;
G__10327 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10327__0.call(this);
case 1:
return G__10327__1.call(this,x);
case 2:
return G__10327__2.call(this,x,y);
case 3:
return G__10327__3.call(this,x,y,z);
default:
return G__10327__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10327.cljs$lang$maxFixedArity = 3;
G__10327.cljs$lang$applyTo = G__10327__4.cljs$lang$applyTo;
return G__10327;
})()
});
var comp__4 = (function() { 
var G__10330__delegate = function (f1,f2,f3,fs){
var fs__10321 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__10331__delegate = function (args){
var ret__10322 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10321),args);
var fs__10323 = cljs.core.next.call(null,fs__10321);
while(true){
if(cljs.core.truth_(fs__10323))
{{
var G__10332 = cljs.core.first.call(null,fs__10323).call(null,ret__10322);
var G__10333 = cljs.core.next.call(null,fs__10323);
ret__10322 = G__10332;
fs__10323 = G__10333;
continue;
}
} else
{return ret__10322;
}
break;
}
};
var G__10331 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10331__delegate.call(this, args);
};
G__10331.cljs$lang$maxFixedArity = 0;
G__10331.cljs$lang$applyTo = (function (arglist__10334){
var args = cljs.core.seq(arglist__10334);;
return G__10331__delegate(args);
});
G__10331.cljs$lang$arity$variadic = G__10331__delegate;
return G__10331;
})()
;
};
var G__10330 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10330__delegate.call(this, f1, f2, f3, fs);
};
G__10330.cljs$lang$maxFixedArity = 3;
G__10330.cljs$lang$applyTo = (function (arglist__10335){
var f1 = cljs.core.first(arglist__10335);
var f2 = cljs.core.first(cljs.core.next(arglist__10335));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10335)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10335)));
return G__10330__delegate(f1, f2, f3, fs);
});
G__10330.cljs$lang$arity$variadic = G__10330__delegate;
return G__10330;
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
var G__10336__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10336 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10336__delegate.call(this, args);
};
G__10336.cljs$lang$maxFixedArity = 0;
G__10336.cljs$lang$applyTo = (function (arglist__10337){
var args = cljs.core.seq(arglist__10337);;
return G__10336__delegate(args);
});
G__10336.cljs$lang$arity$variadic = G__10336__delegate;
return G__10336;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__10338__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10338 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10338__delegate.call(this, args);
};
G__10338.cljs$lang$maxFixedArity = 0;
G__10338.cljs$lang$applyTo = (function (arglist__10339){
var args = cljs.core.seq(arglist__10339);;
return G__10338__delegate(args);
});
G__10338.cljs$lang$arity$variadic = G__10338__delegate;
return G__10338;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10340__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10340 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10340__delegate.call(this, args);
};
G__10340.cljs$lang$maxFixedArity = 0;
G__10340.cljs$lang$applyTo = (function (arglist__10341){
var args = cljs.core.seq(arglist__10341);;
return G__10340__delegate(args);
});
G__10340.cljs$lang$arity$variadic = G__10340__delegate;
return G__10340;
})()
;
});
var partial__5 = (function() { 
var G__10342__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10343__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10343 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10343__delegate.call(this, args);
};
G__10343.cljs$lang$maxFixedArity = 0;
G__10343.cljs$lang$applyTo = (function (arglist__10344){
var args = cljs.core.seq(arglist__10344);;
return G__10343__delegate(args);
});
G__10343.cljs$lang$arity$variadic = G__10343__delegate;
return G__10343;
})()
;
};
var G__10342 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10342__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10342.cljs$lang$maxFixedArity = 4;
G__10342.cljs$lang$applyTo = (function (arglist__10345){
var f = cljs.core.first(arglist__10345);
var arg1 = cljs.core.first(cljs.core.next(arglist__10345));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10345)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10345))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10345))));
return G__10342__delegate(f, arg1, arg2, arg3, more);
});
G__10342.cljs$lang$arity$variadic = G__10342__delegate;
return G__10342;
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
var G__10346 = null;
var G__10346__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__10346__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__10346__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__10346__4 = (function() { 
var G__10347__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__10347 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10347__delegate.call(this, a, b, c, ds);
};
G__10347.cljs$lang$maxFixedArity = 3;
G__10347.cljs$lang$applyTo = (function (arglist__10348){
var a = cljs.core.first(arglist__10348);
var b = cljs.core.first(cljs.core.next(arglist__10348));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10348)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10348)));
return G__10347__delegate(a, b, c, ds);
});
G__10347.cljs$lang$arity$variadic = G__10347__delegate;
return G__10347;
})()
;
G__10346 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__10346__1.call(this,a);
case 2:
return G__10346__2.call(this,a,b);
case 3:
return G__10346__3.call(this,a,b,c);
default:
return G__10346__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10346.cljs$lang$maxFixedArity = 3;
G__10346.cljs$lang$applyTo = G__10346__4.cljs$lang$applyTo;
return G__10346;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__10349 = null;
var G__10349__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__10349__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__10349__4 = (function() { 
var G__10350__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__10350 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10350__delegate.call(this, a, b, c, ds);
};
G__10350.cljs$lang$maxFixedArity = 3;
G__10350.cljs$lang$applyTo = (function (arglist__10351){
var a = cljs.core.first(arglist__10351);
var b = cljs.core.first(cljs.core.next(arglist__10351));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10351)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10351)));
return G__10350__delegate(a, b, c, ds);
});
G__10350.cljs$lang$arity$variadic = G__10350__delegate;
return G__10350;
})()
;
G__10349 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__10349__2.call(this,a,b);
case 3:
return G__10349__3.call(this,a,b,c);
default:
return G__10349__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10349.cljs$lang$maxFixedArity = 3;
G__10349.cljs$lang$applyTo = G__10349__4.cljs$lang$applyTo;
return G__10349;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__10352 = null;
var G__10352__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__10352__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__10352__4 = (function() { 
var G__10353__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__10353 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10353__delegate.call(this, a, b, c, ds);
};
G__10353.cljs$lang$maxFixedArity = 3;
G__10353.cljs$lang$applyTo = (function (arglist__10354){
var a = cljs.core.first(arglist__10354);
var b = cljs.core.first(cljs.core.next(arglist__10354));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10354)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10354)));
return G__10353__delegate(a, b, c, ds);
});
G__10353.cljs$lang$arity$variadic = G__10353__delegate;
return G__10353;
})()
;
G__10352 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__10352__2.call(this,a,b);
case 3:
return G__10352__3.call(this,a,b,c);
default:
return G__10352__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10352.cljs$lang$maxFixedArity = 3;
G__10352.cljs$lang$applyTo = G__10352__4.cljs$lang$applyTo;
return G__10352;
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
var mapi__10357 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10355 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____10355))
{var s__10356 = temp__3698__auto____10355;
return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10356)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10356)));
} else
{return null;
}
})));
});
return mapi__10357.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10358 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____10358))
{var s__10359 = temp__3698__auto____10358;
var x__10360 = f.call(null,cljs.core.first.call(null,s__10359));
if((x__10360 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__10359));
} else
{return cljs.core.cons.call(null,x__10360,keep.call(null,f,cljs.core.rest.call(null,s__10359)));
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
var keepi__10370 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10367 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____10367))
{var s__10368 = temp__3698__auto____10367;
var x__10369 = f.call(null,idx,cljs.core.first.call(null,s__10368));
if((x__10369 == null))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10368));
} else
{return cljs.core.cons.call(null,x__10369,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10368)));
}
} else
{return null;
}
})));
});
return keepi__10370.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10377 = p.call(null,x);
if(cljs.core.truth_(and__3546__auto____10377))
{return p.call(null,y);
} else
{return and__3546__auto____10377;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10378 = p.call(null,x);
if(cljs.core.truth_(and__3546__auto____10378))
{var and__3546__auto____10379 = p.call(null,y);
if(cljs.core.truth_(and__3546__auto____10379))
{return p.call(null,z);
} else
{return and__3546__auto____10379;
}
} else
{return and__3546__auto____10378;
}
})());
});
var ep1__4 = (function() { 
var G__10415__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10380 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3546__auto____10380))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10380;
}
})());
};
var G__10415 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10415__delegate.call(this, x, y, z, args);
};
G__10415.cljs$lang$maxFixedArity = 3;
G__10415.cljs$lang$applyTo = (function (arglist__10416){
var x = cljs.core.first(arglist__10416);
var y = cljs.core.first(cljs.core.next(arglist__10416));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10416)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10416)));
return G__10415__delegate(x, y, z, args);
});
G__10415.cljs$lang$arity$variadic = G__10415__delegate;
return G__10415;
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
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10381 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____10381))
{return p2.call(null,x);
} else
{return and__3546__auto____10381;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10382 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____10382))
{var and__3546__auto____10383 = p1.call(null,y);
if(cljs.core.truth_(and__3546__auto____10383))
{var and__3546__auto____10384 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____10384))
{return p2.call(null,y);
} else
{return and__3546__auto____10384;
}
} else
{return and__3546__auto____10383;
}
} else
{return and__3546__auto____10382;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10385 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____10385))
{var and__3546__auto____10386 = p1.call(null,y);
if(cljs.core.truth_(and__3546__auto____10386))
{var and__3546__auto____10387 = p1.call(null,z);
if(cljs.core.truth_(and__3546__auto____10387))
{var and__3546__auto____10388 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____10388))
{var and__3546__auto____10389 = p2.call(null,y);
if(cljs.core.truth_(and__3546__auto____10389))
{return p2.call(null,z);
} else
{return and__3546__auto____10389;
}
} else
{return and__3546__auto____10388;
}
} else
{return and__3546__auto____10387;
}
} else
{return and__3546__auto____10386;
}
} else
{return and__3546__auto____10385;
}
})());
});
var ep2__4 = (function() { 
var G__10417__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10390 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3546__auto____10390))
{return cljs.core.every_QMARK_.call(null,(function (p1__10361_SHARP_){
var and__3546__auto____10391 = p1.call(null,p1__10361_SHARP_);
if(cljs.core.truth_(and__3546__auto____10391))
{return p2.call(null,p1__10361_SHARP_);
} else
{return and__3546__auto____10391;
}
}),args);
} else
{return and__3546__auto____10390;
}
})());
};
var G__10417 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10417__delegate.call(this, x, y, z, args);
};
G__10417.cljs$lang$maxFixedArity = 3;
G__10417.cljs$lang$applyTo = (function (arglist__10418){
var x = cljs.core.first(arglist__10418);
var y = cljs.core.first(cljs.core.next(arglist__10418));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10418)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10418)));
return G__10417__delegate(x, y, z, args);
});
G__10417.cljs$lang$arity$variadic = G__10417__delegate;
return G__10417;
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
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10392 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____10392))
{var and__3546__auto____10393 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____10393))
{return p3.call(null,x);
} else
{return and__3546__auto____10393;
}
} else
{return and__3546__auto____10392;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10394 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____10394))
{var and__3546__auto____10395 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____10395))
{var and__3546__auto____10396 = p3.call(null,x);
if(cljs.core.truth_(and__3546__auto____10396))
{var and__3546__auto____10397 = p1.call(null,y);
if(cljs.core.truth_(and__3546__auto____10397))
{var and__3546__auto____10398 = p2.call(null,y);
if(cljs.core.truth_(and__3546__auto____10398))
{return p3.call(null,y);
} else
{return and__3546__auto____10398;
}
} else
{return and__3546__auto____10397;
}
} else
{return and__3546__auto____10396;
}
} else
{return and__3546__auto____10395;
}
} else
{return and__3546__auto____10394;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10399 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____10399))
{var and__3546__auto____10400 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____10400))
{var and__3546__auto____10401 = p3.call(null,x);
if(cljs.core.truth_(and__3546__auto____10401))
{var and__3546__auto____10402 = p1.call(null,y);
if(cljs.core.truth_(and__3546__auto____10402))
{var and__3546__auto____10403 = p2.call(null,y);
if(cljs.core.truth_(and__3546__auto____10403))
{var and__3546__auto____10404 = p3.call(null,y);
if(cljs.core.truth_(and__3546__auto____10404))
{var and__3546__auto____10405 = p1.call(null,z);
if(cljs.core.truth_(and__3546__auto____10405))
{var and__3546__auto____10406 = p2.call(null,z);
if(cljs.core.truth_(and__3546__auto____10406))
{return p3.call(null,z);
} else
{return and__3546__auto____10406;
}
} else
{return and__3546__auto____10405;
}
} else
{return and__3546__auto____10404;
}
} else
{return and__3546__auto____10403;
}
} else
{return and__3546__auto____10402;
}
} else
{return and__3546__auto____10401;
}
} else
{return and__3546__auto____10400;
}
} else
{return and__3546__auto____10399;
}
})());
});
var ep3__4 = (function() { 
var G__10419__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10407 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3546__auto____10407))
{return cljs.core.every_QMARK_.call(null,(function (p1__10362_SHARP_){
var and__3546__auto____10408 = p1.call(null,p1__10362_SHARP_);
if(cljs.core.truth_(and__3546__auto____10408))
{var and__3546__auto____10409 = p2.call(null,p1__10362_SHARP_);
if(cljs.core.truth_(and__3546__auto____10409))
{return p3.call(null,p1__10362_SHARP_);
} else
{return and__3546__auto____10409;
}
} else
{return and__3546__auto____10408;
}
}),args);
} else
{return and__3546__auto____10407;
}
})());
};
var G__10419 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10419__delegate.call(this, x, y, z, args);
};
G__10419.cljs$lang$maxFixedArity = 3;
G__10419.cljs$lang$applyTo = (function (arglist__10420){
var x = cljs.core.first(arglist__10420);
var y = cljs.core.first(cljs.core.next(arglist__10420));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10420)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10420)));
return G__10419__delegate(x, y, z, args);
});
G__10419.cljs$lang$arity$variadic = G__10419__delegate;
return G__10419;
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
var G__10421__delegate = function (p1,p2,p3,ps){
var ps__10410 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10363_SHARP_){
return p1__10363_SHARP_.call(null,x);
}),ps__10410);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10364_SHARP_){
var and__3546__auto____10411 = p1__10364_SHARP_.call(null,x);
if(cljs.core.truth_(and__3546__auto____10411))
{return p1__10364_SHARP_.call(null,y);
} else
{return and__3546__auto____10411;
}
}),ps__10410);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10365_SHARP_){
var and__3546__auto____10412 = p1__10365_SHARP_.call(null,x);
if(cljs.core.truth_(and__3546__auto____10412))
{var and__3546__auto____10413 = p1__10365_SHARP_.call(null,y);
if(cljs.core.truth_(and__3546__auto____10413))
{return p1__10365_SHARP_.call(null,z);
} else
{return and__3546__auto____10413;
}
} else
{return and__3546__auto____10412;
}
}),ps__10410);
});
var epn__4 = (function() { 
var G__10422__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10414 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3546__auto____10414))
{return cljs.core.every_QMARK_.call(null,(function (p1__10366_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10366_SHARP_,args);
}),ps__10410);
} else
{return and__3546__auto____10414;
}
})());
};
var G__10422 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10422__delegate.call(this, x, y, z, args);
};
G__10422.cljs$lang$maxFixedArity = 3;
G__10422.cljs$lang$applyTo = (function (arglist__10423){
var x = cljs.core.first(arglist__10423);
var y = cljs.core.first(cljs.core.next(arglist__10423));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10423)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10423)));
return G__10422__delegate(x, y, z, args);
});
G__10422.cljs$lang$arity$variadic = G__10422__delegate;
return G__10422;
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
var G__10421 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10421__delegate.call(this, p1, p2, p3, ps);
};
G__10421.cljs$lang$maxFixedArity = 3;
G__10421.cljs$lang$applyTo = (function (arglist__10424){
var p1 = cljs.core.first(arglist__10424);
var p2 = cljs.core.first(cljs.core.next(arglist__10424));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10424)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10424)));
return G__10421__delegate(p1, p2, p3, ps);
});
G__10421.cljs$lang$arity$variadic = G__10421__delegate;
return G__10421;
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
var or__3548__auto____10426 = p.call(null,x);
if(cljs.core.truth_(or__3548__auto____10426))
{return or__3548__auto____10426;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3548__auto____10427 = p.call(null,x);
if(cljs.core.truth_(or__3548__auto____10427))
{return or__3548__auto____10427;
} else
{var or__3548__auto____10428 = p.call(null,y);
if(cljs.core.truth_(or__3548__auto____10428))
{return or__3548__auto____10428;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__10464__delegate = function (x,y,z,args){
var or__3548__auto____10429 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3548__auto____10429))
{return or__3548__auto____10429;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__10464 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10464__delegate.call(this, x, y, z, args);
};
G__10464.cljs$lang$maxFixedArity = 3;
G__10464.cljs$lang$applyTo = (function (arglist__10465){
var x = cljs.core.first(arglist__10465);
var y = cljs.core.first(cljs.core.next(arglist__10465));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10465)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10465)));
return G__10464__delegate(x, y, z, args);
});
G__10464.cljs$lang$arity$variadic = G__10464__delegate;
return G__10464;
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
var or__3548__auto____10430 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____10430))
{return or__3548__auto____10430;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3548__auto____10431 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____10431))
{return or__3548__auto____10431;
} else
{var or__3548__auto____10432 = p1.call(null,y);
if(cljs.core.truth_(or__3548__auto____10432))
{return or__3548__auto____10432;
} else
{var or__3548__auto____10433 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____10433))
{return or__3548__auto____10433;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3548__auto____10434 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____10434))
{return or__3548__auto____10434;
} else
{var or__3548__auto____10435 = p1.call(null,y);
if(cljs.core.truth_(or__3548__auto____10435))
{return or__3548__auto____10435;
} else
{var or__3548__auto____10436 = p1.call(null,z);
if(cljs.core.truth_(or__3548__auto____10436))
{return or__3548__auto____10436;
} else
{var or__3548__auto____10437 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____10437))
{return or__3548__auto____10437;
} else
{var or__3548__auto____10438 = p2.call(null,y);
if(cljs.core.truth_(or__3548__auto____10438))
{return or__3548__auto____10438;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__10466__delegate = function (x,y,z,args){
var or__3548__auto____10439 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3548__auto____10439))
{return or__3548__auto____10439;
} else
{return cljs.core.some.call(null,(function (p1__10371_SHARP_){
var or__3548__auto____10440 = p1.call(null,p1__10371_SHARP_);
if(cljs.core.truth_(or__3548__auto____10440))
{return or__3548__auto____10440;
} else
{return p2.call(null,p1__10371_SHARP_);
}
}),args);
}
};
var G__10466 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10466__delegate.call(this, x, y, z, args);
};
G__10466.cljs$lang$maxFixedArity = 3;
G__10466.cljs$lang$applyTo = (function (arglist__10467){
var x = cljs.core.first(arglist__10467);
var y = cljs.core.first(cljs.core.next(arglist__10467));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10467)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10467)));
return G__10466__delegate(x, y, z, args);
});
G__10466.cljs$lang$arity$variadic = G__10466__delegate;
return G__10466;
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
var or__3548__auto____10441 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____10441))
{return or__3548__auto____10441;
} else
{var or__3548__auto____10442 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____10442))
{return or__3548__auto____10442;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3548__auto____10443 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____10443))
{return or__3548__auto____10443;
} else
{var or__3548__auto____10444 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____10444))
{return or__3548__auto____10444;
} else
{var or__3548__auto____10445 = p3.call(null,x);
if(cljs.core.truth_(or__3548__auto____10445))
{return or__3548__auto____10445;
} else
{var or__3548__auto____10446 = p1.call(null,y);
if(cljs.core.truth_(or__3548__auto____10446))
{return or__3548__auto____10446;
} else
{var or__3548__auto____10447 = p2.call(null,y);
if(cljs.core.truth_(or__3548__auto____10447))
{return or__3548__auto____10447;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3548__auto____10448 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____10448))
{return or__3548__auto____10448;
} else
{var or__3548__auto____10449 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____10449))
{return or__3548__auto____10449;
} else
{var or__3548__auto____10450 = p3.call(null,x);
if(cljs.core.truth_(or__3548__auto____10450))
{return or__3548__auto____10450;
} else
{var or__3548__auto____10451 = p1.call(null,y);
if(cljs.core.truth_(or__3548__auto____10451))
{return or__3548__auto____10451;
} else
{var or__3548__auto____10452 = p2.call(null,y);
if(cljs.core.truth_(or__3548__auto____10452))
{return or__3548__auto____10452;
} else
{var or__3548__auto____10453 = p3.call(null,y);
if(cljs.core.truth_(or__3548__auto____10453))
{return or__3548__auto____10453;
} else
{var or__3548__auto____10454 = p1.call(null,z);
if(cljs.core.truth_(or__3548__auto____10454))
{return or__3548__auto____10454;
} else
{var or__3548__auto____10455 = p2.call(null,z);
if(cljs.core.truth_(or__3548__auto____10455))
{return or__3548__auto____10455;
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
var G__10468__delegate = function (x,y,z,args){
var or__3548__auto____10456 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3548__auto____10456))
{return or__3548__auto____10456;
} else
{return cljs.core.some.call(null,(function (p1__10372_SHARP_){
var or__3548__auto____10457 = p1.call(null,p1__10372_SHARP_);
if(cljs.core.truth_(or__3548__auto____10457))
{return or__3548__auto____10457;
} else
{var or__3548__auto____10458 = p2.call(null,p1__10372_SHARP_);
if(cljs.core.truth_(or__3548__auto____10458))
{return or__3548__auto____10458;
} else
{return p3.call(null,p1__10372_SHARP_);
}
}
}),args);
}
};
var G__10468 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10468__delegate.call(this, x, y, z, args);
};
G__10468.cljs$lang$maxFixedArity = 3;
G__10468.cljs$lang$applyTo = (function (arglist__10469){
var x = cljs.core.first(arglist__10469);
var y = cljs.core.first(cljs.core.next(arglist__10469));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10469)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10469)));
return G__10468__delegate(x, y, z, args);
});
G__10468.cljs$lang$arity$variadic = G__10468__delegate;
return G__10468;
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
var G__10470__delegate = function (p1,p2,p3,ps){
var ps__10459 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__10373_SHARP_){
return p1__10373_SHARP_.call(null,x);
}),ps__10459);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10374_SHARP_){
var or__3548__auto____10460 = p1__10374_SHARP_.call(null,x);
if(cljs.core.truth_(or__3548__auto____10460))
{return or__3548__auto____10460;
} else
{return p1__10374_SHARP_.call(null,y);
}
}),ps__10459);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10375_SHARP_){
var or__3548__auto____10461 = p1__10375_SHARP_.call(null,x);
if(cljs.core.truth_(or__3548__auto____10461))
{return or__3548__auto____10461;
} else
{var or__3548__auto____10462 = p1__10375_SHARP_.call(null,y);
if(cljs.core.truth_(or__3548__auto____10462))
{return or__3548__auto____10462;
} else
{return p1__10375_SHARP_.call(null,z);
}
}
}),ps__10459);
});
var spn__4 = (function() { 
var G__10471__delegate = function (x,y,z,args){
var or__3548__auto____10463 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3548__auto____10463))
{return or__3548__auto____10463;
} else
{return cljs.core.some.call(null,(function (p1__10376_SHARP_){
return cljs.core.some.call(null,p1__10376_SHARP_,args);
}),ps__10459);
}
};
var G__10471 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10471__delegate.call(this, x, y, z, args);
};
G__10471.cljs$lang$maxFixedArity = 3;
G__10471.cljs$lang$applyTo = (function (arglist__10472){
var x = cljs.core.first(arglist__10472);
var y = cljs.core.first(cljs.core.next(arglist__10472));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10472)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10472)));
return G__10471__delegate(x, y, z, args);
});
G__10471.cljs$lang$arity$variadic = G__10471__delegate;
return G__10471;
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
var G__10470 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10470__delegate.call(this, p1, p2, p3, ps);
};
G__10470.cljs$lang$maxFixedArity = 3;
G__10470.cljs$lang$applyTo = (function (arglist__10473){
var p1 = cljs.core.first(arglist__10473);
var p2 = cljs.core.first(cljs.core.next(arglist__10473));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10473)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10473)));
return G__10470__delegate(p1, p2, p3, ps);
});
G__10470.cljs$lang$arity$variadic = G__10470__delegate;
return G__10470;
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
var temp__3698__auto____10474 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____10474))
{var s__10475 = temp__3698__auto____10474;
return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__10475)),map.call(null,f,cljs.core.rest.call(null,s__10475)));
} else
{return null;
}
})));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10476 = cljs.core.seq.call(null,c1);
var s2__10477 = cljs.core.seq.call(null,c2);
if(cljs.core.truth_((function (){var and__3546__auto____10478 = s1__10476;
if(cljs.core.truth_(and__3546__auto____10478))
{return s2__10477;
} else
{return and__3546__auto____10478;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10476),cljs.core.first.call(null,s2__10477)),map.call(null,f,cljs.core.rest.call(null,s1__10476),cljs.core.rest.call(null,s2__10477)));
} else
{return null;
}
})));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10479 = cljs.core.seq.call(null,c1);
var s2__10480 = cljs.core.seq.call(null,c2);
var s3__10481 = cljs.core.seq.call(null,c3);
if(cljs.core.truth_((function (){var and__3546__auto____10482 = s1__10479;
if(cljs.core.truth_(and__3546__auto____10482))
{var and__3546__auto____10483 = s2__10480;
if(cljs.core.truth_(and__3546__auto____10483))
{return s3__10481;
} else
{return and__3546__auto____10483;
}
} else
{return and__3546__auto____10482;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10479),cljs.core.first.call(null,s2__10480),cljs.core.first.call(null,s3__10481)),map.call(null,f,cljs.core.rest.call(null,s1__10479),cljs.core.rest.call(null,s2__10480),cljs.core.rest.call(null,s3__10481)));
} else
{return null;
}
})));
});
var map__5 = (function() { 
var G__10486__delegate = function (f,c1,c2,c3,colls){
var step__10485 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10484 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10484))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__10484),step.call(null,map.call(null,cljs.core.rest,ss__10484)));
} else
{return null;
}
})));
});
return map.call(null,(function (p1__10425_SHARP_){
return cljs.core.apply.call(null,f,p1__10425_SHARP_);
}),step__10485.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__10486 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10486__delegate.call(this, f, c1, c2, c3, colls);
};
G__10486.cljs$lang$maxFixedArity = 4;
G__10486.cljs$lang$applyTo = (function (arglist__10487){
var f = cljs.core.first(arglist__10487);
var c1 = cljs.core.first(cljs.core.next(arglist__10487));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10487)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10487))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10487))));
return G__10486__delegate(f, c1, c2, c3, colls);
});
G__10486.cljs$lang$arity$variadic = G__10486__delegate;
return G__10486;
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
{var temp__3698__auto____10488 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____10488))
{var s__10489 = temp__3698__auto____10488;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__10489),take.call(null,(n - 1),cljs.core.rest.call(null,s__10489)));
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
var step__10492 = (function (n,coll){
while(true){
var s__10490 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3546__auto____10491 = (n > 0);
if(and__3546__auto____10491)
{return s__10490;
} else
{return and__3546__auto____10491;
}
})()))
{{
var G__10493 = (n - 1);
var G__10494 = cljs.core.rest.call(null,s__10490);
n = G__10493;
coll = G__10494;
continue;
}
} else
{return s__10490;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__10492.call(null,n,coll);
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
var s__10495 = cljs.core.seq.call(null,coll);
var lead__10496 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(cljs.core.truth_(lead__10496))
{{
var G__10497 = cljs.core.next.call(null,s__10495);
var G__10498 = cljs.core.next.call(null,lead__10496);
s__10495 = G__10497;
lead__10496 = G__10498;
continue;
}
} else
{return s__10495;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__10501 = (function (pred,coll){
while(true){
var s__10499 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3546__auto____10500 = s__10499;
if(cljs.core.truth_(and__3546__auto____10500))
{return pred.call(null,cljs.core.first.call(null,s__10499));
} else
{return and__3546__auto____10500;
}
})()))
{{
var G__10502 = pred;
var G__10503 = cljs.core.rest.call(null,s__10499);
pred = G__10502;
coll = G__10503;
continue;
}
} else
{return s__10499;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__10501.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10504 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____10504))
{var s__10505 = temp__3698__auto____10504;
return cljs.core.concat.call(null,s__10505,cycle.call(null,s__10505));
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
var s1__10506 = cljs.core.seq.call(null,c1);
var s2__10507 = cljs.core.seq.call(null,c2);
if(cljs.core.truth_((function (){var and__3546__auto____10508 = s1__10506;
if(cljs.core.truth_(and__3546__auto____10508))
{return s2__10507;
} else
{return and__3546__auto____10508;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__10506),cljs.core.cons.call(null,cljs.core.first.call(null,s2__10507),interleave.call(null,cljs.core.rest.call(null,s1__10506),cljs.core.rest.call(null,s2__10507))));
} else
{return null;
}
})));
});
var interleave__3 = (function() { 
var G__10510__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10509 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10509))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__10509),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__10509)));
} else
{return null;
}
})));
};
var G__10510 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10510__delegate.call(this, c1, c2, colls);
};
G__10510.cljs$lang$maxFixedArity = 2;
G__10510.cljs$lang$applyTo = (function (arglist__10511){
var c1 = cljs.core.first(arglist__10511);
var c2 = cljs.core.first(cljs.core.next(arglist__10511));
var colls = cljs.core.rest(cljs.core.next(arglist__10511));
return G__10510__delegate(c1, c2, colls);
});
G__10510.cljs$lang$arity$variadic = G__10510__delegate;
return G__10510;
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
var cat__10514 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____10512 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3695__auto____10512))
{var coll__10513 = temp__3695__auto____10512;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__10513),cat.call(null,cljs.core.rest.call(null,coll__10513),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});
return cat__10514.call(null,null,colls);
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
var G__10515__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__10515 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10515__delegate.call(this, f, coll, colls);
};
G__10515.cljs$lang$maxFixedArity = 2;
G__10515.cljs$lang$applyTo = (function (arglist__10516){
var f = cljs.core.first(arglist__10516);
var coll = cljs.core.first(cljs.core.next(arglist__10516));
var colls = cljs.core.rest(cljs.core.next(arglist__10516));
return G__10515__delegate(f, coll, colls);
});
G__10515.cljs$lang$arity$variadic = G__10515__delegate;
return G__10515;
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
var temp__3698__auto____10517 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____10517))
{var s__10518 = temp__3698__auto____10517;
var f__10519 = cljs.core.first.call(null,s__10518);
var r__10520 = cljs.core.rest.call(null,s__10518);
if(cljs.core.truth_(pred.call(null,f__10519)))
{return cljs.core.cons.call(null,f__10519,filter.call(null,pred,r__10520));
} else
{return filter.call(null,pred,r__10520);
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
var walk__10522 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});
return walk__10522.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__10521_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__10521_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__10523__10524 = to;
if((G__10523__10524 != null))
{if((function (){var or__3548__auto____10525 = (G__10523__10524.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3548__auto____10525)
{return or__3548__auto____10525;
} else
{return G__10523__10524.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__10523__10524.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__10523__10524);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__10523__10524);
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
var G__10526__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([]),cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__10526 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10526__delegate.call(this, f, c1, c2, c3, colls);
};
G__10526.cljs$lang$maxFixedArity = 4;
G__10526.cljs$lang$applyTo = (function (arglist__10527){
var f = cljs.core.first(arglist__10527);
var c1 = cljs.core.first(cljs.core.next(arglist__10527));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10527)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10527))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10527))));
return G__10526__delegate(f, c1, c2, c3, colls);
});
G__10526.cljs$lang$arity$variadic = G__10526__delegate;
return G__10526;
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
var temp__3698__auto____10528 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____10528))
{var s__10529 = temp__3698__auto____10528;
var p__10530 = cljs.core.take.call(null,n,s__10529);
if((n === cljs.core.count.call(null,p__10530)))
{return cljs.core.cons.call(null,p__10530,partition.call(null,n,step,cljs.core.drop.call(null,step,s__10529)));
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
var temp__3698__auto____10531 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____10531))
{var s__10532 = temp__3698__auto____10531;
var p__10533 = cljs.core.take.call(null,n,s__10532);
if((n === cljs.core.count.call(null,p__10533)))
{return cljs.core.cons.call(null,p__10533,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__10532)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__10533,pad)));
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
var sentinel__10534 = cljs.core.lookup_sentinel;
var m__10535 = m;
var ks__10536 = cljs.core.seq.call(null,ks);
while(true){
if(cljs.core.truth_(ks__10536))
{var m__10537 = cljs.core.get.call(null,m__10535,cljs.core.first.call(null,ks__10536),sentinel__10534);
if((sentinel__10534 === m__10537))
{return not_found;
} else
{{
var G__10538 = sentinel__10534;
var G__10539 = m__10537;
var G__10540 = cljs.core.next.call(null,ks__10536);
sentinel__10534 = G__10538;
m__10535 = G__10539;
ks__10536 = G__10540;
continue;
}
}
} else
{return m__10535;
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
cljs.core.assoc_in = (function assoc_in(m,p__10541,v){
var vec__10542__10543 = p__10541;
var k__10544 = cljs.core.nth.call(null,vec__10542__10543,0,null);
var ks__10545 = cljs.core.nthnext.call(null,vec__10542__10543,1);
if(cljs.core.truth_(ks__10545))
{return cljs.core.assoc.call(null,m,k__10544,assoc_in.call(null,cljs.core.get.call(null,m,k__10544),ks__10545,v));
} else
{return cljs.core.assoc.call(null,m,k__10544,v);
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
var update_in__delegate = function (m,p__10546,f,args){
var vec__10547__10548 = p__10546;
var k__10549 = cljs.core.nth.call(null,vec__10547__10548,0,null);
var ks__10550 = cljs.core.nthnext.call(null,vec__10547__10548,1);
if(cljs.core.truth_(ks__10550))
{return cljs.core.assoc.call(null,m,k__10549,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__10549),ks__10550,f,args));
} else
{return cljs.core.assoc.call(null,m,k__10549,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__10549),args));
}
};
var update_in = function (m,p__10546,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__10546, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__10551){
var m = cljs.core.first(arglist__10551);
var p__10546 = cljs.core.first(cljs.core.next(arglist__10551));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10551)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10551)));
return update_in__delegate(m, p__10546, f, args);
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
var this__10556 = this;
var h__2226__auto____10557 = this__10556.__hash;
if((h__2226__auto____10557 != null))
{return h__2226__auto____10557;
} else
{var h__2226__auto____10558 = cljs.core.hash_coll.call(null,coll);
this__10556.__hash = h__2226__auto____10558;
return h__2226__auto____10558;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10559 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10560 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10561 = this;
var new_array__10562 = cljs.core.aclone.call(null,this__10561.array);
(new_array__10562[k] = v);
return (new cljs.core.Vector(this__10561.meta,new_array__10562,null));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__10591 = null;
var G__10591__2 = (function (tsym10554,k){
var this__10563 = this;
var tsym10554__10564 = this;
var coll__10565 = tsym10554__10564;
return cljs.core._lookup.call(null,coll__10565,k);
});
var G__10591__3 = (function (tsym10555,k,not_found){
var this__10566 = this;
var tsym10555__10567 = this;
var coll__10568 = tsym10555__10567;
return cljs.core._lookup.call(null,coll__10568,k,not_found);
});
G__10591 = function(tsym10555,k,not_found){
switch(arguments.length){
case 2:
return G__10591__2.call(this,tsym10555,k);
case 3:
return G__10591__3.call(this,tsym10555,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10591;
})()
;
cljs.core.Vector.prototype.apply = (function (tsym10552,args10553){
return tsym10552.call.apply(tsym10552,[tsym10552].concat(cljs.core.aclone.call(null,args10553)));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10569 = this;
var new_array__10570 = cljs.core.aclone.call(null,this__10569.array);
new_array__10570.push(o);
return (new cljs.core.Vector(this__10569.meta,new_array__10570,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__10571 = this;
var this$__10572 = this;
return cljs.core.pr_str.call(null,this$__10572);
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__10573 = this;
return cljs.core.ci_reduce.call(null,this__10573.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__10574 = this;
return cljs.core.ci_reduce.call(null,this__10574.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10575 = this;
if((this__10575.array.length > 0))
{var vector_seq__10576 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__10575.array.length))
{return cljs.core.cons.call(null,(this__10575.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});
return vector_seq__10576.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10577 = this;
return this__10577.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10578 = this;
var count__10579 = this__10578.array.length;
if((count__10579 > 0))
{return (this__10578.array[(count__10579 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10580 = this;
if((this__10580.array.length > 0))
{var new_array__10581 = cljs.core.aclone.call(null,this__10580.array);
new_array__10581.pop();
return (new cljs.core.Vector(this__10580.meta,new_array__10581,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10582 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10583 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10584 = this;
return (new cljs.core.Vector(meta,this__10584.array,this__10584.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10585 = this;
return this__10585.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10587 = this;
if((function (){var and__3546__auto____10588 = (0 <= n);
if(and__3546__auto____10588)
{return (n < this__10587.array.length);
} else
{return and__3546__auto____10588;
}
})())
{return (this__10587.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10589 = this;
if((function (){var and__3546__auto____10590 = (0 <= n);
if(and__3546__auto____10590)
{return (n < this__10589.array.length);
} else
{return and__3546__auto____10590;
}
})())
{return (this__10589.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10586 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10586.meta);
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
var cnt__10592 = pv.cnt;
if((cnt__10592 < 32))
{return 0;
} else
{return (((cnt__10592 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__10593 = level;
var ret__10594 = node;
while(true){
if((ll__10593 === 0))
{return ret__10594;
} else
{var embed__10595 = ret__10594;
var r__10596 = cljs.core.pv_fresh_node.call(null,edit);
var ___10597 = cljs.core.pv_aset.call(null,r__10596,0,embed__10595);
{
var G__10598 = (ll__10593 - 5);
var G__10599 = r__10596;
ll__10593 = G__10598;
ret__10594 = G__10599;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__10600 = cljs.core.pv_clone_node.call(null,parent);
var subidx__10601 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__10600,subidx__10601,tailnode);
return ret__10600;
} else
{var temp__3695__auto____10602 = cljs.core.pv_aget.call(null,parent,subidx__10601);
if(cljs.core.truth_(temp__3695__auto____10602))
{var child__10603 = temp__3695__auto____10602;
var node_to_insert__10604 = push_tail.call(null,pv,(level - 5),child__10603,tailnode);
cljs.core.pv_aset.call(null,ret__10600,subidx__10601,node_to_insert__10604);
return ret__10600;
} else
{var node_to_insert__10605 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__10600,subidx__10601,node_to_insert__10605);
return ret__10600;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3546__auto____10606 = (0 <= i);
if(and__3546__auto____10606)
{return (i < pv.cnt);
} else
{return and__3546__auto____10606;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__10607 = pv.root;
var level__10608 = pv.shift;
while(true){
if((level__10608 > 0))
{{
var G__10609 = cljs.core.pv_aget.call(null,node__10607,((i >>> level__10608) & 31));
var G__10610 = (level__10608 - 5);
node__10607 = G__10609;
level__10608 = G__10610;
continue;
}
} else
{return node__10607.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__10611 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__10611,(i & 31),val);
return ret__10611;
} else
{var subidx__10612 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__10611,subidx__10612,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__10612),i,val));
return ret__10611;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__10613 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10614 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__10613));
if((function (){var and__3546__auto____10615 = (new_child__10614 == null);
if(and__3546__auto____10615)
{return (subidx__10613 === 0);
} else
{return and__3546__auto____10615;
}
})())
{return null;
} else
{var ret__10616 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__10616,subidx__10613,new_child__10614);
return ret__10616;
}
} else
{if((subidx__10613 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__10617 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__10617,subidx__10613,null);
return ret__10617;
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
var c__10618 = cljs.core._count.call(null,v);
if((c__10618 > 0))
{if((void 0 === cljs.core.t10619))
{
/**
* @constructor
*/
cljs.core.t10619 = (function (c,offset,v,vector_seq,__meta__2233__auto__){
this.c = c;
this.offset = offset;
this.v = v;
this.vector_seq = vector_seq;
this.__meta__2233__auto__ = __meta__2233__auto__;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 282263648;
})
cljs.core.t10619.cljs$lang$type = true;
cljs.core.t10619.cljs$lang$ctorPrSeq = (function (this__2298__auto__){
return cljs.core.list.call(null,"cljs.core.t10619");
});
cljs.core.t10619.prototype.cljs$core$ISeqable$ = true;
cljs.core.t10619.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (vseq){
var this__10620 = this;
return vseq;
});
cljs.core.t10619.prototype.cljs$core$ISeq$ = true;
cljs.core.t10619.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__10621 = this;
return cljs.core._nth.call(null,this__10621.v,this__10621.offset);
});
cljs.core.t10619.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__10622 = this;
var offset__10623 = (this__10622.offset + 1);
if((offset__10623 < this__10622.c))
{return this__10622.vector_seq.call(null,this__10622.v,offset__10623);
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.t10619.prototype.cljs$core$ASeq$ = true;
cljs.core.t10619.prototype.cljs$core$IEquiv$ = true;
cljs.core.t10619.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (vseq,other){
var this__10624 = this;
return cljs.core.equiv_sequential.call(null,vseq,other);
});
cljs.core.t10619.prototype.cljs$core$ISequential$ = true;
cljs.core.t10619.prototype.cljs$core$IPrintable$ = true;
cljs.core.t10619.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (vseq,opts){
var this__10625 = this;
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,vseq);
});
cljs.core.t10619.prototype.cljs$core$IMeta$ = true;
cljs.core.t10619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (___2234__auto__){
var this__10626 = this;
return this__10626.__meta__2233__auto__;
});
cljs.core.t10619.prototype.cljs$core$IWithMeta$ = true;
cljs.core.t10619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (___2234__auto__,__meta__2233__auto__){
var this__10627 = this;
return (new cljs.core.t10619(this__10627.c,this__10627.offset,this__10627.v,this__10627.vector_seq,__meta__2233__auto__));
});
cljs.core.t10619;
} else
{}
return (new cljs.core.t10619(c__10618,offset,v,vector_seq,null));
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
var this__10632 = this;
return (new cljs.core.TransientVector(this__10632.cnt,this__10632.shift,cljs.core.tv_editable_root.call(null,this__10632.root),cljs.core.tv_editable_tail.call(null,this__10632.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10633 = this;
var h__2226__auto____10634 = this__10633.__hash;
if((h__2226__auto____10634 != null))
{return h__2226__auto____10634;
} else
{var h__2226__auto____10635 = cljs.core.hash_coll.call(null,coll);
this__10633.__hash = h__2226__auto____10635;
return h__2226__auto____10635;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10636 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10637 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10638 = this;
if((function (){var and__3546__auto____10639 = (0 <= k);
if(and__3546__auto____10639)
{return (k < this__10638.cnt);
} else
{return and__3546__auto____10639;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__10640 = cljs.core.aclone.call(null,this__10638.tail);
(new_tail__10640[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__10638.meta,this__10638.cnt,this__10638.shift,this__10638.root,new_tail__10640,null));
} else
{return (new cljs.core.PersistentVector(this__10638.meta,this__10638.cnt,this__10638.shift,cljs.core.do_assoc.call(null,coll,this__10638.shift,this__10638.root,k,v),this__10638.tail,null));
}
} else
{if((k === this__10638.cnt))
{return cljs.core._conj.call(null,coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__10638.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__10685 = null;
var G__10685__2 = (function (tsym10630,k){
var this__10641 = this;
var tsym10630__10642 = this;
var coll__10643 = tsym10630__10642;
return cljs.core._lookup.call(null,coll__10643,k);
});
var G__10685__3 = (function (tsym10631,k,not_found){
var this__10644 = this;
var tsym10631__10645 = this;
var coll__10646 = tsym10631__10645;
return cljs.core._lookup.call(null,coll__10646,k,not_found);
});
G__10685 = function(tsym10631,k,not_found){
switch(arguments.length){
case 2:
return G__10685__2.call(this,tsym10631,k);
case 3:
return G__10685__3.call(this,tsym10631,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10685;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (tsym10628,args10629){
return tsym10628.call.apply(tsym10628,[tsym10628].concat(cljs.core.aclone.call(null,args10629)));
});
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__10647 = this;
var step_init__10648 = [0,init];
var i__10649 = 0;
while(true){
if((i__10649 < this__10647.cnt))
{var arr__10650 = cljs.core.array_for.call(null,v,i__10649);
var len__10651 = arr__10650.length;
var init__10655 = (function (){var j__10652 = 0;
var init__10653 = (step_init__10648[1]);
while(true){
if((j__10652 < len__10651))
{var init__10654 = f.call(null,init__10653,(j__10652 + i__10649),(arr__10650[j__10652]));
if(cljs.core.reduced_QMARK_.call(null,init__10654))
{return init__10654;
} else
{{
var G__10686 = (j__10652 + 1);
var G__10687 = init__10654;
j__10652 = G__10686;
init__10653 = G__10687;
continue;
}
}
} else
{(step_init__10648[0] = len__10651);
(step_init__10648[1] = init__10653);
return init__10653;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__10655))
{return cljs.core.deref.call(null,init__10655);
} else
{{
var G__10688 = (i__10649 + (step_init__10648[0]));
i__10649 = G__10688;
continue;
}
}
} else
{return (step_init__10648[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10656 = this;
if(((this__10656.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__10657 = cljs.core.aclone.call(null,this__10656.tail);
new_tail__10657.push(o);
return (new cljs.core.PersistentVector(this__10656.meta,(this__10656.cnt + 1),this__10656.shift,this__10656.root,new_tail__10657,null));
} else
{var root_overflow_QMARK___10658 = ((this__10656.cnt >>> 5) > (1 << this__10656.shift));
var new_shift__10659 = ((root_overflow_QMARK___10658)?(this__10656.shift + 5):this__10656.shift);
var new_root__10661 = ((root_overflow_QMARK___10658)?(function (){var n_r__10660 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__10660,0,this__10656.root);
cljs.core.pv_aset.call(null,n_r__10660,1,cljs.core.new_path.call(null,null,this__10656.shift,(new cljs.core.VectorNode(null,this__10656.tail))));
return n_r__10660;
})():cljs.core.push_tail.call(null,coll,this__10656.shift,this__10656.root,(new cljs.core.VectorNode(null,this__10656.tail))));
return (new cljs.core.PersistentVector(this__10656.meta,(this__10656.cnt + 1),new_shift__10659,new_root__10661,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__10662 = this;
return cljs.core._nth.call(null,coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__10663 = this;
return cljs.core._nth.call(null,coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__10664 = this;
var this$__10665 = this;
return cljs.core.pr_str.call(null,this$__10665);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__10666 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__10667 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10668 = this;
return cljs.core.vector_seq.call(null,coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10669 = this;
return this__10669.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10670 = this;
if((this__10670.cnt > 0))
{return cljs.core._nth.call(null,coll,(this__10670.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10671 = this;
if((this__10671.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__10671.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10671.meta);
} else
{if((1 < (this__10671.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__10671.meta,(this__10671.cnt - 1),this__10671.shift,this__10671.root,this__10671.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__10672 = cljs.core.array_for.call(null,coll,(this__10671.cnt - 2));
var nr__10673 = cljs.core.pop_tail.call(null,coll,this__10671.shift,this__10671.root);
var new_root__10674 = (((nr__10673 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__10673);
var cnt_1__10675 = (this__10671.cnt - 1);
if((function (){var and__3546__auto____10676 = (5 < this__10671.shift);
if(and__3546__auto____10676)
{return (cljs.core.pv_aget.call(null,new_root__10674,1) == null);
} else
{return and__3546__auto____10676;
}
})())
{return (new cljs.core.PersistentVector(this__10671.meta,cnt_1__10675,(this__10671.shift - 5),cljs.core.pv_aget.call(null,new_root__10674,0),new_tail__10672,null));
} else
{return (new cljs.core.PersistentVector(this__10671.meta,cnt_1__10675,this__10671.shift,new_root__10674,new_tail__10672,null));
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
var this__10678 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10679 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10680 = this;
return (new cljs.core.PersistentVector(meta,this__10680.cnt,this__10680.shift,this__10680.root,this__10680.tail,this__10680.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10681 = this;
return this__10681.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10682 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10683 = this;
if((function (){var and__3546__auto____10684 = (0 <= n);
if(and__3546__auto____10684)
{return (n < this__10683.cnt);
} else
{return and__3546__auto____10684;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10677 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10677.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs){
var xs__10689 = cljs.core.seq.call(null,xs);
var out__10690 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.truth_(xs__10689))
{{
var G__10691 = cljs.core.next.call(null,xs__10689);
var G__10692 = cljs.core.conj_BANG_.call(null,out__10690,cljs.core.first.call(null,xs__10689));
xs__10689 = G__10691;
out__10690 = G__10692;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10690);
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
vector.cljs$lang$applyTo = (function (arglist__10693){
var args = cljs.core.seq(arglist__10693);;
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
var this__10698 = this;
var h__2226__auto____10699 = this__10698.__hash;
if((h__2226__auto____10699 != null))
{return h__2226__auto____10699;
} else
{var h__2226__auto____10700 = cljs.core.hash_coll.call(null,coll);
this__10698.__hash = h__2226__auto____10700;
return h__2226__auto____10700;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10701 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10702 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__10703 = this;
var v_pos__10704 = (this__10703.start + key);
return (new cljs.core.Subvec(this__10703.meta,cljs.core._assoc.call(null,this__10703.v,v_pos__10704,val),this__10703.start,((this__10703.end > (v_pos__10704 + 1)) ? this__10703.end : (v_pos__10704 + 1)),null));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__10728 = null;
var G__10728__2 = (function (tsym10696,k){
var this__10705 = this;
var tsym10696__10706 = this;
var coll__10707 = tsym10696__10706;
return cljs.core._lookup.call(null,coll__10707,k);
});
var G__10728__3 = (function (tsym10697,k,not_found){
var this__10708 = this;
var tsym10697__10709 = this;
var coll__10710 = tsym10697__10709;
return cljs.core._lookup.call(null,coll__10710,k,not_found);
});
G__10728 = function(tsym10697,k,not_found){
switch(arguments.length){
case 2:
return G__10728__2.call(this,tsym10697,k);
case 3:
return G__10728__3.call(this,tsym10697,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10728;
})()
;
cljs.core.Subvec.prototype.apply = (function (tsym10694,args10695){
return tsym10694.call.apply(tsym10694,[tsym10694].concat(cljs.core.aclone.call(null,args10695)));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10711 = this;
return (new cljs.core.Subvec(this__10711.meta,cljs.core._assoc_n.call(null,this__10711.v,this__10711.end,o),this__10711.start,(this__10711.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__10712 = this;
var this$__10713 = this;
return cljs.core.pr_str.call(null,this$__10713);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__10714 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__10715 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10716 = this;
var subvec_seq__10717 = (function subvec_seq(i){
if((i === this__10716.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__10716.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});
return subvec_seq__10717.call(null,this__10716.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10718 = this;
return (this__10718.end - this__10718.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10719 = this;
return cljs.core._nth.call(null,this__10719.v,(this__10719.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10720 = this;
if((this__10720.start === this__10720.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__10720.meta,this__10720.v,this__10720.start,(this__10720.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10721 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10722 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10723 = this;
return (new cljs.core.Subvec(meta,this__10723.v,this__10723.start,this__10723.end,this__10723.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10724 = this;
return this__10724.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10726 = this;
return cljs.core._nth.call(null,this__10726.v,(this__10726.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10727 = this;
return cljs.core._nth.call(null,this__10727.v,(this__10727.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10725 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10725.meta);
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
var ret__10729 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__10729,0,tl.length);
return ret__10729;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__10730 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__10731 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__10730,subidx__10731,(((level === 5))?tail_node:(function (){var child__10732 = cljs.core.pv_aget.call(null,ret__10730,subidx__10731);
if((child__10732 != null))
{return tv_push_tail.call(null,tv,(level - 5),child__10732,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__10730;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__10733 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__10734 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10735 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__10733,subidx__10734));
if((function (){var and__3546__auto____10736 = (new_child__10735 == null);
if(and__3546__auto____10736)
{return (subidx__10734 === 0);
} else
{return and__3546__auto____10736;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__10733,subidx__10734,new_child__10735);
return node__10733;
}
} else
{if((subidx__10734 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__10733,subidx__10734,null);
return node__10733;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3546__auto____10737 = (0 <= i);
if(and__3546__auto____10737)
{return (i < tv.cnt);
} else
{return and__3546__auto____10737;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__10738 = tv.root;
var node__10739 = root__10738;
var level__10740 = tv.shift;
while(true){
if((level__10740 > 0))
{{
var G__10741 = cljs.core.tv_ensure_editable.call(null,root__10738.edit,cljs.core.pv_aget.call(null,node__10739,((i >>> level__10740) & 31)));
var G__10742 = (level__10740 - 5);
node__10739 = G__10741;
level__10740 = G__10742;
continue;
}
} else
{return node__10739.arr;
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
var G__10780 = null;
var G__10780__2 = (function (tsym10745,k){
var this__10747 = this;
var tsym10745__10748 = this;
var coll__10749 = tsym10745__10748;
return cljs.core._lookup.call(null,coll__10749,k);
});
var G__10780__3 = (function (tsym10746,k,not_found){
var this__10750 = this;
var tsym10746__10751 = this;
var coll__10752 = tsym10746__10751;
return cljs.core._lookup.call(null,coll__10752,k,not_found);
});
G__10780 = function(tsym10746,k,not_found){
switch(arguments.length){
case 2:
return G__10780__2.call(this,tsym10746,k);
case 3:
return G__10780__3.call(this,tsym10746,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10780;
})()
;
cljs.core.TransientVector.prototype.apply = (function (tsym10743,args10744){
return tsym10743.call.apply(tsym10743,[tsym10743].concat(cljs.core.aclone.call(null,args10744)));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10753 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10754 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10755 = this;
if(cljs.core.truth_(this__10755.root.edit))
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10756 = this;
if((function (){var and__3546__auto____10757 = (0 <= n);
if(and__3546__auto____10757)
{return (n < this__10756.cnt);
} else
{return and__3546__auto____10757;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10758 = this;
if(cljs.core.truth_(this__10758.root.edit))
{return this__10758.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__10759 = this;
if(cljs.core.truth_(this__10759.root.edit))
{if((function (){var and__3546__auto____10760 = (0 <= n);
if(and__3546__auto____10760)
{return (n < this__10759.cnt);
} else
{return and__3546__auto____10760;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__10759.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__10763 = (function go(level,node){
var node__10761 = cljs.core.tv_ensure_editable.call(null,this__10759.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__10761,(n & 31),val);
return node__10761;
} else
{var subidx__10762 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__10761,subidx__10762,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__10761,subidx__10762)));
return node__10761;
}
}).call(null,this__10759.shift,this__10759.root);
this__10759.root = new_root__10763;
return tcoll;
}
} else
{if((n === this__10759.cnt))
{return cljs.core._conj_BANG_.call(null,tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__10759.cnt)].join('')));
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
var this__10764 = this;
if(cljs.core.truth_(this__10764.root.edit))
{if((this__10764.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__10764.cnt))
{this__10764.cnt = 0;
return tcoll;
} else
{if((((this__10764.cnt - 1) & 31) > 0))
{this__10764.cnt = (this__10764.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__10765 = cljs.core.editable_array_for.call(null,tcoll,(this__10764.cnt - 2));
var new_root__10767 = (function (){var nr__10766 = cljs.core.tv_pop_tail.call(null,tcoll,this__10764.shift,this__10764.root);
if((nr__10766 != null))
{return nr__10766;
} else
{return (new cljs.core.VectorNode(this__10764.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3546__auto____10768 = (5 < this__10764.shift);
if(and__3546__auto____10768)
{return (cljs.core.pv_aget.call(null,new_root__10767,1) == null);
} else
{return and__3546__auto____10768;
}
})())
{var new_root__10769 = cljs.core.tv_ensure_editable.call(null,this__10764.root.edit,cljs.core.pv_aget.call(null,new_root__10767,0));
this__10764.root = new_root__10769;
this__10764.shift = (this__10764.shift - 5);
this__10764.cnt = (this__10764.cnt - 1);
this__10764.tail = new_tail__10765;
return tcoll;
} else
{this__10764.root = new_root__10767;
this__10764.cnt = (this__10764.cnt - 1);
this__10764.tail = new_tail__10765;
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
var this__10770 = this;
return cljs.core._assoc_n_BANG_.call(null,tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10771 = this;
if(cljs.core.truth_(this__10771.root.edit))
{if(((this__10771.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__10771.tail[(this__10771.cnt & 31)] = o);
this__10771.cnt = (this__10771.cnt + 1);
return tcoll;
} else
{var tail_node__10772 = (new cljs.core.VectorNode(this__10771.root.edit,this__10771.tail));
var new_tail__10773 = cljs.core.make_array.call(null,32);
(new_tail__10773[0] = o);
this__10771.tail = new_tail__10773;
if(((this__10771.cnt >>> 5) > (1 << this__10771.shift)))
{var new_root_array__10774 = cljs.core.make_array.call(null,32);
var new_shift__10775 = (this__10771.shift + 5);
(new_root_array__10774[0] = this__10771.root);
(new_root_array__10774[1] = cljs.core.new_path.call(null,this__10771.root.edit,this__10771.shift,tail_node__10772));
this__10771.root = (new cljs.core.VectorNode(this__10771.root.edit,new_root_array__10774));
this__10771.shift = new_shift__10775;
this__10771.cnt = (this__10771.cnt + 1);
return tcoll;
} else
{var new_root__10776 = cljs.core.tv_push_tail.call(null,tcoll,this__10771.shift,this__10771.root,tail_node__10772);
this__10771.root = new_root__10776;
this__10771.cnt = (this__10771.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10777 = this;
if(cljs.core.truth_(this__10777.root.edit))
{this__10777.root.edit = null;
var len__10778 = (this__10777.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__10779 = cljs.core.make_array.call(null,len__10778);
cljs.core.array_copy.call(null,this__10777.tail,0,trimmed_tail__10779,0,len__10778);
return (new cljs.core.PersistentVector(null,this__10777.cnt,this__10777.shift,this__10777.root,trimmed_tail__10779,null));
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
var this__10781 = this;
var h__2226__auto____10782 = this__10781.__hash;
if((h__2226__auto____10782 != null))
{return h__2226__auto____10782;
} else
{var h__2226__auto____10783 = cljs.core.hash_coll.call(null,coll);
this__10781.__hash = h__2226__auto____10783;
return h__2226__auto____10783;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10784 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__10785 = this;
var this$__10786 = this;
return cljs.core.pr_str.call(null,this$__10786);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10787 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10788 = this;
return cljs.core._first.call(null,this__10788.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10789 = this;
var temp__3695__auto____10790 = cljs.core.next.call(null,this__10789.front);
if(cljs.core.truth_(temp__3695__auto____10790))
{var f1__10791 = temp__3695__auto____10790;
return (new cljs.core.PersistentQueueSeq(this__10789.meta,f1__10791,this__10789.rear,null));
} else
{if((this__10789.rear == null))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__10789.meta,this__10789.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10792 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10793 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__10793.front,this__10793.rear,this__10793.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10794 = this;
return this__10794.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10795 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10795.meta);
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
var this__10796 = this;
var h__2226__auto____10797 = this__10796.__hash;
if((h__2226__auto____10797 != null))
{return h__2226__auto____10797;
} else
{var h__2226__auto____10798 = cljs.core.hash_coll.call(null,coll);
this__10796.__hash = h__2226__auto____10798;
return h__2226__auto____10798;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10799 = this;
if(cljs.core.truth_(this__10799.front))
{return (new cljs.core.PersistentQueue(this__10799.meta,(this__10799.count + 1),this__10799.front,cljs.core.conj.call(null,(function (){var or__3548__auto____10800 = this__10799.rear;
if(cljs.core.truth_(or__3548__auto____10800))
{return or__3548__auto____10800;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__10799.meta,(this__10799.count + 1),cljs.core.conj.call(null,this__10799.front,o),cljs.core.PersistentVector.fromArray([]),null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__10801 = this;
var this$__10802 = this;
return cljs.core.pr_str.call(null,this$__10802);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10803 = this;
var rear__10804 = cljs.core.seq.call(null,this__10803.rear);
if(cljs.core.truth_((function (){var or__3548__auto____10805 = this__10803.front;
if(cljs.core.truth_(or__3548__auto____10805))
{return or__3548__auto____10805;
} else
{return rear__10804;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__10803.front,cljs.core.seq.call(null,rear__10804),null,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10806 = this;
return this__10806.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10807 = this;
return cljs.core._first.call(null,this__10807.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10808 = this;
if(cljs.core.truth_(this__10808.front))
{var temp__3695__auto____10809 = cljs.core.next.call(null,this__10808.front);
if(cljs.core.truth_(temp__3695__auto____10809))
{var f1__10810 = temp__3695__auto____10809;
return (new cljs.core.PersistentQueue(this__10808.meta,(this__10808.count - 1),f1__10810,this__10808.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__10808.meta,(this__10808.count - 1),cljs.core.seq.call(null,this__10808.rear),cljs.core.PersistentVector.fromArray([]),null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10811 = this;
return cljs.core.first.call(null,this__10811.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10812 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10813 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10814 = this;
return (new cljs.core.PersistentQueue(meta,this__10814.count,this__10814.front,this__10814.rear,this__10814.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10815 = this;
return this__10815.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10816 = this;
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
var this__10817 = this;
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
var len__10818 = array.length;
var i__10819 = 0;
while(true){
if((i__10819 < len__10818))
{if(cljs.core._EQ_.call(null,k,(array[i__10819])))
{return i__10819;
} else
{{
var G__10820 = (i__10819 + incr);
i__10819 = G__10820;
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
if(cljs.core.truth_((function (){var and__3546__auto____10821 = goog.isString.call(null,k);
if(cljs.core.truth_(and__3546__auto____10821))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____10821;
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
var a__10822 = cljs.core.hash.call(null,a);
var b__10823 = cljs.core.hash.call(null,b);
if((a__10822 < b__10823))
{return -1;
} else
{if((a__10822 > b__10823))
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
var ks__10825 = m.keys;
var len__10826 = ks__10825.length;
var so__10827 = m.strobj;
var out__10828 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__10829 = 0;
var out__10830 = cljs.core.transient$.call(null,out__10828);
while(true){
if((i__10829 < len__10826))
{var k__10831 = (ks__10825[i__10829]);
{
var G__10832 = (i__10829 + 1);
var G__10833 = cljs.core.assoc_BANG_.call(null,out__10830,k__10831,(so__10827[k__10831]));
i__10829 = G__10832;
out__10830 = G__10833;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__10830,k,v));
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
var this__10838 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10839 = this;
var h__2226__auto____10840 = this__10839.__hash;
if((h__2226__auto____10840 != null))
{return h__2226__auto____10840;
} else
{var h__2226__auto____10841 = cljs.core.hash_imap.call(null,coll);
this__10839.__hash = h__2226__auto____10841;
return h__2226__auto____10841;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10842 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10843 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__10843.strobj,(this__10843.strobj[k]),not_found);
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10844 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var overwrite_QMARK___10845 = this__10844.strobj.hasOwnProperty(k);
if(cljs.core.truth_(overwrite_QMARK___10845))
{var new_strobj__10846 = goog.object.clone.call(null,this__10844.strobj);
(new_strobj__10846[k] = v);
return (new cljs.core.ObjMap(this__10844.meta,this__10844.keys,new_strobj__10846,(this__10844.update_count + 1),null));
} else
{if((this__10844.update_count < cljs.core.ObjMap.HASHMAP_THRESHOLD))
{var new_strobj__10847 = goog.object.clone.call(null,this__10844.strobj);
var new_keys__10848 = cljs.core.aclone.call(null,this__10844.keys);
(new_strobj__10847[k] = v);
new_keys__10848.push(k);
return (new cljs.core.ObjMap(this__10844.meta,new_keys__10848,new_strobj__10847,(this__10844.update_count + 1),null));
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10849 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__10849.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__10869 = null;
var G__10869__2 = (function (tsym10836,k){
var this__10850 = this;
var tsym10836__10851 = this;
var coll__10852 = tsym10836__10851;
return cljs.core._lookup.call(null,coll__10852,k);
});
var G__10869__3 = (function (tsym10837,k,not_found){
var this__10853 = this;
var tsym10837__10854 = this;
var coll__10855 = tsym10837__10854;
return cljs.core._lookup.call(null,coll__10855,k,not_found);
});
G__10869 = function(tsym10837,k,not_found){
switch(arguments.length){
case 2:
return G__10869__2.call(this,tsym10837,k);
case 3:
return G__10869__3.call(this,tsym10837,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10869;
})()
;
cljs.core.ObjMap.prototype.apply = (function (tsym10834,args10835){
return tsym10834.call.apply(tsym10834,[tsym10834].concat(cljs.core.aclone.call(null,args10835)));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10856 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__10857 = this;
var this$__10858 = this;
return cljs.core.pr_str.call(null,this$__10858);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10859 = this;
if((this__10859.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__10824_SHARP_){
return cljs.core.vector.call(null,p1__10824_SHARP_,(this__10859.strobj[p1__10824_SHARP_]));
}),this__10859.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10860 = this;
return this__10860.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10861 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10862 = this;
return (new cljs.core.ObjMap(meta,this__10862.keys,this__10862.strobj,this__10862.update_count,this__10862.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10863 = this;
return this__10863.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10864 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__10864.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10865 = this;
if(cljs.core.truth_((function (){var and__3546__auto____10866 = goog.isString.call(null,k);
if(cljs.core.truth_(and__3546__auto____10866))
{return this__10865.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____10866;
}
})()))
{var new_keys__10867 = cljs.core.aclone.call(null,this__10865.keys);
var new_strobj__10868 = goog.object.clone.call(null,this__10865.strobj);
new_keys__10867.splice(cljs.core.scan_array.call(null,1,k,new_keys__10867),1);
cljs.core.js_delete.call(null,new_strobj__10868,k);
return (new cljs.core.ObjMap(this__10865.meta,new_keys__10867,new_strobj__10868,(this__10865.update_count + 1),null));
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
var this__10875 = this;
var h__2226__auto____10876 = this__10875.__hash;
if((h__2226__auto____10876 != null))
{return h__2226__auto____10876;
} else
{var h__2226__auto____10877 = cljs.core.hash_imap.call(null,coll);
this__10875.__hash = h__2226__auto____10877;
return h__2226__auto____10877;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10878 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10879 = this;
var bucket__10880 = (this__10879.hashobj[cljs.core.hash.call(null,k)]);
var i__10881 = (cljs.core.truth_(bucket__10880)?cljs.core.scan_array.call(null,2,k,bucket__10880):null);
if(cljs.core.truth_(i__10881))
{return (bucket__10880[(i__10881 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10882 = this;
var h__10883 = cljs.core.hash.call(null,k);
var bucket__10884 = (this__10882.hashobj[h__10883]);
if(cljs.core.truth_(bucket__10884))
{var new_bucket__10885 = cljs.core.aclone.call(null,bucket__10884);
var new_hashobj__10886 = goog.object.clone.call(null,this__10882.hashobj);
(new_hashobj__10886[h__10883] = new_bucket__10885);
var temp__3695__auto____10887 = cljs.core.scan_array.call(null,2,k,new_bucket__10885);
if(cljs.core.truth_(temp__3695__auto____10887))
{var i__10888 = temp__3695__auto____10887;
(new_bucket__10885[(i__10888 + 1)] = v);
return (new cljs.core.HashMap(this__10882.meta,this__10882.count,new_hashobj__10886,null));
} else
{new_bucket__10885.push(k,v);
return (new cljs.core.HashMap(this__10882.meta,(this__10882.count + 1),new_hashobj__10886,null));
}
} else
{var new_hashobj__10889 = goog.object.clone.call(null,this__10882.hashobj);
(new_hashobj__10889[h__10883] = [k,v]);
return (new cljs.core.HashMap(this__10882.meta,(this__10882.count + 1),new_hashobj__10889,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10890 = this;
var bucket__10891 = (this__10890.hashobj[cljs.core.hash.call(null,k)]);
var i__10892 = (cljs.core.truth_(bucket__10891)?cljs.core.scan_array.call(null,2,k,bucket__10891):null);
if(cljs.core.truth_(i__10892))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__10915 = null;
var G__10915__2 = (function (tsym10873,k){
var this__10893 = this;
var tsym10873__10894 = this;
var coll__10895 = tsym10873__10894;
return cljs.core._lookup.call(null,coll__10895,k);
});
var G__10915__3 = (function (tsym10874,k,not_found){
var this__10896 = this;
var tsym10874__10897 = this;
var coll__10898 = tsym10874__10897;
return cljs.core._lookup.call(null,coll__10898,k,not_found);
});
G__10915 = function(tsym10874,k,not_found){
switch(arguments.length){
case 2:
return G__10915__2.call(this,tsym10874,k);
case 3:
return G__10915__3.call(this,tsym10874,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10915;
})()
;
cljs.core.HashMap.prototype.apply = (function (tsym10871,args10872){
return tsym10871.call.apply(tsym10871,[tsym10871].concat(cljs.core.aclone.call(null,args10872)));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10899 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__10900 = this;
var this$__10901 = this;
return cljs.core.pr_str.call(null,this$__10901);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10902 = this;
if((this__10902.count > 0))
{var hashes__10903 = cljs.core.js_keys.call(null,this__10902.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__10870_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__10902.hashobj[p1__10870_SHARP_])));
}),hashes__10903);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10904 = this;
return this__10904.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10905 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10906 = this;
return (new cljs.core.HashMap(meta,this__10906.count,this__10906.hashobj,this__10906.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10907 = this;
return this__10907.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10908 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__10908.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10909 = this;
var h__10910 = cljs.core.hash.call(null,k);
var bucket__10911 = (this__10909.hashobj[h__10910]);
var i__10912 = (cljs.core.truth_(bucket__10911)?cljs.core.scan_array.call(null,2,k,bucket__10911):null);
if(cljs.core.not.call(null,i__10912))
{return coll;
} else
{var new_hashobj__10913 = goog.object.clone.call(null,this__10909.hashobj);
if((3 > bucket__10911.length))
{cljs.core.js_delete.call(null,new_hashobj__10913,h__10910);
} else
{var new_bucket__10914 = cljs.core.aclone.call(null,bucket__10911);
new_bucket__10914.splice(i__10912,2);
(new_hashobj__10913[h__10910] = new_bucket__10914);
}
return (new cljs.core.HashMap(this__10909.meta,(this__10909.count - 1),new_hashobj__10913,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__10916 = ks.length;
var i__10917 = 0;
var out__10918 = cljs.core.HashMap.EMPTY;
while(true){
if((i__10917 < len__10916))
{{
var G__10919 = (i__10917 + 1);
var G__10920 = cljs.core.assoc.call(null,out__10918,(ks[i__10917]),(vs[i__10917]));
i__10917 = G__10919;
out__10918 = G__10920;
continue;
}
} else
{return out__10918;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__10921 = m.arr;
var len__10922 = arr__10921.length;
var i__10923 = 0;
while(true){
if((len__10922 <= i__10923))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__10921[i__10923]),k))
{return i__10923;
} else
{if("\uFDD0'else")
{{
var G__10924 = (i__10923 + 2);
i__10923 = G__10924;
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
var this__10929 = this;
return (new cljs.core.TransientArrayMap({},this__10929.arr.length,cljs.core.aclone.call(null,this__10929.arr)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10930 = this;
var h__2226__auto____10931 = this__10930.__hash;
if((h__2226__auto____10931 != null))
{return h__2226__auto____10931;
} else
{var h__2226__auto____10932 = cljs.core.hash_imap.call(null,coll);
this__10930.__hash = h__2226__auto____10932;
return h__2226__auto____10932;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10933 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10934 = this;
var idx__10935 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__10935 === -1))
{return not_found;
} else
{return (this__10934.arr[(idx__10935 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10936 = this;
var idx__10937 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__10937 === -1))
{if((this__10936.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__10936.meta,(this__10936.cnt + 1),(function (){var G__10938__10939 = cljs.core.aclone.call(null,this__10936.arr);
G__10938__10939.push(k);
G__10938__10939.push(v);
return G__10938__10939;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__10936.arr[(idx__10937 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__10936.meta,this__10936.cnt,(function (){var G__10940__10941 = cljs.core.aclone.call(null,this__10936.arr);
(G__10940__10941[(idx__10937 + 1)] = v);
return G__10940__10941;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10942 = this;
return (cljs.core.array_map_index_of.call(null,coll,k) != -1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__10972 = null;
var G__10972__2 = (function (tsym10927,k){
var this__10943 = this;
var tsym10927__10944 = this;
var coll__10945 = tsym10927__10944;
return cljs.core._lookup.call(null,coll__10945,k);
});
var G__10972__3 = (function (tsym10928,k,not_found){
var this__10946 = this;
var tsym10928__10947 = this;
var coll__10948 = tsym10928__10947;
return cljs.core._lookup.call(null,coll__10948,k,not_found);
});
G__10972 = function(tsym10928,k,not_found){
switch(arguments.length){
case 2:
return G__10972__2.call(this,tsym10928,k);
case 3:
return G__10972__3.call(this,tsym10928,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10972;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (tsym10925,args10926){
return tsym10925.call.apply(tsym10925,[tsym10925].concat(cljs.core.aclone.call(null,args10926)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10949 = this;
var len__10950 = this__10949.arr.length;
var i__10951 = 0;
var init__10952 = init;
while(true){
if((i__10951 < len__10950))
{var init__10953 = f.call(null,init__10952,(this__10949.arr[i__10951]),(this__10949.arr[(i__10951 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__10953))
{return cljs.core.deref.call(null,init__10953);
} else
{{
var G__10973 = (i__10951 + 2);
var G__10974 = init__10953;
i__10951 = G__10973;
init__10952 = G__10974;
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
var this__10954 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__10955 = this;
var this$__10956 = this;
return cljs.core.pr_str.call(null,this$__10956);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10957 = this;
if((this__10957.cnt > 0))
{var len__10958 = this__10957.arr.length;
var array_map_seq__10959 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__10958))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__10957.arr[i]),(this__10957.arr[(i + 1)])]),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
})));
});
return array_map_seq__10959.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10960 = this;
return this__10960.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10961 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10962 = this;
return (new cljs.core.PersistentArrayMap(meta,this__10962.cnt,this__10962.arr,this__10962.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10963 = this;
return this__10963.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10964 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10964.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10965 = this;
var idx__10966 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__10966 >= 0))
{var len__10967 = this__10965.arr.length;
var new_len__10968 = (len__10967 - 2);
if((new_len__10968 === 0))
{return cljs.core._empty.call(null,coll);
} else
{var new_arr__10969 = cljs.core.make_array.call(null,new_len__10968);
var s__10970 = 0;
var d__10971 = 0;
while(true){
if((s__10970 >= len__10967))
{return (new cljs.core.PersistentArrayMap(this__10965.meta,(this__10965.cnt - 1),new_arr__10969,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__10965.arr[s__10970])))
{{
var G__10975 = (s__10970 + 2);
var G__10976 = d__10971;
s__10970 = G__10975;
d__10971 = G__10976;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__10969[d__10971] = (this__10965.arr[s__10970]));
(new_arr__10969[(d__10971 + 1)] = (this__10965.arr[(s__10970 + 1)]));
{
var G__10977 = (s__10970 + 2);
var G__10978 = (d__10971 + 2);
s__10970 = G__10977;
d__10971 = G__10978;
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
var len__10979 = cljs.core.count.call(null,ks);
var i__10980 = 0;
var out__10981 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__10980 < len__10979))
{{
var G__10982 = (i__10980 + 1);
var G__10983 = cljs.core.assoc_BANG_.call(null,out__10981,(ks[i__10980]),(vs[i__10980]));
i__10980 = G__10982;
out__10981 = G__10983;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10981);
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
var this__10984 = this;
if(cljs.core.truth_(this__10984.editable_QMARK_))
{var idx__10985 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__10985 >= 0))
{(this__10984.arr[idx__10985] = (this__10984.arr[(this__10984.len - 2)]));
(this__10984.arr[(idx__10985 + 1)] = (this__10984.arr[(this__10984.len - 1)]));
var G__10986__10987 = this__10984.arr;
G__10986__10987.pop();
G__10986__10987.pop();
G__10986__10987;
this__10984.len = (this__10984.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__10988 = this;
if(cljs.core.truth_(this__10988.editable_QMARK_))
{var idx__10989 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__10989 === -1))
{if(((this__10988.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__10988.len = (this__10988.len + 2);
this__10988.arr.push(key);
this__10988.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__10988.len,this__10988.arr),key,val);
}
} else
{if((val === (this__10988.arr[(idx__10989 + 1)])))
{return tcoll;
} else
{(this__10988.arr[(idx__10989 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10990 = this;
if(cljs.core.truth_(this__10990.editable_QMARK_))
{if((function (){var G__10991__10992 = o;
if((G__10991__10992 != null))
{if((function (){var or__3548__auto____10993 = (G__10991__10992.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3548__auto____10993)
{return or__3548__auto____10993;
} else
{return G__10991__10992.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__10991__10992.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10991__10992);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10991__10992);
}
})())
{return cljs.core._assoc_BANG_.call(null,tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__10994 = cljs.core.seq.call(null,o);
var tcoll__10995 = tcoll;
while(true){
var temp__3695__auto____10996 = cljs.core.first.call(null,es__10994);
if(cljs.core.truth_(temp__3695__auto____10996))
{var e__10997 = temp__3695__auto____10996;
{
var G__11003 = cljs.core.next.call(null,es__10994);
var G__11004 = cljs.core._assoc_BANG_.call(null,tcoll__10995,cljs.core.key.call(null,e__10997),cljs.core.val.call(null,e__10997));
es__10994 = G__11003;
tcoll__10995 = G__11004;
continue;
}
} else
{return tcoll__10995;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10998 = this;
if(cljs.core.truth_(this__10998.editable_QMARK_))
{this__10998.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__10998.len,2),this__10998.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__10999 = this;
return cljs.core._lookup.call(null,tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__11000 = this;
if(cljs.core.truth_(this__11000.editable_QMARK_))
{var idx__11001 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__11001 === -1))
{return not_found;
} else
{return (this__11000.arr[(idx__11001 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__11002 = this;
if(cljs.core.truth_(this__11002.editable_QMARK_))
{return cljs.core.quot.call(null,this__11002.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__11005 = cljs.core.transient$.call(null,cljs.core.ObjMap.fromObject([],{}));
var i__11006 = 0;
while(true){
if((i__11006 < len))
{{
var G__11007 = cljs.core.assoc_BANG_.call(null,out__11005,(arr[i__11006]),(arr[(i__11006 + 1)]));
var G__11008 = (i__11006 + 2);
out__11005 = G__11007;
i__11006 = G__11008;
continue;
}
} else
{return out__11005;
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
var G__11009__11010 = cljs.core.aclone.call(null,arr);
(G__11009__11010[i] = a);
return G__11009__11010;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__11011__11012 = cljs.core.aclone.call(null,arr);
(G__11011__11012[i] = a);
(G__11011__11012[j] = b);
return G__11011__11012;
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
var new_arr__11013 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__11013,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__11013,(2 * i),(new_arr__11013.length - (2 * i)));
return new_arr__11013;
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
var editable__11014 = inode.ensure_editable(edit);
(editable__11014.arr[i] = a);
return editable__11014;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__11015 = inode.ensure_editable(edit);
(editable__11015.arr[i] = a);
(editable__11015.arr[j] = b);
return editable__11015;
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
var len__11016 = arr.length;
var i__11017 = 0;
var init__11018 = init;
while(true){
if((i__11017 < len__11016))
{var init__11021 = (function (){var k__11019 = (arr[i__11017]);
if((k__11019 != null))
{return f.call(null,init__11018,k__11019,(arr[(i__11017 + 1)]));
} else
{var node__11020 = (arr[(i__11017 + 1)]);
if((node__11020 != null))
{return node__11020.kv_reduce(f,init__11018);
} else
{return init__11018;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__11021))
{return cljs.core.deref.call(null,init__11021);
} else
{{
var G__11022 = (i__11017 + 2);
var G__11023 = init__11021;
i__11017 = G__11022;
init__11018 = G__11023;
continue;
}
}
} else
{return init__11018;
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
var this__11024 = this;
var inode__11025 = this;
if((this__11024.bitmap === bit))
{return null;
} else
{var editable__11026 = inode__11025.ensure_editable(e);
var earr__11027 = editable__11026.arr;
var len__11028 = earr__11027.length;
editable__11026.bitmap = (bit ^ editable__11026.bitmap);
cljs.core.array_copy.call(null,earr__11027,(2 * (i + 1)),earr__11027,(2 * i),(len__11028 - (2 * (i + 1))));
(earr__11027[(len__11028 - 2)] = null);
(earr__11027[(len__11028 - 1)] = null);
return editable__11026;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__11029 = this;
var inode__11030 = this;
var bit__11031 = (1 << ((hash >>> shift) & 0x01f));
var idx__11032 = cljs.core.bitmap_indexed_node_index.call(null,this__11029.bitmap,bit__11031);
if(((this__11029.bitmap & bit__11031) === 0))
{var n__11033 = cljs.core.bit_count.call(null,this__11029.bitmap);
if(((2 * n__11033) < this__11029.arr.length))
{var editable__11034 = inode__11030.ensure_editable(edit);
var earr__11035 = editable__11034.arr;
(added_leaf_QMARK_[0] = true);
cljs.core.array_copy_downward.call(null,earr__11035,(2 * idx__11032),earr__11035,(2 * (idx__11032 + 1)),(2 * (n__11033 - idx__11032)));
(earr__11035[(2 * idx__11032)] = key);
(earr__11035[((2 * idx__11032) + 1)] = val);
editable__11034.bitmap = (editable__11034.bitmap | bit__11031);
return editable__11034;
} else
{if((n__11033 >= 16))
{var nodes__11036 = cljs.core.make_array.call(null,32);
var jdx__11037 = ((hash >>> shift) & 0x01f);
(nodes__11036[jdx__11037] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__11038 = 0;
var j__11039 = 0;
while(true){
if((i__11038 < 32))
{if((((this__11029.bitmap >>> i__11038) & 1) === 0))
{{
var G__11092 = (i__11038 + 1);
var G__11093 = j__11039;
i__11038 = G__11092;
j__11039 = G__11093;
continue;
}
} else
{(nodes__11036[i__11038] = (((null != (this__11029.arr[j__11039])))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__11029.arr[j__11039])),(this__11029.arr[j__11039]),(this__11029.arr[(j__11039 + 1)]),added_leaf_QMARK_):(this__11029.arr[(j__11039 + 1)])));
{
var G__11094 = (i__11038 + 1);
var G__11095 = (j__11039 + 2);
i__11038 = G__11094;
j__11039 = G__11095;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__11033 + 1),nodes__11036));
} else
{if("\uFDD0'else")
{var new_arr__11040 = cljs.core.make_array.call(null,(2 * (n__11033 + 4)));
cljs.core.array_copy.call(null,this__11029.arr,0,new_arr__11040,0,(2 * idx__11032));
(new_arr__11040[(2 * idx__11032)] = key);
(added_leaf_QMARK_[0] = true);
(new_arr__11040[((2 * idx__11032) + 1)] = val);
cljs.core.array_copy.call(null,this__11029.arr,(2 * idx__11032),new_arr__11040,(2 * (idx__11032 + 1)),(2 * (n__11033 - idx__11032)));
var editable__11041 = inode__11030.ensure_editable(edit);
editable__11041.arr = new_arr__11040;
editable__11041.bitmap = (editable__11041.bitmap | bit__11031);
return editable__11041;
} else
{return null;
}
}
}
} else
{var key_or_nil__11042 = (this__11029.arr[(2 * idx__11032)]);
var val_or_node__11043 = (this__11029.arr[((2 * idx__11032) + 1)]);
if((null == key_or_nil__11042))
{var n__11044 = val_or_node__11043.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11044 === val_or_node__11043))
{return inode__11030;
} else
{return cljs.core.edit_and_set.call(null,inode__11030,edit,((2 * idx__11032) + 1),n__11044);
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__11042))
{if((val === val_or_node__11043))
{return inode__11030;
} else
{return cljs.core.edit_and_set.call(null,inode__11030,edit,((2 * idx__11032) + 1),val);
}
} else
{if("\uFDD0'else")
{(added_leaf_QMARK_[0] = true);
return cljs.core.edit_and_set.call(null,inode__11030,edit,(2 * idx__11032),null,((2 * idx__11032) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__11042,val_or_node__11043,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__11045 = this;
var inode__11046 = this;
return cljs.core.create_inode_seq.call(null,this__11045.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11047 = this;
var inode__11048 = this;
var bit__11049 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11047.bitmap & bit__11049) === 0))
{return inode__11048;
} else
{var idx__11050 = cljs.core.bitmap_indexed_node_index.call(null,this__11047.bitmap,bit__11049);
var key_or_nil__11051 = (this__11047.arr[(2 * idx__11050)]);
var val_or_node__11052 = (this__11047.arr[((2 * idx__11050) + 1)]);
if((null == key_or_nil__11051))
{var n__11053 = val_or_node__11052.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__11053 === val_or_node__11052))
{return inode__11048;
} else
{if((null != n__11053))
{return cljs.core.edit_and_set.call(null,inode__11048,edit,((2 * idx__11050) + 1),n__11053);
} else
{if((this__11047.bitmap === bit__11049))
{return null;
} else
{if("\uFDD0'else")
{return inode__11048.edit_and_remove_pair(edit,bit__11049,idx__11050);
} else
{return null;
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__11051))
{(removed_leaf_QMARK_[0] = true);
return inode__11048.edit_and_remove_pair(edit,bit__11049,idx__11050);
} else
{if("\uFDD0'else")
{return inode__11048;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__11054 = this;
var inode__11055 = this;
if((e === this__11054.edit))
{return inode__11055;
} else
{var n__11056 = cljs.core.bit_count.call(null,this__11054.bitmap);
var new_arr__11057 = cljs.core.make_array.call(null,(((n__11056 < 0))?4:(2 * (n__11056 + 1))));
cljs.core.array_copy.call(null,this__11054.arr,0,new_arr__11057,0,(2 * n__11056));
return (new cljs.core.BitmapIndexedNode(e,this__11054.bitmap,new_arr__11057));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__11058 = this;
var inode__11059 = this;
return cljs.core.inode_kv_reduce.call(null,this__11058.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function() {
var G__11096 = null;
var G__11096__3 = (function (shift,hash,key){
var this__11060 = this;
var inode__11061 = this;
var bit__11062 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11060.bitmap & bit__11062) === 0))
{return null;
} else
{var idx__11063 = cljs.core.bitmap_indexed_node_index.call(null,this__11060.bitmap,bit__11062);
var key_or_nil__11064 = (this__11060.arr[(2 * idx__11063)]);
var val_or_node__11065 = (this__11060.arr[((2 * idx__11063) + 1)]);
if((null == key_or_nil__11064))
{return val_or_node__11065.inode_find((shift + 5),hash,key);
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__11064))
{return cljs.core.PersistentVector.fromArray([key_or_nil__11064,val_or_node__11065]);
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
var G__11096__4 = (function (shift,hash,key,not_found){
var this__11066 = this;
var inode__11067 = this;
var bit__11068 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11066.bitmap & bit__11068) === 0))
{return not_found;
} else
{var idx__11069 = cljs.core.bitmap_indexed_node_index.call(null,this__11066.bitmap,bit__11068);
var key_or_nil__11070 = (this__11066.arr[(2 * idx__11069)]);
var val_or_node__11071 = (this__11066.arr[((2 * idx__11069) + 1)]);
if((null == key_or_nil__11070))
{return val_or_node__11071.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__11070))
{return cljs.core.PersistentVector.fromArray([key_or_nil__11070,val_or_node__11071]);
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
G__11096 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__11096__3.call(this,shift,hash,key);
case 4:
return G__11096__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11096;
})()
;
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__11072 = this;
var inode__11073 = this;
var bit__11074 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11072.bitmap & bit__11074) === 0))
{return inode__11073;
} else
{var idx__11075 = cljs.core.bitmap_indexed_node_index.call(null,this__11072.bitmap,bit__11074);
var key_or_nil__11076 = (this__11072.arr[(2 * idx__11075)]);
var val_or_node__11077 = (this__11072.arr[((2 * idx__11075) + 1)]);
if((null == key_or_nil__11076))
{var n__11078 = val_or_node__11077.inode_without((shift + 5),hash,key);
if((n__11078 === val_or_node__11077))
{return inode__11073;
} else
{if((null != n__11078))
{return (new cljs.core.BitmapIndexedNode(null,this__11072.bitmap,cljs.core.clone_and_set.call(null,this__11072.arr,((2 * idx__11075) + 1),n__11078)));
} else
{if((this__11072.bitmap === bit__11074))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__11072.bitmap ^ bit__11074),cljs.core.remove_pair.call(null,this__11072.arr,idx__11075)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__11076))
{return (new cljs.core.BitmapIndexedNode(null,(this__11072.bitmap ^ bit__11074),cljs.core.remove_pair.call(null,this__11072.arr,idx__11075)));
} else
{if("\uFDD0'else")
{return inode__11073;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11079 = this;
var inode__11080 = this;
var bit__11081 = (1 << ((hash >>> shift) & 0x01f));
var idx__11082 = cljs.core.bitmap_indexed_node_index.call(null,this__11079.bitmap,bit__11081);
if(((this__11079.bitmap & bit__11081) === 0))
{var n__11083 = cljs.core.bit_count.call(null,this__11079.bitmap);
if((n__11083 >= 16))
{var nodes__11084 = cljs.core.make_array.call(null,32);
var jdx__11085 = ((hash >>> shift) & 0x01f);
(nodes__11084[jdx__11085] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__11086 = 0;
var j__11087 = 0;
while(true){
if((i__11086 < 32))
{if((((this__11079.bitmap >>> i__11086) & 1) === 0))
{{
var G__11097 = (i__11086 + 1);
var G__11098 = j__11087;
i__11086 = G__11097;
j__11087 = G__11098;
continue;
}
} else
{(nodes__11084[i__11086] = (((null != (this__11079.arr[j__11087])))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__11079.arr[j__11087])),(this__11079.arr[j__11087]),(this__11079.arr[(j__11087 + 1)]),added_leaf_QMARK_):(this__11079.arr[(j__11087 + 1)])));
{
var G__11099 = (i__11086 + 1);
var G__11100 = (j__11087 + 2);
i__11086 = G__11099;
j__11087 = G__11100;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__11083 + 1),nodes__11084));
} else
{var new_arr__11088 = cljs.core.make_array.call(null,(2 * (n__11083 + 1)));
cljs.core.array_copy.call(null,this__11079.arr,0,new_arr__11088,0,(2 * idx__11082));
(new_arr__11088[(2 * idx__11082)] = key);
(added_leaf_QMARK_[0] = true);
(new_arr__11088[((2 * idx__11082) + 1)] = val);
cljs.core.array_copy.call(null,this__11079.arr,(2 * idx__11082),new_arr__11088,(2 * (idx__11082 + 1)),(2 * (n__11083 - idx__11082)));
return (new cljs.core.BitmapIndexedNode(null,(this__11079.bitmap | bit__11081),new_arr__11088));
}
} else
{var key_or_nil__11089 = (this__11079.arr[(2 * idx__11082)]);
var val_or_node__11090 = (this__11079.arr[((2 * idx__11082) + 1)]);
if((null == key_or_nil__11089))
{var n__11091 = val_or_node__11090.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11091 === val_or_node__11090))
{return inode__11080;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__11079.bitmap,cljs.core.clone_and_set.call(null,this__11079.arr,((2 * idx__11082) + 1),n__11091)));
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__11089))
{if((val === val_or_node__11090))
{return inode__11080;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__11079.bitmap,cljs.core.clone_and_set.call(null,this__11079.arr,((2 * idx__11082) + 1),val)));
}
} else
{if("\uFDD0'else")
{(added_leaf_QMARK_[0] = true);
return (new cljs.core.BitmapIndexedNode(null,this__11079.bitmap,cljs.core.clone_and_set.call(null,this__11079.arr,(2 * idx__11082),null,((2 * idx__11082) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__11089,val_or_node__11090,hash,key,val))));
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
var arr__11101 = array_node.arr;
var len__11102 = (2 * (array_node.cnt - 1));
var new_arr__11103 = cljs.core.make_array.call(null,len__11102);
var i__11104 = 0;
var j__11105 = 1;
var bitmap__11106 = 0;
while(true){
if((i__11104 < len__11102))
{if((function (){var and__3546__auto____11107 = (i__11104 != idx);
if(and__3546__auto____11107)
{return (null != (arr__11101[i__11104]));
} else
{return and__3546__auto____11107;
}
})())
{(new_arr__11103[j__11105] = (arr__11101[i__11104]));
{
var G__11108 = (i__11104 + 1);
var G__11109 = (j__11105 + 2);
var G__11110 = (bitmap__11106 | (1 << i__11104));
i__11104 = G__11108;
j__11105 = G__11109;
bitmap__11106 = G__11110;
continue;
}
} else
{{
var G__11111 = (i__11104 + 1);
var G__11112 = j__11105;
var G__11113 = bitmap__11106;
i__11104 = G__11111;
j__11105 = G__11112;
bitmap__11106 = G__11113;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__11106,new_arr__11103));
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
var this__11114 = this;
var inode__11115 = this;
var idx__11116 = ((hash >>> shift) & 0x01f);
var node__11117 = (this__11114.arr[idx__11116]);
if((null == node__11117))
{return (new cljs.core.ArrayNode(null,(this__11114.cnt + 1),cljs.core.clone_and_set.call(null,this__11114.arr,idx__11116,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__11118 = node__11117.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11118 === node__11117))
{return inode__11115;
} else
{return (new cljs.core.ArrayNode(null,this__11114.cnt,cljs.core.clone_and_set.call(null,this__11114.arr,idx__11116,n__11118)));
}
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__11119 = this;
var inode__11120 = this;
var idx__11121 = ((hash >>> shift) & 0x01f);
var node__11122 = (this__11119.arr[idx__11121]);
if((null != node__11122))
{var n__11123 = node__11122.inode_without((shift + 5),hash,key);
if((n__11123 === node__11122))
{return inode__11120;
} else
{if((n__11123 == null))
{if((this__11119.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__11120,null,idx__11121);
} else
{return (new cljs.core.ArrayNode(null,(this__11119.cnt - 1),cljs.core.clone_and_set.call(null,this__11119.arr,idx__11121,n__11123)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__11119.cnt,cljs.core.clone_and_set.call(null,this__11119.arr,idx__11121,n__11123)));
} else
{return null;
}
}
}
} else
{return inode__11120;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function() {
var G__11155 = null;
var G__11155__3 = (function (shift,hash,key){
var this__11124 = this;
var inode__11125 = this;
var idx__11126 = ((hash >>> shift) & 0x01f);
var node__11127 = (this__11124.arr[idx__11126]);
if((null != node__11127))
{return node__11127.inode_find((shift + 5),hash,key);
} else
{return null;
}
});
var G__11155__4 = (function (shift,hash,key,not_found){
var this__11128 = this;
var inode__11129 = this;
var idx__11130 = ((hash >>> shift) & 0x01f);
var node__11131 = (this__11128.arr[idx__11130]);
if((null != node__11131))
{return node__11131.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
G__11155 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__11155__3.call(this,shift,hash,key);
case 4:
return G__11155__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11155;
})()
;
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__11132 = this;
var inode__11133 = this;
return cljs.core.create_array_node_seq.call(null,this__11132.arr);
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__11134 = this;
var inode__11135 = this;
if((e === this__11134.edit))
{return inode__11135;
} else
{return (new cljs.core.ArrayNode(e,this__11134.cnt,cljs.core.aclone.call(null,this__11134.arr)));
}
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__11136 = this;
var inode__11137 = this;
var idx__11138 = ((hash >>> shift) & 0x01f);
var node__11139 = (this__11136.arr[idx__11138]);
if((null == node__11139))
{var editable__11140 = cljs.core.edit_and_set.call(null,inode__11137,edit,idx__11138,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__11140.cnt = (editable__11140.cnt + 1);
return editable__11140;
} else
{var n__11141 = node__11139.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11141 === node__11139))
{return inode__11137;
} else
{return cljs.core.edit_and_set.call(null,inode__11137,edit,idx__11138,n__11141);
}
}
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11142 = this;
var inode__11143 = this;
var idx__11144 = ((hash >>> shift) & 0x01f);
var node__11145 = (this__11142.arr[idx__11144]);
if((null == node__11145))
{return inode__11143;
} else
{var n__11146 = node__11145.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__11146 === node__11145))
{return inode__11143;
} else
{if((null == n__11146))
{if((this__11142.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__11143,edit,idx__11144);
} else
{var editable__11147 = cljs.core.edit_and_set.call(null,inode__11143,edit,idx__11144,n__11146);
editable__11147.cnt = (editable__11147.cnt - 1);
return editable__11147;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__11143,edit,idx__11144,n__11146);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__11148 = this;
var inode__11149 = this;
var len__11150 = this__11148.arr.length;
var i__11151 = 0;
var init__11152 = init;
while(true){
if((i__11151 < len__11150))
{var node__11153 = (this__11148.arr[i__11151]);
if((node__11153 != null))
{var init__11154 = node__11153.kv_reduce(f,init__11152);
if(cljs.core.reduced_QMARK_.call(null,init__11154))
{return cljs.core.deref.call(null,init__11154);
} else
{{
var G__11156 = (i__11151 + 1);
var G__11157 = init__11154;
i__11151 = G__11156;
init__11152 = G__11157;
continue;
}
}
} else
{return null;
}
} else
{return init__11152;
}
break;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__11158 = (2 * cnt);
var i__11159 = 0;
while(true){
if((i__11159 < lim__11158))
{if(cljs.core._EQ_.call(null,key,(arr[i__11159])))
{return i__11159;
} else
{{
var G__11160 = (i__11159 + 2);
i__11159 = G__11160;
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
var this__11161 = this;
var inode__11162 = this;
if((hash === this__11161.collision_hash))
{var idx__11163 = cljs.core.hash_collision_node_find_index.call(null,this__11161.arr,this__11161.cnt,key);
if((idx__11163 === -1))
{var len__11164 = this__11161.arr.length;
var new_arr__11165 = cljs.core.make_array.call(null,(len__11164 + 2));
cljs.core.array_copy.call(null,this__11161.arr,0,new_arr__11165,0,len__11164);
(new_arr__11165[len__11164] = key);
(new_arr__11165[(len__11164 + 1)] = val);
(added_leaf_QMARK_[0] = true);
return (new cljs.core.HashCollisionNode(null,this__11161.collision_hash,(this__11161.cnt + 1),new_arr__11165));
} else
{if(cljs.core._EQ_.call(null,(this__11161.arr[idx__11163]),val))
{return inode__11162;
} else
{return (new cljs.core.HashCollisionNode(null,this__11161.collision_hash,this__11161.cnt,cljs.core.clone_and_set.call(null,this__11161.arr,(idx__11163 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__11161.collision_hash >>> shift) & 0x01f)),[null,inode__11162])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__11166 = this;
var inode__11167 = this;
var idx__11168 = cljs.core.hash_collision_node_find_index.call(null,this__11166.arr,this__11166.cnt,key);
if((idx__11168 === -1))
{return inode__11167;
} else
{if((this__11166.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__11166.collision_hash,(this__11166.cnt - 1),cljs.core.remove_pair.call(null,this__11166.arr,cljs.core.quot.call(null,idx__11168,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_find = (function() {
var G__11195 = null;
var G__11195__3 = (function (shift,hash,key){
var this__11169 = this;
var inode__11170 = this;
var idx__11171 = cljs.core.hash_collision_node_find_index.call(null,this__11169.arr,this__11169.cnt,key);
if((idx__11171 < 0))
{return null;
} else
{if(cljs.core._EQ_.call(null,key,(this__11169.arr[idx__11171])))
{return cljs.core.PersistentVector.fromArray([(this__11169.arr[idx__11171]),(this__11169.arr[(idx__11171 + 1)])]);
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
var G__11195__4 = (function (shift,hash,key,not_found){
var this__11172 = this;
var inode__11173 = this;
var idx__11174 = cljs.core.hash_collision_node_find_index.call(null,this__11172.arr,this__11172.cnt,key);
if((idx__11174 < 0))
{return not_found;
} else
{if(cljs.core._EQ_.call(null,key,(this__11172.arr[idx__11174])))
{return cljs.core.PersistentVector.fromArray([(this__11172.arr[idx__11174]),(this__11172.arr[(idx__11174 + 1)])]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
G__11195 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__11195__3.call(this,shift,hash,key);
case 4:
return G__11195__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11195;
})()
;
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__11175 = this;
var inode__11176 = this;
return cljs.core.create_inode_seq.call(null,this__11175.arr);
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function() {
var G__11196 = null;
var G__11196__1 = (function (e){
var this__11177 = this;
var inode__11178 = this;
if((e === this__11177.edit))
{return inode__11178;
} else
{var new_arr__11179 = cljs.core.make_array.call(null,(2 * (this__11177.cnt + 1)));
cljs.core.array_copy.call(null,this__11177.arr,0,new_arr__11179,0,(2 * this__11177.cnt));
return (new cljs.core.HashCollisionNode(e,this__11177.collision_hash,this__11177.cnt,new_arr__11179));
}
});
var G__11196__3 = (function (e,count,array){
var this__11180 = this;
var inode__11181 = this;
if((e === this__11180.edit))
{this__11180.arr = array;
this__11180.cnt = count;
return inode__11181;
} else
{return (new cljs.core.HashCollisionNode(this__11180.edit,this__11180.collision_hash,count,array));
}
});
G__11196 = function(e,count,array){
switch(arguments.length){
case 1:
return G__11196__1.call(this,e);
case 3:
return G__11196__3.call(this,e,count,array);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11196;
})()
;
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__11182 = this;
var inode__11183 = this;
if((hash === this__11182.collision_hash))
{var idx__11184 = cljs.core.hash_collision_node_find_index.call(null,this__11182.arr,this__11182.cnt,key);
if((idx__11184 === -1))
{if((this__11182.arr.length > (2 * this__11182.cnt)))
{var editable__11185 = cljs.core.edit_and_set.call(null,inode__11183,edit,(2 * this__11182.cnt),key,((2 * this__11182.cnt) + 1),val);
(added_leaf_QMARK_[0] = true);
editable__11185.cnt = (editable__11185.cnt + 1);
return editable__11185;
} else
{var len__11186 = this__11182.arr.length;
var new_arr__11187 = cljs.core.make_array.call(null,(len__11186 + 2));
cljs.core.array_copy.call(null,this__11182.arr,0,new_arr__11187,0,len__11186);
(new_arr__11187[len__11186] = key);
(new_arr__11187[(len__11186 + 1)] = val);
(added_leaf_QMARK_[0] = true);
return inode__11183.ensure_editable(edit,(this__11182.cnt + 1),new_arr__11187);
}
} else
{if(((this__11182.arr[(idx__11184 + 1)]) === val))
{return inode__11183;
} else
{return cljs.core.edit_and_set.call(null,inode__11183,edit,(idx__11184 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__11182.collision_hash >>> shift) & 0x01f)),[null,inode__11183,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11188 = this;
var inode__11189 = this;
var idx__11190 = cljs.core.hash_collision_node_find_index.call(null,this__11188.arr,this__11188.cnt,key);
if((idx__11190 === -1))
{return inode__11189;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__11188.cnt === 1))
{return null;
} else
{var editable__11191 = inode__11189.ensure_editable(edit);
var earr__11192 = editable__11191.arr;
(earr__11192[idx__11190] = (earr__11192[((2 * this__11188.cnt) - 2)]));
(earr__11192[(idx__11190 + 1)] = (earr__11192[((2 * this__11188.cnt) - 1)]));
(earr__11192[((2 * this__11188.cnt) - 1)] = null);
(earr__11192[((2 * this__11188.cnt) - 2)] = null);
editable__11191.cnt = (editable__11191.cnt - 1);
return editable__11191;
}
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__11193 = this;
var inode__11194 = this;
return cljs.core.inode_kv_reduce.call(null,this__11193.arr,f,init);
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__11197 = cljs.core.hash.call(null,key1);
if((key1hash__11197 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__11197,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___11198 = [false];
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__11197,key1,val1,added_leaf_QMARK___11198).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___11198);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__11199 = cljs.core.hash.call(null,key1);
if((key1hash__11199 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__11199,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___11200 = [false];
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__11199,key1,val1,added_leaf_QMARK___11200).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___11200);
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
var this__11201 = this;
var h__2226__auto____11202 = this__11201.__hash;
if((h__2226__auto____11202 != null))
{return h__2226__auto____11202;
} else
{var h__2226__auto____11203 = cljs.core.hash_coll.call(null,coll);
this__11201.__hash = h__2226__auto____11203;
return h__2226__auto____11203;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11204 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__11205 = this;
var this$__11206 = this;
return cljs.core.pr_str.call(null,this$__11206);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11207 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11208 = this;
if((this__11208.s == null))
{return cljs.core.PersistentVector.fromArray([(this__11208.nodes[this__11208.i]),(this__11208.nodes[(this__11208.i + 1)])]);
} else
{return cljs.core.first.call(null,this__11208.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11209 = this;
if((this__11209.s == null))
{return cljs.core.create_inode_seq.call(null,this__11209.nodes,(this__11209.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__11209.nodes,this__11209.i,cljs.core.next.call(null,this__11209.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11210 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11211 = this;
return (new cljs.core.NodeSeq(meta,this__11211.nodes,this__11211.i,this__11211.s,this__11211.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11212 = this;
return this__11212.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11213 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11213.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__11214 = nodes.length;
var j__11215 = i;
while(true){
if((j__11215 < len__11214))
{if((null != (nodes[j__11215])))
{return (new cljs.core.NodeSeq(null,nodes,j__11215,null,null));
} else
{var temp__3695__auto____11216 = (nodes[(j__11215 + 1)]);
if(cljs.core.truth_(temp__3695__auto____11216))
{var node__11217 = temp__3695__auto____11216;
var temp__3695__auto____11218 = node__11217.inode_seq();
if(cljs.core.truth_(temp__3695__auto____11218))
{var node_seq__11219 = temp__3695__auto____11218;
return (new cljs.core.NodeSeq(null,nodes,(j__11215 + 2),node_seq__11219,null));
} else
{{
var G__11220 = (j__11215 + 2);
j__11215 = G__11220;
continue;
}
}
} else
{{
var G__11221 = (j__11215 + 2);
j__11215 = G__11221;
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
var this__11222 = this;
var h__2226__auto____11223 = this__11222.__hash;
if((h__2226__auto____11223 != null))
{return h__2226__auto____11223;
} else
{var h__2226__auto____11224 = cljs.core.hash_coll.call(null,coll);
this__11222.__hash = h__2226__auto____11224;
return h__2226__auto____11224;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11225 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__11226 = this;
var this$__11227 = this;
return cljs.core.pr_str.call(null,this$__11227);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11228 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11229 = this;
return cljs.core.first.call(null,this__11229.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11230 = this;
return cljs.core.create_array_node_seq.call(null,null,this__11230.nodes,this__11230.i,cljs.core.next.call(null,this__11230.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11231 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11232 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__11232.nodes,this__11232.i,this__11232.s,this__11232.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11233 = this;
return this__11233.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11234 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11234.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__11235 = nodes.length;
var j__11236 = i;
while(true){
if((j__11236 < len__11235))
{var temp__3695__auto____11237 = (nodes[j__11236]);
if(cljs.core.truth_(temp__3695__auto____11237))
{var nj__11238 = temp__3695__auto____11237;
var temp__3695__auto____11239 = nj__11238.inode_seq();
if(cljs.core.truth_(temp__3695__auto____11239))
{var ns__11240 = temp__3695__auto____11239;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__11236 + 1),ns__11240,null));
} else
{{
var G__11241 = (j__11236 + 1);
j__11236 = G__11241;
continue;
}
}
} else
{{
var G__11242 = (j__11236 + 1);
j__11236 = G__11242;
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
var this__11247 = this;
return (new cljs.core.TransientHashMap({},this__11247.root,this__11247.cnt,this__11247.has_nil_QMARK_,this__11247.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11248 = this;
var h__2226__auto____11249 = this__11248.__hash;
if((h__2226__auto____11249 != null))
{return h__2226__auto____11249;
} else
{var h__2226__auto____11250 = cljs.core.hash_imap.call(null,coll);
this__11248.__hash = h__2226__auto____11250;
return h__2226__auto____11250;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11251 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11252 = this;
if((k == null))
{if(cljs.core.truth_(this__11252.has_nil_QMARK_))
{return this__11252.nil_val;
} else
{return not_found;
}
} else
{if((this__11252.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return cljs.core.nth.call(null,this__11252.root.inode_find(0,cljs.core.hash.call(null,k),k,[null,not_found]),1);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11253 = this;
if((k == null))
{if(cljs.core.truth_((function (){var and__3546__auto____11254 = this__11253.has_nil_QMARK_;
if(cljs.core.truth_(and__3546__auto____11254))
{return (v === this__11253.nil_val);
} else
{return and__3546__auto____11254;
}
})()))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11253.meta,(cljs.core.truth_(this__11253.has_nil_QMARK_)?this__11253.cnt:(this__11253.cnt + 1)),this__11253.root,true,v,null));
}
} else
{var added_leaf_QMARK___11255 = [false];
var new_root__11256 = (((this__11253.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__11253.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___11255);
if((new_root__11256 === this__11253.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11253.meta,(cljs.core.truth_((added_leaf_QMARK___11255[0]))?(this__11253.cnt + 1):this__11253.cnt),new_root__11256,this__11253.has_nil_QMARK_,this__11253.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11257 = this;
if((k == null))
{return this__11257.has_nil_QMARK_;
} else
{if((this__11257.root == null))
{return false;
} else
{if("\uFDD0'else")
{return cljs.core.not.call(null,(this__11257.root.inode_find(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__11278 = null;
var G__11278__2 = (function (tsym11245,k){
var this__11258 = this;
var tsym11245__11259 = this;
var coll__11260 = tsym11245__11259;
return cljs.core._lookup.call(null,coll__11260,k);
});
var G__11278__3 = (function (tsym11246,k,not_found){
var this__11261 = this;
var tsym11246__11262 = this;
var coll__11263 = tsym11246__11262;
return cljs.core._lookup.call(null,coll__11263,k,not_found);
});
G__11278 = function(tsym11246,k,not_found){
switch(arguments.length){
case 2:
return G__11278__2.call(this,tsym11246,k);
case 3:
return G__11278__3.call(this,tsym11246,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11278;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (tsym11243,args11244){
return tsym11243.call.apply(tsym11243,[tsym11243].concat(cljs.core.aclone.call(null,args11244)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11264 = this;
var init__11265 = (cljs.core.truth_(this__11264.has_nil_QMARK_)?f.call(null,init,null,this__11264.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__11265))
{return cljs.core.deref.call(null,init__11265);
} else
{if((null != this__11264.root))
{return this__11264.root.kv_reduce(f,init__11265);
} else
{if("\uFDD0'else")
{return init__11265;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11266 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__11267 = this;
var this$__11268 = this;
return cljs.core.pr_str.call(null,this$__11268);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11269 = this;
if((this__11269.cnt > 0))
{var s__11270 = (((null != this__11269.root))?this__11269.root.inode_seq():null);
if(cljs.core.truth_(this__11269.has_nil_QMARK_))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__11269.nil_val]),s__11270);
} else
{return s__11270;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11271 = this;
return this__11271.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11272 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11273 = this;
return (new cljs.core.PersistentHashMap(meta,this__11273.cnt,this__11273.root,this__11273.has_nil_QMARK_,this__11273.nil_val,this__11273.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11274 = this;
return this__11274.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11275 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__11275.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11276 = this;
if((k == null))
{if(cljs.core.truth_(this__11276.has_nil_QMARK_))
{return (new cljs.core.PersistentHashMap(this__11276.meta,(this__11276.cnt - 1),this__11276.root,false,null,null));
} else
{return coll;
}
} else
{if((this__11276.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__11277 = this__11276.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__11277 === this__11276.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11276.meta,(this__11276.cnt - 1),new_root__11277,this__11276.has_nil_QMARK_,this__11276.nil_val,null));
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
var len__11279 = ks.length;
var i__11280 = 0;
var out__11281 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__11280 < len__11279))
{{
var G__11282 = (i__11280 + 1);
var G__11283 = cljs.core.assoc_BANG_.call(null,out__11281,(ks[i__11280]),(vs[i__11280]));
i__11280 = G__11282;
out__11281 = G__11283;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11281);
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
var this__11284 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__11285 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__11286 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11287 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__11288 = this;
if((k == null))
{if(cljs.core.truth_(this__11288.has_nil_QMARK_))
{return this__11288.nil_val;
} else
{return null;
}
} else
{if((this__11288.root == null))
{return null;
} else
{return cljs.core.nth.call(null,this__11288.root.inode_find(0,cljs.core.hash.call(null,k),k),1);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__11289 = this;
if((k == null))
{if(cljs.core.truth_(this__11289.has_nil_QMARK_))
{return this__11289.nil_val;
} else
{return not_found;
}
} else
{if((this__11289.root == null))
{return not_found;
} else
{return cljs.core.nth.call(null,this__11289.root.inode_find(0,cljs.core.hash.call(null,k),k,[null,not_found]),1);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11290 = this;
if(cljs.core.truth_(this__11290.edit))
{return this__11290.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__11291 = this;
var tcoll__11292 = this;
if(cljs.core.truth_(this__11291.edit))
{if((function (){var G__11293__11294 = o;
if((G__11293__11294 != null))
{if((function (){var or__3548__auto____11295 = (G__11293__11294.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3548__auto____11295)
{return or__3548__auto____11295;
} else
{return G__11293__11294.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__11293__11294.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11293__11294);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11293__11294);
}
})())
{return tcoll__11292.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__11296 = cljs.core.seq.call(null,o);
var tcoll__11297 = tcoll__11292;
while(true){
var temp__3695__auto____11298 = cljs.core.first.call(null,es__11296);
if(cljs.core.truth_(temp__3695__auto____11298))
{var e__11299 = temp__3695__auto____11298;
{
var G__11310 = cljs.core.next.call(null,es__11296);
var G__11311 = tcoll__11297.assoc_BANG_(cljs.core.key.call(null,e__11299),cljs.core.val.call(null,e__11299));
es__11296 = G__11310;
tcoll__11297 = G__11311;
continue;
}
} else
{return tcoll__11297;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__11300 = this;
var tcoll__11301 = this;
if(cljs.core.truth_(this__11300.edit))
{if((k == null))
{if((this__11300.nil_val === v))
{} else
{this__11300.nil_val = v;
}
if(cljs.core.truth_(this__11300.has_nil_QMARK_))
{} else
{this__11300.count = (this__11300.count + 1);
this__11300.has_nil_QMARK_ = true;
}
return tcoll__11301;
} else
{var added_leaf_QMARK___11302 = [false];
var node__11303 = (((this__11300.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__11300.root).inode_assoc_BANG_(this__11300.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___11302);
if((node__11303 === this__11300.root))
{} else
{this__11300.root = node__11303;
}
if(cljs.core.truth_((added_leaf_QMARK___11302[0])))
{this__11300.count = (this__11300.count + 1);
} else
{}
return tcoll__11301;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__11304 = this;
var tcoll__11305 = this;
if(cljs.core.truth_(this__11304.edit))
{if((k == null))
{if(cljs.core.truth_(this__11304.has_nil_QMARK_))
{this__11304.has_nil_QMARK_ = false;
this__11304.nil_val = null;
this__11304.count = (this__11304.count - 1);
return tcoll__11305;
} else
{return tcoll__11305;
}
} else
{if((this__11304.root == null))
{return tcoll__11305;
} else
{var removed_leaf_QMARK___11306 = [false];
var node__11307 = this__11304.root.inode_without_BANG_(this__11304.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___11306);
if((node__11307 === this__11304.root))
{} else
{this__11304.root = node__11307;
}
if(cljs.core.truth_((removed_leaf_QMARK___11306[0])))
{this__11304.count = (this__11304.count - 1);
} else
{}
return tcoll__11305;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__11308 = this;
var tcoll__11309 = this;
if(cljs.core.truth_(this__11308.edit))
{this__11308.edit = null;
return (new cljs.core.PersistentHashMap(null,this__11308.count,this__11308.root,this__11308.has_nil_QMARK_,this__11308.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__11312 = node;
var stack__11313 = stack;
while(true){
if((t__11312 != null))
{{
var G__11314 = (cljs.core.truth_(ascending_QMARK_)?t__11312.left:t__11312.right);
var G__11315 = cljs.core.conj.call(null,stack__11313,t__11312);
t__11312 = G__11314;
stack__11313 = G__11315;
continue;
}
} else
{return stack__11313;
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
var this__11316 = this;
var h__2226__auto____11317 = this__11316.__hash;
if((h__2226__auto____11317 != null))
{return h__2226__auto____11317;
} else
{var h__2226__auto____11318 = cljs.core.hash_coll.call(null,coll);
this__11316.__hash = h__2226__auto____11318;
return h__2226__auto____11318;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11319 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__11320 = this;
var this$__11321 = this;
return cljs.core.pr_str.call(null,this$__11321);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11322 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11323 = this;
if((this__11323.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__11323.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__11324 = this;
return cljs.core.peek.call(null,this__11324.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__11325 = this;
var t__11326 = cljs.core.peek.call(null,this__11325.stack);
var next_stack__11327 = cljs.core.tree_map_seq_push.call(null,(cljs.core.truth_(this__11325.ascending_QMARK_)?t__11326.right:t__11326.left),cljs.core.pop.call(null,this__11325.stack),this__11325.ascending_QMARK_);
if((next_stack__11327 != null))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__11327,this__11325.ascending_QMARK_,(this__11325.cnt - 1),null));
} else
{return null;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11328 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11329 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__11329.stack,this__11329.ascending_QMARK_,this__11329.cnt,this__11329.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11330 = this;
return this__11330.meta;
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
{if((function (){var and__3546__auto____11331 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3546__auto____11331)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3546__auto____11331;
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
{if((function (){var and__3546__auto____11332 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3546__auto____11332)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3546__auto____11332;
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
var init__11333 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__11333))
{return cljs.core.deref.call(null,init__11333);
} else
{var init__11334 = (((node.left != null))?tree_map_kv_reduce.call(null,node.left,f,init__11333):init__11333);
if(cljs.core.reduced_QMARK_.call(null,init__11334))
{return cljs.core.deref.call(null,init__11334);
} else
{var init__11335 = (((node.right != null))?tree_map_kv_reduce.call(null,node.right,f,init__11334):init__11334);
if(cljs.core.reduced_QMARK_.call(null,init__11335))
{return cljs.core.deref.call(null,init__11335);
} else
{return init__11335;
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
var this__11340 = this;
var h__2226__auto____11341 = this__11340.__hash;
if((h__2226__auto____11341 != null))
{return h__2226__auto____11341;
} else
{var h__2226__auto____11342 = cljs.core.hash_coll.call(null,coll);
this__11340.__hash = h__2226__auto____11342;
return h__2226__auto____11342;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$ = true;
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__11343 = this;
return cljs.core._nth.call(null,node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__11344 = this;
return cljs.core._nth.call(null,node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$ = true;
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__11345 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__11345.key,this__11345.val]),k,v);
});
cljs.core.BlackNode.prototype.cljs$core$IFn$ = true;
cljs.core.BlackNode.prototype.call = (function() {
var G__11392 = null;
var G__11392__2 = (function (tsym11338,k){
var this__11346 = this;
var tsym11338__11347 = this;
var node__11348 = tsym11338__11347;
return cljs.core._lookup.call(null,node__11348,k);
});
var G__11392__3 = (function (tsym11339,k,not_found){
var this__11349 = this;
var tsym11339__11350 = this;
var node__11351 = tsym11339__11350;
return cljs.core._lookup.call(null,node__11351,k,not_found);
});
G__11392 = function(tsym11339,k,not_found){
switch(arguments.length){
case 2:
return G__11392__2.call(this,tsym11339,k);
case 3:
return G__11392__3.call(this,tsym11339,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11392;
})()
;
cljs.core.BlackNode.prototype.apply = (function (tsym11336,args11337){
return tsym11336.call.apply(tsym11336,[tsym11336].concat(cljs.core.aclone.call(null,args11337)));
});
cljs.core.BlackNode.prototype.cljs$core$ISequential$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICollection$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__11352 = this;
return cljs.core.PersistentVector.fromArray([this__11352.key,this__11352.val,o]);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$ = true;
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__11353 = this;
return this__11353.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__11354 = this;
return this__11354.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__11355 = this;
var node__11356 = this;
return ins.balance_right(node__11356);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__11357 = this;
var node__11358 = this;
return (new cljs.core.RedNode(this__11357.key,this__11357.val,this__11357.left,this__11357.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__11359 = this;
var node__11360 = this;
return cljs.core.balance_right_del.call(null,this__11359.key,this__11359.val,this__11359.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__11361 = this;
var node__11362 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__11363 = this;
var node__11364 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__11364,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__11365 = this;
var node__11366 = this;
return cljs.core.balance_left_del.call(null,this__11365.key,this__11365.val,del,this__11365.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__11367 = this;
var node__11368 = this;
return ins.balance_left(node__11368);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__11369 = this;
var node__11370 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__11370,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__11393 = null;
var G__11393__0 = (function (){
var this__11373 = this;
var this$__11374 = this;
return cljs.core.pr_str.call(null,this$__11374);
});
G__11393 = function(){
switch(arguments.length){
case 0:
return G__11393__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11393;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__11375 = this;
var node__11376 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__11376,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__11377 = this;
var node__11378 = this;
return node__11378;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$ = true;
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__11379 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__11380 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$ = true;
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__11381 = this;
return cljs.core.list.call(null,this__11381.key,this__11381.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__11383 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$ = true;
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__11384 = this;
return this__11384.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__11385 = this;
return cljs.core.PersistentVector.fromArray([this__11385.key]);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$ = true;
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__11386 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__11386.key,this__11386.val]),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$ = true;
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11387 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$ = true;
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__11388 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__11388.key,this__11388.val]),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$ = true;
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__11389 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$ = true;
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__11390 = this;
if((n === 0))
{return this__11390.key;
} else
{if((n === 1))
{return this__11390.val;
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
var this__11391 = this;
if((n === 0))
{return this__11391.key;
} else
{if((n === 1))
{return this__11391.val;
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
var this__11382 = this;
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
var this__11398 = this;
var h__2226__auto____11399 = this__11398.__hash;
if((h__2226__auto____11399 != null))
{return h__2226__auto____11399;
} else
{var h__2226__auto____11400 = cljs.core.hash_coll.call(null,coll);
this__11398.__hash = h__2226__auto____11400;
return h__2226__auto____11400;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$ = true;
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__11401 = this;
return cljs.core._nth.call(null,node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__11402 = this;
return cljs.core._nth.call(null,node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$ = true;
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__11403 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__11403.key,this__11403.val]),k,v);
});
cljs.core.RedNode.prototype.cljs$core$IFn$ = true;
cljs.core.RedNode.prototype.call = (function() {
var G__11450 = null;
var G__11450__2 = (function (tsym11396,k){
var this__11404 = this;
var tsym11396__11405 = this;
var node__11406 = tsym11396__11405;
return cljs.core._lookup.call(null,node__11406,k);
});
var G__11450__3 = (function (tsym11397,k,not_found){
var this__11407 = this;
var tsym11397__11408 = this;
var node__11409 = tsym11397__11408;
return cljs.core._lookup.call(null,node__11409,k,not_found);
});
G__11450 = function(tsym11397,k,not_found){
switch(arguments.length){
case 2:
return G__11450__2.call(this,tsym11397,k);
case 3:
return G__11450__3.call(this,tsym11397,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11450;
})()
;
cljs.core.RedNode.prototype.apply = (function (tsym11394,args11395){
return tsym11394.call.apply(tsym11394,[tsym11394].concat(cljs.core.aclone.call(null,args11395)));
});
cljs.core.RedNode.prototype.cljs$core$ISequential$ = true;
cljs.core.RedNode.prototype.cljs$core$ICollection$ = true;
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__11410 = this;
return cljs.core.PersistentVector.fromArray([this__11410.key,this__11410.val,o]);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$ = true;
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__11411 = this;
return this__11411.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__11412 = this;
return this__11412.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__11413 = this;
var node__11414 = this;
return (new cljs.core.RedNode(this__11413.key,this__11413.val,this__11413.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__11415 = this;
var node__11416 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__11417 = this;
var node__11418 = this;
return (new cljs.core.RedNode(this__11417.key,this__11417.val,this__11417.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__11419 = this;
var node__11420 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__11421 = this;
var node__11422 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__11422,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__11423 = this;
var node__11424 = this;
return (new cljs.core.RedNode(this__11423.key,this__11423.val,del,this__11423.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__11425 = this;
var node__11426 = this;
return (new cljs.core.RedNode(this__11425.key,this__11425.val,ins,this__11425.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__11427 = this;
var node__11428 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11427.left))
{return (new cljs.core.RedNode(this__11427.key,this__11427.val,this__11427.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__11427.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11427.right))
{return (new cljs.core.RedNode(this__11427.right.key,this__11427.right.val,(new cljs.core.BlackNode(this__11427.key,this__11427.val,this__11427.left,this__11427.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__11427.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__11428,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__11451 = null;
var G__11451__0 = (function (){
var this__11431 = this;
var this$__11432 = this;
return cljs.core.pr_str.call(null,this$__11432);
});
G__11451 = function(){
switch(arguments.length){
case 0:
return G__11451__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11451;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__11433 = this;
var node__11434 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11433.right))
{return (new cljs.core.RedNode(this__11433.key,this__11433.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__11433.left,null)),this__11433.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11433.left))
{return (new cljs.core.RedNode(this__11433.left.key,this__11433.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__11433.left.left,null)),(new cljs.core.BlackNode(this__11433.key,this__11433.val,this__11433.left.right,this__11433.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__11434,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__11435 = this;
var node__11436 = this;
return (new cljs.core.BlackNode(this__11435.key,this__11435.val,this__11435.left,this__11435.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$ = true;
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__11437 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__11438 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$ = true;
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__11439 = this;
return cljs.core.list.call(null,this__11439.key,this__11439.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$ = true;
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__11441 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$ = true;
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__11442 = this;
return this__11442.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__11443 = this;
return cljs.core.PersistentVector.fromArray([this__11443.key]);
});
cljs.core.RedNode.prototype.cljs$core$IVector$ = true;
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__11444 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__11444.key,this__11444.val]),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$ = true;
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11445 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$ = true;
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__11446 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__11446.key,this__11446.val]),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$ = true;
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__11447 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$ = true;
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__11448 = this;
if((n === 0))
{return this__11448.key;
} else
{if((n === 1))
{return this__11448.val;
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
var this__11449 = this;
if((n === 0))
{return this__11449.key;
} else
{if((n === 1))
{return this__11449.val;
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
var this__11440 = this;
return cljs.core.PersistentVector.fromArray([]);
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__11452 = comp.call(null,k,tree.key);
if((c__11452 === 0))
{(found[0] = tree);
return null;
} else
{if((c__11452 < 0))
{var ins__11453 = tree_map_add.call(null,comp,tree.left,k,v,found);
if((ins__11453 != null))
{return tree.add_left(ins__11453);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__11454 = tree_map_add.call(null,comp,tree.right,k,v,found);
if((ins__11454 != null))
{return tree.add_right(ins__11454);
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
{var app__11455 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__11455))
{return (new cljs.core.RedNode(app__11455.key,app__11455.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__11455.left)),(new cljs.core.RedNode(right.key,right.val,app__11455.right,right.right)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__11455,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__11456 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__11456))
{return (new cljs.core.RedNode(app__11456.key,app__11456.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__11456.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__11456.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__11456,right.right,null)));
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
{var c__11457 = comp.call(null,k,tree.key);
if((c__11457 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__11457 < 0))
{var del__11458 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3548__auto____11459 = (del__11458 != null);
if(or__3548__auto____11459)
{return or__3548__auto____11459;
} else
{return ((found[0]) != null);
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__11458,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__11458,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__11460 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3548__auto____11461 = (del__11460 != null);
if(or__3548__auto____11461)
{return or__3548__auto____11461;
} else
{return ((found[0]) != null);
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__11460);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__11460,null));
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
var tk__11462 = tree.key;
var c__11463 = comp.call(null,k,tk__11462);
if((c__11463 === 0))
{return tree.replace(tk__11462,v,tree.left,tree.right);
} else
{if((c__11463 < 0))
{return tree.replace(tk__11462,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__11462,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__11468 = this;
var h__2226__auto____11469 = this__11468.__hash;
if((h__2226__auto____11469 != null))
{return h__2226__auto____11469;
} else
{var h__2226__auto____11470 = cljs.core.hash_imap.call(null,coll);
this__11468.__hash = h__2226__auto____11470;
return h__2226__auto____11470;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11471 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11472 = this;
var n__11473 = coll.entry_at(k);
if((n__11473 != null))
{return n__11473.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11474 = this;
var found__11475 = [null];
var t__11476 = cljs.core.tree_map_add.call(null,this__11474.comp,this__11474.tree,k,v,found__11475);
if((t__11476 == null))
{var found_node__11477 = cljs.core.nth.call(null,found__11475,0);
if(cljs.core._EQ_.call(null,v,found_node__11477.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__11474.comp,cljs.core.tree_map_replace.call(null,this__11474.comp,this__11474.tree,k,v),this__11474.cnt,this__11474.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__11474.comp,t__11476.blacken(),(this__11474.cnt + 1),this__11474.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11478 = this;
return (coll.entry_at(k) != null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__11510 = null;
var G__11510__2 = (function (tsym11466,k){
var this__11479 = this;
var tsym11466__11480 = this;
var coll__11481 = tsym11466__11480;
return cljs.core._lookup.call(null,coll__11481,k);
});
var G__11510__3 = (function (tsym11467,k,not_found){
var this__11482 = this;
var tsym11467__11483 = this;
var coll__11484 = tsym11467__11483;
return cljs.core._lookup.call(null,coll__11484,k,not_found);
});
G__11510 = function(tsym11467,k,not_found){
switch(arguments.length){
case 2:
return G__11510__2.call(this,tsym11467,k);
case 3:
return G__11510__3.call(this,tsym11467,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11510;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (tsym11464,args11465){
return tsym11464.call.apply(tsym11464,[tsym11464].concat(cljs.core.aclone.call(null,args11465)));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11485 = this;
if((this__11485.tree != null))
{return cljs.core.tree_map_kv_reduce.call(null,this__11485.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11486 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11487 = this;
if((this__11487.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11487.tree,false,this__11487.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__11488 = this;
var this$__11489 = this;
return cljs.core.pr_str.call(null,this$__11489);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__11490 = this;
var coll__11491 = this;
var t__11492 = this__11490.tree;
while(true){
if((t__11492 != null))
{var c__11493 = this__11490.comp.call(null,k,t__11492.key);
if((c__11493 === 0))
{return t__11492;
} else
{if((c__11493 < 0))
{{
var G__11511 = t__11492.left;
t__11492 = G__11511;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__11512 = t__11492.right;
t__11492 = G__11512;
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
var this__11494 = this;
if((this__11494.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11494.tree,ascending_QMARK_,this__11494.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11495 = this;
if((this__11495.cnt > 0))
{var stack__11496 = null;
var t__11497 = this__11495.tree;
while(true){
if((t__11497 != null))
{var c__11498 = this__11495.comp.call(null,k,t__11497.key);
if((c__11498 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__11496,t__11497),ascending_QMARK_,-1));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__11498 < 0))
{{
var G__11513 = cljs.core.conj.call(null,stack__11496,t__11497);
var G__11514 = t__11497.left;
stack__11496 = G__11513;
t__11497 = G__11514;
continue;
}
} else
{{
var G__11515 = stack__11496;
var G__11516 = t__11497.right;
stack__11496 = G__11515;
t__11497 = G__11516;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__11498 > 0))
{{
var G__11517 = cljs.core.conj.call(null,stack__11496,t__11497);
var G__11518 = t__11497.right;
stack__11496 = G__11517;
t__11497 = G__11518;
continue;
}
} else
{{
var G__11519 = stack__11496;
var G__11520 = t__11497.left;
stack__11496 = G__11519;
t__11497 = G__11520;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__11496 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__11496,ascending_QMARK_,-1));
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
var this__11499 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11500 = this;
return this__11500.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11501 = this;
if((this__11501.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11501.tree,true,this__11501.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11502 = this;
return this__11502.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11503 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11504 = this;
return (new cljs.core.PersistentTreeMap(this__11504.comp,this__11504.tree,this__11504.cnt,meta,this__11504.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11508 = this;
return this__11508.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11509 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__11509.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11505 = this;
var found__11506 = [null];
var t__11507 = cljs.core.tree_map_remove.call(null,this__11505.comp,this__11505.tree,k,found__11506);
if((t__11507 == null))
{if((cljs.core.nth.call(null,found__11506,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__11505.comp,null,0,this__11505.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__11505.comp,t__11507.blacken(),(this__11505.cnt - 1),this__11505.meta,null));
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
var in$__11521 = cljs.core.seq.call(null,keyvals);
var out__11522 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(cljs.core.truth_(in$__11521))
{{
var G__11523 = cljs.core.nnext.call(null,in$__11521);
var G__11524 = cljs.core.assoc_BANG_.call(null,out__11522,cljs.core.first.call(null,in$__11521),cljs.core.second.call(null,in$__11521));
in$__11521 = G__11523;
out__11522 = G__11524;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11522);
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
hash_map.cljs$lang$applyTo = (function (arglist__11525){
var keyvals = cljs.core.seq(arglist__11525);;
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
array_map.cljs$lang$applyTo = (function (arglist__11526){
var keyvals = cljs.core.seq(arglist__11526);;
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
var in$__11527 = cljs.core.seq.call(null,keyvals);
var out__11528 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(cljs.core.truth_(in$__11527))
{{
var G__11529 = cljs.core.nnext.call(null,in$__11527);
var G__11530 = cljs.core.assoc.call(null,out__11528,cljs.core.first.call(null,in$__11527),cljs.core.second.call(null,in$__11527));
in$__11527 = G__11529;
out__11528 = G__11530;
continue;
}
} else
{return out__11528;
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
sorted_map.cljs$lang$applyTo = (function (arglist__11531){
var keyvals = cljs.core.seq(arglist__11531);;
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
var in$__11532 = cljs.core.seq.call(null,keyvals);
var out__11533 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(cljs.core.truth_(in$__11532))
{{
var G__11534 = cljs.core.nnext.call(null,in$__11532);
var G__11535 = cljs.core.assoc.call(null,out__11533,cljs.core.first.call(null,in$__11532),cljs.core.second.call(null,in$__11532));
in$__11532 = G__11534;
out__11533 = G__11535;
continue;
}
} else
{return out__11533;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__11536){
var comparator = cljs.core.first(arglist__11536);
var keyvals = cljs.core.rest(arglist__11536);
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
{return cljs.core.reduce.call(null,(function (p1__11537_SHARP_,p2__11538_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____11539 = p1__11537_SHARP_;
if(cljs.core.truth_(or__3548__auto____11539))
{return or__3548__auto____11539;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__11538_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__11540){
var maps = cljs.core.seq(arglist__11540);;
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
{var merge_entry__11543 = (function (m,e){
var k__11541 = cljs.core.first.call(null,e);
var v__11542 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__11541))
{return cljs.core.assoc.call(null,m,k__11541,f.call(null,cljs.core.get.call(null,m,k__11541),v__11542));
} else
{return cljs.core.assoc.call(null,m,k__11541,v__11542);
}
});
var merge2__11545 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__11543,(function (){var or__3548__auto____11544 = m1;
if(cljs.core.truth_(or__3548__auto____11544))
{return or__3548__auto____11544;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__11545,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__11546){
var f = cljs.core.first(arglist__11546);
var maps = cljs.core.rest(arglist__11546);
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
var ret__11547 = cljs.core.ObjMap.fromObject([],{});
var keys__11548 = cljs.core.seq.call(null,keyseq);
while(true){
if(cljs.core.truth_(keys__11548))
{var key__11549 = cljs.core.first.call(null,keys__11548);
var entry__11550 = cljs.core.get.call(null,map,key__11549,"\uFDD0'user/not-found");
{
var G__11551 = ((cljs.core.not_EQ_.call(null,entry__11550,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__11547,key__11549,entry__11550):ret__11547);
var G__11552 = cljs.core.next.call(null,keys__11548);
ret__11547 = G__11551;
keys__11548 = G__11552;
continue;
}
} else
{return ret__11547;
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
var this__11558 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__11558.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11559 = this;
var h__2226__auto____11560 = this__11559.__hash;
if((h__2226__auto____11560 != null))
{return h__2226__auto____11560;
} else
{var h__2226__auto____11561 = cljs.core.hash_iset.call(null,coll);
this__11559.__hash = h__2226__auto____11561;
return h__2226__auto____11561;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__11562 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__11563 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11563.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__11582 = null;
var G__11582__2 = (function (tsym11556,k){
var this__11564 = this;
var tsym11556__11565 = this;
var coll__11566 = tsym11556__11565;
return cljs.core._lookup.call(null,coll__11566,k);
});
var G__11582__3 = (function (tsym11557,k,not_found){
var this__11567 = this;
var tsym11557__11568 = this;
var coll__11569 = tsym11557__11568;
return cljs.core._lookup.call(null,coll__11569,k,not_found);
});
G__11582 = function(tsym11557,k,not_found){
switch(arguments.length){
case 2:
return G__11582__2.call(this,tsym11557,k);
case 3:
return G__11582__3.call(this,tsym11557,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11582;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (tsym11554,args11555){
return tsym11554.call.apply(tsym11554,[tsym11554].concat(cljs.core.aclone.call(null,args11555)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11570 = this;
return (new cljs.core.PersistentHashSet(this__11570.meta,cljs.core.assoc.call(null,this__11570.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__11571 = this;
var this$__11572 = this;
return cljs.core.pr_str.call(null,this$__11572);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11573 = this;
return cljs.core.keys.call(null,this__11573.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11574 = this;
return (new cljs.core.PersistentHashSet(this__11574.meta,cljs.core.dissoc.call(null,this__11574.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11575 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11576 = this;
var and__3546__auto____11577 = cljs.core.set_QMARK_.call(null,other);
if(and__3546__auto____11577)
{var and__3546__auto____11578 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3546__auto____11578)
{return cljs.core.every_QMARK_.call(null,(function (p1__11553_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11553_SHARP_);
}),other);
} else
{return and__3546__auto____11578;
}
} else
{return and__3546__auto____11577;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11579 = this;
return (new cljs.core.PersistentHashSet(meta,this__11579.hash_map,this__11579.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11580 = this;
return this__11580.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11581 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__11581.meta);
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
var G__11600 = null;
var G__11600__2 = (function (tsym11586,k){
var this__11588 = this;
var tsym11586__11589 = this;
var tcoll__11590 = tsym11586__11589;
if((cljs.core._lookup.call(null,this__11588.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__11600__3 = (function (tsym11587,k,not_found){
var this__11591 = this;
var tsym11587__11592 = this;
var tcoll__11593 = tsym11587__11592;
if((cljs.core._lookup.call(null,this__11591.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__11600 = function(tsym11587,k,not_found){
switch(arguments.length){
case 2:
return G__11600__2.call(this,tsym11587,k);
case 3:
return G__11600__3.call(this,tsym11587,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11600;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (tsym11584,args11585){
return tsym11584.call.apply(tsym11584,[tsym11584].concat(cljs.core.aclone.call(null,args11585)));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__11594 = this;
return cljs.core._lookup.call(null,tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__11595 = this;
if((cljs.core._lookup.call(null,this__11595.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__11596 = this;
return cljs.core.count.call(null,this__11596.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__11597 = this;
this__11597.transient_map = cljs.core.dissoc_BANG_.call(null,this__11597.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__11598 = this;
this__11598.transient_map = cljs.core.assoc_BANG_.call(null,this__11598.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11599 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__11599.transient_map),null));
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
var this__11605 = this;
var h__2226__auto____11606 = this__11605.__hash;
if((h__2226__auto____11606 != null))
{return h__2226__auto____11606;
} else
{var h__2226__auto____11607 = cljs.core.hash_iset.call(null,coll);
this__11605.__hash = h__2226__auto____11607;
return h__2226__auto____11607;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__11608 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__11609 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11609.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__11633 = null;
var G__11633__2 = (function (tsym11603,k){
var this__11610 = this;
var tsym11603__11611 = this;
var coll__11612 = tsym11603__11611;
return cljs.core._lookup.call(null,coll__11612,k);
});
var G__11633__3 = (function (tsym11604,k,not_found){
var this__11613 = this;
var tsym11604__11614 = this;
var coll__11615 = tsym11604__11614;
return cljs.core._lookup.call(null,coll__11615,k,not_found);
});
G__11633 = function(tsym11604,k,not_found){
switch(arguments.length){
case 2:
return G__11633__2.call(this,tsym11604,k);
case 3:
return G__11633__3.call(this,tsym11604,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11633;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (tsym11601,args11602){
return tsym11601.call.apply(tsym11601,[tsym11601].concat(cljs.core.aclone.call(null,args11602)));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11616 = this;
return (new cljs.core.PersistentTreeSet(this__11616.meta,cljs.core.assoc.call(null,this__11616.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11617 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__11617.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__11618 = this;
var this$__11619 = this;
return cljs.core.pr_str.call(null,this$__11619);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__11620 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__11620.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11621 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__11621.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__11622 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11623 = this;
return cljs.core._comparator.call(null,this__11623.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11624 = this;
return cljs.core.keys.call(null,this__11624.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11625 = this;
return (new cljs.core.PersistentTreeSet(this__11625.meta,cljs.core.dissoc.call(null,this__11625.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11626 = this;
return cljs.core.count.call(null,this__11626.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11627 = this;
var and__3546__auto____11628 = cljs.core.set_QMARK_.call(null,other);
if(and__3546__auto____11628)
{var and__3546__auto____11629 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3546__auto____11629)
{return cljs.core.every_QMARK_.call(null,(function (p1__11583_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11583_SHARP_);
}),other);
} else
{return and__3546__auto____11629;
}
} else
{return and__3546__auto____11628;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11630 = this;
return (new cljs.core.PersistentTreeSet(meta,this__11630.tree_map,this__11630.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11631 = this;
return this__11631.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11632 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__11632.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__11634 = cljs.core.seq.call(null,coll);
var out__11635 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,in$__11634)))
{{
var G__11636 = cljs.core.next.call(null,in$__11634);
var G__11637 = cljs.core.conj_BANG_.call(null,out__11635,cljs.core.first.call(null,in$__11634));
in$__11634 = G__11636;
out__11635 = G__11637;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11635);
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
sorted_set.cljs$lang$applyTo = (function (arglist__11638){
var keys = cljs.core.seq(arglist__11638);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__11640){
var comparator = cljs.core.first(arglist__11640);
var keys = cljs.core.rest(arglist__11640);
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
{var n__11641 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____11642 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3695__auto____11642))
{var e__11643 = temp__3695__auto____11642;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__11643));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__11641,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__11639_SHARP_){
var temp__3695__auto____11644 = cljs.core.find.call(null,smap,p1__11639_SHARP_);
if(cljs.core.truth_(temp__3695__auto____11644))
{var e__11645 = temp__3695__auto____11644;
return cljs.core.second.call(null,e__11645);
} else
{return p1__11639_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__11653 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__11646,seen){
while(true){
var vec__11647__11648 = p__11646;
var f__11649 = cljs.core.nth.call(null,vec__11647__11648,0,null);
var xs__11650 = vec__11647__11648;
var temp__3698__auto____11651 = cljs.core.seq.call(null,xs__11650);
if(cljs.core.truth_(temp__3698__auto____11651))
{var s__11652 = temp__3698__auto____11651;
if(cljs.core.contains_QMARK_.call(null,seen,f__11649))
{{
var G__11654 = cljs.core.rest.call(null,s__11652);
var G__11655 = seen;
p__11646 = G__11654;
seen = G__11655;
continue;
}
} else
{return cljs.core.cons.call(null,f__11649,step.call(null,cljs.core.rest.call(null,s__11652),cljs.core.conj.call(null,seen,f__11649)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});
return step__11653.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__11656 = cljs.core.PersistentVector.fromArray([]);
var s__11657 = s;
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__11657)))
{{
var G__11658 = cljs.core.conj.call(null,ret__11656,cljs.core.first.call(null,s__11657));
var G__11659 = cljs.core.next.call(null,s__11657);
ret__11656 = G__11658;
s__11657 = G__11659;
continue;
}
} else
{return cljs.core.seq.call(null,ret__11656);
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
{if((function (){var or__3548__auto____11660 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3548__auto____11660)
{return or__3548__auto____11660;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__11661 = x.lastIndexOf("/");
if((i__11661 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__11661 + 1));
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
if((function (){var or__3548__auto____11662 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3548__auto____11662)
{return or__3548__auto____11662;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__11663 = x.lastIndexOf("/");
if((i__11663 > -1))
{return cljs.core.subs.call(null,x,2,i__11663);
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
var map__11666 = cljs.core.ObjMap.fromObject([],{});
var ks__11667 = cljs.core.seq.call(null,keys);
var vs__11668 = cljs.core.seq.call(null,vals);
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____11669 = ks__11667;
if(cljs.core.truth_(and__3546__auto____11669))
{return vs__11668;
} else
{return and__3546__auto____11669;
}
})()))
{{
var G__11670 = cljs.core.assoc.call(null,map__11666,cljs.core.first.call(null,ks__11667),cljs.core.first.call(null,vs__11668));
var G__11671 = cljs.core.next.call(null,ks__11667);
var G__11672 = cljs.core.next.call(null,vs__11668);
map__11666 = G__11670;
ks__11667 = G__11671;
vs__11668 = G__11672;
continue;
}
} else
{return map__11666;
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
var G__11675__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__11664_SHARP_,p2__11665_SHARP_){
return max_key.call(null,k,p1__11664_SHARP_,p2__11665_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__11675 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11675__delegate.call(this, k, x, y, more);
};
G__11675.cljs$lang$maxFixedArity = 3;
G__11675.cljs$lang$applyTo = (function (arglist__11676){
var k = cljs.core.first(arglist__11676);
var x = cljs.core.first(cljs.core.next(arglist__11676));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11676)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11676)));
return G__11675__delegate(k, x, y, more);
});
G__11675.cljs$lang$arity$variadic = G__11675__delegate;
return G__11675;
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
var G__11677__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__11673_SHARP_,p2__11674_SHARP_){
return min_key.call(null,k,p1__11673_SHARP_,p2__11674_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__11677 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11677__delegate.call(this, k, x, y, more);
};
G__11677.cljs$lang$maxFixedArity = 3;
G__11677.cljs$lang$applyTo = (function (arglist__11678){
var k = cljs.core.first(arglist__11678);
var x = cljs.core.first(cljs.core.next(arglist__11678));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11678)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11678)));
return G__11677__delegate(k, x, y, more);
});
G__11677.cljs$lang$arity$variadic = G__11677__delegate;
return G__11677;
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
var temp__3698__auto____11679 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____11679))
{var s__11680 = temp__3698__auto____11679;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__11680),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__11680)));
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
var temp__3698__auto____11681 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____11681))
{var s__11682 = temp__3698__auto____11681;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__11682))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__11682),take_while.call(null,pred,cljs.core.rest.call(null,s__11682)));
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
var comp__11683 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__11683.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__11684 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3698__auto____11685 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3698__auto____11685))
{var vec__11686__11687 = temp__3698__auto____11685;
var e__11688 = cljs.core.nth.call(null,vec__11686__11687,0,null);
var s__11689 = vec__11686__11687;
if(cljs.core.truth_(include__11684.call(null,e__11688)))
{return s__11689;
} else
{return cljs.core.next.call(null,s__11689);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__11684,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3698__auto____11690 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3698__auto____11690))
{var vec__11691__11692 = temp__3698__auto____11690;
var e__11693 = cljs.core.nth.call(null,vec__11691__11692,0,null);
var s__11694 = vec__11691__11692;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__11693))?s__11694:cljs.core.next.call(null,s__11694)));
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
var include__11695 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3698__auto____11696 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3698__auto____11696))
{var vec__11697__11698 = temp__3698__auto____11696;
var e__11699 = cljs.core.nth.call(null,vec__11697__11698,0,null);
var s__11700 = vec__11697__11698;
if(cljs.core.truth_(include__11695.call(null,e__11699)))
{return s__11700;
} else
{return cljs.core.next.call(null,s__11700);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__11695,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3698__auto____11701 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3698__auto____11701))
{var vec__11702__11703 = temp__3698__auto____11701;
var e__11704 = cljs.core.nth.call(null,vec__11702__11703,0,null);
var s__11705 = vec__11702__11703;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__11704))?s__11705:cljs.core.next.call(null,s__11705)));
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
var this__11706 = this;
var h__2226__auto____11707 = this__11706.__hash;
if((h__2226__auto____11707 != null))
{return h__2226__auto____11707;
} else
{var h__2226__auto____11708 = cljs.core.hash_coll.call(null,rng);
this__11706.__hash = h__2226__auto____11708;
return h__2226__auto____11708;
}
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__11709 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__11710 = this;
var this$__11711 = this;
return cljs.core.pr_str.call(null,this$__11711);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__11712 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__11713 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__11714 = this;
var comp__11715 = (((this__11714.step > 0))?cljs.core._LT_:cljs.core._GT_);
if(cljs.core.truth_(comp__11715.call(null,this__11714.start,this__11714.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__11716 = this;
if(cljs.core.not.call(null,cljs.core._seq.call(null,rng)))
{return 0;
} else
{return Math['ceil'](((this__11716.end - this__11716.start) / this__11716.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__11717 = this;
return this__11717.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__11718 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__11718.meta,(this__11718.start + this__11718.step),this__11718.end,this__11718.step,null));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__11719 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__11720 = this;
return (new cljs.core.Range(meta,this__11720.start,this__11720.end,this__11720.step,this__11720.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__11721 = this;
return this__11721.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__11722 = this;
if((n < cljs.core._count.call(null,rng)))
{return (this__11722.start + (n * this__11722.step));
} else
{if((function (){var and__3546__auto____11723 = (this__11722.start > this__11722.end);
if(and__3546__auto____11723)
{return (this__11722.step === 0);
} else
{return and__3546__auto____11723;
}
})())
{return this__11722.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__11724 = this;
if((n < cljs.core._count.call(null,rng)))
{return (this__11724.start + (n * this__11724.step));
} else
{if((function (){var and__3546__auto____11725 = (this__11724.start > this__11724.end);
if(and__3546__auto____11725)
{return (this__11724.step === 0);
} else
{return and__3546__auto____11725;
}
})())
{return this__11724.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__11726 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11726.meta);
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
var temp__3698__auto____11727 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____11727))
{var s__11728 = temp__3698__auto____11727;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__11728),take_nth.call(null,n,cljs.core.drop.call(null,n,s__11728)));
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
var temp__3698__auto____11730 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____11730))
{var s__11731 = temp__3698__auto____11730;
var fst__11732 = cljs.core.first.call(null,s__11731);
var fv__11733 = f.call(null,fst__11732);
var run__11734 = cljs.core.cons.call(null,fst__11732,cljs.core.take_while.call(null,(function (p1__11729_SHARP_){
return cljs.core._EQ_.call(null,fv__11733,f.call(null,p1__11729_SHARP_));
}),cljs.core.next.call(null,s__11731)));
return cljs.core.cons.call(null,run__11734,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__11734),s__11731))));
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
var temp__3695__auto____11745 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3695__auto____11745))
{var s__11746 = temp__3695__auto____11745;
return reductions.call(null,f,cljs.core.first.call(null,s__11746),cljs.core.rest.call(null,s__11746));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11747 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____11747))
{var s__11748 = temp__3698__auto____11747;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__11748)),cljs.core.rest.call(null,s__11748));
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
var G__11750 = null;
var G__11750__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__11750__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__11750__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__11750__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__11750__4 = (function() { 
var G__11751__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__11751 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11751__delegate.call(this, x, y, z, args);
};
G__11751.cljs$lang$maxFixedArity = 3;
G__11751.cljs$lang$applyTo = (function (arglist__11752){
var x = cljs.core.first(arglist__11752);
var y = cljs.core.first(cljs.core.next(arglist__11752));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11752)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11752)));
return G__11751__delegate(x, y, z, args);
});
G__11751.cljs$lang$arity$variadic = G__11751__delegate;
return G__11751;
})()
;
G__11750 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11750__0.call(this);
case 1:
return G__11750__1.call(this,x);
case 2:
return G__11750__2.call(this,x,y);
case 3:
return G__11750__3.call(this,x,y,z);
default:
return G__11750__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11750.cljs$lang$maxFixedArity = 3;
G__11750.cljs$lang$applyTo = G__11750__4.cljs$lang$applyTo;
return G__11750;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__11753 = null;
var G__11753__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__11753__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__11753__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__11753__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__11753__4 = (function() { 
var G__11754__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__11754 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11754__delegate.call(this, x, y, z, args);
};
G__11754.cljs$lang$maxFixedArity = 3;
G__11754.cljs$lang$applyTo = (function (arglist__11755){
var x = cljs.core.first(arglist__11755);
var y = cljs.core.first(cljs.core.next(arglist__11755));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11755)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11755)));
return G__11754__delegate(x, y, z, args);
});
G__11754.cljs$lang$arity$variadic = G__11754__delegate;
return G__11754;
})()
;
G__11753 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11753__0.call(this);
case 1:
return G__11753__1.call(this,x);
case 2:
return G__11753__2.call(this,x,y);
case 3:
return G__11753__3.call(this,x,y,z);
default:
return G__11753__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11753.cljs$lang$maxFixedArity = 3;
G__11753.cljs$lang$applyTo = G__11753__4.cljs$lang$applyTo;
return G__11753;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__11756 = null;
var G__11756__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__11756__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__11756__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__11756__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__11756__4 = (function() { 
var G__11757__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__11757 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11757__delegate.call(this, x, y, z, args);
};
G__11757.cljs$lang$maxFixedArity = 3;
G__11757.cljs$lang$applyTo = (function (arglist__11758){
var x = cljs.core.first(arglist__11758);
var y = cljs.core.first(cljs.core.next(arglist__11758));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11758)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11758)));
return G__11757__delegate(x, y, z, args);
});
G__11757.cljs$lang$arity$variadic = G__11757__delegate;
return G__11757;
})()
;
G__11756 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11756__0.call(this);
case 1:
return G__11756__1.call(this,x);
case 2:
return G__11756__2.call(this,x,y);
case 3:
return G__11756__3.call(this,x,y,z);
default:
return G__11756__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11756.cljs$lang$maxFixedArity = 3;
G__11756.cljs$lang$applyTo = G__11756__4.cljs$lang$applyTo;
return G__11756;
})()
});
var juxt__4 = (function() { 
var G__11759__delegate = function (f,g,h,fs){
var fs__11749 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__11760 = null;
var G__11760__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__11735_SHARP_,p2__11736_SHARP_){
return cljs.core.conj.call(null,p1__11735_SHARP_,p2__11736_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__11749);
});
var G__11760__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__11737_SHARP_,p2__11738_SHARP_){
return cljs.core.conj.call(null,p1__11737_SHARP_,p2__11738_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__11749);
});
var G__11760__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__11739_SHARP_,p2__11740_SHARP_){
return cljs.core.conj.call(null,p1__11739_SHARP_,p2__11740_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__11749);
});
var G__11760__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__11741_SHARP_,p2__11742_SHARP_){
return cljs.core.conj.call(null,p1__11741_SHARP_,p2__11742_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__11749);
});
var G__11760__4 = (function() { 
var G__11761__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__11743_SHARP_,p2__11744_SHARP_){
return cljs.core.conj.call(null,p1__11743_SHARP_,cljs.core.apply.call(null,p2__11744_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__11749);
};
var G__11761 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11761__delegate.call(this, x, y, z, args);
};
G__11761.cljs$lang$maxFixedArity = 3;
G__11761.cljs$lang$applyTo = (function (arglist__11762){
var x = cljs.core.first(arglist__11762);
var y = cljs.core.first(cljs.core.next(arglist__11762));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11762)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11762)));
return G__11761__delegate(x, y, z, args);
});
G__11761.cljs$lang$arity$variadic = G__11761__delegate;
return G__11761;
})()
;
G__11760 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11760__0.call(this);
case 1:
return G__11760__1.call(this,x);
case 2:
return G__11760__2.call(this,x,y);
case 3:
return G__11760__3.call(this,x,y,z);
default:
return G__11760__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11760.cljs$lang$maxFixedArity = 3;
G__11760.cljs$lang$applyTo = G__11760__4.cljs$lang$applyTo;
return G__11760;
})()
};
var G__11759 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11759__delegate.call(this, f, g, h, fs);
};
G__11759.cljs$lang$maxFixedArity = 3;
G__11759.cljs$lang$applyTo = (function (arglist__11763){
var f = cljs.core.first(arglist__11763);
var g = cljs.core.first(cljs.core.next(arglist__11763));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11763)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11763)));
return G__11759__delegate(f, g, h, fs);
});
G__11759.cljs$lang$arity$variadic = G__11759__delegate;
return G__11759;
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
var G__11765 = cljs.core.next.call(null,coll);
coll = G__11765;
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
if(cljs.core.truth_((function (){var and__3546__auto____11764 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(and__3546__auto____11764))
{return (n > 0);
} else
{return and__3546__auto____11764;
}
})()))
{{
var G__11766 = (n - 1);
var G__11767 = cljs.core.next.call(null,coll);
n = G__11766;
coll = G__11767;
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
var matches__11768 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__11768),s))
{if((cljs.core.count.call(null,matches__11768) === 1))
{return cljs.core.first.call(null,matches__11768);
} else
{return cljs.core.vec.call(null,matches__11768);
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
var matches__11769 = re.exec(s);
if((matches__11769 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__11769) === 1))
{return cljs.core.first.call(null,matches__11769);
} else
{return cljs.core.vec.call(null,matches__11769);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__11770 = cljs.core.re_find.call(null,re,s);
var match_idx__11771 = s.search(re);
var match_str__11772 = ((cljs.core.coll_QMARK_.call(null,match_data__11770))?cljs.core.first.call(null,match_data__11770):match_data__11770);
var post_match__11773 = cljs.core.subs.call(null,s,(match_idx__11771 + cljs.core.count.call(null,match_str__11772)));
if(cljs.core.truth_(match_data__11770))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__11770,re_seq.call(null,re,post_match__11773));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__11775__11776 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___11777 = cljs.core.nth.call(null,vec__11775__11776,0,null);
var flags__11778 = cljs.core.nth.call(null,vec__11775__11776,1,null);
var pattern__11779 = cljs.core.nth.call(null,vec__11775__11776,2,null);
return (new RegExp(pattern__11779,flags__11778));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__11774_SHARP_){
return print_one.call(null,p1__11774_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____11780 = cljs.core.get.call(null,opts,"\uFDD0'meta");
if(cljs.core.truth_(and__3546__auto____11780))
{var and__3546__auto____11784 = (function (){var G__11781__11782 = obj;
if((G__11781__11782 != null))
{if((function (){var or__3548__auto____11783 = (G__11781__11782.cljs$lang$protocol_mask$partition0$ & 65536);
if(or__3548__auto____11783)
{return or__3548__auto____11783;
} else
{return G__11781__11782.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__11781__11782.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11781__11782);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11781__11782);
}
})();
if(cljs.core.truth_(and__3546__auto____11784))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____11784;
}
} else
{return and__3546__auto____11780;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var and__3546__auto____11785 = (obj != null);
if(and__3546__auto____11785)
{return obj.cljs$lang$type;
} else
{return and__3546__auto____11785;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__11786__11787 = obj;
if((G__11786__11787 != null))
{if((function (){var or__3548__auto____11788 = (G__11786__11787.cljs$lang$protocol_mask$partition0$ & 268435456);
if(or__3548__auto____11788)
{return or__3548__auto____11788;
} else
{return G__11786__11787.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__11786__11787.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__11786__11787);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__11786__11787);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__11789 = cljs.core.first.call(null,objs);
var sb__11790 = (new goog.string.StringBuffer());
var G__11791__11792 = cljs.core.seq.call(null,objs);
if(cljs.core.truth_(G__11791__11792))
{var obj__11793 = cljs.core.first.call(null,G__11791__11792);
var G__11791__11794 = G__11791__11792;
while(true){
if((obj__11793 === first_obj__11789))
{} else
{sb__11790.append(" ");
}
var G__11795__11796 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__11793,opts));
if(cljs.core.truth_(G__11795__11796))
{var string__11797 = cljs.core.first.call(null,G__11795__11796);
var G__11795__11798 = G__11795__11796;
while(true){
sb__11790.append(string__11797);
var temp__3698__auto____11799 = cljs.core.next.call(null,G__11795__11798);
if(cljs.core.truth_(temp__3698__auto____11799))
{var G__11795__11800 = temp__3698__auto____11799;
{
var G__11803 = cljs.core.first.call(null,G__11795__11800);
var G__11804 = G__11795__11800;
string__11797 = G__11803;
G__11795__11798 = G__11804;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____11801 = cljs.core.next.call(null,G__11791__11794);
if(cljs.core.truth_(temp__3698__auto____11801))
{var G__11791__11802 = temp__3698__auto____11801;
{
var G__11805 = cljs.core.first.call(null,G__11791__11802);
var G__11806 = G__11791__11802;
obj__11793 = G__11805;
G__11791__11794 = G__11806;
continue;
}
} else
{}
break;
}
} else
{}
return sb__11790;
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
var sb__11807 = cljs.core.pr_sb.call(null,objs,opts);
sb__11807.append("\n");
return [cljs.core.str(sb__11807)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__11808 = cljs.core.first.call(null,objs);
var G__11809__11810 = cljs.core.seq.call(null,objs);
if(cljs.core.truth_(G__11809__11810))
{var obj__11811 = cljs.core.first.call(null,G__11809__11810);
var G__11809__11812 = G__11809__11810;
while(true){
if((obj__11811 === first_obj__11808))
{} else
{cljs.core.string_print.call(null," ");
}
var G__11813__11814 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__11811,opts));
if(cljs.core.truth_(G__11813__11814))
{var string__11815 = cljs.core.first.call(null,G__11813__11814);
var G__11813__11816 = G__11813__11814;
while(true){
cljs.core.string_print.call(null,string__11815);
var temp__3698__auto____11817 = cljs.core.next.call(null,G__11813__11816);
if(cljs.core.truth_(temp__3698__auto____11817))
{var G__11813__11818 = temp__3698__auto____11817;
{
var G__11821 = cljs.core.first.call(null,G__11813__11818);
var G__11822 = G__11813__11818;
string__11815 = G__11821;
G__11813__11816 = G__11822;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____11819 = cljs.core.next.call(null,G__11809__11812);
if(cljs.core.truth_(temp__3698__auto____11819))
{var G__11809__11820 = temp__3698__auto____11819;
{
var G__11823 = cljs.core.first.call(null,G__11809__11820);
var G__11824 = G__11809__11820;
obj__11811 = G__11823;
G__11809__11812 = G__11824;
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
pr_str.cljs$lang$applyTo = (function (arglist__11825){
var objs = cljs.core.seq(arglist__11825);;
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
prn_str.cljs$lang$applyTo = (function (arglist__11826){
var objs = cljs.core.seq(arglist__11826);;
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
pr.cljs$lang$applyTo = (function (arglist__11827){
var objs = cljs.core.seq(arglist__11827);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__11828){
var objs = cljs.core.seq(arglist__11828);;
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
print_str.cljs$lang$applyTo = (function (arglist__11829){
var objs = cljs.core.seq(arglist__11829);;
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
println.cljs$lang$applyTo = (function (arglist__11830){
var objs = cljs.core.seq(arglist__11830);;
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
println_str.cljs$lang$applyTo = (function (arglist__11831){
var objs = cljs.core.seq(arglist__11831);;
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
prn.cljs$lang$applyTo = (function (arglist__11832){
var objs = cljs.core.seq(arglist__11832);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11833 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11833,"{",", ","}",opts,coll);
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
var pr_pair__11834 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11834,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11835 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11835,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3698__auto____11836 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3698__auto____11836))
{var nspc__11837 = temp__3698__auto____11836;
return [cljs.core.str(nspc__11837),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3698__auto____11838 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3698__auto____11838))
{var nspc__11839 = temp__3698__auto____11838;
return [cljs.core.str(nspc__11839),cljs.core.str("/")].join('');
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
var pr_pair__11840 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11840,"{",", ","}",opts,coll);
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
var pr_pair__11841 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11841,"{",", ","}",opts,coll);
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
var this__11842 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__11843 = this;
var G__11844__11845 = cljs.core.seq.call(null,this__11843.watches);
if(cljs.core.truth_(G__11844__11845))
{var G__11847__11849 = cljs.core.first.call(null,G__11844__11845);
var vec__11848__11850 = G__11847__11849;
var key__11851 = cljs.core.nth.call(null,vec__11848__11850,0,null);
var f__11852 = cljs.core.nth.call(null,vec__11848__11850,1,null);
var G__11844__11853 = G__11844__11845;
var G__11847__11854 = G__11847__11849;
var G__11844__11855 = G__11844__11853;
while(true){
var vec__11856__11857 = G__11847__11854;
var key__11858 = cljs.core.nth.call(null,vec__11856__11857,0,null);
var f__11859 = cljs.core.nth.call(null,vec__11856__11857,1,null);
var G__11844__11860 = G__11844__11855;
f__11859.call(null,key__11858,this$,oldval,newval);
var temp__3698__auto____11861 = cljs.core.next.call(null,G__11844__11860);
if(cljs.core.truth_(temp__3698__auto____11861))
{var G__11844__11862 = temp__3698__auto____11861;
{
var G__11869 = cljs.core.first.call(null,G__11844__11862);
var G__11870 = G__11844__11862;
G__11847__11854 = G__11869;
G__11844__11855 = G__11870;
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
var this__11863 = this;
return this$.watches = cljs.core.assoc.call(null,this__11863.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__11864 = this;
return this$.watches = cljs.core.dissoc.call(null,this__11864.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__11865 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__11865.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__11866 = this;
return this__11866.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__11867 = this;
return this__11867.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__11868 = this;
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
var G__11877__delegate = function (x,p__11871){
var map__11872__11873 = p__11871;
var map__11872__11874 = ((cljs.core.seq_QMARK_.call(null,map__11872__11873))?cljs.core.apply.call(null,cljs.core.hash_map,map__11872__11873):map__11872__11873);
var validator__11875 = cljs.core.get.call(null,map__11872__11874,"\uFDD0'validator");
var meta__11876 = cljs.core.get.call(null,map__11872__11874,"\uFDD0'meta");
return (new cljs.core.Atom(x,meta__11876,validator__11875,null));
};
var G__11877 = function (x,var_args){
var p__11871 = null;
if (goog.isDef(var_args)) {
  p__11871 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11877__delegate.call(this, x, p__11871);
};
G__11877.cljs$lang$maxFixedArity = 1;
G__11877.cljs$lang$applyTo = (function (arglist__11878){
var x = cljs.core.first(arglist__11878);
var p__11871 = cljs.core.rest(arglist__11878);
return G__11877__delegate(x, p__11871);
});
G__11877.cljs$lang$arity$variadic = G__11877__delegate;
return G__11877;
})()
;
atom = function(x,var_args){
var p__11871 = var_args;
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
var temp__3698__auto____11879 = a.validator;
if(cljs.core.truth_(temp__3698__auto____11879))
{var validate__11880 = temp__3698__auto____11879;
if(cljs.core.truth_(validate__11880.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",5905))))].join('')));
}
} else
{}
var old_value__11881 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__11881,new_value);
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
var G__11882__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__11882 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__11882__delegate.call(this, a, f, x, y, z, more);
};
G__11882.cljs$lang$maxFixedArity = 5;
G__11882.cljs$lang$applyTo = (function (arglist__11883){
var a = cljs.core.first(arglist__11883);
var f = cljs.core.first(cljs.core.next(arglist__11883));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11883)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11883))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11883)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11883)))));
return G__11882__delegate(a, f, x, y, z, more);
});
G__11882.cljs$lang$arity$variadic = G__11882__delegate;
return G__11882;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__11884){
var iref = cljs.core.first(arglist__11884);
var f = cljs.core.first(cljs.core.next(arglist__11884));
var args = cljs.core.rest(cljs.core.next(arglist__11884));
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
var this__11885 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__11885.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__11886 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__11886.state,(function (p__11887){
var curr_state__11888 = p__11887;
var curr_state__11889 = ((cljs.core.seq_QMARK_.call(null,curr_state__11888))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__11888):curr_state__11888);
var done__11890 = cljs.core.get.call(null,curr_state__11889,"\uFDD0'done");
if(cljs.core.truth_(done__11890))
{return curr_state__11889;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__11886.f.call(null)});
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
var map__11891__11892 = options;
var map__11891__11893 = ((cljs.core.seq_QMARK_.call(null,map__11891__11892))?cljs.core.apply.call(null,cljs.core.hash_map,map__11891__11892):map__11891__11892);
var keywordize_keys__11894 = cljs.core.get.call(null,map__11891__11893,"\uFDD0'keywordize-keys");
var keyfn__11895 = (cljs.core.truth_(keywordize_keys__11894)?cljs.core.keyword:cljs.core.str);
var f__11901 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__2455__auto____11900 = (function iter__11896(s__11897){
return (new cljs.core.LazySeq(null,false,(function (){
var s__11897__11898 = s__11897;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__11897__11898)))
{var k__11899 = cljs.core.first.call(null,s__11897__11898);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__11895.call(null,k__11899),thisfn.call(null,(x[k__11899]))]),iter__11896.call(null,cljs.core.rest.call(null,s__11897__11898)));
} else
{return null;
}
break;
}
})));
});
return iter__2455__auto____11900.call(null,cljs.core.js_keys.call(null,x));
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
return f__11901.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__11902){
var x = cljs.core.first(arglist__11902);
var options = cljs.core.rest(arglist__11902);
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
var mem__11903 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
return (function() { 
var G__11907__delegate = function (args){
var temp__3695__auto____11904 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__11903),args);
if(cljs.core.truth_(temp__3695__auto____11904))
{var v__11905 = temp__3695__auto____11904;
return v__11905;
} else
{var ret__11906 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__11903,cljs.core.assoc,args,ret__11906);
return ret__11906;
}
};
var G__11907 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11907__delegate.call(this, args);
};
G__11907.cljs$lang$maxFixedArity = 0;
G__11907.cljs$lang$applyTo = (function (arglist__11908){
var args = cljs.core.seq(arglist__11908);;
return G__11907__delegate(args);
});
G__11907.cljs$lang$arity$variadic = G__11907__delegate;
return G__11907;
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
var ret__11909 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__11909))
{{
var G__11910 = ret__11909;
f = G__11910;
continue;
}
} else
{return ret__11909;
}
break;
}
});
var trampoline__2 = (function() { 
var G__11911__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__11911 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11911__delegate.call(this, f, args);
};
G__11911.cljs$lang$maxFixedArity = 1;
G__11911.cljs$lang$applyTo = (function (arglist__11912){
var f = cljs.core.first(arglist__11912);
var args = cljs.core.rest(arglist__11912);
return G__11911__delegate(f, args);
});
G__11911.cljs$lang$arity$variadic = G__11911__delegate;
return G__11911;
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
var k__11913 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__11913,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__11913,cljs.core.PersistentVector.fromArray([])),x));
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
var or__3548__auto____11914 = cljs.core._EQ_.call(null,child,parent);
if(or__3548__auto____11914)
{return or__3548__auto____11914;
} else
{var or__3548__auto____11915 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);
if(or__3548__auto____11915)
{return or__3548__auto____11915;
} else
{var and__3546__auto____11916 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3546__auto____11916)
{var and__3546__auto____11917 = cljs.core.vector_QMARK_.call(null,child);
if(and__3546__auto____11917)
{var and__3546__auto____11918 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3546__auto____11918)
{var ret__11919 = true;
var i__11920 = 0;
while(true){
if((function (){var or__3548__auto____11921 = cljs.core.not.call(null,ret__11919);
if(or__3548__auto____11921)
{return or__3548__auto____11921;
} else
{return (i__11920 === cljs.core.count.call(null,parent));
}
})())
{return ret__11919;
} else
{{
var G__11922 = isa_QMARK_.call(null,h,child.call(null,i__11920),parent.call(null,i__11920));
var G__11923 = (i__11920 + 1);
ret__11919 = G__11922;
i__11920 = G__11923;
continue;
}
}
break;
}
} else
{return and__3546__auto____11918;
}
} else
{return and__3546__auto____11917;
}
} else
{return and__3546__auto____11916;
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
var tp__11927 = "\uFDD0'parents".call(null,h);
var td__11928 = "\uFDD0'descendants".call(null,h);
var ta__11929 = "\uFDD0'ancestors".call(null,h);
var tf__11930 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3548__auto____11931 = ((cljs.core.contains_QMARK_.call(null,tp__11927.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__11929.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__11929.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__11927,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__11930.call(null,"\uFDD0'ancestors".call(null,h),tag,td__11928,parent,ta__11929),"\uFDD0'descendants":tf__11930.call(null,"\uFDD0'descendants".call(null,h),parent,ta__11929,tag,td__11928)});
})());
if(cljs.core.truth_(or__3548__auto____11931))
{return or__3548__auto____11931;
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
var parentMap__11932 = "\uFDD0'parents".call(null,h);
var childsParents__11933 = (cljs.core.truth_(parentMap__11932.call(null,tag))?cljs.core.disj.call(null,parentMap__11932.call(null,tag),parent):cljs.core.set([]));
var newParents__11934 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__11933))?cljs.core.assoc.call(null,parentMap__11932,tag,childsParents__11933):cljs.core.dissoc.call(null,parentMap__11932,tag));
var deriv_seq__11935 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__11924_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__11924_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__11924_SHARP_),cljs.core.second.call(null,p1__11924_SHARP_)));
}),cljs.core.seq.call(null,newParents__11934)));
if(cljs.core.contains_QMARK_.call(null,parentMap__11932.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__11925_SHARP_,p2__11926_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__11925_SHARP_,p2__11926_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__11935));
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
var xprefs__11936 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3548__auto____11938 = (cljs.core.truth_((function (){var and__3546__auto____11937 = xprefs__11936;
if(cljs.core.truth_(and__3546__auto____11937))
{return xprefs__11936.call(null,y);
} else
{return and__3546__auto____11937;
}
})())?true:null);
if(cljs.core.truth_(or__3548__auto____11938))
{return or__3548__auto____11938;
} else
{var or__3548__auto____11940 = (function (){var ps__11939 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__11939) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__11939),prefer_table)))
{} else
{}
{
var G__11943 = cljs.core.rest.call(null,ps__11939);
ps__11939 = G__11943;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3548__auto____11940))
{return or__3548__auto____11940;
} else
{var or__3548__auto____11942 = (function (){var ps__11941 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__11941) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__11941),y,prefer_table)))
{} else
{}
{
var G__11944 = cljs.core.rest.call(null,ps__11941);
ps__11941 = G__11944;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3548__auto____11942))
{return or__3548__auto____11942;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____11945 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3548__auto____11945))
{return or__3548__auto____11945;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__11954 = cljs.core.reduce.call(null,(function (be,p__11946){
var vec__11947__11948 = p__11946;
var k__11949 = cljs.core.nth.call(null,vec__11947__11948,0,null);
var ___11950 = cljs.core.nth.call(null,vec__11947__11948,1,null);
var e__11951 = vec__11947__11948;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__11949))
{var be2__11953 = (cljs.core.truth_((function (){var or__3548__auto____11952 = (be == null);
if(or__3548__auto____11952)
{return or__3548__auto____11952;
} else
{return cljs.core.dominates.call(null,k__11949,cljs.core.first.call(null,be),prefer_table);
}
})())?e__11951:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__11953),k__11949,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__11949),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__11953)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__11953;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__11954))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__11954));
return cljs.core.second.call(null,best_entry__11954);
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
if((function (){var and__3546__auto____11955 = mf;
if(and__3546__auto____11955)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3546__auto____11955;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3548__auto____11956 = (cljs.core._reset[goog.typeOf.call(null,mf)]);
if(or__3548__auto____11956)
{return or__3548__auto____11956;
} else
{var or__3548__auto____11957 = (cljs.core._reset["_"]);
if(or__3548__auto____11957)
{return or__3548__auto____11957;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3546__auto____11958 = mf;
if(and__3546__auto____11958)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3546__auto____11958;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____11959 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);
if(or__3548__auto____11959)
{return or__3548__auto____11959;
} else
{var or__3548__auto____11960 = (cljs.core._add_method["_"]);
if(or__3548__auto____11960)
{return or__3548__auto____11960;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3546__auto____11961 = mf;
if(and__3546__auto____11961)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3546__auto____11961;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____11962 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);
if(or__3548__auto____11962)
{return or__3548__auto____11962;
} else
{var or__3548__auto____11963 = (cljs.core._remove_method["_"]);
if(or__3548__auto____11963)
{return or__3548__auto____11963;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3546__auto____11964 = mf;
if(and__3546__auto____11964)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3546__auto____11964;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____11965 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);
if(or__3548__auto____11965)
{return or__3548__auto____11965;
} else
{var or__3548__auto____11966 = (cljs.core._prefer_method["_"]);
if(or__3548__auto____11966)
{return or__3548__auto____11966;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3546__auto____11967 = mf;
if(and__3546__auto____11967)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3546__auto____11967;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____11968 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);
if(or__3548__auto____11968)
{return or__3548__auto____11968;
} else
{var or__3548__auto____11969 = (cljs.core._get_method["_"]);
if(or__3548__auto____11969)
{return or__3548__auto____11969;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3546__auto____11970 = mf;
if(and__3546__auto____11970)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3546__auto____11970;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3548__auto____11971 = (cljs.core._methods[goog.typeOf.call(null,mf)]);
if(or__3548__auto____11971)
{return or__3548__auto____11971;
} else
{var or__3548__auto____11972 = (cljs.core._methods["_"]);
if(or__3548__auto____11972)
{return or__3548__auto____11972;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3546__auto____11973 = mf;
if(and__3546__auto____11973)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3546__auto____11973;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3548__auto____11974 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);
if(or__3548__auto____11974)
{return or__3548__auto____11974;
} else
{var or__3548__auto____11975 = (cljs.core._prefers["_"]);
if(or__3548__auto____11975)
{return or__3548__auto____11975;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3546__auto____11976 = mf;
if(and__3546__auto____11976)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3546__auto____11976;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3548__auto____11977 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);
if(or__3548__auto____11977)
{return or__3548__auto____11977;
} else
{var or__3548__auto____11978 = (cljs.core._dispatch["_"]);
if(or__3548__auto____11978)
{return or__3548__auto____11978;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__11979 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__11980 = cljs.core._get_method.call(null,mf,dispatch_val__11979);
if(cljs.core.truth_(target_fn__11980))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__11979)].join('')));
}
return cljs.core.apply.call(null,target_fn__11980,args);
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
var this__11981 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__11982 = this;
cljs.core.swap_BANG_.call(null,this__11982.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__11982.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__11982.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__11982.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__11983 = this;
cljs.core.swap_BANG_.call(null,this__11983.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__11983.method_cache,this__11983.method_table,this__11983.cached_hierarchy,this__11983.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__11984 = this;
cljs.core.swap_BANG_.call(null,this__11984.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__11984.method_cache,this__11984.method_table,this__11984.cached_hierarchy,this__11984.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__11985 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__11985.cached_hierarchy),cljs.core.deref.call(null,this__11985.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__11985.method_cache,this__11985.method_table,this__11985.cached_hierarchy,this__11985.hierarchy);
}
var temp__3695__auto____11986 = cljs.core.deref.call(null,this__11985.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3695__auto____11986))
{var target_fn__11987 = temp__3695__auto____11986;
return target_fn__11987;
} else
{var temp__3695__auto____11988 = cljs.core.find_and_cache_best_method.call(null,this__11985.name,dispatch_val,this__11985.hierarchy,this__11985.method_table,this__11985.prefer_table,this__11985.method_cache,this__11985.cached_hierarchy);
if(cljs.core.truth_(temp__3695__auto____11988))
{var target_fn__11989 = temp__3695__auto____11988;
return target_fn__11989;
} else
{return cljs.core.deref.call(null,this__11985.method_table).call(null,this__11985.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__11990 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__11990.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__11990.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__11990.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__11990.method_cache,this__11990.method_table,this__11990.cached_hierarchy,this__11990.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__11991 = this;
return cljs.core.deref.call(null,this__11991.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__11992 = this;
return cljs.core.deref.call(null,this__11992.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__11993 = this;
return cljs.core.do_dispatch.call(null,mf,this__11993.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__11994__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__11994 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11994__delegate.call(this, _, args);
};
G__11994.cljs$lang$maxFixedArity = 1;
G__11994.cljs$lang$applyTo = (function (arglist__11995){
var _ = cljs.core.first(arglist__11995);
var args = cljs.core.rest(arglist__11995);
return G__11994__delegate(_, args);
});
G__11994.cljs$lang$arity$variadic = G__11994__delegate;
return G__11994;
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
