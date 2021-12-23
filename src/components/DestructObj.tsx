type PropsType = {
  data: DataType;
};

type DataType = {
  name: string;
  age: number;
  salary: number;
  address: AddressType;
};

type AddressType = {
  street: {
    name: string;
    isClean: boolean;
    isCriminal: boolean;
  };
};

export default function Destruct(props: PropsType) {
  const { name, age, salary, ...restData } = props.data;
  const isClean = restData.address.street.isClean;
  return (
    <div>
      <ul>
        <li>
          <span>Name</span>&nbsp;
          <span>{name}</span>
        </li>
        <li>
          <span>Age</span>&nbsp;
          <span>{age}</span>
        </li>
        <li>
          <span>Salary</span>&nbsp;<span>{salary}k</span>
        </li>
        <li>
          <span>Is Street clean?</span>&nbsp;
          <span>{isClean ? "Yes" : "No"}</span>
        </li>
      </ul>
    </div>
  );
}
