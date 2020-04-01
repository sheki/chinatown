module Card = {
  [@react.component]
  let make = (~name: string, ~playerName: string) => {
    let src = "https://robohash.org/" ++ name ++ ".png?size=200x200&set=set5";
    let style =
      ReactDOMRe.Style.make(~backgroundColor="#000000", ~color="#FFFFFF", ());

    if (playerName == name) {
      <div style className="flex w4 flex-column items-center pa3 ma1">
        <img src />
        <h2 className="f3"> {ReasonReact.string(name)} </h2>
      </div>;
    } else {
      <div className="flex w4 flex-column items-center pa3 ma1">
        <img src />
        <h2 className="f3"> {ReasonReact.string(name)} </h2>
      </div>;
    };
  };
};

[@react.component]
let make = (~state: Response.state, ~playerName) =>
  <div className="flex flex items-center pa2">
    <Card name={state.players.playerOne} playerName />
    <Card name={state.players.playerTwo} playerName />
    <Card name={state.players.playerThree} playerName />
    <Card name={state.players.playerFour} playerName />
  </div>;
