open Response;

type gameState =
  | NoGameState
  | GameState(state);

let shouldUpdateGameState = (~s: state, ~gs: gameState) =>
  switch (gs) {
  | NoGameState => true
  | GameState(old) => old.version < s.version
  };

let gameTime = (gs: state, playerName: string, setGameState, onNameSubmit) => {
  let playerNumber = findPlayerNumber(gs, playerName);
  if (gs.year == 0) {
    if (playerNumber == "") {
      <AddPlayers onNameSubmit />;
    } else {
      <WaitingOnOthers />;
    };
  } else {
    switch (gs.phase) {
    | "PickTiles" => <Board state=gs playerName setGameState />
    | "OpenMarket" => <Board state=gs playerName setGameState />
    | _ => <div> {ReasonReact.string("WTF")} </div>
    };
  };
};

[@react.component]
let make = () => {
  let getNameFromStorage = () => {
    let x =
      Belt.Option.getWithDefault(
        Dom.Storage.(localStorage |> getItem("name")),
        "",
      );
    x;
  };

  let (playerName, setPlayerName) =
    React.useState(() => getNameFromStorage());

  React.useEffect1(
    () => {
      Dom.Storage.(localStorage |> setItem("name", playerName));
      None;
    },
    [|playerName|],
  );

  let (gameState, setGameState) = React.useState(() => NoGameState);

  let refreshState = () => {
    Api.getState()
    |> Js.Promise.then_(s => {
         if (shouldUpdateGameState(s, gameState)) {
           setGameState(_ => GameState(s));
         };
         Js.Promise.resolve();
       })
    |> ignore;
    ();
  };

  let setGameStateGlobal = xs => setGameState(_ => GameState(xs));

  React.useEffect0(() => {
    let timerId = Js.Global.setInterval(() => refreshState(), 3000);
    Some(() => Js.Global.clearInterval(timerId));
  });

  let onNameSubmit = (~n: string) => {
    // TODO show some loading state
    Api.registerPlayer(n)
    |> Js.Promise.then_(s => {
         setPlayerName(_ => n);
         setGameState(_ => GameState(s));
         Js.Promise.resolve();
       })
    |> ignore;
    ();
  };

  switch (gameState) {
  | NoGameState => <AddPlayers onNameSubmit />
  | GameState(gs) =>
    gameTime(gs, playerName, setGameStateGlobal, onNameSubmit)
  };
};
