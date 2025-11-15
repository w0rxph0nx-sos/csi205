import { useState } from "react";

import Value from "../components/Value";
import Adder from "../components/Adder";
import Timer from "../components/Timer";
import Temperatures from "../components/Temperature";

const Components = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div
      className="container mt-4"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* Title */}
      <h2 className="text-center fw-bold bg-dark text-white p-2 rounded">
        REACT COMPONENTS
      </h2>

      {/* Grid layout */}
      <div
        className="d-grid justify-content-center mt-4"
        style={{
          gridTemplateColumns: "auto auto",
          gridTemplateRows: "auto auto",
          gap: "10px 50px",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <div className="d-flex justify-content-center align-items-start gap-5 mt-2 flex-wrap">
          <Value
            name="COUNTER"
            initial={0}
            type="initial"
            value={counter}
            setValue={setCounter}
          />
        </div>

        <div style={{ gridColumn: "2", gridRow: "1" }}>
          <Adder />
        </div>

        <div style={{ gridColumn: "1", gridRow: "2" }}>
          <Timer />
        </div>
      </div>

      <div className="row mt-4 justify-content-center">
        <div className="col-md-10">
          <Temperatures />
        </div>
      </div>

      <div className="text-center fw-bold mt-4 p-2 bg-dark text-white rounded">
        นายวรพล เเสงพานิช รหัส 67124614
      </div>
    </div>
  );
};

export default Components;
