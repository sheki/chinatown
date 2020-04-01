'use strict';


function toEmoji(s) {
  switch (s) {
    case /* Restaurant */0 :
        return "🍟";
    case /* Antique */1 :
        return "🗝️";
    case /* Factory */2 :
        return "🏭";
    case /* Dimsum */3 :
        return "🥟";
    case /* Laundry */4 :
        return "👚";
    case /* Takeout */5 :
        return "🥡";
    case /* Fish */6 :
        return "🐠";
    case /* Florist */7 :
        return "🌼";
    case /* Jewellery */8 :
        return "💍";
    case /* Photo */9 :
        return "📷";
    case /* Seafood */10 :
        return "🦀";
    case /* Tea */11 :
        return "☕";
    case /* None */12 :
        return "";
    
  }
}

exports.toEmoji = toEmoji;
/* No side effect */
