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

let toHTMLColor = (c: color) =>
  switch (c) {
  | Red => "#E7040F"
  | Yellow => "#FFD700"
  | Blue => "#357EDD"
  | Empty => "#F4F4F4"
  | Green => "#19A974"
  };

let colorFromPlayer = c =>
  switch (c) {
  | "PlayerOne" => Red
  | "PlayerTwo" => Yellow
  | "PlayerThree" => Green
  | "PlayerFour" => Blue
  | _ => Empty
  };
