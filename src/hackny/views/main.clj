(ns hackny.views.main
	(:use
		[noir.core :only [defpage defpartial]]
		[noir.request]
		[hiccup.page :only [html5 include-css include-js]]
		[hiccup.element :only [link-to]]
		[clojure.tools.logging :only (info error)]
		[hackny.views.api]
		[hackny.views.pubsubhubbub])
	(:require 
		[noir.response :as response]
		[noir.cljs.core :as cljs]))

(defpartial layout []
	(html5
		[:head
			[:title "What should hackNY call me?"]
			[:link {:href "favicon.ico" :rel "shortcut-icon" :type "image/x-icon"}]
            [:link {:href "less/bootstrap.less" :rel "stylesheet/less" :type "text/css"}]
            (include-js "js/jquery.js" "/js/less.js" "/js/bootstrap/bootstrap-dropdown.js"
            	"/js/bootstrap/bootstrap-modal.js")
		]
		[:body
			[:div#modals]
			[:div.navbar.navbar-fixed-top
              	[:div.navbar-inner
		            [:div.container-fluid
		            	[:a.brand "What should hackNY call me"]
		            	[:div.nav-collapse.pull-right
			                [:ul.nav
			                	[:li.active
				                    [:a#latest {:data-api "/api/1/latest"} "Latest"]]
				                [:li.divider-vertical]
			                	[:li.dropdown
			                    	(link-to {:data-toggle "dropdown" :class "dropdown-toggle"} "#"
			                    		"Top" [:b.caret])
			                    	[:ul#top.dropdown-menu
			                    		[:li [:a {:data-api "/api/1/top/day"} "Today"]]
			                    		[:li [:a {:data-api "/api/1/top/week"} "This week"]]
			                    		[:li [:a {:data-api "/api/1/top/month"} "This month"]]]]
			                    ]]]
                  ]]
            [:div#content]
            (cljs/include-scripts)
		]))

(defpage index [:get "/"] {}
	(layout))

(defpage top [:get "/top"] {}
	(layout))