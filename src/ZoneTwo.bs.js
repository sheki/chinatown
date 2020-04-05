'use strict';

var React = require("react");
var CityRow$ReasonReactExamples = require("./CityRow.bs.js");

function ZoneTwo(Props) {
  var state = Props.state;
  return React.createElement("div", {
              className: "flex flex-column br bw1"
            }, React.createElement(CityRow$ReasonReactExamples.make, {
                  numbers: /* :: */[
                    /* Number */[16],
                    /* :: */[
                      /* Number */[17],
                      /* :: */[
                        /* Number */[18],
                        /* [] */0
                      ]
                    ]
                  ],
                  state: state
                }), React.createElement(CityRow$ReasonReactExamples.make, {
                  numbers: /* :: */[
                    /* Number */[19],
                    /* :: */[
                      /* Number */[20],
                      /* :: */[
                        /* Number */[21],
                        /* [] */0
                      ]
                    ]
                  ],
                  state: state
                }), React.createElement(CityRow$ReasonReactExamples.make, {
                  numbers: /* :: */[
                    /* Number */[22],
                    /* :: */[
                      /* Number */[23],
                      /* :: */[
                        /* Blank */0,
                        /* [] */0
                      ]
                    ]
                  ],
                  state: state
                }), React.createElement(CityRow$ReasonReactExamples.make, {
                  numbers: /* :: */[
                    /* Number */[24],
                    /* :: */[
                      /* Number */[25],
                      /* :: */[
                        /* Blank */0,
                        /* [] */0
                      ]
                    ]
                  ],
                  state: state
                }), React.createElement(CityRow$ReasonReactExamples.make, {
                  numbers: /* :: */[
                    /* Number */[26],
                    /* :: */[
                      /* Number */[27],
                      /* :: */[
                        /* Blank */0,
                        /* [] */0
                      ]
                    ]
                  ],
                  state: state
                }));
}

var make = ZoneTwo;

exports.make = make;
/* react Not a pure module */
