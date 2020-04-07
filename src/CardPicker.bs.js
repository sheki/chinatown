'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_primitive = require("bs-platform/lib/js/caml_primitive.js");

function CardPicker$NumberCard(Props) {
  var number = Props.number;
  var picked = Props.picked;
  var onClick = Props.onClick;
  var style = picked ? ({
        backgroundColor: "#000000",
        color: "#FFFFFF"
      }) : ({ });
  return React.createElement("div", {
              className: "w3 ba b1 br4 ma1 shadow-2 h2 ma2 flex flex-column justify-center item-center",
              style: style
            }, React.createElement("a", {
                  onClick: (function (param) {
                      return Curry._1(onClick, number);
                    })
                }, React.createElement("div", {
                      className: "f3 tc"
                    }, String(number))));
}

var NumberCard = {
  make: CardPicker$NumberCard
};

function CardPicker(Props) {
  var numbers = Props.numbers;
  var onSubmit = Props.onSubmit;
  var initialState = List.map((function (n) {
          return /* tuple */[
                  n,
                  false
                ];
        }), numbers);
  var match = React.useState((function () {
          return initialState;
        }));
  var setState = match[1];
  var match$1 = React.useState((function () {
          return /* [] */0;
        }));
  var setClicked = match$1[1];
  var clicked = match$1[0];
  var onClick = function (picked) {
    var tmp;
    if (clicked) {
      var match = clicked[1];
      tmp = match ? (
          match[1] ? /* [] */0 : /* :: */[
              match[0],
              /* :: */[
                picked,
                /* [] */0
              ]
            ]
        ) : /* :: */[
          clicked[0],
          /* :: */[
            picked,
            /* [] */0
          ]
        ];
    } else {
      tmp = /* :: */[
        picked,
        /* [] */0
      ];
    }
    var newClicked = List.sort_uniq(Caml_primitive.caml_int_compare, tmp);
    var newState = List.map((function (n) {
            return /* tuple */[
                    n,
                    List.exists((function (x) {
                            return x === n;
                          }), newClicked)
                  ];
          }), numbers);
    Curry._1(setState, (function (param) {
            return newState;
          }));
    Curry._1(setClicked, (function (param) {
            return newClicked;
          }));
    return /* () */0;
  };
  var elems = List.map((function (x) {
          var n = x[0];
          return React.createElement(CardPicker$NumberCard, {
                      number: n,
                      picked: x[1],
                      onClick: onClick,
                      key: String(n)
                    });
        }), match[0]);
  return React.createElement("div", {
              className: "flex flex-column"
            }, $$Array.of_list(elems), List.length(clicked) === 2 ? React.createElement("a", {
                    className: "w4 f6 link dim ph3 pv2 mb2 dib white bg-mid-gray",
                    onClick: (function (param) {
                        return Curry._1(onSubmit, clicked);
                      })
                  }, "Submit!") : React.createElement("div", {
                    className: "w4 f6 link dim ba ph3 pv2 mb2 dib near-black"
                  }, "Discard Two"));
}

var make = CardPicker;

exports.NumberCard = NumberCard;
exports.make = make;
/* react Not a pure module */
