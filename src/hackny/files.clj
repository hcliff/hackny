(ns hackny.files)

(defn with-media-root 
	"Given a media asset, return the path from the project root"
	[file]
	(str "resources/public/" file))