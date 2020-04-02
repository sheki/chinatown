open Response;

let shopTileString = (~k, ~v) =>
  Shop.toEmoji(k) ++ " x " ++ string_of_int(v);

let userTiles = (~shopTiles, ~playerNumber: string) => {
  Js.log("OK");
  Js.log(shopTiles);
  Js.log(playerNumber);
  let c = StringMap.find(playerNumber, shopTiles);
  ShopMap.fold((k, v, l) => [shopTileString(k, v), ...l], c, []);
};

[@react.component]
let make = (~state: state, ~playerNumber: string) => {
  let tiles = userTiles(state.shopTiles, playerNumber);
  let what =
    tiles
    |> List.map(x =>
         <div key=x className="ma1"> {ReasonReact.string(x)} </div>
       )
    |> Array.of_list
    |> React.array;
  <div className="flex flex-column"> what </div>;
};