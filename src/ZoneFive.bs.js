'use strict';

var React = require("react");
var Tile$ReasonReactExamples = require("./Tile.bs.js");
var BlankTile$ReasonReactExamples = require("./BlankTile.bs.js");

function ZoneFive(Props) {
  return React.createElement("div", {
              className: "flex flex-column br bw1"
            }, React.createElement("div", {
                  className: "flex ma2"
                }, React.createElement(Tile$ReasonReactExamples.make, {
                      id: "59",
                      color: /* Empty */4,
                      shop: /* None */12
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "60",
                      color: /* Empty */4,
                      shop: /* None */12
                    }), React.createElement(BlankTile$ReasonReactExamples.make, { })), React.createElement("div", {
                  className: "flex ma2"
                }, React.createElement(Tile$ReasonReactExamples.make, {
                      id: "61",
                      color: /* Empty */4,
                      shop: /* None */12
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "62",
                      color: /* Empty */4,
                      shop: /* None */12
                    }), React.createElement(BlankTile$ReasonReactExamples.make, { })), React.createElement("div", {
                  className: "flex ma2"
                }, React.createElement(Tile$ReasonReactExamples.make, {
                      id: "63",
                      color: /* Empty */4,
                      shop: /* None */12
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "64",
                      color: /* Empty */4,
                      shop: /* None */12
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "65",
                      color: /* Empty */4,
                      shop: /* None */12
                    })), React.createElement("div", {
                  className: "flex ma2"
                }, React.createElement(Tile$ReasonReactExamples.make, {
                      id: "66",
                      color: /* Empty */4,
                      shop: /* None */12
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "67",
                      color: /* Empty */4,
                      shop: /* None */12
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "68",
                      color: /* Empty */4,
                      shop: /* None */12
                    })), React.createElement("div", {
                  className: "flex ma2"
                }, React.createElement(BlankTile$ReasonReactExamples.make, { }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "69",
                      color: /* Empty */4,
                      shop: /* None */12
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "70",
                      color: /* Empty */4,
                      shop: /* None */12
                    })));
}

var make = ZoneFive;

exports.make = make;
/* react Not a pure module */
