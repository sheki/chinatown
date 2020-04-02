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
exports.colorFromPlayer = colorFromPlayer;
/* No side effect */
