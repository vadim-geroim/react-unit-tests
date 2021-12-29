import { useState } from "react";

type RatingType = {
    value: number;
};

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
    order: Number;
};


function Star(props: StarType) {
    const onClickHandler = (e) => {
        const rating = e.currentTarget.getAttribute('order');
        props.setRating(rating);
    }

    if (props.selected === true) {
        return (
            <span onClick={onClickHandler} order={props.order} >
                <b>Star</b>
            </ span >
        );
    } else {
        return <span onClick={onClickHandler} order={props.order}> Star</span >;
    }
}
