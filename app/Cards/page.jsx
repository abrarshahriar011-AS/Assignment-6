import { Suspense } from "react";
import Card from "../components/Card";

async function WorkoutCards() {
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
}

export default function Page() {
    return (
        <main>
            <Suspense fallback={<p>Loading workouts...</p>}>
                <WorkoutCards />
            </Suspense>
        </main>
    );
}