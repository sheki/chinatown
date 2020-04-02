'use strict';

var React = require("react");
var CityRow$ReasonReactExamples = require("./CityRow.bs.js");

function ZoneOne(Props) {
  var state = Props.state;
  return React.createElement("div", {
              className: "flex flex-column br bw1"
            }, React.createElement(CityRow$ReasonReactExamples.make, {
                  numbers: /* :: */[
                    /* Blank */0,
                    /* :: */[
                      /* Number */[1],
                      /* :: */[
                        /* Number */[2],
                        /* :: */[
                          /* Blank */0,
                          /* [] */0
                        ]
                      ]
                    ]
                  ],
                  state: state
                }), React.createElement(CityRow$ReasonReactExamples.make, {
                  numbers: /* :: */[
                    /* Blank */0,
                    /* :: */[
                      /* Number */[3],
                      /* :: */[
                        /* Number */[4],
                        /* :: */[
                          /* Number */[5],
                          /* [] */0
                        ]
                      ]
                    ]
                  ],
                  state: state
                }), React.createElement(CityRow$ReasonReactExamples.make, {
                  numbers: /* :: */[
                    /* Number */[6],
                    /* :: */[
                      /* Number */[7],
                      /* :: */[
                        /* Number */[8],
                        /* :: */[
                          /* Number */[9],
                          /* [] */0
                        ]
                      ]
                    ]
                  ],
                  state: state
                }), React.createElement(CityRow$ReasonReactExamples.make, {
                  numbers: /* :: */[
                    /* Number */[10],
                    /* :: */[
                      /* Number */[11],
                      /* :: */[
                        /* Number */[12],
                        /* :: */[
                          /* Blank */0,
                          /* [] */0
                        ]
                      ]
                    ]
                  ],
                  state: state
                }), React.createElement(CityRow$ReasonReactExamples.make, {
                  numbers: /* :: */[
                    /* Number */[13],
                    /* :: */[
                      /* Number */[14],
                      /* :: */[
                        /* Number */[15],
                        /* :: */[
                          /* Blank */0,
                          /* [] */0
                        ]
                      ]
                    ]
                  ],
                  state: state
                }));
}

var make = ZoneOne;

exports.make = make;
/* react Not a pure module */
