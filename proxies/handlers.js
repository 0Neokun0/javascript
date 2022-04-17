let student = {
    name: 'Nishant',
    age: 30
}

const handler = {

    // get the object key and value
    get(obj, prop) {

        return obj[prop];
  }
}

const proxy = new Proxy(student, handler);
console.log(proxy.name); // Nishant
console.log(proxy.age); // 30