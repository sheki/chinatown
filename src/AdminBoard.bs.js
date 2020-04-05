'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Api$ReasonReactExamples = require("./Api.bs.js");
var Response$ReasonReactExamples = require("./Response.bs.js");
var AdminShop$ReasonReactExamples = require("./AdminShop.bs.js");
var AdminMoney$ReasonReactExamples = require("./AdminMoney.bs.js");
var AdminShopAllocate$ReasonReactExamples = require("./AdminShopAllocate.bs.js");

function AdminBoard(Props) {
  var match = React.useState((function () {
          return /* tuple */[
                  0,
                  ""
                ];
        }));
  var setState = match[1];
  var state = match[0];
  var match$1 = React.useState((function () {
          return /* NoGameState */0;
        }));
  var setGameState = match$1[1];
  var gameState = match$1[0];
  var onChange = function (e) {
    var value = e.target.value;
    if (value === "") {
      return Curry._1(setState, (function (param) {
                    return /* tuple */[
                            0,
                            param[1]
                          ];
                  }));
    } else {
      return Curry._1(setState, (function (param) {
                    return /* tuple */[
                            Caml_format.caml_int_of_string(value),
                            param[1]
                          ];
                  }));
    }
  };
  var refreshState = function (param) {
    Api$ReasonReactExamples.getState(/* () */0).then((function (s) {
            Curry._1(setGameState, (function (param) {
                    return /* GameState */[s];
                  }));
            return Promise.resolve(/* () */0);
          }));
    return /* () */0;
  };
  React.useEffect((function () {
          refreshState(/* () */0);
          return ;
        }), ([]));
  var onChangeSelect = function (e) {
    var value = e.target.value;
    return Curry._1(setState, (function (param) {
                  return /* tuple */[
                          param[0],
                          value
                        ];
                }));
  };
  var onSubmit = function (e) {
    e.preventDefault();
    Api$ReasonReactExamples.setOwnership(state[1], state[0]).then((function (s) {
            Curry._1(setGameState, (function (param) {
                    return /* GameState */[s];
                  }));
            return Promise.resolve(/* () */0);
          }));
    return /* () */0;
  };
  if (gameState) {
    var gs = gameState[0];
    return React.createElement("div", {
                className: "flex pa2"
              }, React.createElement("div", {
                    className: "flex flex-column w-25"
                  }, React.createElement("form", {
                        className: "center pa4 br2-ns ba b--black-10",
                        onSubmit: onSubmit
                      }, React.createElement("input", {
                            type: "number",
                            value: String(state[0]),
                            onChange: onChange
                          }), React.createElement("select", {
                            value: state[1],
                            onChange: onChangeSelect
                          }, React.createElement("option", {
                                value: "PlayerOne"
                              }, Response$ReasonReactExamples.findPlayerName(gs, "PlayerOne")), React.createElement("option", {
                                value: "PlayerTwo"
                              }, Response$ReasonReactExamples.findPlayerName(gs, "PlayerTwo")), React.createElement("option", {
                                value: "PlayerThree"
                              }, Response$ReasonReactExamples.findPlayerName(gs, "PlayerThree")), React.createElement("option", {
                                value: "PlayerFour"
                              }, Response$ReasonReactExamples.findPlayerName(gs, "PlayerFour"))), React.createElement("input", {
                            type: "submit",
                            value: "Submit"
                          })), React.createElement(AdminShopAllocate$ReasonReactExamples.make, {
                        setGameState: (function (x) {
                            return Curry._1(setGameState, (function (param) {
                                          return /* GameState */[x];
                                        }));
                          })
                      })), React.createElement(AdminShop$ReasonReactExamples.make, {
                    state: gs,
                    setGameState: (function (x) {
                        return Curry._1(setGameState, (function (param) {
                                      return /* GameState */[x];
                                    }));
                      })
                  }), React.createElement(AdminMoney$ReasonReactExamples.make, {
                    state: gs,
                    setGameState: (function (x) {
                        return Curry._1(setGameState, (function (param) {
                                      return /* GameState */[x];
                                    }));
                      })
                  }));
  } else {
    return React.createElement("div", undefined, "loading");
  }
}

var make = AdminBoard;

exports.make = make;
/* react Not a pure module */
