function welcome() {
    console.log("welcome(): Hello world!");
}
function bye() {
    console.log("bye() : Good bye!");
}
try {
    welcome()
    asking()
}
catch(e) {
    console.log("asking() : " + e);
} finally {
    bye()
}
