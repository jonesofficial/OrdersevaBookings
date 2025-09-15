import { useState } from "react";
import SearchModal from "./SearchModal";

export default function SearchBox() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            {/* Search Box styled like the modal's search input */}
            <div
                onClick={() => setIsOpen(true)}
                className="flex items-center border border-gray-300 rounded-lg px-3 py-2 shadow-sm cursor-pointer text-gray-600 max-w-md mx-auto bg-white"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-black"
                >
                    <circle cx="11" cy="11" r="8" strokeWidth="2" />
                    <path strokeWidth="2" d="M21 21l-4.35-4.35" />
                </svg>
                <input
                    type="text"
                    placeholder="Search here Location"
                    className="flex-1 outline-none px-2 text-sm text-gray-800 placeholder-gray-400 cursor-pointer bg-white"
                    readOnly
                />
            </div>
            {/* Modal */}
            {isOpen && <SearchModal onClose={() => setIsOpen(false)} />}
        </div>
    );
}
