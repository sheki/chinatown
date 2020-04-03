open Response;

module TilePane = {
  let tilesAllocatedToUser = (~state, ~playerName) => {
    let tiles = state.tiles;
    switch (playerName) {
    | "PlayerOne" => tiles.tplayerOne
    | "PlayerTwo" => tiles.tplayerTwo
    | "PlayerThree" => tiles.tplayerThree
    | "PlayerFour" => tiles.tplayerFour
    | _ => None
    };
  };
  [@react.component]
  let make = (~state, ~playerName, ~setGameState) => {
    let num = findPlayerNumber(state, playerName);
    let onSubmit = x => {
      Api.returnTiles(num, x)
      |> Js.Promise.then_(s => {
           setGameState(s);
           Js.Promise.resolve();
         })
      |> ignore;
      ();
    };

    let displayUserPicker = state.phase == "PickTiles";
    if (!displayUserPicker) {
      <div />;
    } else {
      let myTiles = tilesAllocatedToUser(state, num);
      switch (myTiles) {
      | Some(tiles) => <CardPicker numbers=tiles onSubmit />
      | None =>
        <div className="fl w-25 pa1">
          {ReasonReact.string("Waiting on others")}
        </div>
      };
    };
  };
};

[@react.component]
let make = (~state: state, ~playerName: string, ~setGameState) =>
  <div className="flex flex-column items-center pa1">
    <UserTile state />
    <div className="flex flex-start">
      <City state />
      <TilePane state playerName setGameState />
    </div>
    <HelpBoard />
  </div>;
