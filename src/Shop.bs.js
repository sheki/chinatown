'use strict';


function toEmoji(s) {
  switch (s) {
    case /* Antique */0 :
        return "🗝️";
    case /* Dimsum */1 :
        return "🥟";
    case /* Factory */2 :
        return "🏭";
    case /* Fish */3 :
        return "🐠";
    case /* Florist */4 :
        return "🌼";
    case /* Jewellery */5 :
        return "💍";
    case /* Laundry */6 :
        return "👚";
    case /* Photo */7 :
        return "📷";
    case /* Takeout */8 :
        return "🥡";
    case /* Tea */9 :
        return "☕";
    case /* None */10 :
        return "";
    
  }
}

exports.toEmoji = toEmoji;
/* No side effect */
