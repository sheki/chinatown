'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_primitive = require("bs-platform/lib/js/caml_primitive.js");
var Api$ReasonReactExamples = require("./Api.bs.js");
var City$ReasonReactExamples = require("./City.bs.js");
var Year$ReasonReactExamples = require("./Year.bs.js");
var Response$ReasonReactExamples = require("./Response.bs.js");
var UserTile$ReasonReactExamples = require("./UserTile.bs.js");
var HelpBoard$ReasonReactExamples = require("./HelpBoard.bs.js");
var CardPicker$ReasonReactExamples = require("./CardPicker.bs.js");

function Board$TilePane(Props) {
  var state = Props.state;
  var setGameState = Props.setGameState;
  var myTiles = Props.myTiles;
  var num = Props.num;
  var onSubmit = function (x) {
    Api$ReasonReactExamples.returnTiles(num, x).then((function (s) {
            Curry._1(setGameState, s);
            return Promise.resolve(/* () */0);
          }));
    return /* () */0;
  };
  var displayUserPicker = state.phase === "PickTiles";
  if (displayUserPicker) {
    if (myTiles !== undefined) {
      return React.createElement(CardPicker$ReasonReactExamples.make, {
                  numbers: List.sort(Caml_primitive.caml_int_compare, myTiles),
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
  make: Board$TilePane
};

function Board(Props) {
  var state = Props.state;
  var playerName = Props.playerName;
  var setGameState = Props.setGameState;
  var num = Response$ReasonReactExamples.findPlayerNumber(state, playerName);
  var tilesAllocatedToUser = function (state, playerName) {
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
  };
  var myTiles = tilesAllocatedToUser(state, num);
  return React.createElement("div", {
              className: "flex flex-column items-center pa1"
            }, React.createElement(Year$ReasonReactExamples.make, {
                  year: state.year
                }), React.createElement(UserTile$ReasonReactExamples.make, {
                  state: state,
                  playerName: playerName
                }), React.createElement("div", {
                  className: "flex flex-start"
                }, React.createElement(City$ReasonReactExamples.make, {
                      state: state,
                      myTiles: myTiles
                    }), React.createElement(Board$TilePane, {
                      state: state,
                      setGameState: setGameState,
                      myTiles: myTiles,
                      num: num
                    })), React.createElement(HelpBoard$ReasonReactExamples.make, { }));
}

var make = Board;

exports.TilePane = TilePane;
exports.make = make;
/* react Not a pure module */
