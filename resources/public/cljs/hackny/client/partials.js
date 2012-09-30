goog.provide('hackny.client.partials');
goog.require('cljs.core');
goog.require('crate.core');
goog.require('crate.element');
goog.require('crate.core');
var group__7534__auto____32716 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
hackny.client.partials.entry_tile = (function entry_tile(entry){
var elem__7535__auto____32717 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'data-id"],{"\uFDD0'data-id":entry.call(null,"\uFDD0'_id")}),crate.element.link_to.call(null,entry.call(null,"\uFDD0'post_url"),cljs.core.PersistentVector.fromArray(["\uFDD0'img",cljs.core.ObjMap.fromObject(["\uFDD0'src","\uFDD0'width","\uFDD0'height"],{"\uFDD0'src":cljs.core.get_in.call(null,entry,cljs.core.PersistentVector.fromArray(["\uFDD0'thumbnail","\uFDD0'path"])),"\uFDD0'width":cljs.core.get_in.call(null,entry,cljs.core.PersistentVector.fromArray(["\uFDD0'thumbnail","\uFDD0'width"])),"\uFDD0'height":cljs.core.get_in.call(null,entry,cljs.core.PersistentVector.fromArray(["\uFDD0'thumbnail","\uFDD0'height"]))})]),cljs.core.PersistentVector.fromArray(["\uFDD0'p",entry.call(null,"\uFDD0'title")]))]));
elem__7535__auto____32717.setAttribute("crateGroup",group__7534__auto____32716);
return elem__7535__auto____32717;
});
hackny.client.partials.entry_tile.prototype._crateGroup = group__7534__auto____32716;
var group__7534__auto____32718 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
hackny.client.partials.entry_viewer = (function entry_viewer(entry){
var elem__7535__auto____32719 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div#viewer.modal",cljs.core.ObjMap.fromObject(["\uFDD0'data-backdrop"],{"\uFDD0'data-backdrop":true}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.modal-header",cljs.core.PersistentVector.fromArray(["\uFDD0'h3",entry.call(null,"\uFDD0'title")]),cljs.core.PersistentVector.fromArray(["\uFDD0'button.close",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data-dismiss"],{"\uFDD0'type":"button","\uFDD0'data-dismiss":"modal"})])]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.modal-body",""])]));
elem__7535__auto____32719.setAttribute("crateGroup",group__7534__auto____32718);
return elem__7535__auto____32719;
});
hackny.client.partials.entry_viewer.prototype._crateGroup = group__7534__auto____32718;
