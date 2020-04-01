'use strict';

var React = require("react");
var ZoneOne$ReasonReactExamples = require("./ZoneOne.bs.js");
var ZoneSix$ReasonReactExamples = require("./ZoneSix.bs.js");
var ZoneTwo$ReasonReactExamples = require("./ZoneTwo.bs.js");
var ZoneFive$ReasonReactExamples = require("./ZoneFive.bs.js");
var ZoneFour$ReasonReactExamples = require("./ZoneFour.bs.js");
var ZoneThree$ReasonReactExamples = require("./ZoneThree.bs.js");

function City(Props) {
  return React.createElement("div", {
              className: "flex flex-column items-center"
            }, React.createElement("div", {
                  className: "flex justify-center bb"
                }, React.createElement(ZoneOne$ReasonReactExamples.make, { }), React.createElement(ZoneTwo$ReasonReactExamples.make, { }), React.createElement(ZoneThree$ReasonReactExamples.make, { }), React.createElement(ZoneFour$ReasonReactExamples.make, { })), React.createElement("div", {
                  className: "flex justify-center"
                }, React.createElement(ZoneFive$ReasonReactExamples.make, { }), React.createElement(ZoneSix$ReasonReactExamples.make, { })));
}

var make = City;

exports.make = make;
/* react Not a pure module */
