type color =
  | Red
  | Yellow
  | Green
  | Blue
  | Empty;

let colorToString = c =>
  switch (c) {
  | Red => "red"
  | Yellow => "yellow"
  | Green => "green"
  | Blue => "blue"
  | Empty => "empty"
  };

let colorFromPlayer = c =>
  switch (c) {
  | "PlayerOne" => Red
  | "PlayerTwo" => Yellow
  | "PlayerThree" => Green
  | "PlayerFour" => Blue
  | _ => Empty
  };
