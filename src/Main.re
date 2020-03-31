[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();
  switch (url.path) {
  | ["debug"] =>
    <CardPicker numbers=[1, 24, 25, 63, 67, 22] onSubmit=(x => Js.log(x)) />
  | _ => <GameContainer />
  };
};
