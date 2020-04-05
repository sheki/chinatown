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
  var addMoney = function (player, i) {
    Api$ReasonReactExamples.addMoney(player, i).then((function (s) {
            Curry._1(setGameState, s);
            return Promise.resolve(/* () */0);
          }));
    return /* () */0;
  };
  var buttons = function (player) {
    return React.createElement("div", undefined, React.createElement("a", {
                    className: "f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue mr1",
                    onClick: (function (param) {
                        return addMoney(player, 10000);
                      })
                  }, "+10,000"), React.createElement("a", {
                    className: "f6 link dim br3 ph3 pv2 mb2 dib white bg-hot-pink",
                    onClick: (function (param) {
                        return addMoney(player, 10000);
                      })
                  }, "-10,000"));
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
