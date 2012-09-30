(defproject hackny "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://exampl.com/FIXME"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [jayq "0.1.0-alpha4"]
                 [crate "0.2.0-alpha2"]
                 [noir "1.3.0-beta2"]
                 [org.clojure/google-closure-library "0.0-1376"]
                 [com.taoensso/timbre "0.8.0"]
                 [org.clojure/clojurescript "0.0-1211"]
                 [watchtower "0.1.1"]
                 [colorize "0.1.1"]
                 [clj-http "0.5.5"]
                 [org.clojure/tools.logging "0.2.3"]
                 [com.novemberain/monger "1.1.2"]
                 [org.clojure/data.json "0.1.2"]
                 [joda-time "1.6"]
                 [clj-time "0.4.4"]
                 [org.clojure/data.json "0.1.3"]
                 [clj-tagsoup "0.3.0"]
                 [org.clojure/math.numeric-tower "0.0.1"]]
  :plugins [[lein-git-deps "0.0.1-SNAPSHOT"]
            [lein-localrepo "0.4.0"]]
  :git-dependencies [["git://github.com/pandeiro/noir-cljs.git"]]
  :source-paths ["src" ".lein-git-deps/async-kit/src" ".lein-git-deps/noir-cljs/src"]
  :cljsbuild {:builds [{}]}
  :repositories {"goog" "http://repository.apache.org/content/repositories/releases/"}
  :main ^{:skip-aot true} hackny.server)
