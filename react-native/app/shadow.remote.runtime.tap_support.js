goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__29015,p__29016){
var map__29017 = p__29015;
var map__29017__$1 = (((((!((map__29017 == null))))?(((((map__29017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29017):map__29017);
var svc = map__29017__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29017__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29017__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29017__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__29018 = p__29016;
var map__29018__$1 = (((((!((map__29018 == null))))?(((((map__29018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29018):map__29018);
var msg = map__29018__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29018__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29018__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29018__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29018__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__29063,p__29064){
var map__29065 = p__29063;
var map__29065__$1 = (((((!((map__29065 == null))))?(((((map__29065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29065):map__29065);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29065__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__29066 = p__29064;
var map__29066__$1 = (((((!((map__29066 == null))))?(((((map__29066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29066):map__29066);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29066__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__29081,p__29082){
var map__29084 = p__29081;
var map__29084__$1 = (((((!((map__29084 == null))))?(((((map__29084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29084):map__29084);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29084__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29084__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__29086 = p__29082;
var map__29086__$1 = (((((!((map__29086 == null))))?(((((map__29086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29086):map__29086);
var msg = map__29086__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29086__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__29095,tid){
var map__29097 = p__29095;
var map__29097__$1 = (((((!((map__29097 == null))))?(((((map__29097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29097):map__29097);
var svc = map__29097__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29097__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__29110 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__29111 = null;
var count__29112 = (0);
var i__29113 = (0);
while(true){
if((i__29113 < count__29112)){
var vec__29127 = chunk__29111.cljs$core$IIndexed$_nth$arity$2(null,i__29113);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29127,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29127,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__29165 = seq__29110;
var G__29166 = chunk__29111;
var G__29167 = count__29112;
var G__29168 = (i__29113 + (1));
seq__29110 = G__29165;
chunk__29111 = G__29166;
count__29112 = G__29167;
i__29113 = G__29168;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29110);
if(temp__5735__auto__){
var seq__29110__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29110__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29110__$1);
var G__29170 = cljs.core.chunk_rest(seq__29110__$1);
var G__29171 = c__4556__auto__;
var G__29172 = cljs.core.count(c__4556__auto__);
var G__29173 = (0);
seq__29110 = G__29170;
chunk__29111 = G__29171;
count__29112 = G__29172;
i__29113 = G__29173;
continue;
} else {
var vec__29132 = cljs.core.first(seq__29110__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29132,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29132,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__29178 = cljs.core.next(seq__29110__$1);
var G__29179 = null;
var G__29180 = (0);
var G__29181 = (0);
seq__29110 = G__29178;
chunk__29111 = G__29179;
count__29112 = G__29180;
i__29113 = G__29181;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__29106_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__29106_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__29107_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__29107_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__29108_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__29108_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__29109_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__29109_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__29139){
var map__29140 = p__29139;
var map__29140__$1 = (((((!((map__29140 == null))))?(((((map__29140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29140):map__29140);
var svc = map__29140__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29140__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29140__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
