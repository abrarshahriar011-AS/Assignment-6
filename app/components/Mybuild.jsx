'use client';

import { useState } from "react";
import { useWorkoutContext } from "../context/WorkoutContext";
import Image from "next/image";
import Link from "next/link";

const Mybuild = () => {
    const { buildlist, setbuildlist, wishlist, setwishlist } = useWorkoutContext();

    const [activetab, setactivetab] = useState("TodaysPlan");

    // Show today's workouts or saved workouts
    let showWorkouts = buildlist;

    if (activetab === "Saved") {
        showWorkouts = wishlist;
    }

    // Remove a workout from today's plan
    const removeWorkout = (id) => {
        const newList = buildlist.filter((item) => item.id !== id);
        setbuildlist(newList);
    };

    // Remove a workout from saved list
    const removeSavedWorkout = (id) => {
        const newList = wishlist.filter((item) => item.id !== id);
        setwishlist(newList);
    };

    // Calculate total minutes
    let totalMinutes = 0;
    let totalCalories = 0;

    buildlist.forEach((item) => {
        totalMinutes = totalMinutes + Number(item.duration || item.minutes || 0);
        totalCalories = totalCalories + Number(item.calories || 0);
    });

    return (
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-white">

            <div>
                <h1 className="text-3xl font-bold">MY PLAN</h1>
                <p className="mt-2 text-sm text-gray-400">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* Workout Statistics */}
            <div className="grid grid-cols-1 gap-4 rounded-2xl border border-gray-800 bg-gray-900 p-5 md:grid-cols-3">

                <div>
                    <p className="text-sm text-gray-400">Exercises</p>
                    <h2 className="text-3xl font-bold text-lime-400">
                        {buildlist.length}
                    </h2>
                </div>

                <div className="border-gray-800 md:border-l md:pl-6">
                    <p className="text-sm text-gray-400">Minutes</p>
                    <h2 className="text-3xl font-bold">{totalMinutes}</h2>
                </div>

                <div className="border-gray-800 md:border-l md:pl-6">
                    <p className="text-sm text-gray-400">Calories</p>
                    <h2 className="text-3xl font-bold">{totalCalories}</h2>
                </div>

            </div>

            {/* Tabs */}
            <div className="flex items-center justify-between gap-3">
                <div className="flex gap-2 rounded-xl border border-gray-800 bg-gray-900 p-1">

                    <button
                        onClick={() => setactivetab("TodaysPlan")}
                        className={`rounded-lg px-4 py-2 text-sm ${
                            activetab === "TodaysPlan"
                                ? "bg-gray-800 text-white"
                                : "text-gray-400"
                        }`}
                    >
                        Todays Plan
                    </button>

                    <button
                        onClick={() => setactivetab("Saved")}
                        className={`rounded-lg px-4 py-2 text-sm ${
                            activetab === "Saved"
                                ? "bg-gray-800 text-white"
                                : "text-gray-400"
                        }`}
                    >
                        Saved ({wishlist.length})
                    </button>

                </div>
            </div>

            {/* Workout Cards */}
            <div className="flex flex-col gap-3">

                {showWorkouts.length > 0 ? (

                    showWorkouts.map((item) => (

                        <div
                            key={item.id}
                            className="flex flex-col items-center gap-4 rounded-2xl border border-gray-800 bg-gray-900 p-4 md:flex-row"
                        >

                            {/* Workout Image */}
                            <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl">
                                <Image
                                    src={item.image}
                                    alt={item.title || item.name || "Workout"}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Workout Information */}
                            <div className="flex-1">
                                <h2 className="font-bold uppercase">
                                    {item.title || item.name}
                                </h2>

                                <p className="text-sm text-gray-400">
                                    {item.equipment || item.type || "Workout"}
                                </p>

                                <div className="mt-2 flex gap-4 text-sm text-gray-300">
                                    <span>
                                        🕒 {item.duration || item.minutes || 0} min
                                    </span>

                                    <span>
                                        🔥 {item.calories || 0} kcal
                                    </span>

                                    <span>
                                        ⭐ {item.rating || "N/A"}
                                    </span>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center gap-2">

                                <Link
                                    href={`/Cards/${item.id}`}
                                    className="rounded-full border border-gray-700 px-4 py-2 text-sm hover:bg-gray-800"
                                >
                                    View Details
                                </Link>

                                {activetab === "TodaysPlan" ? (

                                    <button
                                        onClick={() => removeWorkout(item.id)}
                                        className="rounded-full bg-lime-400 px-4 py-2 text-sm font-bold text-black hover:bg-lime-300"
                                    >
                                        Remove
                                    </button>

                                ) : (

                                    <button
                                        onClick={() => removeSavedWorkout(item.id)}
                                        className="rounded-full bg-lime-400 px-4 py-2 text-sm font-bold text-black hover:bg-lime-300"
                                    >
                                        Remove Saved
                                    </button>

                                )}

                            </div>

                        </div>

                    ))

                ) : (

                    <div className="flex min-h-60 flex-col items-center justify-center rounded-2xl border border-gray-800 bg-gray-900 p-6 text-center">

                        <h2 className="text-xl font-bold">
                            NOTHING HERE YET
                        </h2>

                        <p className="mt-2 text-sm text-gray-400">
                            {activetab === "Saved"
                                ? "Save your favorite workouts to see them here."
                                : "Browse the library and add a workout to your plan."}
                        </p>

                        <Link
                            href="/Cards"
                            className="mt-5 rounded-full bg-lime-400 px-5 py-3 font-bold text-black hover:bg-lime-300"
                        >
                            Go to workouts
                        </Link>

                    </div>

                )}

            </div>

        </div>
    );
};

export default Mybuild;