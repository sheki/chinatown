[@react.component]
let make = (~name: string) => {
  let src = "https://robohash.org/" ++ name ++ ".png?size=200x200";
  <div className="flex w4 flex-column items-center pa3">
    <h2 className="f3"> {ReasonReact.string(name)} </h2>
  </div>;
};
