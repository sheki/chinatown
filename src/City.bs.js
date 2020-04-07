'use strict';

var React = require("react");
var ZoneOne$ReasonReactExamples = require("./ZoneOne.bs.js");
var ZoneSix$ReasonReactExamples = require("./ZoneSix.bs.js");
var ZoneTwo$ReasonReactExamples = require("./ZoneTwo.bs.js");
var ZoneFive$ReasonReactExamples = require("./ZoneFive.bs.js");
var ZoneFour$ReasonReactExamples = require("./ZoneFour.bs.js");
var ZoneThree$ReasonReactExamples = require("./ZoneThree.bs.js");

function City(Props) {
  var state = Props.state;
  var myTiles = Props.myTiles;
  return React.createElement("div", {
              className: "flex flex-column items-center"
            }, React.createElement("div", {
                  className: "flex justify-center bb"
                }, React.createElement(ZoneOne$ReasonReactExamples.make, {
                      state: state,
                      myTiles: myTiles
                    }), React.createElement(ZoneTwo$ReasonReactExamples.make, {
                      state: state,
                      myTiles: myTiles
                    }), React.createElement(ZoneThree$ReasonReactExamples.make, {
                      state: state,
                      myTiles: myTiles
                    }), React.createElement(ZoneFour$ReasonReactExamples.make, {
                      state: state,
                      myTiles: myTiles
                    })), React.createElement("div", {
                  className: "flex justify-center"
                }, React.createElement(ZoneFive$ReasonReactExamples.make, {
                      state: state,
                      myTiles: myTiles
                    }), React.createElement(ZoneSix$ReasonReactExamples.make, {
                      state: state,
                      myTiles: myTiles
                    })));
}

var make = City;

exports.make = make;
/* react Not a pure module */
