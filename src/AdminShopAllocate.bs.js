'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Api$ReasonReactExamples = require("./Api.bs.js");
var Shop$ReasonReactExamples = require("./Shop.bs.js");

function AdminShopAllocate(Props) {
  var setGameState = Props.setGameState;
  var match = React.useState((function () {
          return /* None */12;
        }));
  var setShop = match[1];
  var shop = match[0];
  var match$1 = React.useState((function () {
          return 0;
        }));
  var setTile = match$1[1];
  var tile = match$1[0];
  var onNumChange = function (e) {
    var value = e.target.value;
    if (value === "") {
      return Curry._1(setTile, (function (param) {
                    return 0;
                  }));
    } else {
      return Curry._1(setTile, (function (param) {
                    return Caml_format.caml_int_of_string(value);
                  }));
    }
  };
  var onSubmit = function (e) {
    e.preventDefault();
    Api$ReasonReactExamples.setTile(Shop$ReasonReactExamples.toString(shop), tile).then((function (s) {
            Curry._1(setGameState, s);
            return Promise.resolve(/* () */0);
          }));
    return /* () */0;
  };
  var selects = $$Array.of_list(List.map((function (x) {
              var bgColor = x === shop ? "#FFDFDF" : "#F4F4F4";
              var style = {
                backgroundColor: bgColor
              };
              var text = Shop$ReasonReactExamples.toEmoji(x);
              return React.createElement("a", {
                          key: text,
                          onClick: (function (param) {
                              return Curry._1(setShop, (function (param) {
                                            return x;
                                          }));
                            })
                        }, React.createElement("div", {
                              className: "ba b1 br4 shadow-2 w3 h3 ma1 flex flex-column justify-center item-center",
                              style: style
                            }, React.createElement("div", {
                                  className: "f4 tc"
                                }, text)));
            }), Shop$ReasonReactExamples.allShops));
  return React.createElement("div", {
              className: "flex flex-column pa1"
            }, React.createElement("form", {
                  className: "center pa1 br2-ns ba b--black-10",
                  onSubmit: onSubmit
                }, React.createElement("div", {
                      className: "flex flex-wrap"
                    }, selects), React.createElement("input", {
                      type: "number",
                      value: String(tile),
                      onChange: onNumChange
                    }), React.createElement("input", {
                      type: "submit",
                      value: "Submit"
                    })));
}

var make = AdminShopAllocate;

exports.make = make;
/* react Not a pure module */
