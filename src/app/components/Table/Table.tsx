"use client";
import React, { useEffect, useState } from "react";
import EditIcon from "../../assets/icons/EditIcon";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import "./Table.css";
import Link from "next/link";
import deleteBook from "@/app/lib/deleteBook";
import getAllBooks from "@/app/lib/getAllBooks";

const Table = ({ tableTitle, headers, rows }: ITableProps) => {
    const [newRows, setNewRows] = useState(rows);

    const handleDelete = async (id: string) => {
        try {
            await deleteBook(id);
            const dataBook: Promise<IBook[]> = getAllBooks();
            const books = await dataBook;
            setNewRows(books);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect;
    return (
        <div>
            <h3>{tableTitle}</h3>
            <table>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index}>{header.toUpperCase()}</th>
                        ))}
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {newRows.map((item, index) => (
                        <tr
                            key={index}
                            style={{
                                background:
                                    index % 2 === 0 ? "#f0f0f0" : "#ffffff",
                            }}
                        >
                            {Object.entries(item).map(([key, value], index) => (
                                <td key={index}>
                                    {value.length > 10
                                        ? `${value.slice(0, 10)}...`
                                        : value}
                                </td>
                            ))}
                            <td>
                                <Link href={`/dashboard/${item.id}`}>
                                    <button>
                                        <EditIcon />
                                    </button>
                                </Link>{" "}
                                |
                                <button
                                    onClick={() =>
                                        handleDelete(item.id.toString())
                                    }
                                >
                                    <DeleteIcon />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
