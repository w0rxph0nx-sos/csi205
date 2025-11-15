const AppFooter = () => {
    // กำหนดข้อมูลสำหรับ Footer
    const university = "Sripatum University (SPU)";
    const faculty = "คณะเทคโนโลยีสารสนเทศ";
    const major = "สาขาวิชา วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์";
    const facebookLink = "https://www.facebook.com/share/17ZLr4fLWu/?mibextid=wwXIfr"; // ตัวอย่าง
    const instagramLink = "https://www.instagram.com/sripatum_spu?igsh=MXBzZW1mcm0yZ2plbg=="; // ตัวอย่าง

    return (
        <footer className="app-footer-container">
            <p>
                **มหาวิทยาลัยศรีปทุม (Sripatum University)** | คณะ: {faculty} | สาขา: {major}
            </p>
            <div className="contact-info">
                ติดต่อ: 
                <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook"></i> Facebook
                </a>
                {" | "}
                <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram"></i> Instagram
                </a>
                {/* เพิ่มช่องทางอื่นๆ ตามต้องการ */}
            </div>
        </footer>
    );
}

export default AppFooter;