const API_URL = "https://dummyjson.com/auth";

export const login = async (payload) => {
    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
};

export const getAuthUser = async () => {

    const token =localStorage.getItem("token");

    const res = await fetch(`${API_URL}/me`, {
        headers: { "Authorization": `Bearer ${token}` }
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
}