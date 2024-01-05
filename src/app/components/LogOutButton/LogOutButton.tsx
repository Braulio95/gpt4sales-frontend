"use client";
import AuthService from "@/app/lib/authUser";
import React from "react";

export default function LogOutButton() {
    const handleLogout = async () => {
        await AuthService.logout();
        window.location.replace("/dashboard/login");
    };
    return (
        <button
            className="bg-red-500 text-white rounded-lg p-4 hover:bg-red-700"
            onClick={handleLogout}
        >
            Cerrar sesión
        </button>
    );
}
