open GameContainer;

[@react.component]
let make = (~state, ~setGameState) => {
  let players = ["PlayerOne", "PlayerTwo", "PlayerThree", "PlayerFour"];

  let addMoney = (player, i) =>
    Api.addMoney(player, i)
    |> Js.Promise.then_(s => {
         setGameState(s);
         Js.Promise.resolve();
       })
    |> ignore;

  let monies = [
    10,
    000,
    (-10),
    000,
    50,
    000,
    (-50),
    000,
    100,
    000 - 100,
    000,
  ];

  let buttons = player => {
    let x =
      monies
      |> List.map(m => {
           let color = m > 0 ? "bg-dark-blue" : "bg-hot-pink";
           <a
             key={string_of_int(m)}
             className={"f6 link dim br3 ph3 pv2 mb2 dib white mr1 " ++ color}
             onClick={_ => addMoney(player, m)}>
             {ReasonReact.string(string_of_int(m))}
           </a>;
         })
      |> Array.of_list
      |> React.array;

    <div> x </div>;
  };

  <table className="collapse ma2 ba br2 b--black-10 pv2 ph3">
    <tbody>
      {
        players
        |> List.map(x =>
             <tr key=x className="striped--light-gray">
               <td className="pv2 ph3">
                 {React.string(Response.findPlayerName(state, x))}
               </td>
               <td className="pv2 ph3"> {buttons(x)} </td>
             </tr>
           )
        |> Array.of_list
        |> React.array
      }
    </tbody>
  </table>;
};
