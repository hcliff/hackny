(ns hackny.client.jayq)

(defn scroll-top [$elem & [v]]
  (if v
    (.scrollTop $elem v)
    (. $elem (scrollTop))))

(defn height [$elem & [v]]
  (if v
    (.height $elem v)
    (. $elem (height))))