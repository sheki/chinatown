[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();
  switch (url.path) {
  | ["admin"] => <AdminBoard />
  | _ => <GameContainer />
  };
};
