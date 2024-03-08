import { apiService, updateCustomerDetails, Customer } from '../../../app/services/customerService';

const mockCustomerDetails: Customer = {
    id: '123',
    name: 'John Doe',
    email: 'john@example.com'
};

// กำหนด global.fetch ให้เป็น mock function ก่อนการทดสอบในแต่ละครั้ง
// .....จงใส่โค้ดที่ถูกต้องของบรรทัดนี้..... //

// ล้างการ mock หลังจากแต่ละการทดสอบ
// .....จงใส่โค้ดที่ถูกต้องของบรรทัดนี้..... //

test('apiService.update is success and correct response', async () => {
    // // ตั้งค่า mock สำหรับ fetch
    // (global.fetch as jest.Mock).mockResolvedValueOnce({
    //     ok: true,
    //     json: () => Promise.resolve(mockCustomerDetails),
    // });

    // // ทำการเรียกใช้งาน apiService.update
    // const result = await apiService.update('123', mockCustomerDetails);

    // // ตรวจสอบค่าที่ได้จาก apiService กว่าตรงกับค่า mockCustomerDetails หรือไม่
    // // .....จงใส่โค้ดที่ถูกต้องของบรรทัดนี้..... //

    // // ตรวจสอบว่ามีการเรียกใช้ fetch (global.fetch) หรือไม่
    // // .....จงใส่โค้ดที่ถูกต้องของบรรทัดนี้..... //

    // // ตรวจสอบว่า fetch (global.fetch) มีการเรียกใช้ url ที่ถูกต้องหรือไม่
    // expect(global.fetch).xxxxxxxxxx(`https://example.com/api/customers/123`, expect.any(Object));
});

test('updateCustomerDetails calls apiService.update and return customer information', async () => {
    // // ทำการ spyOn "apiService.update" เพื่อเปลี่ยนแปลงค่า return ให้เป็น mockCustomerDetails
    // jest.spyOn(xxxxx, 'xxxxx').mockResolvedValueOnce(xxxxx);

    // // ทำการเรียกใช้งาน updateCustomerDetails
    // const result = await xxxxx('123', mockCustomerDetails);

    // // ตรวจสอบค่าที่ได้จาก updateCustomerDetails กว่าตรงกับค่า mockCustomerDetails หรือไม่
    // expect(xxxxx).xxxxxx(xxxxxx);

    // // ตรวจสอบว่า apiService.update ถูกเรียกใช้งานได้หรือไม่
    // expect(xxxxx).xxxxx('123', mockCustomerDetails);
});

test('apiService.update fails when API responds with status not ok', async () => {
    // // ตั้งค่าการจำลองการตอบสนองจาก fetch ที่มีสถานะไม่ใช่ 'ok'
    // (global.fetch as jest.Mock).mockResolvedValueOnce({
    //   ok: false,
    //   status: 500, // ตัวอย่างของสถานะข้อผิดพลาด
    //   json: () => Promise.resolve({ message: 'Internal Server Error' }),
    // });

    // // พยายามเรียกใช้งานฟังก์ชัน apiService.update และจับข้อผิดพลาด
    // await expect(xxxxx.xxxxx('123', mockCustomerDetails))
    //   .xxxxx
    //   .xxxxx('API responded with status 500');

    // // ตรวจสอบว่ามีการเรียกใช้ fetch (global.fetch) หรือไม่
    // // .....จงใส่โค้ดที่ถูกต้องของบรรทัดนี้..... //

    // // ตรวจสอบว่า fetch (global.fetch) มีการเรียกใช้ url ที่ถูกต้องหรือไม่
    // // .....จงใส่โค้ดที่ถูกต้องของบรรทัดนี้..... //
});