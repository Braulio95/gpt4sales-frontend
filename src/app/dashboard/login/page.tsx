"use client";
import AuthService from "@/app/lib/authUser";
import React, { useState } from "react";

export default function login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event: any) => {
        event.preventDefault();
        try {
            const { user, token } = await AuthService.login(username, password);
            console.log("Usuario autenticado:", user);
            console.log("Token:", token);
            localStorage.setItem("token", token);
            window.location.replace("/dashboard");
        } catch (error) {
            console.error("Error de autenticación:", error);
        }
    };
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 shadow-md rounded-md">
                <h1 className="text-2xl font-bold mb-4">Inicio de Sesión</h1>
                <form>
                    <div className="mb-4">
                        <label
                            className="block text-gray-600 text-sm font-semibold mb-2"
                            htmlFor="username"
                        >
                            Nombre de Usuario
                        </label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Ingrese su nombre de usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-600 text-sm font-semibold mb-2"
                            htmlFor="password"
                        >
                            Contraseña
                        </label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Ingrese su contraseña"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                        type="submit"
                        onClick={handleLogin}
                    >
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
}
