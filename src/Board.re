[@react.component]
let make = (~state: Response.state, ~playerName: string) =>
  <div className="flex flex-column items-center pa4">
    <UserTile state playerName />
    <ZoneOne />
  </div>;
