goog.provide('clojure.browser.repl');
goog.require('cljs.core');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
clojure.browser.repl.xpc_connection = cljs.core.atom.call(null,null);
clojure.browser.repl.repl_print = (function repl_print(data){
var temp__3695__auto____9927 = cljs.core.deref.call(null,clojure.browser.repl.xpc_connection);
if(cljs.core.truth_(temp__3695__auto____9927))
{var conn__9928 = temp__3695__auto____9927;
return clojure.browser.net.transmit.call(null,conn__9928,"\uFDD0'print",cljs.core.pr_str.call(null,data));
} else
{return null;
}
});
/**
* Process a single block of JavaScript received from the server
*/
clojure.browser.repl.evaluate_javascript = (function evaluate_javascript(conn,block){
var result__9931 = (function (){try{return cljs.core.ObjMap.fromObject(["\uFDD0'status","\uFDD0'value"],{"\uFDD0'status":"\uFDD0'success","\uFDD0'value":[cljs.core.str(eval(block))].join('')});
}catch (e9929){if(cljs.core.instance_QMARK_.call(null,Error,e9929))
{var e__9930 = e9929;
return cljs.core.ObjMap.fromObject(["\uFDD0'status","\uFDD0'value","\uFDD0'stacktrace"],{"\uFDD0'status":"\uFDD0'exception","\uFDD0'value":cljs.core.pr_str.call(null,e__9930),"\uFDD0'stacktrace":(cljs.core.truth_(e__9930.hasOwnProperty("stack"))?e__9930.stack:"No stacktrace available.")});
} else
{if("\uFDD0'else")
{throw e9929;
} else
{return null;
}
}
}})();
return cljs.core.pr_str.call(null,result__9931);
});
clojure.browser.repl.send_result = (function send_result(connection,url,data){
return clojure.browser.net.transmit.call(null,connection,url,"POST",data,null,0);
});
/**
* Send data to be printed in the REPL. If there is an error, try again
* up to 10 times.
*/
clojure.browser.repl.send_print = (function() {
var send_print = null;
var send_print__2 = (function (url,data){
return send_print.call(null,url,data,0);
});
var send_print__3 = (function (url,data,n){
var conn__9932 = clojure.browser.net.xhr_connection.call(null);
clojure.browser.event.listen.call(null,conn__9932,"\uFDD0'error",(function (_){
if((n < 10))
{return send_print.call(null,url,data,(n + 1));
} else
{return console.log([cljs.core.str("Could not send "),cljs.core.str(data),cljs.core.str(" after "),cljs.core.str(n),cljs.core.str(" attempts.")].join(''));
}
}));
return clojure.browser.net.transmit.call(null,conn__9932,url,"POST",data,null,0);
});
send_print = function(url,data,n){
switch(arguments.length){
case 2:
return send_print__2.call(this,url,data);
case 3:
return send_print__3.call(this,url,data,n);
}
throw('Invalid arity: ' + arguments.length);
};
send_print.cljs$lang$arity$2 = send_print__2;
send_print.cljs$lang$arity$3 = send_print__3;
return send_print;
})()
;
clojure.browser.repl.order = cljs.core.atom.call(null,0);
clojure.browser.repl.wrap_message = (function wrap_message(t,data){
return cljs.core.pr_str.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'content","\uFDD0'order"],{"\uFDD0'type":t,"\uFDD0'content":data,"\uFDD0'order":cljs.core.swap_BANG_.call(null,clojure.browser.repl.order,cljs.core.inc)}));
});
/**
* Start the REPL server connection.
*/
clojure.browser.repl.start_evaluator = (function start_evaluator(url){
var temp__3695__auto____9933 = clojure.browser.net.xpc_connection.call(null);
if(cljs.core.truth_(temp__3695__auto____9933))
{var repl_connection__9934 = temp__3695__auto____9933;
var connection__9935 = clojure.browser.net.xhr_connection.call(null);
clojure.browser.event.listen.call(null,connection__9935,"\uFDD0'success",(function (e){
return clojure.browser.net.transmit.call(null,repl_connection__9934,"\uFDD0'evaluate-javascript",e.currentTarget.getResponseText(cljs.core.List.EMPTY));
}));
clojure.browser.net.register_service.call(null,repl_connection__9934,"\uFDD0'send-result",(function (data){
return clojure.browser.repl.send_result.call(null,connection__9935,url,clojure.browser.repl.wrap_message.call(null,"\uFDD0'result",data));
}));
clojure.browser.net.register_service.call(null,repl_connection__9934,"\uFDD0'print",(function (data){
return clojure.browser.repl.send_print.call(null,url,clojure.browser.repl.wrap_message.call(null,"\uFDD0'print",data));
}));
clojure.browser.net.connect.call(null,repl_connection__9934,cljs.core.constantly.call(null,null));
return setTimeout((function (){
return clojure.browser.repl.send_result.call(null,connection__9935,url,clojure.browser.repl.wrap_message.call(null,"\uFDD0'ready","ready"));
}),50);
} else
{return alert("No 'xpc' param provided to child iframe.");
}
});
/**
* Connects to a REPL server from an HTML document. After the
* connection is made, the REPL will evaluate forms in the context of
* the document that called this function.
*/
clojure.browser.repl.connect = (function connect(repl_server_url){
var repl_connection__9936 = clojure.browser.net.xpc_connection.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'peer_uri"],{"\uFDD0'peer_uri":repl_server_url}));
cljs.core.swap_BANG_.call(null,clojure.browser.repl.xpc_connection,cljs.core.constantly.call(null,repl_connection__9936));
clojure.browser.net.register_service.call(null,repl_connection__9936,"\uFDD0'evaluate-javascript",(function (js){
return clojure.browser.net.transmit.call(null,repl_connection__9936,"\uFDD0'send-result",clojure.browser.repl.evaluate_javascript.call(null,repl_connection__9936,js));
}));
return clojure.browser.net.connect.call(null,repl_connection__9936,cljs.core.constantly.call(null,null),(function (iframe){
return iframe.style.display = "none";
}));
});
