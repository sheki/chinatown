'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Shop$ReasonReactExamples = require("./Shop.bs.js");
var Response$ReasonReactExamples = require("./Response.bs.js");

function shopTileString(k, v) {
  return Shop$ReasonReactExamples.toEmoji(k) + (" x " + String(v));
}

function userTiles(shopTiles, playerNumber) {
  var c = Curry._2(Response$ReasonReactExamples.StringMap.find, playerNumber, shopTiles);
  return Curry._3(Response$ReasonReactExamples.ShopMap.fold, (function (k, v, l) {
                if (v === 0) {
                  return l;
                } else {
                  return /* :: */[
                          shopTileString(k, v),
                          l
                        ];
                }
              }), c, /* [] */0);
}

function ShopTileDisplay(Props) {
  var state = Props.state;
  var playerNumber = Props.playerNumber;
  var tiles = userTiles(state.shopTiles, playerNumber);
  var what = $$Array.of_list(List.map((function (x) {
              return React.createElement("div", {
                          key: x,
                          className: "ma1 f2"
                        }, x);
            }), tiles));
  return React.createElement("div", {
              className: "flex flex-column"
            }, what);
}

var make = ShopTileDisplay;

exports.shopTileString = shopTileString;
exports.userTiles = userTiles;
exports.make = make;
/* react Not a pure module */
