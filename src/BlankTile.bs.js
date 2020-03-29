'use strict';

var React = require("react");

function BlankTile(Props) {
  var style = {
    backgroundColor: "#CCCCCC"
  };
  return React.createElement("div", {
              className: "w3 ma2 ba b1 br4 shadow-2 h3 flex flex-column justify-center item-center",
              style: style
            }, React.createElement("div", {
                  className: "f1 tc"
                }));
}

var make = BlankTile;

exports.make = make;
/* react Not a pure module */
