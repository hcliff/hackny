(ns hackny.views.api
	(:refer-clojure :exclude [sort])
	(:use
		[noir.core :only [defpage]]
		[noir.response :only [json]]
		[clj-time.core :only (days weeks months minus now)]
		[monger.operators :only ($gt $lt)]
		[monger.query :only (with-collection limit fields sort)]
		[monger.result :only [ok?]]
		[hackny.tumblr]
		[hackny.conversion]
		[hackny.image-tools :only (make-thumbnail-from-stream)]
		[monger.conversion]
		[pl.danieljanus.tagsoup :only (parse-string)]

		[clojure.tools.logging :only (info error)]
		)
	(:require 
		[monger.core :as mg]
		[monger.collection :as mc]
		[monger.json]
		[noir.response :as response])
	(:import
		[com.mongodb MongoOptions ServerAddress]
		org.bson.types.ObjectId))

(mg/connect-via-uri! "mongodb://127.0.0.1/hackny")

(def periods {
	:day (days 1)
	:week (weeks 1)
	:month (months 1)
	})

(defn- where-clause [after period order]
	; Top results from a given time period
	; default to today
	(let [after (if after (mc/find-by-id "entries" (ObjectId. after)) nil)
		  period (or (periods period) (periods :day))
		  where {:added {$gt (minus (now) period)}}]
		  (if after
		  	; If we have to paginate return results after
		  	; the last one displayed
		  	(conj where order {$lt (after order)})
		  	where)))

; Abstract, returns a collection with some generic filtering
(defn- feed [after period order]
	(with-collection "entries"
	  	; (find (where-clause after period order))
	  	(sort {order -1})
	  	(limit 50)
	))

; (defpage trending [:get "/api/1/trending"] {offset :offset limit :limit period :period}
; 	(mc/find "entries" {:})
; 	)

(defpage api-top [:get "/api/1/top/:period"] {after :after period :period}
	(let [collection (feed after period :note_count)]
		(response/json (mongo->json collection))))

(defpage api-latest [:get "/api/1/latest"] {after :after}
	(let [collection (feed after :month :added)]
		(response/json (mongo->json collection))))

(defn- has-thumbnails? [post]
	(post :thumbnail))

; Given a tumblr post, return the first image of an acceptable size
(defn- thumbnails [post]
	(let [body (parse-string (post :body))
		  ; get all the images in the post
		  images (filter #(= (first %) :img) (partition 2 (flatten body)))]
		; if there is a valid image then thumbnail it
		(info "images" (flatten body))
		(if-let [image (second (first images))]
			(let[; TODO: build the path properly os.join style
				 ; putting the hack back in hackathon....
				 image-path (str "thumbnails/" (post :id) ".png")
				 thumbnail (make-thumbnail-from-stream (image :src) image-path 180)]
				(assoc post :thumbnail thumbnail))
			post)
		))

(defn- thumbnail? [post]
	(post :thumbnail))


(defpage scrape-feed [:get "/api/1/scrape"] {blog :blog offset :offset}
	(let [posts (produce-posts blog nil {} offset)
		  posts (filter thumbnail? (map thumbnails posts))
		  response (mc/insert-batch "entries" posts)
		  ]
		(if (ok? response)
			(response/json posts)
			(response/status 400 "Db insert error"))
		)
	)