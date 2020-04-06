'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var AdminBoard$ReasonReactExamples = require("./AdminBoard.bs.js");
var GameContainer$ReasonReactExamples = require("./GameContainer.bs.js");

function Main(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var match = url.path;
  if (match) {
    var exit = 0;
    switch (match[0]) {
      case "admin" :
      case "wtf" :
          exit = 2;
          break;
      default:
        
    }
    if (exit === 2 && !match[1]) {
      return React.createElement(AdminBoard$ReasonReactExamples.make, { });
    }
    
  }
  return React.createElement(GameContainer$ReasonReactExamples.make, { });
}

var make = Main;

exports.make = make;
/* react Not a pure module */
