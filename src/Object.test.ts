import { StudentType } from "./Object";
let student: StudentType;

beforeEach(() => {
    student = {
        id: 22,
        firstName: 'Peter',
        lastName: 'Jasson',
        address: {
            street: 'Central street',
            city: 'New York',
            state: 'NY',
            postal: 10306
        }
    }
});

test('Student must have first name', () => {
    expect(student.firstName).toEqual('Peter');
});

test.skip('Student must have address', () => {
    expect(student.address.state).toBe('NY');
});