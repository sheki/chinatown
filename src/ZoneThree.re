open CityRow;

[@react.component]
let make = (~state) =>
  <div className="flex flex-column br bw1">
    <CityRow state numbers=[Number(28), Number(29), Number(30), Blank] />
    <CityRow state numbers=[Number(31), Number(32), Number(33), Blank] />
    <CityRow state numbers=[Number(34), Number(35), Number(36), Blank] />
    <CityRow state numbers=[Blank, Number(37), Number(38), Number(39)] />
    <CityRow state numbers=[Blank, Number(40), Number(41), Number(42)] />
  </div>;
