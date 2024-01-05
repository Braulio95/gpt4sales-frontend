"use client";
import "./NavBarComp.css";

function NavBarComp() {
    // eslint-disable-next-line react-hooks/exhaustive-deps

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo-container">
                    <div className="navbar-title">Braulio Test</div>
                </div>
                <button className="bg-blue-500 text-white rounded-lg p-4 hover:bg-sky-700">
                    Ir al dashboard
                </button>
            </div>
        </nav>
    );
}

export default NavBarComp;
