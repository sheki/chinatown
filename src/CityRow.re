open Response;

type tileType =
  | Blank
  | Number(int);

[@react.component]
let make = (~numbers, ~state: state) => {
  let ren = y =>
    switch (y) {
    | Number(x) =>
      let o = state.ownership[x - 1];
      Js.log(o.player);
      let color = Players.colorFromPlayer(o.player);
      let shop = o.shop;
      if (o.player == "PlayerFour") {
        Js.log(
          string_of_int(x) ++ " PlayerFour" ++ Players.colorToString(color),
        );
      };

      <Tile id={string_of_int(x)} key={string_of_int(x)} color shop />;
    | Blank => <BlankTile />
    };

  <div className="flex ma2">
    {List.map(ren, numbers) |> Array.of_list |> React.array}
  </div>;
};
