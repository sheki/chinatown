'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Api$ReasonReactExamples = require("./Api.bs.js");
var City$ReasonReactExamples = require("./City.bs.js");
var Response$ReasonReactExamples = require("./Response.bs.js");
var UserTile$ReasonReactExamples = require("./UserTile.bs.js");
var CardPicker$ReasonReactExamples = require("./CardPicker.bs.js");

function tilesAllocatedToUser(state, playerName) {
  var tiles = state.tiles;
  switch (playerName) {
    case "PlayerFour" :
        return tiles.tplayerFour;
    case "PlayerOne" :
        return tiles.tplayerOne;
    case "PlayerThree" :
        return tiles.tplayerThree;
    case "PlayerTwo" :
        return tiles.tplayerTwo;
    default:
      return ;
  }
}

function Board$TilePane(Props) {
  var state = Props.state;
  var playerName = Props.playerName;
  var setGameState = Props.setGameState;
  var num = Response$ReasonReactExamples.findPlayerNumber(state, playerName);
  var onSubmit = function (x) {
    Api$ReasonReactExamples.returnTiles(num, x).then((function (s) {
            Curry._1(setGameState, s);
            return Promise.resolve(/* () */0);
          }));
    return /* () */0;
  };
  var displayUserPicker = state.phase === "PickTiles";
  if (displayUserPicker) {
    var myTiles = tilesAllocatedToUser(state, num);
    if (myTiles !== undefined) {
      return React.createElement(CardPicker$ReasonReactExamples.make, {
                  numbers: myTiles,
                  onSubmit: onSubmit
                });
    } else {
      return React.createElement("div", {
                  className: "fl w-25 pa1"
                }, "Waiting on others");
    }
  } else {
    return React.createElement("div", undefined);
  }
}

var TilePane = {
  tilesAllocatedToUser: tilesAllocatedToUser,
  make: Board$TilePane
};

function Board(Props) {
  var state = Props.state;
  var playerName = Props.playerName;
  var setGameState = Props.setGameState;
  return React.createElement("div", {
              className: "flex flex-column items-center pa1"
            }, React.createElement(UserTile$ReasonReactExamples.make, {
                  state: state,
                  playerName: playerName
                }), React.createElement("div", {
                  className: "flex flex-start"
                }, React.createElement(City$ReasonReactExamples.make, {
                      state: state
                    }), React.createElement(Board$TilePane, {
                      state: state,
                      playerName: playerName,
                      setGameState: setGameState
                    })));
}

var make = Board;

exports.TilePane = TilePane;
exports.make = make;
/* react Not a pure module */
