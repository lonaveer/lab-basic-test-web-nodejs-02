export const fetchUserData = async (userId: string): Promise<any> => {
    const response = await fetch(`https://example.com/api/users/${userId}`);
    const data = await response.json();
    return data;
};