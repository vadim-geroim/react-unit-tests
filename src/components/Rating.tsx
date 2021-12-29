export type ratingValueType = 1 | 2 | 3 | 4 | 5;

type RatingType = {
  value: ratingValueType;
  onClick: (value: ratingValueType) => void;
};

export function Rating(props: RatingType) {
  return (
    <div>
      <Star selected={props.value > 0} onClick={() => props.onClick(1)} />
      <Star selected={props.value > 1} onClick={() => props.onClick(2)} />
      <Star selected={props.value > 2} onClick={() => props.onClick(3)} />
      <Star selected={props.value > 3} onClick={() => props.onClick(4)} />
      <Star selected={props.value > 4} onClick={() => props.onClick(5)} />
      <br />
    </div>
  );
}

type StarType = {
  selected: boolean;
  onClick: () => void;
};

function Star(props: StarType) {
  return (
    <span onClick={props.onClick}>{props.selected ? <b>Star</b> : "Star"}</span>
  );
}
