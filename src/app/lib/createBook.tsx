import React from "react";

export default async function updateBook(createdBook: IBookBody) {
    const response = await fetch(`http://localhost:3000/api/v1/books/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(createdBook),
    });

    if (!response.ok) {
        throw new Error("Error al crear el libro");
    }

    return response.json();
}
