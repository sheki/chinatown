'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var Shop$ReasonReactExamples = require("./Shop.bs.js");

function HelpBoard(Props) {
  var divs = $$Array.of_list(List.map((function (param) {
              var x = param[0];
              var str = Shop$ReasonReactExamples.toString(x) + (" " + Shop$ReasonReactExamples.toEmoji(x));
              return React.createElement("tr", {
                          key: str,
                          className: "striped--light-gray"
                        }, React.createElement("td", {
                              className: "pv2 ph3"
                            }, str), React.createElement("td", {
                              className: "pv2 ph3"
                            }, String(param[1])));
            }), /* :: */[
            /* tuple */[
              /* Restaurant */0,
              6
            ],
            /* :: */[
              /* tuple */[
                /* Antique */1,
                6
              ],
              /* :: */[
                /* tuple */[
                  /* Factory */2,
                  6
                ],
                /* :: */[
                  /* tuple */[
                    /* Dimsum */3,
                    5
                  ],
                  /* :: */[
                    /* tuple */[
                      /* Laundry */4,
                      5
                    ],
                    /* :: */[
                      /* tuple */[
                        /* Takeout */5,
                        5
                      ],
                      /* :: */[
                        /* tuple */[
                          /* Fish */6,
                          4
                        ],
                        /* :: */[
                          /* tuple */[
                            /* Florist */7,
                            4
                          ],
                          /* :: */[
                            /* tuple */[
                              /* Jewellery */8,
                              4
                            ],
                            /* :: */[
                              /* tuple */[
                                /* Photo */9,
                                3
                              ],
                              /* :: */[
                                /* tuple */[
                                  /* Seafood */10,
                                  3
                                ],
                                /* :: */[
                                  /* tuple */[
                                    /* Tea */11,
                                    3
                                  ],
                                  /* [] */0
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]));
  return React.createElement("div", {
              className: "flex justify-center"
            }, React.createElement("table", {
                  className: "collapse ma2 ba br2 b--black-10 pv2 ph3"
                }, React.createElement("tbody", undefined, divs)), React.createElement("table", {
                  className: "collapse ma2 ba br2 b--black-10 pv2 ph3"
                }, React.createElement("tbody", undefined, React.createElement("tr", {
                          className: "striped--light-gray "
                        }, React.createElement("td", {
                              className: "pv2 ph3"
                            }, "Bussiness"), React.createElement("td", {
                              className: "pv2 ph3"
                            }, "1"), React.createElement("td", {
                              className: "pv2 ph3"
                            }, "2"), React.createElement("td", {
                              className: "pv2 ph3"
                            }, "3"), React.createElement("td", {
                              className: "pv2 ph3"
                            }, "4"), React.createElement("td", {
                              className: "pv2 ph3"
                            }, "5"), React.createElement("td", {
                              className: "pv2 ph3"
                            }, "6")), React.createElement("tr", {
                          className: "striped--light-gray "
                        }, React.createElement("td", {
                              className: "pv2 ph3"
                            }, "incomplete"), React.createElement("td", {
                              className: "pv2 ph3"
                            }, "10,000"), React.createElement("td", {
                              className: "pv2 ph3"
                            }, "20,000"), React.createElement("td", {
                              className: "pv2 ph3"
                            }, "40,000"), React.createElement("td", {
                              className: "pv2 ph3"
                            }, "60,000"), React.createElement("td", {
                              className: "pv2 ph3"
                            }, "80,000"), React.createElement("td", {
                              className: "pv2 ph3"
                            }, "-")), React.createElement("tr", {
                          className: "striped--light-gray "
                        }, React.createElement("td", {
                              className: "pv2 ph3"
                            }, "complete"), React.createElement("td", {
                              className: "pv2 ph3"
                            }, "-"), React.createElement("td", {
                              className: "pv2 ph3"
                            }, "-"), React.createElement("td", {
                              className: "pv2 ph3"
                            }, "50,000"), React.createElement("td", {
                              className: "pv2 ph3"
                            }, "80,000"), React.createElement("td", {
                              className: "pv2 ph3"
                            }, "110,000"), React.createElement("td", {
                              className: "pv2 ph3"
                            }, "140,000")))));
}

var make = HelpBoard;

exports.make = make;
/* react Not a pure module */
