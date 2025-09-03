import skills from "../../../public/skills.json"

const SkillItem = () => {
  return (
    <>
      <span className="flex flex-col text-lg/5 mb-4 rounded-md bg-zinc-200 dark:bg-zinc-700 p-2">
        <p className="text-center font-semibold">Språk:</p>
        <p>{skills.language.join(", ")}</p>
      </span>
      <span className="flex flex-col text-lg/5 mb-4 rounded-md bg-zinc-200 dark:bg-zinc-700 p-2">
        <p className="text-center font-semibold">Programmering:</p>
        <p>{skills.programming.join(", ")}</p>
      </span>
      <span className="flex flex-col text-lg/5 mb-4 rounded-md bg-zinc-200 dark:bg-zinc-700 p-2">
        <p className="text-center font-semibold">Journalsystem:</p>
        <p>{skills.journalsystem.join(", ")}</p>
      </span>
      <span className="flex flex-col text-lg/5 mb-4 rounded-md bg-zinc-200 dark:bg-zinc-700 p-2">
        <p className="text-center font-semibold">Körkort:</p>
        <p>{skills.license.join(", ")}</p>
      </span>
    </>
  )
};

export default SkillItem;
