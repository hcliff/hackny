(ns hackny.client.partials
	(:require [crate.core :as crate])
	(:use 
		[crate.element :only (image link-to)]
		[crate.core :only (html)])
	(:use-macros [crate.def-macros :only [defpartial defelem]]))



(defpartial entry-tile [entry]
	[:div {:data-id (entry :_id)}
		(link-to (entry :post_url)
			[:img {:src (get-in entry [:thumbnail :path])
				   :width (get-in entry [:thumbnail :width])
				   :height (get-in entry [:thumbnail :height])}]
			[:p (entry :title)]
			)])

(defpartial entry-viewer [entry]
	[:div#viewer.modal {:data-backdrop true}
		[:div.modal-header
			[:h3 (entry :title)]
			[:button.close {:type "button" :data-dismiss "modal"}]]
		[:div.modal-body ""]])