open Response;

module TilePane = {
  let tilesAllocatedToUser = (~state: state, ~playerName: string) => {
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
  let make = (~state, ~playerName) => {
    let displayUserPicker = state.phase == "PickTiles";
    if (!displayUserPicker) {
      <div />;
    } else {
      let num = findPlayerNumber(state, playerName);
      let myTiles = tilesAllocatedToUser(state, num);
      switch (myTiles) {
      | Some(tiles) => <CardPicker numbers=tiles onSubmit=(x => Js.log(x)) />
      | None =>
        <div className="fl w-25 pa1">
          {ReasonReact.string("Waiting on others")}
        </div>
      };
    };
  };
};

[@react.component]
let make = (~state: state, ~playerName: string) =>
  <div className="flex flex-column items-center pa1">
    <UserTile state playerName />
    <div className="fl w-75 pa1">
      <div className="fl w-75 pa1"> <ZoneOne /> </div>
      <TilePane state playerName />
    </div>
  </div>;
