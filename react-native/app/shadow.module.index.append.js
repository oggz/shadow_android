
shadow.cljs.devtools.client.env.module_loaded('index');

try { test.app.init(); } catch (e) { console.error("An error occurred when calling (test.app/init)"); throw(e); }