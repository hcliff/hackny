(ns hackny.client.main
	(:use 
		[jayq.core :only ($ on ajax append empty attr css inner)]
		[hackny.client.partials :only (entry-tile entry-viewer)]
		[hackny.client.bootstrap :only (modal)]
		[hackny.client.jayq :only (scroll-top height)])
	(:require [hackny.client.dispatch :as dispatch])
	(:use-macros [async.macros :only [async let-async]]))

(def $window ($ js/window))
(def $content ($ :#content))
; ; Contains all the entries displayed on the page
(def entries (atom []))
(def last-viewed (atom nil))
; Contains the url string for the api request
(def api-url (atom ""))

(defn- fetch-entries-after []
	(if-let [last-entry (last @entries)]
		(last-entry :_id)
		nil))

(defn fetch-entries []
	(async [success-callback]
		(ajax @api-url {
			:data {
				:after (fetch-entries-after)
			}
			:success #(let [data (js->clj % :keywordize-keys true)] (success-callback data))
			:dataType "json"
			})
		))

(dispatch/react-to #{:paginate} (fn [_]
	; Remove the paginate function to stop subsequent
	; pagination events being called
	; TODO: THROTTLE THIS POS
	; do not use a lock, it's not idiomatic, release the react-to
	; and re-enable after the event
	(let-async [data (fetch-entries api-url)]
		(dispatch/fire :add-entries data))))

(dispatch/react-to #{:new-page} (fn [_ new-api-url]
	(reset! api-url new-api-url)
	(scroll-top $content 0)
	(let-async [data (fetch-entries)]
		(dispatch/fire :reset-entries)
		(dispatch/fire :add-entries data))))

(on ($ js/document) :ready (fn [_]
	(dispatch/fire :new-page "/api/1/latest")))

(dispatch/react-to #{:add-entries} (fn [_ new-entries]
	; TODO: :when syntax
	(doseq [entry new-entries]
		; Only add elements new to us
		(when (empty? (filter #(= (% :_id) (entry :_id)) @entries))
			(swap! entries conj entry)
			; Generate the element for this entry
			(let [element (entry-tile entry)]
				; Bind to it's dom events
				(css ($ element) {:width (get-in entry [:thumbnail :width])})
				(on ($ element) {
					:click #(dispatch/fire :click-tile %)
					:mouseenter #(do
						(.log js/console "enter")
						(dispatch/fire :mousenter-tile %))
					:mouseleave #(dispatch/fire :mouseleave-tile %)
					})
				; Insert it into the document
				(append $content element))
			))))

(dispatch/react-to #{:reset-entries} (fn [_]
	(empty $content)
	(reset! entries [])))

(on $content :scroll (fn [_]
	; If the bottom of the page is suitable close
	; trigger a fresh content load
	(.log js/console (+ (scroll-top $content) (* 1.2 (height $window))) (height $content))

	; Demo day hack
	(if (> (+ 100 (scroll-top $content))
			(height $content))
		(dispatch/fire :paginate))))

(on ($ "#top a, #latest") :click (fn [event]
	(dispatch/fire :new-page (.data ($ (.-currentTarget event)) "api"))
	))

; (dispatch/react-to #{:mouseenter-tile} (fn [_ event]
; 	(.log js/console "mouseover tile")
; 	(js* "debugger;")
; 	(let [image-element ($ :image entry-tile)]
; 		(attr image-element :html (entry :body)))))

(defn- lookup-entry 
	"Given an entry _id, find it's data in the entries atom"
	[_id]
	(first (filter #(= (% :_id) _id) @entries)))

(defn- show-entry [entry]
	(inner ( $ :#modals) (entry-viewer entry))
	(inner ($ "#modals .modal-body") (entry :body))
	(modal ($ :#modals) {}))

(dispatch/react-to #{:click-tile} (fn [_ event]
	(.preventDefault event)
	; Find which element was clicked, then display its content
	; TODO: do this via the router
	(let [entry (lookup-entry (.data ($ (.-currentTarget event)) "id"))]
		(show-entry entry))))