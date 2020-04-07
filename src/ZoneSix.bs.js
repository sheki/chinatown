'use strict';

var React = require("react");
var CityRow$ReasonReactExamples = require("./CityRow.bs.js");

function ZoneSix(Props) {
  var state = Props.state;
  var myTiles = Props.myTiles;
  return React.createElement("div", {
              className: "flex flex-column"
            }, React.createElement(CityRow$ReasonReactExamples.make, {
                  numbers: /* :: */[
                    /* Number */[71],
                    /* :: */[
                      /* Number */[72],
                      /* :: */[
                        /* Number */[73],
                        /* :: */[
                          /* Number */[74],
                          /* [] */0
                        ]
                      ]
                    ]
                  ],
                  state: state,
                  myTiles: myTiles
                }), React.createElement(CityRow$ReasonReactExamples.make, {
                  numbers: /* :: */[
                    /* Number */[75],
                    /* :: */[
                      /* Number */[76],
                      /* :: */[
                        /* Number */[77],
                        /* :: */[
                          /* Number */[78],
                          /* [] */0
                        ]
                      ]
                    ]
                  ],
                  state: state,
                  myTiles: myTiles
                }), React.createElement(CityRow$ReasonReactExamples.make, {
                  numbers: /* :: */[
                    /* Number */[79],
                    /* :: */[
                      /* Number */[80],
                      /* :: */[
                        /* Number */[81],
                        /* :: */[
                          /* Number */[82],
                          /* [] */0
                        ]
                      ]
                    ]
                  ],
                  state: state,
                  myTiles: myTiles
                }), React.createElement(CityRow$ReasonReactExamples.make, {
                  numbers: /* :: */[
                    /* Number */[83],
                    /* :: */[
                      /* Number */[84],
                      /* :: */[
                        /* Number */[85],
                        /* :: */[
                          /* Blank */0,
                          /* [] */0
                        ]
                      ]
                    ]
                  ],
                  state: state,
                  myTiles: myTiles
                }));
}

var make = ZoneSix;

exports.make = make;
/* react Not a pure module */
