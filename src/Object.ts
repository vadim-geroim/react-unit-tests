export type StudentType = {
    id: number;
    firstName: string;
    lastName: string;
    address: AddressType;
}

type AddressType = {
    street: string;
    city: string;
    state: string;
    postal: number
}


export const student: StudentType = {
    id: 24,
    firstName: 'Peter',
    lastName: 'Jackson',
    address: {
        street: 'Bobson Clark 2',
        city: 'Dallas',
        state: 'TX',
        postal: 70022
    }
}

