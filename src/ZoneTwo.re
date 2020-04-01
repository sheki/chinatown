[@react.component]
let make = () =>
  <div className="flex flex-column">
    <div className="flex ma1">
      <Tile id="16" color=Tile.Empty shop=Shop.None />
      <Tile id="17" color=Tile.Empty shop=Shop.None />
      <Tile id="18" color=Tile.Empty shop=Shop.None />
    </div>
    <div className="flex ma1">
      <Tile id="19" color=Tile.Empty shop=Shop.None />
      <Tile id="20" color=Tile.Empty shop=Shop.None />
      <Tile id="21" color=Tile.Empty shop=Shop.None />
    </div>
    <div className="flex ma1">
      <Tile id="22" color=Tile.Empty shop=Shop.None />
      <Tile id="23" color=Tile.Empty shop=Shop.None />
      <BlankTile />
    </div>
    <div className="flex ma1">
      <Tile id="24" color=Tile.Empty shop=Shop.None />
      <Tile id="25" color=Tile.Empty shop=Shop.None />
      <BlankTile />
    </div>
    <div className="flex ma1">
      <Tile id="26" color=Tile.Empty shop=Shop.None />
      <Tile id="27" color=Tile.Empty shop=Shop.None />
      <BlankTile />
    </div>
  </div>;
