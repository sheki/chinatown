'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Api$ReasonReactExamples = require("./Api.bs.js");
var Response$ReasonReactExamples = require("./Response.bs.js");

function AdminMoney(Props) {
  var state = Props.state;
  var setGameState = Props.setGameState;
  var buttons = function (player) {
    var x = $$Array.of_list(List.map((function (m) {
                var color = m > 0 ? "bg-dark-blue" : "bg-hot-pink";
                return React.createElement("a", {
                            key: String(m),
                            className: "f6 link dim br3 ph3 pv2 mb2 dib white mr1 " + color,
                            onClick: (function (param) {
                                var player$1 = player;
                                var i = m;
                                Api$ReasonReactExamples.addMoney(player$1, i).then((function (s) {
                                        Curry._1(setGameState, s);
                                        return Promise.resolve(/* () */0);
                                      }));
                                return /* () */0;
                              })
                          }, String(m));
              }), /* :: */[
              10000,
              /* :: */[
                -10000,
                /* :: */[
                  50000,
                  /* :: */[
                    -50000,
                    /* :: */[
                      100000,
                      /* :: */[
                        -100000,
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]));
    return React.createElement("div", undefined, x);
  };
  return React.createElement("table", {
              className: "collapse ma2 ba br2 b--black-10 pv2 ph3"
            }, React.createElement("tbody", undefined, $$Array.of_list(List.map((function (x) {
                            return React.createElement("tr", {
                                        key: x,
                                        className: "striped--light-gray"
                                      }, React.createElement("td", {
                                            className: "pv2 ph3"
                                          }, Response$ReasonReactExamples.findPlayerName(state, x)), React.createElement("td", {
                                            className: "pv2 ph3"
                                          }, buttons(x)));
                          }), /* :: */[
                          "PlayerOne",
                          /* :: */[
                            "PlayerTwo",
                            /* :: */[
                              "PlayerThree",
                              /* :: */[
                                "PlayerFour",
                                /* [] */0
                              ]
                            ]
                          ]
                        ]))));
}

var make = AdminMoney;

exports.make = make;
/* react Not a pure module */
