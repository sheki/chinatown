let url = "http://localhost:8080/";

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

let getState = (~name) => {
  let payload = Js.Dict.empty();
  Js.Promise.(
    Fetch.fetchWithInit(
      url ++ "state",
      Fetch.RequestInit.make(~method_=Get, ()),
    )
    |> then_(Fetch.Response.json)
    |> then_(j => resolve(Response.Decode.state(j)))
  );
};
