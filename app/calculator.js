'use strict';

function add(a,b){
    return a+b;
}

function minus(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b==0) return new Error("Can not divide by zero")
    return a/b;
}

module.exports = {
    add,
    minus,
    multiply,
    divide
}
