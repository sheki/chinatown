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
  let playerNames = json =>
    Json.Decode.{
      playerOne: json |> field("PlayerOne", string),
      playerTwo: json |> field("PlayerTwo", string),
      playerThree: json |> field("PlayerThree", string),
      playerFour: json |> field("PlayerFour", string),
    };
  let state = json =>
    Json.Decode.{
      version: json |> field("Version", int),
      year: json |> field("Year", int),
      players: json |> field("Players", playerNames),
    };
};
