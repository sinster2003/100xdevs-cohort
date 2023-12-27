// async function takes time to execute

/* 
The browser will freeze for 3ms waiting for 1 to execute bcoz js is single threaded
Synchronous ---> 1 2 3 ---> execution
    1 (takes time 3ms)
    2 (takes time 1ms)
    3 (takes time 1ms)
*/

/* 
Asynchronous ---> 2 3 1 ---> execution
    1 (takes time 3ms) ---> executed later 1 is async
    2 (takes time 1ms)
    3 (takes time 1ms)
*/

const compute = () => {
    console.log(2*2);
}

setTimeout(() => { compute() }, 2000); // async 
console.log("Hello");
console.log("World");
