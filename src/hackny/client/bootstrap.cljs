(ns hackny.client.bootstrap
	(:use [jayq.util :only [clj->js]]))

(defn modal [element options]
	(.modal element (clj->js options)))