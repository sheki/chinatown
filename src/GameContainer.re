[@react.component]
let make = () => {
  let (playerNumber, setPlayerNumber) = React.useState(() => "");
  let (playerName, setPlayerName) = React.useState(() => "");
  let onNameSubmit = (n: string) => {
    Api.registerPlayer(n)
    |> Js.Promise.then_(_ => {
         setPlayerName(_ => playerName);
         setPlayerNumber(_ => "1");
         Js.Promise.resolve();
       });
    ();
  };
  switch (playerNumber) {
  | "" => <AddPlayers onNameSubmit />
  | _ => <ZoneOne />
  };
};
