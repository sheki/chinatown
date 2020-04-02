open CityRow;
[@react.component]
let make = (~state) =>
  <div className="flex flex-column br bw1">
    <CityRow state numbers=[Blank, Number(1), Number(2), Blank] />
    <CityRow state numbers=[Blank, Number(3), Number(4), Number(5)] />
    <CityRow state numbers=[Number(6), Number(7), Number(8), Number(9)] />
    <CityRow state numbers=[Number(10), Number(11), Number(12), Blank] />
    <CityRow state numbers=[Number(13), Number(14), Number(15), Blank] />
  </div>;
