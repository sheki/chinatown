'use strict';

var $$Map = require("bs-platform/lib/js/map.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Shop$ReasonReactExamples = require("./Shop.bs.js");

var compare = Caml_obj.caml_compare;

var StringMap = $$Map.Make({
      compare: compare
    });

var compare$1 = Caml_obj.caml_compare;

var ShopMap = $$Map.Make({
      compare: compare$1
    });

function findPlayerNumber(s, n) {
  var p = s.players;
  if (p.playerOne === n) {
    return "PlayerOne";
  } else if (p.playerTwo === n) {
    return "PlayerTwo";
  } else if (p.playerThree === n) {
    return "PlayerThree";
  } else if (p.playerFour === n) {
    return "PlayerFour";
  } else {
    return "";
  }
}

function getPlayerMOney(state, n) {
  var number = findPlayerNumber(state, n);
  switch (number) {
    case "PlayerFour" :
        return state.money.mplayerFour;
    case "PlayerOne" :
        return state.money.mplayerOne;
    case "PlayerThree" :
        return state.money.mplayerThree;
    case "PlayerTwo" :
        return state.money.mplayerTwo;
    default:
      return 0;
  }
}

function findPlayerName(state, number) {
  var players = state.players;
  switch (number) {
    case "PlayerFour" :
        return players.playerFour;
    case "PlayerOne" :
        return players.playerOne;
    case "PlayerThree" :
        return players.playerThree;
    case "PlayerTwo" :
        return players.playerTwo;
    default:
      return "";
  }
}

function dictToStringMap(d) {
  return $$Array.fold_left((function (m, entry) {
                return Curry._3(StringMap.add, entry[0], entry[1], m);
              }), StringMap.empty, Js_dict.entries(d));
}

function playerNames(json) {
  return {
          playerOne: Json_decode.field("PlayerOne", Json_decode.string, json),
          playerTwo: Json_decode.field("PlayerTwo", Json_decode.string, json),
          playerThree: Json_decode.field("PlayerThree", Json_decode.string, json),
          playerFour: Json_decode.field("PlayerFour", Json_decode.string, json)
        };
}

function tilesAllocation(json) {
  return {
          tplayerOne: Json_decode.optional((function (param) {
                  return Json_decode.field("PlayerOne", (function (param) {
                                return Json_decode.list(Json_decode.$$int, param);
                              }), param);
                }), json),
          tplayerTwo: Json_decode.optional((function (param) {
                  return Json_decode.field("PlayerTwo", (function (param) {
                                return Json_decode.list(Json_decode.$$int, param);
                              }), param);
                }), json),
          tplayerThree: Json_decode.optional((function (param) {
                  return Json_decode.field("PlayerThree", (function (param) {
                                return Json_decode.list(Json_decode.$$int, param);
                              }), param);
                }), json),
          tplayerFour: Json_decode.optional((function (param) {
                  return Json_decode.field("PlayerFour", (function (param) {
                                return Json_decode.list(Json_decode.$$int, param);
                              }), param);
                }), json)
        };
}

function money(json) {
  return {
          mplayerOne: Json_decode.field("PlayerOne", Json_decode.$$int, json),
          mplayerTwo: Json_decode.field("PlayerTwo", Json_decode.$$int, json),
          mplayerThree: Json_decode.field("PlayerThree", Json_decode.$$int, json),
          mplayerFour: Json_decode.field("PlayerFour", Json_decode.$$int, json)
        };
}

function decodeShopMap(json) {
  var d = Json_decode.dict(Json_decode.$$int, json);
  return $$Array.fold_left((function (m, entry) {
                return Curry._3(ShopMap.add, Shop$ReasonReactExamples.fromString(entry[0]), entry[1], m);
              }), ShopMap.empty, Js_dict.entries(d));
}

function yakShave(json) {
  return dictToStringMap(Json_decode.dict(decodeShopMap, json));
}

function decodeShop(json) {
  return Shop$ReasonReactExamples.fromString(Json_decode.string(json));
}

function tileOwnership(json) {
  return {
          player: Json_decode.field("Player", Json_decode.string, json),
          shop: Json_decode.field("Shop", decodeShop, json),
          number: Json_decode.field("TileNumber", Json_decode.$$int, json)
        };
}

function state(json) {
  return {
          players: Json_decode.field("Players", playerNames, json),
          version: Json_decode.field("Version", Json_decode.$$int, json),
          year: Json_decode.field("Year", Json_decode.$$int, json),
          phase: Json_decode.field("Phase", Json_decode.string, json),
          tiles: Json_decode.field("TilesAllocation", tilesAllocation, json),
          ownership: Json_decode.field("Ownership", (function (param) {
                  return Json_decode.array(tileOwnership, param);
                }), json),
          shopTiles: Json_decode.field("ShopAllocation", yakShave, json),
          money: Json_decode.field("Money", money, json)
        };
}

var Decode = {
  dictToStringMap: dictToStringMap,
  playerNames: playerNames,
  tilesAllocation: tilesAllocation,
  money: money,
  decodeShopMap: decodeShopMap,
  yakShave: yakShave,
  decodeShop: decodeShop,
  tileOwnership: tileOwnership,
  state: state
};

exports.StringMap = StringMap;
exports.ShopMap = ShopMap;
exports.findPlayerNumber = findPlayerNumber;
exports.getPlayerMOney = getPlayerMOney;
exports.findPlayerName = findPlayerName;
exports.Decode = Decode;
/* StringMap Not a pure module */
