import skills from "../../data/skills.json"

const SkillItem = () => {
  return (
    <>
      <span className="flex flex-col text-md/5 mb-4 rounded-md bg-zinc-200 dark:bg-zinc-700 p-2">
        <h3 className="text-center text-xl font-semibold">Språk:</h3>
        <p className="text-black/70 dark:text-white/70">{skills.language.join(", ")}</p>
      </span>
      <span className="flex flex-col text-md/5 mb-4 rounded-md bg-zinc-200 dark:bg-zinc-700 p-2">
        <h3 className="text-center text-xl font-semibold">Programmering:</h3>
        <p>{skills.programming.join(", ")}</p>
      </span>
      <span className="flex flex-col text-md/5 mb-4 rounded-md bg-zinc-200 dark:bg-zinc-700 p-2">
        <h3 className="text-center text-xl font-semibold">Journalsystem:</h3>
        <p>{skills.journalsystem.join(", ")}</p>
      </span>
      <span className="flex flex-col text-md/5 mb-4 rounded-md bg-zinc-200 dark:bg-zinc-700 p-2">
        <h3 className="text-center text-xl font-semibold">Körkort:</h3>
        <p>{skills.license.join(", ")}</p>
      </span>
    </>
  )
};

export default SkillItem;
