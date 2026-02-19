import skills from "../data/skills.json";

const Skillset = () => {
  return (
    <>
      <h2 className="mb-6 text-4xl font-semibold text-center">Tech Stack</h2>
      <section className="flex flex-wrap gap-6 justify-center px-4 md:px-10 mx-auto">
        {skills.programming.map((group) => (
          <div
            key={group.category}
            className=" flex-1 min-w-64 rounded-2xl bg-white dark:bg-zinc-800 p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-3 text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-zinc-700 text-md font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Skillset;
