'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var Response$ReasonReactExamples = require("./Response.bs.js");
var ShopTileDisplay$ReasonReactExamples = require("./ShopTileDisplay.bs.js");

function UserTile$Card(Props) {
  var state = Props.state;
  var playerNumber = Props.playerNumber;
  var currentPlayerName = Props.currentPlayerName;
  var name = Response$ReasonReactExamples.findPlayerName(state, playerNumber);
  var src = "https://robohash.org/" + (name + ".png?size=200x200&set=set5");
  var style = currentPlayerName === name ? ({
        backgroundColor: "#000000",
        color: "#FFFFFF"
      }) : ({ });
  return React.createElement("div", {
              className: "flex ma1"
            }, React.createElement("div", {
                  className: "flex w4 flex-column items-center pa3 ma1",
                  style: style
                }, React.createElement("img", {
                      src: src
                    }), React.createElement("h2", {
                      className: "f3"
                    }, name)), React.createElement(ShopTileDisplay$ReasonReactExamples.make, {
                  state: state,
                  playerNumber: playerNumber
                }));
}

var Card = {
  make: UserTile$Card
};

var allPlayerNumbers = /* :: */[
  "PlayerOne",
  /* :: */[
    "PlayerTwo",
    /* :: */[
      "PlayerThree",
      /* :: */[
        "PlayerFour",
        /* [] */0
      ]
    ]
  ]
];

function UserTile(Props) {
  var state = Props.state;
  var playerName = Props.playerName;
  return React.createElement("div", {
              className: "flex flex items-center pa2"
            }, $$Array.of_list(List.map((function (x) {
                        return React.createElement(UserTile$Card, {
                                    state: state,
                                    playerNumber: x,
                                    currentPlayerName: playerName,
                                    key: x
                                  });
                      }), allPlayerNumbers)));
}

var make = UserTile;

exports.Card = Card;
exports.allPlayerNumbers = allPlayerNumbers;
exports.make = make;
/* react Not a pure module */
