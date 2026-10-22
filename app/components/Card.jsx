import Image from "next/image";
import Link from "next/link";

const Card = ({ item }) => {
  return (
      <Link href={`/workouts/${item.id}`} className="block">
    <div className="w-full overflow-hidden rounded-xl bg-gray-900 p-4 text-white">
      <Image
        src={item.image}
        alt={item.name || "Workout"}
        width={740}
        height={420}
        className="h-56 w-full rounded-lg object-cover"
      />

      <div className="mt-4 flex flex-wrap gap-2">
        {item.muscleGroups?.map((muscle) => (
          <span
            key={muscle}
            className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black"
          >
            {muscle}
          </span>
        ))}
      </div>

      <h2 className="mt-3 text-xl font-bold">{item.name}</h2>
      <p className="mt-1 text-sm text-gray-400">{item.equipment}</p>

      <div className="mt-4 flex justify-between border-t border-gray-700 pt-3 text-sm text-gray-300">
        <span>{item.duration} min</span>
        <span>{item.caloriesBurned} kcal</span>
        <span>★ {item.rating}</span>
      </div>
    </div>
    </Link>
  );
};

export default Card;