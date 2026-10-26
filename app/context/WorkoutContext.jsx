'use client';

import { createContext, useContext, useState } from "react";

const WorkoutContext = createContext();

const WorkoutProvider = ({ children }) => {
    const [buildlist, setbuildlist] = useState([]);
    const [wishlist, setwishlist] = useState([]);

    const value = {
        buildlist,
        setbuildlist,
        wishlist,
        setwishlist
    };

    return (
        <WorkoutContext.Provider value={value}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvider;

export const useWorkoutContext = () => {
    return useContext(WorkoutContext);
};
