import type { Metadata } from "next";
import NavBarComp from "../components/NavBar/NavBarComp";

export const metadata: Metadata = {
    title: "Braulio Test",
    description: "This is my frontend test",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <body className=" bg-gray-950">
            <NavBarComp />
            {children}
        </body>
    );
}
