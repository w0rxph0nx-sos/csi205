import { useEffect } from "react";

const Value = ({ name = "VALUE", initial = 0, type = "integer", value, setValue }) => {
  useEffect(() => {
    setValue(typeof initial === "number" ? initial : 0);
  }, [initial, setValue]);

  const step = type === "real" ? 0.01 : 1;

  const handleDecrement = () => {
    setValue((prev) => {
      const curr = typeof prev === "number" ? prev : 0;
      return type === "real"
        ? Math.round((curr - step) * 100) / 100
        : curr - step;
    });
  };

  const handleIncrement = () => {
    setValue((prev) => {
      const curr = typeof prev === "number" ? prev : 0;
      return type === "real"
        ? Math.round((curr + step) * 100) / 100
        : curr + step;
    });
  };

  const displayValue =
    type === "real"
      ? (typeof value === "number" ? value : 0).toFixed(2)
      : Math.round(typeof value === "number" ? value : 0);

  return (
    <div
      className="rounded-3 mx-auto p-3 bg-white shadow-sm text-center d-flex flex-column justify-content-between"
      style={{
        width: "fit-content",
        minWidth: 280,
        minHeight: 260, // ✅ ปรับความสูงเท่ากับ Timer
        border: "2px solid #dee2e6",
      }}
    >
      <h4 className="text-primary text-center mb-3">{name}</h4>

      <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
        <button
          className="btn btn-danger px-3"
          onClick={handleDecrement}
          aria-label={`decrement-${name}`}
        >
          &minus;
        </button>

        <div
          className="fs-3 fw-bold text-center"
          style={{ minWidth: "80px" }}
        >
          {displayValue}
        </div>

        <button
          className="btn btn-success px-3"
          onClick={handleIncrement}
          aria-label={`increment-${name}`}
        >
          +
        </button>
      </div>

      {/* ✅ เพิ่มพื้นที่ว่างด้านล่างให้เท่ากับ Timer */}
      <div style={{ height: "20px" }}></div>
    </div>
  );
};

export default Value;
