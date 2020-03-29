'use strict';

var React = require("react");
var Tile$ReasonReactExamples = require("./Tile.bs.js");
var BlankTile$ReasonReactExamples = require("./BlankTile.bs.js");

function ZoneOne(Props) {
  return React.createElement("div", {
              className: "flex flex-column"
            }, React.createElement("div", {
                  className: "flex ma2"
                }, React.createElement(BlankTile$ReasonReactExamples.make, { }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "1",
                      color: /* Empty */4,
                      shop: /* None */10
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "2",
                      color: /* Empty */4,
                      shop: /* None */10
                    }), React.createElement(BlankTile$ReasonReactExamples.make, { })), React.createElement("div", {
                  className: "flex ma2"
                }, React.createElement(BlankTile$ReasonReactExamples.make, { }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "3",
                      color: /* Empty */4,
                      shop: /* None */10
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "4",
                      color: /* Empty */4,
                      shop: /* None */10
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "5",
                      color: /* Empty */4,
                      shop: /* None */10
                    })), React.createElement("div", {
                  className: "flex ma2"
                }, React.createElement(Tile$ReasonReactExamples.make, {
                      id: "6",
                      color: /* Empty */4,
                      shop: /* None */10
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "7",
                      color: /* Empty */4,
                      shop: /* None */10
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "8",
                      color: /* Empty */4,
                      shop: /* None */10
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "9",
                      color: /* Empty */4,
                      shop: /* None */10
                    })), React.createElement("div", {
                  className: "flex ma2"
                }, React.createElement(Tile$ReasonReactExamples.make, {
                      id: "10",
                      color: /* Empty */4,
                      shop: /* None */10
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "11",
                      color: /* Empty */4,
                      shop: /* None */10
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "12",
                      color: /* Green */2,
                      shop: /* Fish */3
                    }), React.createElement(BlankTile$ReasonReactExamples.make, { })), React.createElement("div", {
                  className: "flex ma2"
                }, React.createElement(Tile$ReasonReactExamples.make, {
                      id: "13",
                      color: /* Blue */3,
                      shop: /* None */10
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "14",
                      color: /* Empty */4,
                      shop: /* None */10
                    }), React.createElement(Tile$ReasonReactExamples.make, {
                      id: "15",
                      color: /* Empty */4,
                      shop: /* Dimsum */1
                    }), React.createElement(BlankTile$ReasonReactExamples.make, { })));
}

var make = ZoneOne;

exports.make = make;
/* react Not a pure module */
