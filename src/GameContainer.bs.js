'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Api$ReasonReactExamples = require("./Api.bs.js");
var ZoneOne$ReasonReactExamples = require("./ZoneOne.bs.js");
var AddPlayers$ReasonReactExamples = require("./AddPlayers.bs.js");

function GameContainer(Props) {
  var match = React.useState((function () {
          return "";
        }));
  var setPlayerNumber = match[1];
  var match$1 = React.useState((function () {
          return "";
        }));
  var setPlayerName = match$1[1];
  var playerName = match$1[0];
  var onNameSubmit = function (n) {
    Api$ReasonReactExamples.registerPlayer(n).then((function (param) {
            Curry._1(setPlayerName, (function (param) {
                    return playerName;
                  }));
            Curry._1(setPlayerNumber, (function (param) {
                    return "1";
                  }));
            return Promise.resolve(/* () */0);
          }));
    return /* () */0;
  };
  if (match[0] === "") {
    return React.createElement(AddPlayers$ReasonReactExamples.make, {
                onNameSubmit: onNameSubmit
              });
  } else {
    return React.createElement(ZoneOne$ReasonReactExamples.make, { });
  }
}

var make = GameContainer;

exports.make = make;
/* react Not a pure module */
