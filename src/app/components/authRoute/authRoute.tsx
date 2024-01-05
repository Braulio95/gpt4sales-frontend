"use client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AuthService from "@/app/lib/authUser";

const AuthenticatedRoute = ({ children }: any) => {
    useEffect(() => {
        const checkAuthentication = async () => {
            const token = AuthService.getAuthToken();
            if (!token) {
                // Si no hay un token, redirige a la página de inicio de sesión
                console.log("no autorizado ve a /dashboard/login");
                window.location.replace("/dashboard/login");
            }
        };

        checkAuthentication();
    }, []);

    return children;
};

export default AuthenticatedRoute;
