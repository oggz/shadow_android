(ns test.app
  (:require
    [shadow.react-native :refer (render-root)]
    ["react-native" :as rn]
    ["react" :as react]
    [reagent.core :as r]
    ))

;; must use defonce and must refresh full app so metro can fill these in
;; at live-reload time `require` does not exist and will cause errors
;; must use path relative to :output-dir

(defonce splash-img (js/require "../assets/shadow-cljs.png"))

(def styles
  ^js (-> {:container
           {:flex 1
            :backgroundColor "#fff"
            :alignItems "center"
            :justifyContent "center"}

           :title
           {;; :fontWeight "bold"
            :fontSize 36
            :color "blue"}

           :body
           {:fontSize 24
            :color "blue"
            :textAlign "center"
            :margin 10}

           :buttonContainer
           {:margin 10
            :flexDirection "row"
            :justifyContent "space-between"
            :alignItems "center"}

           :mybutton
           {:margin 10
            :padding 10}}
          (clj->js)
          (rn/StyleSheet.create)))


(defonce app-state (r/atom {:title "Shopping List"
                            :answer ""}))


(defn root []
  [:> rn/View {:style (.-container styles)}
   [:> rn/Text {:style (.-title styles)
                :on-press #(swap! app-state update-in [:answer] inc)}
    "Hello world!\n"]

   [:> rn/TouchableOpacity {:on-press #(swap! app-state assoc-in [:answer] "foobat")}
    [:> rn/Image {:source splash-img :style {:width 150 :height 150}}]]

   [:> rn/Text {:style (.-body styles)}
    "\nThis looks like the beginnings of great app!"]

   [:> rn/Text {:style (.-body styles)}
    "What do you think?"]

   [:> rn/View {:style (.-buttonContainer styles)}
    [:> rn/View {:style (.-mybutton styles)}
     [:> rn/Button {:title "Yes"
                    :on-press #(swap! app-state assoc-in [:answer] "yes")}]]
    [:> rn/View {:style (.-mybutton styles)}
     [:> rn/Button {:title "No"
                    :on-press #(swap! app-state assoc-in [:answer] "no")}]]]

   [:> rn/Text {:style (.-body styles)}
    "Answer: " (:answer @app-state)]])
   
(defn start
  {:dev/after-load true}
  []
  (render-root "shadow_android" (r/as-element [root])))

(defn init []
  (start))
