'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var Tile$ReasonReactExamples = require("./Tile.bs.js");
var BlankTile$ReasonReactExamples = require("./BlankTile.bs.js");

function ZoneSix(Props) {
  return React.createElement("div", {
              className: "flex flex-column"
            }, React.createElement("div", {
                  className: "flex ma2"
                }, $$Array.of_list(List.map((function (x) {
                            return React.createElement(Tile$ReasonReactExamples.make, {
                                        id: String(x),
                                        color: /* Empty */4,
                                        shop: /* None */10,
                                        key: String(x)
                                      });
                          }), /* :: */[
                          71,
                          /* :: */[
                            72,
                            /* :: */[
                              73,
                              /* :: */[
                                74,
                                /* [] */0
                              ]
                            ]
                          ]
                        ]))), React.createElement("div", {
                  className: "flex ma2"
                }, $$Array.of_list(List.map((function (x) {
                            return React.createElement(Tile$ReasonReactExamples.make, {
                                        id: String(x),
                                        color: /* Empty */4,
                                        shop: /* None */10,
                                        key: String(x)
                                      });
                          }), /* :: */[
                          75,
                          /* :: */[
                            76,
                            /* :: */[
                              77,
                              /* :: */[
                                78,
                                /* [] */0
                              ]
                            ]
                          ]
                        ]))), React.createElement("div", {
                  className: "flex ma2"
                }, $$Array.of_list(List.map((function (x) {
                            return React.createElement(Tile$ReasonReactExamples.make, {
                                        id: String(x),
                                        color: /* Empty */4,
                                        shop: /* None */10,
                                        key: String(x)
                                      });
                          }), /* :: */[
                          79,
                          /* :: */[
                            80,
                            /* :: */[
                              81,
                              /* :: */[
                                82,
                                /* [] */0
                              ]
                            ]
                          ]
                        ]))), React.createElement("div", {
                  className: "flex ma2"
                }, $$Array.of_list(List.map((function (x) {
                            return React.createElement(Tile$ReasonReactExamples.make, {
                                        id: String(x),
                                        color: /* Empty */4,
                                        shop: /* None */10,
                                        key: String(x)
                                      });
                          }), /* :: */[
                          83,
                          /* :: */[
                            84,
                            /* :: */[
                              85,
                              /* [] */0
                            ]
                          ]
                        ])), React.createElement(BlankTile$ReasonReactExamples.make, { })));
}

var make = ZoneSix;

exports.make = make;
/* react Not a pure module */
