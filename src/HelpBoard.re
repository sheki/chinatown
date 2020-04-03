open Shop;

[@react.component]
let make = () => {
  let all = [
    (Restaurant, 6),
    (Antique, 6),
    (Factory, 6),
    (Dimsum, 5),
    (Laundry, 5),
    (Takeout, 5),
    (Fish, 4),
    (Florist, 4),
    (Jewellery, 4),
    (Photo, 3),
    (Seafood, 3),
    (Tea, 3),
  ];
  let divs =
    all
    |> List.map(((x, y)) => {
         let str = toString(x) ++ " " ++ toEmoji(x);
         <tr key=str className="striped--light-gray">
           <td className="pv2 ph3"> {React.string(str)} </td>
           <td className="pv2 ph3"> {React.string(string_of_int(y))} </td>
         </tr>;
       })
    |> Array.of_list
    |> React.array;

  <div className="flex justify-center">
    <table className="collapse ma2 ba br2 b--black-10 pv2 ph3">
      <tbody> divs </tbody>
    </table>
    <table className="collapse ma2 ba br2 b--black-10 pv2 ph3">
      <tbody>
        <tr className="striped--light-gray ">
          <td className="pv2 ph3"> {React.string("Bussiness")} </td>
          <td className="pv2 ph3"> {React.string("1")} </td>
          <td className="pv2 ph3"> {React.string("2")} </td>
          <td className="pv2 ph3"> {React.string("3")} </td>
          <td className="pv2 ph3"> {React.string("4")} </td>
          <td className="pv2 ph3"> {React.string("5")} </td>
          <td className="pv2 ph3"> {React.string("6")} </td>
        </tr>
        <tr className="striped--light-gray ">
          <td className="pv2 ph3"> {React.string("incomplete")} </td>
          <td className="pv2 ph3"> {React.string("10,000")} </td>
          <td className="pv2 ph3"> {React.string("20,000")} </td>
          <td className="pv2 ph3"> {React.string("40,000")} </td>
          <td className="pv2 ph3"> {React.string("60,000")} </td>
          <td className="pv2 ph3"> {React.string("80,000")} </td>
          <td className="pv2 ph3"> {React.string("-")} </td>
        </tr>
        <tr className="striped--light-gray ">
          <td className="pv2 ph3"> {React.string("complete")} </td>
          <td className="pv2 ph3"> {React.string("-")} </td>
          <td className="pv2 ph3"> {React.string("-")} </td>
          <td className="pv2 ph3"> {React.string("50,000")} </td>
          <td className="pv2 ph3"> {React.string("80,000")} </td>
          <td className="pv2 ph3"> {React.string("110,000")} </td>
          <td className="pv2 ph3"> {React.string("140,000")} </td>
        </tr>
      </tbody>
    </table>
  </div>;
};
