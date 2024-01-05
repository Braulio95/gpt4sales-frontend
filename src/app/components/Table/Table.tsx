import React from "react";
import EditIcon from "../../assets/icons/EditIcon";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import "./Table.css";

const Table = ({ tableTitle, headers, rows }: ITableProps) => {
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
                    {rows.map((item, index) => (
                        <tr
                            key={index}
                            style={{
                                background:
                                    index % 2 === 0 ? "#f0f0f0" : "#ffffff",
                            }}
                        >
                            {Object.entries(item).map(([key, value], index) => (
                                <td key={index}>
                                    {key === "password"
                                        ? "*********"
                                        : value.length > 10
                                        ? `${value.slice(0, 10)}...`
                                        : value}
                                </td>
                            ))}
                            <td>
                                <button>
                                    <EditIcon />
                                </button>{" "}
                                |
                                <button>
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
