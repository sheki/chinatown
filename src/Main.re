[@bs.val] external alert: string => unit = "alert";

[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();
  alert(String.concat(",", url.path));
  switch (url.path) {
  | ["add"] => <AddPlayers />
  | ["add", _] => <AddPlayers />
  | _ => <ZoneOne />
  };
};
