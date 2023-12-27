// clock timer using setTimeout

let seconds = 0;
let minutes = 0;
let hours = 0;

const clockFunction = () => {
  console.log(
    `${hours === 0 ? "00" : hours < 10 ? "0" + hours : hours}h : ${minutes === 0 ? "00" : minutes < 10 ? "0" + minutes : minutes}m : ${seconds === 0 ? "00" : seconds < 10 ? "0" + seconds : seconds}s`
  );

  seconds += 1;

  if(seconds === 60) {
    seconds = 0;
    minutes += 1;
  }

  if(minutes === 60) {
    minutes = 0;
    hours += 1;
  }

  if(hours === 24) {
    hours = 0;
    minutes = 0;
    seconds = 0;
  }

  // recursive call after a delay of 1s always
  setTimeout(clockFunction, 1000);
};

clockFunction();
