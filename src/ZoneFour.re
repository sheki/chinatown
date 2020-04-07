open CityRow;
[@react.component]
let make = (~state, ~myTiles) =>
  <div className="flex flex-column">
    <CityRow
      state
      numbers=[Number(43), Number(44), Number(45), Number(46)]
      myTiles
    />
    <CityRow
      state
      numbers=[Number(47), Number(48), Number(49), Number(50)]
      myTiles
    />
    <CityRow
      state
      numbers=[Number(51), Number(52), Number(53), Number(54)]
      myTiles
    />
    <CityRow state numbers=[Blank, Blank, Number(55), Number(56)] myTiles />
    <CityRow state numbers=[Blank, Blank, Number(57), Number(58)] myTiles />
  </div>;
