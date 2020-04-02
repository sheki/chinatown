'use strict';


function colorToString(c) {
  switch (c) {
    case /* Red */0 :
        return "red";
    case /* Yellow */1 :
        return "yellow";
    case /* Green */2 :
        return "green";
    case /* Blue */3 :
        return "blue";
    case /* Empty */4 :
        return "empty";
    
  }
}

function toHTMLColor(c) {
  switch (c) {
    case /* Red */0 :
        return "#E7040F";
    case /* Yellow */1 :
        return "#FFD700";
    case /* Green */2 :
        return "#19A974";
    case /* Blue */3 :
        return "#357EDD";
    case /* Empty */4 :
        return "#F4F4F4";
    
  }
}

function colorFromPlayer(c) {
  switch (c) {
    case "PlayerFour" :
        return /* Blue */3;
    case "PlayerOne" :
        return /* Red */0;
    case "PlayerThree" :
        return /* Green */2;
    case "PlayerTwo" :
        return /* Yellow */1;
    default:
      return /* Empty */4;
  }
}

exports.colorToString = colorToString;
exports.toHTMLColor = toHTMLColor;
exports.colorFromPlayer = colorFromPlayer;
/* No side effect */
