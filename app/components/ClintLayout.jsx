'use client'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Toaster } from "react-hot-toast";
import WorkoutProvider from '../context/WorkoutContext'
const ClintLayout = ({ children }) => {
    return (
        <div>
            <WorkoutProvider>
                <Navbar />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
                <Toaster />
            </WorkoutProvider>
        </div>
    );
};

export default ClintLayout;