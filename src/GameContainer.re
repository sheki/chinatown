open Response;

type gameState =
  | NoGameState
  | GameState(state);

let shouldUpdateGameState = (~s: state, ~gs: gameState) =>
  switch (gs) {
  | NoGameState => true
  | GameState(old) => old.version < s.version
  };

let gameTime = (~gs: state, ~playerName: string, ~setGameState) =>
  if (gs.year == 0) {
    <WaitingOnOthers />;
  } else {
    switch (gs.phase) {
    | "PickTiles" => <Board state=gs playerName setGameState />
    | "OpenMarket" => <Board state=gs playerName setGameState />
    | _ => <div> {ReasonReact.string("WTF")} </div>
    };
  };

[@react.component]
let make = () => {
  let (playerNumber, setPlayerNumber) = React.useState(() => "");
  let (playerName, setPlayerName) = React.useState(() => "");

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
    let timerId = Js.Global.setInterval(() => refreshState(), 10000);
    Some(() => Js.Global.clearInterval(timerId));
  });

  let onNameSubmit = (~n: string) => {
    Api.registerPlayer(n)
    |> Js.Promise.then_(s => {
         setPlayerName(_ => n);
         setPlayerNumber(_ => findPlayerNumber(s, n));
         setGameState(_ => GameState(s));
         Js.Promise.resolve();
       })
    |> ignore;
    ();
  };

  if (playerNumber == "") {
    <AddPlayers onNameSubmit />;
  } else {
    switch (gameState) {
    | NoGameState => <AddPlayers onNameSubmit />
    | GameState(gs) => gameTime(gs, playerName, setGameStateGlobal)
    };
  };
};
