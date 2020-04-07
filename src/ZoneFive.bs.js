'use strict';

var React = require("react");
var CityRow$ReasonReactExamples = require("./CityRow.bs.js");

function ZoneFive(Props) {
  var state = Props.state;
  var myTiles = Props.myTiles;
  return React.createElement("div", {
              className: "flex flex-column br bw1"
            }, React.createElement("div", {
                  className: "flex flex-column"
                }, React.createElement(CityRow$ReasonReactExamples.make, {
                      numbers: /* :: */[
                        /* Number */[59],
                        /* :: */[
                          /* Number */[60],
                          /* :: */[
                            /* Blank */0,
                            /* [] */0
                          ]
                        ]
                      ],
                      state: state,
                      myTiles: myTiles
                    }), React.createElement(CityRow$ReasonReactExamples.make, {
                      numbers: /* :: */[
                        /* Number */[61],
                        /* :: */[
                          /* Number */[62],
                          /* :: */[
                            /* Blank */0,
                            /* [] */0
                          ]
                        ]
                      ],
                      state: state,
                      myTiles: myTiles
                    }), React.createElement(CityRow$ReasonReactExamples.make, {
                      numbers: /* :: */[
                        /* Number */[63],
                        /* :: */[
                          /* Number */[64],
                          /* :: */[
                            /* Number */[65],
                            /* [] */0
                          ]
                        ]
                      ],
                      state: state,
                      myTiles: myTiles
                    }), React.createElement(CityRow$ReasonReactExamples.make, {
                      numbers: /* :: */[
                        /* Number */[66],
                        /* :: */[
                          /* Number */[67],
                          /* :: */[
                            /* Number */[68],
                            /* [] */0
                          ]
                        ]
                      ],
                      state: state,
                      myTiles: myTiles
                    }), React.createElement(CityRow$ReasonReactExamples.make, {
                      numbers: /* :: */[
                        /* Blank */0,
                        /* :: */[
                          /* Number */[69],
                          /* :: */[
                            /* Number */[70],
                            /* [] */0
                          ]
                        ]
                      ],
                      state: state,
                      myTiles: myTiles
                    })));
}

var make = ZoneFive;

exports.make = make;
/* react Not a pure module */
