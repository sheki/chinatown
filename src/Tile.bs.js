'use strict';

var React = require("react");
var Shop$ReasonReactExamples = require("./Shop.bs.js");

function toHTMLColor(c) {
  switch (c) {
    case /* Red */0 :
        return "#E7040F";
    case /* Yellow */1 :
        return "#FFD700";
    case /* Green */2 :
        return "#19A974";
    case /* Blue */3 :
        return "#357EDD";
    case /* Empty */4 :
        return "#F4F4F4";
    
  }
}

function Tile(Props) {
  var id = Props.id;
  var color = Props.color;
  var shop = Props.shop;
  var bgColor = toHTMLColor(color);
  var style = {
    backgroundColor: bgColor
  };
  var text = shop >= 10 ? id : Shop$ReasonReactExamples.toEmoji(shop);
  return React.createElement("div", {
              className: "ba b1 br4 shadow-2 h2 w2 ma1 flex flex-column justify-center item-center",
              style: style
            }, React.createElement("div", {
                  className: "f4 tc"
                }, text));
}

var make = Tile;

exports.toHTMLColor = toHTMLColor;
exports.make = make;
/* react Not a pure module */
