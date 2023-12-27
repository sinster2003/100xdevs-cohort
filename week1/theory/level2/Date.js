// very basic clock-kind assignment 

let seconds = 0;
let minutes = 0;
let hours = 0;

const clockFunction = () => {
    console.log(`${hours}:${minutes}:${seconds}`);
    seconds++;

    if(seconds > 59) {
        minutes++;
        seconds = 0;
    }
    
    if(minutes > 59) {
        hours++;
        minutes = 0;
    }
    
    if(hours > 23) {
        hours = 0;
    }
}

setInterval(clockFunction , 1000);