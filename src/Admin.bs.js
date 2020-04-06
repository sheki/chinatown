'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var AdminBoard$ReasonReactExamples = require("./AdminBoard.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

function makeShekiContainer(param) {
  var content = document.createElement("div");
  document.body.appendChild(content);
  return content;
}

ReactDom.render(React.createElement(AdminBoard$ReasonReactExamples.make, { }), makeShekiContainer(/* () */0));

exports.style = style;
exports.makeShekiContainer = makeShekiContainer;
/* style Not a pure module */
