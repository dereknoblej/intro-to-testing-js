// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(x) {
    if(x === undefined || x === true || x === false){
        return "Hello, World!"
    } else{
        return "Hello, " + x + "!";
    }
}
function sayFive(x) {
    if(x === 5){
        return true;
    } else {
        return false;
    }
}