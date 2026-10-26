'use client';

import { useWorkoutContext } from "./WorkoutContext";
import { useState, useEffect } from "react";

const WorkoutButtons = ({ item }) => {
  const { buildlist, setbuildlist, wishlist, setwishlist } =
    useWorkoutContext();

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message === "") return;

    const timer = setTimeout(() => {
      setMessage("");
    }, 2500);

    return () => clearTimeout(timer);
  }, [message]);

  const addToPlan = () => {
    const alreadyAdded = buildlist.find(
      (workout) => String(workout.id) === String(item.id)
    );

    if (alreadyAdded) {
      setMessage("Already in today's plan!");
      return;
    }

    const newWorkout = {
      ...item,
      title: item.name,
      minutes: item.duration,
      calories: item.caloriesBurned,
    };

    setbuildlist([...buildlist, newWorkout]);
    setMessage("Added to today's plan!");
  };

  const saveWorkout = () => {
    const alreadySaved = wishlist.find(
      (workout) => String(workout.id) === String(item.id)
    );

    if (alreadySaved) {
      setMessage("Already saved!");
      return;
    }

    const newWorkout = {
      ...item,
      title: item.name,
      minutes: item.duration,
      calories: item.caloriesBurned,
    };

    setwishlist([...wishlist, newWorkout]);
    setMessage("Workout saved successfully!");
  };

  return (
    <div>
      {message !== "" && (
        <div className="fixed right-5 top-5 z-50 rounded-lg bg-lime-400 px-5 py-3 font-bold text-black shadow-lg">
          {message}
        </div>
      )}

      <div className="flex flex-wrap gap-4">
        <button
          onClick={addToPlan}
          className="mt-6 rounded-lg bg-lime-400 px-5 py-3 font-bold text-black hover:bg-lime-300"
        >
          + Add to todays plan
        </button>

        <button
          onClick={saveWorkout}
          className="mt-6 rounded-lg border border-gray-700 px-5 py-3 font-bold text-white hover:bg-gray-800"
        >
          Save for later
        </button>
      </div>
    </div>
  );
};

export default WorkoutButtons;