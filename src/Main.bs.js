'use strict';

var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var ZoneOne$ReasonReactExamples = require("./ZoneOne.bs.js");
var AddPlayers$ReasonReactExamples = require("./AddPlayers.bs.js");

function Main(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  alert($$String.concat(",", url.path));
  var match = url.path;
  if (match && match[0] === "add") {
    var match$1 = match[1];
    if (match$1) {
      if (!match$1[1]) {
        return React.createElement(AddPlayers$ReasonReactExamples.make, { });
      }
      
    } else {
      return React.createElement(AddPlayers$ReasonReactExamples.make, { });
    }
  }
  return React.createElement(ZoneOne$ReasonReactExamples.make, { });
}

var make = Main;

exports.make = make;
/* react Not a pure module */
