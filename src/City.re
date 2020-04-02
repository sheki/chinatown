[@react.component]
let make = (~state) =>
  <div className="flex flex-column items-center">
    <div className="flex justify-center bb">
      <ZoneOne state />
      <ZoneTwo state />
      <ZoneThree state />
      <ZoneFour state />
    </div>
    <div className="flex justify-center">
      <ZoneFive state />
      <ZoneSix state />
    </div>
  </div>;
