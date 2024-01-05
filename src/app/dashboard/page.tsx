import React from "react";
import Table from "../components/Table/Table";
import getAllBooks from "@/app/lib/getAllBooks";
import Link from "next/link";
import AuthenticatedRoute from "../components/authRoute/authRoute";

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
        <AuthenticatedRoute>
            <div className="flex items-center justify-center h-screen">
                <div className="bg-white p-8 shadow-md rounded-md">
                    <div className="flex">
                        <h1 className="text-2xl font-bold mb-4 flex-grow">
                            Bienvenido al Dashboard
                        </h1>
                        <Link href="/dashboard/create">
                            <button className="bg-green-500 text-white rounded-lg p-4 hover:bg-green-700">
                                Crear libro +
                            </button>
                        </Link>
                    </div>
                    <Table
                        headers={bookHeaders}
                        rows={books}
                        tableTitle="Todos los libros"
                    />
                </div>
            </div>
        </AuthenticatedRoute>
    );
}
