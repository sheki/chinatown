module Card = {
  [@react.component]
  let make =
      (
        ~state: Response.state,
        ~playerNumber: string,
        ~currentPlayerName: string,
      ) => {
    let name = Response.findPlayerName(state, playerNumber);
    let src = "https://robohash.org/" ++ name ++ ".png?size=200x200&set=set5";

    let style =
      if (currentPlayerName == name) {
        ReactDOMRe.Style.make(
          ~backgroundColor="#000000",
          ~color="#FFFFFF",
          (),
        );
      } else {
        ReactDOMRe.Style.make();
      };

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
let make = (~state: Response.state, ~playerName) =>
  <div className="flex flex items-center pa2">
    {
      List.map(
        x => <Card key=x currentPlayerName=playerName state playerNumber=x />,
        allPlayerNumbers,
      )
      |> Array.of_list
      |> React.array
    }
  </div>;
