'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var Tile$ReasonReactExamples = require("./Tile.bs.js");
var BlankTile$ReasonReactExamples = require("./BlankTile.bs.js");

function CityRow(Props) {
  var numbers = Props.numbers;
  var ren = function (y) {
    if (y) {
      var x = y[0];
      return React.createElement(Tile$ReasonReactExamples.make, {
                  id: String(x),
                  color: /* Empty */4,
                  shop: /* None */12,
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
