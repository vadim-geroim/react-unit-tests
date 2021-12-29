import { useState } from "react";

export function UncontrolledRating() {
    const [rating, setRating] = useState(1);

    return (
        <div>
            <Star selected={rating > 0} order={1} setRating={setRating} />
            <Star selected={rating > 1} order={2} setRating={setRating} />
            <Star selected={rating > 2} order={3} setRating={setRating} />
            <Star selected={rating > 3} order={4} setRating={setRating} />
            <Star selected={rating > 4} order={5} setRating={setRating} />
            <br />
        </div>
    );
}

type StarType = {
    selected: boolean;
    order: 1 | 2 | 3 | 4 | 5;
    setRating: (value: 1 | 2 | 3 | 4 | 5) => void;
};


function Star(props: StarType) {
    const onClickHandler = () => {
        props.setRating(props.order);
    }

    return <span onClick={onClickHandler} >{props.selected ? <b>Star</b> : "Star"}</span>
}
