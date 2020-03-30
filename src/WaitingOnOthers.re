let pickName = (~i) =>
  switch (i) {
  | 0 => "Ambasaador"
  | 1 => "Maruti"
  | 2 => "Padmini"
  | _ => "Noop"
  };

[@react.component]
let make = () => {
  Random.self_init();
  let (roboName, setRoboName) = React.useState(() => "OK");

  React.useEffect0(() => {
    let timerId =
      Js.Global.setInterval(
        () => {
          let name: string = pickName(Random.int(3));
          setRoboName(_ => name);
          ();
        },
        3000,
      );
    Some(() => Js.Global.clearInterval(timerId));
  });

  let src = "https://robohash.org/" ++ roboName ++ ".png?size=200x200";

  <div className="flex flex-column pa3 items-center">
    <h2 className="f2">
      {ReasonReact.string("Waiting for other players")}
    </h2>
    <img className="ba" src />
  </div>;
};
