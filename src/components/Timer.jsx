import { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0); // เริ่มนับจาก 0
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  // 🕒 แปลงวินาทีเป็นข้อความแบบ "1d 2h 3m 4s"
  const formatTime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    let result = "";
    if (days > 0) result += `${days}d `;
    if (hours > 0 || days > 0) result += `${hours}h `;
    if (minutes > 0 || hours > 0 || days > 0) result += `${minutes}m `;
    result += `${secs}s`;

    return result.trim();
  };

  // ▶️ เริ่มจับเวลา
  const handleRun = () => {
    if (running) return;
    setRunning(true);
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  // ⏸️ หยุดจับเวลา
  const handlePause = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
  };

  // 🔄 รีเซ็ตเวลา
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
    setRunning(false);
  };

  // 🧹 ล้าง interval เมื่อ component หาย (ป้องกัน thread ตกค้าง)
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      className="border border-2 rounded-3 mx-auto p-3 bg-light mt-3 shadow-sm text-center"
      style={{ width: "fit-content", minWidth: 280 }}
    >
      <h4 className="text-primary mb-3">TIMER</h4>

      <input
        type="text"
        readOnly
        className="form-control text-center fw-bold fs-5 mb-3"
        style={{ width: "200px", margin: "0 auto" }}
        value={formatTime(seconds)}
      />

      <div className="d-flex justify-content-center gap-2">
        <button className="btn btn-danger" onClick={handleReset}>
          <i className="bi bi-arrow-clockwise"></i>&nbsp;Reset
        </button>

        {running ? (
          <button className="btn btn-warning" onClick={handlePause}>
            <i className="bi bi-pause"></i>&nbsp;Pause
          </button>
        ) : (
          <button className="btn btn-success" onClick={handleRun}>
            <i className="bi bi-play"></i>&nbsp;Run
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
