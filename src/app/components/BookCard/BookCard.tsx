"use client";
import React, { useState } from "react";
import Popover from "../PopOver/PopOver";

const BookCard = ({ cover, title, author, isbn, sypnosis, id }: IBook) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const handlePopoverToggle = () => {
        setIsPopoverOpen(!isPopoverOpen);
    };
    return (
        <div className="bg-white rounded-xl p-4">
            <img
                src={cover}
                alt={title}
                className="w-full h-48 rounded-md mb-4 object-cover"
            />
            <section>
                <p
                    className="font-bold text-lg bg-blue-500 rounded-lg px-4 text-white hover:bg-sky-700 cursor-pointer"
                    onClick={handlePopoverToggle}
                >
                    {title}
                </p>
                <p className="text-gray-500 text-sm">{author}</p>
                <p className="text-gray-500 text-sm">{isbn}</p>
                <p>{sypnosis}</p>
            </section>
            {isPopoverOpen && (
                <Popover
                    book={{ cover, title, author, isbn, sypnosis, id }}
                    onClose={handlePopoverToggle}
                />
            )}
        </div>
    );
};

export default BookCard;
