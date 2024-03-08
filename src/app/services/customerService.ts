// กำหนด interface สำหรับข้อมูลลูกค้า
export interface Customer {
    id: string;
    name: string;
    email: string;
}

// Object apiService ที่มีฟังก์ชันสำหรับการอัปเดตข้อมูลลูกค้าผ่าน API
export const apiService = {
    async update(userId: string, customerDetails: Customer): Promise<Customer> {
        try {
            // ทำการเรียกใช้งาน API เพื่ออัปเดตข้อมูลลูกค้า
            const response = await fetch(`https://example.com/api/customers/${userId}`, {
                method: 'POST',
                body: JSON.stringify(customerDetails),
                headers: { 'Content-Type': 'application/json' },
            });

            // ตรวจสอบว่าการตอบสนองจาก API มีสถานะ 'ok' หรือไม่
            if (!response.ok) throw new Error(`API responded with status ${response.status}`);

            // แปลงข้อมูลที่ได้จาก API กลับเป็น JSON
            const data: Customer = await response.json();
            return data;
        } catch (error) {
            // ถ้ามี network error หรือ error อื่นๆ
            throw new Error(`Failed to update customer: ${error.message}`);
        }
    },
};

// ฟังก์ชันสำหรับการอัปเดตข้อมูลลูกค้า โดยเรียกใช้งานฟังก์ชัน update จาก apiService
export async function updateCustomerDetails(userId: string, customerDetails: Customer): Promise<Customer> {
    return apiService.update(userId, customerDetails);
}