open Response;

module TilePane = {
  [@react.component]
  let make = (~state, ~setGameState, ~myTiles, ~num) => {
    let onSubmit = x => {
      Api.returnTiles(~player=num, ~numbers=x)
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
      switch (myTiles) {
      | Some(tiles) =>
        <CardPicker numbers={List.sort(compare, tiles)} onSubmit />
      | None =>
        <div className="fl w-25 pa1">
          {ReasonReact.string("Waiting on others")}
        </div>
      };
    };
  };
};

[@react.component]
let make = (~state: state, ~playerName: string, ~setGameState) => {
  let num = findPlayerNumber(~state, ~name=playerName);
  let tilesAllocatedToUser = (state, playerName) => {
    let tiles = state.tiles;
    switch (playerName) {
    | "PlayerOne" => tiles.tplayerOne
    | "PlayerTwo" => tiles.tplayerTwo
    | "PlayerThree" => tiles.tplayerThree
    | "PlayerFour" => tiles.tplayerFour
    | _ => None
    };
  };

  let myTiles = tilesAllocatedToUser(state, num);

  <div className="flex flex-column items-center pa1">
    <Year year={state.year} />
    <UserTile state playerName />
    <div className="flex flex-start">
      <City state myTiles />
      <TilePane state setGameState num myTiles />
    </div>
    <HelpBoard />
  </div>;
};
