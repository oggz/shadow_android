goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31074){
var map__31075 = p__31074;
var map__31075__$1 = (((((!((map__31075 == null))))?(((((map__31075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31075):map__31075);
var m = map__31075__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31075__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31075__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31078_31288 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31079_31289 = null;
var count__31080_31290 = (0);
var i__31081_31291 = (0);
while(true){
if((i__31081_31291 < count__31080_31290)){
var f_31293 = chunk__31079_31289.cljs$core$IIndexed$_nth$arity$2(null,i__31081_31291);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31293], 0));


var G__31294 = seq__31078_31288;
var G__31295 = chunk__31079_31289;
var G__31296 = count__31080_31290;
var G__31297 = (i__31081_31291 + (1));
seq__31078_31288 = G__31294;
chunk__31079_31289 = G__31295;
count__31080_31290 = G__31296;
i__31081_31291 = G__31297;
continue;
} else {
var temp__5735__auto___31298 = cljs.core.seq(seq__31078_31288);
if(temp__5735__auto___31298){
var seq__31078_31299__$1 = temp__5735__auto___31298;
if(cljs.core.chunked_seq_QMARK_(seq__31078_31299__$1)){
var c__4556__auto___31300 = cljs.core.chunk_first(seq__31078_31299__$1);
var G__31301 = cljs.core.chunk_rest(seq__31078_31299__$1);
var G__31302 = c__4556__auto___31300;
var G__31303 = cljs.core.count(c__4556__auto___31300);
var G__31304 = (0);
seq__31078_31288 = G__31301;
chunk__31079_31289 = G__31302;
count__31080_31290 = G__31303;
i__31081_31291 = G__31304;
continue;
} else {
var f_31305 = cljs.core.first(seq__31078_31299__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31305], 0));


var G__31307 = cljs.core.next(seq__31078_31299__$1);
var G__31308 = null;
var G__31309 = (0);
var G__31310 = (0);
seq__31078_31288 = G__31307;
chunk__31079_31289 = G__31308;
count__31080_31290 = G__31309;
i__31081_31291 = G__31310;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31311 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31311], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31311)))?cljs.core.second(arglists_31311):arglists_31311)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31086_31312 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31087_31313 = null;
var count__31088_31314 = (0);
var i__31089_31315 = (0);
while(true){
if((i__31089_31315 < count__31088_31314)){
var vec__31102_31316 = chunk__31087_31313.cljs$core$IIndexed$_nth$arity$2(null,i__31089_31315);
var name_31317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31102_31316,(0),null);
var map__31105_31318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31102_31316,(1),null);
var map__31105_31319__$1 = (((((!((map__31105_31318 == null))))?(((((map__31105_31318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31105_31318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31105_31318):map__31105_31318);
var doc_31320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31105_31319__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31105_31319__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31317], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31321], 0));

if(cljs.core.truth_(doc_31320)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31320], 0));
} else {
}


var G__31323 = seq__31086_31312;
var G__31324 = chunk__31087_31313;
var G__31325 = count__31088_31314;
var G__31326 = (i__31089_31315 + (1));
seq__31086_31312 = G__31323;
chunk__31087_31313 = G__31324;
count__31088_31314 = G__31325;
i__31089_31315 = G__31326;
continue;
} else {
var temp__5735__auto___31327 = cljs.core.seq(seq__31086_31312);
if(temp__5735__auto___31327){
var seq__31086_31328__$1 = temp__5735__auto___31327;
if(cljs.core.chunked_seq_QMARK_(seq__31086_31328__$1)){
var c__4556__auto___31329 = cljs.core.chunk_first(seq__31086_31328__$1);
var G__31330 = cljs.core.chunk_rest(seq__31086_31328__$1);
var G__31331 = c__4556__auto___31329;
var G__31332 = cljs.core.count(c__4556__auto___31329);
var G__31333 = (0);
seq__31086_31312 = G__31330;
chunk__31087_31313 = G__31331;
count__31088_31314 = G__31332;
i__31089_31315 = G__31333;
continue;
} else {
var vec__31107_31334 = cljs.core.first(seq__31086_31328__$1);
var name_31335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31107_31334,(0),null);
var map__31110_31336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31107_31334,(1),null);
var map__31110_31337__$1 = (((((!((map__31110_31336 == null))))?(((((map__31110_31336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31110_31336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31110_31336):map__31110_31336);
var doc_31338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31110_31337__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31110_31337__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31335], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31339], 0));

if(cljs.core.truth_(doc_31338)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31338], 0));
} else {
}


var G__31340 = cljs.core.next(seq__31086_31328__$1);
var G__31341 = null;
var G__31342 = (0);
var G__31343 = (0);
seq__31086_31312 = G__31340;
chunk__31087_31313 = G__31341;
count__31088_31314 = G__31342;
i__31089_31315 = G__31343;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__31114 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31115 = null;
var count__31116 = (0);
var i__31117 = (0);
while(true){
if((i__31117 < count__31116)){
var role = chunk__31115.cljs$core$IIndexed$_nth$arity$2(null,i__31117);
var temp__5735__auto___31344__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31344__$1)){
var spec_31345 = temp__5735__auto___31344__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31345)], 0));
} else {
}


var G__31346 = seq__31114;
var G__31347 = chunk__31115;
var G__31348 = count__31116;
var G__31349 = (i__31117 + (1));
seq__31114 = G__31346;
chunk__31115 = G__31347;
count__31116 = G__31348;
i__31117 = G__31349;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__31114);
if(temp__5735__auto____$1){
var seq__31114__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31114__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31114__$1);
var G__31350 = cljs.core.chunk_rest(seq__31114__$1);
var G__31351 = c__4556__auto__;
var G__31352 = cljs.core.count(c__4556__auto__);
var G__31353 = (0);
seq__31114 = G__31350;
chunk__31115 = G__31351;
count__31116 = G__31352;
i__31117 = G__31353;
continue;
} else {
var role = cljs.core.first(seq__31114__$1);
var temp__5735__auto___31354__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31354__$2)){
var spec_31355 = temp__5735__auto___31354__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31355)], 0));
} else {
}


