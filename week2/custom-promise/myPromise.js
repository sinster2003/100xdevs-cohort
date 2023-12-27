// Basic Promise Model 

const resolve = (data) => { // returns resolved data
    return data;
}

class MyPromise {

    constructor(fun) {
        this.fun = fun;
        this.res = fun(resolve); // call the callback returning the reolved data
    }

    then(cb) {
        cb(this.res); // called with resolved data
    }
}

const myPromise = new MyPromise((res) => {
    return res({name: "Sindhur", age: 20});
});

myPromise
.then((res) => {
    console.log(res.name);
})