'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var CardPicker$ReasonReactExamples = require("./CardPicker.bs.js");
var GameContainer$ReasonReactExamples = require("./GameContainer.bs.js");

function Main(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var match = url.path;
  if (match && match[0] === "debug" && !match[1]) {
    return React.createElement(CardPicker$ReasonReactExamples.make, { });
  }
  return React.createElement(GameContainer$ReasonReactExamples.make, { });
}

var make = Main;

exports.make = make;
/* react Not a pure module */