var G__31356 = cljs.core.next(seq__31114__$1);
var G__31357 = null;
var G__31358 = (0);
var G__31359 = (0);
seq__31114 = G__31356;
chunk__31115 = G__31357;
count__31116 = G__31358;
i__31117 = G__31359;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31360 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__31361 = cljs.core.ex_cause(t);
via = G__31360;
t = G__31361;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31123 = datafied_throwable;
var map__31123__$1 = (((((!((map__31123 == null))))?(((((map__31123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31123):map__31123);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31123__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31123__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31123__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31124 = cljs.core.last(via);
var map__31124__$1 = (((((!((map__31124 == null))))?(((((map__31124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31124):map__31124);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31124__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31124__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31124__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31125 = data;
var map__31125__$1 = (((((!((map__31125 == null))))?(((((map__31125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31125):map__31125);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31125__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31125__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31125__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31126 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31126__$1 = (((((!((map__31126 == null))))?(((((map__31126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31126):map__31126);
var top_data = map__31126__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31126__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31148 = phase;
var G__31148__$1 = (((G__31148 instanceof cljs.core.Keyword))?G__31148.fqn:null);
switch (G__31148__$1) {
case "read-source":
var map__31149 = data;
var map__31149__$1 = (((((!((map__31149 == null))))?(((((map__31149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31149):map__31149);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31149__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31149__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31158 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31158__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31158,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31158);
var G__31158__$2 = (cljs.core.truth_((function (){var fexpr__31159 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31159.cljs$core$IFn$_invoke$arity$1 ? fexpr__31159.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31159.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31158__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31158__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31158__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31158__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31160 = top_data;
var G__31160__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31160,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31160);
var G__31160__$2 = (cljs.core.truth_((function (){var fexpr__31161 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31161.cljs$core$IFn$_invoke$arity$1 ? fexpr__31161.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31161.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31160__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31160__$1);
var G__31160__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31160__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31160__$2);
var G__31160__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31160__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31160__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31160__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31160__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31173 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31173,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31173,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31173,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31173,(3),null);
var G__31179 = top_data;
var G__31179__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31179,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31179);
var G__31179__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31179__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31179__$1);
var G__31179__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31179__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31179__$2);
var G__31179__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31179__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31179__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31179__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31179__$4;
}

break;
case "execution":
var vec__31195 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31195,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31195,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31195,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31195,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__31122_SHARP_){
var or__4126__auto__ = (p1__31122_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__31208 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31208.cljs$core$IFn$_invoke$arity$1 ? fexpr__31208.cljs$core$IFn$_invoke$arity$1(p1__31122_SHARP_) : fexpr__31208.call(null,p1__31122_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__31209 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31209__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31209,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31209);
var G__31209__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31209__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31209__$1);
var G__31209__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31209__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31209__$2);
var G__31209__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31209__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31209__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31209__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31209__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31148__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31230){
var map__31234 = p__31230;
var map__31234__$1 = (((((!((map__31234 == null))))?(((((map__31234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31234):map__31234);
var triage_data = map__31234__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31234__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31234__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31234__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31234__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31234__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31234__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31234__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31234__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31248 = phase;
var G__31248__$1 = (((G__31248 instanceof cljs.core.Keyword))?G__31248.fqn:null);
switch (G__31248__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__31249 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__31250 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31251 = loc;
var G__31252 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31253_31373 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31254_31374 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31255_31375 = true;
var _STAR_print_fn_STAR__temp_val__31256_31376 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31255_31375);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31256_31376);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31217_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31217_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31254_31374);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31253_31373);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31249,G__31250,G__31251,G__31252) : format.call(null,G__31249,G__31250,G__31251,G__31252));

break;
case "macroexpansion":
var G__31258 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31259 = cause_type;
var G__31260 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31261 = loc;
var G__31262 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31258,G__31259,G__31260,G__31261,G__31262) : format.call(null,G__31258,G__31259,G__31260,G__31261,G__31262));

break;
case "compile-syntax-check":
var G__31263 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31264 = cause_type;
var G__31265 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31266 = loc;
var G__31267 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31263,G__31264,G__31265,G__31266,G__31267) : format.call(null,G__31263,G__31264,G__31265,G__31266,G__31267));

break;
case "compilation":
var G__31268 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31269 = cause_type;
var G__31270 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31271 = loc;
var G__31272 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31268,G__31269,G__31270,G__31271,G__31272) : format.call(null,G__31268,G__31269,G__31270,G__31271,G__31272));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31273 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31274 = symbol;
var G__31275 = loc;
var G__31276 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31278_31377 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31279_31378 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31280_31379 = true;
var _STAR_print_fn_STAR__temp_val__31281_31380 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31280_31379);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31281_31380);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31222_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31222_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31279_31378);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31278_31377);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31273,G__31274,G__31275,G__31276) : format.call(null,G__31273,G__31274,G__31275,G__31276));
} else {
var G__31282 = "Execution error%s at %s(%s).\n%s\n";
var G__31283 = cause_type;
var G__31284 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31285 = loc;
var G__31286 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31282,G__31283,G__31284,G__31285,G__31286) : format.call(null,G__31282,G__31283,G__31284,G__31285,G__31286));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31248__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
