open CityRow;
[@react.component]
let make = (~state, ~myTiles) =>
  <div className="flex flex-column br bw1">
    <CityRow state numbers=[Number(16), Number(17), Number(18)] myTiles />
    <CityRow state numbers=[Number(19), Number(20), Number(21)] myTiles />
    <CityRow state numbers=[Number(22), Number(23), Blank] myTiles />
    <CityRow state numbers=[Number(24), Number(25), Blank] myTiles />
    <CityRow state numbers=[Number(26), Number(27), Blank] myTiles />
  </div>;
