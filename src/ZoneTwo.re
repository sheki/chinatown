open CityRow;
[@react.component]
let make = (~state) =>
  <div className="flex flex-column">
    <CityRow state numbers=[Number(16), Number(17), Number(18)] />
    <CityRow state numbers=[Number(19), Number(20), Number(21)] />
    <CityRow state numbers=[Number(22), Number(23), Blank] />
    <CityRow state numbers=[Number(24), Number(25), Blank] />
    <CityRow state numbers=[Number(26), Number(27), Blank] />
  </div>;
