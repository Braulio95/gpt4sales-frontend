import React from "react";

export default async function deleteBook(id: string, token: string) {
    const response = await fetch(`http://localhost:3000/api/v1/books/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (!response.ok) throw new Error("Error al obtener data");
    return response;
}
