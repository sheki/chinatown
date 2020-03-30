'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Main$ReasonReactExamples = require("./Main.bs.js");
var ExampleStyles$ReasonReactExamples = require("./ExampleStyles.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles$ReasonReactExamples.style;

function makeShekiContainer(param) {
  var content = document.createElement("div");
  document.body.appendChild(content);
  return content;
}

ReactDom.render(React.createElement(Main$ReasonReactExamples.make, { }), makeShekiContainer(/* () */0));

exports.style = style;
exports.makeShekiContainer = makeShekiContainer;
/* style Not a pure module */
