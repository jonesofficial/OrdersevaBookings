
import React from "react";
import SearchBox from "../components/SearchBox";

import hotel from "../assets/hotel.jpg";
import stay from "../assets/stay.jpg";
import resort from "../assets/resort.jpg";
import room from "../assets/room.jpg";
import travel from "../assets/travel.jpg";
import nature from "../assets/nature.jpg";

const images = [hotel, stay, resort, room, travel, nature];

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <header className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Orderseva Bookings</h1>
                <nav className="flex gap-4 items-center">
                    <button className="hover:underline">List Your Property</button>
                    <button className="hover:underline">Partner with us</button>
                    <button className="hover:underline">Call us now</button>
                    <div className="bg-white text-blue-900 px-4 py-1 rounded-full font-semibold">
                        Welcome, Jones
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section
                className="relative flex flex-col items-center justify-center text-center bg-cover bg-center h-[400px]"
                style={{ backgroundImage: `url(${hotel})` }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 text-white max-w-4xl w-full flex items-center justify-center gap-10 px-6">
                    <div className="flex-1 max-w-sm">
                        <h2 className="text-3xl font-bold mb-2 text-white text-left">
                            Discover Comfortable Rooms in Orderseva Bookings
                        </h2>
                        <p className="mb-6 text-white text-left">
                            Affordable Rooms | Dharamshalas | Hotels
                        </p>
                        {/* SearchBox styled like modal input */}
                        <div>
                            <SearchBox />
                        </div>
                    </div>
                    <div className="flex-1 max-w-md">
                        {/* Booking Form */}
                        <form className="bg-white p-6 rounded-xl shadow-lg text-gray-800">
                            <input
                                type="text"
                                className="border rounded-md px-4 py-2 outline-none text-sm mb-3 w-full"
                                placeholder="Enter City, Area or Landmark"
                            />
                            <div className="flex gap-2 mb-3">
                                <input
                                    type="date"
                                    className="border rounded-md px-2 py-2 outline-none text-sm w-1/2"
                                    placeholder="Check in"
                                />
                                <input
                                    type="date"
                                    className="border rounded-md px-2 py-2 outline-none text-sm w-1/2"
                                    placeholder="Check out"
                                />
                            </div>
                            <input
                                type="number"
                                min="1"
                                className="border rounded-md px-4 py-2 outline-none text-sm mb-3 w-full"
                                placeholder="Guests (e.g. 2 Adults)"
                            />
                            <button
                                type="submit"
                                className="bg-blue-900 text-white rounded-md py-2 font-semibold w-full"
                            >
                                Book Now
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Deals & Offers */}
            <section className="flex-1 bg-gray-50 py-10 px-6">
                <h3 className="text-2xl font-bold text-center mb-6 text-blue-900">Discover Deals & Offers</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {["Comfortable Rooms", "Affordable Stays", "Family Friendly"].map(
                        (title, idx) => (
                            <div
                                key={idx}
                                className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition"
                            >
                                <img
                                    src={images[idx]}
                                    alt={title}
                                    className="rounded-lg mb-3 object-cover w-full h-48"
                                />
                                <h4 className="font-semibold text-lg">{title}</h4>
                                <p className="text-gray-600 text-sm">
                                    {idx === 0 && "Lowest prices on top-rated hotels"}
                                    {idx === 1 && "Best budget-friendly deals"}
                                    {idx === 2 && "Spacious rooms for family trips"}
                                </p>
                            </div>
                        )
                    )}
                </div>
            </section>
        </div>
    );
}
