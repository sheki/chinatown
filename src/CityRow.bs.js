'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Tile$ReasonReactExamples = require("./Tile.bs.js");
var Players$ReasonReactExamples = require("./Players.bs.js");
var BlankTile$ReasonReactExamples = require("./BlankTile.bs.js");

function CityRow(Props) {
  var numbers = Props.numbers;
  var state = Props.state;
  var myTiles = Props.myTiles;
  var ren = function (y) {
    if (y) {
      var x = y[0];
      var o = Caml_array.caml_array_get(state.ownership, x - 1 | 0);
      var color = Players$ReasonReactExamples.colorFromPlayer(o.player);
      var shop = o.shop;
      var pink = myTiles !== undefined ? List.exists((function (y) {
                return x === y;
              }), myTiles) : false;
      return React.createElement(Tile$ReasonReactExamples.make, {
                  id: String(x),
                  color: color,
                  shop: shop,
                  pink: pink,
                  key: String(x)
                });
    } else {
      return React.createElement(BlankTile$ReasonReactExamples.make, { });
    }
  };
  return React.createElement("div", {
              className: "flex ma2"
            }, $$Array.of_list(List.map(ren, numbers)));
}

var make = CityRow;

exports.make = make;
/* react Not a pure module */
