open CityRow;

[@react.component]
let make = (~state, ~myTiles) =>
  <div className="flex flex-column br bw1">
    <div className="flex flex-column">
      <CityRow state numbers=[Number(59), Number(60), Blank] myTiles />
      <CityRow state numbers=[Number(61), Number(62), Blank] myTiles />
      <CityRow
        state
        numbers=[Number(63), Number(64), Number(65)]
        myTiles
      />
      <CityRow
        state
        numbers=[Number(66), Number(67), Number(68)]
        myTiles
      />
      <CityRow state numbers=[Blank, Number(69), Number(70)] myTiles />
    </div>
  </div>;
