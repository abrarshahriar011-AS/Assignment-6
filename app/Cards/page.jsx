
import { Suspense } from "react";
import Card from "../components/Card";

const WorkoutCards = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!res.ok) {
        throw new Error("Could not load workouts");
    }

    const workouts = await res.json();

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout) => (
                <Card key={workout.id} item={workout} />
            ))}
        </div>
    );
};

const Page = () => {
    return (
        <main>
            <Suspense fallback={<p>Loading workouts...</p>}>
                <WorkoutCards />
            </Suspense>
        </main>
    );
};

export default Page;
