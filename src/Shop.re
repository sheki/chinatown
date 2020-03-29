type shop =
  | Antique
  | Dimsum
  | Factory
  | Fish
  | Florist
  | Jewellery
  | Laundry
  | Photo
  | Takeout
  | Tea
  | None;

let toEmoji = (s: shop) =>
  switch (s) {
  | Antique => {js|🗝️|js}
  | Dimsum => {js|🥟|js}
  | Factory => {js|🏭|js}
  | Fish => {js|🐠|js}
  | Florist => {js|🌼|js}
  | Jewellery => {js|💍|js}
  | Laundry => {js|👚|js}
  | Photo => {js|📷|js}
  | Takeout => {js|🥡|js}
  | Tea => {js|☕|js}
  | None => {js||js}
  };
