'use strict';


function fromString(s) {
  switch (s) {
    case "Antique" :
        return /* Antique */1;
    case "Dimsum" :
        return /* Dimsum */3;
    case "Factory" :
        return /* Factory */2;
    case "Fish" :
        return /* Fish */6;
    case "Florist" :
        return /* Florist */7;
    case "Jewellery" :
        return /* Jewellery */8;
    case "Laundry" :
        return /* Laundry */4;
    case "Photo" :
        return /* Photo */9;
    case "Restaurant" :
        return /* Restaurant */0;
    case "Seafood" :
        return /* Seafood */10;
    case "Takeout" :
        return /* Takeout */5;
    case "Tea" :
        return /* Tea */11;
    default:
      return /* None */12;
  }
}

function toString(s) {
  switch (s) {
    case /* Restaurant */0 :
        return "Restaurant";
    case /* Antique */1 :
        return "Antique";
    case /* Factory */2 :
        return "Factory";
    case /* Dimsum */3 :
        return "Dimsum";
    case /* Laundry */4 :
        return "Laundry";
    case /* Takeout */5 :
        return "Takeout";
    case /* Fish */6 :
        return "Fish";
    case /* Florist */7 :
        return "Florist";
    case /* Jewellery */8 :
        return "Jewellery";
    case /* Photo */9 :
        return "Photo";
    case /* Seafood */10 :
        return "Seafood";
    case /* Tea */11 :
        return "Tea";
    case /* None */12 :
        return "";
    
  }
}

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

var allShops = /* :: */[
  /* Restaurant */0,
  /* :: */[
    /* Antique */1,
    /* :: */[
      /* Factory */2,
      /* :: */[
        /* Dimsum */3,
        /* :: */[
          /* Laundry */4,
          /* :: */[
            /* Takeout */5,
            /* :: */[
              /* Fish */6,
              /* :: */[
                /* Florist */7,
                /* :: */[
                  /* Jewellery */8,
                  /* :: */[
                    /* Photo */9,
                    /* :: */[
                      /* Seafood */10,
                      /* :: */[
                        /* Tea */11,
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

exports.fromString = fromString;
exports.toString = toString;
exports.toEmoji = toEmoji;
exports.allShops = allShops;
/* No side effect */
