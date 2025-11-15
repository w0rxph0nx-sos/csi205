import React, { useState } from 'react';

// === 1. ฟังก์ชันแปลงหน่วยอุณหภูมิ ===

function toCelsius(value, scale) {
  if (isNaN(value) || value === null || value === '') {
    return '';
  }
  const input = parseFloat(value);
  switch (scale) {
    case 'f':
      return (input - 32) * 5 / 9;
    case 'k':
      return input - 273.15;
    case 'c':
    default:
      return input;
  }
}

function fromCelsius(celsius, scale) {
  if (isNaN(celsius) || celsius === '') {
    return '';
  }
  const tempC = parseFloat(celsius);
  // เคลวินต้องมีทศนิยม 2 ตำแหน่งเสมอตามมาตรฐานการคำนวณ
  const decimalPlaces = scale === 'k' ? 2 : 2; 

  switch (scale) {
    case 'f':
      return (tempC * 9 / 5 + 32).toFixed(decimalPlaces);
    case 'k':
      return (tempC + 273.15).toFixed(decimalPlaces);
    case 'c':
    default:
      return tempC.toFixed(decimalPlaces);
  }
}

// === 2. Component สำหรับ Input แต่ละหน่วย (TemperatureInput) ===

const TemperatureInput = ({ scale, value, onValueChange, label, unit }) => {
  // ใช้ step 0.01 สำหรับการเพิ่ม/ลดค่า
  const step = 0.01; 

  // ป้องกันการป้อนค่าโดยตรง และใช้ปุ่ม +/- แทน
  // ในเวอร์ชันนี้ เราจะเน้นการคลิกปุ่ม +/-
  const handleDecrement = () => {
    const numericValue = parseFloat(value || 0);
    const currentC = toCelsius(numericValue, scale);
    const newValueInScale = fromCelsius(currentC - step, scale);
    onValueChange(newValueInScale, scale);
  };

  const handleIncrement = () => {
    const numericValue = parseFloat(value || 0);
    const currentC = toCelsius(numericValue, scale);
    const newValueInScale = fromCelsius(currentC + step, scale);
    onValueChange(newValueInScale, scale);
  };
    
  // จัดการการแสดงผล (ปัดเศษ 2 ตำแหน่ง)
  const displayValue = (typeof value === "string" && value !== '') 
    ? value // ใช้ value ที่ถูกส่งมา ซึ่งถูกแปลงและปัดเศษแล้ว
    : '0.00';

  // --- Inline Styles สำหรับ Component ย่อย ---
  const styles = {
    // สไตล์ที่ใช้เลียนแบบ Value Component แต่ปรับเป็นกรอบเทาและปุ่ม +/-
    tempBlock: {
      minWidth: 200, 
      backgroundColor: '#EAEAEA', // สีเทาอ่อน (คล้าย bg-secondary-subtle)
    },
    // สไตล์ของปุ่ม +/- ให้เป็นสี่เหลี่ยมตามภาพ
    controlBtn: {
      width: '40px', 
      height: '40px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      lineHeight: 1,
      padding: '0',
    },
    // สไตล์ของป้ายแสดงผลด้านบน (สีฟ้าตามภาพ)
    displayTop: {
      backgroundColor: '#007BFF', // สีฟ้าสดใส
      color: 'white',
      padding: '5px 10px',
      borderRadius: '5px',
      fontSize: '1.2em',
      fontWeight: 'bold',
      marginBottom: '10px',
      width: 'fit-content',
    },
  };

  return (
    <div className="d-flex flex-column align-items-center">
      {/* 1. ส่วนแสดงผลด้านบน (Blue Box) */}
      <div style={styles.displayTop}>
        {displayValue} {unit}
      </div>

      {/* 2. ส่วนควบคุม (Grey Box) */}
      <div
        className="border border-dark border-1 rounded-3 mx-auto p-3 shadow-sm"
        style={styles.tempBlock}
      >
        {/* ชื่อหน่วย */}
        <h5 className="text-primary text-center mb-3 fw-bold" style={{color: '#000080'}}>
          {label}
        </h5>

        {/* ปุ่มควบคุมและค่า */}
        <div className="d-flex justify-content-between align-items-center gap-2">
          {/* ปุ่มลดค่า */}
          <button 
            className="btn btn-danger rounded-3" 
            onClick={handleDecrement}
            style={styles.controlBtn}>
            &minus;
          </button>

          {/* ค่าอุณหภูมิปัจจุบัน */}
          <div className="fs-4 fw-bold text-center" style={{ minWidth: "90px" }}>
            {displayValue.split('.')[0]}.
            <span className='fw-normal'>{displayValue.split('.')[1]}</span> 
          </div>

          {/* ปุ่มเพิ่มค่า */}
          <button 
            className="btn btn-success rounded-3" 
            onClick={handleIncrement}
            style={styles.controlBtn}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

// === 3. Main Component: Temperatures ===

const Temperatures = () => {
  // State หลัก: เก็บค่าอุณหภูมิในหน่วย Celsius ตามค่าเริ่มต้นในภาพ (25.00)
  const [celsius, setCelsius] = useState(25.00); 

  // ฟังก์ชันจัดการการเปลี่ยนแปลงค่าจาก Input ใด ๆ
  const handleValueChange = (value, sourceScale) => {
    // 1. แปลงค่าที่ได้รับจาก Input เป็น Celsius
    const newCelsius = toCelsius(value, sourceScale);
    
    // 2. อัปเดต State หลัก (celsius) **ป้องกัน Infinite Loop**
    setCelsius(newCelsius);
  };

  // คำนวณค่าสำหรับแสดงผลใน Input อื่น ๆ จาก State หลัก
  const currentCelsius = fromCelsius(celsius, 'c');
  const currentFahrenheit = fromCelsius(celsius, 'f');
  const currentKelvin = fromCelsius(celsius, 'k');
  
  
  const mainStyles = {
    temperaturesContainer: {
      border: '4px solid #AAAAAA', 
      borderRadius: '10px',
      padding: '20px',
      textAlign: 'center',
      width: 'fit-content',
      margin: '20px auto',
      backgroundColor: '#FFFFFF', // พื้นหลังขาว
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      color: '#000080', // สีน้ำเงินเข้มตามภาพ
      marginBottom: '20px',
      fontSize: '1.8rem',
      fontWeight: 'bold',
    },
    tempGrid: {
      gap: '20px',
      marginTop: '15px',
    },
  };

  return (
    <div style={mainStyles.temperaturesContainer}>
      <h1 style={mainStyles.header}>TEMPERATURES</h1>
      
      {/* Grid/Flexbox สำหรับวาง Component ย่อย 3 ตัว */}
      <div className="d-flex justify-content-center flex-wrap" style={mainStyles.tempGrid}>
        <TemperatureInput
          scale="c"
          value={currentCelsius}
          onValueChange={handleValueChange}
          label="CELSIUS"
          unit="°C"
        />
        <TemperatureInput
          scale="f"
          value={currentFahrenheit}
          onValueChange={handleValueChange}
          label="FAHRENHEIT"
          unit="°F"
        />
        <TemperatureInput
          scale="k"
          value={currentKelvin}
          onValueChange={handleValueChange}
          label="KELVIN"
          unit="°K"
        />
      </div>
    </div>
  );
};

export default Temperatures;