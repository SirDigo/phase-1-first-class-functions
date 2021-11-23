function receivesAFunction(value) {
    return value();
}

receivesAFunction(function() {return 1 + 5});

const returnsANamedFunction = function() {
    return receivesAFunction;
}



function returnsAnAnonymousFunction() {
    return function() {return returnsANamedFunction;};
}