function Person() {
    this.name = 'Nishant',
    this.age = 27,
    this.sayName = function () {

        console.log(this.age);
        let innerFunc = () => {
            console.log(this.age);
        }

        innerFunc();
    }
}

const x = new Person();
x.sayName();