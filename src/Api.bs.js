'use strict';

var Fetch = require("bs-fetch/src/Fetch.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

var url = "http://localhost:8080/";

function registerPlayer(name) {
  var payload = { };
  payload["name"] = name;
  return fetch("http://localhost:8080/registerPlayer", Fetch.RequestInit.make(/* Post */2, {
                      "Content-Type": "application/json"
                    }, Caml_option.some(JSON.stringify(payload)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
                return prim.json();
              }));
}

exports.url = url;
exports.registerPlayer = registerPlayer;
/* No side effect */
