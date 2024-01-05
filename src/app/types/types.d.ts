


interface IBook {
    id: number;
    title: string;
    author: string;
    isbn: string;
    sypnosis: string;
    cover: string;
}

interface IPopOverProps {
    book: IBook;
    onClose: MouseEventHandler<HTMLButtonElement>;
}

interface ITableProps {
    tableTitle: string;
    headers: string[];
    rows: IBook[];
}