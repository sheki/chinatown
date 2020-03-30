'use strict';

var React = require("react");

function AddPlayers(Props) {
  return React.createElement("div", {
              className: "f1"
            }, "Add players");
}

var make = AddPlayers;

exports.make = make;
/* react Not a pure module */
