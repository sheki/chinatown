open Shop;
[@react.component]
let make = (~state, ~setGameState) => {
  let players = ["PlayerOne", "PlayerTwo", "PlayerThree", "PlayerFour"];

  let shops = allShops;
  let addTileCount = (s, player, i) =>
    Api.addTileCount(player, toString(s), i)
    |> Js.Promise.then_(s => {
         setGameState(s);
         Js.Promise.resolve();
       })
    |> ignore;

  let buttons = (s, player) =>
    <div>
      <a
        className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue mr1"
        onClick={_ => addTileCount(s, player, 1)}>
        {ReasonReact.string("+1")}
      </a>
      <a
        className="f6 link dim br3 ph3 pv2 mb2 dib white bg-hot-pink"
        onClick={_ => addTileCount(s, player, -1)}>
        {ReasonReact.string("-1")}
      </a>
    </div>;

  let buttonRows = s =>
    players
    |> List.map(x => <td key=x className="pv2 ph3"> {buttons(s, x)} </td>)
    |> Array.of_list
    |> React.array;

  <table className="collapse ma2 ba br2 b--black-10 pv2 ph3">
    <tbody>
      <tr className="striped--light-gray">
        <td className="pv2 ph3"> {React.string(" ")} </td>
        {
          players
          |> List.map(x =>
               <td key=x className="pv2 ph3">
                 {React.string(Response.findPlayerName(state, x))}
               </td>
             )
          |> Array.of_list
          |> React.array
        }
      </tr>
      {
        shops
        |> List.map(x =>
             <tr key={toString(x)} className="striped--light-gray">
               <td className="pv2 ph3 f2"> {React.string(toEmoji(x))} </td>
               {buttonRows(x)}
             </tr>
           )
        |> Array.of_list
        |> React.array
      }
    </tbody>
  </table>;
};
