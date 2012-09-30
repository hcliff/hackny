(ns hackny.tumblr
    (:use 
        [clojure.tools.logging :only (info error)])
    (:require
        [clj-http.client :as client]))

(defn- build-tumblr-url [blog-hostname blog-method]
    (str "http://api.tumblr.com/v2/blog/" blog-hostname "/" blog-method))

(defn produce-posts
    "Produces an array of tumblr posts for a given blog"
    ([blog-hostname]
        (produce-posts blog-hostname nil {}))

    ([blog-hostname query-params]
        (produce-posts blog-hostname nil query-params))

    ([blog-hostname type query-params]
        (produce-posts blog-hostname type query-params 0))

    ([blog-hostname type query-params offset]
        (let [url (build-tumblr-url blog-hostname "posts")
              complete-url (if (nil? type) url (str url "/" type))
              request (client/get url {:as :json
                :query-params {
                    "offset" offset
                    "api_key" (System/getenv "TUMBLR_API_KEY")}})
              posts (get-in request [:body :response :posts])]
            posts)))