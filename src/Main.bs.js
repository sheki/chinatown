'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var GameContainer$ReasonReactExamples = require("./GameContainer.bs.js");

function Main(Props) {
  ReasonReactRouter.useUrl(undefined, /* () */0);
  return React.createElement(GameContainer$ReasonReactExamples.make, { });
}

var make = Main;

exports.make = make;
/* react Not a pure module */
