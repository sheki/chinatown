module NumberCard = {
  [@react.component]
  let make = (~number, ~picked, ~onClick) => {
    let style =
      picked ?
        ReactDOMRe.Style.make(
          ~backgroundColor="#000000",
          ~color="#FFFFFF",
          (),
        ) :
        ReactDOMRe.Style.make();

    <div
      style
      className="w3 ba b1 br4 ma1 shadow-2 h2 ma2 flex flex-column justify-center item-center">
      <a onClick={_ => onClick(number)}>
        <div className="f3 tc">
          {ReasonReact.string(string_of_int(number))}
        </div>
      </a>
    </div>;
  };
};

[@react.component]
let make = (~numbers, ~onSubmit) => {
  let initialState: list((int, bool)) =
    numbers |> List.map(n => (n, false));

  let (state, setState) = React.useState(() => initialState);
  let (clicked, setClicked) = React.useState(() => []);

  let onClick = (picked: int) => {
    let newClicked =
      switch (clicked) {
      | [] => [picked]
      | [a] => [a, picked]
      | [_, b] => [b, picked]
      | _ => []
      };
    ();

    let newState: list((int, bool)) =
      numbers |> List.map(n => (n, List.exists(x => x == n, newClicked)));

    setState(_ => newState);
    setClicked(_ => newClicked);
    ();
  };

  let elems =
    state
    |> List.map(x => {
         let (n, b) = x;
         <NumberCard key={string_of_int(n)} number=n picked=b onClick />;
       });

  <div className="flex flex-column">
    {elems |> Array.of_list |> React.array}
    {
      List.length(clicked) == 2 ?
        <a
          className="w4 f6 link dim ph3 pv2 mb2 dib white bg-mid-gray"
          onClick={_ => onSubmit(clicked)}>
          {ReasonReact.string("Submit!")}
        </a> :
        <div className="w4 f6 link dim ba ph3 pv2 mb2 dib near-black">
          {ReasonReact.string("Discard Two")}
        </div>
    }
  </div>;
};
