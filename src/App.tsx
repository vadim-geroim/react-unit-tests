import { Rating, ratingValueType } from "./components/Rating";
import Switcher from "./components/Switcher";
import UncontrolledSwitcher from "./components/UncontrolledSwitcher";
import { useState } from "react";

export function App() {
  let [ratingValue, setRatingValue] = useState<ratingValueType>(1);
  let [switcherValue, setSwitcherValue] = useState(false);

  return (
    <div>
      <Rating value={ratingValue} onClick={setRatingValue} />
      <Switcher value={switcherValue} setSwitcherValue={setSwitcherValue} />
      <UncontrolledSwitcher />
    </div>
  );
}
