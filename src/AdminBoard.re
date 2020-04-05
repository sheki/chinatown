open GameContainer;

[@react.component]
let make = () => {
  let (state, setState) = React.useState(() => (0, ""));
  let (gameState, setGameState) = React.useState(() => NoGameState);

  let onChange = (e: ReactEvent.Form.t): unit => {
    let value = e->ReactEvent.Form.target##value;
    switch (value) {
    | "" => setState(((_, y)) => (0, y))
    | _ => setState(((_, y)) => (int_of_string(value), y))
    };
  };
  let refreshState = () => {
    Api.getState()
    |> Js.Promise.then_(s => {
         setGameState(_ => GameState(s));
         Js.Promise.resolve();
       })
    |> ignore;
    ();
  };

  React.useEffect0(() => {
    refreshState();
    None;
  });

  let onChangeSelect = (e: ReactEvent.Form.t): unit => {
    let value = e->ReactEvent.Form.target##value;
    setState(((x, _)) => (x, value));
  };

  let onSubmit = (e: ReactEvent.Form.t): unit => {
    ReactEvent.Form.preventDefault(e);
    let (number, player) = state;
    Api.setOwnership(player, number)
    |> Js.Promise.then_(s => {
         setGameState(_ => GameState(s));
         Js.Promise.resolve();
       })
    |> ignore;
  };

  let (number, player) = state;
  switch (gameState) {
  | NoGameState => <div> {ReasonReact.string("loading")} </div>
  | GameState(gs) =>
    <div className="flex pa2">
      <div className="flex flex-column w-25">
        <form className="center pa4 br2-ns ba b--black-10" onSubmit>
          <input type_="number" value={string_of_int(number)} onChange />
          <select value=player onChange=onChangeSelect>
            <option value="PlayerOne">
              {React.string(Response.findPlayerName(gs, "PlayerOne"))}
            </option>
            <option value="PlayerTwo">
              {React.string(Response.findPlayerName(gs, "PlayerTwo"))}
            </option>
            <option value="PlayerThree">
              {React.string(Response.findPlayerName(gs, "PlayerThree"))}
            </option>
            <option value="PlayerFour">
              {React.string(Response.findPlayerName(gs, "PlayerFour"))}
            </option>
          </select>
          <input value="Submit" type_="submit" />
        </form>
        <AdminShopAllocate
          setGameState=(x => setGameState(_ => GameState(x)))
        />
      </div>
      <AdminShop
        state=gs
        setGameState=(x => setGameState(_ => GameState(x)))
      />
      <AdminMoney
        state=gs
        setGameState=(x => setGameState(_ => GameState(x)))
      />
    </div>
  };
};
