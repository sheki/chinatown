'use strict';

var React = require("react");

function Year(Props) {
  var year = Props.year;
  var t;
  switch (year) {
    case 1 :
        t = "🐀";
        break;
    case 2 :
        t = "🐀🐂";
        break;
    case 3 :
        t = "🐀🐂🐯";
        break;
    case 4 :
        t = "🐀🐂🐯🐰";
        break;
    case 5 :
        t = "🐀🐂🐯🐰🐲";
        break;
    case 6 :
        t = "🐀🐂🐯🐰🐲🐍";
        break;
    default:
      t = "";
  }
  return React.createElement("div", {
              className: "f2"
            }, "Year: " + t);
}

var make = Year;

exports.make = make;
/* react Not a pure module */
