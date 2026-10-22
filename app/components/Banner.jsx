import Image from "next/image";
const Banner = () => {
  return (
    <section className=" relative isolate overflow-hidden bg-base-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_50%,color-mix(in_oklch,var(--color-success)_16%,transparent),transparent_55%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-2 text-sm font-bold tracking-widest text-success">
            <span className="h-2 w-2 rounded-full bg-success" />
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Train with intent.
            <span className="block text-success">Log every set.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-base-content/70 sm:text-lg">
            FitLog is your no-nonsense gym companion. Choose a lift, add it to
            today&apos;s plan, and watch your hard work add up week after week.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="/workouts" className="btn btn-success rounded-full px-7">
              Explore workouts
              <span aria-hidden="true">→</span>
            </a>
            <span className="text-sm text-base-content/60">
              Built for consistent progress
            </span>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-base-200 shadow-2xl">
  <Image
    src="/banner.png"
    alt="Athlete training in the gym"
    width={1600}
    height={900}
    priority
    className="block h-auto w-full object-contain"
  />
</div>
      </div>
    </section>
  );
};

export default Banner;