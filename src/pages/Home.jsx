import myPhoto from '../assets/stu.png';

const Home = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #ffffffff, #ffffffff)',
            fontFamily: 'Prompt, sans-serif',
            padding: '30px'
        }}>

            <div style={{
                background: 'white',
                borderRadius: '25px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                padding: '60px 80px',
                textAlign: 'center',
                maxWidth: '900px',
                minHeight: '900px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <img
                    src={myPhoto}
                    alt="student"
                    style={{
                        width: '240px',
                        height: 'auto',
                        borderRadius: '12px',
                        marginBottom: '30px',
                        boxShadow: '0 6px 15px rgba(0,0,0,0.2)'
                    }}
                />
                <h2 style={{
                    color: '#1565c0',
                    marginBottom: '12px',
                    fontSize: '30px'
                }}>
                    วรพล แสงพานิช
                </h2>
                <p style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '18px' }}>
                    รหัสนักศึกษา: <span style={{ color: '#0d47a1' }}>67124614</span>
                </p>

                <p style={{ color: '#424242', marginBottom: '18px', lineHeight: '1.8' }}>
                    ชั้นปีที่ 2 <br />
                    <strong>คณะเทคโนโลยีสารสนเทศ</strong> <br />
                    <strong>สาขาวิชา วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์</strong> <br />
                    มหาวิทยาลัยศรีปทุม
                </p>

                <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', maxWidth: '420px' }}>
                    สวัสดีครับ ผมชื่อวรพล เป็นนักศึกษาที่ชื่นชอบการพัฒนาเว็บไซต์และเทคโนโลยีใหม่ ๆ
                    ตั้งใจเรียนรู้และฝึกฝนทักษะเพื่อพัฒนาตนเองในอนาคตครับ 😊
                </p>
            </div>
        </div>
    );
};

export default Home;
