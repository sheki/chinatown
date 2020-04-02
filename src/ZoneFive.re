open CityRow;

[@react.component]
let make = (~state) =>
  <div className="flex flex-column br bw1">
    <div className="flex flex-column">
      <CityRow state numbers=[Number(59), Number(60), Blank] />
      <CityRow state numbers=[Number(61), Number(62), Blank] />
      <CityRow state numbers=[Number(63), Number(64), Number(65)] />
      <CityRow state numbers=[Number(66), Number(67), Number(68)] />
      <CityRow state numbers=[Blank, Number(69), Number(70)] />
    </div>
  </div>;
