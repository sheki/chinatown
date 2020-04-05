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

  let buttons = player =>
    <div>
      <a
        className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue mr1"
        onClick={_ => addMoney(player, 10000)}>
        {ReasonReact.string("+10,000")}
      </a>
      <a
        className="f6 link dim br3 ph3 pv2 mb2 dib white bg-hot-pink"
        onClick={_ => addMoney(player, 10000)}>
        {ReasonReact.string("-10,000")}
      </a>
    </div>;

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
