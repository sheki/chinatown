open Players;

[@react.component]
let make = (~id: string, ~color: color, ~shop: Shop.shop, ~pink) => {
  let bgColor = toHTMLColor(color);
  let style = ReactDOMRe.Style.make(~backgroundColor=bgColor, ());
  let text =
    switch (shop) {
    | Shop.None => id
    | _ => Shop.toEmoji(shop)
    };
  let className =
    pink ?
      "ba b1 br4 shadow-2 w3 h3 ma1 flex flex-column justify-center item-center b--hot-pink" :
      "ba b1 br4 shadow-2 w3 h3 ma1 flex flex-column justify-center item-center";
  <div className style>
    <div className="f4 tc"> {ReasonReact.string(text)} </div>
  </div>;
};
