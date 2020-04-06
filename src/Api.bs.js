'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Fetch = require("bs-fetch/src/Fetch.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Response$ReasonReactExamples = require("./Response.bs.js");

var url = "https://chinabackend.onrender.com/";

function registerPlayer(name) {
  var payload = { };
  payload["name"] = name;
  return fetch("https://chinabackend.onrender.com/registerPlayer", Fetch.RequestInit.make(/* Post */2, {
                        "Content-Type": "application/json"
                      }, Caml_option.some(JSON.stringify(payload)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
                  return prim.json();
                })).then((function (j) {
                return Promise.resolve(Response$ReasonReactExamples.Decode.state(j));
              }));
}

function getState(param) {
  return fetch("https://chinabackend.onrender.com/state", Fetch.RequestInit.make(/* Get */0, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
                  return prim.json();
                })).then((function (j) {
                return Promise.resolve(Response$ReasonReactExamples.Decode.state(j));
              }));
}

function setOwnership(player, number) {
  var payload = { };
  payload["Player"] = player;
  payload["TileNumber"] = number;
  return fetch("https://chinabackend.onrender.com/setOwnership", Fetch.RequestInit.make(/* Post */2, {
                        "Content-Type": "application/json"
                      }, Caml_option.some(JSON.stringify(payload)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
                  return prim.json();
                })).then((function (j) {
                return Promise.resolve(Response$ReasonReactExamples.Decode.state(j));
              }));
}

function returnTiles(player, numbers) {
  var payload = { };
  var js_arr = $$Array.of_list(List.map((function (x) {
              return x;
            }), numbers));
  payload["Player"] = player;
  payload["Tiles"] = js_arr;
  return fetch("https://chinabackend.onrender.com/returnTile", Fetch.RequestInit.make(/* Post */2, {
                        "Content-Type": "application/json"
                      }, Caml_option.some(JSON.stringify(payload)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
                  return prim.json();
                })).then((function (j) {
                return Promise.resolve(Response$ReasonReactExamples.Decode.state(j));
              }));
}

function addTileCount(player, shop, count) {
  var payload = { };
  payload["Player"] = player;
  payload["Shop"] = shop;
  payload["Count"] = count;
  return fetch("https://chinabackend.onrender.com/addTileCount", Fetch.RequestInit.make(/* Post */2, {
                        "Content-Type": "application/json"
                      }, Caml_option.some(JSON.stringify(payload)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
                  return prim.json();
                })).then((function (j) {
                return Promise.resolve(Response$ReasonReactExamples.Decode.state(j));
              }));
}

function addMoney(player, m) {
  var payload = { };
  payload["Player"] = player;
  payload["Money"] = m;
  return fetch("https://chinabackend.onrender.com/addMoney", Fetch.RequestInit.make(/* Post */2, {
                        "Content-Type": "application/json"
                      }, Caml_option.some(JSON.stringify(payload)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
                  return prim.json();
                })).then((function (j) {
                return Promise.resolve(Response$ReasonReactExamples.Decode.state(j));
              }));
}

function setTile(s, m) {
  var payload = { };
  payload["Shop"] = s;
  payload["Number"] = m;
  return fetch("https://chinabackend.onrender.com/setTile", Fetch.RequestInit.make(/* Post */2, {
                        "Content-Type": "application/json"
                      }, Caml_option.some(JSON.stringify(payload)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
                  return prim.json();
                })).then((function (j) {
                return Promise.resolve(Response$ReasonReactExamples.Decode.state(j));
              }));
}

function endYear(param) {
  var payload = { };
  return fetch("https://chinabackend.onrender.com/endYear", Fetch.RequestInit.make(/* Post */2, {
                        "Content-Type": "application/json"
                      }, Caml_option.some(JSON.stringify(payload)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
                  return prim.json();
                })).then((function (j) {
                return Promise.resolve(Response$ReasonReactExamples.Decode.state(j));
              }));
}

exports.url = url;
exports.registerPlayer = registerPlayer;
exports.getState = getState;
exports.setOwnership = setOwnership;
exports.returnTiles = returnTiles;
exports.addTileCount = addTileCount;
exports.addMoney = addMoney;
exports.setTile = setTile;
exports.endYear = endYear;
/* Response-ReasonReactExamples Not a pure module */
