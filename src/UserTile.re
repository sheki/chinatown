open Players;

module Card = {
  [@react.component]
  let make = (~state: Response.state, ~playerNumber: string) => {
    let name = Response.findPlayerName(state, playerNumber);
    let src = "https://robohash.org/" ++ name ++ ".png?size=200x200&set=set5";

    let color = colorFromPlayer(playerNumber) |> toHTMLColor;
    let style = ReactDOMRe.Style.make(~color, ());

    <div className="flex ma1">
      <div style className="flex w4 flex-column items-center pa3 ma1">
        <img src />
        <h2 className="f3"> {ReasonReact.string(name)} </h2>
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
let make = (~state: Response.state) =>
  <div className="flex flex items-center pa2">
    {
      List.map(x => <Card key=x state playerNumber=x />, allPlayerNumbers)
      |> Array.of_list
      |> React.array
    }
  </div>;
