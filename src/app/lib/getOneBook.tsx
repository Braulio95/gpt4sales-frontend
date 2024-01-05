import React from "react";

export default async function getOneBooks(id: string) {
    const response = await fetch(`http://localhost:3000/api/v1/books/${id}`);
    if (!response.ok) throw new Error("Error al obtener data");
    return response.json();
}
