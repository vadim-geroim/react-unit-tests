type TypeArr = {
    arr: Array<TypePeson>;
}

type TypePerson = {
    name: string;
    age: number;
}

export default function DestructArr(props: TypeArr) {
    const [person1, person2] = props.arr;
    return (
        <div>
            <p>Person one: <span>{person1.name}</span> <span>{person1.age}</span></p>
            <p>Person two: <span>{person2.name}</span> <span>{person2.age}</span></p>
        </div>
    )
}