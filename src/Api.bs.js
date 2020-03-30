'use strict';

var Fetch = require("bs-fetch/src/Fetch.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Response$ReasonReactExamples = require("./Response.bs.js");

var url = "http://localhost:8080/";

function registerPlayer(name) {
  var payload = { };
  payload["name"] = name;
  return fetch("http://localhost:8080/registerPlayer", Fetch.RequestInit.make(/* Post */2, {
                        "Content-Type": "application/json"
                      }, Caml_option.some(JSON.stringify(payload)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
                  return prim.json();
                })).then((function (j) {
                return Promise.resolve(Response$ReasonReactExamples.Decode.state(j));
              }));
}

function getState(name) {
  return fetch("http://localhost:8080/state", Fetch.RequestInit.make(/* Get */0, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
                  return prim.json();
                })).then((function (j) {
                return Promise.resolve(Response$ReasonReactExamples.Decode.state(j));
              }));
}

exports.url = url;
exports.registerPlayer = registerPlayer;
exports.getState = getState;
/* No side effect */
