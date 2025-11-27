import { BASE_URL } from "../utils";
export async function sendContactForm(data) {
    try {
        const response = await fetch(`${BASE_URL}/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    }
    catch (error) {
        console.error("Erreur en envoyant le formulaire :", error);
        return { success: false, error };
    }
}
