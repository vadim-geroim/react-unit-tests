import { Rating, ratingValueType } from "./components/Rating";
import { useState } from "react";

export function App() {
  let [ratingValue, setRatingValue] = useState<ratingValueType>(1);

  return (
    <div>
      <Rating value={ratingValue} onClick={setRatingValue} />
    </div>
  );
}
