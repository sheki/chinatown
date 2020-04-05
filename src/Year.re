[@react.component]
let make = (~year) => {
  let t =
    switch (year) {
    | 1 => {js|🐀|js}
    | 2 => {js|🐀🐂|js}
    | 3 => {js|🐀🐂🐯|js}
    | 4 => {js|🐀🐂🐯🐰|js}
    | 5 => {js|🐀🐂🐯🐰🐲|js}
    | 6 => {js|🐀🐂🐯🐰🐲🐍|js}
    | _ => ""
    };
  <div className="f2"> {ReasonReact.string("Year: " ++ t)} </div>;
};
