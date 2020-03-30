'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Random = require("bs-platform/lib/js/random.js");

function pickName(i) {
  switch (i) {
    case 0 :
        return "Ambasaador";
    case 1 :
        return "Maruti";
    case 2 :
        return "Padmini";
    default:
      return "Noop";
  }
}

function WaitingOnOthers(Props) {
  Random.self_init(/* () */0);
  var match = React.useState((function () {
          return "OK";
        }));
  var setRoboName = match[1];
  React.useEffect((function () {
          var timerId = setInterval((function (param) {
                  var name = pickName(Random.$$int(3));
                  Curry._1(setRoboName, (function (param) {
                          return name;
                        }));
                  return /* () */0;
                }), 3000);
          return (function (param) {
                    clearInterval(timerId);
                    return /* () */0;
                  });
        }), ([]));
  var src = "https://robohash.org/" + (match[0] + ".png?size=200x200");
  return React.createElement("div", {
              className: "flex flex-column pa3 items-center"
            }, React.createElement("h2", {
                  className: "f2"
                }, "Waiting for other players"), React.createElement("img", {
                  className: "ba",
                  src: src
                }));
}

var make = WaitingOnOthers;

exports.pickName = pickName;
exports.make = make;
/* react Not a pure module */
