'use strict';

var React = require("react");

function UserTile$Card(Props) {
  var name = Props.name;
  var playerName = Props.playerName;
  var src = "https://robohash.org/" + (name + ".png?size=200x200");
  var style = {
    backgroundColor: "#000000",
    color: "#FFFFFF"
  };
  if (playerName === name) {
    return React.createElement("div", {
                className: "flex w4 flex-column items-center pa3 ma1",
                style: style
              }, React.createElement("img", {
                    src: src
                  }), React.createElement("h2", {
                    className: "f3"
                  }, name));
  } else {
    return React.createElement("div", {
                className: "flex w4 flex-column items-center pa3 ma1"
              }, React.createElement("img", {
                    src: src
                  }), React.createElement("h2", {
                    className: "f3"
                  }, name));
  }
}

var Card = {
  make: UserTile$Card
};

function UserTile(Props) {
  var state = Props.state;
  var playerName = Props.playerName;
  return React.createElement("div", {
              className: "flex flex items-center pa2"
            }, React.createElement(UserTile$Card, {
                  name: state.players.playerOne,
                  playerName: playerName
                }), React.createElement(UserTile$Card, {
                  name: state.players.playerTwo,
                  playerName: playerName
                }), React.createElement(UserTile$Card, {
                  name: state.players.playerThree,
                  playerName: playerName
                }), React.createElement(UserTile$Card, {
                  name: state.players.playerFour,
                  playerName: playerName
                }));
}

var make = UserTile;

exports.Card = Card;
exports.make = make;
/* react Not a pure module */
