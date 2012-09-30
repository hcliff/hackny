goog.provide('hackny.client.dispatch');
goog.require('cljs.core');
/**
* Stores the current reactions.
*/
hackny.client.dispatch.reactions = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
/**
* Cause the specified reactor to be invoked whenever an event that
* satisfies `event-pred` is fired. reactor is a function that accepts
* two arguments: `event-id` and `event-data`.
* 
* Returns the reaction.
* 
* The reactor will continue to be invoked until one of two things
* happens:
* 
* 1. `delete-reaction` is called on this reaction.
* 
* 2. The reaction occurs `max-count` times. If `max-count` is not
* specified, the reaction will continue to be invoked until deleted.
* 
* If `max-count` is specified, `delete-reaction` will be called
* automatically when the reaction has occurred the specified number of
* times.
*/
hackny.client.dispatch.react_to = (function() {
var react_to = null;
var react_to__2 = (function (event_pred,reactor){
return react_to.call(null,null,event_pred,reactor);
});
var react_to__3 = (function (max_count,event_pred,reactor){
var reaction__9604 = cljs.core.ObjMap.fromObject(["\uFDD0'max-count","\uFDD0'event-pred","\uFDD0'reactor"],{"\uFDD0'max-count":max_count,"\uFDD0'event-pred":event_pred,"\uFDD0'reactor":reactor});
cljs.core.swap_BANG_.call(null,hackny.client.dispatch.reactions,cljs.core.assoc,reaction__9604,0);
return reaction__9604;
});
react_to = function(max_count,event_pred,reactor){
switch(arguments.length){
case 2:
return react_to__2.call(this,max_count,event_pred);
case 3:
return react_to__3.call(this,max_count,event_pred,reactor);
}
throw('Invalid arity: ' + arguments.length);
};
react_to.cljs$lang$arity$2 = react_to__2;
react_to.cljs$lang$arity$3 = react_to__3;
return react_to;
})()
;
/**
* Delete a reaction. After calling this function, the specified
* reaction will no longer be invoked.
*/
hackny.client.dispatch.delete_reaction = (function delete_reaction(reaction){
return cljs.core.swap_BANG_.call(null,hackny.client.dispatch.reactions,cljs.core.dissoc,reaction);
});
/**
* Raise an event to any reactors whose event-pred returns true for
* `event-id`. The `event-id` and `event-data`, if specified, are passed to
* the reactor.
*/
hackny.client.dispatch.fire = (function() {
var fire = null;
var fire__1 = (function (event_id){
return fire.call(null,event_id,null);
});
var fire__2 = (function (event_id,event_data){
var matching_reactions__9613 = cljs.core.filter.call(null,(function (p__9605){
var vec__9606__9608 = p__9605;
var map__9607__9609 = cljs.core.nth.call(null,vec__9606__9608,0,null);
var map__9607__9610 = ((cljs.core.seq_QMARK_.call(null,map__9607__9609))?cljs.core.apply.call(null,cljs.core.hash_map,map__9607__9609):map__9607__9609);
var event_pred__9611 = cljs.core.get.call(null,map__9607__9610,"\uFDD0'event-pred");
var run_count__9612 = cljs.core.nth.call(null,vec__9606__9608,1,null);
return event_pred__9611.call(null,event_id);
}),cljs.core.deref.call(null,hackny.client.dispatch.reactions));
var G__9614__9615 = cljs.core.seq.call(null,matching_reactions__9613);
if(cljs.core.truth_(G__9614__9615))
{var G__9617__9619 = cljs.core.first.call(null,G__9614__9615);
var vec__9618__9620 = G__9617__9619;
var reaction__9621 = cljs.core.nth.call(null,vec__9618__9620,0,null);
var run_count__9622 = cljs.core.nth.call(null,vec__9618__9620,1,null);
var G__9614__9623 = G__9614__9615;
var G__9617__9624 = G__9617__9619;
var G__9614__9625 = G__9614__9623;
while(true){
var vec__9626__9627 = G__9617__9624;
var reaction__9628 = cljs.core.nth.call(null,vec__9626__9627,0,null);
var run_count__9629 = cljs.core.nth.call(null,vec__9626__9627,1,null);
var G__9614__9630 = G__9614__9625;
var map__9631__9632 = reaction__9628;
var map__9631__9633 = ((cljs.core.seq_QMARK_.call(null,map__9631__9632))?cljs.core.apply.call(null,cljs.core.hash_map,map__9631__9632):map__9631__9632);
var reactor__9634 = cljs.core.get.call(null,map__9631__9633,"\uFDD0'reactor");
var max_count__9635 = cljs.core.get.call(null,map__9631__9633,"\uFDD0'max-count");
var run_count__9636 = (run_count__9629 + 1);
reactor__9634.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3546__auto____9637 = max_count__9635;
if(cljs.core.truth_(and__3546__auto____9637))
{return (max_count__9635 <= run_count__9636);
} else
{return and__3546__auto____9637;
}
})()))
{hackny.client.dispatch.delete_reaction.call(null,reaction__9628);
} else
{cljs.core.swap_BANG_.call(null,hackny.client.dispatch.reactions,cljs.core.assoc,reaction__9628,run_count__9636);
}
var temp__3698__auto____9638 = cljs.core.next.call(null,G__9614__9630);
if(cljs.core.truth_(temp__3698__auto____9638))
{var G__9614__9639 = temp__3698__auto____9638;
{
var G__9640 = cljs.core.first.call(null,G__9614__9639);
var G__9641 = G__9614__9639;
G__9617__9624 = G__9640;
G__9614__9625 = G__9641;
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
fire = function(event_id,event_data){
switch(arguments.length){
case 1:
return fire__1.call(this,event_id);
case 2:
return fire__2.call(this,event_id,event_data);
}
throw('Invalid arity: ' + arguments.length);
};
fire.cljs$lang$arity$1 = fire__1;
fire.cljs$lang$arity$2 = fire__2;
return fire;
})()
;
