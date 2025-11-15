import { useEffect, useState, useRef } from "react";
import bask from "../assets/bask.png";
import football from "../assets/football.png";
import volly from "../assets/volly.png";
import stu from "../assets/stu.png";
import cartoon from "../assets/cartoon.png";
import galaxy from "../assets/imgbin-galaxy-BLPuHQMBjhNEJJaZs6XAvyGEM.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

const Animation = () => {
  const fieldRef = useRef(null);
  const [running, setRunning] = useState(false);
  const [choice, setChoice] = useState("None");
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const goRight = useRef(true);
  const goDown = useRef(true);

  const fieldWidth = 600;
  const fieldHeight = 300;
  const ballDiameter = 100;
  const maxX = fieldWidth - ballDiameter - 2;
  const maxY = fieldHeight - ballDiameter - 2;
  const vx = 5;
  const vy = 5;

  const ballImages = {
    Basketball: bask,
    Football: football,
    VolleyBall: volly,
    Human: stu,
    Cartoon: cartoon,
  };

  // อัปเดตตำแหน่งลูกบอล
  useEffect(() => {
    const timer = setInterval(() => {
      if (running) {
        setPos((prev) => {
          let x = prev.x + (goRight.current ? vx : -vx);
          let y = prev.y + (goDown.current ? vy : -vy);

          if (x >= maxX) goRight.current = false;
          if (x <= 0) goRight.current = true;
          if (y >= maxY) goDown.current = false;
          if (y <= 0) goDown.current = true;

          return { x, y };
        });
      }
    }, 25);
    return () => clearInterval(timer);
  }, [running]);

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffffffff, #ffffffff)",
        fontFamily: "Prompt, sans-serif",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#0d47a1" }}>
        Animation
      </h2>

      {/* สนาม */}
      <div
        ref={fieldRef}
        style={{
          width: `${fieldWidth}px`,
          height: `${fieldHeight}px`,
          position: "relative",
          border: "2px solid #1565c0",
          borderRadius: "1rem",
          backgroundImage: `url(${galaxy})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
        }}
      >
        {/* ลูกบอล */}
        <div
          style={{
            position: "absolute",
            width: `${ballDiameter}px`,
            height: `${ballDiameter}px`,
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            borderRadius: "50%",
            backgroundColor: choice === "None" ? "lightgray" : "transparent",
            backgroundImage:
              choice !== "None" ? `url(${ballImages[choice]})` : "none",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transition: "all 0.05s linear",
          }}
        ></div>
      </div>

      {/* ปุ่มควบคุม */}
      <div className="d-flex flex-wrap gap-2 justify-content-center mt-4">
        <button
          className={`btn ${running ? "btn-warning" : "btn-success"}`}
          onClick={() => setRunning(!running)}
        >
          <i className={`bi ${running ? "bi-pause" : "bi-play"}`}></i>&nbsp;
          {running ? "PAUSE" : "RUN"}
        </button>

        <button
          className={`btn ${
            choice === "None" ? "btn-secondary" : "btn-outline-info"
          }`}
          onClick={() => setChoice("None")}
        >
          None
        </button>

        {Object.keys(ballImages).map((type) => (
          <button
            key={type}
            className={`btn ${
              choice === type ? "btn-primary" : "btn-outline-info"
            }`}
            onClick={() => setChoice(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Animation;
