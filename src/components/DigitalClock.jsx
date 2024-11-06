import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const [is24HourFormat, setis24HourFormat] = useState(true);
  const [isStopWatchRunning, setIsStopwatchRunning] = useState(false);
  const [stopwatchTime, setStopwatchTime] = useState(0);

  // Clock interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleFormatToggle = () => {
    setis24HourFormat(!is24HourFormat);
  };

  const handleClockStopStart = () => {
    setIsStopwatchRunning(!isStopWatchRunning);
  };

  // Stopwatch interval
  useEffect(() => {
    let intervalId;
    if (isStopWatchRunning) {
      intervalId = setInterval(() => {
        setStopwatchTime(prevTime => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isStopWatchRunning]); // Only run when `isStopWatchRunning` changes

  const formattedTime = time.toLocaleTimeString([], {
    hour: is24HourFormat ? 'numeric' : '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: !is24HourFormat,
  });

  const formattedStopwatchTime = new Date(stopwatchTime * 1000).toISOString().substr(11, 8);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg">
      <h2 className="text-2xl font-bold">Digital Clock</h2>
      <p className="text-4xl font-bold">{formattedTime}</p>
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleFormatToggle}
        >
          Change Format
        </button>
      </div>
      <h2 className="text-2xl font-bold mt-4">Stopwatch</h2>
      <p className="text-4xl font-bold">{formattedStopwatchTime}</p>
      <div className="flex justify-center mt-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClockStopStart}
        >
          {isStopWatchRunning ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  );
};

export default DigitalClock;
