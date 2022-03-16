function greet() {
    console.log('Hello World!');
}
setTimeout(greet, 5000);
console.log('This Message Is Shown First');

// program to display time every 5 seconds
function showTime() {

    // return new date and time
    let dateTime= new Date();

    // returns the current local time
    let time = dateTime.toLocaleTimeString();

    console.log(time)

    // display the time after 5 seconds
     setTimeout(showTime, 5000);
}

// calling the function
showTime();