interface Iuser {
    username: string;
    password: string;
}

interface IAuthResponse {
    user: Iuser;
    token: string;
}

const API_BASE_URL = "http://localhost:3000/api/v1";
const LOGIN_ENDPOINT = "/auth/login";

const AuthService = {
    login: async (
        username: string,
        password: string
    ): Promise<IAuthResponse> => {
        const response = await fetch(`${API_BASE_URL}${LOGIN_ENDPOINT}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error("Error de autenticación");
        }

        return response.json();
    },
    getAuthToken: () => {
        if (typeof localStorage !== "undefined") {
            return localStorage.getItem("token");
        } else {
            console.error("localStorage is not available in this environment");
            return null;
        }
    },
    logout: () => {
        localStorage.removeItem("token");
    },
};

export default AuthService;
