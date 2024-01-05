import React from "react";
import BookCard from "../BookCard/BookCard"; // Asume que ya tienes un componente Card creado
import getAllBooks from "@/app/lib/getAllBooks";

async function CardContainer() {
    const dataBook: Promise<IBook[]> = getAllBooks();
    const books = await dataBook;
    return (
        <div className="max-w-7xl container mx-auto p-4">
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
                {books.map((item) => (
                    <BookCard
                        key={item.id}
                        id={item.id}
                        cover={item.cover}
                        title={item.title}
                        author={item.author}
                        isbn={item.isbn}
                        sypnosis={item.sypnosis}
                    />
                ))}
            </div>
        </div>
    );
}

export default CardContainer;
