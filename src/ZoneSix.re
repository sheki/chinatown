[@react.component]
let make = () =>
  <div className="flex flex-column">
    <div className="flex ma2">
      {
        List.map(
          x =>
            <Tile
              id={string_of_int(x)}
              key={string_of_int(x)}
              color=Tile.Empty
              shop=Shop.None
            />,
          [71, 72, 73, 74],
        )
        |> Array.of_list
        |> React.array
      }
    </div>
    <div className="flex ma2">
      {
        List.map(
          x =>
            <Tile
              id={string_of_int(x)}
              key={string_of_int(x)}
              color=Tile.Empty
              shop=Shop.None
            />,
          [75, 76, 77, 78],
        )
        |> Array.of_list
        |> React.array
      }
    </div>
    <div className="flex ma2">
      {
        List.map(
          x =>
            <Tile
              id={string_of_int(x)}
              key={string_of_int(x)}
              color=Tile.Empty
              shop=Shop.None
            />,
          [79, 80, 81, 82],
        )
        |> Array.of_list
        |> React.array
      }
    </div>
    <div className="flex ma2">
      {
        List.map(
          x =>
            <Tile
              id={string_of_int(x)}
              key={string_of_int(x)}
              color=Tile.Empty
              shop=Shop.None
            />,
          [83, 84, 85],
        )
        |> Array.of_list
        |> React.array
      }
      <BlankTile />
    </div>
  </div>;
