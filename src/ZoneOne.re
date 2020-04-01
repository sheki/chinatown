[@react.component]
let make = () =>
  <div className="flex flex-column">
    <div className="flex ma1">
      <BlankTile />
      <Tile id="1" color=Tile.Empty shop=Shop.None />
      <Tile id="2" color=Tile.Empty shop=Shop.None />
      <BlankTile />
    </div>
    <div className="flex ma1">
      <BlankTile />
      <Tile id="3" color=Tile.Empty shop=Shop.None />
      <Tile id="4" color=Tile.Empty shop=Shop.None />
      <Tile id="5" color=Tile.Empty shop=Shop.None />
    </div>
    <div className="flex ma1">
      <Tile id="6" color=Tile.Empty shop=Shop.None />
      <Tile id="7" color=Tile.Empty shop=Shop.None />
      <Tile id="8" color=Tile.Empty shop=Shop.None />
      <Tile id="9" color=Tile.Empty shop=Shop.None />
    </div>
    <div className="flex ma1">
      <Tile id="10" color=Tile.Empty shop=Shop.None />
      <Tile id="11" color=Tile.Empty shop=Shop.None />
      <Tile id="12" color=Tile.Green shop=Shop.Fish />
      <BlankTile />
    </div>
    <div className="flex ma1">
      <Tile id="13" color=Tile.Blue shop=Shop.None />
      <Tile id="14" color=Tile.Empty shop=Shop.None />
      <Tile id="15" color=Tile.Empty shop=Shop.Dimsum />
      <BlankTile />
    </div>
  </div>;
