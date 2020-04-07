'use strict';

var React = require("react");
var Shop$ReasonReactExamples = require("./Shop.bs.js");
var Players$ReasonReactExamples = require("./Players.bs.js");

function Tile(Props) {
  var id = Props.id;
  var color = Props.color;
  var shop = Props.shop;
  var pink = Props.pink;
  var bgColor = Players$ReasonReactExamples.toHTMLColor(color);
  var style = {
    backgroundColor: bgColor
  };
  var text = shop >= 12 ? id : Shop$ReasonReactExamples.toEmoji(shop);
  var className = pink ? "ba b1 br4 shadow-2 w3 h3 ma1 flex flex-column justify-center item-center b--hot-pink" : "ba b1 br4 shadow-2 w3 h3 ma1 flex flex-column justify-center item-center";
  return React.createElement("div", {
              className: className,
              style: style
            }, React.createElement("div", {
                  className: "f4 tc"
                }, text));
}

var make = Tile;

exports.make = make;
/* react Not a pure module */
