open CityRow;

[@react.component]
let make = (~state) =>
  <div className="flex flex-column">
    <CityRow
      state
      numbers=[Number(71), Number(72), Number(73), Number(74)]
    />
    <CityRow
      state
      numbers=[Number(75), Number(76), Number(77), Number(78)]
    />
    <CityRow
      state
      numbers=[Number(79), Number(80), Number(81), Number(82)]
    />
    <CityRow state numbers=[Number(83), Number(84), Number(85), Blank] />
  </div>;
