(ns test.app
  (:require
   [shadow.react-native :refer (render-root)]
   ["react-native" :as rn]
   ["react" :as react]
   [reagent.core :as r]))

;; must use defonce and must refresh full app so metro can fill these in
;; at live-reload time `require` does not exist and will cause errors
;; must use path relative to :output-dir


;; (.addListener rn/Keyboard "keyboardDidShow" #(js/alert "foobat"))

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
            :margin 20}

           :list
           {:fontSize 24
            :color "white"
            :textAlign "center"}

           :listItem
           {:backgroundColor "rgba(1, 1, 255, 0.5)"
            :textAlign "center"
            :width 300
            :margin 5}

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
                            :answer ""
                            :lists [{:title "Shopping" :list ["foo" "bar" "baz"]}
                                    {:title "Dinner" :list ["steak" "potatoes" "string beans"]}]
                            :testlist ["steak" "potatoes" "string beans"]}))

(defn show-list []
  (fn []
    (let [lists (:lists @app-state)
          testlist (:testlist @app-state)]
      [:> rn/View {:style {:margin 10}}
       ;; (for [{:keys [:title :list]} lists]
       ;;   [:> rn/View {:style (.-container styles)}
       ;;    ])
       (for [item testlist]
         ^{:key item}
         [:> rn/View {:style (.-listItem styles)}
          [:> rn/Text {:style (.-list styles)} item]])])))

(defn input []
  (fn []
    (let [answer (:answer @app-state)]
      [:> rn/View {:style {:flex 1 :width "90%" :alignItems "center"}}
       [:> rn/TextInput {:style {:backgroundColor "black" :color "white" :height 50 :width "90%"}
                         :default-value answer
                         :on-change-text #(swap! app-state assoc :answer %)}]])))

(defn root []
  [:> rn/KeyboardAvoidingView {:behavior "padding"
                               :style    {:flex 1
                                          :backgroundColor "#fff"
                                          :alignItems      "center"
                                          :justifyContent  "center"}}
   [:> rn/View {:style {:height 30}}]
   [:> rn/Text {:style    {:fontSize 36
                           :color    "blue"}
                :on-press #(swap! app-state update-in [:answer] inc)}
    "Hello world!\n"]
   [input]
   ;; [show-list]
   ;; [:> rn/TouchableOpacity {:on-press #(swap! app-state assoc-in [:answer] "foobat")}
   ;;  [:> rn/Image {:source splash-img :style {:width 150 :height 150}}]]
   [:> rn/Text {:style (.-body styles)}
    "\nShould this become a shopping list app?"]
   [:> rn/View {:style (.-buttonContainer styles)}
    [:> rn/View {:style (.-mybutton styles)}
     [:> rn/Button {:title    "Yes"
                    :on-press #(swap! app-state assoc-in [:answer] "yes")}]]
    [:> rn/View {:style (.-mybutton styles)}
     [:> rn/Button {:title    "No"
                    :on-press #(swap! app-state assoc-in [:answer] "no")}]]]
   [:> rn/Text {:style (.-body styles)}
    "Answer: " (:answer @app-state)]
   [input]])

(defn start
  {:dev/after-load true}
  []
  (render-root "shadow_android" (r/as-element [root])))

(defn init []
  (start))
