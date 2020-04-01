type tileType =
  | Blank
  | Number(int);

[@react.component]
let make = (~numbers) => {
  let ren = y =>
    switch (y) {
    | Number(x) =>
      <Tile
        id={string_of_int(x)}
        key={string_of_int(x)}
        color=Tile.Empty
        shop=Shop.None
      />
    | Blank => <BlankTile />
    };

  <div className="flex ma2">
    {List.map(ren, numbers) |> Array.of_list |> React.array}
  </div>;
};
