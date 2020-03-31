'use strict';

var React = require("react");
var ZoneOne$ReasonReactExamples = require("./ZoneOne.bs.js");
var UserTile$ReasonReactExamples = require("./UserTile.bs.js");

function Board(Props) {
  var state = Props.state;
  var playerName = Props.playerName;
  return React.createElement("div", {
              className: "flex flex-column items-center pa4"
            }, React.createElement(UserTile$ReasonReactExamples.make, {
                  state: state,
                  playerName: playerName
                }), React.createElement(ZoneOne$ReasonReactExamples.make, { }));
}

var make = Board;

exports.make = make;
/* react Not a pure module */
