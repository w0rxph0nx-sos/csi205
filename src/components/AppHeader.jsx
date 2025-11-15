const AppHeader = () => {
    // กำหนดรหัสวิชาและชื่อวิชา
    const subjectCode = "CSI205"; // ตัวอย่างรหัสวิชา
    const subjectName = "FRONT END SOFTWARE DEVELOPMENT"; // ตัวอย่างชื่อวิชา
    const studentInfo = "67124614 นาย วรพล แสงพานิช"; // ข้อมูลนักศึกษา

   
    return (
        <div className="app-header-container">
            <h1>
                {subjectCode} : {subjectName}
            </h1>
            
            <p className="student-info">{studentInfo}</p>
        </div>
    );
}

export default AppHeader;