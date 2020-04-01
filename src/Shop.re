type shop =
  | Restaurant
  | Antique
  | Factory
  | Dimsum
  | Laundry
  | Takeout
  | Fish
  | Florist
  | Jewellery
  | Photo
  | Seafood
  | Tea
  | None;

let fromString = (s: string) =>
  switch (s) {
  | "Restaurant" => Restaurant
  | "Antique" => Antique
  | "Factory" => Factory
  | "Dimsum" => Dimsum
  | "Laundry" => Laundry
  | "Takeout" => Takeout
  | "Fish" => Fish
  | "Florist" => Florist
  | "Jewellery" => Jewellery
  | "Photo" => Photo
  | "Seafood" => Seafood
  | "Tea" => Tea
  | _ => None
  };

let toEmoji = (s: shop) =>
  switch (s) {
  | Antique => {js|🗝️|js}
  | Seafood => {js|🦀|js}
  | Dimsum => {js|🥟|js}
  | Factory => {js|🏭|js}
  | Fish => {js|🐠|js}
  | Florist => {js|🌼|js}
  | Jewellery => {js|💍|js}
  | Laundry => {js|👚|js}
  | Photo => {js|📷|js}
  | Takeout => {js|🥡|js}
  | Tea => {js|☕|js}
  | Restaurant => {js|🍟|js}
  | None => {js||js}
  };
