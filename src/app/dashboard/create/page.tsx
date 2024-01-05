"use client";
import AuthService from "@/app/lib/authUser";
import createBook from "@/app/lib/createBook";
import React, { useState, useEffect } from "react";

export default function BookCreation() {
    const [formData, setFormData] = useState<IBookBody | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const token = AuthService.getAuthToken();

        if (token) {
            // Si no hay un token, redirige a la página de inicio de sesión

            try {
                if (formData) {
                    await createBook(formData, token);
                    console.log("Libro creado:", formData);
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevFormData: any) => {
            if (!prevFormData) {
                return {
                    [name]: value,
                };
            }

            return {
                ...prevFormData,
                [name]: value,
            };
        });
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form
                className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md"
                onSubmit={handleSubmit}
            >
                <label className="block mb-2 text-sm text-gray-600">
                    Title:
                </label>
                <input
                    type="text"
                    name="title"
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                    onChange={handleChange}
                />

                <label className="block mb-2 text-sm text-gray-600">
                    Author:
                </label>
                <input
                    type="text"
                    name="author"
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                    onChange={handleChange}
                />

                <label className="block mb-2 text-sm text-gray-600">
                    ISBN:
                </label>
                <input
                    type="text"
                    name="isbn"
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                    onChange={handleChange}
                />

                <label className="block mb-2 text-sm text-gray-600">
                    Sypnosis:
                </label>
                <textarea
                    name="sypnosis"
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                    onChange={handleChange}
                />

                <label className="block mb-2 text-sm text-gray-600">
                    Cover:
                </label>
                <input
                    type="text"
                    name="cover"
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
