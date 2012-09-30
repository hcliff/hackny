(ns hackny.image-tools
	"Some basic functions for building thumbnails for remote images"
	(:import javax.imageio.ImageIO)
	(:import java.awt.image.BufferedImage)
	(:use 
		[clojure.java.io :only [as-file input-stream output-stream] :as io]
		[hackny.files :only (with-media-root)]))

(defn- make-thumbnail [input new-filename height]
	(let [img (javax.imageio.ImageIO/read input)
    	  imgtype (java.awt.image.BufferedImage/TYPE_INT_ARGB)
    	  ratio (/ (.getHeight img) height)
    	  width (int (/ (.getWidth img) ratio))
    	  simg (java.awt.image.BufferedImage. width height imgtype)
   		  g (.createGraphics simg)]
		(.drawImage g img 0 0 width height nil)
		(.dispose g)
		(javax.imageio.ImageIO/write simg "png" new-filename)
		{:width width :height (int height)}))

(defn make-thumbnail-from-stream [uri file height]
	(with-open [in (io/input-stream uri)
                out (io/output-stream (with-media-root file))]
		(assoc (make-thumbnail in out height) :path file)))
