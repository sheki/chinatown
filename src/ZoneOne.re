open CityRow;
[@react.component]
let make = (~state, ~myTiles) =>
  <div className="flex flex-column br bw1">
    <CityRow state numbers=[Blank, Number(1), Number(2), Blank] myTiles />
    <CityRow
      state
      numbers=[Blank, Number(3), Number(4), Number(5)]
      myTiles
    />
    <CityRow
      state
      numbers=[Number(6), Number(7), Number(8), Number(9)]
      myTiles
    />
    <CityRow
      state
      numbers=[Number(10), Number(11), Number(12), Blank]
      myTiles
    />
    <CityRow
      state
      numbers=[Number(13), Number(14), Number(15), Blank]
      myTiles
    />
  </div>;
