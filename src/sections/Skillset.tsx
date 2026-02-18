import skills from "../data/skills.json";

const Skillset = () => {
  return (
    <>
      <h2 className="mb-6 text-3xl font-semibold text-center">Tech Stack</h2>
      <section>
        <div className="flex flex-wrap  gap-3 lg:gap-6 justify-center px-4 lg:px-10">
          {skills.programming.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-xl bg-slate-300 dark:bg-zinc-700 text-md lg:text-2xl font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skillset;
