import React from "react";

export default async function updateBook(id: string, updatedBook: IBookBody) {
    const response = await fetch(`http://localhost:3000/api/v1/books/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBook),
    });

    if (!response.ok) {
        throw new Error("Error al actualizar el libro");
    }

    return response.json();
}
