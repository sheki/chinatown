'use strict';

var React = require("react");

function UserCard(Props) {
  var name = Props.name;
  return React.createElement("div", {
              className: "flex w4 flex-column items-center pa3"
            }, React.createElement("h2", {
                  className: "f3"
                }, name));
}

var make = UserCard;

exports.make = make;
/* react Not a pure module */
