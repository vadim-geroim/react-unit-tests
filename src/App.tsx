import { Rating, ratingValueType } from "./components/Rating";
import Switcher from "./components/Switcher";
import UncontrolledSwitcher from "./components/UncontrolledSwitcher";
import { useState } from "react";

export function App() {
  let [ratingValue, setRatingValue] = useState<ratingValueType>(1);

  return (
    <div>
      <Rating value={ratingValue} onClick={setRatingValue} />
      {/* <Switcher /> */}
      <UncontrolledSwitcher />
    </div>
  );
}
