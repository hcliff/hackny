(ns hackny.views.pubsubhubbub
	(:use 
		[noir.core :only [defpage url-for]]
		[noir.request]
		[clojure.tools.logging :only (info error)])
	(:require
		[clj-http.client :as client]
		[noir.response :as response]))

; (defpage pubsubhubbub-callback [:get "/pubsubhubbub/callback"] {}
; 	"hello")

; Verify the pubsubhubbub callback
(defpage pubsubhubbub-callback-get [:get "/pubsubhubbub/callback"] {}
	; Almost definately a better way to do this
	(let [challenge (get-in (ring-request) [:params "hub.challenge"])]
		; If given a valid challenge string then return it
		(if-not (nil? challenge)
			challenge
			(response/status 400 ""))))

; Receive a pubsubhubbub update
(defpage pubsubhubbub-callback-post [:post "/pubsubhubbub/callback"] {}
	; on callback add the post to the queue for the next 24 hours
	; track 
	(do
		(info "posted!")
		(info (ring-request))
		(response/status 200 "fucking A")
	))

; (defpage subscribe [:get "/subscribe"] {topic :topic}
; 	(let [callback-url (str "http://3rhr.localtunnel.com" (url-for callback))
; 		 ;  posted (client/post "http://tumblr.superfeedr.com"
; 			; {:form-params
; 			; 	{(keyword "hub.mode") "subscribe"
; 			; 	 (keyword "hub.verify") "async"
; 			; 	 (keyword "hub.callback") (str "http://3rhr.localtunnel.com/" (url-for callback))
; 			; 	 (keyword "hub.topic") topic
; 			; 	 }})
; 		  ]
; 		(response/status 200 callback-url)))