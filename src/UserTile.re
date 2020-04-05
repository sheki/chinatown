open Players;

let jsFormat: int => string = [%bs.raw
  {|
 function (number) {
   return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number);
 }
|}
];

module Card = {
  [@react.component]
  let make =
      (~state: Response.state, ~playerNumber: string, ~currentPlayerName) => {
    let name = Response.findPlayerName(state, playerNumber);
    let src = "https://robohash.org/" ++ name ++ ".png?size=200x200&set=set5";

    let color = colorFromPlayer(playerNumber) |> toHTMLColor;
    let style = ReactDOMRe.Style.make(~color, ());
    let cashStr =
      Response.getPlayerMOney(~state, ~playerName=currentPlayerName)
      |> jsFormat;

    Js.log3(currentPlayerName, name, cashStr);

    <div className="flex ma1">
      <div style className="flex w4 flex-column items-center pa3 ma1">
        <img src />
        <h2 className="f3"> {ReasonReact.string(name)} </h2>
        {
          currentPlayerName == name ?
            <div className="f2"> {ReasonReact.string(cashStr)} </div> :
            <div />
        }
      </div>
      <ShopTileDisplay state playerNumber />
    </div>;
  };
};

let allPlayerNumbers = [
  "PlayerOne",
  "PlayerTwo",
  "PlayerThree",
  "PlayerFour",
];

[@react.component]
let make = (~state: Response.state, ~playerName) =>
  <div className="flex flex items-center pa2">
    {
      List.map(
        x => <Card key=x state playerNumber=x currentPlayerName=playerName />,
        allPlayerNumbers,
      )
      |> Array.of_list
      |> React.array
    }
  </div>;
