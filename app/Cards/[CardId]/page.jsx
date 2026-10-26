import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import WorkoutButtons from "../../context/WorkoutButtons";
export const instant = false;
export const generateStaticParams = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const workouts = await res.json();

  return workouts.map((workout) => ({
    CardId: String(workout.id),
  }));
};

const CardDetails = async ({ params }) => {
  const { CardId } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${CardId}`
  );

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("Failed to fetch workout");
  }

  const item = await res.json();

  return (
    <main className="min-h-screen bg-[#101114] p-6 text-white">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/Cards"
          className="mb-6 inline-block text-lime-400 hover:text-lime-300"
        >
          ← Back to workouts
        </Link>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Image
              src={item.image}
              alt={item.name}
              width={800}
              height={800}
              className="h-[400px] w-full rounded-xl object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold uppercase">
              {item.name}
            </h1>

            <p className="mt-3 text-gray-400">
              {item.description || "Improve your strength with this workout."}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {item.muscleGroups?.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-lime-400 px-3 py-1 text-sm font-bold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-gray-800 bg-gray-900 p-4">
              <p className="border-b border-gray-700 py-3">
                Equipment:
                <span className="float-right">{item.equipment}</span>
              </p>

              <p className="border-b border-gray-700 py-3">
                Duration:
                <span className="float-right">{item.duration} min</span>
              </p>

              <p className="border-b border-gray-700 py-3">
                Calories:
                <span className="float-right">
                  {item.caloriesBurned} kcal
                </span>
              </p>

              <p className="border-b border-gray-700 py-3">
                Difficulty:
                <span className="float-right">
                  {item.difficulty || "Intermediate"}
                </span>
              </p>

              <p className="py-3">
                Rating:
                <span className="float-right">
                  ★ {item.rating ?? "N/A"}
                </span>
              </p>
            </div>

            <h2 className="mt-6 text-xl font-bold">Instructions</h2>

            <ol className="mt-3 list-inside list-decimal space-y-3 text-sm text-gray-300">
              {item.instructions?.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>

            <WorkoutButtons item={item} />
          </div>
        </div>
      </div>
    </main>
  );
};
export default CardDetails;