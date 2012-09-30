goog.provide('hackny.client.main');
goog.require('cljs.core');
goog.require('hackny.client.bootstrap');
goog.require('hackny.client.jayq');
goog.require('hackny.client.partials');
goog.require('jayq.core');
goog.require('hackny.client.dispatch');
hackny.client.main.$window = jayq.core.$.call(null,window);
hackny.client.main.$content = jayq.core.$.call(null,"\uFDD0'#content");
hackny.client.main.entries = cljs.core.atom.call(null,cljs.core.PersistentVector.fromArray([]));
hackny.client.main.last_viewed = cljs.core.atom.call(null,null);
hackny.client.main.api_url = cljs.core.atom.call(null,"");
hackny.client.main.fetch_entries_after = (function fetch_entries_after(){
var temp__3695__auto____116660 = cljs.core.last.call(null,cljs.core.deref.call(null,hackny.client.main.entries));
if(cljs.core.truth_(temp__3695__auto____116660))
{var last_entry__116661 = temp__3695__auto____116660;
return last_entry__116661.call(null,"\uFDD0'_id");
} else
{return null;
}
});
hackny.client.main.fetch_entries = (function fetch_entries(){
return (function (success_callback){
return jayq.core.ajax.call(null,cljs.core.deref.call(null,hackny.client.main.api_url),cljs.core.ObjMap.fromObject(["\uFDD0'data","\uFDD0'success","\uFDD0'dataType"],{"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'after"],{"\uFDD0'after":hackny.client.main.fetch_entries_after.call(null)}),"\uFDD0'success":(function (p1__116659_SHARP_){
var data__116662 = cljs.core.js__GT_clj.call(null,p1__116659_SHARP_,"\uFDD0'keywordize-keys",true);
return success_callback.call(null,data__116662);
}),"\uFDD0'dataType":"json"}));
});
});
hackny.client.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'paginate"]),(function (_){
return hackny.client.main.fetch_entries.call(null,hackny.client.main.api_url).call(null,(function (binding_name__7991__auto__){
var data__116663 = binding_name__7991__auto__;
return hackny.client.dispatch.fire.call(null,"\uFDD0'add-entries",data__116663);
}));
}));
hackny.client.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'new-page"]),(function (_,new_api_url){
cljs.core.reset_BANG_.call(null,hackny.client.main.api_url,new_api_url);
hackny.client.jayq.scroll_top.call(null,hackny.client.main.$content,0);
return hackny.client.main.fetch_entries.call(null).call(null,(function (binding_name__7991__auto__){
var data__116664 = binding_name__7991__auto__;
hackny.client.dispatch.fire.call(null,"\uFDD0'reset-entries");
return hackny.client.dispatch.fire.call(null,"\uFDD0'add-entries",data__116664);
}));
}));
jayq.core.on.call(null,jayq.core.$.call(null,document),"\uFDD0'ready",(function (_){
return hackny.client.dispatch.fire.call(null,"\uFDD0'new-page","/api/1/latest");
}));
hackny.client.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'add-entries"]),(function (_,new_entries){
var G__116669__116670 = cljs.core.seq.call(null,new_entries);
if(cljs.core.truth_(G__116669__116670))
{var entry__116671 = cljs.core.first.call(null,G__116669__116670);
var G__116669__116672 = G__116669__116670;
while(true){
if(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,((function (entry__116671,G__116669__116672){
return (function (p1__116665_SHARP_){
return cljs.core._EQ_.call(null,p1__116665_SHARP_.call(null,"\uFDD0'_id"),entry__116671.call(null,"\uFDD0'_id"));
});})(entry__116671,G__116669__116672))
,cljs.core.deref.call(null,hackny.client.main.entries))))
{cljs.core.swap_BANG_.call(null,hackny.client.main.entries,cljs.core.conj,entry__116671);
var element__116673 = hackny.client.partials.entry_tile.call(null,entry__116671);
jayq.core.css.call(null,jayq.core.$.call(null,element__116673),cljs.core.ObjMap.fromObject(["\uFDD0'width"],{"\uFDD0'width":cljs.core.get_in.call(null,entry__116671,cljs.core.PersistentVector.fromArray(["\uFDD0'thumbnail","\uFDD0'width"]))}));
jayq.core.on.call(null,jayq.core.$.call(null,element__116673),cljs.core.ObjMap.fromObject(["\uFDD0'click","\uFDD0'mouseenter","\uFDD0'mouseleave"],{"\uFDD0'click":((function (entry__116671,G__116669__116672,element__116673){
return (function (p1__116666_SHARP_){
return hackny.client.dispatch.fire.call(null,"\uFDD0'click-tile",p1__116666_SHARP_);
});})(entry__116671,G__116669__116672,element__116673))
,"\uFDD0'mouseenter":((function (entry__116671,G__116669__116672,element__116673){
return (function (p1__116667_SHARP_){
console.log("enter");
return hackny.client.dispatch.fire.call(null,"\uFDD0'mousenter-tile",p1__116667_SHARP_);
});})(entry__116671,G__116669__116672,element__116673))
,"\uFDD0'mouseleave":((function (entry__116671,G__116669__116672,element__116673){
return (function (p1__116668_SHARP_){
return hackny.client.dispatch.fire.call(null,"\uFDD0'mouseleave-tile",p1__116668_SHARP_);
});})(entry__116671,G__116669__116672,element__116673))
}));
jayq.core.append.call(null,hackny.client.main.$content,element__116673);
} else
{}
var temp__3698__auto____116674 = cljs.core.next.call(null,G__116669__116672);
if(cljs.core.truth_(temp__3698__auto____116674))
{var G__116669__116675 = temp__3698__auto____116674;
{
var G__116676 = cljs.core.first.call(null,G__116669__116675);
var G__116677 = G__116669__116675;
entry__116671 = G__116676;
G__116669__116672 = G__116677;
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
}));
hackny.client.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'reset-entries"]),(function (_){
jayq.core.empty.call(null,hackny.client.main.$content);
return cljs.core.reset_BANG_.call(null,hackny.client.main.entries,cljs.core.PersistentVector.fromArray([]));
}));
jayq.core.on.call(null,hackny.client.main.$content,"\uFDD0'scroll",(function (_){
console.log((hackny.client.jayq.scroll_top.call(null,hackny.client.main.$content) + (1.2 * hackny.client.jayq.height.call(null,hackny.client.main.$window))),hackny.client.jayq.height.call(null,hackny.client.main.$content));
if(((100 + hackny.client.jayq.scroll_top.call(null,hackny.client.main.$content)) > hackny.client.jayq.height.call(null,hackny.client.main.$content)))
{return hackny.client.dispatch.fire.call(null,"\uFDD0'paginate");
} else
{return null;
}
}));
jayq.core.on.call(null,jayq.core.$.call(null,"#top a, #latest"),"\uFDD0'click",(function (event){
return hackny.client.dispatch.fire.call(null,"\uFDD0'new-page",jayq.core.$.call(null,event.currentTarget).data("api"));
}));
/**
* Given an entry _id, find it's data in the entries atom
*/
hackny.client.main.lookup_entry = (function lookup_entry(_id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__116678_SHARP_){
return cljs.core._EQ_.call(null,p1__116678_SHARP_.call(null,"\uFDD0'_id"),_id);
}),cljs.core.deref.call(null,hackny.client.main.entries)));
});
hackny.client.main.show_entry = (function show_entry(entry){
jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#modals"),hackny.client.partials.entry_viewer.call(null,entry));
jayq.core.inner.call(null,jayq.core.$.call(null,"#modals .modal-body"),entry.call(null,"\uFDD0'body"));
return hackny.client.bootstrap.modal.call(null,jayq.core.$.call(null,"\uFDD0'#modals"),cljs.core.ObjMap.fromObject([],{}));
});
hackny.client.dispatch.react_to.call(null,cljs.core.set(["\uFDD0'click-tile"]),(function (_,event){
event.preventDefault();
var entry__116679 = hackny.client.main.lookup_entry.call(null,jayq.core.$.call(null,event.currentTarget).data("id"));
return hackny.client.main.show_entry.call(null,entry__116679);
}));
