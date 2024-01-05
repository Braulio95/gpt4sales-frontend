// components/Popover.js

import React from "react";

const Popover = ({ book, onClose }: IPopOverProps) => {
    return (
        <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-black bg-opacity-50">
            <div className="absolute bg-white p-4 rounded shadow-md">
                <img src={book.cover} alt="" className="w-80" />
                <h2 className="text-xl font-bold mb-2">{book.title}</h2>
                <p className="text-gray-500 text-sm">Autor: {book.author}</p>
                <p className="text-gray-500 text-sm">ISBN: {book.isbn}</p>
                <p>{book.sypnosis}</p>
                <button
                    className="mt-4 text-blue-500 cursor-pointer"
                    onClick={onClose}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default Popover;
