open CityRow;

[@react.component]
let make = (~state, ~myTiles) =>
  <div className="flex flex-column">
    <CityRow
      state
      numbers=[Number(71), Number(72), Number(73), Number(74)]
      myTiles
    />
    <CityRow
      state
      numbers=[Number(75), Number(76), Number(77), Number(78)]
      myTiles
    />
    <CityRow
      state
      numbers=[Number(79), Number(80), Number(81), Number(82)]
      myTiles
    />
    <CityRow
      state
      numbers=[Number(83), Number(84), Number(85), Blank]
      myTiles
    />
  </div>;
