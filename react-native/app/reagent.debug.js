goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__27016__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__27016 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27020__i = 0, G__27020__a = new Array(arguments.length -  0);
while (G__27020__i < G__27020__a.length) {G__27020__a[G__27020__i] = arguments[G__27020__i + 0]; ++G__27020__i;}
  args = new cljs.core.IndexedSeq(G__27020__a,0,null);
} 
return G__27016__delegate.call(this,args);};
G__27016.cljs$lang$maxFixedArity = 0;
G__27016.cljs$lang$applyTo = (function (arglist__27021){
var args = cljs.core.seq(arglist__27021);
return G__27016__delegate(args);
});
G__27016.cljs$core$IFn$_invoke$arity$variadic = G__27016__delegate;
return G__27016;
})()
);

(o.error = (function() { 
var G__27022__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__27022 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27023__i = 0, G__27023__a = new Array(arguments.length -  0);
while (G__27023__i < G__27023__a.length) {G__27023__a[G__27023__i] = arguments[G__27023__i + 0]; ++G__27023__i;}
  args = new cljs.core.IndexedSeq(G__27023__a,0,null);
} 
return G__27022__delegate.call(this,args);};
G__27022.cljs$lang$maxFixedArity = 0;
G__27022.cljs$lang$applyTo = (function (arglist__27024){
var args = cljs.core.seq(arglist__27024);
return G__27022__delegate(args);
});
G__27022.cljs$core$IFn$_invoke$arity$variadic = G__27022__delegate;
return G__27022;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
