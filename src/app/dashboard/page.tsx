import React from "react";
import Table from "../components/Table/Table";
import getAllBooks from "@/app/lib/getAllBooks";

export default async function Dashboard() {
    const dataBook: Promise<IBook[]> = getAllBooks();
    const books = await dataBook;
    const bookHeaders = [
        "id",
        "titulo",
        "autor",
        "isbn",
        "sipnosis",
        "portada",
        "creacion",
        "edición",
    ];
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 shadow-md rounded-md">
                <h1 className="text-2xl font-bold mb-4">
                    Bienvenido al Dashboard
                </h1>
                <Table
                    headers={bookHeaders}
                    rows={books}
                    tableTitle="Todos los libros"
                />
            </div>
        </div>
    );
}
