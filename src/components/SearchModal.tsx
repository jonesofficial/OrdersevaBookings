import { useState } from "react";
import cities from "../data/cities";

type City = { city: string; address: string };

interface SearchModalProps {
    onClose: () => void;
}

const defaultRecent: City[] = [
    cities[8],  // Jaipur
    cities[16]  // Ludhiana
];

export default function SearchModal({ onClose }: SearchModalProps) {
    const [query, setQuery] = useState("");
    const [recentSearches, setRecentSearches] = useState<City[]>(defaultRecent);

    const filteredCities =
        query.trim().length > 0
            ? cities.filter(({ city }) =>
                city.toLowerCase().includes(query.toLowerCase())
            )
            : cities;

    const handleSelect = (cityObj: City) => {
        // Set search input to selected city name
        setQuery(cityObj.city);
        // Update recent searches to include selected city at top, max 2
        setRecentSearches((prev) => {
            const filtered = prev.filter((x) => x.city !== cityObj.city);
            return [cityObj, ...filtered].slice(0, 2);
        });
    };

    return (
        <div className="fixed inset-0 flex justify-center items-start bg-black/40 z-50">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-[420px] mt-10 text-gray-800">
                {/* Header/Search bar */}
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-gray-500"
                    >
                        <circle cx="11" cy="11" r="8" strokeWidth="2" />
                        <path strokeWidth="2" d="M21 21l-4.35-4.35" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search here Location"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-1 outline-none px-2 text-sm text-gray-800 placeholder-gray-400"
                    />
                    <button
                        onClick={onClose}
                        className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                        &#10005;
                    </button>
                </div>

                {/* "Hotels Near Me" */}
                <div
                    className="flex items-center mt-4 mb-2 px-2 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-gray-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 2a8 8 0 0 0 0 16 8 8 0 0 0 0-16zM2 10a8 8 0 0 1 8-8v8h8a8 8 0 0 1-8 8V10H2z" />
                    </svg>
                    <span className="text-sm">Hotels Near Me</span>
                </div>

                {/* Recent Search (2 items) */}
                {recentSearches.length > 0 && (
                    <div className="mt-3">
                        <div className="text-gray-500 text-sm mb-1 text-left">Recent Search</div>
                        <ul>
                            {recentSearches.slice(0, 2).map((item, idx) => (
                                <li
                                    key={idx}
                                    onClick={() => handleSelect(item)}
                                    className="flex items-start gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md text-sm text-left"
                                >
                  <span className="w-5 text-blue-600 mt-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-4 h-4"
                        viewBox="0 0 16 16"
                    >
                      <path d="M8 0a5 5 0 0 1 5 5c0 3.25-5 11-5 11S3 8.25 3 5a5 5 0 0 1 5-5zm0 2a3 3 0 1 0 0 6A3 3 0 0 0 8 2z" />
                    </svg>
                  </span>
                                    <span className="flex flex-col">
                    <span className="font-semibold">{item.city}</span>
                    <span className="text-gray-500 text-xs">{item.address}</span>
                  </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Popular Search (5 items) */}
                <div className="mt-3">
                    <div className="text-gray-500 text-sm mb-1 text-left">Popular Search</div>
                    <ul>
                        {filteredCities.slice(0, 5).map((item, idx) => (
                            <li
                                key={idx}
                                onClick={() => handleSelect(item)}
                                className="flex items-start gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md text-sm text-left"
                            >
                <span className="w-5 text-blue-600 mt-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-4 h-4"
                      viewBox="0 0 16 16"
                  >
                    <path d="M8 0a5 5 0 0 1 5 5c0 3.25-5 11-5 11S3 8.25 3 5a5 5 0 0 1 5-5zm0 2a3 3 0 1 0 0 6A3 3 0 0 0 8 2z" />
                  </svg>
                </span>
                                <span className="flex flex-col">
                  <span className="font-semibold">{item.city}</span>
                  <span className="text-gray-500 text-xs">{item.address}</span>
                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
