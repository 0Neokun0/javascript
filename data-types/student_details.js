let details = {
    firstName: 'Nishant',
    lastName: 'Meher',
    email: 'nishant.meher.95@gmail.com',

     address: {
        building : 'Leo Palace',
        city: 'Osaka',
        country: 'Japan'
    }
}

console.log(details.firstName);
console.log(details.lastName);
console.log(details['email']); // 'nishant.meher.95@gmail.com'
console.log(details.address);