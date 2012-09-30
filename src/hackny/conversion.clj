(ns hackny.conversion)

; A work around, noirs response/json doesn't support
; custom json emitters, so map out the id before
; converting it to json
(defn mongo->json [object]
	(map #(assoc % :_id (str (% :_id))) object))