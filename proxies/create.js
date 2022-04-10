let student1 = {
    age: 28,
    name: "Nishant"
}

const handler = {
    get: function(obj, prop) {
        return obj[prop] ? obj[prop] : 'property does not exist';
    }
}

const proxy = new Proxy(student1, handler);
console.log(proxy.name); // Nishant
console.log(proxy.age); // 28
console.log(proxy.class); // property does not exist