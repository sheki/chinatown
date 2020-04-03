[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();
  switch (url.path) {
  | ["debug"] => <HelpBoard />
  | _ => <GameContainer />
  };
};
