[@react.component]
let make = () =>
  <div className="flex flex-column items-center">
    <div className="flex justify-center bb">
      <ZoneOne />
      <ZoneTwo />
      <ZoneThree />
      <ZoneFour />
    </div>
    <div className="flex justify-center"> <ZoneFive /> <ZoneSix /> </div>
  </div>;
