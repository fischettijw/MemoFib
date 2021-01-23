let startTime;

function fib(index) {
    if (index < 2) return index;
    return fib(index - 1) + fib(index - 2);
}

for (i = 0; i < 40; i++) {
    startTime = new Date();
    console.log("N", i, fib(i), (new Date() - startTime));
}
// let k = 45;
// startTime = new Date();
// console.log("N", k, fib(k), (new Date() - startTime));
console.log("------");


let cache;

function fibC(index, cache) {
    if (typeof cache == "undefined") {
        cache = [];
    }
    if (cache[index]) { return cache[index] };
    if (index < 2) return index;
    cache[index] = fibC(index - 1, cache) + fibC(index - 2, cache);
    return cache[index];
}

for (i = 0; i < 100; i++) {
    startTime = new Date();
    console.log("C", i, fibC(i), (new Date() - startTime));
}
console.log("------");

// // Memoization and the fibonacci sequence in Javascript    https://www.youtube.com/watch?v=ICg97cAMEjo


function fibS(index) {
    if (typeof fibS.funcCache == "undefined") {
        fibS.funcCache = [];
    }
    if (fibS.funcCache[index]) { return fibS.funcCache[index] };
    if (index < 2) return index;
    fibS.funcCache[index] = fibS(index - 1) + fibS(index - 2);
    return fibS.funcCache[index];
}

for (i = 0; i < 100; i++) {
    startTime = new Date();
    console.log("S", i, fibS(i), (new Date() - startTime));
}
console.log("------");