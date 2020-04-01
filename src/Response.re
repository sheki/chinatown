module StringMap = Map.Make({
  type t = string;
  let compare = compare
});

module ShopMap = Map.Make({
  type t = Shop.shop
  let compare = compare
});

type tilesAllocation = {
  // Annoying nuisance
  tplayerOne: option(list(int)),
  tplayerTwo: option(list(int)),
  tplayerThree: option(list(int)),
  tplayerFour: option(list(int)),
};

type playerNames = {
  playerOne: string,
  playerTwo: string,
  playerThree: string,
  playerFour: string,
};

type state = {
  players: playerNames,
  version: int,
  year: int,
  phase: string,
  tiles: tilesAllocation,
  shopTiles: StringMap.t(ShopMap.t(int)),
};

let findPlayerNumber = (~state as s, ~name as n) => {
  let p = s.players;
  if (p.playerOne == n) {
    "PlayerOne";
  } else if (p.playerTwo == n) {
    "PlayerTwo";
  } else if (p.playerThree == n) {
    "PlayerThree";
  } else if (p.playerFour == n) {
    "PlayerFour";
  } else {
    "";
  };
};

module Decode = {
  let dictToStringMap = d => {
	 Js.Dict.entries(d) |> Array.fold_left((m, entry) => {
		 let (k,v) = entry;
		 StringMap.add(k, v, m)
	 }, StringMap.empty);
  };

  let playerNames = json =>
    Json.Decode.{
      playerOne: json |> field("PlayerOne", string),
      playerTwo: json |> field("PlayerTwo", string),
      playerThree: json |> field("PlayerThree", string),
      playerFour: json |> field("PlayerFour", string),
    };
  let tilesAllocation = json =>
    Json.Decode.{
      tplayerOne: json |> optional(field("PlayerOne", list(int))),
      tplayerTwo: json |> optional(field("PlayerTwo", list(int))),
      tplayerThree: json |> optional(field("PlayerThree", list(int))),
      tplayerFour: json |> optional(field("PlayerFour", list(int))),
    };

  let decodeShopMap = (json) : ShopMap.t(int) => {
	 let d = Json.Decode.dict(Json.Decode.int,json);
	 Js.Dict.entries(d) |> Array.fold_left((m, entry) => {
		 let (k,v) = entry;
		 ShopMap.add(Shop.fromString(k), v, m)
	 }, ShopMap.empty);
  }

  let yakShave = (json) => {
	 let d = Json.Decode.dict(decodeShopMap,json);
	 dictToStringMap(d)
  }

  let state = json =>
    Json.Decode.{
      version: json |> field("Version", int),
      year: json |> field("Year", int),
      players: json |> field("Players", playerNames),
      phase: json |> field("Phase", string),
      tiles: json |> field("TilesAllocation", tilesAllocation),
      shopTiles: json |> field("ShopAllocation", yakShave),
    };
};
