'use strict';

var React = require("react");
var Tile$ReasonReactExamples = require("./Tile.bs.js");
var BlankTile$ReasonReactExamples = require("./BlankTile.bs.js");

function ZoneTwo(Props) {
  return React.createElement("div", {
              className: "flex flex-column br bw1"
            }, React.createElement("div", {
                  className: "flex ma1"
                }, React.createElement(Tile$ReasonReactExamples.make, {
                      id: "16",
                      color: /* Empty */4,
                      shop: /* None */10
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "17",
                      color: /* Empty */4,
                      shop: /* None */10
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "18",
                      color: /* Empty */4,
                      shop: /* None */10
                    })), React.createElement("div", {
                  className: "flex ma1"
                }, React.createElement(Tile$ReasonReactExamples.make, {
                      id: "19",
                      color: /* Empty */4,
                      shop: /* None */10
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "20",
                      color: /* Empty */4,
                      shop: /* None */10
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "21",
                      color: /* Empty */4,
                      shop: /* None */10
                    })), React.createElement("div", {
                  className: "flex ma1"
                }, React.createElement(Tile$ReasonReactExamples.make, {
                      id: "22",
                      color: /* Empty */4,
                      shop: /* None */10
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "23",
                      color: /* Empty */4,
                      shop: /* None */10
                    }), React.createElement(BlankTile$ReasonReactExamples.make, { })), React.createElement("div", {
                  className: "flex ma1"
                }, React.createElement(Tile$ReasonReactExamples.make, {
                      id: "24",
                      color: /* Empty */4,
                      shop: /* None */10
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "25",
                      color: /* Empty */4,
                      shop: /* None */10
                    }), React.createElement(BlankTile$ReasonReactExamples.make, { })), React.createElement("div", {
                  className: "flex ma1"
                }, React.createElement(Tile$ReasonReactExamples.make, {
                      id: "26",
                      color: /* Empty */4,
                      shop: /* None */10
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "27",
                      color: /* Empty */4,
                      shop: /* None */10
                    }), React.createElement(BlankTile$ReasonReactExamples.make, { })));
}

var make = ZoneTwo;

exports.make = make;
/* react Not a pure module */
