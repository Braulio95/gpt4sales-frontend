"use client";
import AuthenticatedRoute from "@/app/components/authRoute/authRoute";
import AuthService from "@/app/lib/authUser";
import getOneBooks from "@/app/lib/getOneBook";
import updateBook from "@/app/lib/updateBook";
import React, { useState, useEffect } from "react";

type Params = {
    params: {
        bookId: string;
    };
};

export default function BookEditor({ params: { bookId } }: Params) {
    const [formData, setFormData] = useState<IBookBody | null>(null);
    const token = AuthService.getAuthToken();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const bookData = await getOneBooks(bookId);
                setFormData(bookData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [bookId]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (token) {
            try {
                if (formData) {
                    await updateBook(bookId, formData, token);
                    console.log("Libro actualizado:", formData);
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

    if (!formData) {
        return <div>Cargando...</div>;
    }

    return (
        <AuthenticatedRoute>
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
                        value={formData.title}
                        className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                        onChange={handleChange}
                    />

                    <label className="block mb-2 text-sm text-gray-600">
                        Author:
                    </label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                        onChange={handleChange}
                    />

                    <label className="block mb-2 text-sm text-gray-600">
                        ISBN:
                    </label>
                    <input
                        type="text"
                        name="isbn"
                        value={formData.isbn}
                        className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                        onChange={handleChange}
                    />

                    <label className="block mb-2 text-sm text-gray-600">
                        Sypnosis:
                    </label>
                    <textarea
                        name="sypnosis"
                        value={formData.sypnosis}
                        className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                        onChange={handleChange}
                    />

                    <label className="block mb-2 text-sm text-gray-600">
                        Cover:
                    </label>
                    <input
                        type="text"
                        name="cover"
                        value={formData.cover}
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
        </AuthenticatedRoute>
    );
}
