import * as userService from '../../../app/services/userService';

// นี่คือการเริ่มต้น mock สำหรับ global.fetch ให้เข้ากับ Jest Mock Function
beforeAll(() => {
    global.fetch = jest.fn() as jest.Mock;
});

// รีเซ็ตการ mock หลังจากแต่ละการทดสอบ
afterEach(() => {
    jest.resetAllMocks();
});

// ล้างการ mock หลังจากการทดสอบทั้งหมด
afterAll(() => {
    jest.restoreAllMocks();
});

it('should fetch user data for a given userId', async () => {
  // จำลองการเรียกใช้ fetch สำหรับการทดสอบนี้
  (global.fetch as jest.Mock).mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve({ id: '1', name: 'John Doe', email: 'john@example.com' }),
    })
  );

  // กำหนดให้ userId เป็น '1'
  // .....จงใส่โค้ดที่ถูกต้องของบรรทัดนี้.....

  // เรียกใช้ fetchUserData() โดยมี Parameter เป็น userId
  // .....จงใส่โค้ดที่ถูกต้องของบรรทัดนี้.....

  // ตรวจสอบว่า fetch ถูกเรียกใช้งานอย่างถูกต้อง
  // .....จงใส่โค้ดที่ถูกต้องของบรรทัดนี้.....

  // ตรวจสอบข้อมูลผู้ใช้งานที่ได้รับ
  // .....จงใส่โค้ดที่ถูกต้องของบรรทัดนี้.....
});

it('should handle fetch error', async () => {
  // จำลองการเรียกใช้ fetch ที่ล้มเหลวสำหรับการทดสอบนี้
  (global.fetch as jest.Mock).mockImplementationOnce(() =>
    Promise.reject(new Error('Failed to fetch'))
  );

  // ตรวจสอบว่าการเรียกใช้ fetchUserData จะถูก reject ด้วยข้อผิดพลาดที่เหมาะสม
  // .....จงใส่โค้ดที่ถูกต้องของบรรทัดนี้.....
});
