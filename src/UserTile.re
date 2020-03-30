module Card = {
  [@react.component]
  let make = (~name: string) => {
    let src = "https://robohash.org/" ++ name ++ ".png?size=200x200";
    <div className="flex w4 flex-column items-center pa3 ma1">
      <img src />
      <h2 className="f3"> {ReasonReact.string(name)} </h2>
    </div>;
  };
};
[@react.component]
let make = (~state: Response.state) =>
  <div className="flex flex items-center pa2">
    <Card name={state.players.playerOne} />
    <Card name={state.players.playerTwo} />
    <Card name={state.players.playerThree} />
    <Card name={state.players.playerFour} />
  </div>;
