'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Api$ReasonReactExamples = require("./Api.bs.js");
var Board$ReasonReactExamples = require("./Board.bs.js");
var Response$ReasonReactExamples = require("./Response.bs.js");
var AddPlayers$ReasonReactExamples = require("./AddPlayers.bs.js");
var WaitingOnOthers$ReasonReactExamples = require("./WaitingOnOthers.bs.js");

function shouldUpdateGameState(s, gs) {
  if (gs) {
    return gs[0].version < s.version;
  } else {
    return true;
  }
}

function gameTime(gs, playerName, setGameState) {
  if (gs.year === 0) {
    return React.createElement(WaitingOnOthers$ReasonReactExamples.make, { });
  } else {
    var match = gs.phase;
    switch (match) {
      case "OpenMarket" :
      case "PickTiles" :
          break;
      default:
        return React.createElement("div", undefined, "WTF");
    }
    return React.createElement(Board$ReasonReactExamples.make, {
                state: gs,
                playerName: playerName,
                setGameState: setGameState
              });
  }
}

function GameContainer(Props) {
  var match = React.useState((function () {
          return "";
        }));
  var setPlayerNumber = match[1];
  var match$1 = React.useState((function () {
          return Belt_Option.getWithDefault(Caml_option.null_to_opt(localStorage.getItem("jwt")), "");
        }));
  var setPlayerName = match$1[1];
  var playerName = match$1[0];
  React.useEffect((function () {
          localStorage.setItem("name", playerName);
          return ;
        }), [playerName]);
  var match$2 = React.useState((function () {
          return /* NoGameState */0;
        }));
  var setGameState = match$2[1];
  var gameState = match$2[0];
  var setGameStateGlobal = function (xs) {
    return Curry._1(setGameState, (function (param) {
                  return /* GameState */[xs];
                }));
  };
  React.useEffect((function () {
          var timerId = setInterval((function (param) {
                  Api$ReasonReactExamples.getState(/* () */0).then((function (s) {
                          if (shouldUpdateGameState(s, gameState)) {
                            Curry._1(setGameState, (function (param) {
                                    return /* GameState */[s];
                                  }));
                          }
                          return Promise.resolve(/* () */0);
                        }));
                  return /* () */0;
                }), 5000);
          return (function (param) {
                    clearInterval(timerId);
                    return /* () */0;
                  });
        }), ([]));
  var onNameSubmit = function (n) {
    Api$ReasonReactExamples.registerPlayer(n).then((function (s) {
            Curry._1(setPlayerName, (function (param) {
                    return n;
                  }));
            Curry._1(setPlayerNumber, (function (param) {
                    return Response$ReasonReactExamples.findPlayerNumber(s, n);
                  }));
            Curry._1(setGameState, (function (param) {
                    return /* GameState */[s];
                  }));
            return Promise.resolve(/* () */0);
          }));
    return /* () */0;
  };
  if (match[0] === "") {
    return React.createElement(AddPlayers$ReasonReactExamples.make, {
                onNameSubmit: onNameSubmit
              });
  } else if (gameState) {
    return gameTime(gameState[0], playerName, setGameStateGlobal);
  } else {
    return React.createElement(AddPlayers$ReasonReactExamples.make, {
                onNameSubmit: onNameSubmit
              });
  }
}

var make = GameContainer;

exports.shouldUpdateGameState = shouldUpdateGameState;
exports.gameTime = gameTime;
exports.make = make;
/* react Not a pure module */
