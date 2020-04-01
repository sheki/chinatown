type color =
  | Red
  | Yellow
  | Green
  | Blue
  | Empty;

let toHTMLColor = (c: color) =>
  switch (c) {
  | Red => "#E7040F"
  | Yellow => "#FFD700"
  | Blue => "#357EDD"
  | Empty => "#F4F4F4"
  | Green => "#19A974"
  };

[@react.component]
let make = (~id: string, ~color: color, ~shop: Shop.shop) => {
  let bgColor = toHTMLColor(color);
  let style = ReactDOMRe.Style.make(~backgroundColor=bgColor, ());
  let text =
    switch (shop) {
    | Shop.None => id
    | _ => Shop.toEmoji(shop)
    };
  <div
    style
    className="ba b1 br4 shadow-2 w3 h3 ma1 flex flex-column justify-center item-center">
    <div className="f4 tc"> {ReasonReact.string(text)} </div>
  </div>;
};
