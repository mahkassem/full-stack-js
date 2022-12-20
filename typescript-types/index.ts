// Basic Types : boolean, number, string, array, tuple, enum, any, void, null, undefined, never, object
const isDone: boolean = false;
const decimal: number = 6;
const color: string = "blue";
const list: number[] = [1, 2, 3];
const list2: Array<number> = [1, 2, 3];

// Any : opt-out of type checking and let the values pass through compile-time checks
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// Void : absence of having any type at all
function warnUser(): void {
    console.log("This is my warning message");
}

// Null and Undefined
const u: undefined = undefined;
const n: null = null;

// Never : represents the type of values that never occur
function error(message: string): never {
    throw new Error(message);
}

// Object : non-primitive type
const user: object = { name: 'John', age: 30 };

// Type assertions: a way to tell the compiler “trust me, I know what I’m doing.”
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;

// Interfaces : a structural type system
interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}

// Type aliases : create a new name for a type
type Cat = {
    name: string;
    purrs: boolean;
};
