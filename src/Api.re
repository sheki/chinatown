let url = "https://chinabackend.onrender.com/";

let registerPlayer = (~name) => {
  let payload = Js.Dict.empty();
  Js.Dict.set(payload, "name", Js.Json.string(name));
  Js.Promise.(
    Fetch.fetchWithInit(
      url ++ "registerPlayer",
      Fetch.RequestInit.make(
        ~method_=Post,
        ~body=
          Fetch.BodyInit.make(Js.Json.stringify(Js.Json.object_(payload))),
        ~headers=Fetch.HeadersInit.make({"Content-Type": "application/json"}),
        (),
      ),
    )
    |> then_(Fetch.Response.json)
    |> then_(j => resolve(Response.Decode.state(j)))
  );
};

let getState = () =>
  Js.Promise.(
    Fetch.fetchWithInit(
      url ++ "state",
      Fetch.RequestInit.make(~method_=Get, ()),
    )
    |> then_(Fetch.Response.json)
    |> then_(j => resolve(Response.Decode.state(j)))
  );

let setOwnership = (player: string, number: int) => {
  let payload = Js.Dict.empty();
  Js.Dict.set(payload, "Player", Js.Json.string(player));
  Js.Dict.set(payload, "TileNumber", Js.Json.number(float_of_int(number)));

  Js.Promise.(
    Fetch.fetchWithInit(
      url ++ "setOwnership",
      Fetch.RequestInit.make(
        ~method_=Post,
        ~body=
          Fetch.BodyInit.make(Js.Json.stringify(Js.Json.object_(payload))),
        ~headers=Fetch.HeadersInit.make({"Content-Type": "application/json"}),
        (),
      ),
    )
    |> then_(Fetch.Response.json)
    |> then_(j => resolve(Response.Decode.state(j)))
  );
};

let returnTiles = (~player: string, ~numbers: list(int)) => {
  let payload = Js.Dict.empty();
  let js_arr = numbers |> List.map(x => float_of_int(x)) |> Array.of_list;
  Js.Dict.set(payload, "Player", Js.Json.string(player));
  Js.Dict.set(payload, "Tiles", Js.Json.numberArray(js_arr));

  Js.Promise.(
    Fetch.fetchWithInit(
      url ++ "returnTile",
      Fetch.RequestInit.make(
        ~method_=Post,
        ~body=
          Fetch.BodyInit.make(Js.Json.stringify(Js.Json.object_(payload))),
        ~headers=Fetch.HeadersInit.make({"Content-Type": "application/json"}),
        (),
      ),
    )
    |> then_(Fetch.Response.json)
    |> then_(j => resolve(Response.Decode.state(j)))
  );
};

let addTileCount = (~player: string, shop: string, count: int) => {
  let payload = Js.Dict.empty();
  Js.Dict.set(payload, "Player", Js.Json.string(player));
  Js.Dict.set(payload, "Shop", Js.Json.string(shop));
  Js.Dict.set(payload, "Count", Js.Json.number(float_of_int(count)));

  Js.Promise.(
    Fetch.fetchWithInit(
      url ++ "addTileCount",
      Fetch.RequestInit.make(
        ~method_=Post,
        ~body=
          Fetch.BodyInit.make(Js.Json.stringify(Js.Json.object_(payload))),
        ~headers=Fetch.HeadersInit.make({"Content-Type": "application/json"}),
        (),
      ),
    )
    |> then_(Fetch.Response.json)
    |> then_(j => resolve(Response.Decode.state(j)))
  );
};

let addMoney = (player: string, m: int) => {
  let payload = Js.Dict.empty();
  Js.Dict.set(payload, "Player", Js.Json.string(player));
  Js.Dict.set(payload, "Money", Js.Json.number(float_of_int(m)));

  Js.Promise.(
    Fetch.fetchWithInit(
      url ++ "addMoney",
      Fetch.RequestInit.make(
        ~method_=Post,
        ~body=
          Fetch.BodyInit.make(Js.Json.stringify(Js.Json.object_(payload))),
        ~headers=Fetch.HeadersInit.make({"Content-Type": "application/json"}),
        (),
      ),
    )
    |> then_(Fetch.Response.json)
    |> then_(j => resolve(Response.Decode.state(j)))
  );
};

let setTile = (s: string, m: int) => {
  let payload = Js.Dict.empty();
  Js.Dict.set(payload, "Shop", Js.Json.string(s));
  Js.Dict.set(payload, "Number", Js.Json.number(float_of_int(m)));

  Js.Promise.(
    Fetch.fetchWithInit(
      url ++ "setTile",
      Fetch.RequestInit.make(
        ~method_=Post,
        ~body=
          Fetch.BodyInit.make(Js.Json.stringify(Js.Json.object_(payload))),
        ~headers=Fetch.HeadersInit.make({"Content-Type": "application/json"}),
        (),
      ),
    )
    |> then_(Fetch.Response.json)
    |> then_(j => resolve(Response.Decode.state(j)))
  );
};

let endYear = () => {
  let payload = Js.Dict.empty();

  Js.Promise.(
    Fetch.fetchWithInit(
      url ++ "endYear",
      Fetch.RequestInit.make(
        ~method_=Post,
        ~body=
          Fetch.BodyInit.make(Js.Json.stringify(Js.Json.object_(payload))),
        ~headers=Fetch.HeadersInit.make({"Content-Type": "application/json"}),
        (),
      ),
    )
    |> then_(Fetch.Response.json)
    |> then_(j => resolve(Response.Decode.state(j)))
  );
};
