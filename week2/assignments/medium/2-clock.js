// custom clock

const currentTime = new Date();

let seconds = currentTime.getSeconds();
let minutes = currentTime.getMinutes();
let hours = currentTime.getHours();

const digitalClock = () => {
  // normal time
  console.log(
    `${hours < 10 ? "0" + hours : hours}::${
      minutes < 10 ? "0" + minutes : minutes
    }::${seconds < 10 ? "0" + seconds : seconds}`
  );

  seconds += 1;

  if (seconds >= 60) {
    seconds = 0;
    minutes += 1;
  }

  if (minutes >= 60) {
    minutes = 0;
    hours += 1;
  }

  if (hours >= 12 && hours !== 24) {
    // AM/PM time
    console.log(
      `${hours === 12 ? hours : hours < 22 ? "0" + (hours - 12) : hours - 12}::${
        minutes < 10 ? "0" + minutes : minutes
      }::${seconds < 10 ? "0" + seconds : seconds} PM`
    );
  } else {
    // AM/PM time
    console.log(
      `${
        hours === 24 ? "0" + (hours - 24) : hours < 10 ? "0" + hours : hours
      }::${minutes < 10 ? "0" + minutes : minutes}::${
        seconds < 10 ? "0" + seconds : seconds
      } AM`
    );
  }
};

setInterval(digitalClock, 1000);
