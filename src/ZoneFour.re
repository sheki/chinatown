open CityRow;
[@react.component]
let make = (~state) =>
  <div className="flex flex-column">
      <CityRow
        state
        numbers=[Number(43), Number(44), Number(45), Number(46)]
      />
      <CityRow
        state
        numbers=[Number(47), Number(48), Number(49), Number(50)]
      />
      <CityRow
        state
        numbers=[Number(51), Number(52), Number(53), Number(54)]
      />
      <CityRow state numbers=[Blank, Blank, Number(55), Number(56)] />
      <CityRow state numbers=[Blank, Blank, Number(57), Number(58)] />
  </div>;
