import { useState } from "react";

import Value from "../components/Value";
import Adder from "../components/Adder";
import Timer from "../components/Timer";
import Temperatures from "../components/Temperature";

const Components = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container mt-4">
      {/* Title */}
      <h2 className="text-center fw-bold bg-dark text-white p-2 rounded">
        REACT COMPONENTS
      </h2>

      {/* Row 1: Counter + Add + Timer */}
      <div className="row mt-3 text-center justify-content-center">
        <div className="col-md-3">
          <Value
            name="COUNTER"
            initial={0}
            type="initial"
            value={counter}
            setValue={setCounter}
          />
        </div>
        <div className="col-md-4">
          <Adder />
        </div>
        <div className="col-md-3">
          <Timer />
        </div>
      </div>

      {/* Row 2: Temperatures */}
      <div className="row mt-4 justify-content-center">
        <div className="col-md-10">
          <Temperatures />
        </div>
      </div>

      {/* Footer */}
      <div className="text-center fw-bold mt-4 p-2 bg-dark text-white rounded">
        นายวรพล เเสงพานิช รหัส 67124614
      </div>
    </div>
  );
};

export default Components;
