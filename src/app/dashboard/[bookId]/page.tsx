import getOneBooks from "@/app/lib/getOneBook";
import React from "react";

type Params = {
    params: {
        bookId: string;
    };
};

export default async function BookEditor({ params: { bookId } }: Params) {
    const bookData: Promise<IBook> = getOneBooks(bookId);
    const book = await bookData;
    return (
        <div className="flex items-center justify-center h-screen">
            <form className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
                <label className="block mb-2 text-sm text-gray-600">
                    Title:
                </label>
                <input
                    type="text"
                    name="title"
                    value={book.title}
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                />

                <label className="block mb-2 text-sm text-gray-600">
                    Author:
                </label>
                <input
                    type="text"
                    name="author"
                    value={book.author}
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                />

                <label className="block mb-2 text-sm text-gray-600">
                    ISBN:
                </label>
                <input
                    type="text"
                    name="isbn"
                    value={book.isbn}
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                />

                <label className="block mb-2 text-sm text-gray-600">
                    Sypnosis:
                </label>
                <textarea
                    name="sypnosis"
                    value={book.sypnosis}
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                />

                <label className="block mb-2 text-sm text-gray-600">
                    Cover:
                </label>
                <input
                    type="text"
                    name="cover"
                    value={book.cover}
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
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
