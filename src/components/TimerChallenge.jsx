import { useState, useRef } from "react";
import ResultModaL from "./ResultModal";
function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerAcitve = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => {
        return prev - 10;
      });
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }
  return (
    <>
      <ResultModaL
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerAcitve ? handleStop : handleStart}>
            {timerAcitve ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerAcitve ? "active" : undefined}>
          {timerAcitve ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
