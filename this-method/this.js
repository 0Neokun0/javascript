const person = {
    name : 'Nishant',
    age: 27,

    // this inside method
    // this refers to the object itself
    greet() {
        console.log(this);
        console.log(this.age);

        // inner function
        let innerFunc = () => {
        
            // this refers to the global object
            console.log(this);
            console.log(this.age);
            
        }

        innerFunc();

    }
}

person.greet();