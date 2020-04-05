'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Api$ReasonReactExamples = require("./Api.bs.js");
var Shop$ReasonReactExamples = require("./Shop.bs.js");
var Response$ReasonReactExamples = require("./Response.bs.js");

function AdminShop(Props) {
  var state = Props.state;
  var setGameState = Props.setGameState;
  var players = /* :: */[
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
  ];
  var addTileCount = function (s, player, i) {
    Api$ReasonReactExamples.addTileCount(player, Shop$ReasonReactExamples.toString(s), i).then((function (s) {
            Curry._1(setGameState, s);
            return Promise.resolve(/* () */0);
          }));
    return /* () */0;
  };
  var buttons = function (s, player) {
    return React.createElement("div", undefined, React.createElement("a", {
                    className: "f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue mr1",
                    onClick: (function (param) {
                        return addTileCount(s, player, 1);
                      })
                  }, "+1"), React.createElement("a", {
                    className: "f6 link dim br3 ph3 pv2 mb2 dib white bg-hot-pink",
                    onClick: (function (param) {
                        return addTileCount(s, player, -1);
                      })
                  }, "-1"));
  };
  var buttonRows = function (s) {
    return $$Array.of_list(List.map((function (x) {
                      return React.createElement("td", {
                                  key: x,
                                  className: "pv2 ph3"
                                }, buttons(s, x));
                    }), players));
  };
  return React.createElement("table", {
              className: "collapse ma2 ba br2 b--black-10 pv2 ph3"
            }, React.createElement("tbody", undefined, React.createElement("tr", {
                      className: "striped--light-gray"
                    }, React.createElement("td", {
                          className: "pv2 ph3"
                        }, " "), $$Array.of_list(List.map((function (x) {
                                return React.createElement("td", {
                                            key: x,
                                            className: "pv2 ph3"
                                          }, Response$ReasonReactExamples.findPlayerName(state, x));
                              }), players))), $$Array.of_list(List.map((function (x) {
                            return React.createElement("tr", {
                                        key: Shop$ReasonReactExamples.toString(x),
                                        className: "striped--light-gray"
                                      }, React.createElement("td", {
                                            className: "pv2 ph3 f2"
                                          }, Shop$ReasonReactExamples.toEmoji(x)), buttonRows(x));
                          }), Shop$ReasonReactExamples.allShops))));
}

var make = AdminShop;

exports.make = make;
/* react Not a pure module */
