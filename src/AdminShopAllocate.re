open Shop;
[@react.component]
let make = (~setGameState) => {
  let (shop, setShop) = React.useState(() => None);
  let (tile, setTile) = React.useState(() => 0);

  let onNumChange = (e: ReactEvent.Form.t): unit => {
    let value = e->ReactEvent.Form.target##value;
    switch (value) {
    | "" => setTile(_ => 0)
    | x => setTile(_ => int_of_string(x))
    };
  };

  let onSubmit = (e: ReactEvent.Form.t): unit => {
    ReactEvent.Form.preventDefault(e);
    Api.setTile(toString(shop), tile)
    |> Js.Promise.then_(s => {
         setGameState(s);
         Js.Promise.resolve();
       })
    |> ignore;
  };

  let selects =
    allShops
    |> List.map(x => {
         let bgColor = x == shop ? "#FFDFDF" : "#F4F4F4";
         let style = ReactDOMRe.Style.make(~backgroundColor=bgColor, ());
         let text = toEmoji(x);
         <a key=text onClick={_ => setShop(_ => x)}>
           <div
             style
             className="ba b1 br4 shadow-2 w3 h3 ma1 flex flex-column justify-center item-center">
             <div className="f4 tc"> {ReasonReact.string(text)} </div>
           </div>
         </a>;
       })
    |> Array.of_list
    |> React.array;

  <div className="flex flex-column pa1">
    <form className="center pa1 br2-ns ba b--black-10" onSubmit>
      <div className="flex flex-wrap"> selects </div>
      <input
        type_="number"
        value={string_of_int(tile)}
        onChange=onNumChange
      />
      <input value="Submit" type_="submit" />
    </form>
  </div>;
};
