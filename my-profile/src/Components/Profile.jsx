import React from "react";
import logo from './image/me.jpg';

const Profile = () => {
     return (
          <div
               style={{
               display: 'flex',
               alignItems: 'center',
               border: '1px solid #ddd',
               padding: '20px',
               borderRadius: '12px',
               backgroundColor: '#f9f9f9',
               maxWidth: '500px',
               margin: '20px auto',
               }}
               >
               <img
               src={logo}
               alt="User Avatar"
               style={{
                    width: '100px',
                    height: '150px',
                    border: '2px solid #f59e0b',
                    borderRadius: '8px',
                    marginRight: '20px',
               }}
               />

               <div style={{ textAlign: 'left' }}>
               <p
                    style={{
                    fontWeight: 'bold',
                    fontSize: '18px',
                    margin: 0,
                    }}
               >
                    ชื่อ : ณัฐกมล พิริยะธนทรัพย์
               </p>
               <p style={{ margin: '4px 0' }}>รหัสนักศึกษา : 660710706</p>
               <p style={{ margin: '4px 0' }}>อายุ : 20 ปี</p>
               <p style={{ margin: '4px 0' }}>นักศึกษาชั้นปีที่ 3</p>
               </div>
          </div>
     );
 };

export default Profile;