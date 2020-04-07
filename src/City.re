[@react.component]
let make = (~state, ~myTiles) =>
  <div className="flex flex-column items-center">
    <div className="flex justify-center bb">
      <ZoneOne state myTiles />
      <ZoneTwo state myTiles />
      <ZoneThree state myTiles />
      <ZoneFour state myTiles />
    </div>
    <div className="flex justify-center">
      <ZoneFive state myTiles />
      <ZoneSix state myTiles />
    </div>
  </div>;
