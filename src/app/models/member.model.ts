export class Member {
    constructor(
        public firstName: string = null,
        public lastName: string = null,
        public age: number = null) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}