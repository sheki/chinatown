[@react.component]
let make = (~state: Response.state) =>
  <div className="flex flex-column items-center pa4">
    <UserTile state />
    <ZoneOne />
  </div>;
