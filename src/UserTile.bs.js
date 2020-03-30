'use strict';

var React = require("react");

function UserTile$Card(Props) {
  var name = Props.name;
  var src = "https://robohash.org/" + (name + ".png?size=200x200");
  return React.createElement("div", {
              className: "flex w4 flex-column items-center pa3 ma1"
            }, React.createElement("img", {
                  src: src
                }), React.createElement("h2", {
                  className: "f3"
                }, name));
}

var Card = {
  make: UserTile$Card
};

function UserTile(Props) {
  var state = Props.state;
  return React.createElement("div", {
              className: "flex flex items-center pa2"
            }, React.createElement(UserTile$Card, {
                  name: state.players.playerOne
                }), React.createElement(UserTile$Card, {
                  name: state.players.playerTwo
                }), React.createElement(UserTile$Card, {
                  name: state.players.playerThree
                }), React.createElement(UserTile$Card, {
                  name: state.players.playerFour
                }));
}

var make = UserTile;

exports.Card = Card;
exports.make = make;
/* react Not a pure module */
