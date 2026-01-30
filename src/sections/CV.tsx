import work from "../../public/work.json";
import education from "../../public/education.json";
import volunteering from "../../public/nonprofit.json";

import type { Work as WorkType } from "../types/work";
import type { Education as EducationType } from "../types/education";
import type { Volunteering as VolunteerType } from "../types/nonprofit";

import WorkItem from "../components/CV/WorkItem";
import EducationItem from "../components/CV/EducationItem";
import SkillItem from "../components/CV/SkillsItem";
import VolunteerItem from "../components/CV/VolunteerItem";

const CV = () => {
  return (
    <>
      <h1 className="mb-6 text-6xl font-semibold text-center">CV</h1>
      <section className="w-full columns-1 md:columns-2 gap-6">
        
        <article className="break-inside-avoid rounded-md bg-zinc-300 dark:bg-zinc-800 p-4 mb-4">
          <h2 className="mb-6 text-2xl font-semibold ">Arbetslivserfarenhet</h2>
          {(work as WorkType[]).map((w) => (
            <WorkItem key={w.title + w.period} {...w} />
          ))}
        </article>
        <article className=" break-inside-avoid rounded-md bg-zinc-300 dark:bg-zinc-800 p-4 mb-4">
          <h2 className="mb-6 text-2xl font-semibold ">Utbildning</h2>
          {(education as EducationType[]).map((e) => (
            <EducationItem key={e.title} {...e} />
          ))}
        </article>

        <article className="break-inside-avoid rounded-md bg-zinc-300 dark:bg-zinc-800 p-4 mb-4">
          <h2 className="mb-6 text-2xl font-semibold ">Ideella åtaganden</h2>
          {(volunteering as VolunteerType[]).map((v) => (
            <VolunteerItem key={v.organization + v.period} {...v} />
          ))}
        </article>

        <article className="break-inside-avoid rounded-md bg-zinc-300 dark:bg-zinc-800 p-4 mb-4">
          <h2 className="mb-6 text-2xl font-semibold">Övriga skills</h2>
          <SkillItem />
        </article>
      </section>
    </>
  );
};

export default CV;
