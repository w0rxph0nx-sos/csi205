import { useState } from "react";
import Value from "./Value";

const Adder = ({ name }) => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div
      className="rounded-3 mx-auto p-3 bg-white shadow-sm text-center d-flex flex-column justify-content-between"
      style={{
        width: "fit-content",
        minWidth: 280,
        minHeight: 210, // ✅ เท่ากับ Timer / Value
        border: "2px solid #dee2e6",
      }}
    >
      {/* หัวข้อ */}
      <h4 className="text-primary text-center mb-3">{name || "ADDER"}</h4>

      {/* แสดงผลค่า */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="badge bg-secondary fs-6">A = {a}</div>
        <div className="badge bg-primary fs-6">A + B = {a + b}</div>
        <div className="badge bg-secondary fs-6">B = {b}</div>
      </div>

      {/* ช่องกรอกค่า A, B */}
      <div className="d-flex justify-content-center gap-3">
        <Value name={"A"} value={a} setValue={setA} />
        <Value name={"B"} value={b} setValue={setB} />
      </div>
    </div>
  );
};

export default Adder;
